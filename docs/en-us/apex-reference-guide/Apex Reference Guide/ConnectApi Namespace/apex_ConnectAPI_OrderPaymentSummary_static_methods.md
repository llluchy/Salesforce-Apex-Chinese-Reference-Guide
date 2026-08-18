---
doc_id: "apex_ConnectAPI_OrderPaymentSummary_static_methods"
---

# OrderPaymentSummary Class

Work with payments in Order Management.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## OrderPaymentSummary Methods

These methods are for `OrderPaymentSummary`. All methods are static.

## See Also

- [createOrderPaymentSummary(orderPaymentSummaryInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderPaymentSummary_static_methods.htm#apex_ConnectAPI_OrderPaymentSummary_createOrderPaymentSummary_1)

### createOrderPaymentSummary(orderPaymentSummaryInput)

Create an OrderPaymentSummary for an OrderSummary. Specify a payment authorization or payments that share the same payment method. In an org with the multicurrency feature enabled, the OrderPaymentSummary inherits the CurrencyIsoCode value from the OrderSummary.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CreateOrderPaymentSummaryOutputRepresentation createOrderPaymentSummary(ConnectApi.CreateOrderPaymentSummaryInputRepresentation orderPaymentSummaryInput)`

#### Parameters

orderPaymentSummaryInput

Type: `ConnectApi.CreateOrderPaymentSummaryInputRepresentation`

The OrderSummary and payment authorization or payments.

#### Return Value

Type: `ConnectApi.CreateOrderPaymentSummaryOutputRepresentation`

#### Example

```apex
String orderSummaryId = '1Osxx0000004CCG';
String paymentId1 = '0a3xx0000000085AAA';
String paymentId2 = '0a3xx0000000085BBB';

ConnectApi.CreateOrderPaymentSummaryInputRepresentation orderPaymentSummaryInput = new ConnectApi.CreateOrderPaymentSummaryInputRepresentation();
orderPaymentSummaryInput.orderSummaryId = orderSummaryId;
ListString> paymentList = new ListString>();
paymentList.add(paymentId1);
paymentList.add(paymentId2);
orderPaymentSummaryInput.paymentIds = paymentList;

ConnectApi.CreateOrderPaymentSummaryOutputRepresentation result = ConnectApi.OrderPaymentSummary.createOrderPaymentSummary(orderPaymentSummaryInput);
```
