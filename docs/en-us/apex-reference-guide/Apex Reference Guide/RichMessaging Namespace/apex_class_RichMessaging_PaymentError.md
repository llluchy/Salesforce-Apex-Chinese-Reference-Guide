---
doc_id: "apex_class_RichMessaging_PaymentError"
---

# PaymentError Class

Represents an error that occurred during a payment transaction.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## See Also

- [PaymentError Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentError.htm#apex_RichMessaging_PaymentError_properties)

## PaymentError Properties

The following are properties for `PaymentError`.

## See Also

- [code](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentError.htm#apex_RichMessaging_PaymentError_code)
- [message](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentError.htm#apex_RichMessaging_PaymentError_message)

### code

The error code returned by the payment gateway.

#### Signature

`public String code {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### message

The error message describing the payment failure.

#### Signature

`public String message {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
