---
doc_id: "apex_connectapi_output_recommendation_audience"
---

# ConnectApi.RecommendationAudience

A custom recommendation audience.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `criteria` | `ConnectApi.AudienceCriteria` | The criteria for the custom recommendation audience type. | 36.0 |
| `id` | String | 18-character ID of the custom recommendation audience. | 35.0 |
| `memberCount` | Integer | Number of members in the custom recommendation audience.**Important**: This property is available only in version 35.0. In version 36.0 and later, this property is available in [ConnectApi.CustomListAudienceCriteria](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_custom_list_audience_criteria.htm "Criteria for the custom list type of custom recommendation audience.").Members of the custom recommendation audience. | 35.0 only |
| `members` | [`ConnectApi.​UserReferencePage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_reference_collection.htm#apex_connectapi_output_user_reference_collection "A list of user references.") | **Important**: This property is available only in version 35.0. In version 36.0 and later, this property is available in [ConnectApi.CustomListAudienceCriteria](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_custom_list_audience_criteria.htm "Criteria for the custom list type of custom recommendation audience.").Members of the custom recommendation audience. | 35.0 only |
| `modifiedBy` | [`ConnectApi.User`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_User.htm#apex_connectapi_output_User "User.") | User who last modified the custom recommendation audience. | 36.0 |
| `modifiedDate` | Datetime | ISO 8601 format date string, for example, 2011-02-25T18:24:31.000Z. | 36.0 |
| `name` | String | Name of the custom recommendation audience. | 35.0 |
| `url` | String | URL to the custom recommendation audience. | 35.0 |

## See Also

- [ConnectApi.RecommendationAudiencePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_audience_collection.htm)
