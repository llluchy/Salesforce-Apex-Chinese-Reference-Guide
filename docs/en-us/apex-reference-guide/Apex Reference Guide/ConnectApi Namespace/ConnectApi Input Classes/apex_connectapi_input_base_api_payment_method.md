---
doc_id: "apex_connectapi_input_base_api_payment_method"
---

# ConnectApi.BaseApiPaymentMethodRequest

Payment method API input representation.

This class is abstract.

Superclass of:

-   [ConnectApi.AuthApiPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_auth_api_payment_method.htm "Payment method input representation for payment authorizations.")
-   [ConnectApi.PostAuthApiPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_post_auth_api_payment_method.htm "Payment method input for post authorization.")
-   [ConnectApi.SaleApiPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_sale_api_payment_method.htm "Payment method request for sale.")

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `address` | `ConnectApi.​AddressRequest` | Payment method address. | Required | 51.0 |
| `id` | String | Payment method record ID. Used in payment transactions. | Required | 51.0 |
| `saveForFuture` | Boolean | Shows whether Salesforce saves the payment method for future use. | Required | 51.0 |
