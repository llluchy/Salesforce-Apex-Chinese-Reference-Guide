---
doc_id: "apex_connectapi_output_cart_coupon_collection"
---

# ConnectApi.CartCouponCollection

Collection of coupons related to a cart.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `cartCoupons` | [`ConnectApi.CartCouponList`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_coupon_list.htm "List of coupons for a cart.") | Collection of coupons. | 54.0 |
| `cartId` | String | ID of the cart. | 54.0 |
| `cartStatus` | [`ConnectApi.​CartStatus`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#cartStatusEnum) | Status of the cart. Values are:
-   `Active—`Cart is created and available for modifications, like adding or removing products or promotions.
-   `Checkout—`Cart is in checkout. If the customer modifies the cart, the current checkout session is canceled.
-   `Closed—`Checkout is complete and an order was created. The cart cannot be modified.
-   `PendingClosed—`Cart is marked to be closed, but the request isn't completed yet. The cart can’t be modified. This value is available in API version 57.0 and later.
-   `PendingDelete—`Cart is marked for delete, but the request isn't completed yet. The cart can’t be modified.
-   `Processing—`Cart is processing. For example, taxes are being calculated. The cart can’t be modified.

 | 54.0 |
| `ownerId` | String | ID of the user who owns the cart. | 54.0 |
