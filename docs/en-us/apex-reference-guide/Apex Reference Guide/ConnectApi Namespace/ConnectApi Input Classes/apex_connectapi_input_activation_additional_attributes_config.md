---
doc_id: "apex_connectapi_input_activation_additional_attributes_config"
---

# ConnectApi.ActivationAdditionalAttributesConfigInput

Represents the additional attributes configuration for the market segment activation input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `activationPlatformAttrId` | String | Activation platform attribute ID. |  | 60.0 |
| `dataSourceType` | String | Type of data source. |  | 60.0 |
| `entityName` | String | Name of the entity. |  | 60.0 |
| `filterExpression` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")< [`ConnectApi.AttributeFilterInput`\>](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_attribute_filter.htm "Represents the attribute filter input.") | Attribute filter expression. |  | 60.0 |
| `isRolluppable` | Boolean | Indicates whether the attribute can roll up (`true`) or not (`false`). |  | 60.0 |
| `label` | String | Label of the attribute. |  | 60.0 |
| `name` | String | Name of the attribute. |  | 60.0 |
| `preferredName` | String | Preferred name of the attribute. |  | 60.0 |
| `queryPathConfig` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")< [`ConnectApi.QueryPathInputConfig`\>](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_query_path_config.htm "Represents the query path configuration input.") | Query path from the `activateOn` entity to the additional attribute entity. |  | 60.0 |
| `referenceAttributeName` | String | Developer name of the reference attribute. |  | 60.0 |
| `source` | [`DataExportAttributeSourceEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#DataExportAttributeSourceEnum) | Activation attribute source.
-   `Direct`
-   `Related`

 |  | 60.0 |
| `type` | [`DataExportAttributeTypeEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#DataExportAttributeTypeEnum) | Type of activation attribute.

-   `Computed_Dimension`
-   `Computed_Measure`
-   `Model`
-   `Model_Related`
-   `Non_Aggregatable_Computed_Measure`

 |  | 60.0 |
