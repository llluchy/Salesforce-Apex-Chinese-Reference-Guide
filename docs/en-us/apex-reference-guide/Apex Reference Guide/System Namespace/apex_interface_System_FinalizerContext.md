---
doc_id: "apex_interface_System_FinalizerContext"
---

# FinalizerContext Interface

Represents the parameter type of the `execute` method in a class that implements the Finalizer interface. This interface is implemented internally by Apex. The System.FinalizerContext interface contains four methods: `getAsyncApexJobId`, `getRequestId`, `getResult`, and `getException`. An instance of `System.FinalizerContext` is injected by the Apex runtime engine as an argument to the `Finalizer.execute` method.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## See Also

- [FinalizerContext Methods](atlas.en-us.apexref.meta/apexref/apex_interface_System_FinalizerContext.htm#apex_System_FinalizerContext_methods)

## FinalizerContext Methods

The following are methods for `FinalizerContext`.

## See Also

- [getAsyncApexJobId()](atlas.en-us.apexref.meta/apexref/apex_interface_System_FinalizerContext.htm#apex_System_FinalizerContext_getAsyncApexJobId)
- [getException()](atlas.en-us.apexref.meta/apexref/apex_interface_System_FinalizerContext.htm#apex_System_FinalizerContext_getException)
- [getRequestId()](atlas.en-us.apexref.meta/apexref/apex_interface_System_FinalizerContext.htm#apex_System_FinalizerContext_getRequestId)
- [getResult()](atlas.en-us.apexref.meta/apexref/apex_interface_System_FinalizerContext.htm#apex_System_FinalizerContext_getResult)

### getAsyncApexJobId()

Returns the ID of the Queueable job for which this finalizer is defined.

#### Signature

`public Id getAsyncApexJobId()`

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getException()

Returns the exception with which the Queueable job failed when `getResult` is `UNHANDLED_EXCEPTION`, null otherwise.

#### Signature

`public Exception getException()`

#### Return Value

Type: Exception

### getRequestId()

Returns the request ID that can be correlated with Event Monitoring logs. To correlate the request with the AsyncApexJob table, use the `getAsyncApexJobId` method instead. The Queueable job and the Finalizer execution share the same request ID.

#### Signature

`public String getRequestId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getResult()

Returns the `System.ParentJobResult` enum, which represents the result of the parent asynchronous Apex Queueable job to which the finalizer is attached. The enum takes these values: `SUCCESS`, `UNHANDLED_EXCEPTION`.

#### Signature

`public System.ParentJobResult getResult()`

#### Return Value

Type: [System.ParentJobResult](atlas.en-us.apexref.meta/apexref/apex_enum_System_ParentJobResult.htm "Specifies the success or exception status of the parent Queueable job to which a Transaction Finalizer is attached.")
