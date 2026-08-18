---
doc_id: "apex_class_RichMessaging_PaymentMethod"
---

# PaymentMethod Class

Represents a payment method.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## See Also

- [PaymentMethod Constructors](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm#apex_RichMessaging_PaymentMethod_constructors)
- [PaymentMethod Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm#apex_RichMessaging_PaymentMethod_properties)

## PaymentMethod Constructors

The following are constructors for `PaymentMethod`.

## See Also

- [PaymentMethod(network, paymentType, displayName)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm#apex_RichMessaging_PaymentMethod_ctor)

### PaymentMethod(network, paymentType, displayName)

Creates a new instance of the `RichMessaging.PaymentMethod` class.

#### Signature

`public PaymentMethod(String network, String paymentType, String displayName)`

#### Parameters

-   **network**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The network associated with the payment method.
-   **paymentType**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The payment type of the payment method.
-   **displayName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The display name of the payment method.

## PaymentMethod Properties

The following are properties for `PaymentMethod`.

## See Also

- [displayName](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm#apex_RichMessaging_PaymentMethod_displayName)
- [network](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm#apex_RichMessaging_PaymentMethod_network)
- [paymentType](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm#apex_RichMessaging_PaymentMethod_paymentType)

### displayName

The display name of the payment method.

#### Signature

`public String displayName {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### network

The network associated with the payment method.

#### Signature

`public String network {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### paymentType

The payment type of the payment method.

#### Signature

`public String paymentType {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
