---
doc_id: "apex_connectapi_output_user_group_page"
---

# ConnectApi.UserGroupPage

A paginated list of groups the context user is a member of.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `currentPageUrl` | String | Connect REST API URL identifying the current page. | 28.0 |
| `groups` | `List<ConnectApi.​Chatter​Group​Summary>` | List of groups. | 28.0 |
| `nextPageUrl` | String | Connect REST API URL identifying the next page, or `null` if there isn’t a next page. | 28.0 |
| `previousPageUrl` | String | Connect REST API URL identifying the previous page, or `null` if there isn’t a previous page. | 28.0 |
| `total` | Integer | Total number of groups across all pages. | 28.0 |
