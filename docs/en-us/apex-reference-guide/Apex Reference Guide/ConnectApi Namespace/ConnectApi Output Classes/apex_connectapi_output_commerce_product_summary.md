---
doc_id: "apex_connectapi_output_commerce_product_summary"
---

# ConnectApi.CommerceProductSummary

Summary of a product in product search results.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `defaultImage` | [`ConnectApi.​ProductMedia`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_media.htm "Media associated with a product.") | Default image of the product. | 55.0 |
| `fields` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.​FieldValue`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_field_value.htm "Field's value in product search results.")\> | Map of fields belonging to the product. | 55.0 |
| `id` | String | ID of the product. | 55.0 |
| `name` | String | Name of the product. | 55.0 |
| `prices` | [`ConnectApi.​PricingResult​LineItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_pricing_result_line_item.htm "Pricing result line item.") | Prices of the product. | 55.0 |
| `productClass` | [`ConnectApi.​ProductClass`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#productClassEnum) | Class of product. Values are:
-   `Bundle`
-   `Set`
-   `Simple`
-   `Variation`
-   `VariationParent`

 | 55.0 |
| `productSelling​ModelInformation` | [`ConnectApi.​CommerceProduct​SellingModel`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_product_selling_model.htm "Product selling model information.") | Product selling model information. | 59.0 |
| `productVariation​Info` | [ConnectApi.ProductVariationInfo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_variation_info.htm "Product variation attributes, metadata, and mappings of attribute combinations to variation product IDs.") | Product variation attributes, metadata, and mappings of attribute combinations to variation product IDs. This field isn't available in stores with displayable fields enabled. | 63.0 |
| `purchaseQuantityRule` | [`ConnectApi.​PurchaseQuantity​Rule`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_purchase_quantity_rule.htm "Rule that restricts the quantity of a product that can be purchased.") | If one exists, purchase quantity rule for the product. | 58.0 |
| `urlName` | String | SEO-friendly URL name for the product. | 59.0 |
| `variationAttributeSet` | [`ConnectApi.​ProductAttribute​SetSummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_attribute_set_summary.htm "Summary of a product attribute set.") | Variation attribute set that’s associated with the product. | 55.0 |
