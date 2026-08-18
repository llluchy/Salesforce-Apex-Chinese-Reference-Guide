---
doc_id: "apex_class_commercetax_TaxSellerDetailsRequest"
---

# TaxSellerDetailsRequest Class

Contains tax code details used in the tax calculation request.

## Namespace

[CommerceTax](atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

## See Also

- [TaxSellerDetailsRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxSellerDetailsRequest.htm#apex_commercetax_TaxSellerDetailsRequest_constructors)
- [TaxSellerDetailsRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxSellerDetailsRequest.htm#apex_commercetax_TaxSellerDetailsRequest_properties)
- [TaxSellerDetailsRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxSellerDetailsRequest.htm#apex_commercetax_TaxSellerDetailsRequest_methods)

## TaxSellerDetailsRequest Constructors

Learn more about the available constructors with the `TaxSellerDetailsRequest` class.

The `TaxSellerDetailsRequest` class includes these constructors.

## See Also

- [TaxSellerDetailsRequest(code)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxSellerDetailsRequest.htm#apex_commercetax_TaxSellerDetailsRequest_ctor)

### TaxSellerDetailsRequest(code)

Initializes the request for the tax seller details. This constructor is intended for test usage and throws an exception if used outside of the Apex test context

#### Signature

`global TaxSellerDetailsRequest(String code)`

#### Parameters

-   **code**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Tax code used
    
    for tax calculation.
    

## TaxSellerDetailsRequest Properties

Learn more about the available properties with the `TaxSellerDetailsRequest` class.

The `TaxSellerDetailsRequest` class includes these properties.

## See Also

- [code](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxSellerDetailsRequest.htm#apex_commercetax_TaxSellerDetailsRequest_code)

### code

Tax code used for tax calculation.

#### Signature

`global String code {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## TaxSellerDetailsRequest Methods

Learn more about the available methods with the `TaxSellerDetailsRequest` class.

The `TaxSellerDetailsRequest` class includes these methods.

## See Also

- [equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxSellerDetailsRequest.htm#apex_commercetax_TaxSellerDetailsRequest_equals)
- [hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxSellerDetailsRequest.htm#apex_commercetax_TaxSellerDetailsRequest_hashCode)
- [toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxSellerDetailsRequest.htm#apex_commercetax_TaxSellerDetailsRequest_toString)

### equals(obj)

Maintains the integrity of lists of type `TaxSellerDetailsRequest` by determining the equality of the external objects in a list. This method is dynamic and based on the `equals()` method in Java.

#### Signature

`global Boolean equals(Object obj)`

#### Parameters

-   **obj**:
    
    Type:
    
    Object External object whose key is to be validated.
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type `TaxSellerDetailsRequest` by determining the uniqueness of the external objects in a list.

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
