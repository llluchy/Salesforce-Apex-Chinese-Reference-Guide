---
doc_id: "apex_connectapi_output_return_order_item_split_line_output"
---

# ConnectApi.ReturnOrderItemSplitLineOutputRepresentation

After a change order is created for a ReturnOrderLineItem, that ReturnOrderLineItem is read-only. If the Return Items API is used to return a partial quantity, it creates a new “split” ReturnOrderLineItem to hold the remaining quantity to be returned. In that case, it returns this output property, which contains the IDs of the original and split ReturnOrderLineItems.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `newReturnOrderItemId` | String | ID of the new ReturnOrderLineItem that holds the remaining return quantity. | 52.0 |
| `original​ReturnOrderItemId` | String | ID of the original ReturnOrderLineItem. | 52.0 |

## See Also

- [ConnectApi.ReturnItemsOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_return_items_output.htm)

-   [returnItems(returnOrderId, returnItemsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_returnItems_1 "Process ReturnOrderLineItems belonging to a ReturnOrder. Processing a ReturnOrderLineItem generates a change Order and makes that ReturnOrderLineItem read-only. The change order for a returned item or delivery charge has a positive amount and should be used to create a credit memo. The change order for a return fee has a negative amount and should be used to create an invoice. If a processed ReturnOrderLineItem has any remaining expected quantity, then the API creates a separate ReturnOrderLineItem representing that quantity.")
