---
doc_id: "apex_ConnectAPI_PickTicket_static_methods"
---

# PickTicket Class

Create tickets to fulfill orders.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## PickTicket Methods

These methods are for `PickTicket`. All methods are static.

## See Also

- [distributePickedQuantities(distributePickedQuantitiesInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_PickTicket_static_methods.htm#apex_ConnectAPI_PickTicket_distributePickedQuantities_1)

### distributePickedQuantities(distributePickedQuantitiesInput)

Distribute picked quantities among orders in a pick ticket.

#### API Version

58.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.DistributePickedQuantitiesOutputRepresentation distributePickedQuantities(ConnectApi.DistributePickedQuantitiesInputRepresentation distributePickedQuantitiesInput)`

#### Parameters

distributePickedQuantitiesInput

Type: `ConnectApi.DistributePickedQuantitiesInputRepresentation`

Input to distribute picked quantities.

#### Return Value

Type: `ConnectApi.DistributePickedQuantitiesOutputRepresentation`
