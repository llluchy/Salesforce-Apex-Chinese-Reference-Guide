---
doc_id: "apex_connectapi_input_order_by_inpu"
---

# ConnectApi.SearchOrderBy

Order by parameter for object search.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `field` | String | Field to sort the results by. | Optional | 63.0 |
| `order` | [`ConnectApi.​SearchOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderDirectionEnum) | Order direction. Values are:
-   `Ascending`
-   `Descending`

Default value is `Ascending`. | Optional | 63.0 |
| `orderNulls` | [`ConnectApi.​OrderNulls`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderNullsEnum) | Null value order. Values are:

-   `Firsts`—Null values are sorted first.
-   `Lasts`—Null values are sorted last.

Default value is `Firsts`. | Optional | 63.0 |

## See Also

- [ConnectApi.SearchRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_search_reques.htm)
