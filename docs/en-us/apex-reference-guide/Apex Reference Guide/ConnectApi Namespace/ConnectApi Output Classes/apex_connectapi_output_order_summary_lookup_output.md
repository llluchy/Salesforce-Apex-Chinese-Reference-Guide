---
doc_id: "apex_connectapi_output_order_summary_lookup_output"
---

# ConnectApi.OrderSummaryLookupOutput

Order summary lookup output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `adjustmentAggregates` | [`ConnectApi.OrderSummaryAdjustmentAggregates`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_adjustment_aggregates.htm "Adjustment aggregates associated with an order summary.") | Adjustment aggregates associated with the order summary. | 58.0 |
| `currencyIsoCode` | String | Three-letter ISO 4217 currency code associated with the order summary. | 58.0 |
| `deliveryGroups` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.OrderDeliveryGroupSummaryLookupOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_delivery_group_summary_lookup_output.htm "Order delivery group summary lookup output.")\> | Delivery groups associated with the order summary. | 58.0 |
| `fields` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.RecordField`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordField.htm "Generic record field containing a label and text value.")\> | Map of requested order summary fields. | 58.0 |
| `id` | String | ID of the order summary. | 58.0 |
| `orderNumber` | String | Reference number of the order summary. | 58.0 |
| `status` | String | Status associated with the order summary. | 58.0 |
