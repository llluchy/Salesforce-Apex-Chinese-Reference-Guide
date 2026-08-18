---
doc_id: "apex_connectapi_output_distance_calculation_output"
---

# ConnectApi.DistanceCalculationOutputRepresentation

Shipping distance data for a set of inventory locations.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `averageDistance` | Double | The average distance from the locations to the order recipient. | 51.0 |
| `locations` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​LocationOutput​Representation`\> | The list of locations and their distances to the order recipient. | 51.0 |
| `rank` | Integer | This result’s rank among all results by average distance to the order recipient. | 51.0 |
