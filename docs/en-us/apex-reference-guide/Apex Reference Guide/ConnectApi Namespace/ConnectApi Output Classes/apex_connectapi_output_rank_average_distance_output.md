---
doc_id: "apex_connectapi_output_rank_average_distance_output"
---

# ConnectApi.RankAverageDistanceOutputRepresentation

The results of calculating the average distances from sets of inventory locations to an order recipient.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `distanceUnit` | String | The specified unit of distance (miles or kilometers). | 51.0 |
| `results` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​AverageDistanceResult​OutputRepresentation`\> | The results of the shipping distance calculations. | 51.0 |
