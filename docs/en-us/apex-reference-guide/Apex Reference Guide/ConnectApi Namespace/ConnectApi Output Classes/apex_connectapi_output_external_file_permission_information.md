---
doc_id: "apex_connectapi_output_external_file_permission_information"
---

# ConnectApi.ExternalFilePermissionInformation

External file permission information.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `external​FilePermission​Types` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ContentHub​PermissionType`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_permission_type.htm#apex_connectapi_output_content_hub_permission_type "A permission type.")\> | Available permission types for the parent folder of the external file, or `null` for non-external files or when `includeExternalFilePermissionsInfo` is `false`. | 39.0 |
| `external​FilePermissions​Failure` | Boolean | `true` if the retrieval of external file information failed or if `includeExternalFilePermissionsInfo` is `false`; `false` otherwise. | 39.0 |
| `external​FilePermissions​InfoFailureReason` | String | Explanation of the failure if a failure occurred and `includeExternalFilePermissionsInfo` is `true`; `null` otherwise. | 39.0 |
| `external​FileSharing​Status` | [`ConnectApi.​ContentHub​ExternalItem​SharingType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ExternalItemSharingType) | Sharing status for the external file. Values are:
-   `DomainSharing`—File is shared with the domain.
-   `PrivateSharing`—File is private or shared only with individuals.
-   `PublicSharing`—File is publicly shared.

Value is `null` for non-external files or when `includeExternalFilePermissionsInfo` is `false`. | 39.0 |
| `repository​PublicGroups` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​RepositoryGroupSummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_group_summary.htm#apex_connectapi_output_repository_group_summary "A group summary.")\> | Available public groups in the external repository or `null` for non-external files or when `includeExternalFilePermissionsInfo` is `false`. | 39.0 |

## See Also

- [ConnectApi.AbstractRepositoryFile](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_repository_file.htm)
