---
doc_id: "apex_connectapi_output_comment_page"
---

# ConnectApi.CommentPage

A page of comments.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `comments` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​Comment`\> | Collection of comments. **Important:** As of version 32.0, use the `items` property. | 28.0–31.0 |
| `currentPageToken` | String | Token identifying the current page. | 28.0 |
| `currentPageUrl` | String | Connect REST API URL identifying the current page. | 28.0 |
| `items` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​Comment`\> | Collection of comments for this feed element. | 32.0 |
| `nextPageToken` | String | Token identifying the next page, or `null` if there isn’t a next page.
If you want to read more of the comments in search results, all the comments in the thread are refreshed, not just the ones that match the search term. Avoid using `nextPageToken` until the comments are refreshed.

 | 28.0 |
| `nextPageUrl` | String | Connect REST API URL identifying the next page, or `null` if there isn’t a next page.

If you want to read more of the comments in search results, all the comments in the thread are refreshed, not just the ones that match the search term. Avoid using `nextPageUrl` until the comments are refreshed.

 | 28.0 |
| `previousPageToken` | String | Token identifying the previous page, or `null` if there isn’t a previous page. | 44.0 |
| `previousPageUrl` | String | Connect REST API URL identifying the previous page, or `null` if there isn’t a previous page. | 44.0 |
| `total` | Integer | Total number of published comments for the parent feed element. | 28.0 |

## See Also

- [ConnectApi.CommentsCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comments_capability.htm)
