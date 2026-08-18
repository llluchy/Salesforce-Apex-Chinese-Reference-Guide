---
doc_id: "apex_connectapi_output_cart_item_collection"
---

# ConnectApi.CartItemCollection

A collection of items in a cart.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `approaching​Discounts` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | List of approaching discounts for the cart items. | 64.0 |
| `cartCoupons` | [`ConnectApi.​CartCouponCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_coupon_collection.htm "Collection of coupons related to a cart.") | Collection of coupons in the cart. | 59.0 |
| `cartItems` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​CartItemResult`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item_result.htm "Result after requesting a cart item.")\> | Collection of cart item results. | 49.0 |
| `cartPromotions` | [`ConnectApi.​CartPromotionCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_promotion_collection.htm "All the promotions associated with the cart.") | Collection of promotions in the cart. | 59.0 |
| `cartSummary` | [`ConnectApi.​CartSummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_summary.htm "A cart summary.") | Summary of the cart. | 49.0 |
| `currentPage` | Integer | Current page of cart items. The value matches the requested page number, unless the requested page number exceeds the total number of pages. In this scenario, the current page is the highest available page number. | 60.0 |
| `currentPageToken` | String | Token identifying the current page. | 49.0 |
| `currentPageUrl` | String | Connect REST API URL identifying the current page. | 49.0 |
| `hasErrors` | Boolean | Specifies whether at least one of the results contains an error. | 49.0 |
| `nextPageToken` | String | Token identifying the next page, or `null` if there isn’t a next page. | 49.0 |
| `nextPageUrl` | String | Connect REST API URL identifying the next page, or `null` if there isn’t a next page. | 49.0 |
| `previousPageToken` | String | Token identifying the previous page, or `null` if there isn’t a previous page. | 49.0 |
| `previousPageUrl` | String | Connect REST API URL identifying the previous page, or `null` if there isn’t a previous page. | 49.0 |
| `totalItemCount` | Integer | Total number of unique products in the cart. | 60.0 |
| `totalNumberOfPages` | Integer | Total number of pages for the given page size. | 60.0 |
