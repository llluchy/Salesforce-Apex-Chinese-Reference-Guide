---
doc_id: "apex_connectapi_input_managed_content_provider_instance"
---

# ConnectApi.ManagedContentProviderInstanceInput

Create or update a managed content provider instance.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `instanceKey` | String | Provider instance key. | Required to create a provider instance
At least one property is required to update a provider instance.

 | 65.0 |
| `isDefault` | Boolean | Specifies whether the instance is the default instance (`true`) or not (`false`). | Required to create a provider instance

At least one property is required to update a provider instance.

 | 65.0 |
| `name` | String | Name of the provider instance. | Required to create a provider instance

At least one property is required to update a provider instance.

 | 65.0 |
| `providerLightning​ComponentId` | String | ID of the provider lightning component. | Required to create a provider instance

This property isn’t supported for updating a provider instance.

 | 65.0 |

## See Also

- [updateManagedContentProviderInstance(providerInstanceId, providerInstanceInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_updateManagedContentProviderInstance_2)

-   [createManagedContentProvider(providerInstanceInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_createManagedContentProvider_2 "Create a digital asset management (DAM) provider instance.")
