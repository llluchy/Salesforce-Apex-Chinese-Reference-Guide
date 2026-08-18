---
doc_id: "apex_connectapi_output_promotion_coupon"
---

# ConnectApi.PromotionCoupon

A coupon used in a promotion.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `couponCode` | String | Coupon code. | 57.0 |
| `couponError​Code` | String | Error code returned if the coupon is invalid. | 57.0 |
| `id` | String | ID of the coupon. | 57.0 |
| `isValidCoupon` | Boolean | Indicates whether the coupon is valid (`true`) or invalid (`false`). | 57.0 |

## See Also

- [ConnectApi.PromotionEvaluation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_promotion_evaluation.htm)

-   [evaluate(salesTransaction)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm#apex_ConnectAPI_CommercePromotions_evaluate_1 "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.")
