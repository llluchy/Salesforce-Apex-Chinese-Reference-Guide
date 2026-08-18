---
doc_id: "apex_connectapi_input_fulfillment_order_line_item"
---

# ConnectApi.FulfillmentOrderLineItemInputRepresentation

A FulfillmentOrderLineItem and quantity to cancel. You can cancel less than the full quantity, in which case you reallocate the canceled quantity to a different FulfillmentOrder.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `fulfillmentOrder​LineItemId` | String | ID of the FulfillmentOrderLineItem. | Required | 48.0 |
| `quantity` | Double | Quantity to cancel. | Required | 48.0 |

## See Also

- [ConnectApi.FulfillmentOrderLineItemsToCancelInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_fulfillment_order_line_items_to_cancel.htm)

-   [cancelFulfillmentOrderLineItems(fulfillmentOrderId, cancelFulfillmentOrderLineItemsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm#apex_ConnectAPI_FulfillmentOrder_cancelFulfillmentOrderLineItems_1 "Cancel FulfillmentOrderLineItems from a FulfillmentOrder. This action doesn’t cancel the associated OrderItemSummaries, so reallocate the canceled quantities to a new FulfillmentOrder.")
