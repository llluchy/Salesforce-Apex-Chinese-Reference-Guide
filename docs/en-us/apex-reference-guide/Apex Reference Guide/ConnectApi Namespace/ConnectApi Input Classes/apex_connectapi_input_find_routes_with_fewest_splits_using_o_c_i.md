---
doc_id: "apex_connectapi_input_find_routes_with_fewest_splits_using_o_c_i"
---

# ConnectApi.FindRoutesWithFewestSplitsUsingOCIInputRepresentation

Data used to calculate order fulfillment routes involving the fewest number of shipment splits, taking into account inventory availability.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `findRoutesWithFewestSplitsUsingOCIInputs` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.FindRoutesWithFewestSplitsGroupUsingOCIInputRepresentation`\> | Each list element represents a routing request for one order. | At least one element is required | 54.0 |
| ociExpandAttributes | Collection | The string value groupEligibilityExclusion excludes specific locations. | Optional | 59.0 |

## See Also

- [findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplitsUsingOCI_1)
