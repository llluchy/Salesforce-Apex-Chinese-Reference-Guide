---
doc_id: "apex_connectapi_input_search_reques"
---

# ConnectApi.SearchRequest

Search request input for searching an object.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `q` | String | Query term to search on. Query term must be two or more characters. | Required | 63.0 |
| `configurationName` | String | Name of the search configuration to apply. Look up search configuration names from Search Manager. | Optional | 63.0 |
| `dataCategories` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​SearchData​Category`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_data_category_inpu.htm "Data category input for object search.")\> | List of data categories to filter. | Optional | 63.0 |
| `displayFields` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | List of fields to display and return in the search results. By default, the fields displayed are defined by the search layout. | Optional | 63.0 |
| `filters` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​SearchFilter`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_filter_inpu.htm "Filter input for object search.")\> | List of filters to apply. | Optional | 63.0 |
| `highlights` | Boolean | Specifies whether search generates a text highlight (`true`) or not (`false`). The default value is `false`. | Optional | 63.0 |
| `offset` | Integer | Search page offset position. Default value is `0`, which indicates displaying results from the beginning without skipping any entries. | Optional | 63.0 |
| `orderBy` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​SearchOrderBy`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_order_by_inpu.htm "Order by parameter for object search.")\> | Order by input for object search. | Optional | 63.0 |
| `pageSize` | Integer | Number of results in a page. Valid values are from 1 through 1999. If unspecified the default value is `20`. | Optional | 63.0 |
| `spellcheck` | Boolean | Specifies whether search should apply spellcheck (`true`) or not (`false`). The default value is `true`. | Optional | 63.0 |

## See Also

- [find(objectApiName, request)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_find_object_1)
