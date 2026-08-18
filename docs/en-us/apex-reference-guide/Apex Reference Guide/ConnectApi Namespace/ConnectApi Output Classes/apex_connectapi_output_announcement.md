---
doc_id: "apex_connectapi_output_announcement"
---

# ConnectApi.Announcement

An announcement displays in a designated location in the Salesforce UI until 11:59 p.m. on its expiration date, unless it’s deleted or replaced by another announcement.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `expirationDate` | Datetime | The Salesforce UI displays an announcement until 11:59 p.m. on this date unless another announcement is posted first. The Salesforce UI ignores the time value in the `expirationDate`. However, you can use the time value to create your own display logic in your own UI. | 31.0 |
| `feedElement` | `ConnectApi.​FeedElement` | The feed element that contains the body of the announcement and its associated comments, likes, and so on. | 31.0 |
| `id` | String | 18-character ID of the announcement. | 31.0 |
| `isArchived` | Boolean | Specifies whether the announcement is archived. | 36.0 |
| `sendEmails` | Boolean | Specifies whether the announcement is sent as an email to all group members. | 36.0 |
| `url` | String | The URL to the announcement. | 33.0 |

## See Also

- [ConnectApi.AnnouncementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_announcementpage.htm)

-   [ConnectApi.ChatterGroup](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chatter_group.htm "Chatter group.")
