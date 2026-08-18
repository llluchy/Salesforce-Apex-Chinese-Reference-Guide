---
doc_id: "apex_class_RichMessaging_PaymentInitiationGateway"
---

# PaymentInitiationGateway Class

Represents gateway-specific payment initiation details.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## See Also

- [PaymentInitiationGateway Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiationGateway.htm#apex_RichMessaging_PaymentInitiationGateway_properties)

## PaymentInitiationGateway Properties

The following are properties for `PaymentInitiationGateway`.

## See Also

- [orderId](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiationGateway.htm#apex_RichMessaging_PaymentInitiationGateway_orderId)
- [orderIdValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiationGateway.htm#apex_RichMessaging_PaymentInitiationGateway_orderIdValue)
- [currency](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiationGateway.htm#apex_RichMessaging_PaymentInitiationGateway_currency)
- [currencyValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiationGateway.htm#apex_RichMessaging_PaymentInitiationGateway_currencyValue)
- [amount](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiationGateway.htm#apex_RichMessaging_PaymentInitiationGateway_amount)
- [amountValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiationGateway.htm#apex_RichMessaging_PaymentInitiationGateway_amountValue)
- [gatewayProperties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiationGateway.htm#apex_RichMessaging_PaymentInitiationGateway_gatewayProperties)
- [gatewayPropertiesValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiationGateway.htm#apex_RichMessaging_PaymentInitiationGateway_gatewayPropertiesValue)
- [signature](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiationGateway.htm#apex_RichMessaging_PaymentInitiationGateway_signature)
- [signatureValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiationGateway.htm#apex_RichMessaging_PaymentInitiationGateway_signatureValue)
- [metadata](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiationGateway.htm#apex_RichMessaging_PaymentInitiationGateway_metadata)
- [metadataValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiationGateway.htm#apex_RichMessaging_PaymentInitiationGateway_metadataValue)

### orderId

The order ID associated with the gateway payment initiation.

#### Signature

`public String orderId {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### orderIdValue

The order ID variable for the gateway payment initiation.

#### Signature

`public String orderIdValue {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### currency

The currency of the gateway payment.

#### Signature

`public String currency {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### currencyValue

The currency variable of the gateway payment.

#### Signature

`public String currencyValue {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### amount

The amount of the gateway payment.

#### Signature

`public Double amount {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### amountValue

The amount variable of the gateway payment.

#### Signature

`public Double amountValue {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### gatewayProperties

The gateway-specific properties for the payment.

#### Signature

`public RichMessaging.PaymentGatewayProperties gatewayProperties {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentGatewayProperties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentGatewayProperties.htm#apex_class_RichMessaging_PaymentGatewayProperties "Represents gateway-specific properties for a payment.")

### gatewayPropertiesValue

The gateway properties variable for the payment.

#### Signature

`public RichMessaging.PaymentGatewayProperties gatewayPropertiesValue {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentGatewayProperties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentGatewayProperties.htm#apex_class_RichMessaging_PaymentGatewayProperties "Represents gateway-specific properties for a payment.")

### signature

The cryptographic signature of the gateway payment request.

#### Signature

`public String signature {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### signatureValue

The signature variable of the gateway payment request.

#### Signature

`public String signatureValue {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### metadata

Additional metadata for the gateway payment.

#### Signature

`public Map<String, String> metadata {get; set;}`

#### Property Value

Type: Map<String, String>

### metadataValue

The metadata variable for the gateway payment.

#### Signature

`public Map<String, String> metadataValue {get; set;}`

#### Property Value

Type: Map<String, String>
