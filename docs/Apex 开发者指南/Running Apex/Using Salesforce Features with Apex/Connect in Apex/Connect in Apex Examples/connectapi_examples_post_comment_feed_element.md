---
doc_id: "connectapi_examples_post_comment_feed_element"
---

# Post a Comment

Call a method to post a comment.

Call [`postCommentToFeedElement(communityId, feedElementId, text)`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postCommentToFeedElement_1) to post a plain text comment to a feed element.

```apex
ConnectApi.Comment comment = ConnectApi.ChatterFeeds.postCommentToFeedElement(null, '0D5D0000000KuGh', 'I agree with the proposal.' );
```
