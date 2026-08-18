---
doc_id: "apex_connectapi_output_status_capability"
---

# ConnectApi.StatusCapability

If a feed post or comment has this capability, it has a status that determines its visibility.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `feedEntityStatus` | [`ConnectApi.​FeedEntityStatus`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedEntityStatusEnum) | Status of the feed post or comment. Values are:
-   `Draft`—The feed post isn’t published but is visible to the author and users with Modify All Data or View All Data permission. Comments can’t be drafts.
-   `Isolated`—The feed post or comment is isolated, and only admins can see it.
-   `PendingReview`—The feed post or comment isn’t approved yet and therefore isn’t published or visible.
-   `Published`—The feed post or comment is approved and visible.

 | 37.0 |
| `isApprovable​ByMe` | Boolean | Specifies whether the context user can change the status of the feed post or comment. | 37.0 |

## See Also

- [ConnectApi.CommentCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_capabilities.htm)

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")
