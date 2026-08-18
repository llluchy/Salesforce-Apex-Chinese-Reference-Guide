---
doc_id: "apex_connectapi_output_order_item_summary_output"
---

# ConnectApi.OrderItemSummaryOutputRepresentation

Details of an OrderItemSummary from a failed FulfillmentOrder in a create multiple fulfillment orders request.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `errors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​ErrorResponse`\> | List of errors specific to the OrderItemSummary, if any. | 50.0 |
| `orderItemSummaryId` | String | ID of the OrderItemSummary. | 50.0 |
| `quantity` | Double | Quantity of the OrderItemSummary. | 50.0 |
