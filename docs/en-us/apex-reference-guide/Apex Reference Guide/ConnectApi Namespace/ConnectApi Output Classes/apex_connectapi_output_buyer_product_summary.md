---
doc_id: "apex_connectapi_output_buyer_product_summary"
---

# ConnectApi.BuyerProductSummaryRepresentation

Representation of the buyer's product summary.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `id` | String> | ID of the product. | 66.0 |
| `name` | String | Name of the product. | 66.0 |
| `image` | [`ConnectApi.ProductImageOutputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_image_output.htm "Details about a product image.") | Product summary information for the line item. | 66.0 |
| `variationAttributes` | [`ConnectApi.ProductVariationAttributesRepresentation`](# "Representation of the buyer's product summary.") | List of variation attributes (color, size, and so on) associated with the product. | 66.0 |
| `fields` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.RecordFieldRepresentation`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_connectapi_output_recordField.htm "HTML (New Window)")\> | Product summary details for the line item. | 66.0 |
| `sku` | String | Stock Keeping Unit (SKU) of the product. | 66.0 |
| `canViewProduct` | Boolean | Indicates whether the context user can view the product (`true`) or not (`false`). | 66.0 |
| `success` | Boolean | Indicates whether the request was successful (`true`) or not (`false`). | 66.0 |
