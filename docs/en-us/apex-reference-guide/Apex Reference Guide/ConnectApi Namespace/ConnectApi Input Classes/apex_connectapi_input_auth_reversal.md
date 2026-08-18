---
doc_id: "apex_connectapi_input_auth_reversal"
---

# ConnectApi.AuthorizationReversalRequest

Authorization reversal input consumed by authorization reversal service.

Subclass of [ConnectApi.BaseRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_gateway_callable_base.htm "Base parameters for making a request to the payment gateway.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `accountId` | String | Account for the payment authorization reversal. Must match the payment authorization's account. |  | 51.0 |
| `amount` | Double | Amount of adjustment applied to the payment authorization. |  | 51.0 |
| `comments` | String | Users can add comments to provide additional details about a record. Maximum of 1,000 characters. |  | 51.0 |
| `effectiveDate` | Datetime | Date that the adjustment takes effect on the authorization. |  | 51.0 |
