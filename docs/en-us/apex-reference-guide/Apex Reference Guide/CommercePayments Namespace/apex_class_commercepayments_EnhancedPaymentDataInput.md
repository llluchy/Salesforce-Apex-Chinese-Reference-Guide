---
doc_id: "apex_class_commercepayments_EnhancedPaymentDataInput"
---

# EnhancedPaymentDataInput Class

Sends enhanced payment data, including Level 2 and Level 3 fields, to the gateway adapter as part of the service call.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

Supported only for third-party payment gateways; not supported for native payments.

## See Also

- [EnhancedPaymentDataInput Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_EnhancedPaymentDataInput.htm#apex_commercepayments_EnhancedPaymentDataInput_properties)
- [EnhancedPaymentDataInput Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_EnhancedPaymentDataInput.htm#apex_commercepayments_EnhancedPaymentDataInput_methods)

## EnhancedPaymentDataInput Properties

The following are properties for `EnhancedPaymentDataInput`.

## See Also

- [additionalAttributes](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_EnhancedPaymentDataInput.htm#apex_commercepayments_EnhancedPaymentDataInput_additionalAttributes)
- [discountAmount](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_EnhancedPaymentDataInput.htm#apex_commercepayments_EnhancedPaymentDataInput_discountAmount)
- [dutyAmount](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_EnhancedPaymentDataInput.htm#apex_commercepayments_EnhancedPaymentDataInput_dutyAmount)
- [invoiceNumber](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_EnhancedPaymentDataInput.htm#apex_commercepayments_EnhancedPaymentDataInput_invoiceNumber)
- [lineItems](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_EnhancedPaymentDataInput.htm#apex_commercepayments_EnhancedPaymentDataInput_lineItems)
- [referenceId](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_EnhancedPaymentDataInput.htm#apex_commercepayments_EnhancedPaymentDataInput_referenceId)
- [salesTaxAmount](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_EnhancedPaymentDataInput.htm#apex_commercepayments_EnhancedPaymentDataInput_salesTaxAmount)
- [shipFromZip](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_EnhancedPaymentDataInput.htm#apex_commercepayments_EnhancedPaymentDataInput_shipFromZip)
- [shipToCountry](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_EnhancedPaymentDataInput.htm#apex_commercepayments_EnhancedPaymentDataInput_shipToCountry)
- [shipToZip](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_EnhancedPaymentDataInput.htm#apex_commercepayments_EnhancedPaymentDataInput_shipToZip)
- [shippingAmount](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_EnhancedPaymentDataInput.htm#apex_commercepayments_EnhancedPaymentDataInput_shippingAmount)
- [taxRate](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_EnhancedPaymentDataInput.htm#apex_commercepayments_EnhancedPaymentDataInput_taxRate)
- [totalTaxAmount](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_EnhancedPaymentDataInput.htm#apex_commercepayments_EnhancedPaymentDataInput_totalTaxAmount)

### additionalAttributes

Map of gateway-specific or custom fields.

#### Signature

`public Map<String,String> additionalAttributes {get; set;}`

#### Property Value

Type: Map<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### discountAmount

Discount amount.

#### Signature

`public Double discountAmount {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### dutyAmount

The total amount charged as duty or import or export tariffs on the transaction.

#### Signature

`public Double dutyAmount {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### invoiceNumber

Invoice number associated with the payment.

#### Signature

`public String invoiceNumber {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### lineItems

Collection of individual line items associated with the payment.

#### Signature

`public List<commercepayments.LineItemInput> lineItems {get; set;}`

#### Property Value

Type: List<commercepayments.[LineItemInput](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_class_commercepayments_LineItemInput "Sends the list of individual line items associated with the payment to the gateway adapter.")\>

### referenceId

Customer reference or identifier.

#### Signature

`public String referenceId {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### salesTaxAmount

Sales tax amount.

#### Signature

`public Double salesTaxAmount {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### shipFromZip

Origin postal code.

#### Signature

`public String shipFromZip {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### shipToCountry

Destination country code.

#### Signature

`public String shipToCountry {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### shipToZip

Destination postal code.

#### Signature

`public String shipToZip {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### shippingAmount

Shipping or freight amount.

#### Signature

`public Double shippingAmount {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### taxRate

Percentage rate of tax applied to the transaction or line item.

#### Signature

`public Double taxRate {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### totalTaxAmount

Total tax amount for the transaction.

#### Signature

`public Double totalTaxAmount {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

## EnhancedPaymentDataInput Methods

The following are methods for `EnhancedPaymentDataInput`.

## See Also

- [equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_EnhancedPaymentDataInput.htm#apex_commercepayments_EnhancedPaymentDataInput_equals)
- [hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_EnhancedPaymentDataInput.htm#apex_commercepayments_EnhancedPaymentDataInput_hashCode)
- [toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_EnhancedPaymentDataInput.htm#apex_commercepayments_EnhancedPaymentDataInput_toString)

### equals(obj)

Maintains the integrity of lists of type `EnhancedPaymentDataInput` by determining the equality of external objects in a list. This method is dynamic and based on the equals method in Java.

#### Signature

`public Boolean equals(Object obj)`

#### Parameters

-   **obj**: Type: Object External object whose key is to be validated.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type `EnhancedPaymentDataInput`.

#### Signature

`public Integer hashCode()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### toString()

Converts a date to a string.

#### Signature

`public String toString()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
