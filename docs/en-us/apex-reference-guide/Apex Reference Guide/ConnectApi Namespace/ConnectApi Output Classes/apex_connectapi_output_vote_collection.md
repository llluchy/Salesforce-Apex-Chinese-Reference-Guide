---
doc_id: "apex_connectapi_output_vote_collection"
---

# ConnectApi.VotePage

A page of upvotes or downvotes on a feed element or comment.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `currentPageToken` | Integer | Token identifying the current page. | 42.0 |
| `currentPageUrl` | String | Connect REST API URL identifying the current page. | 42.0 |
| `items` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​Vote`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_vote.htm#apex_connectapi_output_vote "An upvote or downvote on a feed element or comment.")\> | Collection of users and their upvotes or downvotes.
Upvotes include likes and upvotes. For example, if a post receives five likes and three upvotes, the number of upvotes is eight. For this reason, the collection of users and their upvotes also includes users who liked the post or comment. If a user both liked and upvoted a post, they appear only once in the collection.

 | 42.0 |
| `nextPageToken` | Integer | Token identifying the next page, or `null` if there isn’t a next page. | 42.0 |
| `nextPageUrl` | String | Connect REST API URL identifying the next page, or `null` if there isn’t a next page. | 42.0 |
| `previousPageToken` | Integer | Token identifying the previous page, or `null` if there isn’t a previous page. | 42.0 |
| `previousPageUrl` | String | Connect REST API URL identifying the previous page, or `null` if there isn’t a previous page. | 42.0 |
| `total` | Long | Total number of upvotes or downvotes for the feed element or comment.

The number of upvotes includes the number of likes and upvotes. For example, if a post receives five likes and three upvotes, the total number of upvotes is eight. If a user both liked and upvoted a post, we count that as two upvotes.

 | 42.0 |
