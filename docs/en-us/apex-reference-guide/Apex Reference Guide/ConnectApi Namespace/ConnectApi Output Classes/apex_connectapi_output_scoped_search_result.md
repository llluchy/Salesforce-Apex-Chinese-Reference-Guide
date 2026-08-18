---
doc_id: "apex_connectapi_output_scoped_search_result"
---

# ConnectApi.ScopedSearchResults

Keyword search results for an object.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `metadata` | [`ConnectApi.​ObjectMetadata`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_object_metadat.htm "Search metadata related to the object.") | All search metadata associated with the object. | 63.0 |
| `objectQueryInfo` | [`ConnectApi.​ObjectQueryInfo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_object_query_inf.htm "Search query metadata related to the object.") | Query execution information for the object. | 64.0 |
| `queryId` | String | Unique identifier assigned to a search query to enable tracking usage and analysis of user interactions with search results. | 65.0 |
| `results` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​SearchResult`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_resul.htm "Results from searching an object using keywords.")\> | Record results for the keyword search. | 64.0 |
| `searchObject` | [`ConnectApi.​SearchObject`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_objec.htm "Record results for the keyword search.") | Record results for the keyword search. In version 64.0 and later, use `results` for record results. | 63.0 only |

## See Also

- [find(objectApiName, request)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_find_object_1)
