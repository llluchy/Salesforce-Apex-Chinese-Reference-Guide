---
doc_id: "apex_connectapi_output_cdp_ml_aggregate_prediction"
---

# ConnectApi.CdpMlAggregatePrediction

Represents a CDP machine-learning aggregate prediction.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `factors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.CdpMlAggregatePredictCondition`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_ml_aggregate_predict_condition.htm "CDP machine-learning aggregate prediction contribution.")\> | Top factors associated with this aggregate prediction. | 59.0 |
| `prescriptions` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.CdpMlAggregatePredictCondition`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_ml_aggregate_predict_condition.htm "CDP machine-learning aggregate prediction contribution.")\> | Prescriptions associated with this aggregate prediction. | 59.0 |
| `status` | [`CdpMlPredictAggregateFunctionStatusEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CdpMlPredictAggregateFunctionStatusEnum) | Status of the prediction aggregate function.
-   `Error`
-   `Success`

 | 59.0 |
| `type` | [`CdpMlPredictAggregateFunctionTypeEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CdpMlPredictAggregateFunctionTypeEnum) | Type of the prediction aggregate function.

-   `Average`
-   `Median`
-   `Sum`

 | 59.0 |
| `value` | Double | Value of the aggregate prediction. | 59.0 |
