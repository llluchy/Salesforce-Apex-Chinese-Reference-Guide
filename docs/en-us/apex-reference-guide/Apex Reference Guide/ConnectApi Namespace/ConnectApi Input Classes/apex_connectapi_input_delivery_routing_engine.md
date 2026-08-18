---
doc_id: "apex_connectapi_input_delivery_routing_engine"
---

# ConnectApi.DeliveryRoutingEngineInputRepresentation

Input for the Delivery Routing Engine, which retrieves routing rules to determine which fulfillment locations should fulfill products for a given delivery address.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `deliveryAddress` | [`ConnectApi.DeliveryAddressInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_delivery_address.htm "Delivery address.") | The destination address for delivery. Use a valid address format.
-   Coordinates: latitude and longitude
-   Postal: country code and postal code
-   Geographic: country code, state, and city

 | Required | 67.0 |
| `excludeLocations` | [`ConnectApi.LocationListInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_location_list.htm "A list of location identifiers used to specify locations excluded from routing consideration.") | Locations that are excluded from routing consideration. Don't leave any identifier blank. The list can contain up to 100 items. | Optional | 67.0 |
| `fulfillmentCriteria​GroupName` | String | The name of the fulfillment criteria group used for routing. | Required | 67.0 |
| `locationGroupName` | String | The name of the location group where routing is happening. | Required | 67.0 |
| `products` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.RoutingProductInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_routing_product.htm "A product to route, including its SKU and requested quantity.")\> | The list of products to route. Enter a value between 1 to 2,000 items. | Required | 67.0 |
