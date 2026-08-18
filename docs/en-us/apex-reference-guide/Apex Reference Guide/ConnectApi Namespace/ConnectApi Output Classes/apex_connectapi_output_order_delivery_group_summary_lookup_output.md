---
doc_id: "apex_connectapi_output_order_delivery_group_summary_lookup_output"
---

# ConnectApi.OrderDeliveryGroupSummaryLookupOutput

Order delivery group summary lookup output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `currencyIsoCode` | String | Three-letter ISO 4217 currency code associated with the order delivery group summary record. | 58.0 |
| `deliveryMethod` | [`ConnectApi.OrderDeliveryMethodLookupOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_delivery_method_lookup_output.htm "Order delivery method lookup output.") | Delivery method associated with order the delivery group summary. | 58.0 |
| `fields` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, `ConnectApi.RecordField`[ConnectApi.RecordField](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordField.htm "Generic record field containing a label and text value.")\> | Map of requested order delivery group summary fields. | 58.0 |
| `id` | String | ID of the order delivery group summary. | 58.0 |
| `lineItems` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.OrderSummaryLookupOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_lookup_output.htm "Order summary lookup output.")\> | Line items associated with the order delivery group summary. | 58.0 |
