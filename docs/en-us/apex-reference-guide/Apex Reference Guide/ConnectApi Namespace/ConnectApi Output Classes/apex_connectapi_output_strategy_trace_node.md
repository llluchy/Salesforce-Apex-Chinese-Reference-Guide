---
doc_id: "apex_connectapi_output_strategy_trace_node"
---

# ConnectApi.StrategyTraceNode

A trace node for a recommendation strategy execution.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `inputCount` | Integer | Number of items put into the node. | 45.0 |
| `messages` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | Messages that occurred during node execution. | 45.0 |
| `nodeName` | String | Name of the node. | 45.0 |
| `nodeTime` | Long | Time spent processing inside the node. | 45.0 |
| `nodeType` | String | Type of node. | 45.0 |
| `outputCount` | Integer | Number of items returned from the node. | 45.0 |
| `outputs` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | Recommendations that are returned from the node. | 45.0 |
| `totalTime` | Long | Total time spent processing. | 45.0 |

## See Also

- [ConnectApi.StrategyTrace](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_strategy_trace.htm)
