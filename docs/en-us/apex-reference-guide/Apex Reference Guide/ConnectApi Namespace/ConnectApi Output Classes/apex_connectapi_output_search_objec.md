---
doc_id: "apex_connectapi_output_search_objec"
---

# ConnectApi.SearchObject

Record results for the keyword search.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `displayFields` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | Fields to display from the response. | 63.0 |
| `objectApiName` | String | Object API name. | 63.0 |
| `orderBy` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​SearchApplied​OrderBy`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_applied_order_b.htm "The applied order for object search.")\> | Applied order for object search. | 63.0 |
| `pageInfo` | [`ConnectApi.​PageInfo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_page_inf.htm "Page position information for the object search.") | Page position information for the object search. | 63.0-64.0 |
| `searchResults` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​SearchResult`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_resul.htm "Results from searching an object using keywords.")\> | Search results from the query. | 63.0 |
| `spellCorrectionInfo` | [`ConnectApi.​SpellCorrection​Info`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_spell_correction_inf.htm "Spell correction information for object search.") | Spell correction information for the object search. | 63.0 |
| `status` | [`ConnectApi.​SearchStatus`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_statu.htm "Provides status on the object search.") | Provides status on the object search such as error messages and warnings. | 63.0 |

## See Also

- [ConnectApi.SearchResultGroups](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_result.htm)

-   [ConnectApi.SearchAnswer](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_answe.htm "Results of searching objects using a natural language query.")
    
-   [ConnectApi.ScopedSearchResults](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scoped_search_result.htm "Keyword search results for an object.")
