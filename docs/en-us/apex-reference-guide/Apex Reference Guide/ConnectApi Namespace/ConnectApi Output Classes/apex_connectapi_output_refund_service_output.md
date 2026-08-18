---
doc_id: "apex_connectapi_output_refund_service_output"
---

# ConnectApi.ReferencedRefundResponse

Refund comprehensive output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `error` | [`ConnectApi.​ErrorResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm "Base error response.") | Error response representation for the refund. | 50.0 |
| `gatewayResponse` | [`ConnectApi.​RefundGatewayResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_refund_gateway_response.htm "Refund gateway response.") | Gateway response received for the processed refund request. | 50.0 |
| `paymentGatewayLogs` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​GatewayLogResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_gateway_log_output.htm "Gateway log output.")\> | Gateway log collection representation for the refund. | 50.0 |
| `paymentGroup` | [`ConnectApi.​PaymentGroupResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_group.htm "Payment group.") | Payment group associated with the refund. | 50.0 |
| `refund` | [`ConnectApi.​RefundResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_refund_output.htm "Refund output.") | Refund response representation. | 50.0 |
