---
doc_id: "apex_connectapi_output_authorization_output"
---

# ConnectApi.AuthorizationResponse

Payment Authorization output representation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `error` | `ConnectApi.​ErrorResponse` | Error representation for the payment authorization. | 51.0 |
| `gatewayResponse` | `ConnectApi.​AuthorizationGateway​Response` | Gateway response representation for the payment authorization. | 51.0 |
| `isMultiCapture​Supported` | Boolean | Indicates whether the authorization status from a payment gateway, such as Stripe, supports multiple captures (`true`) or not (`false`). | 64.0 |
| `payment​Authorization` | `ConnectApi.​Payment​AuthorizationResponse` | Payment authorization representation. | 51.0 |
| `paymentGateway​Logs` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​GatewayLog​Response`\> | Gateway log list representation for the payment authorization. | 51.0 |
| `paymentGroup` | `ConnectApi.​PaymentGroup​Response` | Payment group representation for the payment authorization. | 51.0 |
| `paymentMethod` | `ConnectApi.​Payment​MethodResponse` | Payment method representation for the payment authorization. | 51.0 |
