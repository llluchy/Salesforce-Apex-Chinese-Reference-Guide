---
doc_id: "apex_connectapi_input_return_order_line_item"
---

# ConnectApi.ReturnOrderLineItemInputRepresentation

Data for creating a ReturnOrderLineItem for an order item being returned, including data to create ReturnOrderLineItems representing any return fees associated with it.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `canReduceShipping` | Boolean | Whether to refund any associated shipping charge. | Required | 50.0 |
| `orderItemSummaryId` | String | ID of the associated OrderItemSummary. If the OrderItemSummary already has an associated ReturnOrderLineItem, then you must specify a different `reasonForReturn`. Duplicating the reason breaks the financial calculations. | Required | 50.0 |
| `quantityExpected` | Double | Quantity expected to be returned. This value also applies to any fees specified in `returnOrderLineItemFees`. | Required | 50.0 |
| `quantityReceived` | Double | Quantity already physically returned. | Optional | 50.0 |
| `reasonForReturn` | String | Reason for the return. The value must match an entry in both the OrderSummaryChange Reason field and the ReturnOrderLineItem object’s ReasonForReturn picklist. | Required if the `returnOrder​LifeCycleType` is MANAGED. | 50.0 |
| `returnOrder​LineItemFees` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​ReturnOrder​LineItemFee​InputRepresentation`\> | List of input data for return fees associated with the order item being returned. A ReturnOrderLineItem of Type Fee is created to represent each fee. | Optional | 56.0 |

## See Also

- [ConnectApi.ReturnOrderInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_return_order.htm)

-   [createReturnOrder(returnOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_createReturnOrder_1 "Create a ReturnOrder and ReturnOrderLineItems for items belonging to an OrderSummary.")
