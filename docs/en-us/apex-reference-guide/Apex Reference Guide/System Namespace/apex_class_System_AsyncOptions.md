---
doc_id: "apex_class_System_AsyncOptions"
---

# AsyncOptions Class

Contains maximum stack depths for queueable transactions and the minimum queueable delay in minutes. Passed as parameter to the `System.enqueueJob()` method to define a unique queueable job signature, the maximum stack depth for queueable transactions and the minimum queueable delay in minutes.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## See Also

- [AsyncOptions Properties](atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncOptions.htm#apex_System_AsyncOptions_properties)
- [Apex Developer Guide: Queueable Apex](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_queueing_jobs.htm)

-   [*Apex Developer Guide*: Detecting Duplicate Queueable Jobs](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_dedupe_queueable.htm "Apex Developer Guide: Detecting Duplicate Queueable Jobs - HTML (New Window)")
    

## AsyncOptions Properties

The following are properties for `AsyncOptions`.

## See Also

- [DuplicateSignature](atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncOptions.htm#apex_System_AsyncOptions_DuplicateSignature)
- [MaximumQueueableStackDepth](atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncOptions.htm#apex_System_AsyncOptions_MaximumQueueableStackDepth)
- [MinimumQueueableDelayInMinutes](atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncOptions.htm#apex_System_AsyncOptions_MinimumQueueableDelayInMinutes)

### DuplicateSignature

A unique signature for a Queueable job.

#### Signature

`public System.QueueableDuplicateSignature DuplicateSignature {get; set;}`

#### Property Value

Type: [QueueableDuplicateSignature Class](atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature.htm#apex_class_System_QueueableDuplicateSignature "Used in the AsyncOptions class to store the queueable job signature in the DuplicateSignature property.")

### MaximumQueueableStackDepth

Maximum stack depth for queueable transactions.

#### Signature

`public Integer MaximumQueueableStackDepth {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### MinimumQueueableDelayInMinutes

Minimum queueable delay for queueable transactions.

#### Signature

`public Integer MinimumQueueableDelayInMinutes {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
