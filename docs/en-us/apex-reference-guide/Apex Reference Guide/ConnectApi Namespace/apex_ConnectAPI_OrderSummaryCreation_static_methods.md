---
doc_id: "apex_ConnectAPI_OrderSummaryCreation_static_methods"
---

# OrderSummaryCreation Class

Create Order Summaries in Order Management.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## OrderSummaryCreation Methods

These methods are for `OrderSummaryCreation`. All methods are static.

## See Also

- [createOrderSummary(orderSummaryInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummaryCreation_static_methods.htm#apex_ConnectAPI_OrderSummaryCreation_createOrderSummary_1)

### createOrderSummary(orderSummaryInput)

Create an OrderSummary based on an order. That order is considered the original order for the OrderSummary. Subsequent change orders that apply to the OrderSummary are also represented as orders. You can specify whether the order is managed in Salesforce Order Management or by an external system. Most Salesforce Order Management APIs can run only on orders that it manages.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.OrderSummaryOutputRepresentation createOrderSummary(ConnectApi.OrderSummaryInputRepresentation orderSummaryInput)`

#### Parameters

orderSummaryInput

Type: `ConnectApi.OrderSummaryInputRepresentation`

Input object that wraps the ID of the source order.

#### Return Value

Type: `ConnectApi.OrderSummaryOutputRepresentation`
