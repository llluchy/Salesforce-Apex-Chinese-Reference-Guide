---
doc_id: "apex_class_commercetax_TaxAddressesRequest"
---

# TaxAddressesRequest Class

Contains methods to get and set tax address values.

## Namespace

[CommerceTax](atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

## See Also

- [TaxAddressesRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_constructors)
- [TaxAddressesRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_properties)
- [TaxAddressesRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_methods)

## TaxAddressesRequest Constructors

Learn more about the available constructors with the `TaxAddressesRequest` class.

The `TaxAddressesRequest` class includes these constructors.

## See Also

- [TaxAddressesRequest(shipFrom, shipTo, soldTo, billTo, taxEngineAddress)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_ctor)

### TaxAddressesRequest(shipFrom, shipTo, soldTo, billTo, taxEngineAddress)

Constructor for defining addresses for the tax addresses request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

`global TaxAddressesRequest(commercetax.TaxAddressRequest shipFrom, commercetax.TaxAddressRequest shipTo, commercetax.TaxAddressRequest soldTo, commercetax.TaxAddressRequest billTo, commercetax.TaxAddressRequest taxEngineAddress)`

#### Parameters

-   **shipFrom**: [TaxAddressRequest](#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.") The address where a line item was shipped from.
-   **shipTo**: [TaxAddressRequest](#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.") The address where a line item is shipped to.
-   **soldTo**: [TaxAddressRequest](#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.") The address of the line item's buyer.
-   **billTo**: [TaxAddressRequest](#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.") The person or group who was billed for the line item.
-   **taxEngineAddress**: [TaxAddressRequest](#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.") The address that the tax engine uses to calculate tax.

## TaxAddressesRequest Properties

Learn more about the available properties with the `TaxAddressesRequest` class.

The `TaxAddressesRequest` class includes these properties.

## See Also

- [billTo](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_billTo)
- [shipFrom](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_shipFrom)
- [shipTo](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_shipTo)
- [soldTo](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_soldTo)
- [taxEngineAddress](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_taxEngineAddress)

### billTo

The Bill To address for a line item.

#### Signature

`global commercetax.TaxAddressRequest billTo {get; set;}`

#### Property Value

[TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

### shipFrom

The Ship From address for a line item.

#### Signature

`global commercetax.TaxAddressRequest shipFrom {get; set;}`

#### Property Value

[TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

### shipTo

The Ship To address for a line item.

#### Signature

`public commercetax.TaxAddressRequest shipTo {get; set;}`

#### Property Value

[TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

### soldTo

The Sold To address for a line item.

#### Signature

`global commercetax.TaxAddressRequest soldTo {get; set;}`

#### Property Value

[TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

### taxEngineAddress

The Tax Engine Address for a line item.

#### Signature

`global commercetax.TaxAddressRequest taxEngineAddress {get; set;}`

#### Property Value

[TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

## TaxAddressesRequest Methods

Learn more about the available methods with the `TaxAddressesRequest` class.

The `TaxAddressesRequest` class includes these methods.

## See Also

- [equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_equals)
- [hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_hashCode)
- [toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_toString)

### equals(obj)

Maintains the integrity of lists of type `TaxAddressesRequest` by determining the equality of external objects in a list. This method is dynamic and is based on the `equals()` method in Java.

#### Signature

`global Boolean equals(Object obj)`

#### Parameters

-   **obj**:
    
    Type:
    
    Object External object whose key is to be validated.
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type `TaxAddressesRequest` by determining the uniqueness of the external object records in a list.

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
