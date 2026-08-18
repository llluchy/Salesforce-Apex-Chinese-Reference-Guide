---
doc_id: "apex_connectapi_output_product_variation_info"
---

# ConnectApi.ProductVariationInfo

Product variation attributes, metadata, and mappings of attribute combinations to variation product IDs.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `attributesTo​ProductMappings` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ProductAttributes​ToProductEntry`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_attributes_to_product_entry.htm "Mapping of an attribute value combination to a variation product ID.")\> | List ordered by `ProductAttribute.Sequence` values that map the attribute value combinations to the variation product ID. | 50.0 |
| `variationAttributeInfo` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.​ProductAttributeInfo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_attribute_info.htm "Product attribute information.")\> | Map of field API name to product attribute information. | 51.0 |

## See Also

- [ConnectApi.ProductDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_detail.htm)
