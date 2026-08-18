---
doc_id: "apex_connectapi_output_repository_folder_item"
---

# ConnectApi.RepositoryFolderItem

A folder item.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `file` | [`ConnectApi.​Repository​FileSummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_summary.htm#apex_connectapi_output_repository_file_summary "A summary of a repository file.") | If the folder item is a file, the file summary. If the folder item is a folder, `null`. | 39.0 |
| `folder` | [`ConnectApi.​Repository​FolderSummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_summary.htm#apex_connectapi_output_repository_folder_summary "A summary of a repository folder.") | If the folder item is a folder, the folder summary. If the folder item is a file, `null`. | 39.0 |
| `type` | [`ConnectApi.​FolderItemType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ContentHubFolderItemType) | Type of item in a folder. Values are:
-   `file`
-   `folder`

 | 39.0 |

## See Also

- [ConnectApi.RepositoryFolderItemsCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_items_collection.htm)
