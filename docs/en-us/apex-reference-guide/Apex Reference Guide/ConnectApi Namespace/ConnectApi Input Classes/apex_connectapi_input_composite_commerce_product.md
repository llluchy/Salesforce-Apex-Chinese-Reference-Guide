---
doc_id: "apex_connectapi_input_composite_commerce_product"
---

# ConnectApi.CompositeCommerceProductInputRepresentation

Composite product input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `attributeSetInfo` | [`ConnectApi.​ProductAttributeSetInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_product_attribute_set.htm "Attribute set information input.") | Attribute set information for a variation parent product. | Optional | 62.0 |
| `categoryIds` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | List of category IDs associated with the product. | Optional | 61.0 |
| `productFields` | Map<String, String> | A map of product field names and their values. | Required | 61.0 |
| `productMedia` | [`ConnectApi.​ProductMedia`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_media.htm "Media associated with a product.") | Media associated with the product. | Optional | 61.0 |
