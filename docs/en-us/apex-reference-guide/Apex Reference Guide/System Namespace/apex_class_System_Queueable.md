---
doc_id: "apex_class_System_Queueable"
---

# Queueable Interface

Enables the asynchronous execution of Apex jobs that can be monitored.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

To execute Apex as an asynchronous job, implement the `Queueable` interface and add the processing logic in your implementation of the `execute` method.

To implement the `Queueable` interface, you must first declare a class with the `implements` keyword as follows: 

```apex
public class MyQueueableClass implements Queueable {
```

Next, your class must provide an implementation for the following method:

```apex
public void execute(QueueableContext context) {
    // Your code here
}
```

Your class and method implementation must be declared as `public` or `global`.

To submit your class for asynchronous execution, call the `System.enqueueJob` by passing it an instance of your class implementation of the `Queueable` interface as follows:

```apex
ID jobID = System.enqueueJob(new MyQueueableClass());
```

## See Also

- [Queueable Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_Queueable.htm#apex_System_Queueable_methods)
- [Queueable Example Implementation](atlas.en-us.apexref.meta/apexref/apex_class_System_Queueable.htm#apex_Queueable_example)
- [Apex Developer Guide: Queueable Apex](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_queueing_jobs.htm)

## Queueable Methods

The following are methods for `Queueable`.

## See Also

- [execute(context)](atlas.en-us.apexref.meta/apexref/apex_class_System_Queueable.htm#apex_System_Queueable_execute)

### execute(context)

Executes the queueable job.

#### Signature

`public void execute(QueueableContext context)`

#### Parameters

-   **context**: Type: [QueueableContext](atlas.en-us.apexref.meta/apexref/apex_interface_system_queueablecontext.htm#apex_interface_system_queueablecontext "Represents the parameter type of the execute() method in a class that implements the Queueable interface and contains the job ID. This interface is implemented internally by Apex.") Contains the job ID.

#### Return Value

Type: Void

## Queueable Example Implementation

This example is an implementation of the `Queueable` interface. The `execute` method in this example inserts a new account.

```apex
public class AsyncExecutionExample implements Queueable {
    public void execute(QueueableContext context) {
        Account a = new Account(Name='Acme',Phone='(415) 555-1212');
        insert a;        
    }
}
```

To add this class as a job on the queue, call this method:

```apex
ID jobID = System.enqueueJob(new AsyncExecutionExample());
```

After you submit your queueable class for execution, the job is added to the queue and will be processed when system resources become available. You can monitor the status of your job programmatically by querying AsyncApexJob or through the user interface in Setup by entering Apex Jobs in the Quick Find box, then selecting **Apex Jobs**.

To query information about your submitted job, perform a SOQL query on AsyncApexJob by filtering on the job ID that the `System.enqueueJob` method returns. This example uses the jobID variable that was obtained in the previous example.

```apex
AsyncApexJob jobInfo = [SELECT Status,NumberOfErrors FROM AsyncApexJob WHERE Id=:jobID];
```

Similar to future jobs, queueable jobs don’t process batches, and so the number of processed batches and the number of total batches are always zero.

### Testing Queueable Jobs

This example shows how to test the execution of a queueable job in a test method. A queueable job is an asynchronous process. To ensure that this process runs within the test method, the job is submitted to the queue between the `Test.startTest` and `Test.stopTest` block. The system executes all asynchronous processes started in a test method synchronously after the `Test.stopTest` statement. Next, the test method verifies the results of the queueable job by querying the account that the job created.

```apex
@isTest
public class AsyncExecutionExampleTest {
    static testmethod void test1() {
        // startTest/stopTest block to force async processes 
        //   to run in the test.
        Test.startTest();        
        System.enqueueJob(new AsyncExecutionExample());
        Test.stopTest();
        
        // Validate that the job has run
        // by verifying that the record was created.
        // This query returns only the account created in test context by the 
        // Queueable class method.
        Account acct = [SELECT Name,Phone FROM Account WHERE Name='Acme' LIMIT 1];
        System.assertNotEquals(null, acct);
        System.assertEquals('(415) 555-1212', acct.Phone);
    }
}
```

:::tip Note
The ID of a queueable Apex job isn’t returned in test context—`System.enqueueJob` returns `null` in a running test.
:::
