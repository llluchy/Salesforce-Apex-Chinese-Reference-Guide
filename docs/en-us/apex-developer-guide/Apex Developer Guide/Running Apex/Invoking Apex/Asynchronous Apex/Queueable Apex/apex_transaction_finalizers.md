---
doc_id: "apex_transaction_finalizers"
---

# Transaction Finalizers

The Transaction Finalizers feature enables you to attach actions, using the `System.Finalizer` interface, to asynchronous Apex jobs that use the Queueable framework. A specific use case is to design recovery actions when a Queueable job fails.

The Transaction Finalizers feature provides a direct way for you to specify actions to be taken when asynchronous jobs succeed or fail. Before Transaction Finalizers, you could only take these two actions for asynchronous job failures:

-   Poll the status of `AsyncApexJob` using a SOQL query and re-enqueue the job if it fails
-   Fire BatchApexErrorEvents when a batch Apex method encounters an unhandled exception

With transaction finalizers, you can attach a post-action sequence to a Queueable job and take relevant actions based on the job execution result.

A Queueable job that failed due to an unhandled exception can be successively re-enqueued five times by a transaction finalizer. This limit applies to a series of consecutive Queueable job failures. The counter is reset when the Queueable job completes without an unhandled exception.

Finalizers can be implemented as an inner class. Also, you can implement both Queueable and Finalizer interfaces with the same class.

The Queueable job and the Finalizer run in separate Apex and Database transactions. For example, the Queueable can include DML, and the Finalizer can include REST callouts. Using a finalizer doesn’t count as an extra execution against your daily Async Apex limit. Synchronous governor limits apply for the Finalizer transaction, except in these cases where asynchronous limits apply:

-   Total heap size
-   Maximum number of Apex jobs added to the queue with `System.enqueueJob`
-   Maximum number of methods with the `future` annotation allowed per Apex invocation

