---
doc_id: "apex_connectapi_output_order_item_summary_lookup_output"
---

# ConnectApi.OrderItemSummaryLookupOutput

Order item summary lookup output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `adjustmentAggregates` | [`ConnectApi.OrderItemSummaryAdjustmentAggregates`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_adjustment_aggregates.htm "Adjustment aggregates associated with an order item summary.") | Adjustment aggregates for the order item summary. | 58.0 |
| `adjustments` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.OrderSummaryAdjustment`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_adjustment.htm "Adjustment associated with an order summary.")\> | Adjustments associated with the order item summary. | 58.0 |
| `currencyIsoCode` | String | Three-letter ISO 4217 currency code associated with the order item summary record. | 58.0 |
| `fields` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.RecordField`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordField.htm "Generic record field containing a label and text value.")\> | Map of requested order item summary fields. | 58.0 |
| `id` | String | ID of the order item summary. | 58.0 |
| `product` | [`ConnectApi.OrderSummaryProductLookupOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_product_lookup_output.htm "Order summary product lookup output.") | Details of the product associated with order item summary. | 58.0 |
