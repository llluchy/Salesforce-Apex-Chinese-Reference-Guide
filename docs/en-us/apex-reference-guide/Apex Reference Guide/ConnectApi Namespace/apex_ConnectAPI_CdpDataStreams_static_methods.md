---
doc_id: "apex_ConnectAPI_CdpDataStreams_static_methods"
---

# CdpDataStreams Class

Run Data 360 data streams.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpDataStreams Methods

These methods are for `CdpDataStreams`. All methods are static.

## See Also

- [runDataStream(recordIdOrDeveloperName, interactive)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpDataStreams_static_methods.htm#apex_ConnectAPI_CdpDataStreams_runDataStream_1)

### runDataStream(recordIdOrDeveloperName, interactive)

Start a data stream run to read from a source and update a data lake object.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.DataStreamActionResponse runDataStream(String recordIdOrDeveloperName, Boolean interactive)`

#### Parameters

recordIdOrDeveloperName

Type: String

Record ID or developer name of the data stream.

interactive

Type: Boolean

Indicates whether to perform fast format conversion for the data stream (`true`) or not (`false`).

#### Return Value

Type: `ConnectApi.DataStreamActionResponseOutput`
