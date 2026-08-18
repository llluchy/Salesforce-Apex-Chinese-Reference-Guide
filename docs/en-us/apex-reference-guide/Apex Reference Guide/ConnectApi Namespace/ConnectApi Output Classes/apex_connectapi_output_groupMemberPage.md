---
doc_id: "apex_connectapi_output_groupMemberPage"
---

# ConnectApi.GroupMemberPage

Page of group members.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `currentPageUrl` | String | Connect REST API URL identifying the current page. | 28.0 |
| `members` | `List<ConnectApi.​GroupMember`\> | List of group members. | 28.0 |
| `myMembership` | `ConnectApi.​​Reference` | If the context user is a member of this group, returns information about that membership, otherwise, `null`. | 28.0 |
| `nextPageUrl` | String | Connect REST API URL identifying the next page, or `null` if there isn’t a next page. | 28.0 |
| `previousPageUrl` | String | Connect REST API URL identifying the previous page, or `null` if there isn’t a previous page. | 28.0 |
| `totalMemberCount` | Integer | Total number of group members across all pages. | 28.0 |
