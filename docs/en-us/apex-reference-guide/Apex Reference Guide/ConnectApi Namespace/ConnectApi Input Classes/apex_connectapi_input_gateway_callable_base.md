---
doc_id: "apex_connectapi_input_gateway_callable_base"
---

# ConnectApi.BaseRequest

Base parameters for making a request to the payment gateway.

This class is abstract.

Subclass of [ConnectApi.AuditParamsRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_audit_params.htm "Audit Parameters input.").

Superclass of:

-   [ConnectApi.AuthorizationRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_authorization.htm "Payment Authorization input consumed by the Payment Authorization service.")
-   [ConnectApi.AuthorizationReversalRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_auth_reversal.htm "Authorization reversal input consumed by authorization reversal service.")
-   [ConnectApi.CaptureRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_capture.htm "Payment capture input consumed by the payment capture service.")
-   [ConnectApi.PaymentMethodTokenizationRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_payment_method_tokenization.htm "Payment method tokenization input consumed by the payment tokenization service.")
-   [ConnectApi.PostAuthRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_post_auth.htm "Payment post authorization input consumed by the payment post authorization service.")
-   [ConnectApi.RefundRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_refund.htm "Refund input.")
-   [ConnectApi.SaleRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_sale.htm "Payment sale input consumed by the payment sale service.")

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `additionalData` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, String> | An optional map of additional parameters to be sent to the payment gateway. | Optional | 50.0 |
| `idempotencyKey` | String | Idempotency key. | Optional | 50.0 |
