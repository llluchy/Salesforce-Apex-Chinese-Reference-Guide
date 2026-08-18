---
doc_id: "apex_connectapi_output_bonus_product_output"
---

# ConnectApi.PromotionBonusProduct

Bonus product for a promotion.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `adjustmentBasis​Reference` | String | ID of the associated coupon, if applicable. | 58.0 |
| `bonusProductId` | String | ID of the bonus product. | 58.0 |
| `causeId` | String | ID of the related promotion. | 58.0 |
| `qualifyingItems` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​Promotion​CartItemKey`\> | List of qualifying cart items and their related quantity. | 58.0 |
