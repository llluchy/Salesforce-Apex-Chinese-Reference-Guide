---
doc_id: "apex_connectapi_output_abstract_recommendation"
---

# ConnectApi.AbstractRecommendation

A Chatter, custom, or static recommendation.

This class is abstract.

Superclass of:

-   [ConnectApi.EntityRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_entity_recommendation.htm "A Chatter, custom, or static recommendation.")
-   [ConnectApi.NonEntityRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_non_entity_recommendation.htm "A recommendation for a non-Salesforce entity, such as an application.")
    
    ConnectApi.NonEntityRecommendation isn’t used in version 34.0 and later. In version 34.0 and later, [ConnectApi.EntityRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_entity_recommendation.htm "A Chatter, custom, or static recommendation.") is used for all recommendations.
    

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `explanation` | [`ConnectApi.​Recommendation​Explanation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_rec_explanation_summary.htm "Explanation for a Chatter recommendation.") | The Chatter, custom, or static recommendation explanation. | 32.0 |
| `platformAction​Group` | [`ConnectApi.​PlatformAction​Group`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_platform_action_group.htm#apex_connectapi_output_platform_action_group "A platform action group instance with state appropriate for the context user.") | A platform action group instance with state appropriate for the context user. | 34.0 |
| `recommendation​Type` | [`ConnectApi.​RecommendationType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RecommendationTypeEnum) | Specifies the type of record being recommended. | 32.0 |
| `url` | String | URL for the Chatter, custom, or static recommendation. | 34.0 |

## See Also

- [ConnectApi.RecommendationsCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_capability.htm)

-   [ConnectApi.RecommendationCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm "A list of Chatter, custom, and static recommendations.")
