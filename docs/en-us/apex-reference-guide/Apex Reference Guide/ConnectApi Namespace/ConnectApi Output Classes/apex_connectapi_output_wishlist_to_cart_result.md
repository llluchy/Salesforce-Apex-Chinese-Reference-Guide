---
doc_id: "apex_connectapi_output_wishlist_to_cart_result"
---

# ConnectApi.WishlistToCartResult

Result of adding a wishlist to a cart.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `cartId` | String | ID of the cart to which the products were added. | 49.0 |
| `failedWishlist​ToCartItems` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​CartItemResult`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item_result.htm "Result after requesting a cart item.")\> | Wishlist items that weren’t successfully added to the cart. | 49.0 |
| `productsFailed​Count` | Integer | Total number of products that weren’t added to the cart. | 49.0 |
| `productsRequested​Count` | Integer | Total number of products requested to add to the cart. | 49.0 |
| `productsSucceeded​Count` | Integer | Total number of products that were successfully added to the cart. | 49.0 |
| `succeededWishlist​ToCartItems` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​CartItemResult`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item_result.htm "Result after requesting a cart item.")\> | Wishlist items that were successfully added to the cart. | 49.0 |
