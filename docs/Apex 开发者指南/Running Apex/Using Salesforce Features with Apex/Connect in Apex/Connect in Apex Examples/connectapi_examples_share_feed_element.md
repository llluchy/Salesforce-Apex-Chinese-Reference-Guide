---
doc_id: "connectapi_examples_share_feed_element"
---

# Share a Feed Element (prior to Version 39.0)

Call a method to share a feed element.

:::tip Important
In API version 39.0 and later, `shareFeedElement(communityId, subjectId, feedElementType,
                    originalFeedElementId)` isn’t supported. See [Share a Feed Element (in Version 39.0 and Later)](atlas.en-us.apexcode.meta/apexcode/connectapi_examples_share_feed_element_comment.htm).
:::

Call [`shareFeedElement(communityId, subjectId, feedElementType, originalFeedElementId)`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_shareFeedElement) to share a feed item (which is a type of feed element) with a group.

```apex
ConnectApi.ChatterLike chatterLike = ConnectApi.ChatterFeeds.likeFeedElement(null, '0D5D0000000KuGh');
```
