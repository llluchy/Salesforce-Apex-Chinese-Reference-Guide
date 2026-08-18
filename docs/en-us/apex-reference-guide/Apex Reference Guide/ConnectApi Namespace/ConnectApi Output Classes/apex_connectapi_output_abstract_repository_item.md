---
doc_id: "apex_connectapi_output_abstract_repository_item"
---

# ConnectApi.AbstractRepositoryItem

A repository item.

This class is abstract.

Superclass of:

-   [ConnectApi.AbstractRepositoryFile](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_repository_file.htm "A repository file.")
-   [ConnectApi.AbstractRepositoryFolder](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_repository_folder.htm "A repository folder.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `createdBy` | String | Name of the user who created the item. | 39.0 |
| `createdDate` | Datetime | Date the item was created. | 39.0 |
| `description` | String | Description of the Item. | 39.0 |
| `id` | String | ID of the item. | 39.0 |
| `itemTypeUrl` | String | URL to the item type information. | 39.0 |
| `modifiedBy` | String | Name of the user who last modified the item. | 39.0 |
| `modifiedDate` | Datetime | Date the item was last modified. | 39.0 |
| `motif` | [`ConnectApi.​Motif`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_motif.htm#apex_connectapi_output_motif "The motif properties contain URLs for small, medium, and large icons that indicate the Salesforce record type. Common record types are files, users, and groups, but all record types have a set of motif icons. Custom object records use their tab style icon. All icons are available to unauthenticated users so that, for example, you can display the motif icons in an email. The motif can also contain the record type’s base color.") | Motif of the item. | 39.0 |
| `name` | String | Name of the item. | 39.0 |
| `repository` | [`ConnectApi.​Reference`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reference.htm#apex_connectapi_output_reference "Reference to a record.") | Item external repository. | 39.0 |
| `type` | String | Item type, `file` or `folder`. | 39.0 |
| `url` | String | The URL to the item. | 39.0 |
