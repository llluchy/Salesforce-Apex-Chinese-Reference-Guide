---
doc_id: "apex_ConnectAPI_CommercePromotions_static_methods"
---

# CommercePromotions Class

Evaluate promotions for Commerce orders. Get coupon code redemption usage.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CommercePromotions Methods

These methods are for `CommercePromotions`. All methods are static.

:::tip Note
Don’t write an Apex test that calls these `CommercePromotions` APIs within the context of a guest.
:::

## See Also

- [decreaseRedemption(couponCodeRedemption)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm#apex_ConnectAPI_CommercePromotions_decreaseRedemption_1)
- [evaluate(salesTransaction)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm#apex_ConnectAPI_CommercePromotions_evaluate_1)
- [increaseRedemption(couponCodeRedemption)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm#apex_ConnectAPI_CommercePromotions_increaseRedemption_1)

### decreaseRedemption(couponCodeRedemption)

Get coupon code redemption usage to revert a previously redeemed coupon code.

#### API Version

58.0

#### Available to Guest Users

58.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CouponCodeRedemptionCollection decreaseRedemption(ConnectApi.CouponCodeRedemptionInput couponCodeRedemption)`

#### Parameters

couponCodeRedemption

Type: `ConnectApi.CouponCodeRedemptionInput`

Tracks each coupon code redemption.

#### Return Value

Type: `ConnectApi.CouponCodeRedemptionCollection`

### evaluate(salesTransaction)

Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.

#### API Version

57.0

#### Available to Guest Users

57.0

#### Requires Chatter

No

#### Signature

`global static ConnectApi.PromotionEvaluation evaluate(ConnectApi.PromotionEvaluateInput salesTransaction)`

#### Parameters

salesTransaction

Type: `ConnectApi.PromotionEvaluateInput`

Find promotions that the customer is eligible for and compute their discounts.

#### Return Value

Type: `ConnectApi.PromotionEvaluation`

### increaseRedemption(couponCodeRedemption)

Get coupon code redemption addition (increase) usage.

#### API Version

58.0

#### Available to Guest Users

58.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CouponCodeRedemptionCollection increaseRedemption(ConnectApi.CouponCodeRedemptionInput couponCodeRedemption)`

#### Parameters

couponCodeRedemption

Type: `ConnectApi.CouponCodeRedemptionInput`

Tracks each coupon code redemption.

#### Return Value

Type: `ConnectApi.CouponCodeRedemptionCollection`
