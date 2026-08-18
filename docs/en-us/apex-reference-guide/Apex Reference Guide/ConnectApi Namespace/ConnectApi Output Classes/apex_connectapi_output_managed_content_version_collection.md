---
doc_id: "apex_connectapi_output_managed_content_version_collection"
---

# ConnectApi.ManagedContentVersionCollection

Collection of managed content versions.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `currentPageUrl` | String | Connect REST API URL identifying the current page. | 47.0 |
| `items` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ManagedContent​Version`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_version.htm "Managed content version.")\> | List of managed content versions. | 47.0 |
| `managedContent​Types` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.​ManagedContentType`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_type.htm "Managed content type.")\> | Map of managed content types. | 47.0 |
| `nextPageUrl` | String | Connect REST API URL identifying the next page, or `null` if there isn’t a next page. | 47.0 |
| `total` | Integer | Total number of managed content versions. | 47.0 |
| `totalTypes` | Integer | Total number of managed content types. | 47.0 |
