---
doc_id: "connectapi_examples_bookmark_feed_element"
---

# Bookmark a Feed Element

Call a method to bookmark a feed element.

Call [`updateFeedElementBookmarks(communityId, feedElementId, isBookmarkedByCurrentUser)`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_updateFeedElementBookmarks_2) to bookmark a feed element.

```apex
ConnectApi.BookmarksCapability bookmark = ConnectApi.ChatterFeeds.updateFeedElementBookmarks(null, '0D5D0000000KuGh', true);
```
