---
doc_id: "apex_connectapi_output_best_location_per_sku_output"
---

# ConnectApi.BestLocationPerSKUOutputRepresentation

A recommended fulfillment location for a specific SKU, including available quantity and score.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `errors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.ErrorResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm "Base error response.")\> | Any errors that were returned. | 67.0 |
| `locationId` | String | The location's ID. | 67.0 |
| `quantityAvailable​ToOrder` | Integer | The quantity available to order at this location. | 67.0 |
| `success` | Boolean | Indicates whether the request succeeded. | 67.0 |
| `unitScore` | Double | The score for this SKU at this location. | 67.0 |
