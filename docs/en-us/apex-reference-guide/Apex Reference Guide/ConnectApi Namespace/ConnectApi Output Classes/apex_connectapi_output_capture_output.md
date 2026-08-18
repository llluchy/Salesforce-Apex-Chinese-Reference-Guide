---
doc_id: "apex_connectapi_output_capture_output"
---

# ConnectApi.CaptureResponse

Capture output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `error` | [`ConnectApi.​ErrorResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm "Base error response.") | Error response representation for an authorization capture. | 50.0 |
| `gatewayResponse` | [`ConnectApi.​CaptureGatewayResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_capture_gateway_response.htm "Gateway capture response.") | Gateway log response containing details about gateway logs created during the process of the capture request. | 50.0 |
| `payment` | [`ConnectApi.​PaymentResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_output.htm "Payment output.") | Payment response object for the capture request. Contains the information related to a payment object created during request processing. | 50.0 |
| `paymentGatewayLogs` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​GatewayLogResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_gateway_log_output.htm "Gateway log output.")\> | Gateway log collection for an authorization capture. | 50.0 |
| `paymentGroup` | [`ConnectApi.​PaymentGroupResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_group.htm "Payment group.") | Payment group associated with the capture request. | 50.0 |
