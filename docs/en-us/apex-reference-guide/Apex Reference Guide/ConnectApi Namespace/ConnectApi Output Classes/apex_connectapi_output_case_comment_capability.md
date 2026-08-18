---
doc_id: "apex_connectapi_output_case_comment_capability"
---

# ConnectApi.CaseCommentCapability

If a feed element has this capability, it has a case comment on the case feed.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `actorType` | `ConnectApi.​CaseActorType` | Specifies the type of user who made the comment. | 32.0 |
| `createdBy` | `ConnectApi.Actor` | Information about the user who created the comment. | 32.0 |
| `createdDate` | Datetime | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z. | 32.0 |
| `eventType` | `ConnectApi.​CaseComment​EventType` | Specifies an event type for a comment in the case feed. | 32.0 |
| `id` | String | 18-character ID of case comment. | 32.0 |
| `published` | Boolean | Specifies whether the comment has been published. | 32.0 |
| `text` | String | Text of the case comment. | 32.0 |

## See Also

- [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
