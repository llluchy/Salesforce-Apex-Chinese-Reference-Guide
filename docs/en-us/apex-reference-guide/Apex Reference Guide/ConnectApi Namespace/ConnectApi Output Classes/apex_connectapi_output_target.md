---
doc_id: "apex_connectapi_output_target"
---

# ConnectApi.Target

Personalization target information.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `audience` | [`ConnectApi.​AudienceTarget`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience_target.htm "Personalization audience assigned to a target.") | Audience assigned to the target. | 48.0 |
| `formulaScope` | [`ConnectApi.​FormulaScope`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_formula_scope.htm "Formula scope for a target.") | Formula scope of the target. | 50.0 |
| `groupName` | String | Group name of the target. Groups bundle related target and audience pairs. | 48.0 |
| `id` | String | ID of the target. | 48.0 |
| `priority` | Integer | Priority of the target. Within a group, priority determines which target is returned if the user matches more than one audience. | 48.0 |
| `publishStatus` | [`ConnectApi.​PublishStatus`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#PublishStatusEnum) | Publish status of the target. Values are:
-   `Draft`
-   `Live`

 | 48.0 |
| `scope` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​Scope`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scope.htm "Scope information for a target.")\> | List of scopes for the target.

In version 50.0 and later, the `formulaScope` property returns this information.

 | 48.0–49.0 |
| `targetType` | String | Type of target, indicating the nature of the data being targeted. | 48.0 |
| `targetValue` | String | Value of the target. | 48.0 |
| `url` | String | URL to the target. | 48.0 |

## See Also

- [ConnectApi.TargetCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_target_collection.htm)
