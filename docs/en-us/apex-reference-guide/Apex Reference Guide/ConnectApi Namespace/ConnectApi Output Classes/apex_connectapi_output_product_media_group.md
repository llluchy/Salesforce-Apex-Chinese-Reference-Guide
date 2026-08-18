---
doc_id: "apex_connectapi_output_product_media_group"
---

# ConnectApi.ProductMediaGroup

Media group associated with a product.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `developerName` | String | API name of the product media group. | 49.0 |
| `id` | String | ID of the product media group. | 49.0 |
| `mediaItems` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ProductMedia`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_media.htm "Media associated with a product.")\> | List of media items within a product media group. | 49.0 |
| `name` | String | Name of the product media group. | 49.0 |
| `usageType` | [`ConnectApi.​ProductMedia​UsageType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#productMediaUsageTypeEnum) | Usage type of a product media item within a media group. Values are:
-   `Attachment`—Product media group with product documents as attachments.
-   `Banner`—Product category media group with banner images of the product.
-   `Listing`—Product media group with listing images of the product.
-   `Standard`—Product media group with standard images and videos of the product.
-   `Tile`—Product category media group with tile images of the product.

 | 49.0 |

## See Also

- [ConnectApi.ProductDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_detail.htm)

-   [ConnectApi.ProductCategoryDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_category_detail.htm "Details of a product category.")
