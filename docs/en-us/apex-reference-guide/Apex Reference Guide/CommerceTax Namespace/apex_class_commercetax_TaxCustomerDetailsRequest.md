---
doc_id: "apex_class_commercetax_TaxCustomerDetailsRequest"
---

# TaxCustomerDetailsRequest Class

Contains customer details used in tax calculation.

## Namespace

[CommerceTax](atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

## See Also

- [TaxCustomerDetailsRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_constructors)
- [TaxCustomerDetailsRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_properties)
- [TaxCustomerDetailsRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_methods)

## TaxCustomerDetailsRequest Constructors

Learn more about the available constructors with the `TaxCustomerDetailsRequest` class.

The `TaxCustomerDetailsRequest` class includes these constructors.

## See Also

- [TaxCustomerDetailsRequest(accountId, code, exemptionNo, exemptionReason)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_ctor)

### TaxCustomerDetailsRequest(accountId, code, exemptionNo, exemptionReason)

Initializes the `TaxCustomerDetailsRequest` object. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

`global TaxCustomerDetailsRequest(String accountId, String code, String exemptionNo, String exemptionReason)`

#### Parameters

-   **accountId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The customer account ID for the line items sent for tax calculation.
    
-   **code**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The tax code used during tax calculation.
    
-   **exemptionNo**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The exemption number applied to any tax exempt line items.
    
-   **exemptionReason**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The reason that certain line items are tax exempt.
    
-   **taxCertificateId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    ID of the tax certificate used in tax calculation.
    

## TaxCustomerDetailsRequest Properties

Learn more about the available properties with the `TaxCustomerDetailsRequest` class.

The `TaxCustomerDetailsRequest` class includes these properties.

## See Also

- [accountId](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_accountId)
- [code](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_code)
- [exemptionNo](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_exemptionNo)
- [exemptionReason](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_exemptionReason)
- [taxCertificateId](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_taxCertificateId)

### accountId

Customer account that contains the line items sent for tax calculation.

#### Signature

`global String accountId {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### code

Tax code used during tax calculation.

#### Signature

`global String code {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### exemptionNo

Number used to qualify a line item for tax exemption.

#### Signature

`global String exemptionNo {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### exemptionReason

Reason why a line item qualifies for tax exemption.

#### Signature

`global String exemptionReason {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### taxCertificateId

ID of a tax certificate used for tax calculation.

#### Signature

`global String taxCertificateId {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## TaxCustomerDetailsRequest Methods

Learn more about the available methods with the `TaxCustomerDetailsRequest` class.

The `TaxCustomerDetailsRequest` class includes these methods.

## See Also

- [equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_equals)
- [hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_hashCode)
- [toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_toString)

### equals(obj)

Maintains the integrity of lists of type `TaxCustomerDetailsRequest` by determining the equality of external objects in a list. This method is dynamic and based on the `equals()` method in Java.

#### Signature

`global Boolean equals(Object obj)`

#### Parameters

-   **obj**:
    
    Type:
    
    Object External object whose key is to be validated.
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type `TaxCustomerDetailsRequest` by determining the uniqueness of the external objects in a list.

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
