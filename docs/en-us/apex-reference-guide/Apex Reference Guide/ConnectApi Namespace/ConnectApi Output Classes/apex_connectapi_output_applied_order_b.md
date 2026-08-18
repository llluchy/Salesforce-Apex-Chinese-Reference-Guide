---
doc_id: "apex_connectapi_output_applied_order_b"
---

# ConnectApi.SearchAppliedOrderBy

The applied order for object search.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `field` | String | Field used to sort the results. | 63.0 |
| `order` | [`ConnectApi.​OrderDirection`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderDirectionEnum) | Order direction. Values are:
-   `Ascending`
-   `Descending`

 | 63.0 |
| `orderNulls` | [`ConnectApi.​OrderNulls`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderNullsEnum) | Null value order. Values are:

-   `Firsts`—Null values are sorted first.
-   `Lasts`—Null values are sorted last.

 | 63.0 |

## See Also

- [ConnectApi.ObjectQueryInfo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_object_query_inf.htm)

-   [ConnectApi.SearchObject](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_objec.htm "Record results for the keyword search.")
