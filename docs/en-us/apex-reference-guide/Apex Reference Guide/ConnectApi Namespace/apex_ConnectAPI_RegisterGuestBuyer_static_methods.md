---
doc_id: "apex_ConnectAPI_RegisterGuestBuyer_static_methods"
---

# RegisterGuestBuyer Class

Register a guest buyer for a webstore using an account ID, enabling a guest buyer to order on behalf of another buyer.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## RegisterGuestBuyer Methods

These methods are for `RegisterGuestBuyer`. All methods are static. Your org must have the Order Management Growth license or Order Management as part of Connected Commerce.

## See Also

- [registerGuestBuyer(webstoreId, accountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_RegisterGuestBuyer_static_methods.htm#apex_ConnectAPI_RegisterGuestBuyer_registerGuestBuyer_1)

### registerGuestBuyer(webstoreId, accountId)

Register a guest buyer for a webstore using an account ID. This method enables a guest buyer to order on behalf of another buyer.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RegisterGuestBuyerOutputRepresentation registerGuestBuyer(String webstoreId, String accountId)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

accountId

Type: String

ID of the account for which the request is made.

#### Return Value

Type: `ConnectApi.RegisterGuestBuyerOutputRepresentation`
