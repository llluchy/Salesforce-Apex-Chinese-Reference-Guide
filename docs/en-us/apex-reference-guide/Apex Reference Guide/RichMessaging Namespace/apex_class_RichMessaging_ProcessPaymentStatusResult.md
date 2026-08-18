---
doc_id: "apex_class_RichMessaging_ProcessPaymentStatusResult"
---

# ProcessPaymentStatusResult Class

Represents the result of processing a payment status update.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## See Also

- [ProcessPaymentStatusResult Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentStatusResult.htm#apex_RichMessaging_ProcessPaymentStatusResult_properties)

## ProcessPaymentStatusResult Properties

The following are properties for `ProcessPaymentStatusResult`.

## See Also

- [status](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentStatusResult.htm#apex_RichMessaging_ProcessPaymentStatusResult_status)
- [message](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentStatusResult.htm#apex_RichMessaging_ProcessPaymentStatusResult_message)

### status

The processing status of the payment status update.

#### Signature

`public RichMessaging.ProcessPaymentResultStatus status {get; set;}`

#### Property Value

Type: [RichMessaging.ProcessPaymentResultStatus](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_ProcessPaymentResultStatus.htm "Represents the status of a payment processing result.")

### message

An optional message describing the result.

#### Signature

`public String message {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
