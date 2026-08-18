---
doc_id: "apex_class_commercepayments_LineItemInput"
---

# LineItemInput Class

Sends the list of individual line items associated with the payment to the gateway adapter.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## See Also

- [LineItemInput Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_properties)
- [LineItemInput Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_methods)

## LineItemInput Properties

The following are properties for `LineItemInput`.

## See Also

- [additionalAttributes](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_additionalAttributes)
- [commodityCode](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_commodityCode)
- [description](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_description)
- [discount](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_discount)
- [discountIndicator](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_discountIndicator)
- [dutyAmount](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_dutyAmount)
- [grossNetIndicator](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_grossNetIndicator)
- [lineItemId](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_lineItemId)
- [lineItemTotal](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_lineItemTotal)
- [name](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_name)
- [quantity](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_quantity)
- [shippingAmount](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_shippingAmount)
- [sku](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_sku)
- [taxAmount](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_taxAmount)
- [taxRate](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_taxRate)
- [unitPrice](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_unitPrice)
- [uom](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_uom)

### additionalAttributes

Map of additional attributes.

#### Signature

`public Map<String,String> additionalAttributes {get; set;}`

#### Property Value

Type: Map<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### commodityCode

Commodity code.

#### Signature

`public String commodityCode {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### description

Description of the product.

#### Signature

`public String description {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### discount

Discount applied to the line item level.

#### Signature

`public Double discount {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### discountIndicator

Specifies whether a discount was applied to the specific line item.

#### Signature

`public Boolean discountIndicator {get; set;}`

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### dutyAmount

Duty or tariff applied specifically to a item (not the whole order).

#### Signature

`public Double dutyAmount {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### grossNetIndicator

Specifies if the line item amount is Gross (before discounts) or Net (after discounts).

#### Signature

`public String grossNetIndicator {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### lineItemId

Line item identifier. Specify when multiple items are present.

#### Signature

`public String lineItemId {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### lineItemTotal

Total amount for that line item.

#### Signature

`public Double lineItemTotal {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### name

Product or service name.

#### Signature

`public String name {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### quantity

Quantity purchased.

#### Signature

`public Integer quantity {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### shippingAmount

Shipping or freight cost allocated to that line item.

#### Signature

`public Double shippingAmount {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### sku

SKU or product code.

#### Signature

`public String sku {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### taxAmount

Line-level tax amount.

#### Signature

`public Double taxAmount {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### taxRate

Tax percentage applied to that specific line item.

#### Signature

`public Double taxRate {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### unitPrice

Unit price.

#### Signature

`public Double unitPrice {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### uom

Unit of measure. For example, EA, HRS, and KG.

#### Signature

`public String uom {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## LineItemInput Methods

The following are methods for `LineItemInput`.

## See Also

- [equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_equals)
- [hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_hashCode)
- [toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_LineItemInput.htm#apex_commercepayments_LineItemInput_toString)

### equals(obj)

Maintains the integrity of lists of type `LineItemInput` by determining the equality of external objects in a list. This method is dynamic and based on the equals method in Java.

#### Signature

`public Boolean equals(Object obj)`

#### Parameters

-   **obj**:
    
    Type:
    
    Object External object whose key is to be validated.
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type `LineItemInput`.

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
