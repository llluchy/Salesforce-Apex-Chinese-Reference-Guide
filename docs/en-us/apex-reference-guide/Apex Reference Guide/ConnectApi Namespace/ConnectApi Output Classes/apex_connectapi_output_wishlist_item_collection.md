---
doc_id: "apex_connectapi_output_wishlist_item_collection"
---

# ConnectApi.WishlistItemCollection

Collection of wishlist items.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `currencyIsoCode` | String | Three-letter ISO 4217 currency code associated with the product. | 49.0 |
| `currentPageToken` | String | Token identifying the current page. | 49.0 |
| `currentPageUrl` | String | Connect REST API URL identifying the current page. | 49.0 |
| `hasErrors` | Boolean | Specifies whether at least one of the results contains an error (`true`) or not (`false`). | 49.0 |
| `items` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​WishlistItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_item.htm "Item in a wishlist.")\> | Collection of wishlist items. | 49.0 |
| `nextPageToken` | String | Token identifying the next page, or `null` if there isn’t a next page. | 49.0 |
| `nextPageUrl` | String | Connect REST API URL identifying the next page, or `null` if there isn’t a next page. | 49.0 |
| `previousPageToken` | String | Token identifying the previous page, or `null` if there isn’t a previous page. | 49.0 |
| `previousPageUrl` | String | Connect REST API URL identifying the previous page, or `null` if there isn’t a previous page. | 49.0 |

## See Also

- [ConnectApi.Wishlist](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist.htm)
