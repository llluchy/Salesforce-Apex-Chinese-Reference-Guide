---
doc_id: "apex_connectapi_output_data_graph_object_data"
---

# ConnectApi.DataGraphObjectData

Represents object metadata for a data graph.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `dataGraphSourceDevName` | String | Developer name of the source data graph for the data object. | 61.0 |
| `developerName` | String | Developer name of the data object for the data graph. | 59.0 |
| `fields` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.DataGraphField`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_data_graph_field.htm "Represents a field of a data graph.")\> | List of fields for the data object of the data graph. | 59.0 |
| `filterCriteria` | String | Filter criteria for the data object of the data graph. | 59.0 |
| `memberDmoName` | String | Name of the member Data Model Object (DMO) for the data graph. | 59.0 |
| `paths` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.DataGraphRelationship`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_data_graph_relationship.htm "Represents the relationship of a field of the object data for the data graph.")\> | List of data path relationships for the object data of the data graph. | 59.0 |
| `recencyCriteria` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.RecencyCriteria`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recency_criteria.htm "Represents recency criteria of the object data for a data graph.")\> | List of recency criteria for the object data of the data graph. | 59.0 |
| `relatedObjects` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.DataGraphObjectData`](# "Represents object metadata for a data graph.")\> | Recursive list of related data objects for the data graph. | 59.0 |
| `type` | [`DataGraphObjectTypeEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#DataGraphObjectTypeEnum) | Data type of the data object for the data graph.
-   `Adg`
-   `AdgActivationAudience`
-   `AdgExternal`
-   `Bridge`
-   `Calculated`
-   `CalculatedRealTime`
-   `CalculatedStreaming`
-   `Curated`
-   `Custom`
-   `Derived`
-   `MlPrediction`
-   `ObjectTypeUnspecified`
-   `Package`
-   `SegmentMembership`
-   `Standard`
-   `System`
-   `Transform`

 | 59.0 |
