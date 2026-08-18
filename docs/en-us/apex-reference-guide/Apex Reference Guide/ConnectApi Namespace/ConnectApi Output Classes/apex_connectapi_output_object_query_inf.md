---
doc_id: "apex_connectapi_output_object_query_inf"
---

# ConnectApi.ObjectQueryInfo

Search query metadata related to the object.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `displayFields` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | Fields to display from the response. | 64.0 |
| `hasMoreResults` | Boolean | Specifies whether there are more records to fetch matching the search query for the object (`true`) or not (`false`). | 64.0 |
| `nameField` | String | Name field identifier of the object. | 64.0 |
| `numberOfMatches` | Integer | Number of results for the object matching the search query. | 64.0 |
| `orderBy` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​SearchApplied​OrderBy`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_applied_order_b.htm "The applied order for object search.")\> | Applied order for object search. | 64.0 |
| `source` | String | Source name for the object. | 64.0 |
| `spellCorrectionInfo` | [`ConnectApi.​SpellCorrection​Info`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_spell_correction_inf.htm "Spell correction information for object search.") | Spell correction information for the object search. | 64.0 |
| `status` | [`ConnectApi.​SearchStatus`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_statu.htm "Provides status on the object search.") | Status on the object search such as error messages and warnings. | 64.0 |

## See Also

- [ConnectApi.QueryInfo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_inf.htm)

-   [ConnectApi.ScopedSearchResults](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scoped_search_result.htm "Keyword search results for an object.")
