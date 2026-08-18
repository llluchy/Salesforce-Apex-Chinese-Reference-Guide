---
doc_id: "apex_connectapi_output_managed_content_space_channel"
---

# ConnectApi.ManagedContentSpaceChannelRepresentation

Managed content space channel.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `channelSummary` | [`ConnectApi.​ManagedContent​ChannelSummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel_summary.htm "Managed content channel.") | Information about the managed content space channel. | 62.0 |
| `createdBy` | [`ConnectApi.​ManagedContent​UserSummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_user_summary.htm "Information about the user who created or modified the content.") | Information about the user who created the managed content space channel. | 62.0 |
| `createdDate` | Datetime | Date when the managed content space channel was created. | 62.0 |
| `status` | [`ConnectApi.​ManagedContent​SpaceChannel​Status`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ManagedContentSpaceChannelStatusEnum) | Status of the add or remove operation for a channel and managed content space.
-   `Added`—Channel was added to the managed content space.
-   `Failed`—Add or remove operation failed.
-   `Pending`—Add or remove operation is pending.
-   `Removed`—Channel was removed from the managed content space.

 | 62.0 |

## See Also

- [ConnectApi.ManagedContentSpaceChannelsRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_space_channels.htm)
