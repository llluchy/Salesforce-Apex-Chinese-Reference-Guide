---
doc_id: "apex_connectapi_output_sale_output"
---

# ConnectApi.SaleResponse

Payment sale response.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `error` | `ConnectApi.​ErrorResponse` | Error representation for the payment sale. | 54.0 |
| `gatewayResponse` | `ConnectApi.​SaleGatewayResponse` | Information from the payment gateway following the sale request. | 54.0 |
| `payment` | `ConnectApi.​PaymentResponse` | Information about the payment used in the sale request. | 54.0 |
| `paymentGateway​Logs` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​GatewayLogResponse`\> | Collection of responses from the gateway following the sale request. | 54.0 |
| `paymentGroup` | `ConnectApi.​PaymentGroupResponse` | Payment group used in the sale request. | 54.0 |
| `paymentMethod` | `ConnectApi.​PaymentMethodResponse` | Payment method used in the sale request. | 54.0 |
