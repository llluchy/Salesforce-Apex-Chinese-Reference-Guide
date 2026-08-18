---
doc_id: "apex_ConnectAPI_CommerceWishlist_static_methods"
---

# CommerceWishlist Class

Get, create, update, and delete wishlists. Add wishlists to carts. Get wishlist items, add items to wishlists, and delete wishlist items.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CommerceWishlist Methods

These methods are for `CommerceWishlist`. All methods are static.

## See Also

- [addItemToWishlist(webstoreId, wishlistId, wishlistItemInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_addItemToWishlist_4)
- [addItemToWishlist(webstoreId, effectiveAccountId, wishlistId, wishlistItemInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_addItemToWishlist_5)
- [addWishlistToCart(webstoreId, wishlistId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_addWishlistToCart_1)
- [addWishlistToCart(webstoreId, wishlistId, effectiveAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_addWishlistToCart_1a)
- [addWishlistToCartWithCartId(webstoreId, wishlistId, cartId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_addWishlistToCartWithCartId_3)
- [addWishlistToCartWithCartId(webstoreId, wishlistId, cartId, effectiveAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_addWishlistToCartWithCartId_4)
- [createWishlist(webstoreId, wishlistInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_createWishlist_3)
- [createWishlist(webstoreId, effectiveAccountId, wishlistInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_createWishlist_4)
- [deleteWishlist(webstoreId, wishlistId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_deleteWishlist_1)
- [deleteWishlist(webstoreId, effectiveAccountId, wishlistId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_deleteWishlist_2)
- [getWishlist(webstoreId, effectiveAccountId, wishlistId, productFields, sortItemsBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_getWishlist_7)
- [getWishlist(webstoreId, effectiveAccountId, wishlistId, productFields, pageSize, sortItemsBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_getWishlist_12)
- [getWishlistItems(webstoreId, effectiveAccountId, wishlistId, productFields, pageParam, sortItemsBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_getWishlistItems_8)
- [getWishlistItems(webstoreId, effectiveAccountId, wishlistId, productFields, pageParam, pageSize, sortItemsBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_getWishlistItems_4)
- [getWishlistSummaries(webstoreId, effectiveAccountId, includeDisplayedList)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_getWishlistSummaries_3)
- [getWishlistSummaries(webstoreId, effectiveAccountId, includeDisplayedList, productFields, sortItemsBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_getWishlistSummaries_9)
- [getWishlistSummaries(webstoreId, effectiveAccountId, includeDisplayedList, productFields, pageSize, sortItemsBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_getWishlistSummaries_13)
- [removeWishlistItem(webstoreId, effectiveAccountId, wishlistId, wishlistItemId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_removeWishlistItem_1)
- [updateWishlist(webstoreId, wishlistId, wishlistUpdateInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_updateWishlist_4)
- [updateWishlist(webstoreId, effectiveAccountId, wishlistId, wishlistUpdateInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_updateWishlist_5)

### addItemToWishlist(webstoreId, wishlistId, wishlistItemInput)

Add an item to a wishlist for the context user.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.WishlistItem addItemToWishlist(String webstoreId, String wishlistId, ConnectApi.WishlistItemInput wishlistItemInput)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

wishlistId

Type: String

ID of the wishlist.

wishlistItemInput

Type: [`ConnectApi.WishlistItemInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_wishlist_item.htm "Item to update or add to a wishlist.")

A `ConnectApi.WishlistItemInput` body with the item to add to the wishlist.

#### Return Value

Type: [`ConnectApi.WishlistItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_item.htm "Item in a wishlist.")

#### Usage

This method respects buyer View Product entitlements and only users entitled to view product data can access it.

### addItemToWishlist(webstoreId, effectiveAccountId, wishlistId, wishlistItemInput)

Add an item to a wishlist.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.WishlistItem addItemToWishlist(String webstoreId, String effectiveAccountId, String wishlistId, ConnectApi.WishlistItemInput wishlistItemInput)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

effectiveAccountId

Type: String

ID of the account for which the request is made.If `null`, defaults to the account ID for the context user.

wishlistId

Type: String

ID of the wishlist.

wishlistItemInput

Type: [`ConnectApi.WishlistItemInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_wishlist_item.htm "Item to update or add to a wishlist.")

A `ConnectApi.WishlistItemInput` body with the item to add to the wishlist.

#### Return Value

Type: [`ConnectApi.WishlistItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_item.htm "Item in a wishlist.")

#### Usage

This method respects buyer View Product entitlements and only users entitled to view product data can access it.

### addWishlistToCart(webstoreId, wishlistId)

Add a wishlist to the active cart for the context user.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.WishlistToCartResult addWishlistToCart(String webstoreId, String wishlistId)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

wishlistId

Type: String

ID of the wishlist.

#### Return Value

Type: `ConnectApi.WishlistToCartResult`

#### Usage

This method respects buyer View Product entitlements and only users entitled to view product data can access it.

### addWishlistToCart(webstoreId, wishlistId, effectiveAccountId)

Add a wishlist to the active cart.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.WishlistToCartResult addWishlistToCart(String webstoreId, String wishlistId, String effectiveAccountId)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

wishlistId

Type: String

ID of the wishlist.

effectiveAccountId

Type: String

ID of the account for which the request is made.If `null`, defaults to the account ID for the context user.

#### Return Value

Type: `ConnectApi.WishlistToCartResult`

#### Usage

This method respects buyer View Product entitlements and only users entitled to view product data can access it.

### addWishlistToCartWithCartId(webstoreId, wishlistId, cartId)

Add a wishlist to a cart.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.WishlistToCartResult addWishlistToCartWithCartId(String webstoreId, String wishlistId, String cartId)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

wishlistId

Type: String

ID of the wishlist.

cartId

Type: String

ID of the cart. If `null`, wishlist items are added to the active cart.

#### Return Value

Type: `ConnectApi.WishlistToCartResult`

#### Usage

This method respects buyer View Product entitlements and only users entitled to view product data can access it.

### addWishlistToCartWithCartId(webstoreId, wishlistId, cartId, effectiveAccountId)

Add a wishlist to a cart.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.WishlistToCartResult addWishlistToCartWithCartId(String webstoreId, String wishlistId, String cartId, String effectiveAccountId)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

wishlistId

Type: String

ID of the wishlist.

cartId

Type: String

ID of the cart. If `null`, wishlist items are added to the active cart.

effectiveAccountId

Type: String

ID of the account for which the request is made.If `null`, defaults to the account ID for the context user.

#### Return Value

Type: `ConnectApi.WishlistToCartResult`

#### Usage

This method respects buyer View Product entitlements and only users entitled to view product data can access it.

### createWishlist(webstoreId, wishlistInput)

Create a wishlist for the context user.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.Wishlist createWishlist(String webstoreId, ConnectApi.WishlistInput wishlistInput)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

wishlistInput

Type: [`ConnectApi.WishlistInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_wishlist.htm "Create a wishlist.")

A `ConnectApi.WishlistInput` body that includes the wishlist name and items.

#### Return Value

Type: [`ConnectApi.Wishlist`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist.htm "Wishlist, including summary and items.")

### createWishlist(webstoreId, effectiveAccountId, wishlistInput)

Create a wishlist.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.Wishlist createWishlist(String webstoreId, String effectiveAccountId, ConnectApi.WishlistInput wishlistInput)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

effectiveAccountId

Type: String

ID of the account for which the request is made.If `null`, defaults to the account ID for the context user.

wishlistInput

Type: [`ConnectApi.WishlistInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_wishlist.htm "Create a wishlist.")

A `ConnectApi.WishlistInput` body that includes the wishlist name and items.

#### Return Value

Type: [`ConnectApi.Wishlist`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist.htm "Wishlist, including summary and items.")

### deleteWishlist(webstoreId, wishlistId)

Delete a wishlist for the context user.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

`public static Void deleteWishlist(String webstoreId, String wishlistId)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

wishlistId

Type: String

ID of the wishlist.

#### Return Value

Type: Void

### deleteWishlist(webstoreId, effectiveAccountId, wishlistId)

Delete a wishlist.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static Void deleteWishlist(String webstoreId, String effectiveAccountId, String wishlistId)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

effectiveAccountId

Type: String

ID of the account for which the request is made.If `null`, defaults to the account ID for the context user.

wishlistId

Type: String

ID of the wishlist.

#### Return Value

Type: Void

### getWishlist(webstoreId, effectiveAccountId, wishlistId, productFields, sortItemsBy)

Get a wishlist with product fields sorted by items.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.Wishlist getWishlist(String webstoreId, String effectiveAccountId, String wishlistId, String productFields, ConnectApi.WishlistItemSortOrder sortItemsBy)`

#### Parameters

**webstoreId**

Type: String

ID of the webstore.

**effectiveAccountId**

Type: String

ID of the account for which the request is made.If `null`, defaults to the account ID for the context user.

**wishlistId**

Type: String

ID of the wishlist.

**productFields**

Type: String

Comma-separated list of custom product fields. Fields aren’t case-sensitive. For example, `ProductCode` and `productcode` return the same results.

**sortItemsBy**

Type: [`ConnectApi.WishlistItemSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#WishlistItemSortOrderEnum)

Sort order for wishlist items. Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date.
-   `CreatedDateDesc`—Sorts by most recent creation date.

The default sort order is `CreatedDateDesc`.

#### Return Value

Type: [`ConnectApi.Wishlist`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist.htm "Wishlist, including summary and items.")

### getWishlist(webstoreId, effectiveAccountId, wishlistId, productFields, pageSize, sortItemsBy)

Get a wishlist with product fields sorted by items with a specified number of items per page.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.Wishlist getWishlist(String webstoreId, String effectiveAccountId, String wishlistId, String productFields, Integer pageSize, ConnectApi.WishlistItemSortOrder sortItemsBy)`

#### Parameters

**webstoreId**

Type: String

ID of the webstore.

**effectiveAccountId**

Type: String

ID of the account for which the request is made.If `null`, defaults to the account ID for the context user.

**wishlistId**

Type: String

ID of the wishlist.

**productFields**

Type: String

Comma-separated list of custom product fields. Fields aren’t case-sensitive. For example, `ProductCode` and `productcode` return the same results.

**pageSize**

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortItemsBy**

Type: [`ConnectApi.WishlistItemSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#WishlistItemSortOrderEnum)

Sort order for wishlist items. Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date.
-   `CreatedDateDesc`—Sorts by most recent creation date.

The default sort order is `CreatedDateDesc`.

#### Return Value

Type: [`ConnectApi.Wishlist`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist.htm "Wishlist, including summary and items.")

### getWishlistItems(webstoreId, effectiveAccountId, wishlistId, productFields, pageParam, sortItemsBy)

Get a page of sorted wishlist items with product fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.WishlistItemCollection getWishlistItems(String webstoreId, String effectiveAccountId, String wishlistId, String productFields, String pageParam, ConnectApi.WishlistItemSortOrder sortItemsBy)`

#### Parameters

**webstoreId**

Type: String

ID of the webstore.

**effectiveAccountId**

Type: String

ID of the account for which the request is made.If `null`, defaults to the account ID for the context user.

**wishlistId**

Type: String

ID of the wishlist.

**productFields**

Type: String

Comma-separated list of custom product fields. Fields aren’t case-sensitive. For example, `ProductCode` and `productcode` return the same results.

**pageParam**

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**sortItemsBy**

Type: [`ConnectApi.WishlistItemSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#WishlistItemSortOrderEnum)

Sort order for wishlist items. Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date.
-   `CreatedDateDesc`—Sorts by most recent creation date.

The default sort order is `CreatedDateDesc`.

#### Return Value

Type: [`ConnectApi.WishlistItemCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_item_collection.htm "Collection of wishlist items.")

### getWishlistItems(webstoreId, effectiveAccountId, wishlistId, productFields, pageParam, pageSize, sortItemsBy)

Get a page of specified size of sorted wishlist items with product fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.WishlistItemCollection getWishlistItems(String webstoreId, String effectiveAccountId, String wishlistId, String productFields, String pageParam, Integer pageSize, ConnectApi.WishlistItemSortOrder sortItemsBy)`

#### Parameters

**webstoreId**

Type: String

ID of the webstore.

**effectiveAccountId**

Type: String

ID of the account for which the request is made. If `null`, defaults to the account ID for the context user.

**wishlistId**

Type: String

ID of the wishlist.

**productFields**

Type: String

Comma-separated list of custom product fields. Fields aren’t case-sensitive. For example, `ProductCode` and `productcode` return the same results.

**pageParam**

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 200. If you pass in `null`, the default size is 25.

**sortItemsBy**

Type: [`ConnectApi.WishlistItemSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#WishlistItemSortOrderEnum)

Sort order for wishlist items. Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date.
-   `CreatedDateDesc`—Sorts by most recent creation date.

The default sort order is `CreatedDateDesc`.

#### Return Value

Type: [`ConnectApi.WishlistItemCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_item_collection.htm "Collection of wishlist items.")

### getWishlistSummaries(webstoreId, effectiveAccountId, includeDisplayedList)

Get wishlist summaries.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.WishlistsSummary getWishlistSummaries(String webstoreId, String effectiveAccountId, Boolean includeDisplayedList)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

effectiveAccountId

Type: String

ID of the account for which the request is made.If `null`, defaults to the account ID for the context user.

includeDisplayedList

Type: Boolean

Specifies whether to include the displayed list (`true`) or not (`false`). If `null`, defaults to `false`.

#### Return Value

Type: [`ConnectApi.WishlistsSummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_summaries.htm "List of wishlist summaries and the displayed list for the context user.")

### getWishlistSummaries(webstoreId, effectiveAccountId, includeDisplayedList, productFields, sortItemsBy)

Get wishlist summaries with product fields sorted by items.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.WishlistsSummary getWishlistSummaries(String webstoreId, String effectiveAccountId, Boolean includeDisplayedList, String productFields, ConnectApi.WishlistItemSortOrder sortItemsBy)`

#### Parameters

**webstoreId**

Type: String

ID of the webstore.

**effectiveAccountId**

Type: String

ID of the account for which the request is made.If `null`, defaults to the account ID for the context user.

**includeDisplayedList**

Type: Boolean

Specifies whether to include the displayed list (`true`) or not (`false`).

**productFields**

Type: String

Comma-separated list of custom product fields. Fields aren’t case-sensitive. For example, `ProductCode` and `productcode` return the same results.

If includeDisplayedList is `false`, productFields is ignored.

**sortItemsBy**

Type: [`ConnectApi.WishlistItemSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#WishlistItemSortOrderEnum)

Sort order for wishlist items. Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date.
-   `CreatedDateDesc`—Sorts by most recent creation date.

The default sort order is `CreatedDateDesc`.

If includeDisplayedList is `false`, sortItemsBy is ignored.

#### Return Value

Type: [`ConnectApi.WishlistsSummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_summaries.htm "List of wishlist summaries and the displayed list for the context user.")

### getWishlistSummaries(webstoreId, effectiveAccountId, includeDisplayedList, productFields, pageSize, sortItemsBy)

Get wishlist summaries with product fields sorted by items with a specified number of items per page.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.WishlistsSummary getWishlistSummaries(String webstoreId, String effectiveAccountId, Boolean includeDisplayedList, Integer pageSize, String productFields, pageSize, ConnectApi.WishlistItemSortOrder sortItemsBy)`

#### Parameters

**webstoreId**

Type: String

ID of the webstore.

**effectiveAccountId**

Type: String

ID of the account for which the request is made.If `null`, defaults to the account ID for the context user.

**includeDisplayedList**

Type: Boolean

Specifies whether to include the displayed list (`true`) or not (`false`).

**productFields**

Type: String

Comma-separated list of custom product fields. Fields aren’t case-sensitive. For example, `ProductCode` and `productcode` return the same results.

If includeDisplayedList is `false`, productFields is ignored.

**pageSize**

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortItemsBy**

Type: [`ConnectApi.WishlistItemSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#WishlistItemSortOrderEnum)

Sort order for wishlist items. Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date.
-   `CreatedDateDesc`—Sorts by most recent creation date.

The default sort order is `CreatedDateDesc`.

If includeDisplayedList is `false`, sortItemsBy is ignored.

#### Return Value

Type: [`ConnectApi.WishlistsSummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_summaries.htm "List of wishlist summaries and the displayed list for the context user.")

### removeWishlistItem(webstoreId, effectiveAccountId, wishlistId, wishlistItemId)

Remove an item from a wishlist.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

`public static Void removeWishlistItem(String webstoreId, String effectiveAccountId, String wishlistId, String wishlistItemId)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

effectiveAccountId

Type: String

ID of the account for which the request is made.If `null`, defaults to the account ID for the context user.

wishlistId

Type: String

ID of the wishlist.

wishlistItemId

Type: String

ID of the wishlist item to remove.

#### Return Value

Type: Void

### updateWishlist(webstoreId, wishlistId, wishlistUpdateInput)

Update the name of a wishlist for the context user.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.WishlistSummary updateWishlist(String webstoreId, String wishlistId, ConnectApi.WishlistUpdateInput wishlistUpdateInput)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

wishlistId

Type: String

ID of the wishlist.

wishlistUpdateInput

Type: [`ConnectApi.WishlistUpdateInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_wishlist_update.htm "Update a wishlist name.")

A `ConnectApi.WishlistUpdateInput` body with the wishlist name to update.

#### Return Value

Type: [`ConnectApi.WishlistSummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_summary.htm "Summary of a wishlist.")

### updateWishlist(webstoreId, effectiveAccountId, wishlistId, wishlistUpdateInput)

Update the name of a wishlist.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.WishlistSummary updateWishlist(String webstoreId, String effectiveAccountId, String wishlistId, ConnectApi.WishlistUpdateInput wishlistUpdateInput)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

effectiveAccountId

Type: String

ID of the account for which the request is made.If `null`, defaults to the account ID for the context user.

wishlistId

Type: String

ID of the wishlist.

wishlistUpdateInput

Type: [`ConnectApi.WishlistUpdateInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_wishlist_update.htm "Update a wishlist name.")

A `ConnectApi.WishlistUpdateInput` body with the wishlist name to update.

#### Return Value

Type: [`ConnectApi.WishlistSummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_summary.htm "Summary of a wishlist.")
