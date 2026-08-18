---
doc_id: "apex_interface_System_Finalizer"
---

# Finalizer Interface

Use this interface to attach actions that are executed at the end of asynchronous Queueable job executions. A specific use case is to design recovery actions when a Queueable job fails.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

The `execute` method is called on the provided `Finalizer` instance for every enqueued job that has an attached finalizer. Within the `execute` method, you can define the actions to be taken at the end of the Queueable job. An instance of `System.FinalizerContext` is injected by the Apex runtime engine as an argument to the `execute` method.

## See Also

- [Finalizer Methods](atlas.en-us.apexref.meta/apexref/apex_interface_System_Finalizer.htm#apex_System_Finalizer_methods)
- [Finalizer Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_System_Finalizer.htm#apex_interface_System_Finalizer_Example)

## Finalizer Methods

The following are methods for `Finalizer`.

## See Also

- [execute(finalizerContext)](atlas.en-us.apexref.meta/apexref/apex_interface_System_Finalizer.htm#apex_System_Finalizer_execute)

### execute(finalizerContext)

The `execute` method is called on the provided `Finalizer` instance for every enqueued job that has an attached finalizer. Within the `execute` method, you can define the actions to be taken at the end of the Queueable job.

#### Signature

`public void execute(System.FinalizerContext finalizerContext)`

#### Parameters

-   **finalizerContext**: Type: [FinalizerContext Interface](atlas.en-us.apexref.meta/apexref/apex_interface_System_FinalizerContext.htm#apex_interface_System_FinalizerContext "Represents the parameter type of the execute method in a class that implements the Finalizer interface. This interface is implemented internally by Apex. The System.FinalizerContext interface contains four methods: getAsyncApexJobId, getRequestId, getResult, and getException. An instance of System.FinalizerContext is injected by the Apex runtime engine as an argument to the Finalizer.execute method.")

#### Return Value

Type: void

## Finalizer Example Implementation

For a sample implementation of the `System.Finalizer` interface, see the Logging Finalizer Example in [Transaction Finalizers](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_transaction_finalizers.htm).
