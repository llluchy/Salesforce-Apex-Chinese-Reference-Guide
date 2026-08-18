---
doc_id: "apex_connectapi_output_entity_recommendation"
---

# ConnectApi.EntityRecommendation

A Chatter, custom, or static recommendation.

Subclass of [ConnectApi.AbstractRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_recommendation.htm "A Chatter, custom, or static recommendation.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `actOnUrl` | String | For user, file, group, topic, and record `entity` types, use this Connect REST URL with a POST request to take action on the recommendation.
For `ConnectApi.RecommendedObject` `entity` types, such as custom recommendations, use the `actionUrl` property of the [ConnectApi.PlatformAction](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_platform_action.htm "A platform action instance with state information for the context user.") to take action on the recommendation.

 | 32.0 |
| `action` | [`ConnectApi.​Recommendation​ActionType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RecommendationActionTypeEnum) | Specifies the action to take on a recommendation.

-   `follow`—Follow a file, record, topic, or user.
-   `join`—Join a group.
-   `view`—View a file, group, article, record, user, custom, or static recommendation.

 | 32.0 |
| `entity` | [`ConnectApi.Actor`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actor.htm "Actor.") | The entity with which the receiver is recommended to take action. | 32.0 |
