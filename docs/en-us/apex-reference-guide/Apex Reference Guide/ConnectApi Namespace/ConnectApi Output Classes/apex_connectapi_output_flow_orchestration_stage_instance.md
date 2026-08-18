---
doc_id: "apex_connectapi_output_flow_orchestration_stage_instance"
---

# ConnectApi.OrchestrationStageInstance

Orchestration stage instance.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `completionTime` | String | The duration of the stage in seconds. | 63.0 |
| `id` | String | ID of the orchestration stage instance. | 54.0 |
| `label` | String | Orchestration stage instance label. | 54.0 |
| `name` | String | Orchestration stage instance name. | 54.0 |
| `status` | [`ConnectApi.​Orchestration​Status`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrchestrationInstanceStatusEnum) | Status of the orchestration instance. Values are:
-   `Canceled`
-   `Completed`
-   `Discontinued`
-   `Error`
-   `InProgress`
-   `NotStarted`
-   `Suspended`

 | 54.0 |
| `stepInstances` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​OrchestrationStep​Instance`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_orchestration_step_instance.htm "Orchestration step instance.")\> | Orchestration stage instance steps. | 54.0 |

## See Also

- [ConnectApi.OrchestrationInstance](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_orchestration_instance.htm)
