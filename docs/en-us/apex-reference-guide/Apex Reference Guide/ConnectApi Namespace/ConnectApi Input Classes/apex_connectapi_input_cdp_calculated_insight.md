---
doc_id: "apex_connectapi_input_cdp_calculated_insight"
---

# ConnectApi.CdpCalculatedInsightInput

Input representation for a calculated insight.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `apiName` | String | API name of the calculated insight with suffix \_\_cio. | Required for creating a calculated insight
Optional for updating a calculated insight

 | 57.0 |
| `createdFrom​Package` | Boolean | Specifies whether the calculated insight was created from an installed package (`true`) or not (`false`). | Optional | 57.0 |
| `dataSpaceName` | String | Name of the data space. | Optional | 57.0 |
| `definitionType` | [`ConnectApi.​CalculatedInsight​DefinitionTypeEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#calculatedInsightDefinitionTypeEnum) | Definition type of the calculated insight. Values are:

-   `CALCULATED_METRIC`
-   `CALCULATED_METRIC`
-   `CALCULATED_METRIC`

 | Required for creating a calculated insight

Optional for updating a calculated insight

 | 57.0 |
| `description` | String | Calculated insight description. | Optional | 57.0 |
| `displayName` | String | Calculated insight display name. | Required for creating a calculated insight

Optional for updating a calculated insight

 | 57.0 |
| `draft` | Boolean | Specifies whether to save the calculated insight as draft (`true`) or not (`false`). | Optional | 57.0 |
| `expression` | String | Calculated insight ANSI SQL expression. | Required for creating a calculated insight

Optional for updating a calculated insight

 | 57.0 |
| `packagedCalculated​InsightApiName` | String | API name of the packaged calculated insight. | Optional | 57.0 |
