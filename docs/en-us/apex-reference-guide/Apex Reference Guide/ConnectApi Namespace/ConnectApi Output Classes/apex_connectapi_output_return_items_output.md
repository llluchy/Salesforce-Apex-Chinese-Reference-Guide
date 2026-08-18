---
doc_id: "apex_connectapi_output_return_items_output"
---

# ConnectApi.ReturnItemsOutputRepresentation

Output of Return Items. Includes the ID of the generated change order for items and delivery charges being returned, as well as the ID of the generated change order for any charged return fees. Also includes information about any ReturnOrderLineItems that were created to represent remaining return quantities.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `changeOrderId` | String | ID of the change order created by processing the ReturnOrderLineItems representing returned items and delivery charges. Use this change order to create a credit memo. | 52.0 |
| `feeChangeOrderId` | String | ID of the change order created by processing the ReturnOrderLineItems representing return fees. Use this change order to create an invoice. | 56.0 |
| `RefundInstructionsHint` | String | Stores a JSON representation of the payment credit and refund sequences for ensure credit and ensure refund. | 65.0 |
| `returnLineItem​Splits` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​ReturnOrderItem​SplitLine​OutputRepresentation`\> | List of properties representing any remaining quantities from partial returns processed by this call. It includes order items, delivery charges, and return fees. Each element of the list includes the ID of a split ReturnOrderLineItem and the ID of the partially processed ReturnOrderLineItem whose remaining quantity it holds. | 52.0 |

## See Also

- [returnItems(returnOrderId, returnItemsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_returnItems_1)
