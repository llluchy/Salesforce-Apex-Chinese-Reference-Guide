---
doc_id: "apex_connectapi_input_range_refinement"
---

# ConnectApi.RangeRefinementInput

Attribute-based refinement with minimum or maximum numeric values for product search.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `attributeType` | String | Type of search attribute for the refinement. Values are:
-   `Custom`
-   `Standard`
-   `PricebookEntry`

 | Required | 64.0 |
| `max` | String | Maximum value for range refinement. | Required if `min` isn't specified | 64.0 |
| `min` | String | Minimum value for range refinement. | Required if `max` isn't specified | 64.0 |
| `nameOrId` | String | Developer name of the attribute for the refinement. | Required | 64.0 |
| `type` | String | Type of the refinement. Values is:

-   `Range`

 | Required | 64.0 |
