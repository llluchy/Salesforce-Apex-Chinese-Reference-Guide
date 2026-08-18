---
doc_id: "apex_ConnectAPI_CdpDataSpace_static_methods"
---

# CdpDataSpace Class

Get Data 360 data spaces.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpDataSpace Methods

These methods are for `CdpDataSpace`. All methods are static.

## See Also

- [getAllDataSpaces(batchSize, offset, orderBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpDataSpace_static_methods.htm#apex_ConnectAPI_CdpDataSpace_getAllDataSpaces_1)
- [getDataSpace(idOrName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpDataSpace_static_methods.htm#apex_ConnectAPI_CdpDataSpace_getDataSpace_1)

### getAllDataSpaces(batchSize, offset, orderBy)

Get a collection of all data spaces that a user is assigned to.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.DataSpaceCollectionRepresentation getAllDataSpaces(Integer batchSize, Integer offset, String orderBy)`

#### Parameters

batchSize

Type: Integer

Number of results to return in each response. Values are from `1` through `4999`. For example, specify `50` to return 50 results.

offset

Type: Integer

Number of rows to skip before returning results. Must be greater than or equal to `0`. For example, specify `0` to skip no rows.

orderBy

Type: String

Sort order for the result set. Results are ordered by ID. Specify `id` to order results in ascending order. Specify `id desc` to order results in descending order.

#### Return Value

Type: `ConnectApi.DataSpaceCollectionRepresentation`

### getDataSpace(idOrName)

Get a data space by ID or API name.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.DataSpaceInfoRepresentation getDataSpace(String idOrName)`

#### Parameters

idOrName

Type: String

ID or API name of the data space.

#### Return Value

Type: `ConnectApi.DataSpaceInfoRepresentation`
