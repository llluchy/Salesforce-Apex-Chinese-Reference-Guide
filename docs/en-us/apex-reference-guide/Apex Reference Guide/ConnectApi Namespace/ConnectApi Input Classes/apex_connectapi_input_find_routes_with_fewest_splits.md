---
doc_id: "apex_connectapi_input_find_routes_with_fewest_splits"
---

# ConnectApi.FindRoutesWithFewestSplitsInputRepresentation

Data used to calculate order fulfillment routes involving the fewest number of shipment splits.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `locationAvailable​Inventory` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​LocationAvailability​InputRepresentation`\> | Each list element represents the available quantity of a product at an inventory location. | At least one element is required | 51.0 |
| `maximumNumber​OfSplits` | Integer | The maximum allowable number of shipment splits. Routing options that involve more than this number of splits are not returned. Each split represents an additional shipment. Specifying a maximum of 0 returns only locations that can fulfill the entire order in a single shipment. A maximum of 1 returns combinations of locations that can fulfill the order in one or two shipments, and so on. | Required | 51.0 |
| `orderedQuantities` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​QuantityWithSku​InputRepresentation`\> | Each list element represents a quantity of a product to be routed for fulfillment. | At least one element is required | 51.0 |

## See Also

- [findRoutesWithFewestSplits(findRoutesWithFewestSplitsInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplits_1)
