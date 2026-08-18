---
doc_id: "apex_connectapi_output_m_c_s_folder_share"
---

# ConnectApi.MCSFolderShare

Target that a managed content space folder is shared with.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `canUserUnshare` | Boolean | Specifies whether the user has permission to unshare with the target space (`true`) or not (`false`). Content Manager or higher role in the target workspace has permission to unshare. | 63.0 |
| `shareStatus` | [`ConnectApi.​MCSFolderShare​Status`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#MCSFolderShareStatusEnum) | Status of sharing a managed content space folder. Values are:
-   `PendingShare`
-   `PendingUnshare`
-   `Shared`

 | 63.0 |
| `targetId` | String | ID of the share target. | 63.0 |
| `targetLabel` | String | Label of the share target. | 63.0 |

## See Also

- [ConnectApi.MCSFolderShareCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_m_c_s_folder_share_collection.htm)
