---
doc_id: "apex_connectapi_output_product_cart_item_collection"
---

# ConnectApi.ProductCartItemCollection

Items in the cart, grouped by product type.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `count` | Integer | Number of cart items returned on the current page | 60.0 |
| `currentPage` | Integer | Current page of cart items. The value matches the requested page number, unless the requested page number exceeds the total number of pages. In this scenario, the current page is the highest available page number. | 60.0 |
| `hasErrors` | Boolean | Indicates whether at least one of the results contains an error (`True`) or not (`False`). | 60.0 |
| `products` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ProductCartItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_cart_item.htm "Cart items of a specific product type.")\> | Products in the cart. | 60.0 |
| `totalItemCount` | Integer | Total number of unique products in the cart. | 60.0 |
| `totalNumberOfPages` | Integer | Total number of pages for the given page size. | 60.0 |
