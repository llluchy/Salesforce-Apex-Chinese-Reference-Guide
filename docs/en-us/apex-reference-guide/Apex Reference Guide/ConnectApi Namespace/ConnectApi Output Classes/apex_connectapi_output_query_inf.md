---
doc_id: "apex_connectapi_output_query_inf"
---

# ConnectApi.QueryInfo

Query execution information.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `queryId` | String | Unique identifier assigned to a search query to enable tracking usage and analysis of user interactions with search results. | 65.0 |
| `sobjects` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.​ObjectQueryInfo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_object_query_inf.htm "Search query metadata related to the object.")\> | Query execution information for the object. | 64.0 |
| `status` | [`ConnectApi.​SearchStatus`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_statu.htm "Provides status on the object search.") | Status on the object search such as error messages and warnings. | 64.0 |
