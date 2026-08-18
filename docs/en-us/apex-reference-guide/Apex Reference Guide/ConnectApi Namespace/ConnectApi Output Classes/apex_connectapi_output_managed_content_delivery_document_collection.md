---
doc_id: "apex_connectapi_output_managed_content_delivery_document_collection"
---

# ConnectApi.ManagedContentDeliveryDocumentCollection

Managed content delivery document collection.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `channelInfo` | [`ConnectApi.​ManagedContent​ChannelSummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel_summary.htm "Managed content channel.") | Information about the managed content channel. | 55.0–61.0 |
| `channelSummary` | [`ConnectApi.​ManagedContent​DeliveryChannel​SummaryRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_channel_summary.htm "Summary information of a managed content delivery channel.") | Summary information about the managed content delivery channel. | 62.0 |
| `contents` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​AbstractManaged​ContentDelivery​Document`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_managed_content_delivery_document.htm "Managed content delivery document.")\> | List of managed content delivery documents. | 55.0 |
| `currentPageUrl` | String | URL to the current page of managed content records. | 55.0 |
| `nextPageUrl` | String | URL to the next page of managed content records. | 55.0 |
| `previousPageUrl` | String | URL to the previous page of managed content records. | 55.0 |
| `references` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.​AbstractManaged​ContentReference`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_managed_content_reference.htm "Managed content reference.")\> | Map of references with `contentKey` as the key. | 55.0 |
| `referencesList` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​AbstractManaged​ContentReference`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_managed_content_reference.htm "Managed content reference.")\> | List of references. | 55.0 |
