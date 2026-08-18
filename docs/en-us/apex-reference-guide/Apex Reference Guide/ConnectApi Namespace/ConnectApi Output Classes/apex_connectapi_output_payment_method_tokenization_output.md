---
doc_id: "apex_connectapi_output_payment_method_tokenization_output"
---

# ConnectApi.PaymentMethodTokenizationResponse

Payment method tokenization output representation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `error` | `ConnectApi.​ErrorResponse` | Error representation for the payment method tokenization process. Sent only if the tokenization process encounters an error in the gateway. | 52.0 |
| `gatewayResponse` | `ConnectApi.​PaymentMethodTokenization​GatewayResponse` | Response containing the tokenized payment method value from the payment gateway. | 52.0 |
| `paymentGatewayLogs` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​GatewayLogResponse`\> | Logs showing more details about the tokenization process that occurred in the gateway. | 52.0 |
| `paymentMethod` | `ConnectApi.PaymentMethod​Response` | Object representation of the payment method object that was tokenized. | 52.0 |
