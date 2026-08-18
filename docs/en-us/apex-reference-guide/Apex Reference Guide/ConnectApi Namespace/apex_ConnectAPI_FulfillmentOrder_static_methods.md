---
doc_id: "apex_ConnectAPI_FulfillmentOrder_static_methods"
---

# FulfillmentOrder Class

Fulfill orders in Order Management.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## FulfillmentOrder Methods

These methods are for `FulfillmentOrder`. All methods are static.

## See Also

- [cancelFulfillmentOrderLineItems(fulfillmentOrderId, cancelFulfillmentOrderLineItemsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm#apex_ConnectAPI_FulfillmentOrder_cancelFulfillmentOrderLineItems_1)
- [createFulfillmentOrders(fulfillmentOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm#apex_ConnectAPI_FulfillmentOrder_createFulfillmentOrders_1)
- [createInvoice(fulfillmentOrderId, invoiceInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm#apex_ConnectAPI_FulfillmentOrder_createInvoice_1)
- [createMultipleFulfillmentOrder(multipleFulfillmentOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm#apex_ConnectAPI_FulfillmentOrder_createMultipleFulfillmentOrder_1)
- [createMultipleInvoices(invoicesInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm#apex_ConnectAPI_FulfillmentOrder_createMultipleInvoices_1)

### cancelFulfillmentOrderLineItems(fulfillmentOrderId, cancelFulfillmentOrderLineItemsInput)

Cancel FulfillmentOrderLineItems from a FulfillmentOrder. This action doesn’t cancel the associated OrderItemSummaries, so reallocate the canceled quantities to a new FulfillmentOrder.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.FulfillmentOrderCancelLineItemsOutputRepresentation cancelFulfillmentOrderLineItems(String fulfillmentOrderId, ConnectApi.FulfillmentOrderLineItemsToCancelInputRepresentation cancelFulfillmentOrderLineItemsInput)`

#### Parameters

fulfillmentOrderId

Type: String

ID of the FulfilllmentOrder.

cancelFulfillmentOrderLineItemsInput

Type: `ConnectApi.FulfillmentOrderLineItemsToCancelInputRepresentation`

List of FulfillmentOrderLineItems to cancel.

#### Return Value

Type: `ConnectApi.FulfillmentOrderCancelLineItemsOutputRepresentation`

#### Example

```apex
String fulfillmentOrderId = '0a3xx0000000085AAA';
List itemToCancelList = new List();

for(FulfillmentOrderLineItem fulfillmentOrderLineItem : fulfillmentOrder.FulfillmentOrderLineItems){
  ConnectApi.FulfillmentOrderLineItemInputRepresentation itemToCancel = new ConnectApi.FulfillmentOrderLineItemInputRepresentation();
  itemToCancel.fulfillmentOrderLineItemId = fulfillmentOrderLineItem.Id;
  itemToCancel.quantity = 1;
  itemToCancelList.add(itemToCancel);
}

ConnectAPI.FulfillmentOrderLineItemsToCancelInputRepresentation input = new ConnectAPI.FulfillmentOrderLineItemsToCancelInputRepresentation();        
input.fulfillmentOrderLineItemsToCancel = itemToCancelList;

ConnectAPI.FulfillmentOrderCancelLineItemsOutputRepresentation result = ConnectAPI.FulfillmentOrder.cancelFulfillmentOrderLineItems(fulfillmentOrderId, input);
```

### createFulfillmentOrders(fulfillmentOrderInput)

Create one or more FulfillmentOrders and FulfillmentOrderLineItems for an OrderDeliveryGroupSummary, which defines a delivery method and recipient for an OrderSummary. You specify the OrderItemSummaries to allocate, which can be fulfilled from different locations. Specifying multiple fulfillment groups creates one FulfillmentOrder for each location. For each OrderItemSummary, a FulfillmentOrderLineItem is created and assigned to the corresponding FulfillmentOrder.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.FulfillmentOrderOutputRepresentation createFulfillmentOrders(ConnectApi.FulfillmentOrderInputRepresentation fulfillmentOrderInput)`

#### Parameters

fulfillmentOrderInput

Type: `ConnectApi.FulfillmentOrderInputRepresentation`

OrderItemSummaries to allocate, with location and delivery information.

#### Return Value

Type: `ConnectApi.FulfillmentOrderOutputRepresentation`

#### Example

```apex
String orderSummaryId = '1Osxx0000004CCG';
String fulfillmentType = 'warehouse';

String warehouseFromLocationId = [SELECT Id from Location WHERE LocationType='Warehouse' LIMIT 1].Id;

ConnectApi.FulfillmentOrderInputRepresentation fulfillmentOrderInput = new ConnectApi.FulfillmentOrderInputRepresentation();
fulfillmentOrderInput.orderSummaryId = orderSummaryId;

List orderDeliveryGroupSummaryList = [SELECT Id FROM OrderDeliveryGroupSummary WHERE OrderSummaryId =: orderSummaryId];

for (OrderDeliveryGroupSummary orderDeliveryGroupSummary: orderDeliveryGroupSummaryList){

  fulfillmentOrderInput.orderDeliveryGroupSummaryId = orderDeliveryGroupSummary.Id;
  List fulfillmentGroups = new List();
  ConnectApi.FulfillmentGroupInputRepresentation fulfillmentGroup = new ConnectApi.FulfillmentGroupInputRepresentation();
  fulfillmentGroup.fulfilledFromLocationId = warehouseFromLocationId;
  fulfillmentGroup.fulfillmentType = fulfillmentType;

  List orderItemSummaries = new List();

  List orderItemSummaryList = [Select Id, quantity FROM OrderItemSummary WHERE OrderSummaryId =: orderSummaryId AND OrderDeliveryGroupSummaryId =: orderDeliveryGroupSummary.Id];
  for(OrderItemSummary orderItemSummary : orderItemSummaryList){
    ConnectApi.OrderItemSummaryInputRepresentation oisInputRepresentation = new ConnectApi.OrderItemSummaryInputRepresentation();
    oisInputRepresentation.orderItemSummaryId = orderItemSummary.Id;
    oisInputRepresentation.quantity = orderItemSummary.quantity;
    orderItemSummaries.add(oisInputRepresentation);
  }

  fulfillmentGroup.orderItemSummaries = orderItemSummaries;
  fulfillmentGroups.add(fulfillmentGroup);      
  fulfillmentOrderInput.fulfillmentGroups = fulfillmentGroups;

}

ConnectApi.FulfillmentOrderOutputRepresentation result = ConnectAPI.FulfillmentOrder.createFulfillmentOrders(fulfillmentOrderInput);
```

### createInvoice(fulfillmentOrderId, invoiceInput)

Create an invoice for a FulfillmentOrder that doesn’t have one.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.FulfillmentOrderInvoiceOutputRepresentation createInvoice(String fulfillmentOrderId, ConnectApi.FulfillmentOrderInvoiceInputRepresentation invoiceInput)`

#### Parameters

fulfillmentOrderId

Type: String

ID of the FulfillmentOrder.

invoiceInput

Type: `ConnectApi.FulfillmentOrderInvoiceInputRepresentation`

Required input with no data.

#### Return Value

Type: `ConnectApi.FulfillmentOrderInvoiceOutputRepresentation`

#### Example

```apex
String fulfillmentOrderId = '0a3xx0000000085AAA';

ConnectApi.FulfillmentOrderInvoiceInputRepresentation input = new ConnectApi.FulfillmentOrderInvoiceInputRepresentation();
ConnectAPI.FulfillmentOrderInvoiceOutputRepresentation result = ConnectApi.FulfillmentOrder.createInvoice(fulfillmentOrderId, input);
```

### createMultipleFulfillmentOrder(multipleFulfillmentOrderInput)

Create FulfillmentOrders for multiple OrderDeliveryGroups in a single request.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.MultipleFulfillmentOrderOutputRepresentation createMultipleFulfillmentOrder(ConnectApi.MultipleFulfillmentOrderInputRepresentation multipleFulfillmentOrderInput)`

#### Parameters

multipleFulfillmentOrderInput

Type: `ConnectApi.MultipleFulfillmentOrderInputRepresentation`

Wraps a list of inputs for creating fulfillment orders.

#### Return Value

Type: `ConnectApi.MultipleFulfillmentOrderOutputRepresentation`

### createMultipleInvoices(invoicesInput)

Create Invoices for multiple FulfillmentOrders.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.MultipleFulfillmentOrderInvoicesOutputRepresentation createMultipleInvoices(ConnectApi.MultipleFulfillmentOrderInvoicesInputRepresentation invoicesInput)`

#### Parameters

invoicesInput

Type: `ConnectApi.MultipleFulfillmentOrderInvoicesInputRepresentation`

The FulfillmentOrders to create Invoices for.

#### Return Value

Type: `ConnectApi.MultipleFulfillmentOrderInvoicesOutputRepresentation`
