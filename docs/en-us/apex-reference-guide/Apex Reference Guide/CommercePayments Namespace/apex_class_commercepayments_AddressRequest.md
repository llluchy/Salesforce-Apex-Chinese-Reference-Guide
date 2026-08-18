---
doc_id: "apex_class_commercepayments_AddressRequest"
---

# AddressRequest Class

Contains address request data that is sent to a gateway adapter during a service call.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

Contains information about the payment method’s address. Use this information in authorization, sale, and tokenization requests. The payment gateway adapter uses information in an AddressRequest object to construct a JSON request to send to the payment gateway.

The constructor of this class takes no arguments. For example:

`CommercePayments.AddressRequest adr = new CommercePayments.AddressRequest();`

## See Also

- [AddressRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_constructors)
- [AddressRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_properties)
- [AddressRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_methods)

## AddressRequest Constructors

The following are constructors for `AddressRequest`.

## See Also

- [AddressRequest(street, city, state, country, postalCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_ctor)

### AddressRequest(street, city, state, country, postalCode)

Constructs a sample address. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

`global AddressRequest(String street, String city, String state, String country, String postalCode)`

#### Parameters

-   **street**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Street
    
    for the payment method's address.
    
-   **city**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    City
    
    for the payment method's address.
    
-   **state**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    State
    
    for the payment method's address.
    
-   **country**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Country
    
    for the payment method's address.
    
-   **postalCode**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Postal code
    
    for the payment method's address.
    

## AddressRequest Properties

The following are properties for `AddressRequest`.

## See Also

- [city](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_city)
- [companyName](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_companyName)
- [country](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_country)
- [postalCode](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_postalCode)
- [state](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_state)
- [street](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_street)

### city

City of the payment method address.

#### Signature

`global String city {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### companyName

Company name of the payment method address.

#### Signature

`global String companyName {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### country

Country for the payment method address.

#### Signature

`global String country {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### postalCode

Postal code for the payment method address.

#### Signature

`global String postalCode {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### state

State for the payment method address.

#### Signature

`global String state {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### street

Street for the payment method address.

#### Signature

`global String street {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## AddressRequest Methods

The following are methods for `AddressRequest`.

## See Also

- [equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_equals)
- [hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_hashCode)
- [toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_toString)

### equals(obj)

Maintains the integrity of lists of type `AddressRequest` by determining the equality of external objects in a list. This method is dynamic and is based on the equals method in Java.

#### Signature

`global Boolean equals(Object obj)`

#### Parameters

-   **obj**:
    
    Type:
    
    Object External object whose key is to be validated.
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type `AddressRequest`.

#### Signature

`global Integer hashCode()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### toString()

Converts a date to a string.

#### Signature

`global String toString()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
