---
doc_id: "apex_connectapi_output_feed_enabled_entity_summary"
---

# ConnectApi.FeedEnabledEntity

An entity that can have feeds associated with it.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `id` | String | The 18-character ID of the record. | 39.0 |
| `motif` | [`ConnectApi.Motif`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_motif.htm#apex_connectapi_output_motif "The motif properties contain URLs for small, medium, and large icons that indicate the Salesforce record type. Common record types are files, users, and groups, but all record types have a set of motif icons. Custom object records use their tab style icon. All icons are available to unauthenticated users so that, for example, you can display the motif icons in an email. The motif can also contain the record type’s base color.") | Small, medium, and large icons indicating the record's type. | 39.0 |
| `name` | String | The localized name of the record. | 39.0 |
| `type` | String | The type of the record. | 39.0 |
| `url` | String | URL to the record. | 39.0 |

## See Also

- [ConnectApi.ChatterStream](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream.htm)
