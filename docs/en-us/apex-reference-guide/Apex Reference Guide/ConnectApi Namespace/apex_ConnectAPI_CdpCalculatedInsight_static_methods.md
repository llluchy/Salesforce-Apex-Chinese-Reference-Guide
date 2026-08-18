---
doc_id: "apex_ConnectAPI_CdpCalculatedInsight_static_methods"
---

# CdpCalculatedInsight Class

Create, delete, get, run, and update Data 360 calculated insights.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpCalculatedInsight Methods

These methods are for `CdpCalculatedInsight`. All methods are static.

## See Also

- [createCalculatedInsight(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm#apex_ConnectAPI_CdpCalculatedInsight_createCalculatedInsight_2)
- [deleteCalculatedInsight(apiName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm#apex_ConnectAPI_CdpCalculatedInsight_deleteCalculatedInsight_1)
- [getCalculatedInsight(apiName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm#apex_ConnectAPI_CdpCalculatedInsight_getCalculatedInsight_2)
- [getCalculatedInsights(definitionType, batchSize, offset, orderby, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm#apex_ConnectAPI_CdpCalculatedInsight_getCalculatedInsights_1)
- [getCalculatedInsights(definitionType, batchSize, offset, orderby, dataspace, pageToken)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm#apex_ConnectAPI_CdpCalculatedInsight_getCalculatedInsights_2)
- [runCalculatedInsight(apiName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm#apex_ConnectAPI_CdpCalculatedInsight_runCalculatedInsight_1)
- [updateCalculatedInsight(apiName, input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm#apex_ConnectAPI_CdpCalculatedInsight_updateCalculatedInsight_3)

### createCalculatedInsight(input)

Create a calculated insight.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CdpCalculatedInsightOutput createCalculatedInsight(ConnectApi.CdpCalculatedInsightInput input)`

#### Parameters

input

Type: `ConnectApi.CdpCalculatedInsightInput`

Input representation for a calculated insight.

#### Return Value

Type: `ConnectApi.CdpCalculatedInsightOutput`

### deleteCalculatedInsight(apiName)

Delete a calculated insight.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

`public static Void deleteCalculatedInsight(String apiName)`

#### Parameters

apiName

Type: String

API name of the calculated insight to delete.

#### Return Value

Type: Void

### getCalculatedInsight(apiName)

Get a calculated insight.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CdpCalculatedInsightOutput getCalculatedInsight(String apiName)`

#### Parameters

apiName

Type: String

API name of the calculated insight to get.

#### Return Value

Type: `ConnectApi.CdpCalculatedInsightOutput`

### getCalculatedInsights(definitionType, batchSize, offset, orderby, dataspace)

Get calculated insights.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CdpCalculatedInsightPage getCalculatedInsights(String definitionType, Integer batchSize, Integer offset, String orderby, String dataspace)`

#### Parameters

**definitionType**

Type: String

Definition type of the calculated insight. Values are:

-   `CALCULATED_METRIC`
-   `CALCULATED_METRIC`
-   `CALCULATED_METRIC`

**batchSize**

Type: Integer

Number of items to return. Values are from 1–200. If unspecified, the default value is `25`.

**offset**

Type: Integer

Number of rows to skip before returning results. If unspecified, no rows are skipped.

**orderby**

Type: String

Sort order for the result set, such as `GenderId__c ASC,​Occupation__c DESC`. If unspecified, items are returned in the order they are retrieved.

**dataspace**

Type: String

Name of the data space.

#### Return Value

Type: `ConnectApi.CdpCalculatedInsightPage`

### getCalculatedInsights(definitionType, batchSize, offset, orderby, dataspace, pageToken)

Get a page of calculated insights.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CdpCalculatedInsightPage getCalculatedInsights(String definitionType, Integer batchSize, Integer offset, String orderby, String dataspace, String pageToken)`

#### Parameters

**definitionType**

Type: String

Definition type of the calculated insight. Values are:

-   `CALCULATED_METRIC`
-   `CALCULATED_METRIC`
-   `CALCULATED_METRIC`

**batchSize**

Type: Integer

Number of items to return. Values are from 1–200. If unspecified, the default value is `25`.

**offset**

Type: Integer

Number of rows to skip before returning results. If unspecified, no rows are skipped.

**orderby**

Type: String

Sort order for the result set, such as `GenderId__c ASC,​Occupation__c DESC`. If unspecified, items are returned in the order they are retrieved.

**dataspace**

Type: String

Name of the data space.

**pageToken**

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

#### Return Value

Type: `ConnectApi.CdpCalculatedInsightPage`

### runCalculatedInsight(apiName)

Run a calculated insight.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CdpCalculatedInsightStandardActionesponseRepresentation runCalculatedInsight(String apiName)`

#### Parameters

apiName

Type: String

API name of the calculated insight to run.

#### Return Value

Type: `ConnectApi.CdpCalculatedInsightStandardActionResponseRepresentation`

### updateCalculatedInsight(apiName, input)

Update a calculated insight.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CdpCalculatedInsightOutput updateCalculatedInsight(String apiName, ConnectApi.CdpCalculatedInsightInput input)`

#### Parameters

apiName

Type: String

API name of the calculated insight to update.

input

Type: `ConnectApi.CdpCalculatedInsightInput`

Input representation for a calculated insight.

#### Return Value

Type: `ConnectApi.CdpCalculatedInsightOutput`
