---
doc_id: "apex_connectapi_output_auth_reversal_output"
---

# ConnectApi.AuthorizationReversalResponse

Authorization Reversal output representation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `error` | [`ConnectApi.​ErrorResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm "Base error response.") | Error response representation for the authorization reversal. | 51.0 |
| `gatewayResponse` | [`ConnectApi.​AuthReversal​GatewayResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_auth_reversal_gateway_response.htm "Authorization Reversal Gateway Response Representation.") | Gateway response representation for authorization reversal. | 51.0 |
| `paymentAuthAdjustment` | [`ConnectApi.​PaymentAuth​AdjustmentResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_auth_adjustment_output.htm "Authorization Adjustment output representation.") | Payment authorization adjustment response representation for the authorization reversal. | 51.0 |
| `paymentGatewayLogs` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​GatewayLogResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_gateway_log_output.htm "Gateway log output.")\> | Gateway log collection representation for the authorization reversal. | 51.0 |
