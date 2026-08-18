---
doc_id: "apex_connectapi_output_managed_content_channels"
---

# ConnectApi.ManagedContentChannelsRepresentation

Collection of managed content channels.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `channels` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​AbstractManaged​ContentChannel​Representation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_managed_content_channel.htm "Managed content channel.")\> | List of managed content channels. | 62.0 |
| `currentPageUrl` | String | Connect REST API URL identifying the current page. | 62.0 |
| `nextPageUrl` | String | Connect REST API URL identifying the next page, or `null` if there isn’t a next page. | 62.0 |
| `previousPageUrl` | String | Connect REST API URL identifying the previous page, or `null` if there isn’t a previous page. | 62.0 |
| `totalChannels` | Integer | Total number of managed content channels. | 62.0 |

## See Also

- [getManagedContentChannels(pageParam, pageSize, showDetails)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm#apex_ConnectAPI_ManagedContentChannels_getManagedContentChannels_1)
