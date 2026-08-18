---
doc_id: "apex_ConnectAPI_Recommendations_static_methods"
---

# Recommendations Class

Get and reject Chatter, custom, and static recommendations. Create, get, update, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

For Next Best Action recommendations, see [NextBestAction Class](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NextBestAction_static_methods.htm#apex_ConnectAPI_NextBestAction_static_methods "Execute recommendation strategies, get recommendations, manage recommendation reactions.").

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Recommendations Methods

These methods are for `Recommendations`. All methods are static.

All methods in this class require Chatter and are subject to the per user, per namespace, per hour rate limit.

## See Also

- [createRecommendationAudience(communityId, recommendationAudience)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_createRecommendationAudience_3)
- [createRecommendationAudience(communityId, name)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_createRecommendationAudience_4)
- [createRecommendationDefinition(communityId, recommendationDefinition)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_createRecommendationDefinition_2)
- [createRecommendationDefinition(communityId, name, title, actionUrl, actionUrlName, explanation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_createRecommendationDefinition_3)
- [createScheduledRecommendation(communityId, scheduledRecommendation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_createScheduledRecommendation_2)
- [createScheduledRecommendation(communityId, recommendationDefinitionId, rank, enabled, recommendationAudienceId, channel)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_createScheduledRecommendation_3a)
- [deleteRecommendationAudience(communityId, recommendationAudienceId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_deleteRecommendationAudience_1)
- [deleteRecommendationDefinition(communityId, recommendationDefinitionId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_deleteRecommendationDefinition_1)
- [deleteRecommendationDefinitionPhoto(communityId, recommendationDefinitionId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_deleteRecommendationDefinitionPhoto_1)
- [deleteScheduledRecommendation(communityId, scheduledRecommendationId, deleteDefinitionIfLast)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_deleteScheduledRecommendation_1)
- [getRecommendationAudience(communityId, recommendationAudienceId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationAudience_2)
- [getRecommendationAudienceMembership(communityId, recommendationAudienceId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationAudienceMembership_1)
- [getRecommendationAudienceMembership(communityId, recommendationAudienceId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationAudienceMembership_2)
- [getRecommendationAudiences(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationAudiences_1)
- [getRecommendationAudiences(communityId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationAudiences_2)
- [getRecommendationDefinition(communityId, recommendationDefinitionId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationDefinition_2)
- [getRecommendationDefinitionPhoto(communityId, recommendationDefinitionId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationDefinitionPhoto_2)
- [getRecommendationDefinitions(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationDefinitions_1)
- [getRecommendationForUser(communityId, userId, action, objectId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationForUser_2)
- [getRecommendationsForUser(communityId, userId, contextAction, contextObjectId, channel, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationsForUser_1a)
- [getRecommendationsForUser(communityId, userId, action, contextAction, contextObjectId, channel, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationsForUser_2a)
- [getRecommendationsForUser(communityId, userId, action, objectCategory, contextAction, contextObjectId, channel, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationsForUser_3a)
- [getScheduledRecommendation(communityId, scheduledRecommendationId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getScheduledRecommendation_2)
- [getScheduledRecommendations(communityId, channel)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getScheduledRecommendations_1a)
- [rejectRecommendationForUser(communityId, userId, action, objectId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_rejectRecommendationForUser_1)
- [rejectRecommendationForUser(communityId, userId, action, objectEnum)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_rejectRecommendationForUser_2)
- [updateRecommendationAudience(communityId, recommendationAudienceId, recommendationAudience)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_updateRecommendationAudience_3)
- [updateRecommendationDefinition(communityId, recommendationDefinitionId, name, title, actionUrl, actionUrlName, explanation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_updateRecommendationDefinition_4)
- [updateRecommendationDefinition(communityId, recommendationDefinitionId, recommendationDefinition)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_updateRecommendationDefinition_3)
- [updateRecommendationDefinitionPhoto(communityId, recommendationDefinitionId, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_updateRecommendationDefinitionPhoto_3)
- [updateRecommendationDefinitionPhoto(communityId, recommendationDefinitionId, fileId, versionNumber)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_updateRecommendationDefinitionPhoto_4)
- [updateRecommendationDefinitionPhotoWithAttributes(communityId, recommendationDefinitionId, photo)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_updateRecommendationDefinitionPhotoWithAttributes_5)
- [updateRecommendationDefinitionPhotoWithAttributes(communityId, recommendationDefinitionId, photo, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_updateRecommendationDefinitionPhotoWithAttributes_6)
- [updateScheduledRecommendation(communityId, scheduledRecommendationId, scheduledRecommendation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_updateScheduledRecommendation_3)
- [updateScheduledRecommendation(communityId, scheduledRecommendationId, rank, enabled, recommendationAudienceId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_updateScheduledRecommendation_4)

### createRecommendationAudience(communityId, recommendationAudience)

Create an audience for a custom recommendation.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RecommendationAudience createRecommendationAudience(String communityId, ConnectApi.RecommendationAudienceInput recommendationAudience)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recommendationAudience

Type: `ConnectApi.RecommendationAudienceInput`

A `ConnectApi.RecommendationAudienceInput` object.

#### Return Value

Type: `ConnectApi.RecommendationAudience`

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### createRecommendationAudience(communityId, name)

Create an audience for a custom recommendation.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RecommendationAudience createRecommendationAudience(String communityId, String name)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

name

Type: String

Name of the audience.

#### Return Value

Type: `ConnectApi.RecommendationAudience`

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### createRecommendationDefinition(communityId, recommendationDefinition)

Create a custom recommendation definition.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RecommendationDefinition createRecommendationDefinition(String communityId, ConnectApi.RecommendationDefinitionInput recommendationDefinition)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recommendationDefinition

Type: [`ConnectApi.RecommendationDefinitionInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_recommendation_definition.htm#apex_connectapi_input_recommendation_definition "A custom recommendation definition.")

A `ConnectApi.RecommendationDefinitionInput` object.

#### Return Value

Type: `ConnectApi.RecommendationDefinition`

#### Usage

Recommendation definitions allow you to create custom recommendations that appear in Experience Cloud sites, encouraging users to watch videos, take training and more.

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

These recommendations appear by default on the Customer Service template. They appear on the home and question detail pages and in the feed in Salesforce mobile web. They also appear anywhere community managers add recommendations using Experience Builder in the Customer Service template.

So that users don’t see the same recommendations all the time, Salesforce periodically removes and brings back custom recommendations that haven’t been accepted or dismissed.

### createRecommendationDefinition(communityId, name, title, actionUrl, actionUrlName, explanation)

Create a custom recommendation definition with the specified parameters.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RecommendationDefinition createRecommendationDefinition(String communityId, String name, String title, String actionUrl, String actionUrlName, String explanation)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

name

Type: String

Name of the custom recommendation definition. The name is displayed in Setup.

title

Type: String

Title of the custom recommendation definition.

actionUrl

Type: String

URL for acting on the custom recommendation, for example, the URL to join a group.

actionUrlName

Type: String

Text label for the action URL in the user interface, for example, “Launch.”

explanation

Type: String

Explanation, or body, of the custom recommendation.

#### Return Value

Type: `ConnectApi.RecommendationDefinition`

#### Usage

Recommendation definitions allow you to create custom recommendations that appear in Experience Cloud sites, encouraging users to watch videos, take training and more.

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

These recommendations appear by default on the Customer Service template. They appear on the home and question detail pages and in the feed in Salesforce mobile web. They also appear anywhere community managers add recommendations using Experience Builder in the Customer Service template.

So that users don’t see the same recommendations all the time, Salesforce periodically removes and brings back custom recommendations that haven’t been accepted or dismissed.

### createScheduledRecommendation(communityId, scheduledRecommendation)

Create a scheduled custom recommendation.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ScheduledRecommendation createScheduledRecommendation(String communityId, ConnectApi.ScheduledRecommendationInput scheduledRecommendation)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

scheduledRecommendation

Type: `ConnectApi.ScheduledRecommendationInput`

A `ConnectApi.ScheduledRecommendationInput` object.

#### Return Value

Type: `ConnectApi.ScheduledRecommendation`

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### createScheduledRecommendation(communityId, recommendationDefinitionId, rank, enabled, recommendationAudienceId, channel)

Create a scheduled custom recommendation with the specified parameters.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ScheduledRecommendation createScheduledRecommendation(String communityId, String recommendationDefinitionId, Integer rank, Boolean enabled, String recommendationAudienceId, ConnectApi.RecommendationChannel channel)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recommendationDefinitionId

Type: String

ID of the custom recommendation definition.

rank

Type: Integer

Relative rank of the scheduled custom recommendation indicated by ascending whole numbers starting with 1.

Setting the rank is comparable to an insertion into an ordered list. The scheduled custom recommendation is inserted into the position specified by the `rank`. The `rank` of all the scheduled custom recommendations after it is pushed down. See [Ranking scheduled custom recommendations example](#Example).

If the specified `rank` is larger than the size of the list, the scheduled custom recommendation is put at the end of the list. The `rank` of the scheduled custom recommendation is the size of the list, instead of the one specified.

If a `rank` is not specified, the scheduled custom recommendation is put at the end of the list.

enabled

Type: Boolean

Indicates whether scheduling is enabled. If `true`, the custom recommendation is enabled and appears in Experience Cloud sites. If `false`, custom recommendations in feeds in Salesforce mobile web aren’t removed, but no new custom recommendations appear. In Customer Service and Partner Central sites, disabled custom recommendations no longer appear.

recommendationAudienceId

Type: String

ID of the custom recommendation definition that this scheduled recommendation schedules.

channel

Type: [`ConnectApi.RecommendationChannel`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RecommendationChannelEnum)

A way to tie custom recommendations together. For example, display recommendations in specific places in the UI or show recommendations based on time of day or geographic locations. Values are:

-   `CustomChannel1`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels. For example, community managers can use Experience Builder to determine where recommendations appear.
-   `CustomChannel2`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel3`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel4`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel5`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `DefaultChannel`—Default recommendation channel. Recommendations appear by default on the Home and Question Detail pages of Customer Service and Partner Central Experience Builder templates. They also appear in the feed in the Salesforce mobile web and anywhere community managers add recommendations using Experience Builder.

Use these channel values; you can’t rename or create other channels.

#### Return Value

Type: `ConnectApi.ScheduledRecommendation`

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

Ranking scheduled custom recommendations example

If you have these scheduled custom recommendations:

| Scheduled Recommendations | Rank |
| --- | --- |
| ScheduledRecommendationA | 1 |
| ScheduledRecommendationB | 2 |
| ScheduledRecommendationC | 3 |

And you include this information in the Scheduled Custom Recommendation Input:

| Scheduled Recommendation | Rank |
| --- | --- |
| ScheduledRecommendationD | 2 |

The result is:

| Scheduled Recommendation | Rank |
| --- | --- |
| ScheduledRecommendationA | 1 |
| ScheduledRecommendationD | 2 |
| ScheduledRecommendationB | 3 |
| ScheduledRecommendationC | 4 |

### deleteRecommendationAudience(communityId, recommendationAudienceId)

Delete a custom recommendation audience.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static Void deleteRecommendationAudience(String communityId, String recommendationAudienceId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recommendationAudienceId

Type: String

ID of the custom recommendation audience.

#### Return Value

Type: Void

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### deleteRecommendationDefinition(communityId, recommendationDefinitionId)

Delete a custom recommendation definition.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static Void deleteRecommendationDefinition(String communityId, String recommendationDefinitionId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recommendationDefinitionId

Type: String

ID of the custom recommendation definition.

#### Return Value

Type: Void

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### deleteRecommendationDefinitionPhoto(communityId, recommendationDefinitionId)

Delete a custom recommendation definition photo.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static Void deleteRecommendationDefinitionPhoto(String communityId, String recommendationDefinitionId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recommendationDefinitionId

Type: String

ID of the custom recommendation definition.

#### Return Value

Type: Void

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### deleteScheduledRecommendation(communityId, scheduledRecommendationId, deleteDefinitionIfLast)

Delete a scheduled custom recommendation.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static Void deleteScheduledRecommendation(String communityId, String scheduledRecommendationId, Boolean deleteDefinitionIfLast)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

scheduledRecommendationId

Type: String

ID of the scheduled custom recommendation.

deleteDefinitionIfLast

Type: Boolean

If `true` and if this is the last scheduled custom recommendation of a custom recommendation definition, deletes the custom recommendation definition. Default is `false`.

#### Return Value

Type: Void

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

Deleting a scheduled custom recommendation is comparable to a deletion in an ordered list. All scheduled custom recommendations after the deleted scheduled custom recommendation receive a new, higher rank automatically.

### getRecommendationAudience(communityId, recommendationAudienceId)

Get information about a custom recommendation audience.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RecommendationAudience getRecommendationAudience(String communityId, String recommendationAudienceId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recommendationAudienceId

Type: String

ID of the custom recommendation audience.

#### Return Value

Type: `ConnectApi.RecommendationAudience`

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### getRecommendationAudienceMembership(communityId, recommendationAudienceId)

Get the members of a custom recommendation audience.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.UserReferencePage getRecommendationAudienceMembership(String communityId, String recommendationAudienceId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recommendationAudienceId

Type: String

ID of the custom recommendation audience.

#### Return Value

Type: `ConnectApi.UserReferencePage`

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### getRecommendationAudienceMembership(communityId, recommendationAudienceId, pageParam, pageSize)

Get a page of custom recommendation audience members.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.UserReferencePage getRecommendationAudienceMembership(String communityId, String recommendationAudienceId, Integer pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recommendationAudienceId

Type: String

ID of the custom recommendation audience.

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of members per page.

#### Return Value

Type: `ConnectApi.UserReferencePage`

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### getRecommendationAudiences(communityId)

Get custom recommendation audiences.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RecommendationAudiencePage getRecommendationAudiences(String communityId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

#### Return Value

Type: `ConnectApi.RecommendationAudiencePage`

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### getRecommendationAudiences(communityId, pageParam, pageSize)

Get a page of custom recommendation audiences.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RecommendationAudiencePage getRecommendationAudiences(String communityId, Integer pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of audiences per page.

#### Return Value

Type: `ConnectApi.RecommendationAudiencePage`

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### getRecommendationDefinition(communityId, recommendationDefinitionId)

Get a custom recommendation definition.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RecommendationDefinition getRecommendationDefinition(String communityId, String recommendationDefinitionId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recommendationDefinitionId

Type: String

ID of the custom recommendation definition.

#### Return Value

Type: `ConnectApi.RecommendationDefinition`

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### getRecommendationDefinitionPhoto(communityId, recommendationDefinitionId)

Get a custom recommendation definition photo.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Photo getRecommendationDefinitionPhoto(String communityId, String recommendationDefinitionId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recommendationDefinitionId

Type: String

ID of the custom recommendation definition.

#### Return Value

Type: [`ConnectApi.Photo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm#apex_connectapi_output_photo "Profile photo.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### getRecommendationDefinitions(communityId)

Get custom recommendation definitions.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RecommendationDefinitionPage getRecommendationDefinitions(String communityId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

#### Return Value

Type: `ConnectApi.RecommendationDefinitionPage`

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### getRecommendationForUser(communityId, userId, action, objectId)

Get the Chatter, custom, or static recommendation for the context user for the specified action and object ID.

#### API Version

33.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RecommendationCollection getRecommendationForUser(String communityId, String userId, ConnectApi.RecommendationActionType action, String objectId)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**userId**

Type: String

ID for the context user or the keyword `me`.

**action**

Type: `ConnectApi.​RecommendationActionType`

Specifies the action to take on a recommendation.

-   `follow`—Follow a file, record, topic, or user.
-   `join`—Join a group.
-   `view`—View a file, group, article, record, user, custom, or static recommendation.

**objectId**

Type: String

Specifies the object to act on.

-   If action is `follow`, objectId is a user ID, file ID, record ID, or topic ID (version 36.0 and later).
-   If action is `join`, objectId is a group ID.
-   If action is `view`, objectId is a user ID, file ID, group ID, record ID, custom recommendation ID (version 34.0 and later), the enum `Today` for static recommendations (version 35.0 and later), or an article ID (version 37.0 and later).

#### Return Value

Type: [`ConnectApi.RecommendationCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm#apex_connectapi_output_recommendation_collection "A list of Chatter, custom, and static recommendations.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetRecommendationForUser(communityId, userId, action, objectId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_setTestGetRecommendationForUser_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRecommendationsForUser(communityId, userId, contextAction, contextObjectId, channel, maxResults)

Get the Chatter recommendations, such as user, group, file, article, record, and topic recommendations for the context user. Get the custom and static recommendations for the context user.

#### API Version

36.0

#### Available to Guest Users

38.0

:::tip Note
Only article and file recommendations are available to guest
        users.
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RecommendationCollection getRecommendationsForUser(String communityId, String userId, ConnectApi.RecommendationActionType contextAction, String contextObjectId, ConnectApi.RecommendationChannel channel, Integer maxResults)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**userId**

Type: String

ID for the context user or the keyword `me`.

**contextAction**

Type: `ConnectApi.​RecommendationActionType`

Action that the context user just performed. Supported values are:

-   `follow`
-   `view`

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**contextObjectId**

Type: String

ID of the object that the context user just performed an action on.

-   If contextAction is `follow`, contextObjectId is a user ID, file ID, record ID, or topic ID.
-   If contextAction is `view`, contextObjectId is a user ID, file ID, group ID, record ID, or article ID (version 37.0 and later).

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**channel**

Type: [`ConnectApi.RecommendationChannel`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RecommendationChannelEnum)

A way to tie custom recommendations together. For example, display recommendations in specific places in the UI or show recommendations based on time of day or geographic locations. Values are:

-   `CustomChannel1`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels. For example, community managers can use Experience Builder to determine where recommendations appear.
-   `CustomChannel2`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel3`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel4`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel5`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `DefaultChannel`—Default recommendation channel. Recommendations appear by default on the Home and Question Detail pages of Customer Service and Partner Central Experience Builder templates. They also appear in the feed in the Salesforce mobile web and anywhere community managers add recommendations using Experience Builder.

**maxResults**

Type: Integer

Maximum number of recommendation results; default is 10. Values must be from 1 to 99.

#### Return Value

Type: [`ConnectApi.RecommendationCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm#apex_connectapi_output_recommendation_collection "A list of Chatter, custom, and static recommendations.")

#### Usage

If you want to get recommendations based on a recent action performed, such as following a user, use contextAction and contextObjectId together. For example, if you just followed Pam, you specify `follow` for contextAction and Pam’s user ID for contextObjectId.

This method only recommends users who are followed by people who follow Pam. In this example, John follows Pam so the method returns a recommendation for you to follow Suzanne since John also follows Suzanne.

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetRecommendationsForUser(communityId, userId, contextAction, contextObjectId, channel, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_setTestGetRecommendationsForUser_1a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRecommendationsForUser(communityId, userId, action, contextAction, contextObjectId, channel, maxResults)

Get the Chatter, custom, and static recommendations for the context user for the specified action.

#### API Version

36.0

#### Available to Guest Users

38.0

:::tip Note
Only article and file recommendations are available to guest users.
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RecommendationCollection getRecommendationsForUser(String communityId, String userId, ConnectApi.RecommendationActionType action, ConnectApi.RecommendationActionType contextAction, String contextObjectId, ConnectApi.RecommendationChannel channel, Integer maxResults)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**userId**

Type: String

ID for the context user or the keyword `me`.

**action**

Type: `ConnectApi.​RecommendationActionType`

Specifies the action to take on a recommendation.

-   `follow`—Follow a file, record, topic, or user.
-   `join`—Join a group.
-   `view`—View a file, group, article, record, user, custom, or static recommendation.

**contextAction**

Type: `ConnectApi.​RecommendationActionType`

Action that the context user just performed. Supported values are:

-   `follow`
-   `view`

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**contextObjectId**

Type: String

ID of the object that the context user just performed an action on.

-   If contextAction is `follow`, contextObjectId is a user ID, file ID, record ID, or topic ID.
-   If contextAction is `view`, contextObjectId is a user ID, file ID, group ID, record ID, or article ID (version 37.0 and later).

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**channel**

Type: [`ConnectApi.RecommendationChannel`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RecommendationChannelEnum)

A way to tie custom recommendations together. For example, display recommendations in specific places in the UI or show recommendations based on time of day or geographic locations. Values are:

-   `CustomChannel1`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels. For example, community managers can use Experience Builder to determine where recommendations appear.
-   `CustomChannel2`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel3`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel4`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel5`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `DefaultChannel`—Default recommendation channel. Recommendations appear by default on the Home and Question Detail pages of Customer Service and Partner Central Experience Builder templates. They also appear in the feed in the Salesforce mobile web and anywhere community managers add recommendations using Experience Builder.

**maxResults**

Type: Integer

Maximum number of recommendation results; default is 10. Values must be from 1 to 99.

#### Return Value

Type: [`ConnectApi.RecommendationCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm#apex_connectapi_output_recommendation_collection "A list of Chatter, custom, and static recommendations.")

#### Usage

If you want to get recommendations based on a recent action performed, such as following a user, use contextAction and contextObjectId together. For example, if you just followed Pam, you specify `follow` for contextAction and Pam’s user ID for contextObjectId.

This method only recommends users who are followed by people who follow Pam. In this example, John follows Pam so the method returns a recommendation for you to follow Suzanne since John also follows Suzanne.

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetRecommendationsForUser(communityId, userId, action, contextAction, contextObjectId, channel, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_setTestGetRecommendationsForUser_2a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRecommendationsForUser(communityId, userId, action, objectCategory, contextAction, contextObjectId, channel, maxResults)

Get the Chatter, custom, and static recommendations for the context user for the specified action and object category.

#### API Version

36.0

#### Available to Guest Users

38.0

:::tip Note
Only article and file recommendations are available to guest users.
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RecommendationCollection getRecommendationsForUser(String communityId, String userId, ConnectApi.RecommendationActionType action, String objectCategory, ConnectApi.RecommendationActionType contextAction, String contextObjectId, ConnectApi.RecommendationChannel channel, Integer maxResults)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**userId**

Type: String

ID for the context user or the keyword `me`.

**action**

Type: `ConnectApi.​RecommendationActionType`

Specifies the action to take on a recommendation.

-   `follow`—Follow a file, record, topic, or user.
-   `join`—Join a group.
-   `view`—View a file, group, article, record, user, custom, or static recommendation.

**objectCategory**

Type: String

-   If action is `follow`, objectCategory is `users`, `files`, `topics`, or `records`.
-   If action is `join`, objectCategory is `groups`.
-   If action is `view`, objectCategory is `users`, `files`, `groups`, `records`, `custom`, `apps`, or `articles` (version 37.0 and later).

You can also specify a key prefix, the first three characters of the object ID, as the objectCategory. Valid values are:

-   If action is `follow`, objectCategory is `005` (users), `069` (files), `0TO` (topics), or `001` (accounts), for example.
-   If action is `join`, objectCategory is `0F9` (groups).
-   If action is `view`, objectCategory is `005` (users), `069` (files), `0F9` (groups), `0RD` (custom recommendations), `T` (static recommendations), `001` (accounts), or `kA0` (articles), for example, (version 370 and later).

**contextAction**

Type: `ConnectApi.​RecommendationActionType`

Action that the context user just performed. Supported values are:

-   `follow`
-   `view`

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**contextObjectId**

Type: String

ID of the object that the context user just performed an action on.

-   If contextAction is `follow`, contextObjectId is a user ID, file ID, record ID, or topic ID.
-   If contextAction is `view`, contextObjectId is a user ID, file ID, group ID, record ID, or article ID (version 37.0 and later).

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**channel**

Type: [`ConnectApi.RecommendationChannel`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RecommendationChannelEnum)

A way to tie custom recommendations together. For example, display recommendations in specific places in the UI or show recommendations based on time of day or geographic locations. Values are:

-   `CustomChannel1`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels. For example, community managers can use Experience Builder to determine where recommendations appear.
-   `CustomChannel2`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel3`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel4`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel5`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `DefaultChannel`—Default recommendation channel. Recommendations appear by default on the Home and Question Detail pages of Customer Service and Partner Central Experience Builder templates. They also appear in the feed in the Salesforce mobile web and anywhere community managers add recommendations using Experience Builder.

**maxResults**

Type: Integer

Maximum number of recommendation results; default is 10. Values must be from 1 to 99.

#### Return Value

Type: [`ConnectApi.RecommendationCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm#apex_connectapi_output_recommendation_collection "A list of Chatter, custom, and static recommendations.")

#### Usage

If you want to get recommendations based on a recent action performed, such as following a user, use contextAction and contextObjectId together. For example, if you just followed Pam, you specify `follow` for contextAction and Pam’s user ID for contextObjectId.

This method only recommends users who are followed by people who follow Pam. In this example, John follows Pam so the method returns a recommendation for you to follow Suzanne since John also follows Suzanne.

![Your new recommendation to follow Suzanne.](/docs/resources/img/en-us/262.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Fnew_recom.png&folder=apexref)

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetRecommendationsForUser(communityId, userId, action, objectCategory, contextAction, contextObjectId, channel, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_setTestGetRecommendationsForUser_3a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getScheduledRecommendation(communityId, scheduledRecommendationId)

Get a scheduled custom recommendation.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ScheduledRecommendation getScheduledRecommendation(String communityId, String scheduledRecommendationId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

scheduledRecommendationId

Type: String

ID of the scheduled custom recommendation.

#### Return Value

Type: `ConnectApi.ScheduledRecommendation`

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### getScheduledRecommendations(communityId, channel)

Get scheduled custom recommendations.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ScheduledRecommendationPage getScheduledRecommendations(String communityId, ConnectApi.RecommendationChannel channel)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**channel**

Type: [`ConnectApi.RecommendationChannel`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RecommendationChannelEnum)

A way to tie custom recommendations together. For example, display recommendations in specific places in the UI or show recommendations based on time of day or geographic locations. Values are:

-   `CustomChannel1`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels. For example, community managers can use Experience Builder to determine where recommendations appear.
-   `CustomChannel2`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel3`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel4`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel5`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `DefaultChannel`—Default recommendation channel. Recommendations appear by default on the Home and Question Detail pages of Customer Service and Partner Central Experience Builder templates. They also appear in the feed in the Salesforce mobile web and anywhere community managers add recommendations using Experience Builder.

#### Return Value

Type: `ConnectApi.ScheduledRecommendationPage`

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### rejectRecommendationForUser(communityId, userId, action, objectId)

Reject a Chatter, custom, or static recommendation for the context user for the specified action and object ID.

#### API Version

33.0

#### Requires Chatter

Yes

#### Signature

`public static rejectRecommendationForUser(String communityId, String userId, ConnectApi.RecommendationActionType action, String objectId)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**userId**

Type: String

ID for the context user or the keyword `me`.

**action**

Type: `ConnectApi.​RecommendationActionType`

Specifies the action to take on a recommendation. Supported values are:

-   `follow`—Follow a file, record, topic, or user.
-   `join`—Join a group.
-   `view`—View a file, group, article, record, user, custom, or static recommendation.

**objectId**

Type: String

Specifies the object to take action on.

-   If action is `follow`, objectId is a user ID, file ID, record ID, or topic ID (version 36.0 and later).
-   If action is `join`, objectId is a group ID.
-   If action is `view`, objectId is a custom recommendation ID, the enum `Today` for static recommendations, or an article ID (version 37.0 and later).

#### Return Value

Type: Void

### rejectRecommendationForUser(communityId, userId, action, objectEnum)

Reject a static recommendation for the context user.

#### API Version

34.0

#### Requires Chatter

Yes

#### Signature

`public static rejectRecommendationForUser(String communityId, String userId, ConnectApi.RecommendationActionType action, ConnectApi.RecommendedObjectType objectEnum)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**userId**

Type: String

ID for the context user or the keyword `me`.

**action**

Type: `ConnectApi.​RecommendationActionType`

Specifies the action to take on a recommendation. Supported values are:

-   `view`—View a static recommendation.

**objectEnum**

Type: [`ConnectApi.​RecommendedObjectType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RecommendedObjectTypeEnum)

Specifies the object type to take action on.

-   `Today`—Static recommendations that don’t have an ID, for example, the Today app recommendation.

#### Return Value

Type: Void

### updateRecommendationAudience(communityId, recommendationAudienceId, recommendationAudience)

Update a custom recommendation audience.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RecommendationAudience updateRecommendationAudience(String communityId, String recommendationAudienceId, ConnectApi.RecommendationAudienceInput recommendationAudience)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recommendationAudienceId

Type: String

ID of the custom recommendation audience.

recommendationAudience

Type: [`ConnectApi.RecommendationAudienceInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_recommendation_audience.htm#apex_connectapi_input_recommendation_audience "A custom recommendation audience.")

A `ConnectApi.RecommendationAudienceInput` object.

#### Return Value

Type: `ConnectApi.RecommendationAudience`

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### updateRecommendationDefinition(communityId, recommendationDefinitionId, name, title, actionUrl, actionUrlName, explanation)

Update a custom recommendation definition with the specified parameters.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RecommendationDefinition updateRecommendationDefinition(String communityId, String recommendationDefinitionId, String name, String title, String actionUrl, String actionUrlName, String explanation recommendationDefinition)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recommendationDefinitionId

Type: String

ID of the custom recommendation definition.

name

Type: String

Name of the custom recommendation definition. The name is displayed in Setup.

title

Type: String

Title of the custom recommendation definition.

actionUrl

Type: String

URL for acting on the custom recommendation, for example, the URL to join a group.

actionUrlName

Type: String

Text label for the action URL in the user interface, for example, “Launch.”

explanation

Type: String

Explanation, or body, of the custom recommendation.

#### Return Value

Type: `ConnectApi.RecommendationDefinition`

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### updateRecommendationDefinition(communityId, recommendationDefinitionId, recommendationDefinition)

Update a custom recommendation definition.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RecommendationDefinition updateRecommendationDefinition(String communityId, String recommendationDefinitionId, ConnectApi.RecommendationDefinitionInput recommendationDefinition)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recommendationDefinitionId

Type: String

ID of the custom recommendation definition.

recommendationDefinition

Type: [`ConnectApi.RecommendationDefinitionInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_recommendation_definition.htm#apex_connectapi_input_recommendation_definition "A custom recommendation definition.")

A `ConnectApi.RecommendationDefinitionInput` object containing the properties to update.

#### Return Value

Type: `ConnectApi.RecommendationDefinition`

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### updateRecommendationDefinitionPhoto(communityId, recommendationDefinitionId, fileUpload)

Update a custom recommendation definition photo with a file that hasn’t been uploaded.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Photo updateRecommendationDefinitionPhoto(String communityId, String recommendationDefinitionId, ConnectApi.BinaryInput fileUpload)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recommendationDefinitionId

Type: String

ID of the custom recommendation definition.

fileUpload

Type: `ConnectApi.Binary​​Input`

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [`ConnectApi.Photo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm#apex_connectapi_output_photo "Profile photo.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### updateRecommendationDefinitionPhoto(communityId, recommendationDefinitionId, fileId, versionNumber)

Update a custom recommendation definition photo with an uploaded file.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Photo updateRecommendationDefinitionPhoto(String communityId, String recommendationDefinitionId, String fileId, Integer versionNumber)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recommendationDefinitionId

Type: String

ID of the custom recommendation definition.

fileId

Type: String

ID of a file already uploaded. The file must be an image, and be smaller than 2 GB.

versionNumber

Type: Integer

Version number of the existing file. Specify either an existing version number, or `null` to get the latest version.

#### Return Value

Type: [`ConnectApi.Photo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm#apex_connectapi_output_photo "Profile photo.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### updateRecommendationDefinitionPhotoWithAttributes(communityId, recommendationDefinitionId, photo)

Update a custom recommendation definition photo with an uploaded file that requires cropping.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Photo updateRecommendationDefinitionPhotoWithAttributes(String communityId, String recommendationDefinitionId, ConnectApi.PhotoInput photo)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recommendationDefinitionId

Type: String

ID of the custom recommendation definition.

photo

Type: [`ConnectApi.PhotoInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_PhotoInput.htm#apex_connectapi_input_PhotoInput "Specify how to crop a photo that has already been uploaded.")

A `ConnectApi.PhotoInput` object specifying the file ID, version number, and cropping parameters.

#### Return Value

Type: [`ConnectApi.Photo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm#apex_connectapi_output_photo "Profile photo.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### updateRecommendationDefinitionPhotoWithAttributes(communityId, recommendationDefinitionId, photo, fileUpload)

Update a custom recommendation definition photo with a file that hasn’t been uploaded and requires cropping.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Photo updateRecommendationDefinitionPhotoWithAttributes(String communityId, String recommendationDefinitionId, ConnectApi.PhotoInput photo, ConnectApi.BinaryInput fileUpload)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recommendationDefinitionId

Type: String

ID of the custom recommendation definition.

photo

Type: [`ConnectApi.PhotoInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_PhotoInput.htm#apex_connectapi_input_PhotoInput "Specify how to crop a photo that has already been uploaded.")

A `ConnectApi.PhotoInput` object specifying the cropping parameters.

fileUpload

Type: `ConnectApi.Binary​​Input`

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [`ConnectApi.Photo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm#apex_connectapi_output_photo "Profile photo.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### updateScheduledRecommendation(communityId, scheduledRecommendationId, scheduledRecommendation)

Update a scheduled custom recommendation.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ScheduledRecommendation updateScheduledRecommendation(String communityId, String scheduledRecommendationId, ConnectApi.ScheduledRecommendationInput scheduledRecommendation)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

scheduledRecommendationId

Type: String

ID of the scheduled custom recommendation.

scheduledRecommendation

Type: `ConnectApi.ScheduledRecommendationInput`

A `ConnectApi.ScheduledRecommendationInput` object containing the properties to update.

#### Return Value

Type: `ConnectApi.ScheduledRecommendation`

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

Ranking scheduled custom recommendations example

If you have these scheduled custom recommendations:

| Scheduled Recommendations | Rank |
| --- | --- |
| ScheduledRecommendationA | 1 |
| ScheduledRecommendationB | 2 |
| ScheduledRecommendationC | 3 |

And you include this information in the Scheduled Custom Recommendation Input:

| Scheduled Recommendation | Rank |
| --- | --- |
| ScheduledRecommendationD | 2 |

The result is:

| Scheduled Recommendation | Rank |
| --- | --- |
| ScheduledRecommendationA | 1 |
| ScheduledRecommendationD | 2 |
| ScheduledRecommendationB | 3 |
| ScheduledRecommendationC | 4 |

### updateScheduledRecommendation(communityId, scheduledRecommendationId, rank, enabled, recommendationAudienceId)

Update a scheduled custom recommendation with the specified parameters.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ScheduledRecommendation updateScheduledRecommendation(String communityId, String scheduledRecommendationId, Integer rank, Boolean enabled, String recommendationAudienceId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

scheduledRecommendationId

Type: String

ID of the scheduled custom recommendation.

rank

Type: Integer

Relative rank of the scheduled custom recommendation indicated by ascending whole numbers starting with 1.

Setting the rank is comparable to an insertion into an ordered list. The scheduled custom recommendation is inserted into the position specified by the `rank`. The `rank` of all the scheduled custom recommendations after it is pushed down. See [Ranking scheduled custom recommendations example](#Example).

If the specified `rank` is larger than the size of the list, the scheduled custom recommendation is put at the end of the list. The `rank` of the scheduled custom recommendation is the size of the list, instead of the one specified.

If a `rank` is not specified, the scheduled custom recommendation is put at the end of the list.

enabled

Type: Boolean

Indicates whether scheduling is enabled. If `true`, the custom recommendation is enabled and appears in Experience Cloud sites. If `false`, custom recommendations in feeds in Salesforce mobile web aren’t removed, but no new custom recommendations appear. In Customer Service and Partner Central sites, disabled custom recommendations no longer appear.

recommendationAudienceId

Type: String

ID of the custom recommendation definition that this scheduled recommendation schedules.

#### Return Value

Type: `ConnectApi.ScheduledRecommendation`

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

Ranking scheduled custom recommendations example

If you have these scheduled custom recommendations:

| Scheduled Recommendations | Rank |
| --- | --- |
| ScheduledRecommendationA | 1 |
| ScheduledRecommendationB | 2 |
| ScheduledRecommendationC | 3 |

And you include this information in the Scheduled Custom Recommendation Input:

| Scheduled Recommendation | Rank |
| --- | --- |
| ScheduledRecommendationD | 2 |

The result is:

| Scheduled Recommendation | Rank |
| --- | --- |
| ScheduledRecommendationA | 1 |
| ScheduledRecommendationD | 2 |
| ScheduledRecommendationB | 3 |
| ScheduledRecommendationC | 4 |

## Recommendations Test Methods

These test methods are for `Recommendations`. All methods are static.

For information about using these methods to test your `ConnectApi` code, see [Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm).

## See Also

- [setTestGetRecommendationForUser(communityId, userId, action, objectId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_setTestGetRecommendationForUser_2)
- [setTestGetRecommendationsForUser(communityId, userId, contextAction, contextObjectId, channel, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_setTestGetRecommendationsForUser_1a)
- [setTestGetRecommendationsForUser(communityId, userId, action, contextAction, contextObjectId, channel, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_setTestGetRecommendationsForUser_2a)
- [setTestGetRecommendationsForUser(communityId, userId, action, objectCategory, contextAction, contextObjectId, channel, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_setTestGetRecommendationsForUser_3a)

### setTestGetRecommendationForUser(communityId, userId, action, objectId, result)

Register a `ConnectApi.RecommendationCollection` object to be returned when `getRecommendationForUser` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

33.0

#### Requires Chatter

Yes

#### Signature

`public static Void setTestGetRecommendationForUser(String communityId, String userId, ConnectApi.RecommendationActionType action, String objectId, ConnectApi.RecommendationCollection result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**userId**

Type: String

ID for the context user or the keyword `me`.

**action**

Type: `ConnectApi.​RecommendationActionType`

Specifies the action to take on a recommendation.

-   `follow`—Follow a file, record, topic, or user.
-   `join`—Join a group.
-   `view`—View a file, group, article, record, user, custom, or static recommendation.

**objectId**

Type: String

Specifies the object to take action on.

-   If action is `follow`, objectId is a user ID, file ID, record ID, or topic ID (version 36.0 and later).
-   If action is `join`, objectId is a group ID.
-   If action is `view`, objectId is a user ID, file ID, group ID, record ID, custom recommendation ID, the enum `Today` for static recommendations, or an article ID (version 37.0 and later).

**result**

Type: [`ConnectApi.RecommendationCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm#apex_connectapi_output_recommendation_collection "A list of Chatter, custom, and static recommendations.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRecommendationForUser(communityId, userId, action, objectId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationForUser_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRecommendationsForUser(communityId, userId, contextAction, contextObjectId, channel, maxResults, result)

Register a `ConnectApi.RecommendationCollection` object to be returned when `getRecommendationsForUser` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

`public static Void setTestGetRecommendationsForUser(String communityId, String userId, ConnectApi.RecommendationActionType contextAction, String contextObjectId, ConnectApi.RecommendationChannel channel, Integer maxResults, ConnectApi.RecommendationCollection result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**userId**

Type: String

ID for the context user or the keyword `me`.

**contextAction**

Type: `ConnectApi.​RecommendationActionType`

Action that the context user just performed. Supported values are:

-   `follow`
-   `view`

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**contextObjectId**

Type: String

ID of the object that the context user just performed an action on.

-   If contextAction is `follow`, contextObjectId is a user ID, file ID, record ID, or topic ID.
-   If contextAction is `view`, contextObjectId is a user ID, file ID, group ID, record ID, or article ID (version 37.0 and later).

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**channel**

Type: [`ConnectApi.RecommendationChannel`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RecommendationChannelEnum)

A way to tie custom recommendations together. For example, display recommendations in specific places in the UI or show recommendations based on time of day or geographic locations. Values are:

-   `CustomChannel1`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels. For example, community managers can use Experience Builder to determine where recommendations appear.
-   `CustomChannel2`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel3`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel4`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel5`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `DefaultChannel`—Default recommendation channel. Recommendations appear by default on the Home and Question Detail pages of Customer Service and Partner Central Experience Builder templates. They also appear in the feed in the Salesforce mobile web and anywhere community managers add recommendations using Experience Builder.

**maxResults**

Type: Integer

Maximum number of recommendation results; default is 10. Values must be from 1 to 99.

**result**

Type: [`ConnectApi.RecommendationCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm#apex_connectapi_output_recommendation_collection "A list of Chatter, custom, and static recommendations.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRecommendationsForUser(communityId, userId, contextAction, contextObjectId, channel, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationsForUser_1a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRecommendationsForUser(communityId, userId, action, contextAction, contextObjectId, channel, maxResults, result)

Register a `ConnectApi.RecommendationCollection` object to be returned when `getRecommendationsForUser` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

`public static Void setTestGetRecommendationsForUser(String communityId, String userId, ConnectApi.RecommendationActionType action, ConnectApi.RecommendationActionType contextAction, String contextObjectId, ConnectApi.RecommendationChannel channel, Integer maxResults, ConnectApi.RecommendationCollection result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**userId**

Type: String

ID for the context user or the keyword `me`.

**action**

Type: `ConnectApi.​RecommendationActionType`

Specifies the action to take on a recommendation.

-   `follow`—Follow a file, record, topic, or user.
-   `join`—Join a group.
-   `view`—View a file, group, article, record, user, custom, or static recommendation.

**contextAction**

Type: `ConnectApi.​RecommendationActionType`

Action that the context user just performed. Supported values are:

-   `follow`
-   `view`

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**contextObjectId**

Type: String

ID of the object that the context user just performed an action on.

-   If contextAction is `follow`, contextObjectId is a user ID, file ID, record ID, or topic ID.
-   If contextAction is `view`, contextObjectId is a user ID, file ID, group ID, record ID, or article ID (version 37.0 and later).

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**channel**

Type: [`ConnectApi.RecommendationChannel`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RecommendationChannelEnum)

A way to tie custom recommendations together. For example, display recommendations in specific places in the UI or show recommendations based on time of day or geographic locations. Values are:

-   `CustomChannel1`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels. For example, community managers can use Experience Builder to determine where recommendations appear.
-   `CustomChannel2`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel3`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel4`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel5`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `DefaultChannel`—Default recommendation channel. Recommendations appear by default on the Home and Question Detail pages of Customer Service and Partner Central Experience Builder templates. They also appear in the feed in the Salesforce mobile web and anywhere community managers add recommendations using Experience Builder.

**maxResults**

Type: Integer

Maximum number of recommendation results; default is 10. Values must be from 1 to 99.

**result**

Type: [`ConnectApi.RecommendationCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm#apex_connectapi_output_recommendation_collection "A list of Chatter, custom, and static recommendations.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRecommendationsForUser(communityId, userId, action, contextAction, contextObjectId, channel, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationsForUser_2a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRecommendationsForUser(communityId, userId, action, objectCategory, contextAction, contextObjectId, channel, maxResults, result)

Register a `ConnectApi.RecommendationCollection` object to be returned when `getRecommendationsForUser` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

`public static Void setTestGetRecommendationsForUser(String communityId, String userId, ConnectApi.RecommendationActionType action, String objectCategory, ConnectApi.RecommendationActionType contextAction, String contextObjectId, ConnectApi.RecommendationChannel channel, Integer maxResults, ConnectApi.RecommendationCollection result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**userId**

Type: String

ID for the context user or the keyword `me`.

**action**

Type: `ConnectApi.​RecommendationActionType`

Specifies the action to take on a recommendation.

-   `follow`—Follow a file, record, topic, or user.
-   `join`—Join a group.
-   `view`—View a file, group, article, record, user, custom, or static recommendation.

**objectCategory**

Type: String

-   If action is `follow`, objectCategory is `users`, `files`, `records`, or `topics`.
-   If action is `join`, objectCategory is `groups`.
-   If action is `view`, objectCategory is `users`, `files`, `groups`, `records`,`custom`, `apps`, or `articles` (version 37.0 and later).

You can also specify a key prefix, the first three characters of the object ID, as the objectCategory. Valid values are:

-   If action is `follow`, objectCategory is `005` (users), `069` (files), `0TO` (topics), or `001` (accounts), for example.
-   If action is `join`, objectCategory is `0F9` (groups).
-   If action is `view`, objectCategory is `005` (users), `069` (files), `0F9` (groups), `0RD` (custom recommendations), `T` (static recommendations), `001` (accounts), or `kA0` (articles), for example, (version 370 and later).

**contextAction**

Type: `ConnectApi.​RecommendationActionType`

Action that the context user just performed. Supported values are:

-   `follow`
-   `view`

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**contextObjectId**

Type: String

ID of the object that the context user just performed an action on.

-   If contextAction is `follow`, contextObjectId is a user ID, file ID, record ID, or topic ID.
-   If contextAction is `view`, contextObjectId is a user ID, file ID, group ID, record ID, or article ID (version 37.0 and later).

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**channel**

Type: [`ConnectApi.RecommendationChannel`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RecommendationChannelEnum)

A way to tie custom recommendations together. For example, display recommendations in specific places in the UI or show recommendations based on time of day or geographic locations. Values are:

-   `CustomChannel1`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels. For example, community managers can use Experience Builder to determine where recommendations appear.
-   `CustomChannel2`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel3`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel4`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `CustomChannel5`—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   `DefaultChannel`—Default recommendation channel. Recommendations appear by default on the Home and Question Detail pages of Customer Service and Partner Central Experience Builder templates. They also appear in the feed in the Salesforce mobile web and anywhere community managers add recommendations using Experience Builder.

**maxResults**

Type: Integer

Maximum number of recommendation results; default is 10. Values must be from 1 to 99.

**result**

Type: [`ConnectApi.RecommendationCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm#apex_connectapi_output_recommendation_collection "A list of Chatter, custom, and static recommendations.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRecommendationsForUser(communityId, userId, action, objectCategory, contextAction, contextObjectId, channel, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationsForUser_3a)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

## Retired Recommendations Methods

These methods for `Recommendations` are retired.

## See Also

- [createScheduledRecommendation(communityId, recommendationDefinitionId, rank, enabled, recommendationAudienceId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_createScheduledRecommendation_3)
- [getRecommendationsForUser(communityId, userId, contextAction, contextObjectId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationsForUser_1)
- [getRecommendationsForUser(communityId, userId, action, contextAction, contextObjectId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationsForUser_2)
- [getRecommendationsForUser(communityId, userId, action, objectCategory, contextAction, contextObjectId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationsForUser_3)
- [getScheduledRecommendations(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getScheduledRecommendations_1)
- [setTestGetRecommendationsForUser(communityId, userId, contextAction, contextObjectId, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_setTestGetRecommendationsForUser_1)
- [setTestGetRecommendationsForUser(communityId, userId, action, contextAction, contextObjectId, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_setTestGetRecommendationsForUser_2)
- [setTestGetRecommendationsForUser(communityId, userId, action, objectCategory, contextAction, contextObjectId, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_setTestGetRecommendationsForUser_3)

### createScheduledRecommendation(communityId, recommendationDefinitionId, rank, enabled, recommendationAudienceId)

Create a scheduled custom recommendation with the specified parameters.

#### API Version

35.0 only

:::tip Important
In version 36.0 and later, use `createScheduledRecommendation(communityId, recommendationDefinitionId, rank, enabled, recommendationAudienceId, channel)`.
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ScheduledRecommendation createScheduledRecommendation(String communityId, String recommendationDefinitionId, Integer rank, Boolean enabled, String recommendationAudienceId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recommendationDefinitionId

Type: String

ID of the custom recommendation definition.

rank

Type: Integer

Relative rank of the scheduled custom recommendation indicated by ascending whole numbers starting with 1.

Setting the rank is comparable to an insertion into an ordered list. The scheduled custom recommendation is inserted into the position specified by the `rank`. The `rank` of all the scheduled custom recommendations after it is pushed down. See [Ranking scheduled custom recommendations example](#Example).

If the specified `rank` is larger than the size of the list, the scheduled custom recommendation is put at the end of the list. The `rank` of the scheduled custom recommendation is the size of the list, instead of the one specified.

If a `rank` is not specified, the scheduled custom recommendation is put at the end of the list.

enabled

Type: Boolean

Indicates whether scheduling is enabled. If `true`, the custom recommendation is enabled and appears in Experience Cloud sites. If `false`, custom recommendations in feeds in Salesforce mobile web aren’t removed, but no new custom recommendations appear. In Customer Service and Partner Central sites, disabled custom recommendations no longer appear.

recommendationAudienceId

Type: String

ID of the custom recommendation definition that this scheduled recommendation schedules.

#### Return Value

Type: [ConnectApi.ScheduledRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scheduled_recommendation.htm "Represents a scheduled custom recommendation.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

Ranking scheduled custom recommendations example

If you have these scheduled custom recommendations:

| Scheduled Recommendations | Rank |
| --- | --- |
| ScheduledRecommendationA | 1 |
| ScheduledRecommendationB | 2 |
| ScheduledRecommendationC | 3 |

And you include this information in the Scheduled Custom Recommendation Input:

| Scheduled Recommendation | Rank |
| --- | --- |
| ScheduledRecommendationD | 2 |

The result is:

| Scheduled Recommendation | Rank |
| --- | --- |
| ScheduledRecommendationA | 1 |
| ScheduledRecommendationD | 2 |
| ScheduledRecommendationB | 3 |
| ScheduledRecommendationC | 4 |

### getRecommendationsForUser(communityId, userId, contextAction, contextObjectId, maxResults)

Get the Chatter recommendations, such as user, group, file, and record recommendations for the context user. Get the custom and static recommendations for the context user.

#### API Version

33.0–35.0

:::tip Important
In version 36.0 and later, use `getRecommendationsForUser(communityId, userId, contextAction, contextObjectId, channel, maxResults)`.
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RecommendationCollection getRecommendationsForUser(String communityId, String userId, ConnectApi.RecommendationActionType contextAction, String contextObjectId, Integer maxResults)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

userId

Type: String

ID for the context user or the keyword `me`.

contextAction

Type: `ConnectApi.​RecommendationActionType`

Action that the context user just performed. Supported values are:

-   `follow`
-   `view`

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

contextObjectId

Type: String

ID of the object that the context user just performed an action on.

-   If contextAction is `follow`, contextObjectId is a user ID, file ID, or record ID.
-   If contextAction is `view`, contextObjectId is a user ID, file ID, group ID, or record ID.

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

maxResults

Type: Integer

Maximum number of recommendation results; default is 10. Values must be from 1 to 99.

#### Return Value

Type: [`ConnectApi.RecommendationCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm#apex_connectapi_output_recommendation_collection "A list of Chatter, custom, and static recommendations.")

#### Usage

If you want to get recommendations based on a recent action performed, such as following a user, use contextAction and contextObjectId together. For example, if you just followed Pam, you specify `follow` for contextAction and Pam’s user ID for contextObjectId.

This method only recommends users who are followed by people who follow Pam. In this example, John follows Pam so the method returns a recommendation for you to follow Suzanne since John also follows Suzanne.

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetRecommendationsForUser(communityId, userId, contextAction, contextObjectId, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_setTestGetRecommendationsForUser_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRecommendationsForUser(communityId, userId, action, contextAction, contextObjectId, maxResults)

Get the Chatter, custom, and static recommendations for the context user for the specified action.

#### API Version

33.0–35.0

:::tip Important
In version 36.0 and later, use `getRecommendationsForUser(communityId, userId, action, contextAction, contextObjectId, channel, maxResults)`.
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RecommendationCollection getRecommendationsForUser(String communityId, String userId, ConnectApi.RecommendationActionType action, ConnectApi.RecommendationActionType contextAction, String contextObjectId, Integer maxResults)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**userId**

Type: String

ID for the context user or the keyword `me`.

**action**

Type: `ConnectApi.​RecommendationActionType`

Specifies the action to take on a recommendation.

-   `follow`—Follow a file, record, topic, or user.
-   `join`—Join a group.
-   `view`—View a file, group, article, record, user, custom, or static recommendation.

**contextAction**

Type: `ConnectApi.​RecommendationActionType`

Action that the context user just performed. Supported values are:

-   `follow`
-   `view`

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**contextObjectId**

Type: String

ID of the object that the context user just performed an action on.

-   If contextAction is `follow`, contextObjectId is a user ID, file ID, or record ID.
-   If contextAction is `view`, contextObjectId is a user ID, file ID, group ID, or record ID.

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**maxResults**

Type: Integer

Maximum number of recommendation results; default is 10. Values must be from 1 to 99.

#### Return Value

Type: [`ConnectApi.RecommendationCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm#apex_connectapi_output_recommendation_collection "A list of Chatter, custom, and static recommendations.")

#### Usage

If you want to get recommendations based on a recent action performed, such as following a user, use contextAction and contextObjectId together. For example, if you just followed Pam, you specify `follow` for contextAction and Pam’s user ID for contextObjectId.

This method only recommends users who are followed by people who follow Pam. In this example, John follows Pam so the method returns a recommendation for you to follow Suzanne since John also follows Suzanne.

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetRecommendationsForUser(communityId, userId, action, contextAction, contextObjectId, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_setTestGetRecommendationsForUser_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRecommendationsForUser(communityId, userId, action, objectCategory, contextAction, contextObjectId, maxResults)

Get the Chatter, custom, and static recommendations for the context user for the specified action and object category.

#### API Version

33.0–35.0

:::tip Important
In version 36.0 and later, use `getRecommendationsForUser(communityId, userId, action, objectCategory, contextAction, contextObjectId, channel, maxResults)`.
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.RecommendationCollection getRecommendationsForUser(String communityId, String userId, ConnectApi.RecommendationActionType action, String objectCategory, ConnectApi.RecommendationActionType contextAction, String contextObjectId, Integer maxResults)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**userId**

Type: String

ID for the context user or the keyword `me`.

**action**

Type: `ConnectApi.​RecommendationActionType`

Specifies the action to take on a recommendation.

-   `follow`—Follow a file, record, topic, or user.
-   `join`—Join a group.
-   `view`—View a file, group, article, record, user, custom, or static recommendation.

**objectCategory**

Type: String

-   If action is `follow`, objectCategory is `users`, `files`, or `records`.
-   If action is `join`, objectCategory is `groups`.
-   If action is `view`, objectCategory is `users`, `files`, `groups`, `records`, `custom`, or `apps`.

You can also specify a key prefix, the first three characters of the object ID, as the objectCategory. Valid values are:

-   If action is `follow`, objectCategory is `005` (users), `069` (files), or `001` (accounts), for example.
-   If action is `join`, objectCategory is `0F9` (groups).
-   If action is `view`, objectCategory is `005` (users), `069` (files), `0F9` (groups), `0RD` (custom recommendations), `T` (static recommendations), or `001` (accounts), for example.

**contextAction**

Type: `ConnectApi.​RecommendationActionType`

Action that the context user just performed. Supported values are:

-   `follow`
-   `view`

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**contextObjectId**

Type: String

ID of the object that the context user just performed an action on.

-   If contextAction is `follow`, contextObjectId is a user ID, file ID, or record ID.
-   If contextAction is `view`, contextObjectId is a user ID, file ID, group ID, or record ID.

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**maxResults**

Type: Integer

Maximum number of recommendation results; default is 10. Values must be from 1 to 99.

#### Return Value

Type: [`ConnectApi.RecommendationCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm#apex_connectapi_output_recommendation_collection "A list of Chatter, custom, and static recommendations.")

#### Usage

If you want to get recommendations based on a recent action performed, such as following a user, use contextAction and contextObjectId together. For example, if you just followed Pam, you specify `follow` for contextAction and Pam’s user ID for contextObjectId.

This method only recommends users who are followed by people who follow Pam. In this example, John follows Pam so the method returns a recommendation for you to follow Suzanne since John also follows Suzanne.

![Your new recommendation to follow Suzanne.](/docs/resources/img/en-us/262.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Fnew_recom.png&folder=apexref)

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetRecommendationsForUser(communityId, userId, action, objectCategory, contextAction, contextObjectId, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_setTestGetRecommendationsForUser_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getScheduledRecommendations(communityId)

Get scheduled custom recommendations.

#### API Version

35.0 only

:::tip Important
In version 36.0 and later, use `getScheduledRecommendations(communityId, channel)`.
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ScheduledRecommendationPage getScheduledRecommendations(String communityId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

#### Return Value

Type: `ConnectApi.ScheduledRecommendationPage`

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

### setTestGetRecommendationsForUser(communityId, userId, contextAction, contextObjectId, maxResults, result)

Register a `ConnectApi.RecommendationCollection` object to be returned when `getRecommendationsForUser` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

33.0–35.0

#### Requires Chatter

Yes

#### Signature

`public static Void setTestGetRecommendationsForUser(String communityId, String userId, ConnectApi.RecommendationActionType contextAction, String contextObjectId, Integer maxResults, ConnectApi.RecommendationCollection result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

userId

Type: String

ID for the context user or the keyword `me`.

contextAction

Type: `ConnectApi.​RecommendationActionType`

Action that the context user just performed. Supported values are:

-   `follow`
-   `view`

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

contextObjectId

Type: String

ID of the object that the context user just performed an action on.

-   If contextAction is `follow`, contextObjectId is a user ID, file ID, or record ID.
-   If contextAction is `view`, contextObjectId is a user ID, file ID, group ID, or record ID.

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

maxResults

Type: Integer

Maximum number of recommendation results; default is 10. Values must be from 1 to 99.

result

Type: [`ConnectApi.RecommendationCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm#apex_connectapi_output_recommendation_collection "A list of Chatter, custom, and static recommendations.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRecommendationsForUser(communityId, userId, contextAction, contextObjectId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationsForUser_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRecommendationsForUser(communityId, userId, action, contextAction, contextObjectId, maxResults, result)

Register a `ConnectApi.RecommendationCollection` object to be returned when `getRecommendationsForUser` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

33.0–35.0

#### Requires Chatter

Yes

#### Signature

`public static Void setTestGetRecommendationsForUser(String communityId, String userId, ConnectApi.RecommendationActionType action, ConnectApi.RecommendationActionType contextAction, String contextObjectId, Integer maxResults, ConnectApi.RecommendationCollection result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**userId**

Type: String

ID for the context user or the keyword `me`.

**action**

Type: `ConnectApi.​RecommendationActionType`

Specifies the action to take on a recommendation.

-   `follow`—Follow a file, record, topic, or user.
-   `join`—Join a group.
-   `view`—View a file, group, article, record, user, custom, or static recommendation.

**contextAction**

Type: `ConnectApi.​RecommendationActionType`

Action that the context user just performed. Supported values are:

-   `follow`
-   `view`

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**contextObjectId**

Type: String

ID of the object that the context user just performed an action on.

-   If contextAction is `follow`, contextObjectId is a user ID, file ID, or record ID.
-   If contextAction is `view`, contextObjectId is a user ID, file ID, group ID, or record ID.

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**maxResults**

Type: Integer

Maximum number of recommendation results; default is 10. Values must be from 1 to 99.

**result**

Type: [`ConnectApi.RecommendationCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm#apex_connectapi_output_recommendation_collection "A list of Chatter, custom, and static recommendations.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRecommendationsForUser(communityId, userId, action, contextAction, contextObjectId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationsForUser_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRecommendationsForUser(communityId, userId, action, objectCategory, contextAction, contextObjectId, maxResults, result)

Register a `ConnectApi.RecommendationCollection` object to be returned when `getRecommendationsForUser` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

33.0–35.0

#### Requires Chatter

Yes

#### Signature

`public static Void setTestGetRecommendationsForUser(String communityId, String userId, ConnectApi.RecommendationActionType action, String objectCategory, ConnectApi.RecommendationActionType contextAction, String contextObjectId, Integer maxResults, ConnectApi.RecommendationCollection result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**userId**

Type: String

ID for the context user or the keyword `me`.

**action**

Type: `ConnectApi.​RecommendationActionType`

Specifies the action to take on a recommendation.

-   `follow`—Follow a file, record, topic, or user.
-   `join`—Join a group.
-   `view`—View a file, group, article, record, user, custom, or static recommendation.

**objectCategory**

Type: String

-   If action is `follow`, objectCategory is `users`, `files`, or `records`.
-   If action is `join`, objectCategory is `groups`.
-   If action is `view`, objectCategory is `users`, `files`, `groups`, `records`,`custom`, or `apps`.

You can also specify a key prefix, the first three characters of the object ID, as the objectCategory. Valid values are:

-   If action is `follow`, objectCategory is `005` (users), `069` (files), or `001` (accounts), for example.
-   If action is `join`, objectCategory is `0F9` (groups).
-   If action is `view`, objectCategory is `005` (users), `069` (files), `0F9` (groups), `0RD` (custom recommendations), `T` (static recommendations), or `001` (accounts), for example.

**contextAction**

Type: `ConnectApi.​RecommendationActionType`

Action that the context user just performed. Supported values are:

-   `follow`
-   `view`

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**contextObjectId**

Type: String

ID of the object that the context user just performed an action on.

-   If contextAction is `follow`, contextObjectId is a user ID, file ID, or record ID.
-   If contextAction is `view`, contextObjectId is a user ID, file ID, group ID, or record ID.

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify `null`.

**maxResults**

Type: Integer

Maximum number of recommendation results; default is 10. Values must be from 1 to 99.

**result**

Type: [`ConnectApi.RecommendationCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm#apex_connectapi_output_recommendation_collection "A list of Chatter, custom, and static recommendations.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRecommendationsForUser(communityId, userId, action, objectCategory, contextAction, contextObjectId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationsForUser_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
