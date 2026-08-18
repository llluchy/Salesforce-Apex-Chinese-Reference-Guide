---
doc_id: "apex_class_commercetax_TaxLineItemRequest"
---

# TaxLineItemRequest Class

Contains line item details of a tax request.

## Namespace

[CommerceTax](atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

## See Also

- [TaxLineItemRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_commercetax_TaxLineItemRequest_constructors)
- [TaxLineItemRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_commercetax_TaxLineItemRequest_properties)
- [TaxLineItemRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_commercetax_TaxLineItemRequest_methods)

## TaxLineItemRequest Constructors

Learn more about the constructors available with the `TaxLineItemRequest` class.

The `TaxLineItemRequest` class includes these constructors.

## See Also

- [TaxLineItemRequest(addresses, amount, description, productCode, quantity, lineNumber, taxCode, effectiveDate)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_commercetax_TaxLineItemRequest_ctor)

### TaxLineItemRequest(addresses, amount, description, productCode, quantity, lineNumber, taxCode, effectiveDate)

Initializes the request for the tax line item. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

`global TaxLineItemRequest(commercetax.LineTaxAddressesRequest addresses, Double amount, String description, String productCode, Double quantity, String lineNumber, String taxCode, Datetime effectiveDate)`

```apex
commercetax.TaxLineItemRequest, newinstance, [commercetax.LineTaxAddressesRequest, Double, String, String, Double, String, String, Datetime], commercetax.TaxLineItemRequest
```

#### Parameters

-   **addresses**:
    
    Type: [LineTaxAddressesRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm#apex_class_commercetax_LineTaxAddressesRequest "Stores details of the addresses applied per line item in a tax calculation request.")
    
    Information about
    
    the addresses applied to each line item in a tax calculation request.
    
-   **amount**:
    
    Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")
    
    Total amount (in
    
    a given currency) represented by a line item sent for tax calculation.
    
-   **description**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    User-defined description
    
    for a tax line item.
    
-   **productCode**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Catalog code
    
    for the product represented by the tax line item.
    
-   **quantity**:
    
    Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")
    
    Number of units of a given product that the tax line item represents.
    
-   **lineNumber**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Unique number used to identify a tax line item.
    
-   **taxCode**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Code used to identify how tax is calculated
    
    for a tax line item.
    
-   **effectiveDate**:
    
    Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")
    
    This is a user-defined date used for reporting only. For negative invoice lines, this parameter represents the invoice date from the original invoice. In other cases, it represents the date when the tax transaction takes effect on the line item. The previous tax transaction type is always `Debit` for negative invoice lines.
    

## TaxLineItemRequest Properties

Learn more about the available properties with the `TaxLineItemRequest` class.

The `TaxLineItemRequest` class includes these properties.

## See Also

- [addresses](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_commercetax_TaxLineItemRequest_addresses)
- [amount](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_commercetax_TaxLineItemRequest_amount)
- [customTaxAttributes](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_commercetax_TaxLineItemRequest_customTaxAttributes)
- [description](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_commercetax_TaxLineItemRequest_description)
- [effectiveDate](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_commercetax_TaxLineItemRequest_effectiveDate)
- [lineNumber](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_commercetax_TaxLineItemRequest_lineNumber)
- [productCode](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_commercetax_TaxLineItemRequest_productCode)
- [productSKU](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_commercetax_TaxLineItemRequest_productSKU)
- [quantity](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_commercetax_TaxLineItemRequest_quantity)
- [referenceDocumentCode](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_commercetax_TaxLineItemRequest_referenceDocumentCode)
- [taxCode](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_commercetax_TaxLineItemRequest_taxCode)

### addresses

Contains the list of addresses of a line item.

#### Signature

`public commercetax.LineTaxAddressesRequest addresses {get; set;}`

#### Property Value

Type: [commercetax.LineTaxAddressesRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm#apex_class_commercetax_LineTaxAddressesRequest "Stores details of the addresses applied per line item in a tax calculation request.")

### amount

Total amount (in a given currency) represented by a line item sent for tax calculation.

#### Signature

`global Double amount {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### customTaxAttributes

Customised tax contract to include additional attributes at the line item level.

#### Signature

`global commercetax.TaxLineItemRequest customTaxAttributes {get; set;}`

#### Property Value

Type: Map<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>

### description

User-defined description for a tax line item.

#### Signature

`global String description {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### effectiveDate

The date that a tax transaction takes effect on a line item. This is a user-defined date used for reporting only.

#### Signature

`global Datetime effectiveDate {get; set;}`

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### lineNumber

Unique number used to identify a tax line item.

#### Signature

`global String lineNumber {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### productCode

Catalog code for the product represented by the tax line item.

#### Signature

`global String productCode {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### productSKU

Unique identifier of a product that can be used to identify products that are exempted from tax.

#### Signature

`global String productSKU {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### quantity

Number of units of a given product that the tax line item represents.

#### Signature

`global Double quantity {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### referenceDocumentCode

Identifier that combines the original invoice ID, previous tax transaction type, and tax engine ID, used in tax calculations for negative invoice lines.

For example, a referenceDocumentCode parameter value `3ttxx00000004Bh_Debit-4wAxx0000000001EAA` indicates `3ttxx00000004Bh` is the original invoice ID and `4wAxx0000000001EAA` is the tax engine ID. The previous tax transaction type is always `Debit` for negative invoice lines.

#### Signature

`global String referenceDocumentCode {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### taxCode

Code used to identify how tax is calculated for a tax line item.

#### Signature

`global String taxCode {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## TaxLineItemRequest Methods

Learn more about the available methods with the `TaxLineItemRequest` class.

The `TaxLineItemRequest` class includes these methods.

## See Also

- [equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_commercetax_TaxLineItemRequest_equals)
- [hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_commercetax_TaxLineItemRequest_hashCode)
- [toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_commercetax_TaxLineItemRequest_toString)

### equals(obj)

Maintains the integrity of lists of type `TaxLineItemRequest` by determining the equality of external objects in a list. This method is dynamic and is based on the `equals()` method in Java.

#### Signature

`global Boolean equals(Object obj)`

#### Parameters

-   **obj**:
    
    Type:
    
    Object External object whose key is to be validated.
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type `TaxLineItemRequest` by determining the uniqueness of the external object records in a list.

#### Signature

`global Integer hashCode()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### toString()

Converts a value to a string.

#### Signature

`global String toString()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
