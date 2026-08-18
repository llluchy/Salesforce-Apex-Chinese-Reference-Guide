---
doc_id: "apex_connectapi_input_promotion_evaluate"
---

# ConnectApi.PromotionEvaluateInput

Find promotions that the customer is eligible for and compute their discounts.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `cart` | `ConnectApi.PromotionCart​Input` | Cart and its items. | Required | 57.0 |
| `cartDelivery​Groups` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.PromotionCartDeliveryGroupInput`\> | List of cart delivery groups associated with the items in the cart. Available if shipping promotions are enabled. | Required when evaluating shipping promotions | 57.0 |
| `couponCodes` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | Collection of coupon codes to enable promotions. A customer can apply a maximum of two coupons per cart. | Optional | 57.0 |
| `effectiveAccount​Id` | String | ID of the account for which the request is made. | Required if `segments` isn’t specified | 57.0 |
| `isItemizeHeader​Adjustments` | Boolean | Specifies whether order-level adjustments are itemized (`true`) or not (`false`). If unspecified, the default value is `false`. | Optional | 57.0 |
| `parentProducts` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​PromotionParent​ProductsInput`\> | Collection of parent product IDs mapped to their variation product IDs. | Optional | 57.0 |
| `productCategories` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​PromotionProduct​CategoriesInput`\> | Collection of product IDs mapped to their associated category IDs. | Optional | 57.0 |
| `segments` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | All promotions associated with promotion segments specified in this collection are active and can be evaluated against the cart. Additionally, any segments associated with a store or buyer group are also still evaluated against the cart. If this field is not present, only the promotions associated with a store or buyer group are evaluated. | Optional | 57.0 |
| `webStoreId` | String | ID of the store for which the request is made. If unspecified, defined segments must be used instead. | Optional | 57.0 |

## See Also

- [evaluate(salesTransaction)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm#apex_ConnectAPI_CommercePromotions_evaluate_1)
