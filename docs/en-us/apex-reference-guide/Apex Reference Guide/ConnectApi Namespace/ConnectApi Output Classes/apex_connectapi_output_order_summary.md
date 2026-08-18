---
doc_id: "apex_connectapi_output_order_summary"
---

# ConnectApi.OrderSummaryRepresentation

Order summary.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `adjustmentAggregates` | [`ConnectApi.​OrderSummary​AdjustmentAggregates`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_adjustment_aggregates.htm "Adjustment aggregates associated with an order summary.") | Adjustment aggregates associated with the order summary. | 55.0 |
| `createdDate` | Datetime | Created date of the order summary. | 51.0 |
| `fields` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")< String, `ConnectApi.​RecordField` \> | Map of requested order summary fields. | 51.0 |
| `orderNumber` | String | Order number of the order summary. | 51.0 |
| `orderSummaryId` | String | ID of the order summary. | 51.0 |
| `orderedDate` | Datetime | Ordered date of the order summary. | 51.0 |
| `ownerId` | String | ID of the owner of the order summary. | 51.0 |
| `status` | String | Status of the order summary. | 51.0 |
| `totalAmount` | String | Total amount of the order summary. | 51.0 |

## See Also

- [ConnectApi.OrderSummaryCollectionRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_collection.htm)
