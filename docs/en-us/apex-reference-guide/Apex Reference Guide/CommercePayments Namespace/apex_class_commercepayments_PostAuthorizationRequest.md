---
doc_id: "apex_class_commercepayments_PostAuthorizationRequest"
---

# PostAuthorizationRequest Class

Sends information about a postauthorization request to a gateway adapter during a service call.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

This class extends [`BaseRequest`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_commercepayments_BaseRequest.htm) and contains information about a transaction postauthorization request. The gateway adapter reads fields from this class to validate the client-side transaction with the payment gateway. An object of this class is available by calling `getPaymentRequest()` in the `PaymentGatewayContext Class`).

```plain
((commercepayments.PostAuthorizationRequest)gatewayContext.getPaymentRequest());
```

## See Also

- [PostAuthorizationRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationRequest_constructors.htm)
- [PostAuthorizationRequest Properties](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationRequest_properties.htm)
