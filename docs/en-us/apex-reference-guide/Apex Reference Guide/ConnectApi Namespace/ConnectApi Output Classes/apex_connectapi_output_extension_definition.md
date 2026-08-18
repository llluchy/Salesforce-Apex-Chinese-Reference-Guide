---
doc_id: "apex_connectapi_output_extension_definition"
---

# ConnectApi.ExtensionDefinition

An extension's definition.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `canAccess` | Boolean | Indicates whether users can access the extension when it’s associated with a feed element. | 40.0 |
| `canCreate` | Boolean | Indicates whether users can create a feed element with the extension in the org. | 40.0 |
| `createdDate` | Datetime | Date when the extension was created. | 40.0 |
| `description` | String | Description of the extension. | 40.0 |
| `iconUrl` | String | URL to the icon for the extension. | 40.0 |
| `id` | String | ID of the extension. | 40.0 |
| `information​Collection` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​AbstractExtension​Information`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_extension_information.htm#apex_connectapi_output_abstract_extension_information "Extension information.")\> | Collection of extension information. | 40.0 |
| `isEnabled​InCommunity` | Boolean | Indicates whether the extension is enabled in the site. | 40.0 only |
| `isEnabled​InLightningPublisher` | Boolean | Indicates whether the extension is enabled in the Lightning publisher. | 40.0 only |
| `name` | String | Name of the extension. | 40.0 |
| `position` | Integer | Position in which the extension is displayed in the publisher. | 41.0 |

## See Also

- [ConnectApi.ExtensionDefinitions](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_extension_definition_collection.htm)
