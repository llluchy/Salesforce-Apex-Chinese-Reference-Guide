---
doc_id: "connectapi_examples_get_feed_elements_community_scoped"
---

# Get Site-Specific Feed Elements from a Feed

Call a method to display a user profile feed that contains only feed elements that are scoped to a specific Experience Cloud site.

Feed elements that have a User or a Group parent record are scoped to sites. Feed elements whose parents are record types other than User or Group are always visible in all sites. Other parent record types could be scoped to sites in the future.

This example calls [`getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, filter)`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_7a) to get only site-specific feed elements.

```apex
ConnectApi.FeedElementPage fep = ConnectApi.ChatterFeeds.getFeedElementsFromFeed(Network.getNetworkId(), ConnectApi.FeedType.UserProfile, 'me', 3, ConnectApi.FeedDensity.FewerUpdates, null, null, ConnectApi.FeedSortOrder.LastModifiedDateDesc, ConnectApi.FeedFilter.CommunityScoped);
```
