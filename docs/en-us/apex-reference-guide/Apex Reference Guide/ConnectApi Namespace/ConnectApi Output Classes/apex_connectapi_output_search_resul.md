---
doc_id: "apex_connectapi_output_search_resul"
---

# ConnectApi.SearchResult

Results from searching an object using keywords.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `apiName` | String | Object API name. | 64.0 |
| `chunks` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​Chunk`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chun.htm "Content chunk for the search result.") | Content chunks for the search result. | 63.0 |
| `fields` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.​RecordFieldValue`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_field_valu.htm "Field value.")\> | Field values by field API | 63.0 |
| `id` | String | ID of the record. | 63.0 |
| `matchInfo` | [`ConnectApi.​MatchInfo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_match_inf.htm "Search information related to the search result.") | Search information related to the search result. | 63.0 |
| `sourceUrl` | String | Source URL from where the record originated. | 64.0 |

## See Also

- [ConnectApi.SearchResultGroup](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_result_grou.htm)

-   [ConnectApi.ScopedSearchResults](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scoped_search_result.htm "Keyword search results for an object.")
    
-   [ConnectApi.SearchObject](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_objec.htm "Record results for the keyword search.")
