---
doc_id: "apex_connectapi_output_cdp_ml_predict_result"
---

# ConnectApi.CdpMlPredictResult

Represents a CDP machine-learning prediction result.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `aggregatePredictions` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.CdpMlAggregatePrediction`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_ml_aggregate_prediction.htm "Represents a CDP machine-learning aggregate prediction.")\> | List of aggregate results. | 59.0 |
| `model` | [`ConnectApi.CdpAssetReference`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_asset_reference.htm "Model asset reference used as part of the prediction request.") | Model asset reference used as part of the prediction request. | 59.0 |
| `predictionType` | [`CdpMlModelPredictionTypeEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CdpMlModelPredictionTypeEnum) | Type of the model prediction.
-   `BinaryClassification`\-Binary classification.
-   `Generic`\-Generic/unknown.
-   `MulticlassClassification`\-Multiclass classification.
-   `Regression`\-Regression.

 | 59.0 |
| `predictions` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.CdpMlPredictionBase`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_ml_prediction_base.htm "Prediction result.")\> | A list of prediction results. | 59.0 |
| `settings` | [`ConnectApi.CdpMlPredictSettings`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_ml_predict_settings.htm "Prediction settings.") | Settings used for the prediction. | 59.0 |

## See Also

- [predict(predict)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpMachineLearning_static_methods.htm#apex_ConnectAPI_CdpMachineLearning_predict_1)
