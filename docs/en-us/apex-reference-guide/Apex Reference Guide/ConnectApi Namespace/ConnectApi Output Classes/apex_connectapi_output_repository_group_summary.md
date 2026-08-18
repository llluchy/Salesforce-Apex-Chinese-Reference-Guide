---
doc_id: "apex_connectapi_output_repository_group_summary"
---

# ConnectApi.RepositoryGroupSummary

A group summary.

Subclass of [ConnectApi.AbstractDirectoryEntrySummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_directory_entry_summary.htm "A directory entry with summary information.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `groupType` | [`ConnectApi.​ContentHub​GroupType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#directoryEntryTypeEnum) | Type of group. Values are:
-   `Everybody`—Group is public to everybody.
-   `EverybodyInDomain`—Group is public to everybody in the same domain.
-   `Unknown`—Group type is unknown.

 | 39.0 |
| `name` | String | Name of the group. | 39.0 |

## See Also

- [ConnectApi.ExternalFilePermissionInformation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_file_permission_information.htm)
