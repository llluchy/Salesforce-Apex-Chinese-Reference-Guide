---
doc_id: "apex_class_RichMessaging_PaymentInitiation"
---

# PaymentInitiation Class

Represents the payment initiation information for an order.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## See Also

- [PaymentInitiation Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiation.htm#apex_RichMessaging_PaymentInitiation_properties)

## PaymentInitiation Properties

The following are properties for `PaymentInitiation`.

## See Also

- [initiationMode](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiation.htm#apex_RichMessaging_PaymentInitiation_initiationMode)
- [initiationModeValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiation.htm#apex_RichMessaging_PaymentInitiation_initiationModeValue)
- [pix](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiation.htm#apex_RichMessaging_PaymentInitiation_pix)
- [pixValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiation.htm#apex_RichMessaging_PaymentInitiation_pixValue)
- [boleto](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiation.htm#apex_RichMessaging_PaymentInitiation_boleto)
- [boletoValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiation.htm#apex_RichMessaging_PaymentInitiation_boletoValue)
- [gateway](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiation.htm#apex_RichMessaging_PaymentInitiation_gateway)
- [gatewayValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiation.htm#apex_RichMessaging_PaymentInitiation_gatewayValue)

### initiationMode

The mode used to initiate the payment.

#### Signature

`public String initiationMode {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### initiationModeValue

The initiation mode variable for the payment.

#### Signature

`public RichMessaging.PaymentInitiationMode initiationModeValue {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentInitiationMode](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_PaymentInitiationMode.htm "Represents the mode used to initiate a payment.")

### pix

The PIX payment initiation details.

#### Signature

`public RichMessaging.PaymentInitiationPix pix {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentInitiationPix](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiationPix.htm#apex_class_RichMessaging_PaymentInitiationPix "Represents PIX-specific payment initiation details.")

### pixValue

The PIX payment initiation variable.

#### Signature

`public RichMessaging.PaymentInitiationPix pixValue {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentInitiationPix](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiationPix.htm#apex_class_RichMessaging_PaymentInitiationPix "Represents PIX-specific payment initiation details.")

### boleto

The Boleto payment initiation details.

#### Signature

`public RichMessaging.PaymentInitiationBoleto boleto {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentInitiationBoleto](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiationBoleto.htm#apex_class_RichMessaging_PaymentInitiationBoleto "Represents Boleto-specific payment initiation details.")

### boletoValue

The Boleto payment initiation variable.

#### Signature

`public RichMessaging.PaymentInitiationBoleto boletoValue {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentInitiationBoleto](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiationBoleto.htm#apex_class_RichMessaging_PaymentInitiationBoleto "Represents Boleto-specific payment initiation details.")

### gateway

The gateway-based payment initiation details.

#### Signature

`public RichMessaging.PaymentInitiationGateway gateway {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentInitiationGateway](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiationGateway.htm#apex_class_RichMessaging_PaymentInitiationGateway "Represents gateway-specific payment initiation details.")

### gatewayValue

The gateway payment initiation variable.

#### Signature

`public RichMessaging.PaymentInitiationGateway gatewayValue {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentInitiationGateway](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentInitiationGateway.htm#apex_class_RichMessaging_PaymentInitiationGateway "Represents gateway-specific payment initiation details.")
