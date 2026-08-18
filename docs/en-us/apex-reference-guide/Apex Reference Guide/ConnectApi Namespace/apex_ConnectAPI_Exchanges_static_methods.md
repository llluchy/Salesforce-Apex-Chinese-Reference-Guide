---
doc_id: "apex_ConnectAPI_Exchanges_static_methods"
---

# Exchanges Class

Preview and submit cart to exchange orders.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Exchanges Methods

These methods are for `Exchanges`. All methods are static.

## See Also

- [previewCartToExchangeOrder(previewCartToExchangeOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Exchanges_static_methods.htm#apex_ConnectAPI_Exchanges_previewCartToExchangeOrder_1)
- [submitCartToExchangeOrder(submitCartToExchangeOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Exchanges_static_methods.htm#apex_ConnectAPI_Exchanges_submitCartToExchangeOrder_1)

### previewCartToExchangeOrder(previewCartToExchangeOrderInput)

Retrieves a preview of an exchange order, taking into account the order summary balance and the difference between the return order and the cart that represents the exchange order.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.PreviewCartToExchangeOrderOutputRepresentation previewCartToExchangeOrder(ConnectApi.PreviewCartToExchangeOrderInputRepresentation previewCartToExchangeOrderInput)`

#### Parameters

previewCartToExchangeOrderInput

Type: `ConnectApi.PreviewCartToExchangeOrderInputRepresentation`

Information required to preview a cart to exchange order.

#### Return Value

Type: `ConnectApi.PreviewCartToExchangeOrderOutputRepresentation`

### submitCartToExchangeOrder(submitCartToExchangeOrderInput)

Creates an exchange order summary, based on the return order and the cart used for exchanges. The new exchange order summary is attached to the original order summary (created before any exchanges occurred). You can also provide optional payment information and optional information about order summary sequences, which affect the newly created exchange order summary.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.SubmitCartToExchangeOrderOutputRepresentation submitCartToExchangeOrder(ConnectApi.SubmitCartToExchangeOrderInputRepresentation submitCartToExchangeOrderInput)`

#### Parameters

submitCartToExchangeOrderInput

Type: `ConnectApi.SubmitCartToExchangeOrderInputRepresentation`

Information required to submit a cart to exchange order.

#### Return Value

Type: `ConnectApi.SubmitCartToExchangeOrderOutputRepresentation`
