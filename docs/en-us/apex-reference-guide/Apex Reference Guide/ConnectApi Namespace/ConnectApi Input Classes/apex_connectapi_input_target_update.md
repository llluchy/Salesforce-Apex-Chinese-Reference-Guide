---
doc_id: "apex_connectapi_input_target_update"
---

# ConnectApi.TargetUpdateInput

Target to update.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `audienceId` | String | ID of the audience to assign to the target. | Required if `priority` isn’t specified. Otherwise, Optional | 48.0 |
| `priority` | Integer | Priority of the target. Within a group, priority determines which target is returned if the user matches more than one audience. | Required if `audienceId` isn’t specified. Otherwise, Optional | 48.0 |
| `targetId` | String | ID of the target to update. | Required | 48.0 |

## See Also

- [ConnectApi.TargetCollectionUpdateInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_target_collection_update.htm)
