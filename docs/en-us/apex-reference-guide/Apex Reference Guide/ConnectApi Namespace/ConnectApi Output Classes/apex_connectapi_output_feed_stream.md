---
doc_id: "apex_connectapi_output_feed_stream"
---

# ConnectApi.ChatterStream

A Chatter feed stream.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `community` | `ConnectApi.CommunitySummary` | Experience Cloud site where the stream is. | 41.0 |
| `createdDate` | Datetime | Date the stream was created. | 39.0 |
| `description` | String | Description of the stream. | 39.0 |
| `id` | String | 18-character ID of the stream. | 39.0 |
| `name` | String | Name of the stream. | 39.0 |
| `subscriptions` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.FeedEnabledEntity`\> | List of entities whose feeds are included in the stream. | 39.0 |
| `url` | String | URL to the stream. | 39.0 |

## See Also

- [ConnectApi.ChatterStreamPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm)
