---
doc_id: "apex_connectapi_output_read_by_capability"
---

# ConnectApi.ReadByCapability

If a feed element has this capability, the context user can mark it as read.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `isReadByMe` | Boolean | Specifies whether the feed element has been read (`true`) or not (`false`) by the context user. | 40.0 |
| `lastReadDateByMe` | Datetime | Last date when the feed element was marked read for the context user in ISO 8601 format. Otherwise, `null`. | 40.0 |
| `page` | [`ConnectApi.​ReadByPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_read_by_collection.htm#apex_connectapi_output_read_by_collection "A collection of information about who read the feed element and when.") | First page of information about who read the feed element and when. | 40.0 |

## See Also

- [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
