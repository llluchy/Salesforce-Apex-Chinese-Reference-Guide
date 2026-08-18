---
doc_id: "apex_connectapi_output_chatter_likes_capability"
---

# ConnectApi.ChatterLikesCapability

If a feed element has this capability, the context user can like it. Exposes information about existing likes.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `isLikedBy​CurrentUser` | Boolean | Indicates whether the feed element is liked by the context user (`true`) or not (`false`). | 32.0 |
| `page` | `ConnectApi.​ChatterLikePage` | Likes information for this feed element. | 32.0 |
| `likesMessage` | `ConnectApi.​MessageBody` | A message body that describes who likes the feed element. | 32.0 |
| `myLike` | `ConnectApi.​Reference` | If the context user has liked the feed element, this property is a reference to the specific like, `null` otherwise. | 32.0 |

## See Also

- [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
