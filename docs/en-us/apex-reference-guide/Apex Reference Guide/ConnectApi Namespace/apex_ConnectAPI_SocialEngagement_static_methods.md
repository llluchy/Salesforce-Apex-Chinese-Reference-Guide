---
doc_id: "apex_ConnectAPI_SocialEngagement_static_methods"
---

# SocialEngagement Class

Manage information about social accounts or fan pages for social networks.

:::tip Note
Social Studio was retired on November 18, 2024.
:::

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## See Also

- [Knowledge Article: Marketing Cloud Social Studio Retirement](https://help.salesforce.com/s/articleView?id=000392005&amp;type=1&amp;language=en_US)

## SocialEngagement Methods

These methods are for `SocialEngagement`. All methods are static.

## See Also

- [deleteSocialPost(socialPostId, socialAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_SocialEngagement_static_methods.htm#apex_ConnectAPI_SocialEngagement_deleteSocialPost_1)
- [followSocialPersona(socialPersonaId, socialAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_SocialEngagement_static_methods.htm#apex_ConnectAPI_SocialEngagement_followSocialPersona_2)
- [followSocialPostPersona(socialPostId, socialAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_SocialEngagement_static_methods.htm#apex_ConnectAPI_SocialEngagement_followSocialPostPersona_2)
- [getIntents(socialPostId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_SocialEngagement_static_methods.htm#apex_ConnectAPI_SocialEngagement_getIntents_1)
- [getManagedSocialAccount(id)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_SocialEngagement_static_methods.htm#apex_ConnectAPI_SocialEngagement_getManagedSocialAccount_1)
- [getManagedSocialAccounts()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_SocialEngagement_static_methods.htm#apex_ConnectAPI_SocialEngagement_getManagedSocialAccounts_1)
- [getManagedSocialAccounts(socialNetwork)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_SocialEngagement_static_methods.htm#apex_ConnectAPI_SocialEngagement_getManagedSocialAccounts_2)
- [getRelationship(id, socialPersonaId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_SocialEngagement_static_methods.htm#apex_ConnectAPI_SocialEngagement_getRelationship_1)
- [hideSocialPost(socialPostId, socialAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_SocialEngagement_static_methods.htm#apex_ConnectAPI_SocialEngagement_hideSocialPost_2)
- [likeSocialPost(socialPostId, socialAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_SocialEngagement_static_methods.htm#apex_ConnectAPI_SocialEngagement_likeSocialPost_2)
- [massApprove(massApproval)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_SocialEngagement_static_methods.htm#apex_ConnectAPI_SocialEngagement_massApprove_1)
- [recallApproval(socialPostId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_SocialEngagement_static_methods.htm#apex_ConnectAPI_SocialEngagement_recallApproval_1)
- [unfollowSocialPersona(socialPersonaId, socialAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_SocialEngagement_static_methods.htm#apex_ConnectAPI_SocialEngagement_unfollowSocialPersona_1)
- [unfollowSocialPostPersona(socialPostId, socialAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_SocialEngagement_static_methods.htm#apex_ConnectAPI_SocialEngagement_unfollowSocialPostPersona_1)
- [unhideSocialPost(socialPostId, socialAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_SocialEngagement_static_methods.htm#apex_ConnectAPI_SocialEngagement_unhideSocialPost_1)
- [unlikeSocialPost(socialPostId, socialAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_SocialEngagement_static_methods.htm#apex_ConnectAPI_SocialEngagement_unlikeSocialPost_1)

### deleteSocialPost(socialPostId, socialAccountId)

Delete a social post from its social network.

:::tip Note
Deleting a social post from its social network doesn’t delete the record from
        Salesforce.
:::

#### API Version

46.0–61.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.DeleteSocialPostIntent deleteSocialPost(String socialPostId, String socialAccountId)`

#### Parameters

socialPostId

Type: String

ID of the social post to delete.

socialAccountId

Type: String

ID of the social account that deletes the post.

#### Return Value

Type: `ConnectApi.DeleteSocialPostIntent`

### followSocialPersona(socialPersonaId, socialAccountId)

Follow a social persona in its social network.

#### API Version

45.0–61.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.FollowSocialPersonaIntent followSocialPersona(String socialPersonaId, String socialAccountId)`

#### Parameters

socialPersonaId

Type: String

ID of the social persona to follow.

socialAccountId

Type: String

ID of the social account that follows the social persona.

#### Return Value

Type: [`ConnectApi.FollowSocialPersonaIntent`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_follow_social_persona_intent_output.htm "Follow intent on a social persona.")

### followSocialPostPersona(socialPostId, socialAccountId)

Follow a social persona on a social post in its social network.

#### API Version

45.0–61.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.FollowSocialPersonaIntent followSocialPostPersona(String socialPostId, String socialAccountId)`

#### Parameters

socialPostId

Type: String

ID of the social post authored by the social persona to follow.

socialAccountId

Type: String

ID of the social account that follows the social persona.

#### Return Value

Type: [`ConnectApi.FollowSocialPersonaIntent`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_follow_social_persona_intent_output.htm "Follow intent on a social persona.")

### getIntents(socialPostId)

Get available intents for a social post.

#### API Version

45.0–61.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.SocialPostIntents getIntents(String socialPostId)`

#### Parameters

socialPostId

Type: String

ID of a social post.

#### Return Value

Type: [`ConnectApi.SocialPostIntents`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_social_post_intents_output.htm "Intents available for a social post.")

### getManagedSocialAccount(id)

Get a managed social account that is in the org and assigned to the user.

#### API Version

44.0–61.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedSocialAccount getManagedSocialAccount(String id)`

#### Parameters

id

Type: String

Description: Internal SFDC ID for this managed social account.

#### Return Value

Type: `ConnectApi.ManagedSocialAccount`

### getManagedSocialAccounts()

Gets a list of managed social accounts that are in the org and assigned to the user.

#### API Version

44.0–61.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedSocialAccounts getManagedSocialAccounts()`

#### Return Value

Type: `ConnectApi.ManagedSocialAccounts`

### getManagedSocialAccounts(socialNetwork)

Get a list of managed social accounts that are in the org and assigned to the user.

#### API Version

44.0–61.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedSocialAccounts getManagedSocialAccounts(ConnectApi.SocialNetworkProvider socialNetwork)`

#### Parameters

**socialNetwork**

Type: [`ConnectApi.SocialNetworkProvider`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#SocialNetworkProviderEnumValues)

Description: Filters results based on the social network. Values are:

-   `Facebook`
-   `GooglePlus`
-   `Instagram`
-   `InstagramBusiness`
-   `KakaoTalk`
-   `Kik`
-   `Line`
-   `LinkedIn`
-   `Messenger`
-   `Other`
-   `Pinterest`
-   `QQ`
-   `Rypple`
-   `SinaWeibo`
-   `SMS`
-   `Snapchat`
-   `Telegram`
-   `Twitter`
-   `VKontakte`
-   `WeChat`
-   `WhatsApp`
-   `YouTube`

#### Return Value

Type: `ConnectApi.ManagedSocialAccounts`

### getRelationship(id, socialPersonaId)

Get the follow relationship between a managed social account and a social persona.

#### API Version

46.0–61.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.SocialAccountRelationship getRelationship(String id, String socialPersonaId)`

#### Parameters

id

Type: String

ID of the managed social account.

socialPersonaId

Type: String

ID of the social persona.

#### Return Value

Type: `ConnectApi.SocialAccountRelationship`

### hideSocialPost(socialPostId, socialAccountId)

Hide a social post in its social network.

#### API Version

46.0–61.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.HideSocialPostIntent hideSocialPost(String socialPostId, String socialAccountId)`

#### Parameters

socialPostId

Type: String

ID of the social post to hide.

socialAccountId

Type: String

ID of the social account that hides the post.

#### Return Value

Type: `ConnectApi.HideSocialPostIntent`

### likeSocialPost(socialPostId, socialAccountId)

Like a social post in its social network.

#### API Version

46.0–61.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.LikeSocialPostIntent likeSocialPost(String socialPostId, String socialAccountId)`

#### Parameters

socialPostId

Type: String

ID of the social post to like.

socialAccountId

Type: String

ID of the social account that likes the post.

#### Return Value

Type: `ConnectApi.LikeSocialPostIntent`

### massApprove(massApproval)

Approve or reject the publishing of a large number of social posts.

#### API Version

46.0–61.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.SocialPostMassApprovalOutput massApprove(ConnectApi.SocialPostMassApprovalInput massApproval)`

#### Parameters

massApproval

Type: [`ConnectApi.SocialPostMassApprovalInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_social_post_mass_approval.htm "List of social post ids and the action to approve or reject publishing them.")

A `ConnectApi.SocialPostMassApprovalInput` body that includes a list of social post IDs and the action to approve or reject publishing them.

#### Return Value

Type: [`ConnectApi.SocialPostMassApprovalOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_social_post_mass_approval.htm "Approval or rejection of a large number of social posts.")

### recallApproval(socialPostId)

Recall an approval request to publish a social post.

#### API Version

46.0–61.0

#### Requires Chatter

No

#### Signature

`public static Void recallApproval(String socialPostId)`

#### Parameters

socialPostId

Type: String

ID of the social post.

#### Return Value

Type: Void

### unfollowSocialPersona(socialPersonaId, socialAccountId)

Stop following a social persona in its social network.

#### API Version

45.0–61.0

#### Requires Chatter

No

#### Signature

`public static Void unfollowSocialPersona(String socialPersonaId, String socialAccountId)`

#### Parameters

socialPersonaId

Type: String

ID of the social persona to stop following.

socialAccountId

Type: String

ID of the social account that stops following the social persona.

#### Return Value

Type: Void

### unfollowSocialPostPersona(socialPostId, socialAccountId)

Stop following a social persona of a social post in its social network.

#### API Version

45.0–61.0

#### Requires Chatter

No

#### Signature

`public static Void unfollowSocialPostPersona(String socialPostId, String socialAccountId)`

#### Parameters

socialPostId

Type: String

ID of the social post authored by the social persona to stop following.

socialAccountId

Type: String

ID of the social account that stops following the social persona.

#### Return Value

Type: Void

### unhideSocialPost(socialPostId, socialAccountId)

Unhide a social post in its social network.

#### API Version

46.0–61.0

#### Requires Chatter

No

#### Signature

`public static Void unhideSocialPost(String socialPostId, String socialAccountId)`

#### Parameters

socialPostId

Type: String

ID of the social post to unhide.

socialAccountId

Type: String

ID of the social account that unhides the post.

#### Return Value

Type: Void

### unlikeSocialPost(socialPostId, socialAccountId)

Unlike a social post in its social network.

#### API Version

46.0–61.0

#### Requires Chatter

No

#### Signature

`public static Void unlikeSocialPost(String socialPostId, String socialAccountId)`

#### Parameters

socialPostId

Type: String

ID of the social post to unlike.

socialAccountId

Type: String

ID of the social account that unlikes the post.

#### Return Value

Type: Void
