---
doc_id: "apex_connectapi_output_approval_attach"
---

# ConnectApi.ApprovalAttachment

Attach an approval to a feed item.

:::tip Important
This class isn’t available in version 32.0 and later. In version 32.0
        and later, [ConnectApi.ApprovalCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_approval_capability.htm#apex_connectapi_output_approval_capability) is used.
:::

Subclass of [ConnectApi.FeedItemAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm "Feed item attachment.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `id` | String | A work item ID. | 28.0–31.0 |
| `postTemplateFields` | `List <ConnectApi.​Approval​Post​Template​Field>` | Collection of approval post template fields | 28.0–31.0 |
| `process​InstanceStepId` | String | An approval step ID. | 30.0–31.0 |
| `status` | `ConnectApi.​WorkflowProcess​Status` Enum | Status of a workflow process.
-   `Approved`
-   `Fault`
-   `Held`
-   `NoResponse`
-   `Pending`
-   `Reassigned`
-   `Rejected`
-   `Removed`
-   `Started`

 | 28.0–31.0 |
