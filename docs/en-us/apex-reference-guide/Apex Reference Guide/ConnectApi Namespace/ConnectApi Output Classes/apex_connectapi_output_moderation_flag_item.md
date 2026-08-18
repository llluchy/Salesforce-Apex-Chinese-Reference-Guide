---
doc_id: "apex_connectapi_output_moderation_flag_item"
---

# ConnectApi.ModerationFlagItemDetail

Flag details on a feed item, comment, or file.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `createdBy` | String | ID of the user who flagged the item. | 40.0 |
| `createdDate` | Datetime | Date when the item was flagged. | 40.0 |
| `id` | String | ID of the moderation flag. | 40.0 |
| `moderationType` | [`ConnectApi.​CommunityFlagType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagType) | Type of moderation flag. Values are:
-   `FlagAsInappropriate`—Flag for inappropriate content.
-   `FlagAsSpam`—Flag for spam.

 | 40.0 |
| `note` | String | Note from user who flagged the item. | 40.0 |
| `visibility` | [`ConnectApi.​CommunityFlag​Visibility`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagVisibility) | Visibility behavior of a flag for various user types. Values are:

-   `ModeratorsOnly`—The flag is visible only to users with moderation permissions on the flagged element or item.
-   `SelfAndModerators`—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item.

 | 40.0 |

## See Also

- [ConnectApi.ModerationFlagsCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_flags_collection.htm)
