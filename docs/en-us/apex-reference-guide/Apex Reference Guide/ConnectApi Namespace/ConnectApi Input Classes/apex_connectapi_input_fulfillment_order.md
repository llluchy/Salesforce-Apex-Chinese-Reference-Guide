---
doc_id: "apex_connectapi_input_fulfillment_order"
---

# ConnectApi.FulfillmentOrderInputRepresentation

An OrderDeliveryGroupSummary that defines a delivery method and recipient, and a list of fulfillment groups to assign to FulfillmentOrders. Each fulfillment group is a set of OrderItemSummaries that match the OrderDeliveryGroupSummary and share the same fulfillment location. The method creates a FulfillmentOrder for each fulfillment group and a FulfillmentOrderLineItem for each OrderItemSummary.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `defaultActivationStatus` | String | 
Default activation status for a new fulfillment order. If you don't specify a value, the default value is `Allocated`, which belongs to the `Activated` status category. This default can be changed, but the replacement status must also have a status category of `Activated`.

 | Optional | 58.0 |
| `fulfillmentGroups` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​FulfillmentGroup​Input​Representation`\> | List of fulfillment groups that specify the OrderItemSummaries and fulfillment locations. | Required | 48.0 |
| `orderDelivery​GroupSummaryId` | String | ID of the OrderDeliveryGroupSummary. | Required | 48.0 |
| `orderSummaryId` | String | ID of the OrderSummary. | Required | 48.0 |

## See Also

- [createFulfillmentOrders(fulfillmentOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm#apex_ConnectAPI_FulfillmentOrder_createFulfillmentOrders_1)
