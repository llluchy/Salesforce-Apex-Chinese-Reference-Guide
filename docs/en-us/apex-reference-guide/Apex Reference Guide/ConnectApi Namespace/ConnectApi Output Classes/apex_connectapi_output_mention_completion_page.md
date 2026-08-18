---
doc_id: "apex_connectapi_output_mention_completion_page"
---

# ConnectApi.MentionCompletionPage

Paginated list of Mention Completion response bodies.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `currentPageUrl` | String | Connect REST API URL identifying the current page. | 29.0 |
| `mentionCompletions` | `List<ConnectApi.​MentionCompletion>` | A list of mention completion proposals. Use these proposals to build a feed post body. | 29.0 |
| `nextPageUrl` | String | Connect REST API URL identifying the next page, or `null` if there isn’t a next page. | 29.0 |
| `previousPageUrl` | String | Connect REST API URL identifying the previous page, or `null` if there isn’t a previous page. | 29.0 |
