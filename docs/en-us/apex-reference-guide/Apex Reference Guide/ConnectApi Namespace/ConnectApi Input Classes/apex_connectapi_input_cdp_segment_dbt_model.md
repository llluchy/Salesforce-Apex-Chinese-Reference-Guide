---
doc_id: "apex_connectapi_input_cdp_segment_dbt_model"
---

# ConnectApi.CdpSegmentDbtModelInput

Segment dbt model input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `name` | String | Dbt model name. | Required | 55.0 |
| `sql` | String | Dbt SQL.
Dbt SQL date strings must be in ISO 8601 format , for example, 2011-02-25T18:24:31.000Z.

For details about supported validations, see [Supported Validations for Segment Data Build Tool Model SQL](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectapi_features_cdp_cbt_validations.htm "HTML (New Window)").

 | Required | 55.0 |

## See Also

- [ConnectApi.CdpSegmentDbtInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_segment_dbt.htm)
