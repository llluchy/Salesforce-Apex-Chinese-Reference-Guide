---
doc_id: "apex_connectapi_output_search_category"
---

# ConnectApi.SearchCategory

Search category.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `category` | [`ConnectApi.​ProductCategoryData`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_category.htm "Product category.") | Information about the category. | 52.0 |
| `children` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​SearchCategory`](# "Search category.")\> | First-level child categories of the category searched with non-empty search results. | 52.0 |
| `productCount` | Long | Number of products in the search results that belong to the category. | 52.0 |

## See Also

- [ConnectApi.ProductSearchResults](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_results.htm)
