---
doc_id: "apex_connectapi_output_managed_content_variant_status"
---

# ConnectApi.ManagedContentVariantStatusOutput

Information about a managed content variant's status in the authoring space.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `label` | String | Localized label for the status. | 60.0 |
| `status` | [`ConnectApi.​ManagedContent​VariantStatus`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ManagedContentVariantStatusEnum) | Status of the managed content variant. Values are:
-   `Draft`—Content isn’t published.
-   `Published`—Content is published and available for use in your live sites.
-   `Revised`—Content that’s published and edited. Publish this content to make the changes available for use in your live sites.

 | 60.0 |

## See Also

- [ConnectApi.ManagedContentDocument](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_document.htm)

-   [ConnectApi.ManagedContentVariant](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_variant.htm "Managed content variant.")
