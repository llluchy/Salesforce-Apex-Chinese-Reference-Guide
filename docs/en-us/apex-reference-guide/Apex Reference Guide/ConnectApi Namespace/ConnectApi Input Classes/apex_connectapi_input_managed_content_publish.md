---
doc_id: "apex_connectapi_input_managed_content_publish"
---

# ConnectApi.ManagedContentPublishInput

Input for publishing content.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `contentIds` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | IDs of content to publish. All variants of the content are published. | Required if `variantIds` isn’t specified | 60.0 |
| `contextContent​SpaceId` | String | ID of the context workspace. If specified, content from other workspaces is published if it is shared to the specified workspace. If unspecified, the context workspace is derived from the content’s origin workspace. All content in the request should belong to the same origin workspace. | Optional | 61.0 |
| `description` | String | Description for publish action. | Optional | 60.0 |
| `includeContent​References` | Boolean | Specifies whether to include content references (`true`) or not (`false`). | Optional | 60.0 |
| `variantIds` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | IDs of variants to publish. All variants must be from the same content space. | Required if `contentIds` isn’t specified | 60.0 |
