---
doc_id: "apex_connectapi_output_order_summary_product_lookup_output"
---

# ConnectApi.OrderSummaryProductLookupOutput

Order summary product lookup output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `canViewProduct` | Boolean | Specifies whether the context user can view the product (true) or not (false). | 58.0 |
| `errorCode` | String | Error code captured during product load. | 58.0 |
| `errorMessage` | String | Error message captured during product load. | 58.0 |
| `fields` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.RecordField`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordField.htm "Generic record field containing a label and text value.")\> | Map of requested product fields. | 58.0 |
| `id` | String | Id of the product | 58.0 |
| `media` | [`ConnectApi.ProductMedia`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_media.htm "Media associated with a product.") | Associated product media. | 58.0 |
| `variationAttributes` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, `ConnectApi.OrderSummaryProductAttribute`\> | Variation attributes (color, size, and so on) associated with the product. | 58.0 |
