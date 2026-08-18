---
doc_id: "apex_connectapi_output_n_b_a_recommendations"
---

# ConnectApi.NBARecommendations

Recommendations returned by a recommendation strategy.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `debug` | String | Runtime debug information recorded during recommendation strategy execution. | 45.0 |
| `errors` | String | Runtime errors that occurred during recommendation strategy execution. | 45.0 |
| `executionId` | String | ID of the recommendation strategy execution. | 45.0 |
| `onBehalfOfId` | String | ID of the user or entity for which the recommendation strategy was executed. | 45.0 |
| `recommendations` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​NBARecommendation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_recommendation.htm "A recommendation returned by a recommendation strategy.")\> | List of recommendations returned by a recommendation strategy. | 45.0 |
| `trace` | [`ConnectApi.​StrategyTrace`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_strategy_trace.htm "Messages and trace nodes for a recommendation strategy execution.") | Trace information for the recommendation strategy execution, if requested. | 45.0 |
