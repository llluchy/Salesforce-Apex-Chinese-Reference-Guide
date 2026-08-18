---
doc_id: "apex_connectapi_input_cdp_ml_predict_input_base_representatio"
---

# ConnectApi.CdpMlBasePredictInput

Base input representation for a prediction request.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `model` | `ConnectApi.CdpAssetReferenceInput` | A reference to the model to use to generate the prediction. | Required | 59.0 |
| `settings` | `ConnectApi.CdpMlPredictSettingsInput` | The model configuration settings to use to generate the prediction. | Optional | 59.0 |
| `type` | [`CdpMlPredictTypeEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CdpMlPredictTypeEnum) | Type of input data for the prediction.
-   `RawData`\-Raw data.
-   `RecordOverrides`\-Record IDs with user-provided overrides.
-   `Records`\-Record IDs.

 | Required | 59.0 |

## See Also

- [predict(predict)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpMachineLearning_static_methods.htm#apex_ConnectAPI_CdpMachineLearning_predict_1)
