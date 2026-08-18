---
doc_id: "apex_connectapi_output_n_b_a_recommendation"
---

# ConnectApi.NBARecommendation

A recommendation returned by a recommendation strategy.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `aiModel` | String | Reserved for future use. | 47.0 |
| `acceptanceLabel` | String | Text indicating user acceptance of the recommendation. | 45.0 |
| `description` | String | Description of the recommendation. | 45.0 |
| `externalId` | String | External ID of the recommendation. This ID doesn’t need to be a Salesforce 18-character ID. For example, it can be a product number from an external system. | 46.0 |
| `imageUrl` | String | URL to the asset file to display. | 45.0 |
| `recommendation​Mode` | String | Reserved for future use.Mode of recommendation, if you’re using Einstein Intelligent Offers, an AppExchange package. | 46.0 |
| `recommendation​Score` | Double | Reserved for future use. | 46.0 |
| `rejectionLabel` | String | Text indicating user rejection of the recommendation. | 45.0 |
| `target` | [`ConnectApi.​AbstractNBATarget`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_n_b_a_target.htm "A recommendation target of a recommendation strategy.") | Target to act on. | 45.0 |
| `targetAction` | [`ConnectApi.​AbstractNBAAction`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_n_b_a_action.htm "A recommended action of recommendation strategy.") | Action to recommend. | 45.0 |

## See Also

- [ConnectApi.NBARecommendations](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_recommendations.htm)
