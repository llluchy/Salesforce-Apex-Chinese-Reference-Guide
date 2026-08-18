---
doc_id: "apex_class_RichMessaging_ProcessPaymentStatusRequest"
---

# ProcessPaymentStatusRequest Class

Represents a request to process a payment status update.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## See Also

- [ProcessPaymentStatusRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentStatusRequest.htm#apex_RichMessaging_ProcessPaymentStatusRequest_properties)

## ProcessPaymentStatusRequest Properties

The following are properties for `ProcessPaymentStatusRequest`.

## See Also

- [paymentMethod](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentStatusRequest.htm#apex_RichMessaging_ProcessPaymentStatusRequest_paymentMethod)
- [orderId](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentStatusRequest.htm#apex_RichMessaging_ProcessPaymentStatusRequest_orderId)
- [amount](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentStatusRequest.htm#apex_RichMessaging_ProcessPaymentStatusRequest_amount)
- [transactionType](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentStatusRequest.htm#apex_RichMessaging_ProcessPaymentStatusRequest_transactionType)
- [transactionStatus](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentStatusRequest.htm#apex_RichMessaging_ProcessPaymentStatusRequest_transactionStatus)
- [transactionId](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentStatusRequest.htm#apex_RichMessaging_ProcessPaymentStatusRequest_transactionId)
- [paymentTransaction](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentStatusRequest.htm#apex_RichMessaging_ProcessPaymentStatusRequest_paymentTransaction)
- [error](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentStatusRequest.htm#apex_RichMessaging_ProcessPaymentStatusRequest_error)

### paymentMethod

The payment method used in the transaction.

#### Signature

`public RichMessaging.PaymentMethod paymentMethod {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentMethod](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm#apex_class_RichMessaging_PaymentMethod "Represents a payment method.")

### orderId

The order ID associated with the payment.

#### Signature

`public String orderId {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### amount

The amount of the payment transaction.

#### Signature

`public RichMessaging.CurrencyAmount amount {get; set;}`

#### Property Value

Type: [RichMessaging.CurrencyAmount](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_CurrencyAmount.htm#apex_class_RichMessaging_CurrencyAmount "Represents a monetary amount in a specific currency.")

### transactionType

The type of payment transaction.

#### Signature

`public RichMessaging.PaymentTransactionType transactionType {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentTransactionType](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_PaymentTransactionType.htm "Represents the type of payment transaction.")

### transactionStatus

The status of the payment transaction.

#### Signature

`public RichMessaging.PaymentTransactionStatus transactionStatus {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentTransactionStatus](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_PaymentTransactionStatus.htm "Represents the status of a payment transaction.")

### transactionId

The unique identifier of the payment transaction.

#### Signature

`public String transactionId {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### paymentTransaction

The payment transaction details.

#### Signature

`public RichMessaging.PaymentTransaction paymentTransaction {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentTransaction](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentTransaction.htm#apex_class_RichMessaging_PaymentTransaction "Represents a payment transaction.")

### error

The error information for a failed payment transaction.

#### Signature

`public RichMessaging.PaymentError error {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentError](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentError.htm#apex_class_RichMessaging_PaymentError "Represents an error that occurred during a payment transaction.")
