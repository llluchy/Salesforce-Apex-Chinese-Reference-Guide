---
doc_id: "apex_connectapi_input_coupon_code_redemption"
---

# ConnectApi.CouponCodeRedemptionInput

Input representation for coupon code redemption.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `buyer` | String | ID of the buyer account or email address for a guest user. | Required | 60.0 |
| `couponCodes` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`String`\> | List of coupon codes. | Required | 58.0 |
| `effectiveAccountId` | String | ID of the account. | Required | 58.0–59.0 |
| `transactionId` | String | ID of the transaction, which must be a valid cart ID. | Required | 58.0 |