For more information on governor limits, see [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.").

## System.Finalizer Interface

The `System.Finalizer` interface includes the `execute` method: 

```apex
global void execute(System.FinalizerContext ctx) {}
```

 This method is called on the provided Finalizer instance for every enqueued job with a finalizer attached. Within the `execute` method, you can define the actions to be taken at the end of the Queueable job. An instance of `System.FinalizerContext` is injected by the Apex runtime engine as an argument to the `execute` method.

## System.FinalizerContext Interface

The `System.FinalizerContext` interface contains four methods.

-   `getAsyncApexJobId` method: 

```apex
global Id getAsyncApexJobId {}
```

 Returns the ID of the Queueable job for which this finalizer is defined.
-   `getRequestId` method: 

```apex
global String getRequestId {}
```

 Returns the request ID, a string that uniquely identifies the request, and can be correlated with Event Monitoring logs. To correlate with the AsyncApexJob table, use the `getAsyncApexJobId` method instead. The Queueable job and the Finalizer execution both share the (same) request ID.
-   `getResult` method: 

```apex
global System.ParentJobResult getResult {}
```

 Returns the `System.ParentJobResult` enum, which represents the result of the parent asynchronous Apex Queueable job to which the finalizer is attached. The enum takes these values: `SUCCESS`, `UNHANDLED_EXCEPTION`.
-   `getException` method: 

```apex
global System.Exception getException {}
```

 Returns the exception with which the Queueable job failed when `getResult` is `UNHANDLED_EXCEPTION`, null otherwise.

Attach the finalizer to your Queueable jobs using the `System.attachFinalizer` method.

1.  Define a class that implements the `System.Finalizer` interface.
2.  Attach a finalizer within a Queueable job’s `execute` method. To attach the finalizer, invoke the `System.attachFinalizer` method, using as argument the instantiated class that implements the System.Finalizer interface. 

```apex
global void attachFinalizer(Finalizer finalizer) {}
```

## Implementation Details

-   Only one finalizer instance can be attached to any Queueable job.
-   You can enqueue a single asynchronous Apex job (Queueable, Future, or Batch) in the finalizer’s implementation of the `execute` method.
-   Callouts are allowed in finalizer implementations.
-   The Finalizer framework uses the state of the Finalizer object (if attached) at the end of Queueable execution. Mutation of the Finalizer state, after it’s attached, is therefore supported.
-   Variables that are declared `transient` are ignored by serialization and deserialization, and therefore don’t persist in the Transaction Finalizer.

## Logging Finalizer Example

This example demonstrates the use of Transaction Finalizers in logging messages from a Queueable job, regardless of whether the job succeeds or fails. The LoggingFinalizer class here implements both Queueable and Finalizer interfaces. The Queueable implementation instantiates the finalizer, attaches it, and then invokes the addLog() method to buffer log messages. The Finalizer implementation of LoggingFinalizer includes the addLog(message, source) method that allows buffering log messages from the Queueable job into finalizer's state. When the Queueable job completes, the finalizer instance commits the buffered log. The finalizer state is preserved even if the Queueable job fails, and can be accessed for use in DML in finalizer implementation or execution.

```apex
public class LoggingFinalizer implements Finalizer, Queueable {

  // Queueable implementation
  // A queueable job that uses LoggingFinalizer to buffer the log
  // and commit upon exit, even if the queueable execution fails

    public void execute(QueueableContext ctx) {
        String jobId = '' + ctx.getJobId();
        System.debug('Begin: executing queueable job: ' + jobId);
        try {
            // Create an instance of LoggingFinalizer and attach it
            // Alternatively, System.attachFinalizer(this) can be used instead of instantiating LoggingFinalizer
            LoggingFinalizer f = new LoggingFinalizer();
            System.attachFinalizer(f);

            // While executing the job, log using LoggingFinalizer.addLog()
            // Note that addlog() modifies the Finalizer's state after it is attached 
            DateTime start = DateTime.now();
            f.addLog('About to do some work...', jobId);

            while (true) {
              // Results in limit error
            }
        } catch (Exception e) {
            System.debug('Error executing the job [' + jobId + ']: ' + e.getMessage());
        } finally {
            System.debug('Completed: execution of queueable job: ' + jobId);
        }
    }

  // Finalizer implementation
  // Logging finalizer provides a public method addLog(message,source) that allows buffering log lines from the Queueable job.
  // When the Queueable job completes, regardless of success or failure, the LoggingFinalizer instance commits this buffered log.
  // Custom object LogMessage__c has four custom fields-see addLog() method.

    // internal log buffer
    private List logRecords = new List();

    public void execute(FinalizerContext ctx) {
        String parentJobId = ctx.getAsyncApexJobId();
        System.debug('Begin: executing finalizer attached to queueable job: ' + parentJobId);

        // Update the log records with the parent queueable job id
        System.Debug('Updating job id on ' + logRecords.size() + ' log records');
        for (LogMessage__c log : logRecords) {
            log.Request__c = parentJobId; // or could be ctx.getRequestId()
        }
        // Commit the buffer
        System.Debug('committing log records to database');
        Database.insert(logRecords, false);

        if (ctx.getResult() == ParentJobResult.SUCCESS) {
            System.debug('Parent queueable job [' + parentJobId + '] completed successfully.');
        } else {
            System.debug('Parent queueable job [' + parentJobId + '] failed due to unhandled exception: ' + ctx.getException().getMessage());
            System.debug('Enqueueing another instance of the queueable...');
        }
        System.debug('Completed: execution of finalizer attached to queueable job: ' + parentJobId);
    }

    public void addLog(String message, String source) {
        // append the log message to the buffer
        logRecords.add(new LogMessage__c(
            DateTime__c = DateTime.now(),
            Message__c = message,
            Request__c = 'setbeforecommit',
            Source__c = source
        ));
    }
}
```

## Retry Queueable Example

This example demonstrates how to re-enqueue a failed Queueable job in its finalizer. It also shows that jobs can be re-enqueued up to a queueable chaining limit of 5 retries.

```apex
public class RetryLimitDemo implements Finalizer, Queueable {

  // Queueable implementation
  public void execute(QueueableContext ctx) {
    String jobId = '' + ctx.getJobId();
    System.debug('Begin: executing queueable job: ' + jobId);
    try {
        Finalizer finalizer = new RetryLimitDemo();
        System.attachFinalizer(finalizer);
        System.debug('Attached finalizer');
        Integer accountNumber = 1;
        while (true) { // results in limit error
          Account a = new Account();
          a.Name = 'Account-Number-' + accountNumber;
          insert a;
          accountNumber++;
        }
    } catch (Exception e) {
        System.debug('Error executing the job [' + jobId + ']: ' + e.getMessage());
    } finally {
        System.debug('Completed: execution of queueable job: ' + jobId);
    }
  }

  // Finalizer implementation
  public void execute(FinalizerContext ctx) {
    String parentJobId = '' + ctx.getAsyncApexJobId();
    System.debug('Begin: executing finalizer attached to queueable job: ' + parentJobId);
    if (ctx.getResult() == ParentJobResult.SUCCESS) {
        System.debug('Parent queueable job [' + parentJobId + '] completed successfully.');
    } else {
        System.debug('Parent queueable job [' + parentJobId + '] failed due to unhandled exception: ' + ctx.getException().getMessage());
        System.debug('Enqueueing another instance of the queueable...');
        String newJobId = '' + System.enqueueJob(new RetryLimitDemo()); // This call fails after 5 times when it hits the chaining limit
        System.debug('Enqueued new job: ' + newJobId);
    }
    System.debug('Completed: execution of finalizer attached to queueable job: ' + parentJobId);
  }
}
```

## Considerations

If a job request is terminated unexpectedly, such as a database shutdown during system upgrade, the transaction finalizer can fail to execute.

## Best Practices

We urge ISVs to exercise caution in using global Finalizers with state-mutating methods in packages. If a subscriber org’s implementation invokes such methods in the global Finalizer, it can result in unexpected behavior. Examine all state-mutating methods to see how they affect the finalizer state and overall behavior.
