---
doc_id: "apex_connectapi_output_search_result"
---

# ConnectApi.SearchResultGroups

Results of searching objects using keywords.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `metadata` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.​ObjectMetadata`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_object_metadat.htm "Search metadata related to the object.")\> | All related metadata associated with the objects found in the results. | 63.0 |
| `queryInfo` | [`ConnectApi.​QueryInfo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_inf.htm "Query execution information.") | Search query execution information. | 64.0 |
| `resultGroups` | [`ConnectApi.​SearchResultGroup`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_result_grou.htm "Search result group.") | Record results from a keyword search. | 64.0 |
| `searchObjects` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​SearchObject`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_objec.htm "Record results for the keyword search.")\> | Record results for the keyword search grouped by object. In version 64.0 and later, use `resultGroups` for record results. | 63.0 only |

## See Also

- [findAndGroup(q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_find_objects_1)

-   [findAndGroup(q, configurationName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_find_objects_2 "Search objects using keyword search and a configuration. The search returns result groups.")
    
-   [findAndGroup(q, configurationName, highlights)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_find_objects_3 "Search objects using keyword search, a configuration, and highlights. The search returns result groups.")
