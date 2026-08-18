---
doc_id: "apex_connectapi_output_managed_content_provider_collection"
---

# ConnectApi.ManagedContentProviderCollection

Collection of managed content providers.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `contentSpaceId` | String | ID of the managed content space, if provided. Otherwise, `null`. | 66.0 |
| `currentPageUrl` | String | URL to the current page of managed content providers. | 65.0 |
| `nextPageUrl` | String | URL to the next page of managed content providers. | 65.0 |
| `providers` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ManagedContent​Provider`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_provider.htm "Information about a managed content provider.")\> | Managed content providers. | 65.0 |
| `total` | Integer | Total number of managed content providers. | 65.0 |

## See Also

- [getManagedContentProviders()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentProviders_1)

-   [getManagedContentProvidersForSpace(contentSpaceId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentProvidersForSpace_2 "Get digital asset management (DAM) providers for a managed content space.")
