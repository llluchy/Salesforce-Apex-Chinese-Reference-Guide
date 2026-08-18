---
doc_id: "apex_connectapi_output_route_location_output"
---

# ConnectApi.RouteLocationOutputRepresentation

A fulfillment location within a route, including the products fulfilled from that location.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `errors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.ErrorResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm "Base error response.")\> | Any errors that were returned. | 67.0 |
| `location` | String | The location's ID. | 67.0 |
| `products` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.RouteProductOutputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_route_product_output.htm "A product allocated to a fulfillment location within a route, including its allocated quantity and score.")\> | Products fulfilled from this location. | 67.0 |
| `success` | Boolean | Indicates whether the request succeeded. | 67.0 |
