---
doc_id: "apex_connectapi_output_approval_capability"
---

# ConnectApi.ApprovalCapability

If a feed element has this capability, it includes information about an approval.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `id` | String | The work item ID. The work item ID is `null` if there isn’t a pending work item associated with the approval record. | 32.0 |
| `postTemplate​Fields` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​ApprovalPost​TemplateField`\> | The details of the approval post template field. | 32.0 |
| `processInstance​StepId` | String | The process instance step ID. The associated record represents one step in an approval process. | 32.0 |
| `status` | `ConnectApi.​WorkflowProcess​Status` | The status of the approval. | 32.0 |

## See Also

- [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
