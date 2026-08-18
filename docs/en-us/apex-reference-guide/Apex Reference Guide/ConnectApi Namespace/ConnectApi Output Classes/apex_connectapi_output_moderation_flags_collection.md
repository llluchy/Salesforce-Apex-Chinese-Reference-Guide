---
doc_id: "apex_connectapi_output_moderation_flags_collection"
---

# ConnectApi.ModerationFlagsCollection

A collection of flags on a feed item, comment, or file.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `currentPageToken` | String | Token identifying the current page. | 40.0 |
| `currentPageUrl` | String | Connect REST API URL identifying the current page. | 40.0 |
| `flags` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ModerationFlag​ItemDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_flag_item.htm#apex_connectapi_output_moderation_flag_item "Flag details on a feed item, comment, or file.")\> | List of flag details. | 40.0 |
| `nextPageToken` | String | Token identifying the next page, or `null` if there isn’t a next page. | 40.0 |
| `nextPageUrl` | String | Connect REST API URL identifying the next page, or `null` if there isn’t a next page. | 40.0 |
| `pageSize` | Integer | Number of items per page. | 40.0 |

## See Also

- [ConnectApi.ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm)
