---
doc_id: "apex_class_commercepayments_PostAuthApiPaymentMethodRequest"
---

# PostAuthApiPaymentMethodRequest Class

Sends information about a payment method to a gateway adapter during a postauthorization service call.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

Contains information about the payment method that is used for a postauthorization request. It contains all available payment methods as fields, but populates only one field for each request. The gateway adapter uses this class when constructing a postauthorization request. An object of this class is available through the `paymentMethod` field on the `PostAuthorizationRequest Class` object.

## See Also

- [PostAuthApiPaymentMethodRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthApiPaymentMethodRequest_constructors.htm)
- [PostAuthApiPaymentMethodRequest Properties](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthApiPaymentMethodRequest_properties.htm)
