---
doc_id: "apex_connectapi_output_product_attributes_to_product_entry"
---

# ConnectApi.ProductAttributesToProductEntry

Mapping of an attribute value combination to a variation product ID.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `canonicalKey` | String | Attribute API values concatenated with an underscore (\_) based on the sequence number of the attributes in the attribute set. | 50.0 |
| `productId` | String | Variation product ID for the selection of attributes. | 50.0 |
| `selectedAttributes` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ProductAttribute​SelectionInfo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_attribute_selection_info.htm "Product attribute.")\> | Ordered list of attribute values and metadata that can be used to form a key that maps to product ID. | 50.0 |
| `urlName` | String | Variant URL name for the selection of attributes. | 59.0 |

## See Also

- [ConnectApi.ProductVariationInfo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_variation_info.htm)
