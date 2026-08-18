---
doc_id: "apex_class_commercepayments_AuthApiPaymentMethodRequest"
---

# AuthApiPaymentMethodRequest Class

Sends information about a payment method to a gateway adapter during an authorization service call.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

Contains information about the payment method that is used for an authorization request. It contains all available payment methods as fields, but populates only one field for each request. The gateway adapter uses this class when constructing an authorization request. An object of this class is available through the `paymentMethod` field on the `AuthorizationRequest Class` object.

## See Also

- [AuthApiPaymentMethodRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm#apex_commercepayments_AuthApiPaymentMethodRequest_constructors)
- [AuthApiPaymentMethodRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm#apex_commercepayments_AuthApiPaymentMethodRequest_properties)

## AuthApiPaymentMethodRequest Constructors

The following are constructors for `AuthApiPaymentMethodRequest`.

## See Also

- [AuthApiPaymentMethodRequest(cardPaymentMethodRequest)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm#apex_commercepayments_AuthApiPaymentMethodRequest_ctor)
- [AuthApiPaymentMethodRequest()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm#apex_commercepayments_AuthApiPaymentMethodRequest_ctor_2)

### AuthApiPaymentMethodRequest(cardPaymentMethodRequest)

Constructs a sample `cardPaymentMethodRequest`. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

`global AuthApiPaymentMethodRequest(commercepayments.CardPaymentMethodRequest cardPaymentMethodRequest)`

#### Parameters

-   **cardPaymentMethodRequest**: Type: [commercepayments.CardPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_class_commercepayments_CardPaymentMethodRequest "Sends data related to a card payment method to a gateway adapter during a service call.") Contains information about the card payment method. Used to send information to a gateway adapter during a service call.

### AuthApiPaymentMethodRequest()

Constructor for `AuthApiPaymentMethodRequest`.

#### Signature

`global AuthApiPaymentMethodRequest()`

## AuthApiPaymentMethodRequest Properties

The following are properties for `AuthApiPaymentMethodRequest`.

## See Also

- [cardPaymentMethod](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm#apex_commercepayments_AuthApiPaymentMethodRequest_cardPaymentMethod)

### cardPaymentMethod

The card payment method object used in a payment method request.

#### Signature

`global commercepayments.CardPaymentMethodRequest cardPaymentMethod {get; set;}`

#### Property Value

Type: [commercepayments.CardPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_class_commercepayments_CardPaymentMethodRequest "Sends data related to a card payment method to a gateway adapter during a service call.")
