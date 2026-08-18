---
doc_id: "apex_connectapi_output_n_b_a_reaction"
---

# ConnectApi.RecommendationReaction

A reaction to a recommendation produced by a recommendation strategy

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `aiModel` | String | Reserved for future use. | 47.0 |
| `contextRecord` | [`ConnectApi.Reference`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reference.htm#apex_connectapi_output_reference "Reference to a record.") | Reference to the context record. | 45.0 |
| `createdBy` | [`ConnectApi.​Reference`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reference.htm#apex_connectapi_output_reference "Reference to a record.") | Reference to the reaction creator. | 45.0 |
| `createdDate` | Datetime | Reaction creation date. | 45.0 |
| `externalId` | String | External target ID of the recommendation reacted on. This ID doesn’t need to be a Salesforce 18-character ID. For example, it can be a product number from an external system. | 46.0 |
| `id` | String | Reaction record ID. | 45.0 |
| `onBehalfOf` | [`ConnectApi.​Reference`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reference.htm#apex_connectapi_output_reference "Reference to a record.") | Reference to the user or record that is indirectly reacting to the recommendation. | 45.0 |
| `reactionType` | [`ConnectApi.​RecommendationReaction​Type`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#NBAReactionTypeEnum) | Type of reaction to a recommendation. Values are:
-   `Accepted`
-   `Rejected`

 | 45.0 |
| `recommendation​Mode` | String | Reserved for future use.Mode of recommendation, if you’re using Einstein Intelligent Offers, an AppExchange package. | 46.0 |
| `recommendation​Score` | Double | Reserved for future use.Einstein score, if you’re using Einstein Intelligent Offers, an AppExchange package. | 46.0 |
| `strategy` | [`ConnectApi.​RecordSnapshot`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_record_snapshot.htm#apex_connectapi_output_record_snapshot "A record snapshot in a recommendation reaction.") | Strategy that recommended the target record. | 45.0 |
| `targetAction` | [`ConnectApi.​RecordSnapshot`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_record_snapshot.htm#apex_connectapi_output_record_snapshot "A record snapshot in a recommendation reaction.") | Target action that is recommended. | 45.0 |
| `targetRecord` | [`ConnectApi.​Reference`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reference.htm#apex_connectapi_output_reference "Reference to a record.") | Reference to the target record. | 45.0 |
| `url` | String | URL to the recommendation reaction. | 45.0 |

## See Also

- [ConnectApi.RecommendationReactions](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_reaction_collection.htm)
