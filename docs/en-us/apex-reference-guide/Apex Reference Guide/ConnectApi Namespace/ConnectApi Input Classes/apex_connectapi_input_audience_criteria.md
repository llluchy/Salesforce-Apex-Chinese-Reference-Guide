---
doc_id: "apex_connectapi_input_audience_criteria"
---

# ConnectApi.AudienceCriteriaInput

Custom recommendation audience criteria type.

This class is abstract and has no public constructor. You can make an instance only of a subclass.

Superclass for:

-   [ConnectApi.CustomListAudienceCriteriaInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_custom_list_audience_criteria.htm "Criteria for the custom list type of custom recommendation audience.")
-   [ConnectApi.NewUserAudienceCriteriaInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_new_user_audience_criteria.htm "Criteria for the new members type of custom recommendation audience.")

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `type` | [`ConnectApi.​Recommendation​Audience​CriteriaType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RecommendationAudCriteriaTypeEnum) | Specifies the custom recommendation audience criteria type. One of these values:
-   `CustomList`—A custom list of users makes up the audience.
-   `MaxDaysInCommunity`—New members make up the audience.

 | Optional

If not specified, defaults to `CustomList`.

 | 36.0 |

## See Also

- [ConnectApi.RecommendationAudienceInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_recommendation_audience.htm)
