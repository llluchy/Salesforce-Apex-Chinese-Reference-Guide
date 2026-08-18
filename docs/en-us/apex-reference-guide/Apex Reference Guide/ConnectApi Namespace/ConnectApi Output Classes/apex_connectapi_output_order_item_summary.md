---
doc_id: "apex_connectapi_output_order_item_summary"
---

# ConnectApi.OrderItemSummary

Order item summary.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `adjustmentAggregates` | `ConnectApi.​OrderItemSummary​AdjustmentAggregates` | Adjustment aggregates associated with an order item summary. | 55.0 |
| `fields` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.​RecordField`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordField.htm "Generic record field containing a label and text value.")\> | Map of fields from order item summary and other related objects that were queried. | 51.0 |
| `orderItem​SummaryId` | String | ID of the order item summary. | 51.0 |
| `orderSummaryId` | String | ID of the order summary. | 51.0 |
| `product` | [`ConnectApi.​OrderItemSummary​Product`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_product.htm "Product item mapped to the order item summary.") | Associated product item information. | 51.0 |

## See Also

- [ConnectApi.OrderItemSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_collection.htm)
