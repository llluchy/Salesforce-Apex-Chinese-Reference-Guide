---
doc_id: "connectapi_examples_post_feed_element"
---

# Post a Feed Element

Make a call to post a feed element.

Call [`postFeedElement(communityId, subjectId, feedElementType, text)`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElement_1) to post a string of text.

```apex
ConnectApi.FeedElement feedElement = ConnectApi.ChatterFeeds.postFeedElement(Network.getNetworkId(), '0F9d0000000TreH', ConnectApi.FeedElementType.FeedItem, 'On vacation this week.');
```

The second parameter, subjectId is the ID of the parent this feed element is posted to. The value can be the ID of a user, group, or record, or the string `me` to indicate the context user.
