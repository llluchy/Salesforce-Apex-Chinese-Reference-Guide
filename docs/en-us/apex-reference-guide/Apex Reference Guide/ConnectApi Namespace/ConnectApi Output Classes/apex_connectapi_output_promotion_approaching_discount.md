---
doc_id: "apex_connectapi_output_promotion_approaching_discount"
---

# ConnectApi.PromotionApproachingDiscount

Qualifier for a promotion with an approaching discount.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `promotionId` | String | ID of the promotion with an approaching discount. | Required | 64.0 |
| `qualifyingAmount` | String | Qualifying amount when promotion is applied. | Required | 64.0 |
| `qualifying​ProductTotal` | String | Qualifying product total. | Required | 64.0 |
| `targetType` | `ConnectApi.TargetType` | Target type of a promotion discount.
-   `Shipping`—Promotion discounts shipping amount.
-   `Transaction`—Promotion discounts total transaction amount.

 | Required | 64.0 |
