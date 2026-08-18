---
doc_id: "apex_connectapi_output_product_detail"
---

# ConnectApi.ProductDetail

Details of a product.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `attributeSetInfo` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.​ProductAttribute​SetInfo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_attribute_set_info.htm "Attribute set metadata.")\> | Map of the attribute set developer name to its metadata. | 50.0 |
| `defaultImage` | [`ConnectApi.​ProductMedia`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_media.htm "Media associated with a product.") | Default image of the product. | 49.0 |
| `entitlement` | [`ConnectApi.​ProductEntitlement`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_entitlement.htm "Entitlements for a product.") | Entitlement details for the product.
To get pricing information for products in version 57 and later, use the [CommerceStorePricing Class](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceStorePricing_static_methods.htm#apex_ConnectAPI_CommerceStorePricing_static_methods "Get product prices.").

 | 49.0–56.0 |
| `fields` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, String> | List of fields for the product. | 49.0 |
| `id` | String | ID of the product. | 49.0 |
| `mediaGroups` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ProductMediaGroup`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_media_group.htm "Media group associated with a product.")\> | List of media groups of the product. | 49.0 |
| `primaryProduct​CategoryPath` | [`ConnectApi.​ProductCategoryPath`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_category_path.htm "List of product categories in a path.") | Primary category path of the product. | 49.0 |
| `productClass` | [`ConnectApi.​ProductClass`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#productClassEnum) | Class of product. Values are:

-   `Bundle`
-   `Set`
-   `Simple`
-   `Variation`
-   `VariationParent`

 | 50.0 |
| `productSelling​Models` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ProductSelling​Model`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_selling_model.htm "Product selling model for Commerce subscriptions.")\> | List of product selling models for the product. | 56.0 |
| `purchaseQuantity​Rule` | [`ConnectApi.​PurchaseQuantity​Rule`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_purchase_quantity_rule.htm "Rule that restricts the quantity of a product that can be purchased.") | If one exists, purchase quantity rule for the product. | 52.0 |
| `urlName` | String | SEO-friendly URL name for the product. | 59.0 |
| `variationAttribute​Set` | [`ConnectApi.​ProductAttributeSet`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_attribute_set.htm "Product attribute set data.") | Variation attribute set for the product. | 50.0 |
| `variationInfo` | [`ConnectApi.​ProductVariationInfo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_variation_info.htm "Product variation attributes, metadata, and mappings of attribute combinations to variation product IDs.") | Available and allowable values for variation attributes and a map to resolve variation product IDs from attribute value combinations. | 50.0 |
| `variationParentId` | String | ID of the variation parent. | 50.0 |
