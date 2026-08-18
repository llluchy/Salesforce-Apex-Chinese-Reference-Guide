---
doc_id: "apex_connectapi_output_cdp_ml_predict_settings"
---

# ConnectApi.CdpMlPredictSettings

Prediction settings.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `aggregateFunctions` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`String`\> | List of aggregate functions. | 59.0 |
| `maxPrescriptions` | Integer | Maximum number of recommendations. The default value is `-1` (unlimited) and the allowed range is `-1` through `200`. | 59.0 |
| `maxTopFactors` | Integer | Maximum number of top factors. The default value is `0` and the allowed range is `0` through `3`. | 59.0 |
| `prescriptionImpactPercentage` | Integer | Impact percentage of prescriptions. The default value is `0` and the range of values is `0` through `100`. | 59.0 |
