---
doc_id: "apex_class_RichMessaging_OrderContext"
---

# OrderContext Class

Represents the context information of an order.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## See Also

- [OrderContext Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_OrderContext.htm#apex_RichMessaging_OrderContext_properties)

## OrderContext Properties

The following are properties for `OrderContext`.

## See Also

- [orderType](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_OrderContext.htm#apex_RichMessaging_OrderContext_orderType)
- [orderTypeValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_OrderContext.htm#apex_RichMessaging_OrderContext_orderTypeValue)
- [paymentCheckoutBehavior](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_OrderContext.htm#apex_RichMessaging_OrderContext_paymentCheckoutBehavior)
- [paymentCheckoutBehaviorValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_OrderContext.htm#apex_RichMessaging_OrderContext_paymentCheckoutBehaviorValue)
- [orderExpiration](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_OrderContext.htm#apex_RichMessaging_OrderContext_orderExpiration)
- [orderExpirationValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_OrderContext.htm#apex_RichMessaging_OrderContext_orderExpirationValue)
- [paymentMethodHints](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_OrderContext.htm#apex_RichMessaging_OrderContext_paymentMethodHints)
- [paymentMethodHintsValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_OrderContext.htm#apex_RichMessaging_OrderContext_paymentMethodHintsValue)
- [orderBeneficiary](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_OrderContext.htm#apex_RichMessaging_OrderContext_orderBeneficiary)
- [orderBeneficiaryValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_OrderContext.htm#apex_RichMessaging_OrderContext_orderBeneficiaryValue)
- [paymentInitiation](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_OrderContext.htm#apex_RichMessaging_OrderContext_paymentInitiation)
- [paymentInitiationValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_OrderContext.htm#apex_RichMessaging_OrderContext_paymentInitiationValue)

### orderType

The type of the order.

#### Signature

`public String orderType {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### orderTypeValue

The order type variable of the order.

#### Signature

`public RichMessaging.OrderType orderTypeValue {get; set;}`

#### Property Value

Type: [RichMessaging.OrderType](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_OrderType.htm "Represents the type of an order.")

### paymentCheckoutBehavior

The checkout behavior for the payment.

#### Signature

`public String paymentCheckoutBehavior {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### paymentCheckoutBehaviorValue

The payment checkout behavior variable of the order.

#### Signature

`public RichMessaging.PaymentCheckoutBehavior paymentCheckoutBehaviorValue {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentCheckoutBehavior](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_PaymentCheckoutBehavior.htm "Represents the checkout behavior of a payment.")

### orderExpiration

The expiration information for the order.

#### Signature

`public RichMessaging.OrderExpiration orderExpiration {get; set;}`

#### Property Value

Type: [RichMessaging.OrderExpiration](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_OrderExpiration.htm#apex_class_RichMessaging_OrderExpiration "Represents the expiration information of an order.")

### orderExpirationValue

The order expiration variable for the order.

#### Signature

`public RichMessaging.OrderExpiration orderExpirationValue {get; set;}`

#### Property Value

Type: [RichMessaging.OrderExpiration](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_OrderExpiration.htm#apex_class_RichMessaging_OrderExpiration "Represents the expiration information of an order.")

### paymentMethodHints

The list of payment method hints for the order.

#### Signature

`public List<String> paymentMethodHints {get; set;}`

#### Property Value

Type: List<String>

### paymentMethodHintsValue

The payment method hints variable for the order.

#### Signature

`public List<RichMessaging.PaymentMethodHint> paymentMethodHintsValue {get; set;}`

#### Property Value

Type: List<[RichMessaging.PaymentMethodHint](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_PaymentMethodHint.htm "Represents a hint for the payment method to be used.")\>

### orderBeneficiary

The beneficiary information of the order.

#### Signature

`public RichMessaging.OrderBeneficiary orderBeneficiary {get; set;}`

#### Property Value

Type: [RichMessaging.OrderBeneficiary](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_OrderBeneficiary.htm#apex_class_RichMessaging_OrderBeneficiary "Represents the beneficiary of an order.")

### orderBeneficiaryValue

The order beneficiary variable for the order.

#### Signature

`public RichMessaging.OrderBeneficiary orderBeneficiaryValue {get; set;}`

#### Property Value

Type: [RichMessaging.OrderBeneficiary](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_OrderBeneficiary.htm#apex_class_RichMessaging_OrderBeneficiary "Represents the beneficiary of an order.")

### paymentInitiation

The payment initiation information for the order.

#### Signature

`public RichMessaging.PaymentInitiation paymentInitiation {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentInitiation](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiation.htm#apex_class_RichMessaging_PaymentInitiation "Represents the payment initiation information for an order.")

### paymentInitiationValue

The payment initiation variable for the order.

#### Signature

`public RichMessaging.PaymentInitiation paymentInitiationValue {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentInitiation](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiation.htm#apex_class_RichMessaging_PaymentInitiation "Represents the payment initiation information for an order.")
