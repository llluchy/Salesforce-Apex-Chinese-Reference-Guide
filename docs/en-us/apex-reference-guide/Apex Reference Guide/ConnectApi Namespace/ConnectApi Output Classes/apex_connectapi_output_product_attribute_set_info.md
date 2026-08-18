---
doc_id: "apex_connectapi_output_product_attribute_set_info"
---

# ConnectApi.ProductAttributeSetInfo

Attribute set metadata.

:::tip Important
Where possible, we changed noninclusive terms to align with our company
        value of Equality. We maintained certain terms to avoid any effect on customer
        implementations.
:::

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `attributeInfo` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.​ProductAttributeInfo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_attribute_info.htm "Product attribute information.")\> | Map of the API name of the attribute field to the attribute metadata. | 50.0 |
| `description` | String | Description of the attribute set. | 50.0 |
| `developerName` | String | Developer name of the attribute set. | 50.0 |
| `id` | String | ID of the attribute set. | 50.0 |
| `masterLabel` | String | Label of the attribute set. | 50.0 |
| `sequence` | Integer | Sequence of the attribute set for the product. | 50.0 |

## See Also

- [ConnectApi.ProductDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_detail.htm)
