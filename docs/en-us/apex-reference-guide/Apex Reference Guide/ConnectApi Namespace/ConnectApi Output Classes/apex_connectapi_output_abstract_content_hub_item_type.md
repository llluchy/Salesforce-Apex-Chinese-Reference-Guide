---
doc_id: "apex_connectapi_output_abstract_content_hub_item_type"
---

# ConnectApi.AbstractContentHubItemType

An item type associated with a repository folder.

This class is abstract.

Superclass of:

-   [ConnectApi.ContentHubItemTypeDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_item_type_detail.htm "The details of an item type associated with a repository folder.")
-   [ConnectApi.ContentHubItemTypeSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_item_type_summary.htm "The summary of an item type associated with a repository folder.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `contentStream​Support` | [`ConnectApi.​ContentHub​StreamSupport`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ContentHubStreamSupportEnum) | Support for content streaming. Values are:
-   `ContentStreamAllowed`
-   `ContentStreamNotAllowed`
-   `ContentStreamRequired`

 | 39.0 |
| `description` | String | Description of the item type. | 39.0 |
| `displayName` | String | Display name of the item type. | 39.0 |
| `id` | String | ID of the item type. | 39.0 |
| `isVersionable` | Boolean | Indicates whether the item type can have versions. | 39.0 |
| `url` | String | URL to the detailed information of the item type. | 39.0 |
