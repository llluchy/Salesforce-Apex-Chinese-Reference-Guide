---
doc_id: "apex_connectapi_input_change_order_item_summary"
---

# ConnectApi.ChangeOrderItemSummaryInputRepresentation

A change to an order item summary.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `changeType` | String | Whether a new order item summary is being created or an existing summary is being updated. Valid values are New or Update. | Required | 66.0 |
| `orderItemSummary` | [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.") | The order item summary sObject representation that contains the changes for the Order Item Summary entity. | Required | 66.0 |
| `referenceId` | String | The unique reference ID for this order item summary. This field is valid only if the Change Type value is New. | Optional | 66.0 |
