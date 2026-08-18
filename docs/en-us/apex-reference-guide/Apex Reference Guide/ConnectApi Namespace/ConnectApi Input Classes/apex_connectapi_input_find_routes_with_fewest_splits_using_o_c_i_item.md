---
doc_id: "apex_connectapi_input_find_routes_with_fewest_splits_using_o_c_i_item"
---

# ConnectApi.FindRoutesWithFewestSplitsUsingOCIItemInputRepresentation

A quantity of a product and a location group or location assigned to fulfill it.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `locationGroup​Identifier` | String | The External Reference of the location group or location assigned to the order item. If you specify a location group, inventory is considered for all locations belonging to that group. | Required | 54.0 |
| `quantity` | Double | Quantity of the product. | Required | 54.0 |
| `stockKeepingUnit` | String | SKU of the product. | Required | 54.0 |

## See Also

- [findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplitsUsingOCI_1)

-   [ConnectApi.FindRoutesWithFewestSplitsUsingOCIInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_find_routes_with_fewest_splits_using_o_c_i.htm "Data used to calculate order fulfillment routes involving the fewest number of shipment splits, taking into account inventory availability.")
    
-   [ConnectApi.FindRoutesWithFewestSplitsGroupUsingOCIInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_find_routes_with_fewest_splits_group_using_o_c_i.htm "Data used to calculate inventory availability and fulfillment routes for one order involving the fewest number of shipment splits.")
