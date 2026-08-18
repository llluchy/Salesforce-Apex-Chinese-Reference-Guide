---
doc_id: "apex_connectapi_output_read_by_collection"
---

# ConnectApi.ReadByPage

A collection of information about who read the feed element and when.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `currentPageToken` | String | Token identifying the current page. | 40.0 |
| `currentPageUrl` | String | Connect REST API URL identifying the current page. The default is 25 items per page. | 40.0 |
| `items` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ReadBy`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_read_by.htm#apex_connectapi_output_read_by "Information about who read the feed element and when.")\> | Collection of read-by information, including users and when they last read the feed element. | 40.0 |
| `nextPageToken` | String | Token identifying the next page, or `null` if there isn’t a next page. | 40.0 |
| `nextPageUrl` | String | Connect REST API URL identifying the next page, or `null` if there isn’t a next page. | 40.0 |
| `previousPageToken` | String | Reserved for future use. | 40.0 |
| `previousPageUrl` | String | Reserved for future use. | 40.0 |
| `total` | Integer | Total number of users who read the feed element. This count appears in the UI under feed posts in private and unlisted Chatter groups as the “seen by” number, for example, “Seen by 48.” | 40.0 |

## See Also

- [ConnectApi.ReadByCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_read_by_capability.htm)
