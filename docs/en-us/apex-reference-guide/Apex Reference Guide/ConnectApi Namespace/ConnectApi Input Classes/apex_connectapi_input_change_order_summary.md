---
doc_id: "apex_connectapi_input_change_order_summary"
---

# ConnectApi.ChangeOrderSummaryInputRepresentation

A change to an order summary. There are several general validations for this input. The maximum number of changes allowed per request is 100. You must include at least one change for an entity, and each change that's associated with an entity counts as one change. You can modify only order item summaries in Ordered status.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `changeOrdersReferenceNumber` | String | The order reference number value for the Change Order associated with the current request. | Optional | 66.0 |
| `changeReason` | String | The reason for the change. It has to be an active Picklist value from the OrderItemSummaryChange entity Reason field. | Required | 66.0 |
| `orderAdjustmentGroupSummaries` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ChangeOrderAdjustmentGroupSummaryInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_change_order_adjustment_group_summary.htm "A change to an order adjustment group summary.")\> | The list of order adjustment group summaries changes. | Optional | 66.0 |
| `orderDeliveryGroupSummaries` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ChangeOrderDeliveryGroupSummaryInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_change_order_delivery_group_summary.htm "A change to an order delivery group summary.")\> | The list of order delivery group summaries changes. | Optional | 66.0 |
| `orderItemAdjustmentLineSummaries` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ChangeOrderItemAdjustmentLineSummaryInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_change_order_item_adjustment_line_summary.htm "A change to an order item adjustment line summary.")\> | The list of order item adjustment line summaries changes. | Optional | 66.0 |
| `orderItemSummaries` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ChangeOrderItemSummaryInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_change_order_item_summary.htm "A change to an order item summary.")\> | The list of order item summaries changes. | Optional | 66.0 |
| `orderItemTaxLineItemSummaries` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ChangeOrderItemTaxLineItemSummaryInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_change_order_item_tax_line_item_summary.htm "A change to an order item tax line item summary.")\> | The list of order item tax line item summaries changes. | Optional | 66.0 |
| `orderSummary` | [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.") | The order summary sObject representation that contains the changes for the Order Summary. | Optional | 66.0 |
