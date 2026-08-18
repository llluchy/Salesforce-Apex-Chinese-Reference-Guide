---
doc_id: "apex_connectapi_input_return_items"
---

# ConnectApi.ReturnItemsInputRepresentation

Data about products and delivery charges to return, as well as associated return fees.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `refundInstructionsHint` | [List](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_list.htm "HTML (New Window)")`<ConnectApi.​RefundInstructionsHint​InputRepresentation>` | The payment credit sequence, credit types, and refund sequence that provide information for optimal refund processing. | Optional | 65.0 |
| `returnOrderItem​DeliveryCharges` | [List](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_list.htm "HTML (New Window)")`<ConnectApi.​ReturnOrderItem​DeliveryCharge​InputRepresentation>` | List of ReturnOrderLineItems to return that represent delivery charges. | Optional | 52.0 |
| `returnOrderItemFees` | [List](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_list.htm "HTML (New Window)")`<ConnectApi.​ReturnOrderItemFee​InputRepresentation>` | List of ReturnOrderLineItems to process that represent return fees. | Optional | 56.0 |
| `returnOrderItems` | [List](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_list.htm "HTML (New Window)")`<ConnectApi.​ReturnOrderItem​InputRepresentation>` | List of ReturnOrderLineItems to process that represent products, along with data about how to process them. | Required | 52.0 |

## See Also

- [returnItems(returnOrderId, returnItemsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_returnItems_1)
