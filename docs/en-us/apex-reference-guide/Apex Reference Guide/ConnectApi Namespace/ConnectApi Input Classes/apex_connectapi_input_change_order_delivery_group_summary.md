---
doc_id: "apex_connectapi_input_change_order_delivery_group_summary"
---

# ConnectApi.ChangeOrderDeliveryGroupSummaryInputRepresentation

A change to an order delivery group summary.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `changeType` | String | Whether a new order delivery group summary is being created or an existing summary is being updated. Valid values are New or Update. | Required | 66.0 |
| `orderDeliveryGroupSummary` | [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.") | The order delivery group summary sObject representation that contains the changes for the Order Delivery Group Summary entity. | Required | 66.0 |
| `referenceId` | String | The unique reference ID for this order delivery group summary. This field is valid only if the Change Type value is New. | Optional | 66.0 |
