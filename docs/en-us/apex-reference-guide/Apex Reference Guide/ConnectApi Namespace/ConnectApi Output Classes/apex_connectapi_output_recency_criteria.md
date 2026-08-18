---
doc_id: "apex_connectapi_output_recency_criteria"
---

# ConnectApi.RecencyCriteria

Represents recency criteria of the object data for a data graph.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `fieldName` | String | API name of the field to which recency criteria is applied. | 59.0 |
| `value` | String | Value of the recency criteria. | 59.0 |
| `valueType` | String | Type of value for the recency criteria. Valid values are `time` and `record`. | 59.0 |
| `valueUnit` | String | Unit of measure for the recency criteria. For a value of type `time`, the valid value is `DAY`. For a value of type `record`, the valid value is `RECORD`. | 59.0 |
