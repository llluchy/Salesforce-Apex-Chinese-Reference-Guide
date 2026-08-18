---
doc_id: "apex_connectapi_output_managed_content_space_channels"
---

# ConnectApi.ManagedContentSpaceChannelsRepresentation

List of managed content space channels.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `currentPageUrl` | String | URL to the current page of managed content space channels. | 62.0 |
| `nextPageUrl` | String | URL to the next page of Mmanaged content space channels. | 62.0 |
| `previousPageUrl` | String | URL to the previous page of managed content space channels. | 62.0 |
| `spaceChannels` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ManagedContent​SpaceChannel​Representation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_space_channel.htm "Managed content space channel.")\> | List of managed content space channels. | 62.0 |
| `totalSpaceChannels` | Integer | Total count of managed content space channels returned for the request. | 62.0 |

## See Also

- [patchManagedContentSpaceChannels(contentSpaceId, spaceChannels)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm#apex_ConnectAPI_ManagedContentSpaces_patchManagedContentSpaceChannels_2)

-   [getManagedContentSpaceChannels(contentSpaceId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm#apex_ConnectAPI_ManagedContentSpaces_getManagedContentSpaceChannels_1 "Get channels for a managed content space.")
