---
doc_id: "apex_ConnectAPI_ChatterFeeds_static_methods"
---

# ChatterFeeds Class

Get, post, and delete feed elements, likes, comments, and bookmarks. You can also search feed elements, share feed elements, and vote on polls.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Usage

The Chatter feed is a container of feed elements. The abstract class `ConnectApi.FeedElement` is a parent class to the `ConnectApi.FeedItem` class, representing feed posts, and the `ConnectApi.GenericFeedElement` class, representing bundles and recommendations in the feed. For detailed information, see [Working with Feeds and Feed Elements](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectapi_features_feeds_feed_elements.htm).

:::tip Important
Feed item methods aren’t available in version 32.0. In version 32.0 and
    later, use feed element methods.
:::

Message segments in a feed item are typed as `ConnectApi.MessageSegment`. Feed item capabilities are typed as `ConnectApi.FeedItemCapability`. Record fields are typed as `ConnectApi.AbstractRecordField`. These classes are all abstract and have several concrete subclasses. At runtime you can use `instanceof` to check the concrete types of these objects and then safely proceed with the corresponding downcast. When you downcast, you must have a default case that handles unknown subclasses.

:::tip Important
The composition of a feed can change between releases. Write your
                code to handle instances of unknown subclasses.
:::

## ChatterFeeds Methods

These methods are for `ChatterFeeds`. All methods are static.

All methods in this class require Chatter and are subject to the per user, per namespace, per hour rate limit.

## See Also

