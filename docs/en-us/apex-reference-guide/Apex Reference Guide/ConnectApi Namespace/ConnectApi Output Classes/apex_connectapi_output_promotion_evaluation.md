---
doc_id: "apex_connectapi_output_promotion_evaluation"
---

# ConnectApi.PromotionEvaluation

Results of a promotion evaluation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `cart` | `ConnectApi.​PromotionCart` | Cart and its items. | 57.0 |
| `coupons` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​PromotionCoupon`\> | Collection of coupon codes to enable promotions. A customer can apply a maximum of two coupons. | 57.0 |

## See Also

- [evaluate(salesTransaction)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm#apex_ConnectAPI_CommercePromotions_evaluate_1)
