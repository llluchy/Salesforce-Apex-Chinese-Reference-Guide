---
doc_id: "apex_connectapi_output_cdp_query_data_graph_metadata"
---

# ConnectApi.CdpQueryDataGraphMetadata

Represents metadata for a data graph.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `dataspaceName` | String | Name of the data space in which the data graph metadata resides. | 59.0 |
| `description` | String | Description of the data graph metadata. | 59.0 |
| `developerName` | String | Developer name of the data graph metadata. | 59.0 |
| `dgObject` | [`ConnectApi.DataGraphObjectData`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_data_graph_object_data.htm "Represents object metadata for a data graph.") | Metadata for the data object of the data graph. | 59.0 |
| `extendedProperties` | `Object` | Extended properties of the data graph metadata. | 59.0 |
| `idDmoName` | String | API name of the Data Model Object (DMO) that contains the ID table for the data graph. | 59.0 |
| `idsDmo` | [`ConnectApi.DataGraphIdsDmo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_data_graph_ids_dmo.htm "Represents data about the Data Model Object (DMO) that contains the ID table for the data graph.") | Data about the DMO that contains the ID table for the data graph. | 61.0 |
| `primaryObjectName` | String | Name of the primary object for the data graph. | 59.0 |
| `primaryObjectType` | [`DataGraphObjectTypeEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#DataGraphObjectTypeEnum) | Data type of the primary object for the data graph.
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
| `status` | [`DataGraphStatusEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#DataGraphStatusEnum) | Status of the data graph.

-   `Error`
-   `Inprogress`
-   `Published`
-   `Ready`
-   `StatusUnspecified`
-   `Unrecognized`

 | 59.0 |
| `valuesDmo` | [`ConnectApi.DataGraphValuesDmo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_data_graph_values_dmo.htm "Represents data about the Data Model Object (DMO) that contains the JSON records for the data graph.") | Data about the Data Model Object (DMO) that contains the JSON records for the data graph. | 61.0 |
| `valuesDmoName` | String | API name of the DMO that contains the JSON records for the data graph. | 59.0 |
| `version` | String | Version of the data graph metadata. | 59.0 |
