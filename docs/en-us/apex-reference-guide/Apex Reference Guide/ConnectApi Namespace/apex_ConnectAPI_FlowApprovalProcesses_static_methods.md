---
doc_id: "apex_ConnectAPI_FlowApprovalProcesses_static_methods"
---

# FlowApprovalProcesses Class

Get the status and available actions for flow approval processes.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## FlowApprovalProcesses Methods

These methods are for `FlowApprovalProcesses`. All methods are static.

## See Also

- [getFlowApprovalProcessWithStatus(relatedRecordId, processNames)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FlowApprovalProcesses_static_methods.htm#apex_ConnectAPI_FlowApprovalProcesses_getFlowApprovalProcessWithStatus_1)

### getFlowApprovalProcessWithStatus(relatedRecordId, processNames)

Get the status and available actions for flow approval processes.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.FlowApprovalProcessCollection getFlowApprovalProcessWithStatus(String relatedRecordId, List<String> processNames)`

#### Parameters

relatedRecordId

Type: String

The ID of the related record associated with the approval submission.

processNames

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

A list of flow approval process names.

#### Return Value

Type: [`ConnectApi.FlowApprovalProcessCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_approval_process_collection.htm "The results of requesting a flow approval status.")
