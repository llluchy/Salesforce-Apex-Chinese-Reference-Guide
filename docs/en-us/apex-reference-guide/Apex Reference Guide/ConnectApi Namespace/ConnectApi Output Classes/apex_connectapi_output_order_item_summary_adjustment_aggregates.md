---
doc_id: "apex_connectapi_output_order_item_summary_adjustment_aggregates"
---

# ConnectApi.OrderItemSummaryAdjustmentAggregates

Adjustment aggregates associated with an order item summary.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `available` | Boolean | Indicates whether adjustment aggregates are available (`true`) or not (`false`). | 55.0 |
| `status` | [`ConnectApi.​OrderSummaryAdjustment​AggregatesStatus`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderSummaryAdjustmentAggregatesStatusEnum) | Order summary adjustment aggregate job status.
-   `Failed`—The adjustment aggregate data job for the order summary failed.
-   `InProgress`—The adjustment aggregate data job for the order summary is in progress.
-   `NotInitiated`—The adjustment aggregate data job for the order summary is not initiated.
-   `Submitted`—The adjustment aggregate data job for the order summary is submitted.

 | 55.0 |
| `totalLine​PromotionAmount` | String | Total of all line item promotions applied to this specific product. | 55.0 |
| `totalPromotion​DistAmount` | String | Total of all order level promotions applied to this specific product. | 55.0 |
