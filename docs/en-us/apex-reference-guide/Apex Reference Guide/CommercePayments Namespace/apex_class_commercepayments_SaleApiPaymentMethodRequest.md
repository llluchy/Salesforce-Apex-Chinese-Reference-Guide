---
doc_id: "apex_class_commercepayments_SaleApiPaymentMethodRequest"
---

# SaleApiPaymentMethodRequest Class

Sends data related to a card payment method to a gateway adapter during a sale service call.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

This class holds information about a payment method that was used for a Sale request. `SaleApiPaymentMethodRequest` contains all the possible payment methods as fields, but only one value is populated for a given request. Gateway adapters use this class when constructing a sale request. The object of this class is obtained through the `paymentMethod` field on the `SaleRequest` object.

## Example

This code sample retrieves the `SaleApiPaymentMethodRequest` object from the `SaleRequest` class.

```apex
commercepayments.SaleApiPaymentMethodRequest paymentMethod = saleRequest.paymentMethod;
```

## See Also

- [SaleApiPaymentMethodRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm#apex_commercepayments_SaleApiPaymentMethodRequest_constructors)
- [SaleApiPaymentMethodRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm#apex_commercepayments_SaleApiPaymentMethodRequest_properties)
- [SaleApiPaymentMethodRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm#apex_commercepayments_SaleApiPaymentMethodRequest_methods)

## SaleApiPaymentMethodRequest Constructors

The following are constructors for `SaleApiPaymentMethodRequest`.

## See Also

- [SaleApiPaymentMethodRequest(cardPaymentMethodRequest)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm#apex_commercepayments_SaleApiPaymentMethodRequest_ctor)
- [SaleApiPaymentMethodRequest()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm#apex_commercepayments_SaleApiPaymentMethodRequest_ctor_2)

### SaleApiPaymentMethodRequest(cardPaymentMethodRequest)

Sends data related to a card payment method to a gateway adapter during a sale service call.

#### Signature

`global SaleApiPaymentMethodRequest(commercepayments.CardPaymentMethodRequest cardPaymentMethodRequest)`

#### Parameters

-   **cardPaymentMethodRequest**: Type: [CardPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_class_commercepayments_CardPaymentMethodRequest "Sends data related to a card payment method to a gateway adapter during a service call.")

### SaleApiPaymentMethodRequest()

Constructor for building a sale payment method request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

`global SaleApiPaymentMethodRequest()`

## SaleApiPaymentMethodRequest Properties

The following are properties for `SaleApiPaymentMethodRequest`.

## See Also

- [cardPaymentMethod](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm#apex_commercepayments_SaleApiPaymentMethodRequest_cardPaymentMethod)
- [standardEntryClassCode](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm#apex_commercepayments_SaleApiPaymentMethodRequest_standardEntryClassCode)

### cardPaymentMethod

Contains details of the card used in a payment method.

#### Signature

`global commercepayments.CardPaymentMethodRequest cardPaymentMethod {get; set;}`

#### Property Value

Type: [CardPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_class_commercepayments_CardPaymentMethodRequest "Sends data related to a card payment method to a gateway adapter during a service call.")

### standardEntryClassCode

Contains details of the standard entry class code used in a payment method.

#### Signature

`public commercepayments.StandardEntryClassCode standardEntryClassCode {get; set;}`

#### Property Value

Type: commercepayments.[StandardEntryClassCode](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_StandardEntryClassCode.htm "Specifies the three-letter code that identifies the type of electronic payment transaction being processed within the Automated Clearing House (ACH) network.")

## SaleApiPaymentMethodRequest Methods

The following are methods for `SaleApiPaymentMethodRequest`.

## See Also

- [equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm#apex_commercepayments_SaleApiPaymentMethodRequest_equals)
- [hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm#apex_commercepayments_SaleApiPaymentMethodRequest_hashCode)
- [toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm#apex_commercepayments_SaleApiPaymentMethodRequest_toString)

### equals(obj)

Maintains the integrity of lists of type `SaleApiPaymentMethodRequest` by determining the equality of external objects in a list. This method is dynamic and is based on the equals method in Java.

#### Signature

`global Boolean equals(Object obj)`

#### Parameters

-   **obj**: Type: Object

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type `SaleApiPaymentMethodRequest` by determining the uniqueness of the external object records in a list.

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
