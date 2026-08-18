---
doc_id: "apex_connectapi_input_return_order_item_delivery_charge"
---

# ConnectApi.ReturnOrderItemDeliveryChargeInputRepresentation

ID of a ReturnOrderLineItem representing a delivery charge.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `returnOrder​LineItemId` | String | ID of a ReturnOrderLineItem to return. | Required | 52.0 |

## See Also

- [ConnectApi.ReturnItemsInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_return_items.htm)

-   [returnItems(returnOrderId, returnItemsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_returnItems_1 "Process ReturnOrderLineItems belonging to a ReturnOrder. Processing a ReturnOrderLineItem generates a change Order and makes that ReturnOrderLineItem read-only. The change order for a returned item or delivery charge has a positive amount and should be used to create a credit memo. The change order for a return fee has a negative amount and should be used to create an invoice. If a processed ReturnOrderLineItem has any remaining expected quantity, then the API creates a separate ReturnOrderLineItem representing that quantity.")
