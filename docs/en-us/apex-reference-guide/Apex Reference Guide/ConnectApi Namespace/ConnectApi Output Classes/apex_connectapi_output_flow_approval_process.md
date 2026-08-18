---
doc_id: "apex_connectapi_output_flow_approval_process"
---

# ConnectApi.FlowApprovalProcess

Details about a flow approval process, its status, and available actions.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `approvalProcess​Name` | String | The name of the flow approval process. | 66.0 |
| `availableActions` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​FlowApproval​ProcessAction`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_approval_process_action.htm "Available actions for a flow approval process.")\> | Available actions for the flow approval process. | 66.0 |
| `isApproval​InProgress` | Boolean | Specifies whether one or more approval submissions are in progress (`true`) or not (`false`). | 66.0 |

## See Also

- [ConnectApi.FlowApprovalProcessCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_approval_process_collection.htm)
