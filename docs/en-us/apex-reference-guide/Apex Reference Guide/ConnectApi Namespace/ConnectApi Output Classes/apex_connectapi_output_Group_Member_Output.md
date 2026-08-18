---
doc_id: "apex_connectapi_output_Group_Member_Output"
---

# ConnectApi.GroupMember

Member of a group.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `id` | String | User’s 18-character ID. | 28.0 |
| `lastFeed​AccessDate` | Datetime | The date and time at which the group member last accessed the group feed. | 31.0 |
| `role` | `ConnectApi.​GroupMembership​Type` Enum | Type of membership the user has with the group.
-   `GroupOwner`
-   `GroupManager`
-   `NotAMember`
-   `NotAMemberPrivateRequested`
-   `StandardMember`

 | 28.0 |
| `url` | String | Connect REST API URL to this membership. | 28.0 |
| `user` | `ConnectApi.​User​Summary` | Information about the user who is subscribed to this group. | 28.0 |

## See Also

- [ConnectApi.GroupMemberPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_groupMemberPage.htm)
