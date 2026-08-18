---
doc_id: "apex_connectapi_output_dmo_filter"
---

# ConnectApi.DmoFilter

Represents a DMO filter output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `entityFilter` | [`ConnectApi.BaseComparison`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_comparison.htm "Represents the abstract class for a base comparison output.") | Filter for the entity. | 60.0 |
| `entityFilterType` | String | Type of DMO filter. | 60.0 |
| `entityName` | String | Entity name of the DMO filter. | 60.0 |
| `filterLimit` | [`ConnectApi.DmoFilterLimit`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_dmo_filter_limit.htm "Represents a DMO filter limit output.") | Limit for the DMO filter. | 60.0 |
| `inheritedFilter` | [`ConnectApi.BaseComparison`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_comparison.htm "Represents the abstract class for a base comparison output.") | Inherited filter. | 60.0 |
| `inheritedFilterType` | String | Type of inherited filter. | 60.0 |
| `pathFromActivateOnToContainer` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​QueryPathConfigList`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_path_config_list.htm "Represents a list of query path configurations.")\> | Path from the activation to the container. | 60.0 |
| `pathFromContainerToEntity` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​QueryPathConfigList`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_path_config_list.htm "Represents a list of query path configurations.")\> | Path from the container to the entity. | 60.0 |
