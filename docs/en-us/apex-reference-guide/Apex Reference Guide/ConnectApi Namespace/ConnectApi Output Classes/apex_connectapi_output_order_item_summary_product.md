---
doc_id: "apex_connectapi_output_order_item_summary_product"
---

# ConnectApi.OrderItemSummaryProduct

Product item mapped to the order item summary.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `canViewProduct` | Boolean | Specifies whether the context user can view the product (`true`) or not (`false`). | 51.0 |
| `errorCode` | String | Error code for the product with errors. | 51.0 |
| `errorMessage` | String | Error message for the product with errors. | 51.0 |
| `fields` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.​RecordField`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordField.htm "Generic record field containing a label and text value.")\> | Map of the product fields queried. | 51.0 |
| `media` | [`ConnectApi.​ProductMedia`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_media.htm "Media associated with a product.") | Associated product media. | 51.0 |
| `productAttributes` | [`ConnectApi.​ProductAttributeSet​Summary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_attribute_set_summary.htm "Summary of a product attribute set.") | Summary of the product attributes. | 51.0 |
| `productId` | String | ID of the product. | 51.0 |

## See Also

- [ConnectApi.OrderItemSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary.htm)
