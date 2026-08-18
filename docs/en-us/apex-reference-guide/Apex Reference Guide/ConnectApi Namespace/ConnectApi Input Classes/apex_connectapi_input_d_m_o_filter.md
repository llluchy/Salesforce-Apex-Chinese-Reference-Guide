---
doc_id: "apex_connectapi_input_d_m_o_filter"
---

# ConnectApi.DMOFilterInput

Represents the DMO filter input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `entityFilter` | [`BaseComparisonInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_base_comparison.htm "Represents the base comparison input.") | Entity filter. |  | 60.0 |
| `entityFilterType` | String | Type of the entity filter. |  | 60.0 |
| `entityName` | String | Name of the entity. |  | 60.0 |
| `filterLimit` | [`DmoFilterLimitInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_dmo_filter_limit.htm "Represents the DMO filter limit input.") | Filter limit. |  | 60.0 |
| `inheritedFilter` | [`BaseComparisonInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_base_comparison.htm "Represents the base comparison input.") | Inherited filter. |  | 60.0 |
| `inheritedFilterType` | String | Type of the inherited filter. |  | 60.0 |
| `queryPathConfigForActivateOnToContainer` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")< [`ConnectApi.QueryPathInputConfig`\>](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_query_path_config.htm "Represents the query path configuration input.") | Path from the activation to the container. |  | 60.0 |
| `queryPathConfigFromContainerToEntity` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")< [`ConnectApi.QueryPathInputConfig`\>](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_query_path_config.htm "Represents the query path configuration input.") | Path from the container to the entity. |  | 60.0 |
