---
doc_id: "apex_connectapi_output_route_product_output"
---

# ConnectApi.RouteProductOutputRepresentation

A product allocated to a fulfillment location within a route, including its allocated quantity and score.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `errors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.ErrorResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm "Base error response.")\> | Any errors that were returned. | 67.0 |
| `product` | String | The product's SKU. | 67.0 |
| `quantity` | Integer | The product quantity allocated to this location. | 67.0 |
| `success` | Boolean | Indicates whether the request succeeded. | 67.0 |
| `unitScore` | Double | The score for this product at this location. | 67.0 |
