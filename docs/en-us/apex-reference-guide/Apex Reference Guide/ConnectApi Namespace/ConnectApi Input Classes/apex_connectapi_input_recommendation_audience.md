---
doc_id: "apex_connectapi_input_recommendation_audience"
---

# ConnectApi.RecommendationAudienceInput

A custom recommendation audience.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `criteria` | `ConnectApi.AudienceCriteriaInput` | The criteria for the custom recommendation audience type. | Optional
If not specified when creating a recommendation audience, the audience criteria type defaults to custom list.

 | 36.0 |
| `memberOperation​Type` | [`ConnectApi.​Recommendation​AudienceMember​OperationType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RecommendationAudienceMemberOperationType) | The operation to carry out on the audience members. **Important:** This property is available only in version 35.0. In version 36.0 and later, use [ConnectApi.CustomListAudienceCriteriaInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_custom_list_audience_criteria.htm "Criteria for the custom list type of custom recommendation audience.").

-   `Add`—Adds specified members to the audience.
-   `Remove`—Removes specified members from the audience.

 | Required to update a recommendation audience

Don’t use or specify `null` to create a recommendation audience

 | 35.0 only |
| `members` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | A collection of user IDs. **Important:** This property is available only in version 35.0. In version 36.0 and later, use [ConnectApi.CustomListAudienceCriteriaInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_custom_list_audience_criteria.htm "Criteria for the custom list type of custom recommendation audience.").

When updating an audience, you can include up to 100 members. An audience can have up to 100,000 members, and each Experience Cloud site can have up to 100 audiences.

 | Required to update a recommendation audience

Don’t use or specify `null` to create a recommendation audience

 | 35.0 only |
| `name` | String | The unique name of the custom recommendation audience. | Optional to update a recommendation audience

Required to create a recommendation audience

 | 35.0 |

## See Also

- [createRecommendationAudience(communityId, recommendationAudience)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_createRecommendationAudience_3)
