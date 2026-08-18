---
doc_id: "apex_ConnectAPI_CdpMachineLearning_static_methods"
---

# CdpMachineLearning Class

Make a machine-learning prediction with Data 360.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpMachineLearning Methods

These methods are for `CdpMachineLearning`. All methods are static.

## See Also

- [predict(predict)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpMachineLearning_static_methods.htm#apex_ConnectAPI_CdpMachineLearning_predict_1)

### predict(predict)

Make a prediction using a specified model and parameters. This request is synchronous.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CdpMlPredictResult predict(ConnectApi.CdpMlBasePredictInput predict)`

#### Parameters

predict

Type: `ConnectApi.CdpMlBasePredictInput`

Input representation for a prediction.

#### Return Value

Type: `ConnectApi.CdpMlPredictResult`
