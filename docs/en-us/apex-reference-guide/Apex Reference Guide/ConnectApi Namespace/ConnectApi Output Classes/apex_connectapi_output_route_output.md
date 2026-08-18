---
doc_id: "apex_connectapi_output_route_output"
---

# ConnectApi.RouteOutputRepresentation

A single possible fulfillment route, including its aggregated score and the locations that make up the route.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `errors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.ErrorResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm "Base error response.")\> | Any errors that were returned. | 67.0 |
| `locations` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.RouteLocationOutputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_route_location_output.htm "A fulfillment location within a route, including the products fulfilled from that location.")\> | The fulfillment locations that make up this route. | 67.0 |
| `success` | Boolean | Indicates whether the request succeeded. | 67.0 |
| `totalScore` | Double | The aggregated score for this route. | 67.0 |
