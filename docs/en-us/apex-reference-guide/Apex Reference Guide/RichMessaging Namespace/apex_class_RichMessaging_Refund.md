---
doc_id: "apex_class_RichMessaging_Refund"
---

# Refund Class

Represents a refund for a payment transaction.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## See Also

- [Refund Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_Refund.htm#apex_RichMessaging_Refund_properties)

## Refund Properties

The following are properties for `Refund`.

## See Also

- [refundId](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_Refund.htm#apex_RichMessaging_Refund_refundId)
- [amount](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_Refund.htm#apex_RichMessaging_Refund_amount)
- [status](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_Refund.htm#apex_RichMessaging_Refund_status)
- [reason](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_Refund.htm#apex_RichMessaging_Refund_reason)
- [timestamp](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_Refund.htm#apex_RichMessaging_Refund_timestamp)
- [gatewayReference](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_Refund.htm#apex_RichMessaging_Refund_gatewayReference)

### refundId

The unique identifier of the refund.

#### Signature

`public String refundId {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### amount

The amount of the refund.

#### Signature

`public RichMessaging.CurrencyAmount amount {get; set;}`

#### Property Value

Type: [RichMessaging.CurrencyAmount](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_CurrencyAmount.htm#apex_class_RichMessaging_CurrencyAmount "Represents a monetary amount in a specific currency.")

### status

The status of the refund.

#### Signature

`public RichMessaging.PaymentTransactionStatus status {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentTransactionStatus](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_PaymentTransactionStatus.htm "Represents the status of a payment transaction.")

### reason

The reason for the refund.

#### Signature

`public String reason {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### timestamp

The date and time when the refund was processed.

#### Signature

`public Datetime timestamp {get; set;}`

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### gatewayReference

The reference identifier from the payment gateway for the refund.

#### Signature

`public String gatewayReference {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
