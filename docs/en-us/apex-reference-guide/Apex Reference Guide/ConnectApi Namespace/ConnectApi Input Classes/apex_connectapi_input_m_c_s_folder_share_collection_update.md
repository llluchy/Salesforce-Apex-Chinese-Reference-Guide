---
doc_id: "apex_connectapi_input_m_c_s_folder_share_collection_update"
---

# ConnectApi.MCSFolderShareCollectionUpdateInput

Update the targets that a managed content space folder is shared with.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `shareWith` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​MCSFolder​ShareInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_m_c_s_folder_share.htm "Target to share a managed content space folder with.")\> | List of target IDs to share the managed content space folder with.
Supported target IDs are the root folder IDs of workspaces. To get the root folder ID for a space, use the [`getManagedContentSpace(contentSpaceId)`](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentSpace_1 "Get a managed content space.") method.

 | Required if `unshareWith` isn’t specified | 63.0 |
| `unshareWith` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | Comma-separated list of target IDs to unshare the managed content space folder with. | Required if `shareWith` isn’t specified | 63.0 |

## See Also

- [getMCSFolderShares(folderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getMCSFolderShares_1)
