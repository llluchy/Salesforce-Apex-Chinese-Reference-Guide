---
doc_id: "apex_connectapi_output_post_auth_gateway_response"
---

# ConnectApi.PostAuthGatewayResponse

Gateway response after confirmation that the merchant is ready to capture payment of an existing pre-authorized transaction.

Sublass of [ConnectApi.AbstractGatewayResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_gateway_txn_response.htm "Payment gateway response fields used in sale, authorization, and capture services.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `gateway​AuthorizationCode` | String | Code used to authorize the payment that the payment gateway is processing. | 54.0 |
| `paymentMethod​Details` | [ConnectApi.​PaymentMethod​Details](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_method_details.htm "Details about the payment method.") | Details about the payment method. | 54.0 |
