---
doc_id: "apex_connectapi_output_user_activity_collection"
---

# ConnectApi.UserActivityCollection

User activity collection.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `activityType` | String | Type of user activity. Values are:
-   `Bookmark`—User bookmarked a post.
-   `ChatterActivity`—Total counts of posts and comments made and likes and comments received for a user.
-   `ChatterLike`—User liked a post or comment.
-   `Comment`—User commented on a post.
-   `CompanyVerify`—User verified comment.
-   `DownVote`—User downvoted a post or comment.
-   `FeedEntityRead`—User read a post.
-   `FeedRead`—User read a feed.
-   `Mute`—User muted a post.
-   `Post`—User made a post.
-   `TopicEndorsement`—User endorsed another user on a topic or received endorsement on a topic.
-   `UpVote`—User upvoted a post or comment.

 | 42.0 |
| `userActivities` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​UserActivity​Summary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_user_activity_summary.htm#apex_connectapi_output_abstract_user_activity_summary "User activity summary.")\> | Collection of user activities. | 42.0 |

## See Also

- [ConnectApi.UserActivitiesJob](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_activities_job.htm)
