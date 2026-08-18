---
doc_id: "apex_connectapi_input_change_item_fee_tax"
---

# ConnectApi.ChangeItemFeeTaxInputRepresentation

Input representation of taxes associated with a change item fee.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `amount` | Double | Tax amount of the change item fee. | Required | 63.0 |
| `description` | String | Description of the change item fee. | Required | 63.0 |
| `rate` | Double | Tax rate for the change item fee. | Required | 63.0 |
| `taxEffectiveDate` | String | Effective date for the tax. | Required | 63.0 |
| `type` | String | Describes how the fee amount is calculated. Valid values are:
-   `Actual`
-   `Estimated`

 | Required | 63.0 |
