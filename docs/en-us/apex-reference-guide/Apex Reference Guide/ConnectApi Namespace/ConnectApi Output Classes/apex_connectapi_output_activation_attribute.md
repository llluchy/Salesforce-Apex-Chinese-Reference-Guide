---
doc_id: "apex_connectapi_output_activation_attribute"
---

# ConnectApi.ActivationAttribute

Represents the activation attribute output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `activationPlatformAttrId` | String | ID of the activation platform attribute. | 60.0 |
| `attributeLabel` | String | Label of the activation attribute. | 60.0 |
| `attributeName` | String | Name of the activation attribute. | 60.0 |
| `curatedFieldId` | String | Curated ID field for the activation attribute. | 60.0 |
| `dataSourceType` | String | Data source type for the activation attribute. | 60.0 |
| `entityName` | String | Entity name of the activation attribute. | 60.0 |
| `filterExpression` | [`ConnectApi.AttributeFilterExpression`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_attribute_filter_expression.htm "Represents the activation attribute filter expression.") | Filter expression for the activation attribute. | 60.0 |
| `path` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​QueryPathConfigList`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_path_config_list.htm "Represents a list of query path configurations.")\> | Query path for the activation attributes. | 60.0 |
| `preferredName` | String | Preferred name of the activation attribute. | 60.0 |
| `refAttrDeveloperName` | String | Developer name of the referrence attribute. | 60.0 |
| `source` | [`DataExportAttributeSourceEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#DataExportAttributeSourceEnum) | Activation attribute source.
-   `Direct`
-   `Related`

 | 60.0 |
| `type` | [`DataExportAttributeTypeEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#DataExportAttributeTypeEnum) | Type of activation attribute.

-   `Computed_Dimension`
-   `Computed_Measure`
-   `Model`
-   `Model_Related`
-   `Non_Aggregatable_Computed_Measure`

 | 60.0 |
