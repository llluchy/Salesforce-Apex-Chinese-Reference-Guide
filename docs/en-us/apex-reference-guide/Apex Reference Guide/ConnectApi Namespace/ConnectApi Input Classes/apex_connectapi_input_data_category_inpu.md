---
doc_id: "apex_connectapi_input_data_category_inpu"
---

# ConnectApi.SearchDataCategory

Data category input for object search.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `categories` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | List of data category names to filter. | Optional | 63.0 |
| `groupName` | String | Name of the data category group to filter. | Optional | 63.0 |
| `operator` | [`ConnectApi.​DataCategory​Operator`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#DataCategoryOperatorEnum) | Data category operator.
-   `Above`—Queries the data category and all of its parent categories.
-   `AboveOrBelow`—Queries the data category, all of its parent categories, and all of its subcategories.
-   `At`—Queries the data category.
-   `Below`—Queries the data category and all of its subcategories.

 | Optional | 63.0 |

## See Also

- [ConnectApi.SearchRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_search_reques.htm)
