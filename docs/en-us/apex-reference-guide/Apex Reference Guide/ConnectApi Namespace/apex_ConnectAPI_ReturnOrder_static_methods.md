---
doc_id: "apex_ConnectAPI_ReturnOrder_static_methods"
---

# ReturnOrder Class

Process ReturnOrders in Order Management, limited to 2,000 requests per hour.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## ReturnOrder Methods

These methods are for `ReturnOrder`. All methods are static.

## See Also

- [createReturnOrder(returnOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_createReturnOrder_1)
- [returnItems(returnOrderId, returnItemsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_returnItems_1)

### createReturnOrder(returnOrderInput)

Create a ReturnOrder and ReturnOrderLineItems for items belonging to an OrderSummary.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ReturnOrderOutputRepresentation createReturnOrder(ConnectApi.ReturnOrderInputRepresentation returnOrderInput)`

#### Parameters

returnOrderInput

Type: `ConnectApi.ReturnOrderInputRepresentation`

Data for creating a ReturnOrder and ReturnOrderLineItems.

#### Return Value

Type: `ConnectApi.ReturnOrderOutputRepresentation`

## See Also

- [returnItems(returnOrderId, returnItemsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_returnItems_1)

### returnItems(returnOrderId, returnItemsInput)

Process ReturnOrderLineItems belonging to a ReturnOrder. Processing a ReturnOrderLineItem generates a change Order and makes that ReturnOrderLineItem read-only. The change order for a returned item or delivery charge has a positive amount and should be used to create a credit memo. The change order for a return fee has a negative amount and should be used to create an invoice. If a processed ReturnOrderLineItem has any remaining expected quantity, then the API creates a separate ReturnOrderLineItem representing that quantity.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ReturnItemsOutputRepresentation returnItems(String returnOrderId, ConnectApi.ReturnItemsInputRepresentation returnItemsInput)`

#### Parameters

returnOrderId

Type: String

ID of the ReturnOrder.

returnItemsInput

Type: [`ConnectApi.ReturnItemsInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_return_items.htm "Data about products and delivery charges to return, as well as associated return fees.")

Data about products and delivery charges to return, as well as associated return fees.

#### Return Value

Type: `ConnectApi.ReturnItemsOutputRepresentation`

## See Also

- [createMultipleInvoices(invoicesInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_createMultipleInvoices_1)

-   [ensureRefundsAsync(orderSummaryId, ensureRefundsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_ensureRefundsAsync_1 "Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.")
    
-   [createReturnOrder(returnOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_createReturnOrder_1 "Create a ReturnOrder and ReturnOrderLineItems for items belonging to an OrderSummary.")
