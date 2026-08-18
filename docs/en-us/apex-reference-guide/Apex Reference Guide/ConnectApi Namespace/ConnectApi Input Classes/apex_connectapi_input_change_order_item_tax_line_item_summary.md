---
doc_id: "apex_connectapi_input_change_order_item_tax_line_item_summary"
---

# ConnectApi.ChangeOrderItemTaxLineItemSummaryInputRepresentation

A change to an order item tax line item summary.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `changeType` | String | Whether a new order item tax line item summary is being created or an existing summary is being updated. Valid values are New or Update. | Required | 66.0 |
| `orderItemTaxLineItemSummary` | [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.") | The order item tax line item summary sObject representation that contains the changes for the Order Item Tax Line Summary entity. | Required | 66.0 |
| `referenceId` | String | The unique reference ID for this order tax line item summary. This field is valid only if the Change Type value is New. | Optional | 66.0 |
