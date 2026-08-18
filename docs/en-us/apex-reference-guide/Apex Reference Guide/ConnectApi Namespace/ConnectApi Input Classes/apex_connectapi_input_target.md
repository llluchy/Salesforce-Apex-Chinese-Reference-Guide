---
doc_id: "apex_connectapi_input_target"
---

# ConnectApi.TargetInput

Target to create.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `audienceId` | String | ID of the audience to assign to the target. | Required | 48.0 |
| `groupName` | String | Group name of the target. Groups bundle related target and audience pairs. You can have up to 2,000 groups and 500 targets per group. To determine the group name for targets of type `ExperienceVariation`, see [Personalization Target Developer and Group Names](https://developer.salesforce.com/docs/atlas.en-us.262.0.communities_dev.meta/communities_dev/communities_dev_personalization_names.htm "HTML (New Window)") in the *Experience Cloud Developer Guide*. | Required | 48.0 |
| `priority` | Integer | Priority of the target. Within a group, priority determines which target is returned if the user matches more than one audience. | Optional | 48.0 |
| `publishStatus` | [`ConnectApi.​PublishStatus`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#PublishStatusEnum) | The publish status of the target. Values are:
-   `Draft`
-   `Live`

We recommend setting the publish status to `Draft`. If you specify `Live`, your changes revert after you publish the site. | Optional | 48.0 |
| `targetType` | String | Type of target, indicating the nature of the data being targeted. Supported values include:

-   `Draft`
-   `Live`

You can have up to 2,500 `ExperienceVariation` targets and 25,000 record targets.

 | Required | 48.0 |
| `targetValue` | String | Value of the target. If `targetType` is `ExperienceVariation`, `targetValue` is the developer name of the experience variation. If `targetType` is `CustomObjectName__c`, `targetValue` is the ID of the custom object. To determine the developer name for targets of type `ExperienceVariation`, see [Personalization Target Developer and Group Names](https://developer.salesforce.com/docs/atlas.en-us.262.0.communities_dev.meta/communities_dev/communities_dev_personalization_names.htm "HTML (New Window)") in the *Experience Cloud Developer Guide*. | Required | 48.0 |

## See Also

- [ConnectApi.TargetCollectionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_target_collection.htm)
