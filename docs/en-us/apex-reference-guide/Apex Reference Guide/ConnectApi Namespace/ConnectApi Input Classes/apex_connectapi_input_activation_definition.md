---
doc_id: "apex_connectapi_input_activation_definition"
---

# ConnectApi.ActivationDefinitionInput

Represents the activation definition input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `activationTargetName` | String | Name of the activation target. Either `activationTargetName` or `dataExportDefinitionId` must be present. |  | 60.0 |
| `activationTargetSubjectConfig` | [`ActivationTargetSubjectConfigInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_activation_target_subject_config.htm "Represents the activation target subject configuration input.") | Subject configuration for the activation target. |  | 60.0 |
| `attributeLimitingExpressionConfig` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.AttributeLimitingExpressionInput`\>](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_attribute_limiting_expression.htm "Represents the limiting expression input for an activation.") | Limiting expression configuration for the activation. |  | 63.0 |
| `attributesConfig` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")< [`ConnectApi.ActivationAdditionalAttributesConfigInput`\>](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_activation_additional_attributes_config.htm "Represents the additional attributes configuration for the market segment activation input.") | Additional attributes for the activation. |  | 60.0 |
| `contactPointsConfig` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.ActivationContactPointInput`\>](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_activation_contact_point.htm "Represents the activation contact point input.") | Contact points configuration for the activation target. |  | 60.0 |
| `curatedEntity` | [`CuratedEntityInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_curated_entity.htm "Represents the input details for a curated entity.") | Curated entity details for the activation. |  | 60.0 |
| `customerFileSource` | [`ActivationPlatformCustomerFileSourceEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ActivationPlatformCustomerFileSourceEnum) | Customer file source of the activation platform.
-   `First_And_Third_Party`
-   `First_Party`
-   `Third_Party`

 |  | 60.0 |
| `dataExportDefinitionId` | String | Activation target ID for the activation. Either `activationTargetName` or `dataExportDefinitionId` must be present. |  | 60.0 |
| `dataSourcesConfig` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")< [`ConnectApi.DataSourceNameConfigInput`\>](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_data_source_name_config.htm "Represents the data source name configuration input.") | Data source configuration for the activation. |  | 60.0 |
| `dataSpaceName` | String | Data space name for the activation. |  | 60.0 |
| `description` | String | Description of the activation. |  | 60.0 |
| `directDmoFiltersConfig` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")< [`ConnectApi.DMOFilterInput`\>](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_d_m_o_filter.htm "Represents the DMO filter input.") | Direct DMO filters for the activation. |  | 60.0 |
| `limitValue` | Integer | Audience limit value for the activation. |  | 63.0 |
| `marketSegmentId` | String | Segment ID of the segment the activation needs to be created against. Either `marketSegmentID` or `segmentApiName` must be present. |  | 60.0 |
| `name` | String | Name of the activation. |  | 60.0 |
| `refreshType` | String | Indicates the refresh type for the activation, either `Full` or `Incremental` . |  | 60.0 |
| `relatedDmoFiltersConfig` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")< [`ConnectApi.DMOFilterInput`\>](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_d_m_o_filter.htm "Represents the DMO filter input.") | DMO filters on related attributes for the activation. |  | 60.0 |
| `segmentApiName` | String | Developer name of the segment the activation needs to be created against. Either `marketSegmentID` or `segmentApiName` must be present. |  | 60.0 |
| `shouldExcludeDeletes` | Boolean | Indicates whether to exclude records removed since the last refresh (`true`) or not (`false`) . |  | 60.0 |
| `shouldExcludeUpdates` | Boolean | Indicates whether to exclude records modified since the last refresh (`true`) or not (`false`) . |  | 60.0 |
| `staticDataConfig` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")< [`ConnectApi.StaticDataInput`\>](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_static_data.htm "Represents the static data input.") | Configuration of static data, which adds metadata or campaign details in the ouput. For example, `campaignId` or `campaignName`. |  | 60.0 |

## See Also

- [createActivation(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_createActivation_1)

-   [updateActivation(activationId, input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_updateActivation_1 "Update an activation by ID.")
