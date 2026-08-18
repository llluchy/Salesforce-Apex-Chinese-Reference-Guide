---
doc_id: "apex_connectapi_output_order_summary_adjustment_aggregates"
---

# ConnectApi.OrderSummaryAdjustmentAggregates

Adjustment aggregates associated with an order summary.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `available` | Boolean | Indicates if adjustment aggregate values are available (`true`) or not (`false`). | 55.0 |
| `status` | [`ConnectApi.​OrderSummaryAdjustment​AggregatesStatus`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderSummaryAdjustmentAggregatesStatusEnum) | Order summary adjustment aggregate job status. Values are:
-   `Failed`—The adjustment aggregate data job for the order summary failed.
-   `InProgress`—The adjustment aggregate data job for the order summary is in progress.
-   `NotInitiated`—The adjustment aggregate data job for the order summary is not initiated.
-   `Submitted`—The adjustment aggregate data job for the order summary is submitted.

 | 55.0 |
| `totalDelivery​PromotionDistAmount` | String | Total distributed delivery promotion amounts associated with an order summary. | 55.0 |
| `totalDelivery​PromotionLineAmount` | String | Total delivery promotion line amounts associated with an order summary. | 55.0 |
| `totalDelivery​Promotion​TotalAmount` | String | Total delivery promotion amount associated with an order summary. | 55.0 |
| `totalProduct​PromotionDistAmount` | String | Total distributed product promotion amounts associated with an order summary. | 55.0 |
| `totalProduct​PromotionLineAmount` | String | Total product promotion line amount associated with an order summary. | 55.0 |
| `totalProduct​Promotion​TotalAmount` | String | Total product promotion amount associated with an order summary. | 55.0 |
