---
doc_id: "apex_class_RichMessaging_PaymentTransaction"
---

# PaymentTransaction Class

Represents a payment transaction.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## See Also

- [PaymentTransaction Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentTransaction.htm#apex_RichMessaging_PaymentTransaction_properties)

## PaymentTransaction Properties

The following are properties for `PaymentTransaction`.

## See Also

- [transactionId](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentTransaction.htm#apex_RichMessaging_PaymentTransaction_transactionId)
- [transactionType](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentTransaction.htm#apex_RichMessaging_PaymentTransaction_transactionType)
- [status](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentTransaction.htm#apex_RichMessaging_PaymentTransaction_status)
- [amount](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentTransaction.htm#apex_RichMessaging_PaymentTransaction_amount)
- [gatewayReference](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentTransaction.htm#apex_RichMessaging_PaymentTransaction_gatewayReference)
- [timestamp](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentTransaction.htm#apex_RichMessaging_PaymentTransaction_timestamp)
- [refunds](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentTransaction.htm#apex_RichMessaging_PaymentTransaction_refunds)

### transactionId

The unique identifier of the transaction.

#### Signature

`public String transactionId {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### transactionType

The type of the transaction.

#### Signature

`public RichMessaging.PaymentTransactionType transactionType {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentTransactionType](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_PaymentTransactionType.htm "Represents the type of payment transaction.")

### status

The status of the transaction.

#### Signature

`public RichMessaging.PaymentTransactionStatus status {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentTransactionStatus](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_PaymentTransactionStatus.htm "Represents the status of a payment transaction.")

### amount

The amount of the transaction.

#### Signature

`public RichMessaging.CurrencyAmount amount {get; set;}`

#### Property Value

Type: [RichMessaging.CurrencyAmount](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_CurrencyAmount.htm#apex_class_RichMessaging_CurrencyAmount "Represents a monetary amount in a specific currency.")

### gatewayReference

The reference identifier from the payment gateway.

#### Signature

`public String gatewayReference {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### timestamp

The date and time when the transaction occurred.

#### Signature

`public Datetime timestamp {get; set;}`

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### refunds

The list of refunds associated with the transaction.

#### Signature

`public List<RichMessaging.Refund> refunds {get; set;}`

#### Property Value

Type: List<[RichMessaging.Refund](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_Refund.htm#apex_class_RichMessaging_Refund "Represents a refund for a payment transaction.")\>
