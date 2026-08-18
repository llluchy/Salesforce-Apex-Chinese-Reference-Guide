---
doc_id: "apex_connectapi_output_audience_criteria"
---

# ConnectApi.AudienceCriteria

Custom recommendation audience criteria.

This class is abstract.

This class is a superclass of:

-   [ConnectApi.CustomListAudienceCriteria](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_custom_list_audience_criteria.htm "Criteria for the custom list type of custom recommendation audience.")
-   [ConnectApi.NewUserAudienceCriteria](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_new_user_audience_criteria.htm "Criteria for the new members type of custom recommendation audience.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `type` | [`ConnectApi.​RecommendationAudience​CriteriaType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RecommendationAudCriteriaTypeEnum) | Specifies the custom recommendation audience criteria type. One of these values:
-   `CustomList`—A custom list of users makes up the audience.
-   `MaxDaysInCommunity`—New members make up the audience.

 | 36.0 |

## See Also

- [ConnectApi.RecommendationAudience](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_audience.htm)
