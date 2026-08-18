---
doc_id: "apex_ConnectAPI_Routing_static_methods"
---

# Routing Class

Route orders to inventory locations in Order Management.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Routing Methods

These methods are for `Routing`. All methods are static.

## See Also

- [confirmHeldFOCapacity(confirmHeldFOCapacityInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_confirmHeldFOCapacity_1)
- [findRoutesWithFewestSplits(findRoutesWithFewestSplitsInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplits_1)
- [findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplitsUsingOCI_1)
- [getFOCapacityValues(getFOCapacityValuesInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_getFOCapacityValues_1)
- [holdFOCapacity(holdFOCapacityInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_holdFOCapacity_1)
- [rankAverageDistance(rankAverageDistanceInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_rankAverageDistance_1)
- [releaseHeldFOCapacity(releaseHeldFOCapacityInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_releaseHeldFOCapacity_1)

### confirmHeldFOCapacity(confirmHeldFOCapacityInput)

Confirm held fulfillment order capacity at one or more locations. This call decreases a location’s held capacity and increases its assigned fulfillment order count. Confirm held capacity when you assign a fulfillment order to a location.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ConfirmHeldFOCapacityOutputRepresentation confirmHeldFOCapacity(ConnectApi.ConfirmHeldFOCapacityInputRepresentation confirmHeldFOCapacityInput)`

#### Parameters

confirmHeldFOCapacityInput

Type: `ConnectApi.ConfirmHeldFOCapacityInputRepresentation`

The input includes, for each fulfillment order, the location where capacity is held for it.

#### Return Value

Type: `ConnectApi.ConfirmHeldFOCapacityOutputRepresentation`

### findRoutesWithFewestSplits(findRoutesWithFewestSplitsInputRepresentation)

Returns combinations of inventory locations that can fulfill an order within a specified limit of shipment splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.FindRoutesWithFewestSplitsOutputRepresentation findRoutesWithFewestSplits(ConnectApi.FindRoutesWithFewestSplitsInputRepresentation findRoutesWithFewestSplitsInputRepresentation)`

#### Parameters

findRoutesWithFewestSplitsInputRepresentation

Type: `ConnectApi.FindRoutesWithFewestSplitsInputRepresentation`

The input includes the ordered item quantities, data about available inventory, and, optionally, a maximum allowable number of shipment splits.

#### Return Value

Type: `ConnectApi.FindRoutesWithFewestSplitsOutputRepresentation`

### findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput)

For one or more order summaries, find inventory availability using Omnichannel Inventory and identify the fulfillment routes with fewest splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results. This method combines the functionality of the `getInventoryAvailability()` and `findRoutesWithFewestSplits()` methods.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.FindRoutesWithFewestSplitsUsingOCIOutputRepresentation findRoutesWithFewestSplitsUsingOCI(ConnectApi.FindRoutesWithFewestSplitsUsingOCIInputRepresentation findRoutesWithFewestSplitsUsingOCIInput)`

#### Parameters

findRoutesWithFewestSplitsUsingOCIInput

Type: `ConnectApi.FindRoutesWithFewestSplitsUsingOCIInputRepresentation`

The input includes, for each order, the ordered item quantities, the assigned location group or locations, and, optionally, a maximum allowable number of shipment splits and a list of locations to exclude from the calculation.

#### Return Value

Type: `ConnectApi.FindRoutesWithFewestSplitsUsingOCIOutputRepresentation`

## See Also

- [getInventoryAvailability(inventoryAvailabilityInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm#apex_ConnectAPI_OmnichannelInventoryService_getInventoryAvailability_1)

-   [findRoutesWithFewestSplits(findRoutesWithFewestSplitsInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplits_1 "Returns combinations of inventory locations that can fulfill an order within a specified limit of shipment splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results.")
    

### getFOCapacityValues(getFOCapacityValuesInput)

Get information about the current fulfillment order capacity of one or more locations.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.GetFOCapacityValuesOutputRepresentation getFOCapacityValues(ConnectApi.GetFOCapacityValuesRequestInputRepresentation getFOCapacityValuesInput)`

#### Parameters

getFOCapacityValuesInput

Type: `ConnectApi.GetFOCapacityValuesRequestInputRepresentation`

Locations to get fulfillment order capacity information about.

#### Return Value

Type: `ConnectApi.GetFOCapacityValuesOutputRepresentation`

### holdFOCapacity(holdFOCapacityInput)

Hold fulfillment order capacity at a location. Holding capacity at a location reserves a space for a fulfillment order that you’ll assign to it.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.HoldFOCapacityOutputRepresentation holdFOCapacity(ConnectApi.HoldFOCapacityInputRepresentation holdFOCapacityInput)`

#### Parameters

holdFOCapacityInput

Type: `ConnectApi.HoldFOCapacityInputRepresentation`

The input includes, for each fulfillment order, the location to hold capacity for it.

#### Return Value

Type: `ConnectApi.HoldFOCapacityOutputRepresentation`

### rankAverageDistance(rankAverageDistanceInputRepresentation)

Calculates the average distance from sets of inventory locations to an order recipient, and ranks them. Use this method to compare the average shipping distances for different sets of locations that can fulfill an order. While this method is executing, you can’t invoke another Apex callout.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RankAverageDistanceOutputRepresentation rankAverageDistance(ConnectApi.RankAverageDistanceInputRepresentation rankAverageDistanceInputRepresentation)`

#### Parameters

rankAverageDistanceInputRepresentation

Type: `ConnectApi.RankAverageDistanceInputRepresentation`

An order recipient’s geographic location and information about sets of inventory locations that can fulfill the order.

#### Return Value

Type: `ConnectApi.RankAverageDistanceOutputRepresentation`

### releaseHeldFOCapacity(releaseHeldFOCapacityInput)

Release held fulfillment order capacity at one or more locations. This call decreases a location’s held capacity without changing its assigned fulfillment order count. Release held capacity when you cancel the assignment of a fulfillment order to a location.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ReleaseHeldFOCapacityOutputRepresentation releaseHeldFOCapacity(ConnectApi.ReleaseHeldFOCapacityInputRepresentation releaseHeldFOCapacityInput)`

#### Parameters

releaseHeldFOCapacityInput

Type: `ConnectApi.ReleaseHeldFOCapacityInputRepresentation`

The input includes, for each fulfillment order, the location that holds the capacity to release.

#### Return Value

Type: `ConnectApi.ReleaseHeldFOCapacityOutputRepresentation`
