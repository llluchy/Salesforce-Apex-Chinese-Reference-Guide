---
doc_id: "apex_connectapi_output_cart_delivery_method_adjustment_output"
---

# ConnectApi.PromotionCartDeliveryMethodAdjustment

Adjustment for a cart delivery method in a promotion.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `adjustmentType` | String | Type of price adjustment. Valid values are:
-   `AdjustmentAmount`—The adjustment is a fixed amount.
-   `AdjustmentPercentage`—The adjustment is a percentage.

 | 60.0 |
| `adjustmentValue` | String | Price value of the adjustment. | 60.0 |
| `baseAmount` | String | Price value of the adjustment. | 60.0 |
| `priceAdjustment​CauseId` | String | ID of the related promotion. | 60.0 |
| `priority` | Integer | Where in the sequence of adjustments this adjustment was applied. | 60.0 |
