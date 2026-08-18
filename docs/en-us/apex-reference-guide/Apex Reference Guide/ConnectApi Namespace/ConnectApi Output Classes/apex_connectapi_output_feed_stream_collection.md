---
doc_id: "apex_connectapi_output_feed_stream_collection"
---

# ConnectApi.ChatterStreamPage

A collection of Chatter feed streams.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `currentPageUrl` | String | URL to the current page of streams. | 39.0 |
| `items` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ChatterStream`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream.htm#apex_connectapi_output_feed_stream "A Chatter feed stream.")\> | List of streams. | 39.0 |
| `nextPageUrl` | String | URL to the next page of streams.
In version 39.0, all streams are included in `currentPageUrl` and `nextPageUrl` is `null`.

 | 39.0 |
| `total` | Integer | Total number of streams in the collection. | 39.0 |
