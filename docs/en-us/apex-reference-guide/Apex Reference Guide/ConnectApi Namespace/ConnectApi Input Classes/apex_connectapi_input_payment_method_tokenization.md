---
doc_id: "apex_connectapi_input_payment_method_tokenization"
---

# ConnectApi.PaymentMethodTokenizationRequest

Payment method tokenization input consumed by the payment tokenization service.

Subclass of [ConnectApi.BaseRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_gateway_callable_base.htm "Base parameters for making a request to the payment gateway.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `address` | `ConnectApi.​AddressRequest` | Address of the payment method. | Required | 52.0 |
| `bankPayment​Method` | [ConnectApi.​BankPayment​MethodRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_bank_payment_method.htm "Bank payment method input representation.") | Object representation of the bank payment method. | Required, if `cardPaymentMethod` isn't provided. | 65.0 |
| `cardPayment​Method` | `ConnectApi.​CardPayment​MethodRequest` | Object representation of the card payment method. | Required, if `bankPaymentMethod` isn't provided. | 52.0 |
| `paymentGatewayId` | String | ID of the card payment method's payment gateway. | Required | 52.0 |
| `savedByMerchant` | Boolean | Indicates whether the payment method tokenization is configured to be saved by merchant (`true`) or not (`false`). Default value is `false`. | Optional | 62.0 |
