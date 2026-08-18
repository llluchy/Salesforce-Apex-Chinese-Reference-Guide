---
doc_id: "apex_connectapi_output_user_group_detail_collection"
---

# ConnectApi.UserGroupDetailPage

A page of groups that a user is a member of.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `currentPageUrl` | String | URL to the current page. | 45.0 |
| `groups` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ChatterGroupDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupDetail.htm "Chatter group details.")\> | Collection of groups that the user is a member of. | 45.0 |
| `nextPageUrl` | String | URL to the next page, or `null` if there is no next page. | 45.0 |
| `previousPageUrl` | String | URL to the previous page, or `null` if there is no previous page. | 45.0 |
| `total` | Integer | Total number of groups that the user is a member of. | 45.0 |
