---
doc_id: "apex_connectapi_input_post_auth_api_payment_method"
---

# ConnectApi.PostAuthApiPaymentMethodRequest

Payment method input for post authorization.

Subclass of [ConnectApi.BaseApiPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_base_api_payment_method.htm "Payment method API input representation.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `alternativePaymentMethod` | [`ConnectApi.​AlternativePayment​Method`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_alternative_payment_method.htm "A payment method that doesn't have a defined Salesforce entity such as CardPaymentMethod or DigitalWallet. Common examples of alternative payment methods include CashOnDeliver, Klarna, and Direct Debit. AlternativePaymentMethod functions the same as any other type of payment method for processing transactions in the payment gateway.") | Alternative payment method. | Required | 54.0 |
| `cardPaymentMethod` | [`ConnectApi.​CardPayment​MethodRequest`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_card_payment_method.htm "Card payment method input representation.") | Card payment method. | Required | 54.0 |
