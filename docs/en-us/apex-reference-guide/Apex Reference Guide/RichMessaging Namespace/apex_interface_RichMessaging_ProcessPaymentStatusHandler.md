---
doc_id: "apex_interface_RichMessaging_ProcessPaymentStatusHandler"
---

# ProcessPaymentStatusHandler Interface

Interface used to process payment status updates.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## See Also

- [ProcessPaymentStatusHandler Methods](atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_ProcessPaymentStatusHandler.htm#apex_RichMessaging_ProcessPaymentStatusHandler_methods)
- [ProcessPaymentStatusHandler Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_ProcessPaymentStatusHandler.htm#apex_interface_RichMessaging_ProcessPaymentStatusHandler_Example)

## ProcessPaymentStatusHandler Methods

The following are methods for `ProcessPaymentStatusHandler`.

## See Also

- [processPaymentStatus(var1)](atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_ProcessPaymentStatusHandler.htm#apex_RichMessaging_ProcessPaymentStatusHandler_processPaymentStatus)

### processPaymentStatus(var1)

Processes a payment status update.

#### Signature

`public RichMessaging.ProcessPaymentStatusResult processPaymentStatus(RichMessaging.ProcessPaymentStatusRequest var1)`

#### Parameters

-   **var1**: Type: [RichMessaging.ProcessPaymentStatusRequest](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentStatusRequest.htm#apex_class_RichMessaging_ProcessPaymentStatusRequest "Represents a request to process a payment status update.") The payment status request.

#### Return Value

Type: [RichMessaging.ProcessPaymentStatusResult](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentStatusResult.htm#apex_class_RichMessaging_ProcessPaymentStatusResult "Represents the result of processing a payment status update.")

## ProcessPaymentStatusHandler Example Implementation

This is an example implementation of the `RichMessaging.ProcessPaymentStatusHandler` interface.

```apex
global class MyProcessPaymentStatusHandler implements Richmessaging.ProcessPaymentStatusHandler {

   global RichMessaging.ProcessPaymentStatusResult processPaymentStatus(RichMessaging.ProcessPaymentStatusRequest request) {

       // logic to process payment status

       return new RichMessaging.ProcessPaymentStatusResult(true);
   }
}
```