- [createStream(communityId, streamInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_createStream_5)
- [deleteComment(communityId, commentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_deleteComment)
- [deleteFeedElement(communityId, feedElementId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_deleteFeedElement_1)
- [deleteLike(communityId, likeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_deleteLike)
- [deleteStream(communityId, streamId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_deleteStream_1)
- [getComment(communityId, commentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getComment)
- [getCommentBatch(communityId, commentIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getCommentBatch_1)
- [getCommentInContext(communityId, commentId, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getCommentInContext_1)
- [getCommentsForFeedElement(communityId, feedElementId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getCommentsForFeedElement_1)
- [getCommentsForFeedElement(communityId, feedElementId, threadedCommentsCollapsed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getCommentsForFeedElement_1a)
- [getCommentsForFeedElement(communityId, feedElementId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getCommentsForFeedElement_2)
- [getCommentsForFeedElement(communityId, feedElementId, pageParam, pageSize, threadedCommentsCollapsed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getCommentsForFeedElement_2a)
- [getCommentsForFeedElement(communityId, feedElementId, threadedCommentsCollapsed, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getCommentsForFeedElement_4)
- [getCommentsForFeedElement(communityId, feedElementId, pageParam, pageSize, threadedCommentsCollapsed, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getCommentsForFeedElement_4a)
- [getCommentsForFeedElement(communityId, feedElementId, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getCommentsForFeedElement_3)
- [getCommentsForFeedElement(communityId, feedElementId, sortParam, threadedCommentsCollapsed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getCommentsForFeedElement_3a)
- [getExtensions(communityId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getExtensions)
- [getFeed(communityId, feedType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeed)
- [getFeed(communityId, feedType, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeed_2)
- [getFeed(communityId, feedType, subjectId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeed_3)
- [getFeed(communityId, feedType, subjectId, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeed_4)
- [getFeedDirectory(String)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedDirectory)
- [getFeedElement(communityId, feedElementId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElement_1)
- [getFeedElement(communityId, feedElementId, commentSort)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElement_1a)
- [getFeedElement(communityId, feedElementId, threadedCommentsCollapsed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElement_1b)
- [getFeedElement(communityId, feedElementId, threadedCommentsCollapsed, commentSort)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElement_1c)
- [getFeedElement(communityId, feedElementId, recentCommentCount, elementsPerBundle)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElement_2)
- [getFeedElement(communityId, feedElementId, recentCommentCount, elementsPerBundle, threadedCommentsCollapsed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElement_2b)
- [getFeedElement(communityId, feedElementId, recentCommentCount, elementsPerBundle, threadedCommentsCollapsed, commentSort)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElement_2c)
- [getFeedElement(communityId, feedElementId, recentCommentCount, elementsPerBundle, commentSort)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElement_2a)
- [getFeedElementBatch(communityId, feedElementIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementBatch_1)
- [getFeedElementPoll(communityId, feedElementId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementPoll_1)
- [getFeedElementsFromBundle(communityId, feedElementId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromBundle_1)
- [getFeedElementsFromBundle(communityId, feedElementId, pageParam, pageSize, elementsPerBundle, recentCommentCount)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromBundle_2)
- [getFeedElementsFromFeed(communityId, feedType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_1)
- [getFeedElementsFromFeed(communityId, feedType, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_3)
- [getFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_4)
- [getFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_4a)
- [getFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, filter, threadedCommentsCollapsed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_18)
- [getFeedElementsFromFeed(communityId, feedType, subjectId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_2)
- [getFeedElementsFromFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_5)
- [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_6)
- [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, showInternalOnly)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_7)
- [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_7a)
- [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, filter, threadedCommentsCollapsed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_16)
- [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, customFilter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_7b)
- [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_8)
- [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_9)
- [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, filter, threadedCommentsCollapsed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_9aa)
- [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, customFilter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_9a)
- [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, customFilter, threadedCommentsCollapsed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_17)
- [getFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFilterFeed_1)
- [getFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFilterFeed_2)
- [getFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFilterFeed_3)
- [getFeedElementsFromFilterFeedUpdatedSince(communityId, subjectId, keyPrefix, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFilterFeedUpdatedSince)
- [getFeedElementsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_1)
- [getFeedElementsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_1a)
- [getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_2)
- [getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, showInternalOnly)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_3)
- [getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_3a)
- [getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, customFilter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_3b)
- [getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_4)
- [getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_5)
- [getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly, customFilter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_5a)
- [getFeedWithFeedElements(communityId, feedType, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedWithFeedElements_5)
- [getFeedWithFeedElements(communityId, feedType, pageSize, recentCommentCount)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedWithFeedElements_6)
- [getFilterFeed(communityId, subjectId, keyPrefix)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFilterFeed)
- [getFilterFeed(communityId, subjectId, keyPrefix, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFilterFeed_2)
- [getFilterFeedDirectory(communityId, subjectId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFilterFeedDirectory)
- [getLike(communityId, likeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getLike)
- [getLikesForComment(communityId, commentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getLikesForComment)
- [getLikesForComment(communityId, commentId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getLikesForComment_2)
- [getLikesForFeedElement(communityId, feedElementId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getLikesForFeedElement_1)
- [getLikesForFeedElement(communityId, feedElementId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getLikesForFeedElement_2)
- [getLinkMetadata(communityId, urls)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getLinkMetadata_1)
- [getPinnedFeedElementsFromFeed(communityId, feedType, subjectId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getPinnedFeedElementsFromFeed_1)
- [getReadByForFeedElement(communityId, feedElementId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getReadByForFeedElement_1)
- [getReadByForFeedElement(communityId, feedElementId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getReadByForFeedElement_2)
- [getRelatedPosts(communityId, feedElementId, filter, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getRelatedPosts_1)
- [getStream(communityId, streamId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getStream_2)
- [getStream(communityId, streamId, globalScope)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getStream_3)
- [getStreams(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getStreams_1)
- [getStreams(communityId, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getStreams_1a)
- [getStreams(communityId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getStreams_2)
- [getStreams(communityId, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getStreams_2a)
- [getStreams(communityId, pageParam, pageSize, sortParam, globalScope)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getStreams_5)
- [getSupportedEmojis()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getSupportedEmojis_1)
- [getThreadsForFeedComment(communityId, commentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getThreadsForFeedComment_1)
- [getThreadsForFeedComment(communityId, commentId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getThreadsForFeedComment_2)
- [getThreadsForFeedComment(communityId, commentId, threadedCommentsCollapsed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getThreadsForFeedComment)
- [getTopUnansweredQuestions(communityId) (Pilot)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getTopUnansweredQuestions_1)
- [getTopUnansweredQuestions(communityId, filter) (Pilot)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getTopUnansweredQuestions_2)
- [getTopUnansweredQuestions(communityId, pageSize) (Pilot)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getTopUnansweredQuestions_3)
- [getTopUnansweredQuestions(communityId, filter, pageSize) (Pilot)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getTopUnansweredQuestions_4)
- [getVotesForComment(communityId, commentId, vote)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getVotesForComment_1)
- [getVotesForComment(communityId, commentId, vote, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getVotesForComment_2)
- [getVotesForFeedElement(communityId, feedElementId, vote)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getVotesForFeedElement_1)
- [getVotesForFeedElement(communityId, feedElementId, vote, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getVotesForFeedElement_2)
- [isCommentEditableByMe(communityId, commentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_isCommentEditableByMe_1)
- [isFeedElementEditableByMe(communityId, feedElementId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_isFeedElementEditableByMe_1)
- [isModified(communityId, feedType, subjectId, since)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_isModified)
- [likeComment(communityId, commentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_likeComment)
- [likeFeedElement(communityId, feedElementId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_likeFeedElement)
- [postCommentToFeedElement(communityId, feedElementId, text)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postCommentToFeedElement_1)
- [postCommentToFeedElement(communityId, feedElementId, comment, feedElementFileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postCommentToFeedElement_2)
- [postFeedElement(communityId, subjectId, feedElementType, text)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElement_1)
- [postFeedElement(communityId, feedElement)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElement_3)
- [postFeedElementBatch(communityId, feedElements)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElementBatch_1)
- [publishDraftFeedElement(communityId, feedElementId, feedElement)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_publishDraftFeedElement_1)
- [searchFeedElements(communityId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElements_1)
- [searchFeedElements(communityId, q, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElements_2)
- [searchFeedElements(communityId, q, threadedCommentsCollapsed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElements_2a)
- [searchFeedElements(communityId, q, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElements_3)
- [searchFeedElements(communityId, q, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElements_4)
- [searchFeedElements(communityId, q, pageParam, pageSize, threadedCommentsCollapsed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElements_4a)
- [searchFeedElements(communityId, q, recentCommentCount, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElements_5)
- [searchFeedElementsInFeed(communityId, feedType, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_1)
- [searchFeedElementsInFeed(communityId, feedType, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_3)
- [searchFeedElementsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_4)
- [searchFeedElementsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_4a)
- [searchFeedElementsInFeed(communityId, feedType, subjectId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_2)
- [searchFeedElementsInFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_5)
- [searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_6)
- [searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_6a)
- [searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, customFilter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_6b)
- [searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_7)
- [searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_8)
- [searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, customFilter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_8a)
- [searchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFilterFeed_1)
- [searchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFilterFeed_2)
- [searchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFilterFeed_3)
- [searchStreams(communityId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchStreams_3)
- [searchStreams(communityId, q, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchStreams_3a)
- [searchStreams(communityId, q, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchStreams_4)
- [searchStreams(communityId, q, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchStreams_4a)
- [searchStreams(communityId, q, pageParam, pageSize, sortParam, globalScope)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchStreams_10)
- [setCommentIsVerified(communityId, commentId, isVerified)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setCommentIsVerified_2)
- [setCommentIsVerifiedByAnonymized(communityId, commentId, isVerified, isVerifiedByAnonymized)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setCommentIsVerifiedByAnonymized_2)
- [setCommentVote(communityId, commentId, upDownVote)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setCommentVote_1)
- [setFeedCommentStatus(communityId, commentId, status)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setFeedCommentStatus_1)
- [setFeedElementIsClosed(communityId, feedElementId, isClosed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setFeedElementIsClosed_1)
- [setFeedElementVote(communityId, feedElementId, upDownVote)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setFeedElementVote_1)
- [setFeedEntityStatus(communityId, feedElementId, status)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setFeedEntityStatus_1)
- [setIsMutedByMe(communityId, feedElementId, isMutedByMe)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setIsMutedByMe_1)
- [setIsReadByMe(communityId, feedElementId, readBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setIsReadByMe_1)
- [setIsReadByMe(communityId, feedElementId, isReadByMe)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setIsReadByMe_2)
- [updateComment(communityId, commentId, comment)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_updateComment)
- [updateDirectMessage(communityId, feedElementId, directMessage)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_updateDirectMessage_1)
- [updateFeedElement(communityId, feedElementId, feedElement)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_updateFeedElement)
- [updateFeedElementBookmarks(communityId, feedElementId, bookmarks)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_updateFeedElementBookmarks_1)
- [updateFeedElementBookmarks(communityId, feedElementId, isBookmarkedByCurrentUser)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_updateFeedElementBookmarks_2)
- [updateFeedElementReadByCapabilityBatch(communityId, feedElementIds, readBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_updateFeedElementReadByCapabilityBatch_1)
- [updateFeedElementReadByCapabilityBatch(communityId, feedElementIds, isReadByMe)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_updateFeedElementReadByCapabilityBatch_2)
- [updateLikeForComment(communityId, commentId, isLikedByCurrentUser)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_updateLikeForComment_3)
- [updateLikeForFeedElement(communityId, feedElementId, isLikedByCurrentUser)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_updateLikeForFeedElement_3)
- [updatePinnedFeedElements(communityId, feedType, subjectId, pin)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_updatePinnedFeedElements_2)
- [updateStream(communityId, streamId, streamInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_updateStream_3)
- [voteOnFeedElementPoll(communityId, feedElementId, myChoiceId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_voteOnFeedElementPoll_1)

### createStream(communityId, streamInput)

Create a Chatter feed stream.

#### API Version

39.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterStream createStream(String communityId, ConnectApi.ChatterStreamInput streamInput)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

streamInput

Type: [`ConnectApi.ChatterStreamInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_stream.htm#apex_connectapi_input_feed_stream "A Chatter feed stream.")

A `ConnectApi.ChatterStreamInput` body.

#### Return Value

Type: [`ConnectApi.ChatterStream`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream.htm#apex_connectapi_output_feed_stream "A Chatter feed stream.")

### deleteComment(communityId, commentId)

Delete a comment.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

`public static Void deleteComment(String communityId, String commentId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

commentId

Type: String

ID for a comment.

#### Return Value

Type: Void

### deleteFeedElement(communityId, feedElementId)

Delete a feed element.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

`public static deleteFeedElement(String communityId, String feedElementId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

#### Return Value

Type: Void

### deleteLike(communityId, likeId)

Delete a like on a comment or post.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

`public static Void deleteLike(String communityId, String likeId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

likeId

Type: String

ID for a like.

#### Return Value

Type: Void

### deleteStream(communityId, streamId)

Delete a Chatter feed stream.

#### API Version

39.0

#### Requires Chatter

Yes

#### Signature

`public static Void deleteStream(String communityId, String streamId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

streamId

Type: String

ID of the Chatter feed stream.

#### Return Value

Type: Void

### getComment(communityId, commentId)

Get a comment.

#### API Version

28.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Comment getComment(String communityId, String commentId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

commentId

Type: String

ID for a comment.

#### Return Value

Type: `ConnectApi.​Comment`

### getCommentBatch(communityId, commentIds)

Get a list of comments.

#### API Version

42.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.BatchResult[] getCommentBatch(String communityId, List<String> commentIds)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

commentIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

A list of up to 100 comment IDs.

#### Return Value

Type: `ConnectApi.BatchResult`\[\]

The `ConnectApi.BatchResult.getResult()` method returns a [`ConnectApi.Comment`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment.htm#apex_connectapi_output_comment "A comment.") object and errors for comments that didn’t load.

### getCommentInContext(communityId, commentId, pageSize)

Get a threaded comment in the context of its parent comments and post.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElement getCommentInContext(String communityId, String commentId, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

commentId

Type: String

ID of the comment.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 25.

#### Return Value

Type: [`ConnectApi.FeedElement`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm#apex_connectapi_output_feed_element "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

If the comment doesn’t support the `comments` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### getCommentsForFeedElement(communityId, feedElementId)

Get comments for a feed element.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.CommentPage getCommentsForFeedElement(String communityId, String feedElementId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

#### Return Value

Type: `ConnectApi.CommentPage`

If the feed element doesn’t support the `Comments` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### getCommentsForFeedElement(communityId, feedElementId, threadedCommentsCollapsed)

Get comments in a threaded style for a feed element.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.CommentPage getCommentsForFeedElement(String communityId, String feedElementId, Boolean threadedCommentsCollapsed)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

threadedCommentsCollapsed

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

#### Return Value

Type: `ConnectApi.CommentPage`

If the feed element doesn’t support the `Comments` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### getCommentsForFeedElement(communityId, feedElementId, pageParam, pageSize)

Get a page of comments for a feed element.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.CommentPage getCommentsForFeedElement(String communityId, String feedElementId, String pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

pageParam

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of comments per page. Valid values are from 1 through 100. If you pass `null`, the default size is 25.

#### Return Value

Type: `ConnectApi.CommentPage`

If the feed element doesn’t support the `Comments` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### getCommentsForFeedElement(communityId, feedElementId, pageParam, pageSize, threadedCommentsCollapsed)

Get a page of comments in a threaded style for a feed element.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.CommentPage getCommentsForFeedElement(String communityId, String feedElementId, String pageParam, Integer pageSize, Boolean threadedCommentsCollapsed)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

pageParam

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of comments per page. Valid values are from 1 through 100. If you pass `null`, the default size is 25.

threadedCommentsCollapsed

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

#### Return Value

Type: `ConnectApi.CommentPage`

If the feed element doesn’t support the `Comments` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### getCommentsForFeedElement(communityId, feedElementId, threadedCommentsCollapsed, sortParam)

Get sorted comments in a threaded style for a feed element.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.CommentsCapability getCommentsForFeedElement(String communityId, String feedElementId, Boolean threadedCommentsCollapsed, ConnectApi.FeedCommentSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedElementId**

Type: String

ID of the feed element.

**threadedCommentsCollapsed**

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

**sortParam**

Type: [`ConnectApi.FeedCommentSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedCommentSortOrderEnum)

Order of comments. Values are:

-   `CreatedDateLatestAsc`—Sorts by most recently created comments in ascending order.
-   `CreatedDateOldestAsc`—Sorts by oldest comments in ascending order.
-   `Relevance`—Sorts by most relevant content.

Sorting in descending order isn’t supported.

#### Return Value

Type: `ConnectApi.CommentPage`

If the feed element doesn’t support the `Comments` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### getCommentsForFeedElement(communityId, feedElementId, pageParam, pageSize, threadedCommentsCollapsed, sortParam)

Get a page of sorted comments in a threaded style for a feed element.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.CommentPage getCommentsForFeedElement(String communityId, String feedElementId, String pageParam, Integer pageSize, Boolean threadedCommentsCollapsed, ConnectApi.FeedCommentSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedElementId**

Type: String

ID of the feed element.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of comments per page. Valid values are from 1 through 100. If you pass `null`, the default size is 25.

**threadedCommentsCollapsed**

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

**sortParam**

Type: [`ConnectApi.FeedCommentSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedCommentSortOrderEnum)

Order of comments. Values are:

-   `CreatedDateLatestAsc`—Sorts by most recently created comments in ascending order.
-   `CreatedDateOldestAsc`—Sorts by oldest comments in ascending order.
-   `Relevance`—Sorts by most relevant content.

Sorting in descending order isn’t supported.

#### Return Value

Type: `ConnectApi.CommentPage`

If the feed element doesn’t support the `Comments` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### getCommentsForFeedElement(communityId, feedElementId, sortParam)

Get sorted comments for a feed element.

#### API Version

41.0

#### Available to Guest Users

41.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.CommentsCapability getCommentsForFeedElement(String communityId, String feedElementId, ConnectApi.FeedCommentSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedElementId**

Type: String

ID of the feed element.

**sortParam**

Type: [`ConnectApi.FeedCommentSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedCommentSortOrderEnum)

Order of comments. Values are:

-   `CreatedDateLatestAsc`—Sorts by most recently created comments in ascending order.
-   `CreatedDateOldestAsc`—Sorts by oldest comments in ascending order.
-   `Relevance`—Sorts by most relevant content.

Sorting in descending order isn’t supported.

#### Return Value

Type: [`ConnectApi.CommentsCapability`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comments_capability.htm#apex_connectapi_output_comments_capability "If a feed element or comment has this capability, the context user can add a comment to it.")

If the feed element doesn’t support the `Comments` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### getCommentsForFeedElement(communityId, feedElementId, sortParam, threadedCommentsCollapsed)

Get sorted comments in a threaded style for a feed element.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.CommentsCapability getCommentsForFeedElement(String communityId, String feedElementId, ConnectApi.FeedCommentSortOrder sortParam, Boolean threadedCommentsCollapsed)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedElementId**

Type: String

ID of the feed element.

**sortParam**

Type: [`ConnectApi.FeedCommentSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedCommentSortOrderEnum)

Order of comments. Values are:

-   `CreatedDateLatestAsc`—Sorts by most recently created comments in ascending order.
-   `CreatedDateOldestAsc`—Sorts by oldest comments in ascending order.
-   `Relevance`—Sorts by most relevant content.

Sorting in descending order isn’t supported.

**threadedCommentsCollapsed**

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

#### Return Value

Type: [`ConnectApi.CommentsCapability`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comments_capability.htm#apex_connectapi_output_comments_capability "If a feed element or comment has this capability, the context user can add a comment to it.")

If the feed element doesn’t support the `Comments` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### getExtensions(communityId, pageParam, pageSize)

Get extensions.

#### API Version

40.0

#### Available to Guest Users

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ExtensionDefinitions getExtensions(String communityId, String pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

pageParam

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. The default size is 15.

#### Return Value

Type: [`ConnectApi.ExtensionDefinitions`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_extension_definition_collection.htm#apex_connectapi_output_extension_definition_collection "A collection of extension definitions.")

### getFeed(communityId, feedType)

Get a feed.

#### API Version

28.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Feed getFeed(String communityId, ConnectApi.FeedType feedType)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

#### Return Value

Type: `ConnectApi.Feed`

### getFeed(communityId, feedType, sortParam)

Get a sorted feed.

#### API Version

28.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Feed getFeed(String communityId, ConnectApi.FeedType feedType, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

If feedType is `DirectMessages`, sortParam must be `LastModifiedDateDesc`.

#### Return Value

Type: `ConnectApi.Feed`

### getFeed(communityId, feedType, subjectId)

Get a feed for a record or user.

#### API Version

28.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Feed getFeed(String communityId, ConnectApi.FeedType feedType, String subjectId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`.

subjectId

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

#### Return Value

Type: `ConnectApi.Feed`

### getFeed(communityId, feedType, subjectId, sortParam)

Get a sorted feed for a record or user.

#### API Version

28.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Feed getFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`.

**subjectId**

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: `ConnectApi.Feed`

### getFeedDirectory(String)

Get a list of all feeds available to the context user.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedDirectory getFeedDirectory(String communityId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

#### Return Value

Type: `ConnectApi.FeedDirectory`

### getFeedElement(communityId, feedElementId)

Get a feed element.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElement getFeedElement(String communityId, String feedElementId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

#### Return Value

Type: [`ConnectApi.FeedElement`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

### getFeedElement(communityId, feedElementId, commentSort)

Get a feed element with sorted comments.

#### API Version

41.0

#### Available to Guest Users

41.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElement getFeedElement(String communityId, String feedElementId, ConnectApi.FeedCommentSortOrder commentSort)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedElementId**

Type: String

ID of the feed element.

**commentSort**

Type: [`ConnectApi.FeedCommentSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedCommentSortOrderEnum)

Order of comments.

-   `CreatedDateLatestAsc`—Sorts by most recently created comments in ascending order.
-   `CreatedDateOldestAsc`—Sorts by oldest comments in ascending order.
-   `Relevance`—Sorts by most relevant content.

The default value is `CreatedDateLatestAsc`.

Sorting in descending order isn’t supported.

#### Return Value

Type: [`ConnectApi.FeedElement`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

### getFeedElement(communityId, feedElementId, threadedCommentsCollapsed)

Get a feed element and its comments in a threaded style.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElement getFeedElement(String communityId, String feedElementId, Boolean threadedCommentsCollapsed)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

threadedCommentsCollapsed

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

#### Return Value

Type: [`ConnectApi.FeedElement`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

### getFeedElement(communityId, feedElementId, threadedCommentsCollapsed, commentSort)

Get a feed element and its sorted comments in a threaded style.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElement getFeedElement(String communityId, String feedElementId, Boolean threadedCommentsCollapsed, ConnectApi.FeedCommentSortOrder commentSort)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedElementId**

Type: String

ID of the feed element.

**threadedCommentsCollapsed**

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

**commentSort**

Type: [`ConnectApi.FeedCommentSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedCommentSortOrderEnum)

Order of comments.

-   `CreatedDateLatestAsc`—Sorts by most recently created comments in ascending order.
-   `CreatedDateOldestAsc`—Sorts by oldest comments in ascending order.
-   `Relevance`—Sorts by most relevant content.

Sorting in descending order isn’t supported.

#### Return Value

Type: [`ConnectApi.FeedElement`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

### getFeedElement(communityId, feedElementId, recentCommentCount, elementsPerBundle)

Get a feed element with the specified number of elements per bundle including no more than the specified number of comments per feed element.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElement getFeedElement(String communityId, String feedElementId, Integer recentCommentCount, Integer elementsPerBundle)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

recentCommentCount

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

elementsPerBundle

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

#### Return Value

Type: [`ConnectApi.FeedElement`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

### getFeedElement(communityId, feedElementId, recentCommentCount, elementsPerBundle, threadedCommentsCollapsed)

Get a feed element with its comments in a threaded style with the specified number of elements per bundle and comments per feed element.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElement getFeedElement(String communityId, String feedElementId, Integer recentCommentCount, Integer elementsPerBundle, Boolean threadedCommentsCollapsed)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

recentCommentCount

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

elementsPerBundle

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

threadedCommentsCollapsed

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

#### Return Value

Type: [`ConnectApi.FeedElement`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

### getFeedElement(communityId, feedElementId, recentCommentCount, elementsPerBundle, threadedCommentsCollapsed, commentSort)

Get a feed element with its sorted comments in a threaded style with the specified number of elements per bundle and comments per feed element.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElement getFeedElement(String communityId, String feedElementId, Integer recentCommentCount, Integer elementsPerBundle, Boolean threadedCommentsCollapsed, ConnectApi.FeedCommentSortOrder commentSort)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedElementId**

Type: String

ID of the feed element.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**threadedCommentsCollapsed**

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

**commentSort**

Type: [`ConnectApi.FeedCommentSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedCommentSortOrderEnum)

Order of comments.

-   `CreatedDateLatestAsc`—Sorts by most recently created comments in ascending order.
-   `CreatedDateOldestAsc`—Sorts by oldest comments in ascending order.
-   `Relevance`—Sorts by most relevant content.

Sorting in descending order isn’t supported.

#### Return Value

Type: [`ConnectApi.FeedElement`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

### getFeedElement(communityId, feedElementId, recentCommentCount, elementsPerBundle, commentSort)

Get a feed element with the specified number of elements per bundle including no more than the specified number of sorted comments per feed element.

#### API Version

41.0

#### Available to Guest Users

41.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElement getFeedElement(String communityId, String feedElementId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedCommentSortOrder commentSort)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedElementId**

Type: String

ID of the feed element.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**commentSort**

Type: [`ConnectApi.FeedCommentSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedCommentSortOrderEnum)

Order of comments.

-   `CreatedDateLatestAsc`—Sorts by most recently created comments in ascending order.
-   `CreatedDateOldestAsc`—Sorts by oldest comments in ascending order.
-   `Relevance`—Sorts by most relevant content.

The default value is `CreatedDateLatestAsc`.

Sorting in descending order isn’t supported.

#### Return Value

Type: [`ConnectApi.FeedElement`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

### getFeedElementBatch(communityId, feedElementIds)

Get a list of feed elements.

#### API Version

31.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.BatchResult[] getFeedElementBatch(String communityId, List<String> feedElementIds)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

A list of up to 500 feed element IDs.

#### Return Value

Type: `ConnectApi.BatchResult`\[\]

The `ConnectApi.BatchResult.getResult()` method returns a `ConnectApi.FeedElement` object and errors for feed elements that didn’t load.

### getFeedElementPoll(communityId, feedElementId)

Get the poll associated with a feed element.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.PollCapability getFeedElementPoll(String communityId, String feedElementId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

#### Return Value

Type: [`ConnectApi.PollCapability`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_poll_capability.htm#apex_connectapi_output_poll_capability "If a feed element has this capability, it includes a poll.")

If the feed element doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

:::tip Note
Triggers on FeedItem objects run before their attachment and capabilities information is saved, which means that `ConnectApi.FeedItem.attachment` information and `ConnectApi.FeedElement.capabilities` information may not be available in the trigger.
:::

### getFeedElementsFromBundle(communityId, feedElementId)

Get feed elements from a bundle.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromBundle(String communityId, String feedElementId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

### getFeedElementsFromBundle(communityId, feedElementId, pageParam, pageSize, elementsPerBundle, recentCommentCount)

Get a page of feed elements from a bundle. Specify the number of elements per bundle and include no more than the specified number of comments per feed element.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromBundle(String communityId, String feedElementId, String pageParam, Integer pageSize, Integer elementsPerBundle, Integer recentCommentCount)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

pageParam

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

elementsPerBundle

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

recentCommentCount

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

### getFeedElementsFromFeed(communityId, feedType)

Get feed elements from the `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview` feeds.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

#### Return Value

Type: `ConnectApi.FeedElementPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsFromFeed(communityId, feedType, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFeed(communityId, feedType, pageParam, pageSize, sortParam)

Get a page of sorted feed elements from the `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview` feeds.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

If feedType is `DirectMessages`, sortParam must be `LastModifiedDateDesc`.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsFromFeed(communityId, feedType, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam)

Get a page of sorted feed elements from the `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview` feeds. Each feed element contains no more than the specified number of comments.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

If feedType is `DirectMessages`, sortParam must be `LastModifiedDateDesc`.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, filter)

Get a page of sorted and filtered feed elements from the `Home` feed. Each feed element contains no more than the specified number of comments.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedFilter filter)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

The type of feed. The only valid value is `Home`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

When the sortParam is `MostViewed`, you must pass in `null` for the pageParam.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

When the sortParam is `MostViewed`, the pageSize must be a value from 1 to 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**filter**

Type: [`ConnectApi.​FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Specifies the feed filters.

-   `AllQuestions`—Feed elements that are questions.
-   `AuthoredBy`—Feed elements authored by the user profile owner. This value is valid only for the `UserProfile` feed.
-   `CommunityScoped`—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the `UserProfile` feed.
-   `QuestionsWithCandidateAnswers`—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `QuestionsWithCandidateAnswers​ReviewedPublished`—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Read`—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the `Record` feed of a group.
-   `SolvedQuestions`—Feed elements that are questions and that have a best answer.
-   `UnansweredQuestions`—Feed elements that are questions and that don’t have any answers.
-   `UnansweredQuestionsWithCandidate​Answers`—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Unread`—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the `Record` feed of a group.
-   `UnsolvedQuestions`—Feed elements that are questions and that don’t have a best answer.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_4a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, filter, threadedCommentsCollapsed)

Get a page of filtered and sorted feed elements with comments in a threaded style from the `Home` feed. Each feed element contains no more than the specified number of comments.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedFilter filter, Boolean threadedCommentsCollapsed)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

The type of feed. The only valid value is `Home`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

When the sortParam is `MostViewed`, you must pass in `null` for the pageParam.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

When the sortParam is `MostViewed`, the pageSize must be a value from 1 to 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**filter**

Type: [`ConnectApi.FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Specifies the feed filters.

-   `AllQuestions`—Feed elements that are questions.
-   `AuthoredBy`—Feed elements authored by the user profile owner. This value is valid only for the `UserProfile` feed.
-   `CommunityScoped`—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the `UserProfile` feed.
-   `QuestionsWithCandidateAnswers`—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `QuestionsWithCandidateAnswers​ReviewedPublished`—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Read`—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the `Record` feed of a group.
-   `SolvedQuestions`—Feed elements that are questions and that have a best answer.
-   `UnansweredQuestions`—Feed elements that are questions and that don’t have any answers.
-   `UnansweredQuestionsWithCandidate​Answers`—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Unread`—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the `Record` feed of a group.
-   `UnsolvedQuestions`—Feed elements that are questions and that don’t have a best answer.

**threadedCommentsCollapsed**

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, filter, threadedCommentsCollapsed, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_18)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFeed(communityId, feedType, subjectId)

Get feed elements from any feed other than `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview` for a user or record.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`.

subjectId

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

#### Return Value

Type: `ConnectApi.FeedElementPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

#### Example for Getting the Context User’s News Feed

```apex
ConnectApi.FeedElementPage fep = ConnectApi.ChatterFeeds.getFeedElementsFromFeed(Network.getNetworkId(), ConnectApi.FeedType.News, 'me');
```

#### Example for Getting Another User’s Profile Feed

```apex
ConnectApi.FeedElementPage fep = ConnectApi.ChatterFeeds.getFeedElementsFromFeed(Network.getNetworkId(), ConnectApi.FeedType.UserProfile, '005R0000000HwMA');
```

#### Example for Getting Another User’s Record Feed

```apex
ConnectApi.FeedElementPage fep = ConnectApi.ChatterFeeds.getFeedElementsFromFeed(Network.getNetworkId(), ConnectApi.FeedType.Record, '005R0000000HwMA');
```

## See Also

- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam)

Get a page of sorted feed elements from any feed other than `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`.

**subjectId**

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

The number of feed elements per page.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_5)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam)

Get a page of sorted feed elements from any feed other than `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`. Each feed element includes no more than the specified number of comments.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`.

**subjectId**

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_6)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, showInternalOnly)

Get a page of sorted feed elements from a record feed. Each feed element includes no more than the specified number of comments. Specify whether to return feed elements posted by internal (non-Experience Cloud site) users only.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, Boolean showInternalOnly)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed items from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, showInternalOnly, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_7)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, filter)

Get a page of sorted and filtered feed elements from the `UserProfile` feed.

#### API Version

35.0

#### Available to Guest Users

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedFilter filter)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.UserProfile`.

**subjectId**

Type: String

ID of any user. To specify the context user, use the user ID or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**filter**

Type: [`ConnectApi.FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Value must be `ConnectApi.FeedFilter.CommunityScoped` or `ConnectApi.FeedFilter.AuthoredBy`.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example gets only community-specific feed elements.

```apex
ConnectApi.FeedElementPage fep = ConnectApi.ChatterFeeds.getFeedElementsFromFeed(Network.getNetworkId(), ConnectApi.FeedType.UserProfile, 'me', 3, ConnectApi.FeedDensity.FewerUpdates, null, null, ConnectApi.FeedSortOrder.LastModifiedDateDesc, ConnectApi.FeedFilter.CommunityScoped);
```

## See Also

- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_7a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, filter, threadedCommentsCollapsed)

Get a page of feed elements with comments in a threaded style from the `UserProfile` feed.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedFilter filter, Boolean threadedCommentsCollapsed)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.UserProfile`.

**subjectId**

Type: String

ID of any user. To specify the context user, use the user ID or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**filter**

Type: [`ConnectApi.FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Value must be `ConnectApi.FeedFilter.CommunityScoped` or `ConnectApi.FeedFilter.AuthoredBy`.

**threadedCommentsCollapsed**

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, filter, threadedCommentsCollapsed, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_16)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, customFilter)

Get a page of sorted and filtered feed elements from the case feed.

#### API Version

40.0

#### Available to Guest Users

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String customFilter)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

The ID of a case.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**customFilter**

Type: String

Custom filter that applies only to the case feed. See [customFeedFilter](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_customfeedfilter.htm "HTML (New Window)") in the *Metadata API Developer Guide* for supported values.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, customFilter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_7b)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly)

Get a page of sorted feed elements from a record feed. Specify the number of elements per bundle and include no more than the specified number of comments per feed element. Specify whether to return feed elements posted by internal (non-Experience Cloud site) users only.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, Boolean showInternalOnly)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed items from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_8)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, filter)

Get a page of sorted and filtered feed elements from a record feed. Specify the number of elements per bundle and include no more than the specified number of comments per feed element. Specify whether to return feed elements posted by internal (non-Experience Cloud site) users only.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, Boolean showInternalOnly, ConnectApi.FeedFilter filter)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed items from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**filter**

Type: [`ConnectApi.​FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Specifies the feed filters.

-   `AllQuestions`—Feed elements that are questions.
-   `AuthoredBy`—Feed elements authored by the user profile owner. This value is valid only for the `UserProfile` feed.
-   `CommunityScoped`—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the `UserProfile` feed.
-   `QuestionsWithCandidateAnswers`—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `QuestionsWithCandidateAnswers​ReviewedPublished`—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Read`—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the `Record` feed of a group.
-   `SolvedQuestions`—Feed elements that are questions and that have a best answer.
-   `UnansweredQuestions`—Feed elements that are questions and that don’t have any answers.
-   `UnansweredQuestionsWithCandidate​Answers`—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Unread`—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the `Record` feed of a group.
-   `UnsolvedQuestions`—Feed elements that are questions and that don’t have a best answer.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_9)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, filter, threadedCommentsCollapsed)

Get a page of sorted and filtered feed elements with comments in a threaded style for a record feed. Specify the number of elements per bundle and include no more than the specified number of comments per feed element. Specify whether to return feed elements posted by internal (non-Experience Cloud site) users only.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, Boolean showInternalOnly, ConnectApi.FeedFilter filter, Boolean threadedCommentsCollapsed)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed items from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**filter**

Type: [`ConnectApi.​FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Specifies the feed filters.

-   `AllQuestions`—Feed elements that are questions.
-   `AuthoredBy`—Feed elements authored by the user profile owner. This value is valid only for the `UserProfile` feed.
-   `CommunityScoped`—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the `UserProfile` feed.
-   `QuestionsWithCandidateAnswers`—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `QuestionsWithCandidateAnswers​ReviewedPublished`—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Read`—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the `Record` feed of a group.
-   `SolvedQuestions`—Feed elements that are questions and that have a best answer.
-   `UnansweredQuestions`—Feed elements that are questions and that don’t have any answers.
-   `UnansweredQuestionsWithCandidate​Answers`—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Unread`—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the `Record` feed of a group.
-   `UnsolvedQuestions`—Feed elements that are questions and that don’t have a best answer.

**threadedCommentsCollapsed**

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

#### Return Value

Type: `ConnectApi.FeedElementPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, filter, threadedCommentsCollapsed, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_9aa)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, customFilter)

Get a page of sorted and filtered feed elements from a case feed.

#### API Version

40.0

#### Available to Guest Users

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, Boolean showInternalOnly, String customFilter)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

The ID of a case.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed items from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**customFilter**

Type: String

Custom filter that applies only to the case feed. See [customFeedFilter](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_customfeedfilter.htm "HTML (New Window)") in the *Metadata API Developer Guide* for supported values.

#### Return Value

Type: `ConnectApi.FeedElementPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, customFilter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_9a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, customFilter, threadedCommentsCollapsed)

Get a page of filtered and sorted feed elements with comments in a threaded style from a case feed.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, Boolean showInternalOnly, String customFilter, Boolean threadedCommentsCollapsed)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

The ID of a case.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed items from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**customFilter**

Type: String

Custom filter that applies only to the case feed. See [customFeedFilter](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_customfeedfilter.htm "HTML (New Window)") in the *Metadata API Developer Guide* for supported values.

**threadedCommentsCollapsed**

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

#### Return Value

Type: `ConnectApi.FeedElementPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, customFilter, threadedCommentsCollapsed, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_17)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix)

Get feed elements from a feed filtered by a key prefix for a user.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFilterFeed(String communityId, String subjectId, String keyPrefix)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

keyPrefix

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFilterFeed_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam)

Get a page of sorted feed elements from a feed filtered by a key prefix for a user.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFilterFeed(String communityId, String subjectId, String keyPrefix, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFilterFeed_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam)

Get a page of sorted feed elements from a feed filtered by a key prefix for a user. Each feed element contains no more than the specified number of comments.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFilterFeed(String communityId, String subjectId, String keyPrefix, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFilterFeed_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsFromFilterFeedUpdatedSince(communityId, subjectId, keyPrefix, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince)

Get a page of feed elements from a feed filtered by a key prefix for a user. Include only feed elements that have been updated since the time specified in the updatedSince parameter.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsFromFilterFeedUpdatedSince(String communityId, String subjectId, String keyPrefix, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

Opaque token defining the modification timestamp of the feed and the sort order.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsFromFilterFeedUpdatedSince(communityId, subjectId, keyPrefix, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFilterFeedUpdatedSince)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince)

Get a page of feed elements from the `Company`, `DirectMessageModeration`, `Home`, and `Moderation` feeds. Include only feed elements that have been updated since the time specified in the updatedSince parameter. Each feed element contains no more than the specified number of comments.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `Home`, and `Moderation`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedElementPage` response body.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

#### Return Value

Type: `ConnectApi.FeedElementPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsUpdatedSince_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince, filter)

Get a page of filtered feed elements from the `Home` feed. Include only feed elements that have been updated since the time specified in the updatedSince parameter. Each feed element contains no more than the specified number of comments.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, ConnectApi.FeedFilter filter)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

The type of feed. The only valid value is `Home`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedElementPage` response body.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

**filter**

Type: [`ConnectApi.​FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Specifies the feed filters.

-   `AllQuestions`—Feed elements that are questions.
-   `AuthoredBy`—Feed elements authored by the user profile owner. This value is valid only for the `UserProfile` feed.
-   `CommunityScoped`—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the `UserProfile` feed.
-   `QuestionsWithCandidateAnswers`—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `QuestionsWithCandidateAnswers​ReviewedPublished`—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Read`—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the `Record` feed of a group.
-   `SolvedQuestions`—Feed elements that are questions and that have a best answer.
-   `UnansweredQuestions`—Feed elements that are questions and that don’t have any answers.
-   `UnansweredQuestionsWithCandidate​Answers`—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Unread`—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the `Record` feed of a group.
-   `UnsolvedQuestions`—Feed elements that are questions and that don’t have a best answer.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsUpdatedSince_1a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince)

Get a page of feed elements from the `Files`, `Groups`, `News`, `People`, and `Record` feeds. Include only feed elements that have been updated since the time specified in the updatedSince parameter. Each feed element contains no more than the specified number of comments.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

One of these values:

-   `Files`
-   `Groups`
-   `News`
-   `People`
-   `Record`

**subjectId**

Type: String

If feedType is `ConnectApi.Record`, subjectId can be any record ID, including a group ID. Otherwise, it must be the context user or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedElementPage` response body.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsUpdatedSince_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, showInternalOnly)

Get a page of feed elements from a record feed. Include only feed elements that have been updated since the time specified in the updatedSince parameter. Specify whether to return feed elements posted by internal (non-Experience Cloud site) users only.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, Boolean showInternalOnly)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedElementPage` response body.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed elements from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, showInternalOnly, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsUpdatedSince_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, filter)

Get a page of filtered feed elements from a `UserProfile` feed. Include only feed elements that have been updated since the time specified in the updatedSince parameter.

#### API Version

35.0

#### Available to Guest Users

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, ConnectApi.FeedFilter filter)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.UserProfile`.

**subjectId**

Type: String

ID of any user. To specify the context user, use the user ID or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

Opaque token defining the modification timestamp of the feed and the sort order.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

**filter**

Type: [`ConnectApi.FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Value must be `ConnectApi.FeedFilter.CommunityScoped`. Filters the feed to include only feed elements that are scoped to Experience Cloud sites. Feed elements that are always visible in all sites are filtered out.

#### Return Value

Type: `ConnectApi.FeedElementPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsUpdatedSince_3a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, customFilter)

Get a page of filtered feed elements from a case feed. Include only feed elements that have been updated since the time specified in the updatedSince parameter.

#### API Version

40.0

#### Available to Guest Users

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, String customFilter)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

The ID of a case.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

Opaque token defining the modification timestamp of the feed and the sort order.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

**customFilter**

Type: String

Custom filter that applies only to the case feed. See [customFeedFilter](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_customfeedfilter.htm "HTML (New Window)") in the *Metadata API Developer Guide* for supported values.

#### Return Value

Type: `ConnectApi.FeedElementPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, customFilter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsUpdatedSince_3b)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly)

Get a page of feed elements from a record feed. Include only feed elements that have been updated since the time specified in the updatedSince parameter. Specify the maximum number of feed elements in a bundle and whether to return feed elements posted by internal (non-Experience Cloud site) users only.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, Boolean showInternalOnly)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedElementPage` response body.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed elements from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

#### Return Value

Type: `ConnectApi.FeedElementPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsUpdatedSince_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly, filter)

Get a page of filtered feed elements from a record feed. Include only feed elements that have been updated since the time specified in the updatedSince parameter. Specify the maximum number of feed elements in a bundle and whether to return feed elements posted by internal (non-Experience Cloud site) users only.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, Boolean showInternalOnly, ConnectApi.FeedFilter filter)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedElementPage` response body.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed elements from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**filter**

Type: [`ConnectApi.​FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Specifies the feed filters.

-   `AllQuestions`—Feed elements that are questions.
-   `AuthoredBy`—Feed elements authored by the user profile owner. This value is valid only for the `UserProfile` feed.
-   `CommunityScoped`—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the `UserProfile` feed.
-   `QuestionsWithCandidateAnswers`—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `QuestionsWithCandidateAnswers​ReviewedPublished`—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Read`—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the `Record` feed of a group.
-   `SolvedQuestions`—Feed elements that are questions and that have a best answer.
-   `UnansweredQuestions`—Feed elements that are questions and that don’t have any answers.
-   `UnansweredQuestionsWithCandidate​Answers`—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Unread`—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the `Record` feed of a group.
-   `UnsolvedQuestions`—Feed elements that are questions and that don’t have a best answer.

#### Return Value

Type: `ConnectApi.FeedElementPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsUpdatedSince_5)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly, customFilter)

Get a page of filtered feed elements from a case feed. Include only feed elements that have been updated since the time specified in the updatedSince parameter.

#### API Version

40.0

#### Available to Guest Users

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, Boolean showInternalOnly, String customFilter)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

The ID of a case.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedElementPage` response body.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed elements from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**customFilter**

Type: String

Custom filter that applies only to the case feed. See [customFeedFilter](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_customfeedfilter.htm "HTML (New Window)") in the *Metadata API Developer Guide* for supported values.

#### Return Value

Type: `ConnectApi.FeedElementPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly, customFilter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsUpdatedSince_5a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedWithFeedElements(communityId, feedType, pageSize)

Get information about a feed and a page of feed elements from the feed.

#### API Version

40.0

#### Available to Guest Users

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Feed getFeedWithFeedElements(String communityId, ConnectApi.FeedType feedType, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

The type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`. `Landing` is valid only when communityId is `internal`.

pageSize

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in 0, feed elements aren’t returned with the feed.

#### Return Value

Type: [`ConnectApi.Feed`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed.htm#apex_connectapi_output_Feed "Chatter feed.")

### getFeedWithFeedElements(communityId, feedType, pageSize, recentCommentCount)

Get a page of information about the feed and the feed elements with the specified number of comments per feed element from the feed.

#### API Version

40.0

#### Available to Guest Users

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Feed getFeedWithFeedElements(String communityId, ConnectApi.FeedType feedType, Integer pageSize, Integer recentCommentCount)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

The type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`. `Landing` is valid only when communityId is `internal`.

pageSize

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in 0, feed elements aren’t returned with the feed.

recentCommentCount

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

#### Return Value

Type: [`ConnectApi.Feed`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed.htm#apex_connectapi_output_Feed "Chatter feed.")

### getFilterFeed(communityId, subjectId, keyPrefix)

Get a feed filtered by a key prefix for a user.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Feed getFilterFeed(String communityId, String subjectId, String keyPrefix)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

keyPrefix

Type: String

A *key prefix* is the first three characters of a record ID, which specifies the object type.

#### Return Value

Type: `ConnectApi.Feed`

### getFilterFeed(communityId, subjectId, keyPrefix, sortParam)

Get a sorted feed filtered by a key prefix for a user.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Feed getFilterFeed(String communityId, String subjectId, String keyPrefix, ConnectApi.FeedType sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**sortParam**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: `ConnectApi.Feed`

### getFilterFeedDirectory(communityId, subjectId)

Get a feed directory of filter feeds available to the context user.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedDirectory getFilterFeedDirectory(String communityId, String subjectId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

#### Return Value

Type: `ConnectApi.FeedDirectory`

This feed directory contains a list of filter feeds, which are the news feed filtered to include feed items whose parent is a specific entity type.

#### Usage

Call this method to return a directory containing a list of `ConnectApi.FeedDirectoryItem` objects. Each object contains a key prefix associated with an entity type the context user is following. A *key prefix* is the first three characters of a record ID, which specifies the object type.

Use key prefixes to filter the news feed so that it contains only feed items whose parent is the entity type associated with the key prefix. For example, get all the feed items whose parent is an Account. To get the feed items, pass a key prefix to the `ConnectApi.getFeedItemsFromFilterFeed` method.

The information about filter feeds never contains the key prefixes for users (`005`) or groups (`0F9`), but all users can use those key prefixes as filters.

The `ConnectApi.FeedDirectory.favorites` property is always empty when returned by a call to `getFilterFeedDirectory` because you can’t filter a news feed by favorites.

#### Example

This example calls `getFilterFeedDirectory` and loops through the returned `FeedDirectoryItem` objects to find the key prefixes the context user can use to filter their news feed. It then copies each `keyPrefix` value to a list. Finally, it passes one of the key prefixes from the list to the `getFeedItemsFromFilterFeed` method. The returned feed items include every feed item from the news feed whose parent is the entity type specified by the passed key prefix.

```apex
String communityId = null;
String subjectId = 'me';

// Create a list to populate with key prefixes. 
ListString> keyPrefixList = new ListString>();

// Prepopulate with User and Group record types
// which are available to all users.
keyPrefixList.add('005');
keyPrefixList.add('0F9');

System.debug(keyPrefixList);

// Get the key prefixes available to the context user.
ConnectApi.FeedDirectory myFeedDirectory = 
   ConnectApi.ChatterFeeds.getFilterFeedDirectory(null, 'me');

// Loop through the returned feeds list.
for (ConnectApi.FeedDirectoryItem i : myFeedDirectory.feeds) {
 
   // Grab each key prefix and add it to the list.
   keyPrefixList.add(i.keyPrefix);
}
System.debug(keyPrefixList);

// Use a key prefix from the list to filter the feed items in the news feed.
ConnectApi.FeedItemPage myFeedItemPage = 
   ConnectApi.ChatterFeeds.getFeedItemsFromFilterFeed(communityId, subjectId, keyPrefixList[0]);
System.debug(myFeedItemPage);
```

### getLike(communityId, likeId)

Get a like on a post or comment.

#### API Version

28.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterLike getLike(String communityId, String likeId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

likeId

Type: String

ID for a like.

#### Return Value

Type: `ConnectApi.​Chatter​Like`

### getLikesForComment(communityId, commentId)

Get likes for a comment.

#### API Version

28.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterLikePage getLikesForComment(String communityId, String commentId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

commentId

Type: String

ID for a comment.

#### Return Value

Type: `ConnectApi.​Chatter​Like​Page`

### getLikesForComment(communityId, commentId, pageParam, pageSize)

Get a page of likes for a comment.

#### API Version

28.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterLikePage getLikesForComment(String communityId, String commentId, Integer pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

commentId

Type: String

ID for a comment.

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

#### Return Value

Type: `ConnectApi.​Chatter​Like​Page`

### getLikesForFeedElement(communityId, feedElementId)

Get likes for a feed element.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterLikePage getLikesForFeedElement(String communityId, String feedElementId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

#### Return Value

Type: `ConnectApi.ChatterLikePage`

If the feed element doesn’t support the `ChatterLikes` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### getLikesForFeedElement(communityId, feedElementId, pageParam, pageSize)

Get a page of likes for a feed element.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterLikePage getLikesForFeedElement(String communityId, String feedElementId, Integer pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

pageParam

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

#### Return Value

Type: `ConnectApi.ChatterLikePage`

If the feed element doesn’t support the `ChatterLikes` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### getLinkMetadata(communityId, urls)

Get link metadata for URLs.

#### API Version

42.0

#### Available to Guest Users

42.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.LinkMetadataCollection getLinkMetadata(String communityId, String urls)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

urls

Type: String

Comma-separated list of URL-encoded URLs.

#### Return Value

Type: [`ConnectApi.LinkMetadataCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_link_metadata_collection.htm#apex_connectapi_output_link_metadata_collection "Collection of link metadata.")

### getPinnedFeedElementsFromFeed(communityId, feedType, subjectId)

Get pinned feed elements from a group or topic feed.

#### API Version

41.0

#### Available to Guest Users

41.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.PinnedFeedElements getPinnedFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

The type of feed. Valid values are `Record` and `Topics`.

subjectId

Type: String

If feedType is `Record`, subjectId must be a group ID. If feedType is `Topics`, subjectId must be a topic ID.

#### Return Value

Type: [`ConnectApi.PinnedFeedElements`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_pinned_feed_element_collection.htm#apex_connectapi_output_pinned_feed_element_collection "List of pinned feed elements for a feed.")

If the feed doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Usage

In the UI, pinned feed elements don’t show all auxiliary information, such as comments, likes, interaction counts, or read by information. As a result, the `ConnectApi.PinnedFeedElements` output class doesn’t include all the information for these capabilities.

### getReadByForFeedElement(communityId, feedElementId)

Get information about who read a feed element and when.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ReadByPage getReadByForFeedElement(String communityId, String feedElementId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

#### Return Value

Type: [`ConnectApi.ReadByPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_read_by_collection.htm#apex_connectapi_output_read_by_collection "A collection of information about who read the feed element and when.")

If the feed element doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### getReadByForFeedElement(communityId, feedElementId, pageParam, pageSize)

Get a page of information about who read a feed element and when.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ReadByPage getReadByForFeedElement(String communityId, String feedElementId, Integer pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

pageParam

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

#### Return Value

Type: [`ConnectApi.ReadByPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_read_by_collection.htm#apex_connectapi_output_read_by_collection "A collection of information about who read the feed element and when.")

If the feed element doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### getRelatedPosts(communityId, feedElementId, filter, maxResults)

Get posts related to the context feed element.

#### API Version

37.0

#### Available to Guest Users

37.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RelatedFeedPosts getRelatedPosts(String communityId, String feedElementId, ConnectApi.RelatedFeedPostType filter, Integer maxResults)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedElementId**

Type: String

ID of the feed element. The feed element must be a question.

**filter**

Type: [`ConnectApi.RelatedFeedPostType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RelatedFeedPostTypeEnum)

Specifies the type of related post. Values are:

-   `Answered`—Related questions that have at least one answer.
-   `BestAnswer`—Related questions that have a best answer.
-   `Generic`—All types of related questions, including answered, with a best answer, and unanswered.
-   `Unanswered`—Related questions that don’t have answers.

`Generic` is the default value.

**maxResults**

Type: Integer

The maximum number of results to return. You can return up to 25 results; 5 is the default.

#### Return Value

Type: [`ConnectApi.RelatedFeedPosts`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_related_feed_post_collection.htm#apex_connectapi_output_abstract_related_feed_post_collection "A collection of related feed posts.")

In version 37.0 and later, related feed posts are questions.

Each related feed post has a score indicating how closely it’s related to the context feed post. We return related feed posts sorted by score, with the highest score first.

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

### getStream(communityId, streamId)

Get information about a Chatter feed stream.

#### API Version

39.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterStream getStream(String communityId, String streamId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

streamId

Type: String

ID of the Chatter feed stream.

#### Return Value

Type: [`ConnectApi.ChatterStream`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream.htm#apex_connectapi_output_feed_stream "A Chatter feed stream.")

### getStream(communityId, streamId, globalScope)

Get information about a Chatter feed stream, regardless of Experience Cloud site.

#### API Version

41.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterStream getStream(String communityId, String streamId, Boolean globalScope)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

streamId

Type: String

ID of the Chatter feed stream.

globalScope

Type: Boolean

Specifies whether to get streams from all the context user’s Experience Cloud sites, regardless of the communityId value.

:::tip Tip
If you know the
                communityId for the stream, we recommend setting
                globalScope to `false`.
:::

#### Return Value

Type: [`ConnectApi.ChatterStream`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream.htm#apex_connectapi_output_feed_stream "A Chatter feed stream.")

### getStreams(communityId)

Get the Chatter feed streams for the context user.

#### API Version

39.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterStreamPage getStreams(String communityId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

#### Return Value

Type: [`ConnectApi.ChatterStreamPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")

### getStreams(communityId, sortParam)

Get and sort the Chatter feed streams for the context user.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterStreamPage getStreams(String communityId, ConnectApi.SortOrder sortParam)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

sortParam

Type: [`ConnectApi.SortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#SortOrderEnum)

Specifies the sort order. Values are:

-   `Ascending`—Items are in ascending alphabetical order (A-Z).
-   `Descending`—Items are in descending alphabetical order (Z-A).
-   `MostRecentlyViewed`—Items are in descending chronological order by view. This sort order is valid only for Chatter feed streams.

If not specified, default value is `Ascending`.

#### Return Value

Type: [`ConnectApi.ChatterStreamPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")

### getStreams(communityId, pageParam, pageSize)

Get a page of Chatter feed streams for the context user.

#### API Version

39.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterStreamPage getStreams(String communityId, Integer pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 to 250. The default size is 25.

#### Return Value

Type: [`ConnectApi.ChatterStreamPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")

### getStreams(communityId, pageParam, pageSize, sortParam)

Get a sorted page of Chatter feed streams for the context user.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterStreamPage getStreams(String communityId, Integer pageParam, Integer pageSize, ConnectApi.SortOrder sortParam)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 to 250. The default size is 25.

sortParam

Type: [`ConnectApi.SortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#SortOrderEnum)

Specifies the sort order. Values are:

-   `Ascending`—Items are in ascending alphabetical order (A-Z).
-   `Descending`—Items are in descending alphabetical order (Z-A).
-   `MostRecentlyViewed`—Items are in descending chronological order by view. This sort order is valid only for Chatter feed streams.

If not specified, default value is `Ascending`.

#### Return Value

Type: [`ConnectApi.ChatterStreamPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")

### getStreams(communityId, pageParam, pageSize, sortParam, globalScope)

Get a sorted page of Chatter feed streams from all Enterprise Cloud sites for the context user.

#### API Version

41.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterStreamPage getStreams(String communityId, Integer pageParam, Integer pageSize, ConnectApi.SortOrder sortParam, Boolean globalScope)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 to 250. The default size is 25.

sortParam

Type: [`ConnectApi.SortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#SortOrderEnum)

Specifies the sort order. Values are:

-   `Ascending`—Items are in ascending alphabetical order (A-Z).
-   `Descending`—Items are in descending alphabetical order (Z-A).
-   `MostRecentlyViewed`—Items are in descending chronological order by view. This sort order is valid only for Chatter feed streams.

If not specified, default value is `Ascending`.

globalScope

Type: Boolean

Specifies whether to get streams from all the context user’s Experience Cloud sites, regardless of the communityId value.

:::tip Tip
If you know the
                communityId for the streams, we recommend setting
                globalScope to `false`.
:::

#### Return Value

Type: [`ConnectApi.ChatterStreamPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")

### getSupportedEmojis()

Get supported emojis for the org.

#### API Version

39.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.SupportedEmojis getSupportedEmojis()`

#### Return Value

Type: `ConnectApi.SupportedEmojis`

#### Usage

To get the list, emojis must be enabled in your org.

### getThreadsForFeedComment(communityId, commentId)

Get threaded comments for a comment.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.CommentPage getThreadsForFeedComment(String communityId, String commentId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

commentId

Type: String

ID of the comment.

#### Return Value

Type: [`ConnectApi.CommentPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_page.htm#apex_connectapi_output_comment_page "A page of comments.")

If the comment doesn’t support the `comments` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### getThreadsForFeedComment(communityId, commentId, pageParam, pageSize)

Get a page of threaded comments for a comment.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.CommentPage getThreadsForFeedComment(String communityId, String commentId, String pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

commentId

Type: String

ID of the comment.

pageParam

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

#### Return Value

Type: [`ConnectApi.CommentPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_page.htm#apex_connectapi_output_comment_page "A page of comments.")

If the comment doesn’t support the `comments` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### getThreadsForFeedComment(communityId, commentId, threadedCommentsCollapsed)

Access the comments capability for a comment.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.CommentsCapability getThreadsForFeedComment(String communityId, String commentId, Boolean threadedCommentsCollapsed)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

commentId

Type: String

ID of the comment.

threadedCommentsCollapsed

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

#### Return Value

Type: [`ConnectApi.CommentsCapability`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comments_capability.htm "If a feed element or comment has this capability, the context user can add a comment to it.")

If the comment doesn’t support the `comments` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### getTopUnansweredQuestions(communityId) (Pilot)

Get top unanswered questions for the context user in aExperience Cloud site.

:::tip Note
We provided top-five unanswered questions to
        selected customers through a pilot program that required agreement to specific terms and
        conditions. This pilot program is closed and not accepting new participants.
:::

#### API Version

42.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getTopUnansweredQuestions(String communityId)`

#### Parameters

communityId

Type: String

ID of the Experience Cloud site.

#### Return Value

Type: `ConnectApi.FeedElementPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetTopUnansweredQuestions(communityId, result) (Pilot)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetTopUnansweredQuestions_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getTopUnansweredQuestions(communityId, filter) (Pilot)

Get filtered top unanswered questions for the context user in an Experience Cloud site.

:::tip Note
We provided top-five unanswered questions to selected customers through a pilot program
        that required agreement to specific terms and conditions. This pilot program is closed and
        not accepting new participants.
:::

#### API Version

42.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getTopUnansweredQuestions(String communityId, ConnectApi.TopUnansweredQuestionsFilterType filter)`

#### Parameters

communityId

Type: String

ID of the Experience Cloud site.

filter

Type: [`ConnectApi.FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedFilterEnum)

Specifies the filter for the feed. `UnansweredQuestionsWithCandidate​Answers` is the only valid value.

#### Return Value

Type: `ConnectApi.FeedElementPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetTopUnansweredQuestions(communityId, filter, result) (Pilot)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetTopUnansweredQuestions_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getTopUnansweredQuestions(communityId, pageSize) (Pilot)

Get a page of top unanswered questions for the context user in an Experience Cloud site.

:::tip Note
We provided top-five unanswered questions to selected customers through a pilot program
        that required agreement to specific terms and conditions. This pilot program is closed and
        not accepting new participants.
:::

#### API Version

42.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getTopUnansweredQuestions(String communityId, Integer pageSize)`

#### Parameters

communityId

Type: String

ID of the Experience Cloud site.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 0 through 10. If you pass in `null`, the default size is 5.

#### Return Value

Type: `ConnectApi.FeedElementPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetTopUnansweredQuestions(communityId, pageSize, result) (Pilot)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetTopUnansweredQuestions_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getTopUnansweredQuestions(communityId, filter, pageSize) (Pilot)

Get a page of filtered top unanswered questions for the context user in an Experience Cloud site.

:::tip Note
We provided top-five unanswered questions to selected customers through a pilot program
        that required agreement to specific terms and conditions. This pilot program is closed and
        not accepting new participants.
:::

#### API Version

42.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getTopUnansweredQuestions(String communityId, ConnectApi.FeedFilter filter, Integer pageSize)`

#### Parameters

communityId

Type: String

ID of the Experience Cloud site.

filter

Type: [`ConnectApi.FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedFilterEnum)

Specifies the filter for the feed. `UnansweredQuestionsWithCandidate​Answers` is the only valid value.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 0 through 10. If you pass in `null`, the default size is 5.

#### Return Value

Type: `ConnectApi.FeedElementPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetTopUnansweredQuestions(communityId, filter, pageSize, result) (Pilot)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetTopUnansweredQuestions_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getVotesForComment(communityId, commentId, vote)

Get the first page of users who upvoted or downvoted a comment.

#### API Version

42.0

#### Available to Guest Users

42.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.VotePage getVotesForComment(String communityId, String commentId, ConnectApi.UpDownVoteValue vote)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

commentId

Type: String

ID of the comment.

vote

Type: [`ConnectApi.UpDownVoteValue`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#UpDownVoteEnum)

Specifies the value of the vote for the feed element. Values are:

-   `Down`
-   `Up`

You can’t specify `None`.

#### Return Value

Type: [`ConnectApi.VotePage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_vote_collection.htm#apex_connectapi_output_vote_collection "A page of upvotes or downvotes on a feed element or comment.")

If the comment doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### getVotesForComment(communityId, commentId, vote, pageParam, pageSize)

Get a page of users who upvoted or downvoted a comment.

#### API Version

42.0

#### Available to Guest Users

42.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.VotePage getVotesForComment(String communityId, String commentId, ConnectApi.UpDownVoteValue vote, Integer pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

commentId

Type: String

ID of the comment.

vote

Type: [`ConnectApi.UpDownVoteValue`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#UpDownVoteEnum)

Specifies the value of the vote for the feed element. Values are:

-   `Down`
-   `Up`

You can’t specify `None`.

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

#### Return Value

Type: [`ConnectApi.VotePage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_vote_collection.htm#apex_connectapi_output_vote_collection "A page of upvotes or downvotes on a feed element or comment.")

If the comment doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### getVotesForFeedElement(communityId, feedElementId, vote)

Get the first page of users who upvoted or downvoted a feed element.

#### API Version

42.0

#### Available to Guest Users

42.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.VotePage getVotesForFeedElement(String communityId, String feedElementId, ConnectApi.UpDownVoteValue vote)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

vote

Type: [`ConnectApi.UpDownVoteValue`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#UpDownVoteEnum)

Specifies the value of the vote for the feed element. Values are:

-   `Down`
-   `Up`

You can’t specify `None`.

#### Return Value

Type: [`ConnectApi.VotePage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_vote_collection.htm#apex_connectapi_output_vote_collection "A page of upvotes or downvotes on a feed element or comment.")

If the feed element doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### getVotesForFeedElement(communityId, feedElementId, vote, pageParam, pageSize)

Get a page of users who upvoted or downvoted a feed element.

#### API Version

42.0

#### Available to Guest Users

42.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.VotePage getVotesForFeedElement(String communityId, String feedElementId, ConnectApi.UpDownVoteValue vote, Integer pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

vote

Type: [`ConnectApi.UpDownVoteValue`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#UpDownVoteEnum)

Specifies the value of the vote for the feed element. Values are:

-   `Down`
-   `Up`

You can’t specify `None`.

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

#### Return Value

Type: [`ConnectApi.VotePage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_vote_collection.htm#apex_connectapi_output_vote_collection "A page of upvotes or downvotes on a feed element or comment.")

If the feed element doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### isCommentEditableByMe(communityId, commentId)

Discover whether the context user can edit a comment.

#### API Version

34.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedEntityIsEditable isCommentEditableByMe(String communityId, String commentId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

commentId

Type: String

ID of the comment.

#### Return Value

Type: [`ConnectApi.FeedEntityIsEditable`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_entity_is_editable.htm#apex_connectapi_output_feed_entity_is_editable "Indicates if the context user can edit a feed element or comment.")

If the comment doesn’t support the `edit` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

## See Also

- [Edit a Comment](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectapi_examples_edit_comment.htm)

### isFeedElementEditableByMe(communityId, feedElementId)

Discover whether the context user can edit a feed element.

#### API Version

34.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedEntityIsEditable isFeedElementEditableByMe(String communityId, String feedElementId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element. Feed items are the only type of feed element that can be edited.

#### Return Value

Type: [`ConnectApi.FeedEntityIsEditable`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_entity_is_editable.htm#apex_connectapi_output_feed_entity_is_editable "Indicates if the context user can edit a feed element or comment.")

If the feed element doesn’t support the `edit` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

## See Also

- [Edit a Feed Element](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectapi_examples_edit_feed_element.htm)

-   [Edit a Question Title and Post](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectapi_examples_edit_question_title_post.htm "Edit a Question Title and Post - HTML (New Window)")
    

### isModified(communityId, feedType, subjectId, since)

Discover whether a news feed has been updated or changed. Use this method to poll a news feed for updates.

:::tip Important
This feature is available through a Feed Polling pilot program. This pilot program is closed and not accepting new participants.
:::

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedModifiedInfo isModified(String communityId, ConnectApi.FeedType feedType, String subjectId, String since)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Specifies the type of feed. The only supported type is `News`

subjectId

Type: String

ID of the context user or the alias `me`.

since

Type: String

An opaque token containing information about the last modified date of the feed. Retrieve this token from the [`FeedElementPage.isModifiedToken`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.") property.

#### Return Value

Type: `ConnectApi.Feed​ModifiedInfo`

### likeComment(communityId, commentId)

Like a comment for the context user.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterLike likeComment(String communityId, String commentId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

commentId

Type: String

ID for a comment.

#### Return Value

Type: `ConnectApi.​Chatter​Like`

If the context user has already liked the comment, this method is a non-operation and returns the existing like.

### likeFeedElement(communityId, feedElementId)

Like a feed element.

#### API Version

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterLike likeFeedElement(String communityId, String feedElementId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

#### Return Value

Type: [`ConnectApi.ChatterLike`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chatter_like.htm#apex_connectapi_output_chatter_like "Chatter like information.")

If the feed element doesn’t support the `ChatterLikes` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Example

```apex
ConnectApi.ChatterLike chatterLike = ConnectApi.ChatterFeeds.likeFeedElement(null, '0D5D0000000KuGh');
```

### postCommentToFeedElement(communityId, feedElementId, text)

Post a plain-text comment to a feed element.

#### API Version

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Comment postCommentToFeedElement(String communityId, String feedElementId, String text)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

text

Type: String

Text of the comment. A comment can contain up to 10,000 characters.

#### Return Value

Type: [`ConnectApi.Comment`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment.htm#apex_connectapi_output_comment "A comment.")

If the feed element doesn’t support the `Comments` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Example

```apex
ConnectApi.Comment comment = ConnectApi.ChatterFeeds.postCommentToFeedElement(null, '0D5D0000000KuGh', 'I agree with the proposal.' );
```

### postCommentToFeedElement(communityId, feedElementId, comment, feedElementFileUpload)

Post a rich-text comment to a feed element. Use this method to include mentions and to attach a file.

#### API Version

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Comment postCommentToFeedElement(String communityId, String feedElementId, ConnectApi.CommentInput comment, ConnectApi.BinaryInput feedElementFileUpload)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

comment

Type: [`ConnectApi.CommentInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_comment.htm#apex_connectapi_input_comment "Comment input used to add rich comments, for example, comments that include mentions or file attachments.")

The comment body, including text and mentions, and capabilities, such as information about an attached file. A comment can contain up to 10,000 characters.

feedElementFileUpload

Type: `ConnectApi.BinaryInput`

A new binary file to attach to the comment, or `null`. If you specify a binary file, specify the title and description of the file in the comment parameter.

#### Return Value

Type: `ConnectApi.Comment`

If the feed element doesn’t support the `Comments` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Example for Posting a Comment with Mentions

You can post comments with mentions two ways. Use the [ConnectApiHelper repository on GitHub](https://github.com/forcedotcom/ConnectApiHelper "HTML (New Window)") to write a single line of code, or use this method example.

```apex
String communityId = null;
String feedElementId = '0D5D0000000KtW3';

ConnectApi.CommentInput commentInput = new ConnectApi.CommentInput();
ConnectApi.MentionSegmentInput mentionSegmentInput = new ConnectApi.MentionSegmentInput();
ConnectApi.MessageBodyInput messageBodyInput = new ConnectApi.MessageBodyInput();
ConnectApi.TextSegmentInput textSegmentInput = new ConnectApi.TextSegmentInput();

messageBodyInput.messageSegments = new List();

textSegmentInput.text = 'Does anyone in this group have an idea? ';
messageBodyInput.messageSegments.add(textSegmentInput);

mentionSegmentInput.id = '005D00000000oOT';
messageBodyInput.messageSegments.add(mentionSegmentInput);

commentInput.body = messageBodyInput;

ConnectApi.Comment commentRep = ConnectApi.ChatterFeeds.postCommentToFeedElement(communityId, feedElementId, commentInput, null);
```

#### Example for Posting a Comment with an Existing File

```apex
String feedElementId = '0D5D0000000KtW3';

ConnectApi.CommentInput commentInput = new ConnectApi.CommentInput();

ConnectApi.MessageBodyInput messageBodyInput = new ConnectApi.MessageBodyInput();
ConnectApi.TextSegmentInput textSegmentInput = new ConnectApi.TextSegmentInput();

textSegmentInput.text = 'I attached this file from Salesforce Files.';

messageBodyInput.messageSegments = new List();
messageBodyInput.messageSegments.add(textSegmentInput);
commentInput.body = messageBodyInput;

ConnectApi.CommentCapabilitiesInput commentCapabilitiesInput = new ConnectApi.CommentCapabilitiesInput();
ConnectApi.ContentCapabilityInput contentCapabilityInput = new ConnectApi.ContentCapabilityInput();

commentCapabilitiesInput.content = contentCapabilityInput;
contentCapabilityInput.contentDocumentId = '069D00000001rNJ';

commentInput.capabilities = commentCapabilitiesInput;

ConnectApi.Comment commentRep = ConnectApi.ChatterFeeds.postCommentToFeedElement(Network.getNetworkId(), feedElementId, commentInput, null);
```

#### Example for Posting a Comment with a New File

```apex
String feedElementId = '0D5D0000000KtW3';

ConnectApi.CommentInput commentInput = new ConnectApi.CommentInput();

ConnectApi.MessageBodyInput messageBodyInput = new ConnectApi.MessageBodyInput();
ConnectApi.TextSegmentInput textSegmentInput = new ConnectApi.TextSegmentInput();

textSegmentInput.text = 'Enjoy this new file.';

messageBodyInput.messageSegments = new List();
messageBodyInput.messageSegments.add(textSegmentInput);
commentInput.body = messageBodyInput;

ConnectApi.CommentCapabilitiesInput commentCapabilitiesInput = new ConnectApi.CommentCapabilitiesInput();
ConnectApi.ContentCapabilityInput contentCapabilityInput = new ConnectApi.ContentCapabilityInput();

commentCapabilitiesInput.content = contentCapabilityInput;
contentCapabilityInput.title = 'Title';

commentInput.capabilities = commentCapabilitiesInput;

String text = 'These are the contents of the new file.';
Blob myBlob = Blob.valueOf(text);
ConnectApi.BinaryInput binInput = new ConnectApi.BinaryInput(myBlob, 'text/plain', 'fileName');

ConnectApi.Comment commentRep = ConnectApi.ChatterFeeds.postCommentToFeedElement(Network.getNetworkId(), feedElementId, commentInput, binInput);
```

#### Example for Posting a Rich-Text Comment with an Inline Image

You can post rich-text comments with inline images and mentions two ways. Use the [ConnectApiHelper repository on GitHub](https://github.com/forcedotcom/ConnectApiHelper "HTML (New Window)") to write a single line of code, or use this method example. In this example, the image file is existing content that has already been uploaded to Salesforce.

```apex
String communityId = null;
String feedElementId = '0D5R0000000SBEr';
String imageId = '069R00000000IgQ';
String mentionedUserId = '005R0000000DiMz'; 

ConnectApi.CommentInput input = new ConnectApi.CommentInput();
ConnectApi.MessageBodyInput messageInput = new ConnectApi.MessageBodyInput();
ConnectApi.TextSegmentInput textSegment;
ConnectApi.MentionSegmentInput mentionSegment;
ConnectApi.MarkupBeginSegmentInput markupBeginSegment;
ConnectApi.MarkupEndSegmentInput markupEndSegment;
ConnectApi.InlineImageSegmentInput inlineImageSegment;

messageInput.messageSegments = new List();

markupBeginSegment = new ConnectApi.MarkupBeginSegmentInput();
markupBeginSegment.markupType = ConnectApi.MarkupType.Bold;
messageInput.messageSegments.add(markupBeginSegment);

textSegment = new ConnectApi.TextSegmentInput();
textSegment.text = 'Hello ';
messageInput.messageSegments.add(textSegment);

mentionSegment = new ConnectApi.MentionSegmentInput();
mentionSegment.id = mentionedUserId;
messageInput.messageSegments.add(mentionSegment);

textSegment = new ConnectApi.TextSegmentInput();
textSegment.text = '!';
messageInput.messageSegments.add(textSegment);

markupEndSegment = new ConnectApi.MarkupEndSegmentInput();
markupEndSegment.markupType = ConnectApi.MarkupType.Bold;
messageInput.messageSegments.add(markupEndSegment);

inlineImageSegment = new ConnectApi.InlineImageSegmentInput();
inlineImageSegment.altText = 'image one';
inlineImageSegment.fileId = imageId;
messageInput.messageSegments.add(inlineImageSegment);

input.body = messageInput;

ConnectApi.ChatterFeeds.postCommentToFeedElement(communityId, feedElementId, input, null);
```

#### Example for Posting a Rich-Text Comment with a Code Block

```apex
String communityId = null;
String feedElementId = '0D5R0000000SBEr';
String codeSnippet = '\n\t\n\t\tHello, world!\n\t\n';

ConnectApi.CommentInput input = new ConnectApi.CommentInput();
ConnectApi.MessageBodyInput messageInput = new ConnectApi.MessageBodyInput();
ConnectApi.TextSegmentInput textSegment;
ConnectApi.MarkupBeginSegmentInput markupBeginSegment;
ConnectApi.MarkupEndSegmentInput markupEndSegment;

messageInput.messageSegments = new List();

markupBeginSegment = new ConnectApi.MarkupBeginSegmentInput();
markupBeginSegment.markupType = ConnectApi.MarkupType.Code;
messageInput.messageSegments.add(markupBeginSegment);

textSegment = new ConnectApi.TextSegmentInput();
textSegment.text = codeSnippet;
messageInput.messageSegments.add(textSegment);

markupEndSegment = new ConnectApi.MarkupEndSegmentInput();
markupEndSegment.markupType = ConnectApi.MarkupType.Code;
messageInput.messageSegments.add(markupEndSegment);

input.body = messageInput;

ConnectApi.ChatterFeeds.postCommentToFeedElement(communityId, feedElementId, input, null);
```

### postFeedElement(communityId, subjectId, feedElementType, text)

Post a plain-text feed element.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElement postFeedElement(String communityId, String subjectId, ConnectApi.FeedElementType feedElementType, String text)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

The ID of the parent this feed element is being posted to. This value can be the ID of a user, group, or record, or the string `me` to indicate the context user.

feedElementType

Type: [`ConnectApi.​FeedElement​Type`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedElementTypeEnum)

The only possible value is `FeedItem`.

text

Type: String

The text of the feed element. A feed element can contain up to 10,000 characters.

#### Return Value

Type: [`ConnectApi.FeedElement`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

#### Example

```apex
ConnectApi.FeedElement feedElement = ConnectApi.ChatterFeeds.postFeedElement(Network.getNetworkId(), '0F9d0000000TreH', ConnectApi.FeedElementType.FeedItem, 'On vacation this week.');
```

### postFeedElement(communityId, feedElement)

Post a rich-text feed element. Include mentions and hashtag topics, attach already uploaded files to a feed element, and associate action link groups with a feed element. You can also use this method to share a feed element and add a comment.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElement postFeedElement(String communityId, ConnectApi.FeedElementInput feedElement)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElement

Type: `ConnectApi.FeedElementInput`

Specify rich text, including mentions. Optionally, specify a link, a poll, or up to 10 existing files.

#### Return Value

Type: [`ConnectApi.FeedElement`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

#### Example for Posting a Feed Element with a Mention

You can post feed elements with mentions two ways. Use the [ConnectApiHelper repository on GitHub](https://github.com/forcedotcom/ConnectApiHelper "HTML (New Window)") to write a single line of code, or use this method example.

```apex
ConnectApi.FeedItemInput feedItemInput = new ConnectApi.FeedItemInput();
ConnectApi.MentionSegmentInput mentionSegmentInput = new ConnectApi.MentionSegmentInput();
ConnectApi.MessageBodyInput messageBodyInput = new ConnectApi.MessageBodyInput();
ConnectApi.TextSegmentInput textSegmentInput = new ConnectApi.TextSegmentInput();

messageBodyInput.messageSegments = new List();

mentionSegmentInput.id = '005RR000000Dme9';
messageBodyInput.messageSegments.add(mentionSegmentInput);

textSegmentInput.text = 'Could you take a look?';
messageBodyInput.messageSegments.add(textSegmentInput);

feedItemInput.body = messageBodyInput;
feedItemInput.feedElementType = ConnectApi.FeedElementType.FeedItem;
feedItemInput.subjectId = '0F9RR0000004CPw';

ConnectApi.FeedElement feedElement = ConnectApi.ChatterFeeds.postFeedElement(Network.getNetworkId(), feedItemInput);
```

#### Example for Posting a Feed Element with Existing Content

```apex
// Define the FeedItemInput object to pass to postFeedElement
ConnectApi.FeedItemInput feedItemInput = new ConnectApi.FeedItemInput();
feedItemInput.subjectId = 'me';

ConnectApi.TextSegmentInput textSegmentInput = new ConnectApi.TextSegmentInput();
textSegmentInput.text = 'Would you please review these docs?';

// The MessageBodyInput object holds the text in the post
ConnectApi.MessageBodyInput messageBodyInput = new ConnectApi.MessageBodyInput();
messageBodyInput.messageSegments = new List();
messageBodyInput.messageSegments.add(textSegmentInput);
feedItemInput.body = messageBodyInput;

// The FeedElementCapabilitiesInput object holds the capabilities of the feed item.
// For this feed item, we define a files capability to hold the file(s).

ListString> fileIds = new ListString>();
fileIds.add('069xx00000000QO');
fileIds.add('069xx00000000QT');
fileIds.add('069xx00000000Qn');
fileIds.add('069xx00000000Qi');
fileIds.add('069xx00000000Qd');

ConnectApi.FilesCapabilityInput filesInput = new ConnectApi.FilesCapabilityInput();
filesInput.items = new List();

for (String fileId : fileIds) {
    ConnectApi.FileIdInput idInput = new ConnectApi.FileIdInput();
    idInput.id = fileId;
    filesInput.items.add(idInput);
}

ConnectApi.FeedElementCapabilitiesInput feedElementCapabilitiesInput = new ConnectApi.FeedElementCapabilitiesInput();
feedElementCapabilitiesInput.files = filesInput;

feedItemInput.capabilities = feedElementCapabilitiesInput;

// Post the feed item. 
ConnectApi.FeedElement feedElement = ConnectApi.ChatterFeeds.postFeedElement(Network.getNetworkId(), feedItemInput);
```

#### Example for Posting a Rich-Text Feed Element with an Inline Image

You can post rich-text feed elements with inline images and mentions two ways. Use the [ConnectApiHelper repository on GitHub](https://github.com/forcedotcom/ConnectApiHelper "HTML (New Window)") to write a single line of code, or use this method example. In this example, the image file is existing content that has already been uploaded to Salesforce. The post also includes text and a mention.

```apex
String communityId = null;
String imageId = '069D00000001INA'; 
String mentionedUserId = '005D0000001QNpr'; 
String targetUserOrGroupOrRecordId  = '005D0000001Gif0';
ConnectApi.FeedItemInput input = new ConnectApi.FeedItemInput();
input.subjectId = targetUserOrGroupOrRecordId;
input.feedElementType = ConnectApi.FeedElementType.FeedItem;

ConnectApi.MessageBodyInput messageInput = new ConnectApi.MessageBodyInput();
ConnectApi.TextSegmentInput textSegment;
ConnectApi.MentionSegmentInput mentionSegment;
ConnectApi.MarkupBeginSegmentInput markupBeginSegment;
ConnectApi.MarkupEndSegmentInput markupEndSegment;
ConnectApi.InlineImageSegmentInput inlineImageSegment;

messageInput.messageSegments = new List();

markupBeginSegment = new ConnectApi.MarkupBeginSegmentInput();
markupBeginSegment.markupType = ConnectApi.MarkupType.Bold;
messageInput.messageSegments.add(markupBeginSegment);

textSegment = new ConnectApi.TextSegmentInput();
textSegment.text = 'Hello ';
messageInput.messageSegments.add(textSegment);

mentionSegment = new ConnectApi.MentionSegmentInput();
mentionSegment.id = mentionedUserId;
messageInput.messageSegments.add(mentionSegment);

textSegment = new ConnectApi.TextSegmentInput();
textSegment.text = '!';
messageInput.messageSegments.add(textSegment);

markupEndSegment = new ConnectApi.MarkupEndSegmentInput();
markupEndSegment.markupType = ConnectApi.MarkupType.Bold;
messageInput.messageSegments.add(markupEndSegment);

inlineImageSegment = new ConnectApi.InlineImageSegmentInput();
inlineImageSegment.altText = 'image one';
inlineImageSegment.fileId = imageId;
messageInput.messageSegments.add(inlineImageSegment);

input.body = messageInput;

ConnectApi.ChatterFeeds.postFeedElement(communityId, input);
```

#### Example for Posting a Rich-Text Feed Element with a Code Block

```apex
String communityId = null;
String targetUserOrGroupOrRecordId  = 'me';
String codeSnippet = '\n\t\n\t\tHello, world!\n\t\n';
ConnectApi.FeedItemInput input = new ConnectApi.FeedItemInput();
input.subjectId = targetUserOrGroupOrRecordId;
input.feedElementType = ConnectApi.FeedElementType.FeedItem;

ConnectApi.MessageBodyInput messageInput = new ConnectApi.MessageBodyInput();
ConnectApi.TextSegmentInput textSegment;
ConnectApi.MarkupBeginSegmentInput markupBeginSegment;
ConnectApi.MarkupEndSegmentInput markupEndSegment;

messageInput.messageSegments = new List();

markupBeginSegment = new ConnectApi.MarkupBeginSegmentInput();
markupBeginSegment.markupType = ConnectApi.MarkupType.Code;
messageInput.messageSegments.add(markupBeginSegment);

textSegment = new ConnectApi.TextSegmentInput();
textSegment.text = codeSnippet;
messageInput.messageSegments.add(textSegment);

markupEndSegment = new ConnectApi.MarkupEndSegmentInput();
markupEndSegment.markupType = ConnectApi.MarkupType.Code;
messageInput.messageSegments.add(markupEndSegment);

input.body = messageInput;

ConnectApi.ChatterFeeds.postFeedElement(communityId, input);
```

#### Example for Sharing a Feed Element (in Version 39.0 and Later)

```apex
// Define the FeedItemInput object to pass to postFeedElement
ConnectApi.FeedItemInput feedItemInput = new ConnectApi.FeedItemInput();
feedItemInput.subjectId = 'me';
ConnectApi.TextSegmentInput textSegmentInput = new ConnectApi.TextSegmentInput();
textSegmentInput.text = 'Look at this post I'm sharing.';
// The MessageBodyInput object holds the text in the post
ConnectApi.MessageBodyInput messageBodyInput = new ConnectApi.MessageBodyInput();
messageBodyInput.messageSegments = new List();
messageBodyInput.messageSegments.add(textSegmentInput);
feedItemInput.body = messageBodyInput;

ConnectApi.FeedEntityShareCapabilityInput shareInput = new ConnectApi.FeedEntityShareCapabilityInput();
shareInput.feedEntityId = '0D5R0000000SEbc';
ConnectApi.FeedElementCapabilitiesInput feedElementCapabilitiesInput = new
ConnectApi.FeedElementCapabilitiesInput();
feedElementCapabilitiesInput.feedEntityShare = shareInput;
feedItemInput.capabilities = feedElementCapabilitiesInput;
// Post the feed item.
ConnectApi.FeedElement feedElement =
ConnectApi.ChatterFeeds.postFeedElement(Network.getNetworkId(), feedItemInput);
```

#### Example for Sending a Direct Message

```apex
// Define the FeedItemInput object to pass to postFeedElement
ConnectApi.FeedItemInput feedItemInput = new ConnectApi.FeedItemInput();
 
ConnectApi.TextSegmentInput textSegmentInput = new ConnectApi.TextSegmentInput();
textSegmentInput.text = 'Thanks for attending my presentation test run this morning. Send me any feedback.';
 
// The MessageBodyInput object holds the text in the post
ConnectApi.MessageBodyInput messageBodyInput = new ConnectApi.MessageBodyInput();
messageBodyInput.messageSegments = new List();
messageBodyInput.messageSegments.add(textSegmentInput);
feedItemInput.body = messageBodyInput;
 
// The FeedElementCapabilitiesInput object holds the capabilities of the feed item.
// For this feed item, we define a direct message capability to hold the member(s) and the subject.
 
ListString> memberIds = new ListString>();
memberIds.add('005B00000016OUQ');
memberIds.add('005B0000001rIN6');
 
ConnectApi.DirectMessageCapabilityInput dmInput = new ConnectApi.DirectMessageCapabilityInput();
dmInput.subject = 'Thank you!';
dmInput.membersToAdd = memberIds;
 
ConnectApi.FeedElementCapabilitiesInput feedElementCapabilitiesInput = new ConnectApi.FeedElementCapabilitiesInput();
feedElementCapabilitiesInput.directMessage = dmInput;
 
feedItemInput.capabilities = feedElementCapabilitiesInput;
 
// Post the feed item. 
ConnectApi.FeedElement feedElement = ConnectApi.ChatterFeeds.postFeedElement(Network.getNetworkId(), feedItemInput);
```

### postFeedElementBatch(communityId, feedElements)

Post a list of feed elements.

#### API Version

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.BatchResult[] postFeedElementBatch(String communityId, List<ConnectApi.BatchInput> feedElements)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElements

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.BatchInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_batch.htm "Construct a set of inputs to be passed into a method at the same time.")\>

The list can contain up to 500 `ConnectApi.BatchInput` objects. In the `ConnectApi.BatchInput` constructor, the input object must be a concrete instance of the abstract `ConnectApi.FeedElementInput` class.

#### Return Value

Type: `ConnectApi.BatchResult`\[\]

The `ConnectApi.BatchResult.getResult()` method returns a [`ConnectApi.FeedElement`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.") object.

The returned objects correspond to each of the input objects and are returned in the same order as the input objects.

The method call fails only if an error occurs that affects the entire operation (such as a parsing failure). If an individual object causes an error, the error is embedded within the `ConnectApi.BatchResult` list.

#### Usage

Use this method to post a list of feed elements efficiently. Create a list containing up to 500 objects and insert them all for the cost of one DML statement.

In version 36.0 and later, you can attach only one already uploaded file to each post. The `ConnectApi.BatchInput` has three constructors, but the `postFeedElementBatch` method supports only `ConnectApi.BatchInput(Object input)` in version 35.0 and later. This constructor doesn’t support a binary input.

In version 32.0–35.0, this method supports both `ConnectApi.BatchInput(Object input)` and `ConnectApi.BatchInput(Object input, ConnectApi.BinaryInput binary)` constructors. The `ConnectApi.BatchInput(Object input, ConnectApi.BinaryInput binary)` constructor allows for a single binary input.

In each constructor, the input object must be an instance of `ConnectApi.FeedElementInput`.

#### Example

This trigger bulk posts to the feeds of newly inserted accounts.

```apex
trigger postFeedItemToAccount on Account (after insert) {
    Account[] accounts = Trigger.new;
    
    // Bulk post to the account feeds.

    List batchInputs = new List();

    for (Account a : accounts) {
        ConnectApi.FeedItemInput input = new ConnectApi.FeedItemInput();

        input.subjectId = a.id;
        
        ConnectApi.MessageBodyInput body = new ConnectApi.MessageBodyInput();
        body.messageSegments = new List();

        ConnectApi.TextSegmentInput textSegment = new ConnectApi.TextSegmentInput();
        textSegment.text = 'Let\'s win the ' + a.name + ' account.';

        body.messageSegments.add(textSegment);
        input.body = body;

        ConnectApi.BatchInput batchInput = new ConnectApi.BatchInput(input);
        batchInputs.add(batchInput);
    }

    ConnectApi.ChatterFeeds.postFeedElementBatch(Network.getNetworkId(), batchInputs);
}
```

### publishDraftFeedElement(communityId, feedElementId, feedElement)

Publish a draft feed element.

#### API Version

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElement publishDraftFeedElement(String communityId, String feedElementId, ConnectApi.FeedElementInput feedElement)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element to publish.

feedElement

Type: [`ConnectApi.FeedElementInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element.htm#apex_connectapi_input_feed_element "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

Use this optional parameter to edit your draft before publishing.

#### Return Value

Type: [`ConnectApi.FeedElement`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm#apex_connectapi_output_feed_element "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

The published feed element has a new ID.

### searchFeedElements(communityId, q)

Get the first page of feed elements that match the search criteria.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElements(String communityId, String q)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElements(communityId, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElements_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElements(communityId, q, sortParam)

Get the first page of sorted feed elements that match the search criteria.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElements(String communityId, String q, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElements(communityId, q, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElements_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElements(communityId, q, threadedCommentsCollapsed)

Get the feed elements and comments that match the search criteria.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElements(String communityId, String q, Boolean threadedCommentsCollapsed)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

threadedCommentsCollapsed

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElements(communityId, q, threadedCommentsCollapsed, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElements_2a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElements(communityId, q, pageParam, pageSize)

Get a page of feed elements that match the search criteria.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElements(String communityId, String q, String pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

pageParam

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElements(communityId, q, pageParam, pageSize, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElements_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElements(communityId, q, pageParam, pageSize, sortParam)

Get a page of sorted feed elements that match the search criteria.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElements(String communityId, String q, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElements(communityId, q, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElements_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElements(communityId, q, pageParam, pageSize, threadedCommentsCollapsed)

Get a page of feed elements with comments in a threaded style that match the search criteria.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElements(String communityId, String q, String pageParam, Integer pageSize, Boolean threadedCommentsCollapsed)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

pageParam

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

threadedCommentsCollapsed

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElements(communityId, q, pageParam, pageSize, threadedCommentsCollapsed, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElements_4a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElements(communityId, q, recentCommentCount, pageParam, pageSize, sortParam)

Get a page of sorted feed elements that match the search criteria. Each feed element includes no more than the specified number of comments.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElements(String communityId, String q, Integer recentCommentCount, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElements(communityId, q, recentCommentCount, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElements_5)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElementsInFeed(communityId, feedType, q)

Get the feed elements from the `Company`, `DirectMessageModeration`, `Home`, `Isolated`, `Moderation`, and `PendingReview` feeds that match the search criteria.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String q)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: `ConnectApi.FeedElementPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElementsInFeed(communityId, feedType, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElementsInFeed(communityId, feedType, pageParam, pageSize, sortParam, q)

Get a page of sorted feed elements from the `Company`, `DirectMessageModeration`, `Home`, `Isolated`, `Moderation`, and `PendingReview` feeds that match the search criteria.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: `ConnectApi.FeedElementPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElementsInFeed(communityId, feedType, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElementsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q)

Get a page of sorted feed elements from the `Company`, `DirectMessageModeration`, `Home`, `Isolated`, `Moderation`, and `PendingReview` feeds that match the search criteria. Each feed element includes no more than the specified number of comments.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: `ConnectApi.FeedElementPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElementsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElementsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q, filter)

Get a page of sorted and filtered feed elements from the `Home` feed that match the search criteria. Each feed element includes no more than the specified number of comments.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, ConnectApi.FeedFilter filter)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

The type of feed. The only valid value is `Home`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

When the sortParam is `MostViewed`, you must pass in `null` for the pageParam.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

When the sortParam is `MostViewed`, the pageSize must be a value from 1 to 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**filter**

Type: [`ConnectApi.​FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Specifies the feed filters.

-   `AllQuestions`—Feed elements that are questions.
-   `AuthoredBy`—Feed elements authored by the user profile owner. This value is valid only for the `UserProfile` feed.
-   `CommunityScoped`—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the `UserProfile` feed.
-   `QuestionsWithCandidateAnswers`—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `QuestionsWithCandidateAnswers​ReviewedPublished`—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Read`—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the `Record` feed of a group.
-   `SolvedQuestions`—Feed elements that are questions and that have a best answer.
-   `UnansweredQuestions`—Feed elements that are questions and that don’t have any answers.
-   `UnansweredQuestionsWithCandidate​Answers`—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Unread`—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the `Record` feed of a group.
-   `UnsolvedQuestions`—Feed elements that are questions and that don’t have a best answer.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElementsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_4a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElementsInFeed(communityId, feedType, subjectId, q)

Search up to 5,000 of the most recent feed elements in a feed for a subject ID that match the search string. Feed elements are returned in order of most recent activity.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, String q)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessages`, `Filter`, `Landing`, `Streams`, and `Topics`.

subjectId

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElementsInFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, q)

Get a page of sorted feed elements from a feed for a record or user that match the search criteria.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessages`, `Filter`, `Landing`, `Streams`, and `Topics`.

**subjectId**

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Order of feed items in the feed.

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Search term. Searches keywords in the user or group name. A minimum of one character is required. This parameter doesn’t support wildcards. This parameter is required.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_5)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q)

Get a page of sorted feed elements from a feed that match the search criteria. Each feed element includes no more than the specified number of comments.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessages`, `Filter`, `Landing`, `Streams`, and `Topics`.

**subjectId**

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_6)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, filter)

Get a page of sorted and filtered feed elements from a `UserProfile` feed that match the search criteria.

#### API Version

35.0

#### Available to Guest Users

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, ConnectApi.FeedFilter filter)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.UserProfile`.

**subjectId**

Type: String

ID of any user. To specify the context user, use the user ID or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

One or more keywords to search for in the feed elements visible to the context user. The search string can contain wildcards and must contain at least two characters that aren’t wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**filter**

Type: [`ConnectApi.FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Value must be `ConnectApi.FeedFilter.CommunityScoped`. Filters the feed to include only feed elements that are scoped to Experience Cloud sites. Feed elements that are always visible in all sites are filtered out.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_6a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, customFilter)

Get a page of sorted and filtered feed elements from a case feed that match the search criteria.

#### API Version

40.0

#### Available to Guest Users

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, String customFilter)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

The ID of a case.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

One or more keywords to search for in the feed elements visible to the context user. The search string can contain wildcards and must contain at least two characters that aren’t wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**customFilter**

Type: String

Custom filter that applies only to the case feed. See [customFeedFilter](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_customfeedfilter.htm "HTML (New Window)") in the *Metadata API Developer Guide* for supported values.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, customFilter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_6b)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly)

Get a page of sorted feed elements from a feed for a record or user that match the search criteria. Each feed element includes no more than the specified number of comments. Specify whether to return feed elements posted by internal (non-Experience Cloud site) users only.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, Boolean showInternalOnly)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed elements from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_7)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, filter)

Get a page of sorted and filtered feed elements from a feed for a record or user that match the search criteria. Each feed element includes no more than the specified number of comments. Specify whether to return feed elements posted by internal (non-Experience Cloud site) users only.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, Boolean showInternalOnly, ConnectApi.FeedFilter filter)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed elements from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**filter**

Type: [`ConnectApi.​FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Specifies the feed filters.

-   `AllQuestions`—Feed elements that are questions.
-   `AuthoredBy`—Feed elements authored by the user profile owner. This value is valid only for the `UserProfile` feed.
-   `CommunityScoped`—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the `UserProfile` feed.
-   `QuestionsWithCandidateAnswers`—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `QuestionsWithCandidateAnswers​ReviewedPublished`—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Read`—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the `Record` feed of a group.
-   `SolvedQuestions`—Feed elements that are questions and that have a best answer.
-   `UnansweredQuestions`—Feed elements that are questions and that don’t have any answers.
-   `UnansweredQuestionsWithCandidate​Answers`—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Unread`—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the `Record` feed of a group.
-   `UnsolvedQuestions`—Feed elements that are questions and that don’t have a best answer.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_8)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, customFilter)

Get a page of sorted and filtered feed elements from a case feed that match the search criteria.

#### API Version

40.0

#### Available to Guest Users

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, Boolean showInternalOnly, String customFilter)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

The ID of a case.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed elements from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**filter**

Type: String

Custom filter that applies only to the case feed. See [customFeedFilter](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_customfeedfilter.htm "HTML (New Window)") in the *Metadata API Developer Guide* for supported values.

#### Return Value

Type: `ConnectApi.FeedElementPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, customFilter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_8a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, q)

Get the feed elements from a feed filtered by a key prefix that match the search criteria.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElementsInFilterFeed(String communityId, String subjectId, String keyPrefix, String q)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

keyPrefix

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFilterFeed_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam, q)

Get a page of sorted feed elements from a feed filtered by a key prefix that match the search criteria.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElementsInFilterFeed(String communityId, String subjectId, String keyPrefix, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFilterFeed_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, q)

Get a page of sorted feed elements from a feed filtered by a key prefix that match the search criteria. Each feed element includes no more than the specified number of comments.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage searchFeedElementsInFilterFeed(String communityId, String subjectId, String keyPrefix, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFilterFeed_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchStreams(communityId, q)

Search the Chatter feed streams for the context user.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterStreamPage searchStreams(String communityId, String q)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [`ConnectApi.ChatterStreamPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchStreams(communityId, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchStreams_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchStreams(communityId, q, sortParam)

Search and sort the Chatter feed streams for the context user.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterStreamPage searchStreams(String communityId, String q, ConnectApi.SortOrder sortParam)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

sortParam

Type: [`ConnectApi.SortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#SortOrderEnum)

Specifies the sort order. Values are:

-   `Ascending`—Items are in ascending alphabetical order (A-Z).
-   `Descending`—Items are in descending alphabetical order (Z-A).
-   `MostRecentlyViewed`—Items are in descending chronological order by view. This sort order is valid only for Chatter feed streams.

If not specified, default value is `Ascending`.

#### Return Value

Type: [`ConnectApi.ChatterStreamPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchStreams(communityId, q, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchStreams_3a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchStreams(communityId, q, pageParam, pageSize)

Search the Chatter feed streams for the context user and return a page of results.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterStreamPage searchStreams(String communityId, String q, Integer pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 to 250. The default size is 25.

#### Return Value

Type: [`ConnectApi.ChatterStreamPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchStreams(communityId, q, pageParam, pageSize, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchStreams_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchStreams(communityId, q, pageParam, pageSize, sortParam)

Search the Chatter feed streams for the context user and return a sorted page of results.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterStreamPage searchStreams(String communityId, String q, Integer pageParam, Integer pageSize, ConnectApi.SortOrder sortParam)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 to 250. The default size is 25.

sortParam

Type: [`ConnectApi.SortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#SortOrderEnum)

Specifies the sort order. Values are:

-   `Ascending`—Items are in ascending alphabetical order (A-Z).
-   `Descending`—Items are in descending alphabetical order (Z-A).
-   `MostRecentlyViewed`—Items are in descending chronological order by view. This sort order is valid only for Chatter feed streams.

If not specified, default value is `Ascending`.

#### Return Value

Type: [`ConnectApi.ChatterStreamPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchStreams(communityId, q, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchStreams_4a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchStreams(communityId, q, pageParam, pageSize, sortParam, globalScope)

Search the Chatter feed streams from all Experience Cloud sites for the context user and return a sorted page of results.

#### API Version

41.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterStreamPage searchStreams(String communityId, String q, Integer pageParam, Integer pageSize, ConnectApi.SortOrder sortParam, Boolean globalScope)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 to 250. The default size is 25.

sortParam

Type: [`ConnectApi.SortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#SortOrderEnum)

Specifies the sort order. Values are:

-   `Ascending`—Items are in ascending alphabetical order (A-Z).
-   `Descending`—Items are in descending alphabetical order (Z-A).
-   `MostRecentlyViewed`—Items are in descending chronological order by view. This sort order is valid only for Chatter feed streams.

If not specified, default value is `Ascending`.

globalScope

Type: Boolean

Specifies whether to get streams from all the context user’s Experience Cloud sites, regardless of the communityId value. If you know the communityId for the streams, we recommend setting globalScope to `false`.

#### Return Value

Type: [`ConnectApi.ChatterStreamPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

### setCommentIsVerified(communityId, commentId, isVerified)

Mark a comment as verified or unverified.

#### API Version

41.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.VerifiedCapability setCommentIsVerified(String communityId, String commentId, Boolean isVerified)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

commentId

Type: String

ID of the comment on a question post. Only one comment on a question post can be marked as verified.

isVerified

Type: Boolean

Specifies whether to mark the comment as verified (`true`) or unverified (`false`).

Only verified comments can be marked as unverified, and only unverified comments can be marked as verified.

#### Return Value

Type: [`ConnectApi.VerifiedCapability`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_verified_capability.htm#apex_connectapi_output_verified_capability "If a comment has this capability, users with permission can mark it as verified or unverified.")

If the comment doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### setCommentIsVerifiedByAnonymized(communityId, commentId, isVerified, isVerifiedByAnonymized)

Mark a comment as verified by an anonymous user.

#### API Version

43.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.VerifiedCapability setCommentIsVerifiedByAnonymized(String communityId, String commentId, Boolean isVerified, Boolean isVerifiedByAnonymized)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

commentId

Type: String

ID of the comment on a question post. Only one comment on a question post can be marked as verified.

isVerified

Type: Boolean

Specifies whether to mark the comment as verified (`true`) or unverified (`false`).

Only verified comments can be marked as unverified, and only unverified comments can be marked as verified.

isVerifiedByAnonymized

Type: Boolean

Specifies whether to mark the comment as verified by an anonymous user (`true`).

If a user previously verified a comment and then requested the activity to be deleted, use `isVerifiedByAnonymized` to maintain the verification and anonymize the value of `lastVerifiedByUser`.

You can’t set `isVerified` and `isVerifiedByAnonymized` to `true` at the same time. `isVerifiedByAnonymized` can be set to `true` only if `isVerified` is already set to `true`.

You can’t set `isVerifiedByAnonymized` to `false`. After `isVerifiedByAnonymized` is set to `true`, it can be undone only when another user marks the comment as unverified and then reverifies the comment.

#### Return Value

Type: [`ConnectApi.VerifiedCapability`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_verified_capability.htm#apex_connectapi_output_verified_capability "If a comment has this capability, users with permission can mark it as verified or unverified.")

If the comment doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### setCommentVote(communityId, commentId, upDownVote)

Upvote or downvote a comment.

#### API Version

41.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.UpDownVoteCapability setCommentVote(String communityId, String commentId, ConnectApi.UpDownVoteCapabilityInput upDownVote)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

commentId

Type: String

ID of the comment.

upDownVote

Type: [`ConnectApi.UpDownVoteCapabilityInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_up_down_vote_capability.htm#apex_connectapi_input_up_down_vote_capability "Upvote or downvote a feed element or a comment.")

A `ConnectApi.UpDownVoteCapabilityInput` object that includes your vote.

#### Return Value

Type: [`ConnectApi.UpDownVoteCapability`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_up_down_vote_capability.htm#apex_connectapi_output_up_down_vote_capability "If a feed post or comment has this capability, users can upvote or downvote it.")

If the comment doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### setFeedCommentStatus(communityId, commentId, status)

Set the status of a comment.

#### API Version

38.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.StatusCapability setFeedCommentStatus(String communityId, String commentId, ConnectApi.StatusCapabilityInput status)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

commentId

Type: String

ID of the comment.

status

Type: [`ConnectApi.StatusCapabilityInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_status_capability.htm#apex_connectapi_input_status_capability "Change the status of a feed post or comment.")

A `ConnectApi.StatusCapabilityInput` object that includes the status you want to set.

#### Return Value

Type: [`ConnectApi.StatusCapability`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_status_capability.htm#apex_connectapi_output_status_capability "If a feed post or comment has this capability, it has a status that determines its visibility.")

If the comment doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Usage

Only users with the Can Approve Feed Post and Comment permission can set the status of a feed post or comment.

### setFeedElementIsClosed(communityId, feedElementId, isClosed)

Set a feed element to closed.

Users can’t edit (specifically the feed item body or title), comment on, or delete a closed feed element. If the closed feed element is a poll, users can’t vote on it. Users can’t edit (specifically the comment body) or delete a comment on a closed feed element or select or remove it as best answer.

Admins and moderators can edit and delete closed feed elements and comments on closed feed elements. Admins and moderators can select or remove the best answer status on comments on closed feed elements.

#### API Version

43.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.CloseCapability setFeedElementIsClosed(String communityId, String feedElementId, Boolean isClosed)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

isClosed

Type: Boolean

Specifies whether to set the feed element to closed (`true`) or not (`false`).

#### Return Value

Type: [`ConnectApi.CloseCapability`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_close_capability.htm#apex_connectapi_output_close_capability "If a feed element has this capability, users with permission can close it.")

If the feed element doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### setFeedElementVote(communityId, feedElementId, upDownVote)

Upvote or downvote a feed element.

#### API Version

41.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.UpDownVoteCapability setFeedElementVote(String communityId, String feedElementId, ConnectApi.UpDownVoteCapabilityInput upDownVote)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

upDownVote

Type: [`ConnectApi.UpDownVoteCapabilityInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_up_down_vote_capability.htm#apex_connectapi_input_up_down_vote_capability "Upvote or downvote a feed element or a comment.")

A `ConnectApi.UpDownVoteCapabilityInput` object that includes your vote.

#### Return Value

Type: [`ConnectApi.UpDownVoteCapability`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_up_down_vote_capability.htm#apex_connectapi_output_up_down_vote_capability "If a feed post or comment has this capability, users can upvote or downvote it.")

If the feed element doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### setFeedEntityStatus(communityId, feedElementId, status)

Set the status of a feed post.

#### API Version

37.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.StatusCapability setFeedEntityStatus(String communityId, String feedElementId, ConnectApi.StatusCapabilityInput status)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

status

Type: [`ConnectApi.StatusCapabilityInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_status_capability.htm#apex_connectapi_input_status_capability "Change the status of a feed post or comment.")

A `ConnectApi.StatusCapabilityInput` object that includes the status you want to set.

#### Return Value

Type: [`ConnectApi.StatusCapability`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_status_capability.htm#apex_connectapi_output_status_capability "If a feed post or comment has this capability, it has a status that determines its visibility.")

If the feed element doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Usage

Only users with the Can Approve Feed Post and Comment permission can set the status of a feed post or comment.

### setIsMutedByMe(communityId, feedElementId, isMutedByMe)

Mute or unmute a feed element.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.MuteCapability setIsMutedByMe(String communityId, String feedElementId, Boolean isMutedByMe)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

isMutedByMe

Type: Boolean

Indicates whether the feed element is muted for the context user. Default value is `false`.

#### Return Value

Type: `ConnectApi.MuteCapability`

If the feed element doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### setIsReadByMe(communityId, feedElementId, readBy)

Mark a feed element as read for the context user using an input class.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ReadByCapability setIsReadByMe(String communityId, String feedElementId, ConnectApi.ReadByCapabilityInput readBy)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element to mark as read.

readBy

Type: [`ConnectApi.ReadByCapabilityInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_read_by_capability.htm#apex_connectapi_input_read_by_capability "Mark feed elements as read by the context user.")

A `ConnectApi.ReadByCapabilityInput` body indicating to mark the feed elements as read.

#### Return Value

Type: [`ConnectApi.ReadByCapability`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_read_by_capability.htm#apex_connectapi_output_read_by_capability "If a feed element has this capability, the context user can mark it as read.")

If the feed element doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### setIsReadByMe(communityId, feedElementId, isReadByMe)

Mark a feed element as read for the context user.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ReadByCapability setIsReadByMe(String communityId, String feedElementId, Boolean isReadByMe)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element to mark as read.

isReadByMe

Type: Boolean

Specifies to mark the feed element as read (`true`) for the context user.

#### Return Value

Type: [`ConnectApi.ReadByCapability`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_read_by_capability.htm#apex_connectapi_output_read_by_capability "If a feed element has this capability, the context user can mark it as read.")

If the feed element doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### updateComment(communityId, commentId, comment)

Edit a comment.

#### API Version

34.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Comment updateComment(String communityId, String commentId, ConnectApi.CommentInput comment)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

commentId

Type: String

ID of the comment to be edited.

comment

Type: [`ConnectApi.CommentInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_comment.htm#apex_connectapi_input_comment "Comment input used to add rich comments, for example, comments that include mentions or file attachments.")

Information about the comment to be edited.

#### Return Value

Type: [`ConnectApi.Comment`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment.htm#apex_connectapi_output_comment "A comment.")

If the comment doesn’t support the `edit` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Example

```apex
String commentId;
String communityId = Network.getNetworkId();

// Get the last feed item created by the context user.
List feedItems = [SELECT Id FROM FeedItem WHERE CreatedById = :UserInfo.getUserId() ORDER BY CreatedDate DESC];
if (feedItems.isEmpty()) {
    // Return null within anonymous apex.
    return null;
}
String feedElementId = feedItems[0].id;

ConnectApi.CommentPage commentPage = ConnectApi.ChatterFeeds.getCommentsForFeedElement(communityId, feedElementId);
if (commentPage.items.isEmpty()) {
    // Return null within anonymous apex.
    return null;
}
commentId = commentPage.items[0].id;

ConnectApi.FeedEntityIsEditable isEditable = ConnectApi.ChatterFeeds.isCommentEditableByMe(communityId, commentId);

if (isEditable.isEditableByMe == true){
    ConnectApi.CommentInput commentInput = new ConnectApi.CommentInput();
    ConnectApi.MessageBodyInput messageBodyInput = new ConnectApi.MessageBodyInput();
    ConnectApi.TextSegmentInput textSegmentInput = new ConnectApi.TextSegmentInput();

    messageBodyInput.messageSegments = new List();

    textSegmentInput.text = 'This is my edited comment.';
    messageBodyInput.messageSegments.add(textSegmentInput);

    commentInput.body = messageBodyInput;

    ConnectApi.Comment editedComment = ConnectApi.ChatterFeeds.updateComment(communityId, commentId, commentInput);
}
```

### updateDirectMessage(communityId, feedElementId, directMessage)

Update the members of a direct message.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.DirectMessageCapability updateDirectMessage(String communityId, String feedElementId, ConnectApi.DirectMessageCapabilityInput directMessage)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

directMessage

Type: [`ConnectApi.DirectMessageCapabilityInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_direct_message_capability.htm#apex_connectapi_input_direct_message_capability "Create or update the members of a direct message.")

A `ConnectApi.DirectMessageCapabilityInput` body that includes the members to add and remove.

#### Return Value

Type: [`ConnectApi.DirectMessageCapability`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_direct_message_capability.htm#apex_connectapi_output_direct_message_capability "If a feed element has this capability, it’s a direct message.")

If the feed element doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### updateFeedElement(communityId, feedElementId, feedElement)

Edit a feed element.

#### API Version

34.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElement updateFeedElement(String communityId, String feedElementId, ConnectApi.FeedElementInput feedElement)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element to be edited. Feed items are the only type of feed element that can be edited.

feedElement

Type: [`ConnectApi.FeedElementInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element.htm#apex_connectapi_input_feed_element "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

Information about the feed item to be edited.

#### Return Value

Type: [`ConnectApi.FeedElement`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm#apex_connectapi_output_feed_element "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

If the feed element doesn’t support the `edit` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Example for Editing a Feed Post

```apex
String communityId = Network.getNetworkId();

// Get the last feed item created by the context user.
List feedItems = [SELECT Id FROM FeedItem WHERE CreatedById = :UserInfo.getUserId() ORDER BY CreatedDate DESC];
if (feedItems.isEmpty()) {
    // Return null within anonymous apex.
    return null;
}
String feedElementId = feedItems[0].id;

ConnectApi.FeedEntityIsEditable isEditable = ConnectApi.ChatterFeeds.isFeedElementEditableByMe(communityId, feedElementId);

if (isEditable.isEditableByMe == true){
    ConnectApi.FeedItemInput feedItemInput = new ConnectApi.FeedItemInput();
    ConnectApi.MessageBodyInput messageBodyInput = new ConnectApi.MessageBodyInput();
    ConnectApi.TextSegmentInput textSegmentInput = new ConnectApi.TextSegmentInput();

    messageBodyInput.messageSegments = new List();

    textSegmentInput.text = 'This is my edited post.';
    messageBodyInput.messageSegments.add(textSegmentInput);

    feedItemInput.body = messageBodyInput;

    ConnectApi.FeedElement editedFeedElement = ConnectApi.ChatterFeeds.updateFeedElement(communityId, feedElementId, feedItemInput);
}
```

#### Example for Editing a Question Title and Post

```apex
String communityId = Network.getNetworkId();

// Get the last feed item created by the context user.
List feedItems = [SELECT Id FROM FeedItem WHERE CreatedById = :UserInfo.getUserId() ORDER BY CreatedDate DESC];
if (feedItems.isEmpty()) {
    // Return null within anonymous apex.
    return null;
}
String feedElementId = feedItems[0].id;

ConnectApi.FeedEntityIsEditable isEditable = ConnectApi.ChatterFeeds.isFeedElementEditableByMe(communityId, feedElementId);

if (isEditable.isEditableByMe == true){

    ConnectApi.FeedItemInput feedItemInput = new ConnectApi.FeedItemInput();
    ConnectApi.FeedElementCapabilitiesInput feedElementCapabilitiesInput = new ConnectApi.FeedElementCapabilitiesInput();
    ConnectApi.QuestionAndAnswersCapabilityInput questionAndAnswersCapabilityInput = new ConnectApi.QuestionAndAnswersCapabilityInput();
    ConnectApi.MessageBodyInput messageBodyInput = new ConnectApi.MessageBodyInput();
    ConnectApi.TextSegmentInput textSegmentInput = new ConnectApi.TextSegmentInput();

    messageBodyInput.messageSegments = new List();

    textSegmentInput.text = 'This is my edited question.';
    messageBodyInput.messageSegments.add(textSegmentInput);

    feedItemInput.body = messageBodyInput;
    feedItemInput.capabilities = feedElementCapabilitiesInput;

    feedElementCapabilitiesInput.questionAndAnswers = questionAndAnswersCapabilityInput;
    questionAndAnswersCapabilityInput.questionTitle = 'Where is my edited question?';

    ConnectApi.FeedElement editedFeedElement = ConnectApi.ChatterFeeds.updateFeedElement(communityId, feedElementId, feedItemInput);
}
```

### updateFeedElementBookmarks(communityId, feedElementId, bookmarks)

Bookmark a feed element or remove a bookmark from a feed element using an input class.

#### API Version

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.BookmarksCapability updateFeedElementBookmarks(String communityId, String feedElementId, ConnectApi.BookmarksCapabilityInput bookmarks)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

bookmarks

Type: [`ConnectApi.BookmarksCapabilityInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_bookmarks_capability.htm#apex_connectapi_input_bookmarks_capability "Create or update a bookmark on a feed element.")

Information about a bookmark.

#### Return Value

Type: [ConnectApi.BookmarksCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_bookmarks_capability.htm#apex_connectapi_output_bookmarks_capability "If a feed element has this capability, the context user can bookmark it.")

If the feed element doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### updateFeedElementBookmarks(communityId, feedElementId, isBookmarkedByCurrentUser)

Bookmark a feed element or remove a bookmark from a feed element.

#### API Version

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.BookmarksCapability updateFeedElementBookmarks(String communityId, String feedElementId, Boolean isBookmarkedByCurrentUser)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

isBookmarkedByCurrentUser

Type: Boolean

Specify whether to bookmark the feed element (`true`) or not (`false`).

#### Return Value

Type: `ConnectApi.BookmarksCapability`

If the feed element doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Example

```apex
ConnectApi.BookmarksCapability bookmark = ConnectApi.ChatterFeeds.updateFeedElementBookmarks(null, '0D5D0000000KuGh', true);
```

### updateFeedElementReadByCapabilityBatch(communityId, feedElementIds, readBy)

Mark multiple feed elements as read by the context user at the same time using an input class.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.BatchResult[] updateFeedElementReadByCapabilityBatch(String communityId, List<String> feedElementIds, ConnectApi.ReadByCapabilityInput readBy)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

Up to 500 feed element IDs to mark as read.

readBy

Type: [`ConnectApi.ReadByCapabilityInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_read_by_capability.htm#apex_connectapi_input_read_by_capability "Mark feed elements as read by the context user.")

A `ConnectApi.ReadByCapabilityInput` body indicating to mark the feed elements as read.

#### Return Value

Type: `ConnectApi.BatchResult`\[\]

If the feed element doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

The returned objects correspond to each of the input objects and are returned in the same order as the input objects.

The method call fails only if an error occurs that affects the entire operation (such as a parsing failure). If an individual object causes an error, the error is embedded within the `ConnectApi.BatchResult` list.

### updateFeedElementReadByCapabilityBatch(communityId, feedElementIds, isReadByMe)

Mark multiple feed elements as read by the context user at the same time.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.BatchResult[] updateFeedElementReadByCapabilityBatch(String communityId, List<String> feedElementIds, Boolean isReadByMe)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

Up to 500 feed element IDs to mark as read.

isReadByMe

Type: Boolean

Specifies to mark the feed element as read (`true`) for the context user.

#### Return Value

Type: `ConnectApi.BatchResult`\[\]

If the feed element doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### updateLikeForComment(communityId, commentId, isLikedByCurrentUser)

Like or unlike a comment.

#### API Version

39.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterLikePage updateLikeForComment(String communityId, String commentId, Boolean isLikedByCurrentUser)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

commentId

Type: String

ID of the comment.

isLikedByCurrentUser

Type: Boolean

Specifies if the context user likes (`true`) or unlikes (`false`) the comment.

#### Return Value

Type: [`ConnectApi.ChatterLikePage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_like_page.htm#apex_connectapi_output_like_page "Page of Chatter likes.")

### updateLikeForFeedElement(communityId, feedElementId, isLikedByCurrentUser)

Like or unlike a feed element.

#### API Version

39.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterLikePage updateLikeForFeedElement(String communityId, String feedElementId, Boolean isLikedByCurrentUser)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

isLikedByCurrentUser

Type: Boolean

Specifies if the context user likes (`true`) or unlikes (`false`) the feed element.

#### Return Value

Type: [`ConnectApi.ChatterLikePage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_like_page.htm#apex_connectapi_output_like_page "Page of Chatter likes.")

If the feed element doesn’t support the `ChatterLikes` capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### updatePinnedFeedElements(communityId, feedType, subjectId, pin)

Pin or unpin feed elements to a group or topic feed.

#### API Version

41.0

#### Available to Guest Users

41.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.PinCapability updatePinnedFeedElements(String communityId, ConnectApi.FeedType feedType, String subjectId, ConnectApi.PinCapabilityInput pin)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

The type of feed. Valid values are `Record` and `Topics`.

subjectId

Type: String

If feedType is `Record`, subjectId must be a group ID. If feedType is `Topics`, subjectId must be a topic ID.

pin

Type: [`ConnectApi.PinCapabilityInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_pin_capability.htm#apex_connectapi_input_pin_capability "Pin or unpin a feed element to a feed.")

A `ConnectApi.PinCapabilityInput` object indicating the feed element to pin or unpin.

#### Return Value

Type: [`ConnectApi.PinCapability`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_pin_capability.htm#apex_connectapi_output_pin_capability "If a feed element has this capability, users who have permission can pin it to a feed.")

If the feed doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

### updateStream(communityId, streamId, streamInput)

Update a Chatter feed stream.

#### API Version

39.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterStream updateStream(String communityId, String streamId, ConnectApi.ChatterStreamInput streamInput)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

streamId

Type: String

ID of the Chatter feed stream.

streamInput

Type: [`ConnectApi.ChatterStreamInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_stream.htm#apex_connectapi_input_feed_stream "A Chatter feed stream.")

A `ConnectApi.ChatterStreamInput` object.

#### Return Value

Type: [`ConnectApi.ChatterStream`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream.htm#apex_connectapi_output_feed_stream "A Chatter feed stream.")

### voteOnFeedElementPoll(communityId, feedElementId, myChoiceId)

Vote on a poll or change your vote on a poll.

#### API Version

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.PollCapability voteOnFeedElementPoll(String communityId, String feedElementId, String myChoiceId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

myChoiceId

Type: String

ID of the poll item you’re voting for. The key prefix for poll items is 09A.

#### Return Value

Type: `ConnectApi.PollCapability`

If the feed element doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Example

```apex
ConnectApi.PollCapability poll = ConnectApi.ChatterFeeds.voteOnFeedElementPoll(null, '0D5D0000000XZaUKAW', '09AD000000000TKMAY');
```

## ChatterFeeds Test Methods

These test methods are for `ChatterFeeds`. All methods are static.

For information about using these methods to test your `ConnectApi` code, see [Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm).

## See Also

- [setTestGetFeedElementsFromFeed(communityId, feedType, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_1)
- [setTestGetFeedElementsFromFeed(communityId, feedType, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_3)
- [setTestGetFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_4)
- [setTestGetFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_4a)
- [setTestGetFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, filter, threadedCommentsCollapsed, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_18)
- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_2)
- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_5)
- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_6)
- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, showInternalOnly, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_7)
- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_7a)
- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, filter, threadedCommentsCollapsed, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_16)
- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, customFilter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_7b)
- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_8)
- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_9)
- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, filter, threadedCommentsCollapsed, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_9aa)
- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, customFilter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_9a)
- [setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, customFilter, threadedCommentsCollapsed, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_17)
- [setTestGetFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFilterFeed_1)
- [setTestGetFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFilterFeed_2)
- [setTestGetFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFilterFeed_3)
- [setTestGetFeedElementsFromFilterFeedUpdatedSince(communityId, subjectId, keyPrefix, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFilterFeedUpdatedSince)
- [setTestGetFeedElementsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsUpdatedSince_1)
- [setTestGetFeedElementsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsUpdatedSince_1a)
- [setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsUpdatedSince_2)
- [setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, showInternalOnly, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsUpdatedSince_3)
- [setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsUpdatedSince_3a)
- [setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, customFilter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsUpdatedSince_3b)
- [setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsUpdatedSince_4)
- [setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsUpdatedSince_5)
- [setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly, customFilter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsUpdatedSince_5a)
- [setTestGetRelatedPosts(communityId, feedElementId, filter, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetRelatedPosts_1)
- [setTestGetTopUnansweredQuestions(communityId, result) (Pilot)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetTopUnansweredQuestions_1)
- [setTestGetTopUnansweredQuestions(communityId, filter, result) (Pilot)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetTopUnansweredQuestions_2)
- [setTestGetTopUnansweredQuestions(communityId, pageSize, result) (Pilot)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetTopUnansweredQuestions_3)
- [setTestGetTopUnansweredQuestions(communityId, filter, pageSize, result) (Pilot)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetTopUnansweredQuestions_4)
- [setTestSearchFeedElements(communityId, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElements_1)
- [setTestSearchFeedElements(communityId, q, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElements_2)
- [setTestSearchFeedElements(communityId, q, threadedCommentsCollapsed, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElements_2a)
- [setTestSearchFeedElements(communityId, q, pageParam, pageSize, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElements_3)
- [setTestSearchFeedElements(communityId, q, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElements_4)
- [setTestSearchFeedElements(communityId, q, pageParam, pageSize, threadedCommentsCollapsed, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElements_4a)
- [setTestSearchFeedElements(communityId, q, recentCommentCount, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElements_5)
- [setTestSearchFeedElementsInFeed(communityId, feedType, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_1)
- [setTestSearchFeedElementsInFeed(communityId, feedType, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_3)
- [setTestSearchFeedElementsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_4)
- [setTestSearchFeedElementsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_4a)
- [setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_2)
- [setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_5)
- [setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_6)
- [setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_6a)
- [setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, customFilter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_6b)
- [setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_7)
- [setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_8)
- [setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, customFilter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_8a)
- [setTestSearchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFilterFeed_1)
- [setTestSearchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFilterFeed_2)
- [setTestSearchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFilterFeed_3)
- [setTestSearchStreams(communityId, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchStreams_3)
- [setTestSearchStreams(communityId, q, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchStreams_3a)
- [setTestSearchStreams(communityId, q, pageParam, pageSize, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchStreams_4)
- [setTestSearchStreams(communityId, q, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchStreams_4a)
- [setTestSearchStreams(communityId, q, pageParam, pageSize, sortParam, globalScope, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchStreams_10)

### setTestGetFeedElementsFromFeed(communityId, feedType, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsFromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

`public static Void setTestGetFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, ConnectApi.FeedElementPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

result

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsFromFeed(communityId, feedType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsFromFeed(communityId, feedType, pageParam, pageSize, sortParam, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsFromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

`public static Void setTestGetFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

The only valid value for this parameter is `Company`.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsFromFeed(communityId, feedType, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsFromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

`public static Void setTestGetFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, filter, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsFromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

32.0

#### Signature

`public static Void setTestGetFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedFilter filter, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

The type of feed. The only valid value is `Home`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**filter**

Type: [`ConnectApi.​FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Specifies the feed filters.

-   `AllQuestions`—Feed elements that are questions.
-   `AuthoredBy`—Feed elements authored by the user profile owner. This value is valid only for the `UserProfile` feed.
-   `CommunityScoped`—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the `UserProfile` feed.
-   `QuestionsWithCandidateAnswers`—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `QuestionsWithCandidateAnswers​ReviewedPublished`—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Read`—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the `Record` feed of a group.
-   `SolvedQuestions`—Feed elements that are questions and that have a best answer.
-   `UnansweredQuestions`—Feed elements that are questions and that don’t have any answers.
-   `UnansweredQuestionsWithCandidate​Answers`—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Unread`—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the `Record` feed of a group.
-   `UnsolvedQuestions`—Feed elements that are questions and that don’t have a best answer.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_4a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, filter, threadedCommentsCollapsed, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.getFeedElementsFromFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

44.0

#### Signature

`public static Void setTestGetFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedFilter filter, Boolean threadedCommentsCollapsed, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

The type of feed. The only valid value is `Home`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**filter**

Type: [`ConnectApi.​FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Specifies the feed filters.

-   `AllQuestions`—Feed elements that are questions.
-   `AuthoredBy`—Feed elements authored by the user profile owner. This value is valid only for the `UserProfile` feed.
-   `CommunityScoped`—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the `UserProfile` feed.
-   `QuestionsWithCandidateAnswers`—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `QuestionsWithCandidateAnswers​ReviewedPublished`—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Read`—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the `Record` feed of a group.
-   `SolvedQuestions`—Feed elements that are questions and that have a best answer.
-   `UnansweredQuestions`—Feed elements that are questions and that don’t have any answers.
-   `UnansweredQuestionsWithCandidate​Answers`—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Unread`—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the `Record` feed of a group.
-   `UnsolvedQuestions`—Feed elements that are questions and that don’t have a best answer.

**threadedCommentsCollapsed**

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [Apex Developer Guide: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm)

-   [getFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, filter, threadedCommentsCollapsed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_18 "Get a page of filtered and sorted feed elements with comments in a threaded style from the Home feed. Each feed element contains no more than the specified number of comments.")
    

### setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsFromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

`public static Void setTestGetFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, ConnectApi.FeedElementPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

The feed type.

subjectId

Type: String

ID of the context user or the alias `me`.

result

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsFromFeed(communityId, feedType, subjectId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsFromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

`public static Void setTestGetFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`.

**subjectId**

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsFromFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_5)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsFromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

`public static Void setTestGetFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`.

**subjectId**

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_6)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, showInternalOnly, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsFromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

`public static Void setTestGetFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, Boolean showInternalOnly, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed items from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, showInternalOnly)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_7)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, filter, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsFromFeed` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

35.0

#### Signature

`public static Void setTestGetFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedFilter filter, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.UserProfile`.

**subjectId**

Type: String

ID of any user. To specify the context user, use the user ID or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**filter**

Type: [`ConnectApi.FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Value must be `ConnectApi.FeedFilter.CommunityScoped`. Filters the feed to include only feed elements that are scoped to Experience Cloud sites. Feed elements that are always visible in all sites are filtered out. Currently, feed elements scoped to sites have a User or a Group parent record. However, other parent record types could be scoped to sites in the future.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_7a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, filter, threadedCommentsCollapsed, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.getFeedElementsFromFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

44.0

#### Signature

`public static Void setTestGetFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedFilter filter, Boolean threadedCommentsCollapsed, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.UserProfile`.

**subjectId**

Type: String

ID of any user. To specify the context user, use the user ID or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**filter**

Type: [`ConnectApi.FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Value must be `ConnectApi.FeedFilter.CommunityScoped`. Filters the feed to include only feed elements that are scoped to Experience Cloud sites. Feed elements that are always visible in all sites are filtered out. Currently, feed elements scoped to sites have a User or a Group parent record. However, other parent record types could be scoped to sites in the future.

**threadedCommentsCollapsed**

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [Apex Developer Guide: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm)

-   [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, filter, threadedCommentsCollapsed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_16 "Get a page of feed elements with comments in a threaded style from the UserProfile feed.")
    

### setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, customFilter, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsFromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String customFilter, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

The ID of a case.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**customFilter**

Type: String

Custom filter that applies only to the case feed. See [customFeedFilter](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_customfeedfilter.htm "HTML (New Window)") in the *Metadata API Developer Guide* for supported values.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, customFilter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_7b)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsFromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

`public static Void setTestGetFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, Boolean showInternalOnly, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed items from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**result**

Type: `ConnectApi.FeedElementPage`

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_8)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, filter, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsFromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

32.0

#### Signature

`public static Void setTestGetFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, Boolean showInternalOnly, ConnectApi.FeedFilter filter, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed items from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**filter**

Type: [`ConnectApi.​FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Specifies the feed filters.

-   `AllQuestions`—Feed elements that are questions.
-   `AuthoredBy`—Feed elements authored by the user profile owner. This value is valid only for the `UserProfile` feed.
-   `CommunityScoped`—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the `UserProfile` feed.
-   `QuestionsWithCandidateAnswers`—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `QuestionsWithCandidateAnswers​ReviewedPublished`—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Read`—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the `Record` feed of a group.
-   `SolvedQuestions`—Feed elements that are questions and that have a best answer.
-   `UnansweredQuestions`—Feed elements that are questions and that don’t have any answers.
-   `UnansweredQuestionsWithCandidate​Answers`—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Unread`—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the `Record` feed of a group.
-   `UnsolvedQuestions`—Feed elements that are questions and that don’t have a best answer.

**result**

Type: `ConnectApi.FeedElementPage`

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_9)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, filter, threadedCommentsCollapsed, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsFromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

44.0

#### Signature

`public static Void setTestGetFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, Boolean showInternalOnly, ConnectApi.FeedFilter filter, Boolean threadedCommentsCollapsed, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed items from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**filter**

Type: [`ConnectApi.​FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Specifies the feed filters.

-   `AllQuestions`—Feed elements that are questions.
-   `AuthoredBy`—Feed elements authored by the user profile owner. This value is valid only for the `UserProfile` feed.
-   `CommunityScoped`—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the `UserProfile` feed.
-   `QuestionsWithCandidateAnswers`—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `QuestionsWithCandidateAnswers​ReviewedPublished`—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Read`—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the `Record` feed of a group.
-   `SolvedQuestions`—Feed elements that are questions and that have a best answer.
-   `UnansweredQuestions`—Feed elements that are questions and that don’t have any answers.
-   `UnansweredQuestionsWithCandidate​Answers`—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Unread`—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the `Record` feed of a group.
-   `UnsolvedQuestions`—Feed elements that are questions and that don’t have a best answer.

**threadedCommentsCollapsed**

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

**result**

Type: `ConnectApi.FeedElementPage`

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, filter, threadedCommentsCollapsed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_9aa)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, customFilter, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsFromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, Boolean showInternalOnly, String customFilter, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

The ID of a case.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed items from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**customFilter**

Type: String

Custom filter that applies only to the case feed. See [customFeedFilter](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_customfeedfilter.htm "HTML (New Window)") in the *Metadata API Developer Guide* for supported values.

**result**

Type: `ConnectApi.FeedElementPage`

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, customFilter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_9a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, customFilter, threadedCommentsCollapsed, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.getFeedElementsFromFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

44.0

#### Signature

`public static Void setTestGetFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, Boolean showInternalOnly, String customFilter, Boolean threadedCommentsCollapsed, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

The ID of a case.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed items from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**customFilter**

Type: String

Custom filter that applies only to the case feed. See [customFeedFilter](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_customfeedfilter.htm "HTML (New Window)") in the *Metadata API Developer Guide* for supported values.

**threadedCommentsCollapsed**

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [Apex Developer Guide: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm)

-   [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, customFilter, threadedCommentsCollapsed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_17 "Get a page of filtered and sorted feed elements with comments in a threaded style from a case feed.")
    

### setTestGetFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, result)

a `ConnectApi.FeedElementPage` object to be returned when the matching `getFeedElements​​FromFilterFeed` method is called in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

`public static Void setTestGetFeedElementsFromFilterFeed(String communityId, String subjectId, String keyPrefix, ConnectApi.FeedElementPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

keyPrefix

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

result

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFilterFeed_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `getFeedElements​​FromFilterFeed` method is called in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

`public static Void setTestGetFeedElementsFromFilterFeed(String communityId, String subjectId, String keyPrefix, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFilterFeed_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `getFeedElements​​FromFilterFeed` method is called in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

`public static Void setTestGetFeedElementsFromFilterFeed(String communityId, String subjectId, String keyPrefix, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFilterFeed_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsFromFilterFeedUpdatedSince(communityId, subjectId, keyPrefix, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the `getFeedElementsFromFilterFeedUpdatedSince` method is called in a test context.

#### API Version

31.0

#### Signature

`public static Void setTestGetFeedElementsFromFilterFeedUpdatedSince(String communityId, String subjectId, String keyPrefix, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

Opaque token defining the modification timestamp of the feed and the sort order.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsFromFilterFeedUpdatedSince(communityId, subjectId, keyPrefix, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFilterFeedUpdatedSince)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsUpdatedSince` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

`public static Void setTestGetFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedElementPage` response body.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince, filter, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsUpdatedSince` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

32.0

#### Signature

`public static Void setTestGetFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, ConnectApi.FeedFilter filter, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedElementPage` response body.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

**filter**

Type: [`ConnectApi.​FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Specifies the feed filters.

-   `AllQuestions`—Feed elements that are questions.
-   `AuthoredBy`—Feed elements authored by the user profile owner. This value is valid only for the `UserProfile` feed.
-   `CommunityScoped`—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the `UserProfile` feed.
-   `QuestionsWithCandidateAnswers`—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `QuestionsWithCandidateAnswers​ReviewedPublished`—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Read`—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the `Record` feed of a group.
-   `SolvedQuestions`—Feed elements that are questions and that have a best answer.
-   `UnansweredQuestions`—Feed elements that are questions and that don’t have any answers.
-   `UnansweredQuestionsWithCandidate​Answers`—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Unread`—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the `Record` feed of a group.
-   `UnsolvedQuestions`—Feed elements that are questions and that don’t have a best answer.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_1a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsUpdatedSince` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

`public static Void setTestGetFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

One of these values:

-   `Files`
-   `Groups`
-   `News`
-   `People`
-   `Record`

**subjectId**

Type: String

If feedType is `ConnectApi.Record`, subjectId can be any record ID, including a group ID. Otherwise, it must be the context user or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedElementPage` response body.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, showInternalOnly, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsUpdatedSince` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

`public static Void setTestGetFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, Boolean showInternalOnly, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedElementPage` response body.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed elements from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, showInternalOnly)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, filter, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsUpdatedSince` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

35.0

#### Signature

`public static Void setTestGetFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, ConnectApi.FeedFilter filter, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.UserProfile`.

**subjectId**

Type: String

ID of any user. To specify the context user, use the user ID or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

Opaque token defining the modification timestamp of the feed and the sort order.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

**filter**

Type: [`ConnectApi.FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Value must be `ConnectApi.FeedFilter.CommunityScoped`. Filters the feed to include only feed elements that are scoped to Experience Cloud sites. Feed elements that are always visible in all sites are filtered out. Currently, feed elements scoped to sites have a User or a Group parent record. However, other parent record types could be scoped to sites in the future.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_3a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, customFilter, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsUpdatedSince` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, String customFilter, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

The ID of a case.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: [`ConnectApi.FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

Opaque token defining the modification timestamp of the feed and the sort order.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

**customFilter**

Type: String

Custom filter that applies only to the case feed. See [customFeedFilter](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_customfeedfilter.htm "HTML (New Window)") in the *Metadata API Developer Guide* for supported values.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, customFilter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_3b)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsUpdatedSince` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

`public static Void setTestGetFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, Boolean showInternalOnly, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: `ConnectApi.FeedDensity`

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedElementPage` response body.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed elements from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**result**

Type: `ConnectApi.FeedElementPage`

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly, filter, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsUpdatedSince` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

32.0

#### Signature

`public static Void setTestGetFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, Boolean showInternalOnly, ConnectApi.FeedFilter filter, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: `ConnectApi.FeedDensity`

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedElementPage` response body.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed elements from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**filter**

Type: [`ConnectApi.​FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Specifies the feed filters.

-   `AllQuestions`—Feed elements that are questions.
-   `AuthoredBy`—Feed elements authored by the user profile owner. This value is valid only for the `UserProfile` feed.
-   `CommunityScoped`—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the `UserProfile` feed.
-   `QuestionsWithCandidateAnswers`—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `QuestionsWithCandidateAnswers​ReviewedPublished`—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Read`—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the `Record` feed of a group.
-   `SolvedQuestions`—Feed elements that are questions and that have a best answer.
-   `UnansweredQuestions`—Feed elements that are questions and that don’t have any answers.
-   `UnansweredQuestionsWithCandidate​Answers`—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Unread`—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the `Record` feed of a group.
-   `UnsolvedQuestions`—Feed elements that are questions and that don’t have a best answer.

**result**

Type: `ConnectApi.FeedElementPage`

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_5)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly, customFilter, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElementsUpdatedSince` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, Boolean showInternalOnly, String customFilter, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

The ID of a case.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**density**

Type: `ConnectApi.FeedDensity`

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedElementPage` response body.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed elements from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**customFilter**

Type: String

Custom filter that applies only to the case feed. See [customFeedFilter](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_customfeedfilter.htm "HTML (New Window)") in the *Metadata API Developer Guide* for supported values.

**result**

Type: `ConnectApi.FeedElementPage`

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince, showInternalOnly, customFilter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_5a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRelatedPosts(communityId, feedElementId, filter, maxResults, result)

Register a `ConnectApi.RelatedFeedPosts` object to be returned when the matching `ConnectApi.getRelatedPosts(communityId, feedElementId, filter, maxResults)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

37.0

#### Signature

`public static Void setTestGetRelatedPosts(String communityId, String feedElementId, ConnectApi.RelatedFeedPostType filter, Integer maxResults, ConnectApi.RelatedFeedPosts result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedElementId**

Type: String

ID of the feed element. The feed element must be a question.

**filter**

Type: [`ConnectApi.RelatedFeedPostType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RelatedFeedPostTypeEnum)

Specifies the type of related feed post. Values are:

-   `Answered`—Related questions that have at least one answer.
-   `BestAnswer`—Related questions that have a best answer.
-   `Generic`—All types of related questions, including answered, with a best answer, and unanswered.
-   `Unanswered`—Related questions that don’t have answers.

`Generic` is the default value.

**maxResults**

Type: Integer

The maximum number of results to return. You can return up to 25 results; 5 is the default.

**result**

Type: [`ConnectApi.RelatedFeedPosts`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_related_feed_post_collection.htm#apex_connectapi_output_abstract_related_feed_post_collection "A collection of related feed posts.")

Object containing test data.

In version 37.0 and later, related feed posts are questions.

#### Return Value

Type: Void

### setTestGetTopUnansweredQuestions(communityId, result) (Pilot)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.getTopUnansweredQuestions` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

:::tip Note
We provided top-five unanswered questions to selected customers through a pilot program
        that required agreement to specific terms and conditions. This pilot program is closed and
        not accepting new participants.
:::

42.0

#### Signature

`public static Void setTestGetTopUnansweredQuestions(String communityId, ConnectApi.FeedElementPage result)`

#### Parameters

communityId

Type: String

ID of the Experience Cloud site.

result

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getTopUnansweredQuestions(communityId) (Pilot)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getTopUnansweredQuestions_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetTopUnansweredQuestions(communityId, filter, result) (Pilot)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.getTopUnansweredQuestions` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

:::tip Note
We provided top-five unanswered questions to selected customers through a pilot program
        that required agreement to specific terms and conditions. This pilot program is closed and
        not accepting new participants.
:::

42.0

#### Signature

`public static Void setTestGetTopUnansweredQuestions(String communityId, ConnectApi.TopUnansweredQuestionsFilterType filter, ConnectApi.FeedElementPage result)`

#### Parameters

communityId

Type: String

ID of the Experience Cloud site.

filter

Type: [`ConnectApi.FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedFilterEnum)

Specifies the filter for the feed. `UnansweredQuestionsWithCandidate​Answers` is the only valid value.

result

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getTopUnansweredQuestions(communityId, filter) (Pilot)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getTopUnansweredQuestions_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetTopUnansweredQuestions(communityId, pageSize, result) (Pilot)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.getTopUnansweredQuestions` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

:::tip Note
We provided top-five unanswered questions to selected customers through a pilot program
        that required agreement to specific terms and conditions. This pilot program is closed and
        not accepting new participants.
:::

42.0

#### Signature

`public static Void setTestGetTopUnansweredQuestions(String communityId, Integer pageSize, ConnectApi.FeedElementPage result)`

#### Parameters

communityId

Type: String

ID of the Experience Cloud site.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 0 through 10. If you pass in `null`, the default size is 5.

result

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getTopUnansweredQuestions(communityId, pageSize) (Pilot)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getTopUnansweredQuestions_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetTopUnansweredQuestions(communityId, filter, pageSize, result) (Pilot)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.getTopUnansweredQuestions` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

:::tip Note
We provided top-five unanswered questions to selected customers through a pilot program
        that required agreement to specific terms and conditions. This pilot program is closed and
        not accepting new participants.
:::

42.0

#### Signature

`public static Void setTestGetTopUnansweredQuestions(String communityId, ConnectApi.FeedFilter filter, Integer pageSize, ConnectApi.FeedElementPage result)`

#### Parameters

communityId

Type: String

ID of the Experience Cloud site.

filter

Type: [`ConnectApi.FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedFilterEnum)

Specifies the filter for the feed. `UnansweredQuestionsWithCandidate​Answers` is the only valid value.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 0 through 10. If you pass in `null`, the default size is 5.

result

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getTopUnansweredQuestions(communityId, filter, pageSize) (Pilot)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getTopUnansweredQuestions_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElements(communityId, q, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElements` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

31.0

#### Signature

`public static Void setTestSearchFeedElements(String communityId, String q, ConnectApi.FeedElementPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

result

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElements(communityId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElements_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElements(communityId, q, sortParam, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElements` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

31.0

#### Signature

`public static Void setTestSearchFeedElements(String communityId, String q, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElements(communityId, q, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElements_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElements(communityId, q, threadedCommentsCollapsed, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElements` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

44.0

#### Signature

`public static Void setTestSearchFeedElements(String communityId, String q, Boolean threadedCommentsCollapsed, ConnectApi.FeedElementPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

threadedCommentsCollapsed

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

result

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElements(communityId, q, threadedCommentsCollapsed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElements_2a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElements(communityId, q, pageParam, pageSize, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElements` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

31.0

#### Signature

`public static Void setTestSearchFeedElements(String communityId, String q, String pageParam, Integer pageSize, ConnectApi.FeedElementPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.D

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

pageParam

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

result

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElements(communityId, q, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElements_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElements(communityId, q, pageParam, pageSize, sortParam, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElements` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

31.0

#### Signature

`public static Void setTestSearchFeedElements(String communityId, String q, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElements(communityId, q, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElements_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElements(communityId, q, pageParam, pageSize, threadedCommentsCollapsed, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElements` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

44.0

#### Signature

`public static Void setTestSearchFeedElements(String communityId, String q, String pageParam, Integer pageSize, Boolean threadedCommentsCollapsed, ConnectApi.FeedElementPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

pageParam

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

threadedCommentsCollapsed

Type: Boolean

Specifies whether to return threaded comments in a collapsed style (`true`) or not (`false`). If you pass in `null`, the default is `false`.

result

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElements(communityId, q, pageParam, pageSize, threadedCommentsCollapsed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElements_4a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElements(communityId, q, recentCommentCount, pageParam, pageSize, sortParam, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElements` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

31.0

#### Signature

`public static Void setTestSearchFeedElements(String communityId, String q, Integer recentCommentCount, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElements(communityId, q, recentCommentCount, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElements_5)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElementsInFeed(communityId, feedType, q, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElementsInFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

31.0

#### Signature

`public static Void setTestSearchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String q, ConnectApi.FeedElementPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

result

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElementsInFeed(communityId, feedType, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElementsInFeed(communityId, feedType, pageParam, pageSize, sortParam, q, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElementsInFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

31.0

#### Signature

`public static Void setTestSearchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElementsInFeed(communityId, feedType, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElementsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElementsInFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

31.0

#### Signature

`public static Void setTestSearchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElementsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElementsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q, filter, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElementsInFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

32.0

#### Signature

`public static Void setTestSearchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, ConnectApi.FeedFilter filter, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

The type of feed. The only valid value is `Home`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**filter**

Type: [`ConnectApi.​FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Specifies the feed filters.

-   `AllQuestions`—Feed elements that are questions.
-   `AuthoredBy`—Feed elements authored by the user profile owner. This value is valid only for the `UserProfile` feed.
-   `CommunityScoped`—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the `UserProfile` feed.
-   `QuestionsWithCandidateAnswers`—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `QuestionsWithCandidateAnswers​ReviewedPublished`—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Read`—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the `Record` feed of a group.
-   `SolvedQuestions`—Feed elements that are questions and that have a best answer.
-   `UnansweredQuestions`—Feed elements that are questions and that don’t have any answers.
-   `UnansweredQuestionsWithCandidate​Answers`—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Unread`—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the `Record` feed of a group.
-   `UnsolvedQuestions`—Feed elements that are questions and that don’t have a best answer.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElementsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_4a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, q, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElementsInFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

31.0

#### Signature

`public static Void setTestSearchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, String q, ConnectApi.FeedElementPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessages`, `Filter`, `Landing`, `Streams`, and `Topics`.

subjectId

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feed type is `UserProfile`, subjectId can be any user ID. If feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

result

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElementsInFeed(communityId, feedType, subjectId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, q, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElementsInFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

31.0

#### Signature

`public static Void setTestSearchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessages`, `Filter`, `Landing`, `Streams`, and `Topics`.

**subjectId**

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Order of feed items in the feed.

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Search term. Searches keywords in the user or group name. A minimum of one character is required. This parameter doesn’t support wildcards. This parameter is required.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElementsInFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_5)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElementsInFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

31.0

#### Signature

`public static Void setTestSearchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessages`, `Filter`, `Landing`, `Streams`, and `Topics`.

**subjectId**

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_6)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, filter, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `searchFeedElementsInFeed` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

35.0

#### Signature

`public static Void setTestSearchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, ConnectApi.FeedFilter filter, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.UserProfile`.

**subjectId**

Type: String

ID of any user. To specify the context user, use the user ID or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

The amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

One or more keywords to search for in the feed elements visible to the context user. The search string can contain wildcards and must contain at least two characters that aren’t wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**filter**

Type: [`ConnectApi.FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Value must be `ConnectApi.FeedFilter.CommunityScoped`. Filters the feed to include only feed elements that are scoped to Experience Cloud sites. Feed elements that are always visible in all sites are filtered out. Currently, feed elements scoped to sites have a User or a Group parent record. However, other parent record types could be scoped to sites in the future.

**result**

Type: `ConnectApi.FeedElementPage`

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_6a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, customFilter, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElementsInFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestSearchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, String customFilter, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

The ID of a case.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

The amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

One or more keywords to search for in the feed elements visible to the context user. The search string can contain wildcards and must contain at least two characters that aren’t wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**customFilter**

Type: String

Custom filter that applies only to the case feed. See [customFeedFilter](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_customfeedfilter.htm "HTML (New Window)") in the *Metadata API Developer Guide* for supported values.

**result**

Type: `ConnectApi.FeedElementPage`

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, customFilter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_6b)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElementsInFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

31.0

#### Signature

`public static Void setTestSearchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, Boolean showInternalOnly, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed elements from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_7)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, filter, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElementsInFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

32.0

#### Signature

`public static Void setTestSearchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, Boolean showInternalOnly, ConnectApi.FeedFilter filter, ConnectApi.FeedElementPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

subjectId

Type: String

Any record ID, including a group ID.

recentCommentCount

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

density

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

pageParam

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

sortParam

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

showInternalOnly

Type: Boolean

Specifies whether to show only feed elements from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

filter

Type: [`ConnectApi.​FeedFilter`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Specifies the feed filters.

-   `AllQuestions`—Feed elements that are questions.
-   `AuthoredBy`—Feed elements authored by the user profile owner. This value is valid only for the `UserProfile` feed.
-   `CommunityScoped`—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the `UserProfile` feed.
-   `QuestionsWithCandidateAnswers`—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `QuestionsWithCandidateAnswers​ReviewedPublished`—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Read`—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the `Record` feed of a group.
-   `SolvedQuestions`—Feed elements that are questions and that have a best answer.
-   `UnansweredQuestions`—Feed elements that are questions and that don’t have any answers.
-   `UnansweredQuestionsWithCandidate​Answers`—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   `Unread`—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the `Record` feed of a group.
-   `UnsolvedQuestions`—Feed elements that are questions and that don’t have a best answer.

result

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_8)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, customFilter, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElementsInFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestSearchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, Boolean showInternalOnly, String customFilter, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

The ID of a case.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed elements from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**cusotmFilter**

Type: String

Custom filter that applies only to the case feed. See [customFeedFilter](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_customfeedfilter.htm "HTML (New Window)") in the *Metadata API Developer Guide* for supported values.

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, customFilter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_8a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, q, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElementsInFilterFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

31.0

#### Signature

`public static Void setTestSearchFeedElementsInFilterFeed(String communityId, String subjectId, String keyPrefix, String q, ConnectApi.FeedElementPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

keyPrefix

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

result

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFilterFeed_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam, q, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElementsInFilterFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

31.0

#### Signature

`public static Void setTestSearchFeedElementsInFilterFeed(String communityId, String subjectId, String keyPrefix, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFilterFeed_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, q, result)

Register a `ConnectApi.FeedElementPage` object to be returned when the matching `ConnectApi.searchFeedElementsInFilterFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

31.0

#### Signature

`public static Void setTestSearchFeedElementsInFilterFeed(String communityId, String subjectId, String keyPrefix, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**result**

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFilterFeed_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchStreams(communityId, q, result)

Register a `ConnectApi.ChatterStreamPage` object to be returned when the matching `ConnectApi.searchStream(communityId, q)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestSearchStreams(String communityId, String q, ConnectApi.ChatterStreamPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

result

Type: [`ConnectApi.ChatterStreamPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchStreams(communityId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchStreams_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchStreams(communityId, q, sortParam, result)

Register a `ConnectApi.ChatterStreamPage` object to be returned when the matching `ConnectApi.searchStream(communityId, q, sortParam)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestSearchStreams(String communityId, String q, ConnectApi.SortOrder sortParam, ConnectApi.ChatterStreamPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

sortParam

Type: [`ConnectApi.SortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#SortOrderEnum)

Specifies the sort order. Values are:

-   `Ascending`—Items are in ascending alphabetical order (A-Z).
-   `Descending`—Items are in descending alphabetical order (Z-A).
-   `MostRecentlyViewed`—Items are in descending chronological order by view. This sort order is valid only for Chatter feed streams.

If not specified, default value is `Ascending`.

result

Type: [`ConnectApi.ChatterStreamPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchStreams(communityId, q, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchStreams_3a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchStreams(communityId, q, pageParam, pageSize, result)

Register a `ConnectApi.ChatterStreamPage` object to be returned when the matching `ConnectApi.searchStreams(communityId, q, pageParam, pageSize)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestSearchStreams(String communityId, String q, Integer pageParam, Integer pageSize, ConnectApi.ChatterStreamPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 to 250. The default size is 25.

result

Type: [`ConnectApi.ChatterStreamPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchStreams(communityId, q, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchStreams_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchStreams(communityId, q, pageParam, pageSize, sortParam, result)

Register a `ConnectApi.ChatterStreamPage` object to be returned when the matching `ConnectApi.searchStreams(communityId, q, pageParam, pageSize, sortParam)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestSearchStreams(String communityId, String q, Integer pageParam, Integer pageSize, ConnectApi.SortOrder sortParam, ConnectApi.ChatterStreamPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 to 250. The default size is 25.

sortParam

Type: [`ConnectApi.SortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#SortOrderEnum)

Specifies the sort order. Values are:

-   `Ascending`—Items are in ascending alphabetical order (A-Z).
-   `Descending`—Items are in descending alphabetical order (Z-A).
-   `MostRecentlyViewed`—Items are in descending chronological order by view. This sort order is valid only for Chatter feed streams.

If not specified, default value is `Ascending`.

result

Type: [`ConnectApi.ChatterStreamPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchStreams(communityId, q, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchStreams_4a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchStreams(communityId, q, pageParam, pageSize, sortParam, globalScope, result)

Register a `ConnectApi.ChatterStreamPage` object to be returned when the matching `ConnectApi.searchStreams(communityId, q, pageParam, pageSize, sortParam, globalScope)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

41.0

#### Signature

`public static Void setTestSearchStreams(String communityId, String q, Integer pageParam, Integer pageSize, ConnectApi.SortOrder sortParam, Boolean globalScope, ConnectApi.ChatterStreamPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 to 250. The default size is 25.

sortParam

Type: [`ConnectApi.SortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#SortOrderEnum)

Specifies the sort order. Values are:

-   `Ascending`—Items are in ascending alphabetical order (A-Z).
-   `Descending`—Items are in descending alphabetical order (Z-A).
-   `MostRecentlyViewed`—Items are in descending chronological order by view. This sort order is valid only for Chatter feed streams.

If not specified, default value is `Ascending`.

globalScope

Type: Boolean

Specifies whether to get streams from all the context user’s Experience Cloud sites, regardless of the communityId value.

result

Type: [`ConnectApi.ChatterStreamPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")

Object containing test data.

#### Return Value

Type: Void

## Retired ChatterFeeds Methods

These methods for `ChatterFeeds` are retired.

## See Also

- [deleteFeedItem(communityId, feedItemId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_deleteFeedItem)
- [getCommentsForFeedItem(communityId, feedItemId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getCommentsForFeedItem)
- [getCommentsForFeedItem(communityId, feedItemId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getCommentsForFeedItem_2)
- [getFeedItem(communityId, feedItemId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItem)
- [getFeedItemBatch(communityId, feedItemIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemBatch_1)
- [getFeedItemsFromFeed(communityId, feedType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFeed)
- [getFeedItemsFromFeed(communityId, feedType, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFeed_2)
- [getFeedItemsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFeed_3)
- [getFeedItemsFromFeed(communityId, feedType, subjectId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFeed_4)
- [getFeedItemsFromFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFeed_5)
- [getFeedItemsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFeed_6)
- [getFeedItemsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, showInternalOnly)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFeed_7)
- [getFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFilterFeed)
- [getFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFilterFeed_2)
- [getFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFilterFeed_3)
- [getFeedItemsFromFilterFeedUpdatedSince(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, updatedSince)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFilterFeedUpdatedSince)
- [getFeedItemsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsUpdatedSince)
- [getFeedItemsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsUpdatedSince_2)
- [getFeedItemsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, showInternalOnly)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsUpdatedSince_3)
- [getFeedPoll(communityId, feedItemId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedPoll)
- [getLikesForFeedItem(communityId, feedItemId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getLikesForFeedItem)
- [getLikesForFeedItem(communityId, feedItemId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getLikesForFeedItem_2)
- [likeFeedItem(communityId, feedItemId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_likeFeedItem)
- [postComment(communityId, feedItemId, text)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postComment)
- [postComment(communityId, feedItemId, comment, feedItemFileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postComment_2)
- [postFeedElement(communityId, feedElement, feedElementFileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElement_2)
- [postFeedItem(communityId, feedType, subjectId, text)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedItem)
- [postFeedItem(communityId, feedType, subjectId, feedItemInput, feedItemFileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedItem_2)
- [searchFeedItems(communityId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItems)
- [searchFeedItems(communityId, q, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItems_2)
- [searchFeedItems(communityId, q, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItems_3)
- [searchFeedItems(communityId, q, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItems_4)
- [searchFeedItems(communityId, q, recentCommentCount, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItems_5)
- [searchFeedItemsInFeed(communityId, feedType, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFeed)
- [searchFeedItemsInFeed(communityId, feedType, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFeed_2)
- [searchFeedItemsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFeed_3)
- [searchFeedItemsInFeed(communityId, feedType, subjectId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFeed_4)
- [searchFeedItemsInFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFeed_5)
- [searchFeedItemsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFeed_6)
- [searchFeedItemsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFeed_7)
- [searchFeedItemsInFilterFeed(communityId, subjectId, keyPrefix, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFilterFeed)
- [searchFeedItemsInFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFilterFeed_2)
- [searchFeedItemsInFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFilterFeed_3)
- [shareFeedElement(communityId, subjectId, feedElementType, originalFeedElementId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_shareFeedElement)
- [shareFeedItem(communityId, feedType, subjectId, originalFeedItemId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_shareFeedItem)
- [updateBookmark(communityId, feedItemId, isBookmarkedByCurrentUser)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_updateBookmark)
- [voteOnFeedPoll(communityId, feedItemId, myChoiceId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_voteOnFeedPoll)
- [setTestGetFeedItemsFromFeed(communityId, feedType, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFeed)
- [setTestGetFeedItemsFromFeed(communityId, feedType, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFeed_2)
- [setTestGetFeedItemsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFeed_3)
- [setTestGetFeedItemsFromFeed(communityId, feedType, subjectId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFeed_4)
- [setTestGetFeedItemsFromFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFeed_5)
- [setTestGetFeedItemsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFeed_6)
- [setTestGetFeedItemsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, showInternalOnly, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFeed_7)
- [setTestGetFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFilterFeed)
- [setTestGetFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFilterFeed_2)
- [setTestGetFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFilterFeed_3)
- [setTestGetFeedItemsFromFilterFeedUpdatedSince(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, updatedSince, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFilterFeedUpdatedSince)
- [setTestGetFeedItemsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince, ConnectApi.FeedItemPage, results)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsUpdatedSince)
- [setTestGetFeedItemsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsUpdatedSince_2)
- [setTestGetFeedItemsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, showInternalOnly, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsUpdatedSince_3)
- [setTestSearchFeedItems(communityId, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectApi_ChatterFeeds_setTestSearchFeedItems)
- [setTestSearchFeedItems(communityId, q, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectApi_ChatterFeeds_setTestSearchFeedItems_2)
- [setTestSearchFeedItems(communityId, q, pageParam, pageSize, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectApi_ChatterFeeds_setTestSearchFeedItems_3)
- [setTestSearchFeedItems(communityId, q, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectApi_ChatterFeeds_setTestSearchFeedItems_4)
- [setTestSearchFeedItems(communityId, q, recentCommentCount, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectApi_ChatterFeeds_setTestSearchFeedItems_5)
- [setTestSearchFeedItemsInFeed(communityId, feedType, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFeed)
- [setTestSearchFeedItemsInFeed(communityId, feedType, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFeed_2)
- [setTestSearchFeedItemsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFeed_3)
- [setTestSearchFeedItemsInFeed(communityId, feedType, subjectId, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFeed_4)
- [setTestSearchFeedItemsInFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFeed_5)
- [setTestSearchFeedItemsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFeed_6)
- [setTestSearchFeedItemsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFeed_7)
- [setTestSearchFeedItemsInFilterFeed(communityId, subjectId, keyPrefix, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFilterFeed)
- [setTestSearchFeedItemsInFilterFeed(communityId, feedType, subjectId, keyPrefix, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFilterFeed_2)
- [setTestSearchFeedItemsInFilterFeed(communityId, feedType, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFilterFeed_3)

### deleteFeedItem(communityId, feedItemId)

Delete a feed item.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [deleteFeedElement(communityId, feedElementId)](#apex_ConnectAPI_ChatterFeeds_deleteFeedElement_1).
:::

#### Requires Chatter

Yes

#### Signature

`public static Void deleteFeedItem(String communityId, String feedItemId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedItemId

Type: String

ID for a feed item.

#### Return Value

Type: Void

### getCommentsForFeedItem(communityId, feedItemId)

Get comments for a feed item.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [getCommentsForFeedElement(communityId, feedElementId)](#apex_ConnectAPI_ChatterFeeds_getCommentsForFeedElement_1).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.CommentPage getCommentsForFeedItem(String communityId, String feedItemId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedItemId

Type: String

ID for a feed item.

#### Return Value

Type: `ConnectApi.​Comment​​Page`

### getCommentsForFeedItem(communityId, feedItemId, pageParam, pageSize)

Get a page of comments for a feed item.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [getCommentsForFeedElement(communityId, feedElementId, pageParam, pageSize)](#apex_ConnectAPI_ChatterFeeds_getCommentsForFeedElement_2).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.CommentPage getCommentsForFeedItem(String communityId, String feedItemId, String pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedItemId

Type: String

ID for a feed item.

pageParam

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

#### Return Value

Type: `ConnectApi.​Comment​​Page`

### getFeedItem(communityId, feedItemId)

Get a feed item.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElement(communityId, feedElementId)](#apex_ConnectAPI_ChatterFeeds_getFeedElement_1).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItem getFeedItem(String communityId, String feedItemId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedItemId

Type: String

ID for a feed item.

#### Return Value

Type: `ConnectApi.FeedItem`

:::tip Note
Triggers on FeedItem objects run before their attachment and capabilities information is saved, which means that `ConnectApi.FeedItem.attachment` information and `ConnectApi.FeedElement.capabilities` information may not be available in the trigger.
:::

### getFeedItemBatch(communityId, feedItemIds)

Get a list of feed items.

#### API Version

31.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElementBatch(communityId, feedElementIds)](#apex_ConnectAPI_ChatterFeeds_getFeedElementBatch_1).
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.BatchResult[] getFeedItemBatch(String communityId, List<String> feedItemIds)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedItemIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

A list of up to 500 feed item IDs.

#### Return Value

Type: [`ConnectApi.BatchResult`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm "The result of an operation returned by a batch method.")\[\]

The `ConnectApi.BatchResult.getResult()` method returns a `ConnectApi.FeedItem` object and errors for feed items that didn’t load.

#### Example

```apex
// Create a list of feed items.
ConnectApi.FeedItemPage feedItemPage = ConnectApi.ChatterFeeds.getFeedItemsFromFeed(null, ConnectApi.FeedType.Company);
System.debug(feedItemPage);

// Create a list of feed item IDs.
ListString> feedItemIds = new ListString>();
for (ConnectApi.FeedItem aFeedItem : feedItemPage.items){
    feedItemIds.add(aFeedItem.id); 
}

// Get info about the feed items in the list.
ConnectApi.BatchResult[] batchResults = ConnectApi.ChatterFeeds.getFeedItemBatch(null, feedItemIds);
    
for (ConnectApi.BatchResult batchResult : batchResults) {
    if (batchResult.isSuccess()) {
        // Operation was successful. 
        // Print the header for each feed item.
        ConnectApi.FeedItem aFeedItem;
        if(batchResult.getResult() instanceof ConnectApi.FeedItem) {
           aFeedItem = (ConnectApi.FeedItem) batchResult.getResult();
        }
        System.debug('SUCCESS');
        System.debug(aFeedItem.header.text);
    }
    else {
        // Operation failed. Print errors.
        System.debug('FAILURE');
        System.debug(batchResult.getErrorMessage());
    }
}
```

### getFeedItemsFromFeed(communityId, feedType)

Get feed items from the `Company`, `Home`, and `Moderation` feeds.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElementsFromFeed(communityId, feedType)](#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_1).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage getFeedItemsFromFeed(String communityId, ConnectApi.FeedType feedType)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedItemsFromFeed(communityId, feedType, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFeed)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedItemsFromFeed(communityId, feedType, pageParam, pageSize, sortParam)

Get a page of sorted feed items from the `Company`, `Home`, and `Moderation` feeds.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElementsFromFeed(communityId, feedType, pageParam, pageSize, sortParam)](#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_3).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage getFeedItemsFromFeed(String communityId, ConnectApi.FeedType feedType, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedItemsFromFeed(communityId, feedType, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFeed_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedItemsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam)

Get a page of sorted feed items from the `Company`, `Home`, and `Moderation` feeds. Each feed item contains no more than the specified number of comments.

#### API Version

29.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam)](#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_4).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage getFeedItemsFromFeed(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedItemsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFeed_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedItemsFromFeed(communityId, feedType, subjectId)

Get feed items from a feed for a user or record.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElementsFromFeed(communityId, feedType, subjectId)](#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_2).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage getFeedItemsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`.

subjectId

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedItemsFromFeed(communityId, feedType, subjectId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFeed_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedItemsFromFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam)

Get a page of sorted feed items from a feed for a user or record.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElementsFromFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam)](#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_5).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage getFeedItemsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`.

**subjectId**

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedItemsFromFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFeed_5)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedItemsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam)

Get a page of sorted feed items from a feed for a user or record. Each feed item includes no more than the specified number of comments.

#### API Version

29.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam)](#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_6).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage getFeedItemsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`.

**subjectId**

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedItemsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFeed_6)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedItemsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, showInternalOnly)

Get a page of sorted feed items from a record feed for a user or record. Each feed item includes no more than the specified number of comments. Specify whether to return feed items posted by internal (non-Experience Cloud site) users only.

#### API Version

30.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, showInternalOnly)](#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_7).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage getFeedItemsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, Boolean showInternalOnly)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed items from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedItemsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, showInternalOnly, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFeed_7)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix)

Get feed items from a feed filtered by a key prefix for a user.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix)](#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFilterFeed_1).
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage getFeedItemsFromFilterFeed(String communityId, String subjectId, String keyPrefix)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

keyPrefix

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFilterFeed)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam)

Get a page of sorted feed items from a feed filtered by a key prefix for a user.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam)](#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFilterFeed_2).
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage getFeedItemsFromFilterFeed(String communityId, String subjectId, String keyPrefix, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFilterFeed_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam)

Get a page of sorted feed items from a feed filtered by a key prefix for a user. Each feed item contains no more than the specified number of comments.

#### API Version

29.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam)](#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFilterFeed_3).
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage getFeedItemsFromFilterFeed(String communityId, String subjectId, String keyPrefix, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFilterFeed_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedItemsFromFilterFeedUpdatedSince(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, updatedSince)

Get a page of feed items from a feed filtered by a key prefix for a user. Include only feed items that have been updated since the time specified in the updatedSince parameter.

#### API Version

30.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElementsFromFilterFeedUpdatedSince(communityId, subjectId, keyPrefix, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince)](#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFilterFeedUpdatedSince).
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage getFeedItemsFromFilterFeedUpdatedSince(String communityId, String subjectId, String keyPrefix, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

Opaque token containing information about the last modified date of the feed. Do not construct this token. To retrieve this token, call `getFeedItemsFromFilterFeed` and take the value from the `updatesToken` property of the `ConnectApi.FeedItemPage` response body.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

This method returns only feed items that have been updated since the time specified in the updatedSince argument. A feed item is considered to be updated if it was created since the last feed request, or if `sort=LastModifiedDateDesc` and a comment was added to the feed item since the last feed request. Adding likes and topics doesn’t update a feed item.

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedItemsFromFilterFeedUpdatedSince(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, updatedSince, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFilterFeedUpdatedSince)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedItemsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince)

Get a page of feed items from the `Company`, `Home`, and `Moderation` feeds. Include only feed items that have been updated since the time specified in the updatedSince parameter. Each feed item contains no more than the specified number of comments.

#### API Version

30.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElementsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince)](#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_1).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage getFeedItemsUpdatedSince(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedItemPage` response body.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

This method returns only feed items that have been updated since the time specified in the updatedSince argument. A feed item is considered to be updated if it was created since the last feed request, or if `sort=LastModifiedDateDesc` and a comment was added to the feed item since the last feed request. Adding likes and topics doesn’t update a feed item.

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example gets the feed items in the company feed and grabs the `updatesToken` property from the returned object. It then passes the value of `updatesToken` to the `getFeedItemsUpdatedSince` method to get the feed items updated since the first call:

```apex
// Get the feed items in the company feed and return the updatesToken
String communityId = null;

// Get the feed and extract the update token
ConnectApi.FeedItemPage page = ConnectApi.ChatterFeeds.getFeedItemsFromFeed(communityId, ConnectApi.FeedType.Company); 

// page.updatesToken is opaque and has a value like '2:1384549034000'

// Get the feed items that changed since the provided updatesToken
ConnectApi.FeedItemPage feedItems= ConnectApi.ChatterFeeds.getFeedItemsUpdatedSince
  (communityId, ConnectApi.FeedType.Company, 1, ConnectApi.FeedDensity.AllUpdates, null, 1, page.updatesToken);
```

## See Also

- [setTestGetFeedItemsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince, ConnectApi.FeedItemPage, results)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsUpdatedSince)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedItemsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince)

Get a page of feed items from the `Files`, `Groups`, `News`, `People`, and `Record` feeds. Include only feed items that have been updated since the time specified in the updatedSince parameter. Each feed item contains no more than the specified number of comments.

#### API Version

30.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince)](#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_2).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage getFeedItemsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

One of these values:

-   `Files`
-   `Groups`
-   `News`
-   `People`
-   `Record`

**subjectId**

Type: String

If feedType is `ConnectApi.Record`, subjectId can be any record ID, including a group ID. Otherwise, it must be the context user or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedItemPage` response body.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

This method returns only feed items that have been updated since the time specified in the updatedSince argument. A feed item is considered to be updated if it was created since the last feed request, or if `sort=LastModifiedDateDesc` and a comment was added to the feed item since the last feed request. Adding likes and topics doesn’t update a feed item.

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example gets the feed items in the news feed and grabs the `updatesToken` property from the returned object. It then passes the value of `updatesToken` to the `getFeedItemsUpdatedSince` method to get the feed items updated since the first call:

```apex
// Get the feed items in the news feed and return the updatesToken
String communityId = null;
String subjectId = 'me';

// Get the feed and extract the update token
ConnectApi.FeedItemPage page = ConnectApi.ChatterFeeds.getFeedItemsFromFeed(communityId, ConnectApi.FeedType.News, subjectId); 

// page.updatesToken is opaque and has a value like '2:1384549034000'

// Get the feed items that changed since the provided updatesToken
ConnectApi.FeedItemPage feedItems= ConnectApi.ChatterFeeds.getFeedItemsUpdatedSince
  (communityId, ConnectApi.FeedType.News, subjectId, 1, ConnectApi.FeedDensity.AllUpdates, null, 1, page.updatesToken);
```

## See Also

- [setTestGetFeedItemsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsUpdatedSince_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedItemsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, showInternalOnly)

Get a page of feed items from a record feed. Include only feed items that have been updated since the time specified in the updatedSince parameter. Specify whether to return feed items posted by internal (non-Experience Cloud site) users only.

#### API Version

30.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElementsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, showInternalOnly)](#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_3).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage getFeedItemsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, Boolean showInternalOnly)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedItemPage` response body.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed items from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

This method returns only feed items that have been updated since the time specified in the updatedSince argument. A feed item is considered to be updated if it was created since the last feed request, or if `sort=LastModifiedDateDesc` and a comment was added to the feed item since the last feed request. Adding likes and topics doesn’t update a feed item.

If showInternalOnly is `true` and digital experiences is enabled, feed items from Experience Cloud sites are included. Otherwise, only feed items from the internal site are included.

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example gets the feed items in the news feed and grabs the `updatesToken` property from the returned object. It then passes the value of `updatesToken` to the `getFeedItemsUpdatedSince` method to get the feed items updated since the first call:

```apex
// Get the feed items in the news feed and return the updatesToken
String communityId = null;
String subjectId = 'me';

// Get the feed and extract the update token
ConnectApi.FeedItemPage page = ConnectApi.ChatterFeeds.getFeedItemsFromFeed(communityId, ConnectApi.FeedType.News, subjectId); 

// page.updatesToken is opaque and has a value like '2:1384549034000'

// Get the feed items that changed since the provided updatesToken
ConnectApi.FeedItemPage feedItems= ConnectApi.ChatterFeeds.getFeedItemsUpdatedSince
  (communityId, ConnectApi.FeedType.News, subjectId, 1, ConnectApi.FeedDensity.AllUpdates, null, 1, page.updatesToken, true);
```

## See Also

- [setTestGetFeedItemsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, showInternalOnly, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsUpdatedSince_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedPoll(communityId, feedItemId)

Get the poll associated with a feed item.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElementPoll(communityId, feedElementId)](#apex_ConnectAPI_ChatterFeeds_getFeedElementPoll_1).
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedPoll getFeedPoll(String communityId, String feedItemId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedItemId

Type: String

ID for a feed item.

#### Return Value

Type: `ConnectApi.FeedPoll`

:::tip Note
Triggers on FeedItem objects run before their attachment and capabilities information is saved, which means that `ConnectApi.FeedItem.attachment` information and `ConnectApi.FeedElement.capabilities` information may not be available in the trigger.
:::

### getLikesForFeedItem(communityId, feedItemId)

Get likes for a feed item.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [getLikesForFeedElement(communityId, feedElementId)](#apex_ConnectAPI_ChatterFeeds_getLikesForFeedElement_1).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterLikePage getLikesForFeedItem(String communityId, String feedItemId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedItemId

Type: String

ID for a feed item.

#### Return Value

Type: `ConnectApi.​Chatter​Like​Page`

### getLikesForFeedItem(communityId, feedItemId, pageParam, pageSize)

Get a page of likes for a feed item.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [getLikesForFeedElement(communityId, feedElementId, pageParam, pageSize)](#apex_ConnectAPI_ChatterFeeds_getLikesForFeedElement_2).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterLikePage getLikesForFeedItem(String communityId, String feedItemId, Integer pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedItemId

Type: String

ID for a feed item.

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

#### Return Value

Type: `ConnectApi.​Chatter​Like​Page`

### likeFeedItem(communityId, feedItemId)

Like a feed item for the context user.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [likeFeedElement(communityId, feedElementId)](#apex_ConnectAPI_ChatterFeeds_likeFeedElement).
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterLike likeFeedItem(String communityId, String feedItemId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedItemId

Type: String

ID for a feed item.

#### Return Value

Type: `ConnectApi.​Chatter​Like`

If the context user already liked the feed item, this method is a non-operation and returns the existing like.

### postComment(communityId, feedItemId, text)

Post a plain-text comment to a feed item.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [postCommentToFeedElement(communityId, feedElementId, text)](#apex_ConnectAPI_ChatterFeeds_postCommentToFeedElement_1).
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Comment postComment(String communityId, String feedItemId, String text)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedItemId

Type: String

ID for a feed item.

text

Type: String

The text of the comment. Mentions are downgraded to plain text. To include a mention that links to a user, call [`postComment(communityId, feedItemId, comment, feedItemFileUpload)`](#apex_ConnectAPI_ChatterFeeds_postComment_2 "Post a rich-text comment to a feed item. Use this method to include mentions and to attach a file to a comment.") and pass the mention in a `ConnectApi.CommentInput` object.

#### Return Value

Type: `ConnectApi.​Comment`

#### Usage

If hashtags or links are detected in text, they’re included in the comment as hashtag and link segments. Mentions aren’t detected in text and aren’t separated out of the text.

Feed items and comments can contain up to 10,000 characters.

### postComment(communityId, feedItemId, comment, feedItemFileUpload)

Post a rich-text comment to a feed item. Use this method to include mentions and to attach a file to a comment.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [postCommentToFeedElement(communityId, feedElementId, comment, feedElementFileUpload)](#apex_ConnectAPI_ChatterFeeds_postCommentToFeedElement_2).
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Comment postComment(String communityId, String feedItemId, ConnectApi.CommentInput comment, ConnectApi.BinaryInput feedItemFileUpload)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedItemId

Type: String

ID for a feed item.

comment

Type: `ConnectApi.Comment​​Input`

In the `CommentInput` object, specify rich text, including @mentions. Optionally, in the `CommentInput.attachment` property, specify an existing file or a new file

feedItemFileUpload

Type: `ConnectApi.Binary​​Input`

If you specify a `NewFileAttachmentInput` object in the `CommentInput.attachment` property, specify the new binary file to attach in this argument. Otherwise, do not specify a value.

#### Return Value

Type: `ConnectApi.​Comment`

#### Usage

Feed items and comments can contain up to 10,000 characters.

#### Sample: Posting a Comment with a New File Attachment

To post a comment and upload and attach a new file to the comment, create a `ConnectApi.CommentInput` object and a `ConnectApi.BinaryInput` object to pass to the `ConnectApi.ChatterFeeds.postComment` method.

```apex
String communityId = null;
String feedItemId = '0D5D0000000Kcd1';

ConnectApi.CommentInput input = new ConnectApi.CommentInput();
ConnectApi.MessageBodyInput messageInput = new ConnectApi.MessageBodyInput();
ConnectApi.TextSegmentInput textSegment;

textSegment = new ConnectApi.TextSegmentInput();
textSegment.text = 'Comment Text Body';

messageInput.messageSegments = new List();
messageInput.messageSegments.add(textSegment);

input.body = messageInput;

ConnectApi.NewFileAttachmentInput attachmentInput = new ConnectApi.NewFileAttachmentInput();
attachmentInput.description = 'The description of the file';
attachmentInput.title = 'contentFile.txt';
input.attachment = attachmentInput;

String fileContents = 'This is the content of the file.';
Blob fileBlob = Blob.valueOf(fileContents);
ConnectApi.BinaryInput binaryInput = new ConnectApi.BinaryInput(fileBlob, 'text/plain', 'contentFile.txt');

ConnectApi.Comment commentRep = ConnectApi.ChatterFeeds.postComment(communityId, feedItemId, input, binaryInput);
```

### postFeedElement(communityId, feedElement, feedElementFileUpload)

Post a rich-text feed element. Include mentions and hashtag topics, attach a file to a feed element, and associate action link groups with a feed element. You can also use this method to share a feed element and add a comment.

#### API Version

31.0–35.0

:::tip Important
In version 36.0 and later, this method is no longer available
            because you can’t create a feed post and upload a binary file in the same call. Upload
            files to Salesforce first, and then use `postFeedElement(communityId, feedElement)` to create the feed
            post and attach the files.
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElement postFeedElement(String communityId, ConnectApi.FeedElementInput feedElement, ConnectApi.BinaryInput feedElementFileUpload)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElement

Type: `ConnectApi.FeedElementInput`

Specify rich text, including mentions. Optionally, specify a link, a poll, an existing file, or a new file.

feedElementFileUpload

Type: `ConnectApi.Binary​​Input`

Specify the new binary file to attach to the post only if you also specify a `NewFileAttachmentInput` object in the feedElement parameter. Otherwise, pass `null`.

#### Return Value

Type: [`ConnectApi.FeedElement`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

#### Example for Posting a Feed Element with a New (Binary) File

```apex
ConnectApi.FeedItemInput input = new ConnectApi.FeedItemInput();
input.subjectId = 'me';

ConnectApi.ContentCapabilityInput contentInput = new ConnectApi.ContentCapabilityInput();
contentInput.title = 'Title';

ConnectApi.FeedElementCapabilitiesInput capabilities = new ConnectApi.FeedElementCapabilitiesInput();
capabilities.content = contentInput;

input.capabilities = capabilities;

String text = 'These are the contents of the new file.';
Blob myBlob = Blob.valueOf(text);
ConnectApi.BinaryInput binInput = new ConnectApi.BinaryInput(myBlob, 'text/plain', 'fileName');

ConnectApi.ChatterFeeds.postFeedElement(Network.getNetworkId(), input, binInput);
```

### postFeedItem(communityId, feedType, subjectId, text)

Post a plain-text feed item.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [postFeedElement(communityId, subjectId, feedElementType, text)](#apex_ConnectAPI_ChatterFeeds_postFeedElement_1).
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItem postFeedItem(String communityId, ConnectApi.FeedType feedType, String subjectId, String text)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

One of the following:

-   `News`
-   `Record`
-   `UserProfile`

Use `Record` to post to a group.

subjectId

Type: String

The value depends on the feedType:

-   `News`—ID of the context user or the keyword `me`.
-   `Record`—ID of any record with a feed, including groups.
-   `UserProfile`—ID of any user.

text

Type: String

Text of the feed item. Mentions are downgraded to plain text. To include a mention that links to the user, call the [`postFeedItem(communityId, feedType, subjectId, feedItemInput, feedItemFileUpload)`](#apex_ConnectAPI_ChatterFeeds_postFeedItem_2 "Post a rich-text feed item to a feed. Use this method to include mentions and hashtag topics and to attach a file to a feed item. You can also use this method to share a feed item and add a comment.") method and pass the mention in a `ConnectApi.FeedItemInput` object.

#### Return Value

Type: `ConnectApi.FeedItem`

:::tip Note
Triggers on FeedItem objects run before their attachment and capabilities information is saved, which means that `ConnectApi.FeedItem.attachment` information and `ConnectApi.FeedElement.capabilities` information may not be available in the trigger.
:::

#### Usage

Feed items and comments can contain up to 10,000 characters.

Posts to `ConnectApi.FeedType.UserProfile` in API versions 23.0 and 24.0 created user status updates, not feed items. For posts to the User Profile Feed in those API versions, the character limit is 1,000 characters.

### postFeedItem(communityId, feedType, subjectId, feedItemInput, feedItemFileUpload)

Post a rich-text feed item to a feed. Use this method to include mentions and hashtag topics and to attach a file to a feed item. You can also use this method to share a feed item and add a comment.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [postFeedElement(communityId, feedElement, feedElementFileUpload)](#apex_ConnectAPI_ChatterFeeds_postFeedElement_2).
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItem postFeedItem(String communityId, ConnectApi.FeedType feedType, String subjectId, ConnectApi.FeedItemInput feedItemInput, ConnectApi.BinaryInput feedItemFileUpload)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

One of the following:

-   `News`
-   `Record`
-   `UserProfile`

To post a feed item to a group, use `Record` and use a group ID as the subjectId.

subjectId

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

feedItemInput

Type: `ConnectApi.FeedItem​​Input`

In the `FeedItemInput` object, specify rich text. Optionally, in the `FeedItemInput.attachment` property, specify a link, a poll, an existing file, or a new file.

feedItemFileUpload

Type: `ConnectApi.Binary​​Input`

If you specify a `NewFileAttachmentInput` object in the `FeedItemInput.attachment` property, specify the new binary file to attach in this argument. Otherwise, do not specify a value.

#### Return Value

Type: `ConnectApi.FeedItem`

:::tip Note
Triggers on FeedItem objects run before their attachment and capabilities information is saved, which means that `ConnectApi.FeedItem.attachment` information and `ConnectApi.FeedElement.capabilities` information may not be available in the trigger.
:::

#### Usage

Feed items and comments can contain up to 10,000 characters. Posts to `ConnectApi.FeedType.UserProfile` in API versions 23.0 and 24.0 created user status updates, not feed items. For posts to the User Profile Feed in those API versions, the character limit is 1,000 characters.

#### Example for Sharing a Feed Item and Adding a Comment

To share a feed item and add a comment, create a `ConnectApi.FeedItemInput` object containing the comment and the feed item to share. Then pass the object to `ConnectApi.ChatterFeeds.postFeeditem` in the feedItemInput argument. The message segments in the message body input are used as the comment.

```apex
ConnectApi.FeedItemInput input = new ConnectApi.FeedItemInput();
input.originalFeedItemId = '0D5D0000000JuAG';

ConnectApi.MessageBodyInput body = new ConnectApi.MessageBodyInput();
List segmentList = new List();
ConnectApi.TextSegmentInput textSegment = new ConnectApi.TextSegmentInput();
textSegment.text = 'I hope you enjoy this post I found in another group.';
segmentList.add((ConnectApi.MessageSegmentInput)textSegment);
body.messageSegments = segmentList;
input.body = body;

ConnectApi.ChatterFeeds.postFeedItem(null, ConnectApi.FeedType.UserProfile, 'me', input, null);
```

#### Example for Posting a Mention to a User Profile Feed

To post to a user profile feed and include an @mention, call the `ConnectApi.ChatterFeeds.postFeedItem` method.

```apex
String communityId = null;
ConnectApi.FeedType feedType = ConnectApi.FeedType.UserProfile;

ConnectApi.FeedItemInput input = new ConnectApi.FeedItemInput();
ConnectApi.MessageBodyInput messageInput = new ConnectApi.MessageBodyInput();
ConnectApi.TextSegmentInput textSegment;
ConnectApi.MentionSegmentInput mentionSegment = new ConnectApi.MentionSegmentInput();

messageInput.messageSegments = new List();

textSegment = new ConnectApi.TextSegmentInput();
textSegment.text = 'Hey there ';
messageInput.messageSegments.add(textSegment);

mentionSegment.id = '005D0000001LLO1';
messageInput.messageSegments.add(mentionSegment);

textSegment = new ConnectApi.TextSegmentInput();
textSegment.text = '. How are you?';
messageInput.messageSegments.add(textSegment);

input.body = messageInput;

ConnectApi.FeedItem feedItemRep = ConnectApi.ChatterFeeds.postFeedItem(communityId, feedType, 'me', input, null);
```

### searchFeedItems(communityId, q)

Get the feed items that match the search criteria.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [searchFeedElements(communityId, q)](#apex_ConnectAPI_ChatterFeeds_searchFeedElements_1).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage searchFeedItems(String communityId, String q)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedItems(communityId, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectApi_ChatterFeeds_setTestSearchFeedItems)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedItems(communityId, q, sortParam)

Get the sorted feed items that match the search criteria.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [searchFeedElements(communityId, q, sortParam)](#apex_ConnectAPI_ChatterFeeds_searchFeedElements_2).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage searchFeedItems(String communityId, String q, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedItems(communityId, q, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectApi_ChatterFeeds_setTestSearchFeedItems_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedItems(communityId, q, pageParam, pageSize)

Get a page of feed items that match the search criteria.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [searchFeedElements(communityId, q, pageParam, pageSize)](#apex_ConnectAPI_ChatterFeeds_searchFeedElements_3).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage searchFeedItems(String communityId, String q, String pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

pageParam

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedItems(communityId, q, pageParam, pageSize, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectApi_ChatterFeeds_setTestSearchFeedItems_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedItems(communityId, q, pageParam, pageSize, sortParam)

Get a page of sorted feed items that match the search criteria.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [searchFeedElements(communityId, q, pageParam, pageSize, sortParam)](#apex_ConnectAPI_ChatterFeeds_searchFeedElements_4).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage searchFeedItems(String communityId, String q, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedItems(communityId, q, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectApi_ChatterFeeds_setTestSearchFeedItems_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedItems(communityId, q, recentCommentCount, pageParam, pageSize, sortParam)

Get a page of sorted feed items that match the search criteria.

#### API Version

29.0–31.0

:::tip Important
In version 32.0 and later, use [searchFeedElements(communityId, q, recentCommentCount, pageParam, pageSize, sortParam)](#apex_ConnectAPI_ChatterFeeds_searchFeedElements_5).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage searchFeedItems(String communityId, String q, Integer recentCommentCount, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedItems(communityId, q, recentCommentCount, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectApi_ChatterFeeds_setTestSearchFeedItems_5)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedItemsInFeed(communityId, feedType, q)

Get the feed items from the `Company`, `Home`, and `Moderation` feeds that match the search criteria.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [searchFeedElementsInFeed(communityId, feedType, q)](#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_1).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage searchFeedItemsInFeed(String communityId, ConnectApi.FeedType feedType, String q)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedItemsInFeed(communityId, feedType, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFeed)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedItemsInFeed(communityId, feedType, pageParam, pageSize, sortParam, q)

Get a page of sorted feed items from the `Company`, `Home`, and `Moderation` feeds that match the search criteria.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [searchFeedElementsInFeed(communityId, feedType, pageParam, pageSize, sortParam, q)](#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_3).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage searchFeedItemsInFeed(String communityId, ConnectApi.FeedType feedType, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedItemsInFeed(communityId, feedType, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFeed_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedItemsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q)

Get a page of sorted feed items from the `Company`, `Home`, and `Moderation` feeds that match the search criteria. Each feed item includes no more than the specified number of comments.

#### API Version

29.0–31.0

:::tip Important
In version 32.0 and later, use [searchFeedElementsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q)](#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_4).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage searchFeedItemsInFeed(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedItemsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFeed_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedItemsInFeed(communityId, feedType, subjectId, q)

Get the feed items from a feed that match the search criteria.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [searchFeedElementsInFeed(communityId, feedType, subjectId, q)](#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_2).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage searchFeedItemsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, String q)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessages`, `Filter`, `Landing`, and `Streams`.

subjectId

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feed type is `UserProfile`, subjectId can be any user ID. If feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedItemsInFeed(communityId, feedType, subjectId, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFeed_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedItemsInFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, q)

Get a page of sorted feed items from a feed for a user or record that match the search criteria.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [searchFeedElementsInFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, q)](#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_5).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage searchFeedItemsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessages`, `Filter`, `Landing`, and `Streams`.

**subjectId**

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Order of feed items in the feed.

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Search term. Searches keywords in the user or group name. A minimum of one character is required. This parameter doesn’t support wildcards. This parameter is required.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedItemsInFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFeed_5)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedItemsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q)

Get a page of sorted feed items from a feed that match the search criteria. Each feed item includes no more than the specified number of comments.

#### API Version

29.0–31.0

:::tip Important
In version 32.0 and later, use [searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q)](#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_6).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage searchFeedItemsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessages`, `Filter`, `Landing`, and `Streams`.

**subjectId**

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedItemsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFeed_6)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedItemsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly)

Get a page of sorted feed items from a feed for a user or record that match the search criteria. Each feed item includes no more than the specified number of comments. Specify whether to return feed items posted by internal (non-Experience Cloud site) users only.

#### API Version

30.0–31.0

:::tip Important
In version 32.0 and later, use [searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly)](#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_7).
:::

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage searchFeedItemsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, Boolean showInternalOnly)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be `ConnectApi.FeedType.Record`.

**subjectId**

Type: String

Any record ID, including a group ID.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed items from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedItemsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFeed_7)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedItemsInFilterFeed(communityId, subjectId, keyPrefix, q)

Get the feed items that match the search criteria from a feed filtered by a key prefix for a user.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [searchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, q)](#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFilterFeed_1).
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage searchFeedItemsInFilterFeed(String communityId, String subjectId, String keyPrefix, String q)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

keyPrefix

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedItemsInFilterFeed(communityId, subjectId, keyPrefix, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFilterFeed)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedItemsInFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam, q)

Get a page of sorted feed items that match the search criteria from a feed filtered by a key prefix for a user.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [searchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam, q)](#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFilterFeed_2).
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage searchFeedItemsInFilterFeed(String communityId, String subjectId, String keyPrefix, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedItemsInFilterFeed(communityId, feedType, subjectId, keyPrefix, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFilterFeed_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchFeedItemsInFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, q)

Get a page of sorted feed items that match the search criteria from a feed filtered by a key prefix for a user. Each feed item includes no more than the specified number of comments.

#### API Version

29.0–31.0

:::tip Important
In version 32.0 and later, use [searchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, q)](#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFilterFeed_3).
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage searchFeedItemsInFilterFeed(String communityId, String subjectId, String keyPrefix, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchFeedItemsInFilterFeed(communityId, feedType, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFilterFeed_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### shareFeedElement(communityId, subjectId, feedElementType, originalFeedElementId)

Share the originalFeedElementId as the context user.

#### API Version

31.0–38.0

:::tip Important
In version 39.0 and later, use `postFeedElement(communityId, feedElement)` or `updateFeedElement(communityId, feedElementId, feedElement)` with the `ConnectApi.FeedEntityShareCapabilityInput` to
            share a feed entity with a feed element.
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElement shareFeedElement(String communityId, String subjectId, ConnectApi.FeedElementType feedElementType, String originalFeedElementId)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

The ID of the user or group with whom to share the feed element.

**feedElementType**

Type: [`ConnectApi.​FeedElement​Type`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedElementTypeEnum)

Values are:

-   `Bundle`—A container of feed elements. A bundle also has a body made up of message segments that can always be gracefully degraded to text-only values.
-   `FeedItem`—A feed item has a single parent and is scoped to oneExperience Cloud site or across all Experience Cloud sites. A feed item can have capabilities such as bookmarks, canvas, content, comment, link, poll. Feed items have a body made up of message segments that can always be gracefully degraded to text-only values.
-   `Recommendation`—A recommendation is a feed element with a recommendations capability. A recommendation suggests records to follow, groups to join, or applications that are helpful to the context user.

**originalFeedElementId**

Type: String

The ID of the feed element to share.

#### Return Value

Type: [`ConnectApi.FeedElement`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

#### Example

```apex
ConnectApi.ChatterFeeds.shareFeedElement(null, '0F9RR0000004CPw', ConnectApi.FeedElementType.FeedItem, '0D5RR0000004Gxc');
```

### shareFeedItem(communityId, feedType, subjectId, originalFeedItemId)

Share the originalFeedItemId to the feed specified by the feedType.

#### API Version

28.0–31.0

:::tip Important
- In version 32.0–38.0, use `shareFeedElement(communityId, subjectId, feedElementType, originalFeedElementId)`.

          - In version 39.0 and later, use `postFeedElement(communityId, feedElement)` or `updateFeedElement(communityId, feedElementId, feedElement)` with the
              `ConnectApi.FeedEntityShareCapabilityInput`.
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItem shareFeedItem(String communityId, ConnectApi.FeedType feedType, String subjectId, String originalFeedItemId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

One of the following:

-   `News`
-   `Record`
-   `UserProfile`

To share a feed item with a group, use `Record` and use a group ID as the subjectId.

subjectId

Type: String

The value depends on the value of feedType:

-   `News`—subjectId must be the ID of the context user or the keyword `me`.
-   `Record`—subjectId can be a group ID or the ID of the context user (or `me`).
-   `UserProfile`—subjectId can be any user ID.

originalFeedItemId

Type: String

The ID of the feed item to share.

#### Return Value

Type: `ConnectApi.FeedItem`

#### Example

To share a feed item with a group, pass in the Experience Cloud site ID (or `null`), the feed type `Record`, the group ID, and the ID of the feed item to share.

```apex
ConnectApi.ChatterFeeds.shareFeedItem(null, ConnectApi.FeedType.Record, '0F9D00000000izf', '0D5D0000000JuAG');
```

### updateBookmark(communityId, feedItemId, isBookmarkedByCurrentUser)

Bookmark a feed item or remove a bookmark from a feed item.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [updateFeedElementBookmarks(communityId, feedElementId, bookmarks)](#apex_ConnectAPI_ChatterFeeds_updateFeedElementBookmarks_1) or
                              [updateFeedElementBookmarks(communityId, feedElementId, isBookmarkedByCurrentUser)](#apex_ConnectAPI_ChatterFeeds_updateFeedElementBookmarks_2).
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItem updateBookmark(String communityId, String feedItemId, Boolean isBookmarkedByCurrentUser)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedItemId

Type: String

ID for a feed item.

isBookmarkedByCurrentUser

Type: Boolean

—Specifying `true` adds the feed item to the list of bookmarks for the context user. Specify `false` to remove a bookmark.

#### Return Value

Type: `ConnectApi.FeedItem`

### voteOnFeedPoll(communityId, feedItemId, myChoiceId)

Vote or change your vote on a feed poll.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [voteOnFeedElementPoll(communityId, feedElementId, myChoiceId)](#apex_ConnectAPI_ChatterFeeds_voteOnFeedElementPoll_1).
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedPoll voteOnFeedPoll(String communityId, String feedItemId, String myChoiceId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedItemId

Type: String

ID of the feed item that is associated with the poll.

myChoiceId

Type: String

ID of the item in the poll you’re voting for.

#### Return Value

Type: `ConnectApi.FeedPoll`

### setTestGetFeedItemsFromFeed(communityId, feedType, result)

Register a `ConnectApi.FeedItemPage` object to be returned when `getFeedItems​FromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

28.0–31.0

#### Signature

`public static Void setTestGetFeedItemsFromFeed(String communityId, ConnectApi.FeedType feedType, ConnectApi.FeedItemPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

result

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedItemsFromFeed(communityId, feedType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFeed)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedItemsFromFeed(communityId, feedType, pageParam, pageSize, sortParam, result)

Register a `ConnectApi.FeedItemPage` object to be returned when `getFeedItems​FromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

28.0–31.0

#### Signature

`public static Void setTestGetFeedItemsFromFeed(String communityId, ConnectApi.FeedType feedType, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedItemsFromFeed(communityId, feedType, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFeed_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedItemsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, result)

Register a `ConnectApi.FeedItemPage` object to be returned when `getFeedItems​FromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

29.0–31.0

#### Signature

`public static Void setTestGetFeedItemsFromFeed(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedItemsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFeed_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedItemsFromFeed(communityId, feedType, subjectId, result)

Register a `ConnectApi.FeedItemPage` object to be returned when `getFeedItems​FromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

28.0–31.0

#### Signature

`public static Void setTestGetFeedItemsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, ConnectApi.FeedItemPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`.

subjectId

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

result

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedItemsFromFeed(communityId, feedType, subjectId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFeed_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedItemsFromFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, result)

Register a `ConnectApi.FeedItemPage` object to be returned when `getFeedItems​FromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

28.0–31.0

#### Signature

`public static Void setTestGetFeedItemsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`.

**subjectId**

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedItemsFromFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFeed_5)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedItemsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, result)

Register a `ConnectApi.FeedItemPage` object to be returned when `getFeedItems​FromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

29.0–31.0

#### Signature

`public static Void setTestGetFeedItemsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`.

**subjectId**

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedItemsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFeed_6)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedItemsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, showInternalOnly, result)

Register a `ConnectApi.FeedItemPage` object to be returned when `getFeedItems​FromFeed` is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

30.0–31.0

#### Signature

`public static Void setTestGetFeedItemsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, Boolean showInternalOnly, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`.

**subjectId**

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed items from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedItemsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, showInternalOnly)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFeed_7)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix, result)

Register a `ConnectApi.FeedItemPage` object to be returned when the matching `getFeedItems​​FromFilterFeed` method is called in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

28.0–31.0

#### Signature

`public static Void setTestGetFeedItemsFromFilterFeed(String communityId, String subjectId, String keyPrefix, ConnectApi.FeedItemPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

keyPrefix

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

result

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFilterFeed)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam, result)

Register a `ConnectApi.FeedItemPage` object to be returned when the matching `getFeedItems​​FromFilterFeed` method is called in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

28.0–31.0

#### Signature

`public static Void setTestGetFeedItemsFromFilterFeed(String communityId, String subjectId, String keyPrefix, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFilterFeed_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, result)

Register a `ConnectApi.FeedItemPage` object to be returned when the matching `getFeedItems​​FromFilterFeed` method is called in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

29.0–31.0

#### Signature

`public static Void setTestGetFeedItemsFromFilterFeed(String communityId, String subjectId, String keyPrefix, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFilterFeed_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedItemsFromFilterFeedUpdatedSince(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, updatedSince, result)

Register a `ConnectApi.FeedItemPage` object to be returned when the `getFeedItemsFromFilterFeedUpdatedSince` method is called in a test context.

#### API Version

30.0–31.0

#### Signature

`public static Void setTestGetFeedItemsFromFilterFeedUpdatedSince(String communityId, String subjectId, String keyPrefix, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String updatedSince, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**updatedSince**

Type: String

Opaque token containing information about the last modified date of the feed. Do not construct this token. To retrieve this token, call `getFeedItemsFromFilterFeed` and take the value from the `updatesToken` property of the `ConnectApi.FeedItemPage` response body.

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedItemsFromFilterFeedUpdatedSince(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, updatedSince)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFilterFeedUpdatedSince)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedItemsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince, ConnectApi.FeedItemPage, results)

Register a `ConnectApi.FeedItemPage` object to be returned when `getFeedItems​UpdatedSince` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

30.0–31.0

#### Signature

`public static Void setTestGetFeedItemsUpdatedSince(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, ConnectApi.FeedItemPage results)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedItemPage` response body.

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedItemsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsUpdatedSince)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedItemsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, result)

Register a `ConnectApi.FeedItemPage` object to be returned when `getFeedItems​UpdatedSince` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

30.0–31.0

#### Signature

`public static Void setTestGetFeedItemsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

One of these values:

-   `Files`
-   `Groups`
-   `News`
-   `People`
-   `Record`

**subjectId**

Type: String

If feedType is `ConnectApi.Record`, subjectId can be any record ID, including a group ID. Otherwise, it must be the context user or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedItemPage` response body.

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedItemsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsUpdatedSince_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedItemsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, showInternalOnly, result)

Register a `ConnectApi.FeedItemPage` object to be returned when `getFeedItems​UpdatedSince` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

30.0–31.0

#### Signature

`public static Void setTestGetFeedItemsUpdatedSince(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, Boolean showInternalOnly, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

One of these values:

-   `Files`
-   `Groups`
-   `News`
-   `People`
-   `Record`

**subjectId**

Type: String

If feedType is `ConnectApi.Record`, subjectId can be any record ID, including a group ID. Otherwise, it must be the context user or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**updatedSince**

Type: String

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the `updatesToken` property of the `ConnectApi.FeedItemPage` response body.

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed items from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedItemsUpdatedSince(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, updatedSince, showInternalOnly)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsUpdatedSince_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedItems(communityId, q, result)

Register a test feed item page to be returned when `searchFeedItems(communityId, q)` is called during a test.

#### API Version

28.0–31.0

#### Signature

`public static Void searchFeedItems(String communityId, String q, ConnectApi.FeedItemPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

result

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedItems(communityId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItems)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedItems(communityId, q, sortParam, result)

Register a test feed item page to be returned when `searchFeedItems(String, String, ConnectApi.FeedSortOrder)` is called during a test.

#### API Version

28.0–31.0

#### Signature

`public static Void setTestSearchFeedItems(String communityId, String q, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

The feed item test page.

#### Return Value

Type: Void

## See Also

- [searchFeedItems(communityId, q, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItems_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedItems(communityId, q, pageParam, pageSize, result)

Register a test feed item page to be returned when `searchFeedItems(String, String, String, Integer)` is called during a test.

#### API Version

28.0–31.0

#### Signature

`public static Void setTestSearchFeedItems(String communityId, String q, String pageParam, Integer pageSize, ConnectApi.FeedItemPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

pageParam

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

result

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

The test feed item page.

#### Return Value

Type: Void

## See Also

- [searchFeedItems(communityId, q, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItems_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedItems(communityId, q, pageParam, pageSize, sortParam, result)

Register a test feed item page to be returned when `searchFeedItems(String, String, String, Integer, ConnectApi.FeedSortOrder)` is called during a test.

#### API Version

28.0–31.0

#### Signature

`public static Void setTestSearchFeedItems(String communityId, String q, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

The test feed item page.

#### Return Value

Type: Void

## See Also

- [searchFeedItems(communityId, q, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItems_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedItems(communityId, q, recentCommentCount, pageParam, pageSize, sortParam, result)

Register a test feed item page to be returned when `searchFeedItems(communityId, q, recentCommentCount, pageParam, pageSize, sortParam)` is called during a test.

#### API Version

29.0–31.0

#### Signature

`public static Void setTestSearchFeedItems(String communityId, String q, Integer recentCommentCount, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

The test feed item page.

#### Return Value

Type: Void

## See Also

- [searchFeedItems(communityId, q, recentCommentCount, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItems_5)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedItemsInFeed(communityId, feedType, q, result)

Register a `ConnectApi.FeedItemPage` object to be returned when the matching `ConnectApi.searchFeedItemsInFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

28.0–31.0

#### Signature

`public static Void setTestSearchFeedItemsInFeed(String communityId, ConnectApi.FeedType feedType, String q, ConnectApi.FeedItemPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are `Company`, `DirectMessageModeration`, `DirectMessages`, `Home`, `Isolated`, `Moderation`, and `PendingReview`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

result

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedItemsInFeed(communityId, feedType, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFeed)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedItemsInFeed(communityId, feedType, pageParam, pageSize, sortParam, q, result)

Register a `ConnectApi.FeedItemPage` object to be returned when the matching `ConnectApi.searchFeedItemsInFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

28.0–31.0

#### Signature

`public static Void setTestSearchFeedItemsInFeed(String communityId, ConnectApi.FeedType feedType, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedItemsInFeed(communityId, feedType, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFeed_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedItemsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q, result)

Register a `ConnectApi.FeedItemPage` object to be returned when the matching `ConnectApi.searchFeedItemsInFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0–31.0

#### Signature

`public static Void setTestSearchFeedItemsInFeed(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedItemsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFeed_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedItemsInFeed(communityId, feedType, subjectId, q, result)

Register a `ConnectApi.FeedItemPage` object to be returned when the matching `ConnectApi.searchFeedItemsInFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

28.0–31.0

#### Signature

`public static Void setTestSearchFeedItemsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, String q, ConnectApi.FeedItemPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedType

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessages`, `Filter`, `Landing`, and `Streams`.

subjectId

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

result

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedItemsInFeed(communityId, feedType, subjectId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFeed_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedItemsInFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, q, result)

Register a `ConnectApi.FeedItemPage` object to be returned when the matching `ConnectApi.searchFeedItemsInFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

28.0–31.0

#### Signature

`public static Void setTestSearchFeedItemsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessages`, `Filter`, `Landing`, and `Streams`.

**subjectId**

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedItemsInFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFeed_5)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedItemsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, result)

Register a `ConnectApi.FeedItemPage` object to be returned when the matching `ConnectApi.searchFeedItemsInFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0–31.0

#### Signature

`public static Void setTestSearchFeedItemsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessages`, `Filter`, `Landing`, and `Streams`.

**subjectId**

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedItemsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFeed_6)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedItemsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, result)

Register a `ConnectApi.FeedItemPage` object to be returned when the matching `ConnectApi.searchFeedItemsInFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0–31.0

#### Signature

`public static Void setTestSearchFeedItemsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, Boolean showInternalOnly, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessages`, `Filter`, `Landing`, and `Streams`.

**subjectId**

Type: String

If feedType is `Record`, subjectId can be any record ID, including a group ID. If feedType is `Streams`, subjectId must be a stream ID. If feedType is `Topics`, subjectId must be a topic ID. If feedType is `UserProfile`, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias `me`.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.​FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**showInternalOnly**

Type: Boolean

Specifies whether to show only feed items from internal (non-Experience Cloud site) users (`true`), or not (`false`). The default value is `false`.

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [searchFeedItemsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFeed_7)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedItemsInFilterFeed(communityId, subjectId, keyPrefix, q, result)

Register a `ConnectApi.FeedItemPage` object to be returned when the matching `ConnectApi.searchFeedItemsInFilterFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

28.0–31.0

#### Signature

`public static Void setTestSearchFeedItemsInFilterFeed(String communityId, String subjectId, String keyPrefix, String q, ConnectApi.FeedItemPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

keyPrefix

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

result

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Specify the test feed item page.

#### Return Value

Type: Void

## See Also

- [searchFeedItemsInFilterFeed(communityId, subjectId, keyPrefix, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFilterFeed)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedItemsInFilterFeed(communityId, feedType, subjectId, keyPrefix, pageParam, pageSize, sortParam, q, result)

Register a `ConnectApi.FeedItemPage` object to be returned when the matching `ConnectApi.searchFeedItemsInFilterFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

28.0–31.0

#### Signature

`public static Void setTestSearchFeedItemsInFilterFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, String keyPrefix, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.​FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Specify the test feed item page.

#### Return Value

Type: Void

## See Also

- [searchFeedItemsInFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFilterFeed_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchFeedItemsInFilterFeed(communityId, feedType, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, q, result)

Register a `ConnectApi.FeedItemPage` object to be returned when the matching `ConnectApi.searchFeedItemsInFilterFeed` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0–31.0

#### Signature

`public static Void setTestSearchFeedItemsInFilterFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, String keyPrefix, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**feedType**

Type: [`ConnectApi.FeedType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every `ConnectApi.FeedType` except `Company`, `DirectMessageModeration`, `DirectMessages`, `Filter`, `Home`, `Isolated`, `Landing`, `Moderation`, and `PendingReview`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**keyPrefix**

Type: String

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**density**

Type: [`ConnectApi.FeedDensity`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   `AllUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   `FewerUpdates`—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.​FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**q**

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Specify the test feed item page.

#### Return Value

Type: Void

## See Also

- [searchFeedItemsInFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFilterFeed_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
