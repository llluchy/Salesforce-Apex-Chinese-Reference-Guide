---
doc_id: "apex_connectapi_output_cart_product_summary"
---

# ConnectApi.CartItemProduct

Product summary for a cart item.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `fields` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, String> | Map of product fields and values. | 49.0 |
| `name` | String | Name of the product. | 49.0 |
| `productClass` | [`ConnectApi.​ProductClass`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#productClassEnum) | Class of product. Values are:
-   `Bundle`
-   `Set`
-   `Simple`
-   `Variation`
-   `VariationParent`

 | 63.0 |
| `productId` | String | ID of the product. | 49.0 |
| `productSubscriptionInformation` |  | Reserved for future use. | 59.0 |
| `purchaseQuantityRule` | [`ConnectApi.​PurchaseQuantity​Rule`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_purchase_quantity_rule.htm "Rule that restricts the quantity of a product that can be purchased.") | If one exists, purchase quantity rule for the product. | 52.0 |
| `productUrlName` | String | SEO-friendly URL name for the product. | 64.0 |
| `sku` | String | SKU of the product. | 49.0 |
| `thumbnailImage` | [`ConnectApi.​ProductMedia`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_media.htm "Media associated with a product.") | Thumbnail image of the product. | 49.0 |
| `variationAttributes` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.​CartProduct​Attribute`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_product_attribute.htm "Product attribute for a cart item.")\> | Variation attributes associated with the product. | 50.0 |

## See Also

- [ConnectApi.AbstractCartItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_cart_item.htm)

-   [ConnectApi.WishlistItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_item.htm "Item in a wishlist.")
