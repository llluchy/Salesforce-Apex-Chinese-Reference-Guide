---
doc_id: "apex_connectapi_output_GroupRecordPage"
---

# ConnectApi.GroupRecordPage

A paginated list of `ConnectApi.GroupRecord` objects.

| Property | Type | Description | Available Version |
| --- | --- | --- | --- |
| `current​PageUrl` | String | Connect REST API URL identifying the current page. | 33.0 |
| `next​PageUrl` | String | Connect REST API URL identifying the next page, or `null` if there isn’t a next page. | 33.0 |
| `previous​PageUrl` | String | Connect REST API URL identifying the previous page, or `null` if there isn’t a previous page. | 33.0 |
| `records` | `List<ConnectApi.​GroupRecord>` | List of records on the current page. | 33.0 |
| `total​Record​Count` | Integer | Total number of records associated with the group. | 33.0 |
