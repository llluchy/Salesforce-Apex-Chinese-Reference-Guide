---
doc_id: "apex_connectapi_output_flow_approval_process_collection"
---

# ConnectApi.FlowApprovalProcessCollection

The results of requesting a flow approval status.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `flowApproval​Processes` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​FlowApproval​Process`\> | A list of flow approval processes retrieved with the specified process names and related record ID. | 66.0 |
| `relatedRecordId` | String | The ID of the related record associated with the approval submission. | 66.0 |

## See Also

- [getFlowApprovalProcessWithStatus(relatedRecordId, processNames)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FlowApprovalProcesses_static_methods.htm#apex_ConnectAPI_FlowApprovalProcesses_getFlowApprovalProcessWithStatus_1)
