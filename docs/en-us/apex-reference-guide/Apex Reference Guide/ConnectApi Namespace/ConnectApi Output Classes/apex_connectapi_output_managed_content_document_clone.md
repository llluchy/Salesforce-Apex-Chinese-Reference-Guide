---
doc_id: "apex_connectapi_output_managed_content_document_clone"
---

# ConnectApi.ManagedContentDocumentClone

Managed content document clone.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `apiName` | String | API name of the cloned content. | 61.0 |
| `cloneStatus` | [`ConnectApi.​ManagedContent​CloneStatus`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_clone_status.htm "Information about managed content's clone status.") | Status of the cloned content. | 61.0 |
| `contentKey` | String | Globally unique identifier (GUID) for the cloned content. | 61.0 |
| `errorMessage` | String | Error message if the primary variant failed to clone. | 61.0 |
| `failedVariants` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ManagedContent​FailedVariants`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_failed_variants.htm "Information about failed cloned managed content variants if cloning was partially successful.")\> | Information about failed cloned variants if cloning was partially successful. | 61.0 |
| `folder` | [`ConnectApi.​ManagedContent​FolderSummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_folder_summary.htm "Information about the managed content folder.") | Folder of the cloned content. | 61.0 |
| `managedContentId` | String | ID of the cloned content in the authoring workspace. | 61.0 |
| `resourceURL` | String | Resource URL of the cloned content. | 61.0 |
| `sourceContentKey​OrId` | String | ID or content key of the source managed content in the authoring workspace. | 61.0 |
| `title` | String | Title of cloned content. | 61.0 |
| `variants` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ManagedContent​ClonedVariants`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_cloned_variant.htm "Information about clone variants.")\> | List of cloned variants. | 61.0 |

## See Also

- [cloneManagedContentDocument(contentKeyOrId, ManagedContentCloneInputParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_cloneManagedContentDocument_1)
