---
doc_id: "apex_connectapi_output_following_page"
---

# ConnectApi.FollowingPage

Page of following subscriptions.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `currentPageUrl` | String | Connect REST API URL identifying the current page. | 28.0 |
| `following` | `List<ConnectApi.​Subscription>` | List of subscriptions. | 28.0 |
| `nextPageUrl` | String | Connect REST API URL identifying the next page, or `null` if there isn’t a next page. | 28.0 |
| `previousPageUrl` | String | Connect REST API URL identifying the previous page, or `null` if there isn’t a previous page. | 28.0 |
| `total` | Integer | Total number of records being followed across all pages. | 28.0 |
