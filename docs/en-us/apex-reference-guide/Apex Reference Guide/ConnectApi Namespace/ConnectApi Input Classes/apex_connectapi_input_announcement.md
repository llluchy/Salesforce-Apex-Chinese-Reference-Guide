---
doc_id: "apex_connectapi_input_announcement"
---

# ConnectApi.AnnouncementInput

An announcement.

| Property | Type | Description | Required or Optional | Available |
| --- | --- | --- | --- | --- |
| `body` | `ConnectApi.MessageBodyInput` | Text of the announcement. | Required for creating an announcement if `feedItemId` isn’t specified
Don’t specify for updating an announcement.

 | 31.0 |
| `expirationDate` | Datetime | The Salesforce UI displays an announcement until 11:59 p.m. on this date unless another announcement is posted first. The Salesforce UI ignores the time value in the `expirationDate`. However, you can use the time value to create your own display logic in your own UI. | Required for creating an announcement

Optional for updating an announcement

 | 31.0 |
| `feedItemId` | String | ID of an `AdvancedTextPost` feed item that is the body of the announcement. | Required for creating an announcement if `body` isn’t specified

Don’t specify for updating an announcement.

 | 36.0 |
| `isArchived` | Boolean | Specifies whether the announcement is archived. | Optional | 36.0 |
| `parentId` | String | ID of the parent entity for the announcement, that is, a group ID when the announcement appears in a group. | Required for creating an announcement if `feedItemId` isn’t specified

Don’t specify for updating an announcement.

 | 36.0 |
| `sendEmails` | Boolean | Specifies whether the announcement is sent as an email to all group members regardless of their email setting for the group. If Chatter emails aren’t enabled for the organization, announcement emails aren’t sent. Default value is `false`. | Optional for creating an announcement

Don’t specify for updating an announcement

 | 36.0 |

## See Also

- [postAnnouncement(communityId, groupId, announcement)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_postAnnouncement_2)

-   [postAnnouncement(communityId, announcement)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Announcements_static_methods.htm#apex_ConnectAPI_Announcements_postAnnouncement_3 "Post an announcement.")
