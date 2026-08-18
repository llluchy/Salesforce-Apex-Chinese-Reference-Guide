---
doc_id: "apex_class_commercepayments_PaymentMethodDetailsResponse"
---

# PaymentMethodDetailsResponse Class

This class contains the details about the payment method.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Example

```apex
commercepayments.AlternativePaymentMethodResponse alternativePaymentMethodResponse = new commercepayments.AlternativePaymentMethodResponse();
alternativePaymentMethodResponse.setEmail('alternativePaymentMethod');
alternativePaymentMethodResponse.setEmail('foo@foo.com');
alternativePaymentMethodResponse.setGatewayToken('NMoPoIOnTZSaRaWcV7gUUXe');
alternativePaymentMethodResponse.setGatewayTokenDetails('gateway token details');
commercepayments.PaymentMethodDetailsResponse response = new commercepayments.PaymentMethodDetailsResponse();
response.setAlternativePaymentMethod(alternativePaymentMethodResponse);
```

## See Also

- [PaymentMethodDetailsResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodDetailsResponse.htm#apex_commercepayments_PaymentMethodDetailsResponse_methods)

## PaymentMethodDetailsResponse Methods

The following are methods for `PaymentMethodDetailsResponse`.

## See Also

- [setAlternativePaymentMethod(alternativePaymentMethod)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodDetailsResponse.htm#apex_commercepayments_PaymentMethodDetailsResponse_setAlternativePaymentMethod)
- [setCardPaymentMethod(cardPaymentMethod)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodDetailsResponse.htm#apex_commercepayments_PaymentMethodDetailsResponse_setCardPaymentMethod)

### setAlternativePaymentMethod(alternativePaymentMethod)

Sets the alternative payment method details.

#### Signature

`public void setAlternativePaymentMethod(commercepayments.AlternativePaymentMethodResponse alternativePaymentMethod)`

#### Parameters

-   **alternativePaymentMethod**: Type: [CommercePayments.AlternativePaymentMethodResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodResponse.htm#apex_class_commercepayments_AlternativePaymentMethodResponse "The class contains the response details of the alternative payment method.") Details of the alternative payment method.

#### Return Value

Type: void

### setCardPaymentMethod(cardPaymentMethod)

Sets the details about the card payment method.

#### Signature

`public void setCardPaymentMethod(commercepayments.CardPaymentMethodResponse cardPaymentMethod)`

#### Parameters

-   **cardPaymentMethod**: Type: [CommercePayments.CardPaymentMethodResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodResponse.htm#apex_class_commercepayments_CardPaymentMethodResponse "This class contains details about the card payment method.") Details about the card payment method.

#### Return Value

Type: void
