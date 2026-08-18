---
doc_id: "connectapi_examples_get_feed_elements_another_user"
---

# Get Feed Elements From Another User’s Feed

Call a method to get feed elements from another user’s feed.

Call `getFeedElementsFromFeed(communityId, feedType, subjectId)` to get the first page of feed elements from another user’s feed.

```apex
ConnectApi.FeedElementPage fep = ConnectApi.ChatterFeeds.getFeedElementsFromFeed(Network.getNetworkId(), ConnectApi.FeedType.UserProfile, '005R0000000HwMA');
```

 This example calls the same method to get the first page of feed elements from another user’s record feed.

```apex
ConnectApi.FeedElementPage fep = ConnectApi.ChatterFeeds.getFeedElementsFromFeed(Network.getNetworkId(), ConnectApi.FeedType.Record, '005R0000000HwMA');
```

The `getFeedElementsFromFeed` method is overloaded, which means that the method name has many different signatures. A signature is the name of the method and its parameters in order.

Each signature lets you send different inputs. For example, one signature can specify the feed type and the subject ID. Another signature could have those parameters and an extra parameter to specify the maximum number of comments to return for each feed element.
