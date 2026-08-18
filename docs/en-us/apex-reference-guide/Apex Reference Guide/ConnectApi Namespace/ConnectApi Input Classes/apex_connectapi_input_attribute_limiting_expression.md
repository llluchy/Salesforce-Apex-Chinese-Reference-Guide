---
doc_id: "apex_connectapi_input_attribute_limiting_expression"
---

# ConnectApi.AttributeLimitingExpressionInput

Represents the limiting expression input for an activation.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `attributeName` | String | Name of the attribute. |  | 63.0 |
| `entityName` | String | Name of the entity. |  | 63.0 |
| `order` | [`FilterSortOrderEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FilterSortOrderEnum) | The sort order for filtering.
-   `FilterSortOrderAsc`
-   `FilterSortOrderDesc`

 |  | 63.0 |
| `queryPathConfig` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")< [`ConnectApi.QueryPathInputConfig`\>](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_query_path_config.htm "Represents the query path configuration input.") | Query path configuration input. |  | 63.0 |
| `type` | String | Type of attribute. |  | 63.0 |
