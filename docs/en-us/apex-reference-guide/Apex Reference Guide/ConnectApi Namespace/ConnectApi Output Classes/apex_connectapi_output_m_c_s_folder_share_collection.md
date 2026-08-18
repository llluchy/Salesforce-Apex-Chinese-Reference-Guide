---
doc_id: "apex_connectapi_output_m_c_s_folder_share_collection"
---

# ConnectApi.MCSFolderShareCollection

Collection of targets that a managed content space folder is shared with.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `folderId` | String | ID of the managed content space folder. | 63.0 |
| `shares` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​MCSFolder​Share`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_m_c_s_folder_share.htm "Target that a managed content space folder is shared with.")\> | List of targets that a managed content space folder is shared with. | 63.0 |

## See Also

- [patchMCSFolderShares(folderId, mcsFolderShareCollectionUpdateInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_patchMCSFolderShares_2)

-   [getMCSFolderShares(folderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getMCSFolderShares_1 "Get targets that a managed content space folder is shared with.")
