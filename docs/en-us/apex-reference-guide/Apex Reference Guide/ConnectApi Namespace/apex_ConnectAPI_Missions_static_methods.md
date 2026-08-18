---
doc_id: "apex_ConnectAPI_Missions_static_methods"
---

# Missions Class

Export and purge mission activity for users. Get a user’s mission progress. Update mission activity counts for users.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Missions Methods

These methods are for `Missions`. All methods are static.

All methods in this class require Chatter and are subject to the per user, per namespace, per hour rate limit.

## See Also

- [exportUserMissionsActivities(communityId, userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Missions_static_methods.htm#apex_ConnectAPI_Missions_exportUserMissionsActivities_1)
- [getUserMissionsProgress(communityId, userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Missions_static_methods.htm#apex_ConnectAPI_Missions_userMissionsProgress_1)
- [purgeUserMissionsActivities(communityId, userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Missions_static_methods.htm#apex_ConnectAPI_Missions_purgeUserMissionsActivities_1)
- [purgeUserMissionsActivities(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Missions_static_methods.htm#apex_ConnectAPI_Missions_purgeUserMissionsActivities_2)
- [updateUserMissionActivityCount(activityType, activityCount, communityId, userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Missions_static_methods.htm#apex_ConnectAPI_Missions_updateUserActivityCount_1)

### exportUserMissionsActivities(communityId, userId)

Export mission activity for a user.

#### API Version

45.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.UserMissionActivitiesJob exportUserMissionsActivities(String communityId, String userId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

userId

Type: String

ID of the user.

#### Return Value

Type: [`ConnectApi.UserMissionActivitiesJob`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_mission_activities_job.htm "User mission activities job.")

#### Usage

You can export these activities with this method.

-   `FeedItemAnswerAQuestion`—User answered a question.
-   `FeedItemLikeSomething`—User liked a post or comment.
-   `FeedItemMarkAnswerAsBest`—User marked an answer as the best answer.
-   `FeedItemPostQuestion`—User posted a question.
-   `FeedItemReceiveAComment`—User received a comment on a post.
-   `FeedItemReceiveALike`—User received a like on a post or comment.
-   `FeedItemReceiveAnAnswer`—User received an answer to a question.
-   `FeedItemWriteAComment`—User commented on a post.
-   `FeedItemWriteAPost`—User made a post.
-   `FeedItemYourAnswerMarkedBest`—​User’s answer was marked as the best answer.

### getUserMissionsProgress(communityId, userId)

Get mission activity progress for a user.

#### API Version

46.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.UserMissionActivityCollection getUserMissionsProgress(String communityId, String userId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

userId

Type: String

ID of the user.

#### Return Value

Type: `ConnectApi.UserMissionActivityCollection`

### purgeUserMissionsActivities(communityId, userId)

Start a job to purge mission activity for a user.

#### API Version

45.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.UserMissionActivitiesJob purgeUserMissionsActivities(String communityId, String userId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

userId

Type: String

ID of the user.

#### Return Value

Type: [`ConnectApi.UserMissionActivitiesJob`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_mission_activities_job.htm "User mission activities job.")

#### Usage

This method purges these activities.

-   `FeedItemAnswerAQuestion`—User answered a question.
-   `FeedItemLikeSomething`—User liked a post or comment.
-   `FeedItemMarkAnswerAsBest`—User marked an answer as the best answer.
-   `FeedItemPostQuestion`—User posted a question.
-   `FeedItemReceiveAComment`—User received a comment on a post.
-   `FeedItemReceiveALike`—User received a like on a post or comment.
-   `FeedItemReceiveAnAnswer`—User received an answer to a question.
-   `FeedItemWriteAComment`—User commented on a post.
-   `FeedItemWriteAPost`—User made a post.
-   `FeedItemYourAnswerMarkedBest`—​User’s answer was marked as the best answer.

### purgeUserMissionsActivities(communityId)

Start a job to purge mission activity for all users.

#### API Version

49.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.UserMissionActivitiesJob purgeUserMissionsActivities(String communityId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

#### Return Value

Type: [`ConnectApi.UserMissionActivitiesJob`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_mission_activities_job.htm "User mission activities job.")

#### Usage

This method purges these activities.

-   `FeedItemAnswerAQuestion`—User answered a question.
-   `FeedItemLikeSomething`—User liked a post or comment.
-   `FeedItemMarkAnswerAsBest`—User marked an answer as the best answer.
-   `FeedItemPostQuestion`—User posted a question.
-   `FeedItemReceiveAComment`—User received a comment on a post.
-   `FeedItemReceiveALike`—User received a like on a post or comment.
-   `FeedItemReceiveAnAnswer`—User received an answer to a question.
-   `FeedItemWriteAComment`—User commented on a post.
-   `FeedItemWriteAPost`—User made a post.
-   `FeedItemYourAnswerMarkedBest`—​User’s answer was marked as the best answer.

### updateUserMissionActivityCount(activityType, activityCount, communityId, userId)

Update the mission activity count for a user.

#### API Version

45.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.UserMissionActivityStatus updateUserMissionActivityCount(ConnectApi.UserMissionActivityType activityType, Integer activityCount, String communityId, String userId)`

#### Parameters

**activityType**

Type: [`ConnectApi.UserMissionActivityType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#userMissionActivityTypeEnum)

Type of mission activity for a user. Values are:

-   `FeedItemAnswerAQuestion`—User answered a question.
-   `FeedItemLikeSomething`—User liked a post or comment.
-   `FeedItemMarkAnswerAsBest`—User marked an answer as the best answer.
-   `FeedItemPostQuestion`—User posted a question.
-   `FeedItemReceiveAComment`—User received a comment on a post.
-   `FeedItemReceiveALike`—User received a like on a post or comment.
-   `FeedItemReceiveAnAnswer`—User received an answer to a question.
-   `FeedItemWriteAComment`—User commented on a post.
-   `FeedItemWriteAPost`—User made a post.
-   `FeedItemYourAnswerMarkedBest`—​User’s answer was marked as the best answer.

**activityCount**

Type: Integer

Number of mission activities of the specified type for the user.

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**userId**

Type: String

ID of the user.

#### Return Value

Type: [`ConnectApi.UserMissionActivityStatus`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_mission_activity_output.htm "Status of mission activity for a user.")
