---
doc_id: "apex_connectapi_output_audience_target_assignment"
---

# ConnectApi.AudienceTargetAssignment

Target assignments for a personalization audience.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `formulaScope` | `ConnectApi.​FormulaScope` | Formula scope of the target. | 51.0 |
| `groupName` | String | Group name of the target. Groups bundle related target and audience pairs. | 48.0 |
| `id` | String | ID of the target. | 48.0 |
| `isMatch` | Boolean | Specifies whether the target matches the current context (`true`) or doesn’t (`false`). | 48.0 |
| `priority` | Integer | Priority of the target. Within a group, priority determines which target is returned if the user matches more than one audience. | 48.0 |
| `publishStatus` | [`ConnectApi.​PublishStatus`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#PublishStatusEnum) | Publish status of the target. Values are:
-   `Draft`
-   `Live`

 | 48.0 |
| `targetType` | String | Type of target, indicating the nature of the data being targeted. | 48.0 |
| `targetValue` | String | Value of the target. | 48.0 |
| `url` | String | URL to the target. | 48.0 |

## See Also

- [ConnectApi.Audience](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience.htm)
