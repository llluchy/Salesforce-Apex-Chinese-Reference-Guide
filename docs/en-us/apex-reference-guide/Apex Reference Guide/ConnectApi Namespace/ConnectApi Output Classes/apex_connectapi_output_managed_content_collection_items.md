---
doc_id: "apex_connectapi_output_managed_content_collection_items"
---

# ConnectApi.ManagedContentCollectionItems

Managed content collection Items.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `channelInfo` | [`ConnectApi.​ManagedContent​ChannelSummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel_summary.htm "Managed content channel.") | Information about the managed content channel. | 56.0–61.0 |
| `channelSummary` | [`ConnectApi.​ManagedContent​DeliveryChannel​SummaryRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_channel_summary.htm "Summary information of a managed content delivery channel.") | Summary information about the managed content delivery channel. | 62.0 |
| `collectionKey` | String | Unique identifier for the collection. | 56.0 |
| `collectionType` | [`ConnectApi.​ManagedContent​TypeSummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_type_summary.htm "Managed content type.") | Type of collection. | 56.0 |
| `currentPageUrl` | String | URL to the current page. | 63.0 |
| `id` | String | ID of the collection. | 56.0 |
| `items` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ManagedContent​CollectionItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_collection_item.htm "Managed content collection item.")\> | List of collection Items. | 56.0 |
| `language` | String | Language locale of the collection. | 56.0 |
| `nextPageUrl` | String | URL to the next page. | 63.0 |
| `previousPageUrl` | String | URL to the previous page. | 63.0 |
| `publishedDate` | Datetime | Most recent publish date of the collection. | 56.0 |
| `title` | String | Title of the collection. | 56.0 |
| `total` | Integer | Total number of items in the current collection detail page. | 56.0 |
| `urlName` | String | URL name of the collection. | 56.0 |

## See Also

- [getCollectionItemsForChannel(channelId, collectionKeyOrId, language)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getCollectionItemsForChannel_1)

-   [getCollectionItemsForSite(siteId, collectionKeyOrId, language)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getCollectionItemsForSite_2 "Get collection items for an Experience Cloud site.")
