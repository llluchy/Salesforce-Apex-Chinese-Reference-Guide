---
doc_id: "apex_connectapi_output_managed_content_delivery_channels"
---

# ConnectApi.ManagedContentDeliveryChannelsRepresentation

Collection of managed content delivery channels.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `channels` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ManagedContent​DeliveryChannel​SummaryRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_channel_summary.htm "Summary information of a managed content delivery channel.")\> | List of managed content delivery channels. | 62.0 |
| `currentPageUrl` | String | Connect REST API URL identifying the current page. | 62.0 |
| `nextPageUrl` | String | Connect REST API URL identifying the next page, or `null` if there isn’t a next page. | 62.0 |
| `previousPageUrl` | String | Connect REST API URL identifying the previous page, or `null` if there isn’t a previous page. | 62.0 |
| `totalChannels` | Integer | Total number of managed content delivery channels. | 62.0 |

## See Also

- [getAllDeliveryChannels(pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#unique_169763683)
