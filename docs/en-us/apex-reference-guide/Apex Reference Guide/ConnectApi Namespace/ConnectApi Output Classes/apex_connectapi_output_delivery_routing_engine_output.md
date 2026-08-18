---
doc_id: "apex_connectapi_output_delivery_routing_engine_output"
---

# ConnectApi.DeliveryRoutingEngineOutputRepresentation

Delivery routing engine output, including ranked routes and the best fulfillment locations for each SKU.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `bestLocations​PerStockKeepingUnit` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.BestLocationPerSKUOutputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_best_location_per_sku_output.htm "A recommended fulfillment location for a specific SKU, including available quantity and score.")\>> | The best fulfillment locations for each SKU. The map key is the SKU string. | 67.0 |
| `errors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.ErrorResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm "Base error response.")\> | Any errors that were returned. | 67.0 |
| `routes` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.RouteOutputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_route_output.htm "A single possible fulfillment route, including its aggregated score and the locations that make up the route.")\> | Delivery routes ranked by score. | 67.0 |
| `success` | Boolean | Indicates whether the request succeeded. | 67.0 |
