---
doc_id: "apex_connectapi_output_cart_promotion_output"
---

# ConnectApi.CartPromotionOutputRepresentation

A promotion associated with a cart.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `adjustmentAmount` | String | Adjustment amount out of the promotion. | 53.0 |
| `couponCode` | String | Coupon code for a promotion. A coupon code is available only for manual promotions, not for automatic promotions. | 54.0 |
| `currencyIsoCode` | String | Currency ISO code associated with the cart. | 57.0 |
| `displayName` | String | Localized display name of the promotion. | 52.0 |
| `promotionId` | String | ID of the promotion. | 53.0 |
| `targetType` | [`ConnectApi.​CartPromotion​Type`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CartPromotionTypeEnum) | Promotion target type. Values are:
-   `Cart`—Promotion targets a cart.
-   `Item`—Promotion targets an item in a cart.

 | 53.0 |
| `termsAndConditions` | String | Localized terms and conditions for the promotion. | 53.0 |
