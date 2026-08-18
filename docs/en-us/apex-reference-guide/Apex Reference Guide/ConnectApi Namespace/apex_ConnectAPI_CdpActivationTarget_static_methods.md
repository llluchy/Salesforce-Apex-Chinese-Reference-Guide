---
doc_id: "apex_ConnectAPI_CdpActivationTarget_static_methods"
---

# CdpActivationTarget Class

Get, create, and update Data 360 activation targets.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpActivationTarget Methods

These methods are for `CdpActivationTarget`. All methods are static.

## See Also

- [createActivationTarget(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_createActivationTarget_3)
- [getActivationTarget(activationTargetId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_getActivationTarget_1)
- [getActivationTargets()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_getActivationTargets_1)
- [getActivationTargetsPaginated(batchSize, offset, orderBy, filters)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_getActivationTargetsPaginated_2)
- [updateActivationTarget(activationTargetId, input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_updateActivationTarget_2)

### createActivationTarget(input)

Create an activation target.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ActivationTarget createActivationTarget(ConnectApi.ActivationTargetInput input)`

#### Parameters

input

Type: [`ConnectApi.ActivationTargetInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_activation_target.htm "Input details for the activation target.")

Input details for the activation target.

#### Return Value

Type: `ConnectApi.ActivationTarget`

### getActivationTarget(activationTargetId)

Get an activation target by ID.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ActivationTarget getActivationTarget(String activationTargetId)`

#### Parameters

activationTargetId

Type: String

ID of the activation target.

#### Return Value

Type: `ConnectApi.ActivationTarget`

### getActivationTargets()

Get a list of activation targets.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ActivationTargetCollection getActivationTargets()`

#### Return Value

Type: `ConnectApi.ActivationTargetCollection`

### getActivationTargetsPaginated(batchSize, offset, orderBy, filters)

Get a paginated list of activation targets.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ActivationTargetCollection getActivationTargetsPaginated(Integer batchSize, Integer offset, String orderBy, String filters)`

#### Parameters

batchSize

Type: Integer

Number of results to return. Values are from `1` through `200`. For example, specify `20` to return 20 results.

offset

Type: Integer

Number of rows to skip before returning results. Must be greater than or equal to `0`. For example, specify `0` to skip no rows.

orderBy

Type: String

Sort order for the result set. Results are ordered by creation date. Specify `createddate` to order results in ascending order. Specify `createddate desc` to order results in descending order.

filters

Type: String

Filter the result set to a more narrow scope or specific type. These filters are supported:

-   `masterLabel` - Matches the field `name`, which is a string that identifies the name of the activation target.
-   `targetStatus` - Matches the field `status`, which is an enum that indicates the status of the activation target. Values must match those listed in the `status` response field.
-   `connectionType` - Matches the field `platformType`, which is an enum that indicates the platform type of the activation target. Values must match those listed in the `platformType` response field.
-   `platformName` - Matches the field `platformName`, which is a string that indentifies the platform name of the activation target.

These are examples of filter specifications:

-   `masterLabel in Target002`
-   `targetStatus in active`
-   `platformName in Customer Data Platform`
-   `targetStatus in active AND platformName in Amazon S3`

#### Return Value

Type: `ConnectApi.ActivationTargetCollection`

### updateActivationTarget(activationTargetId, input)

Update an activation target.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ActivationTarget updateActivationTarget(String activationTargetId, ConnectApi.ActivationTargetInput input)`

#### Parameters

activationTargetId

Type: String

ID of the activation target.

input

Type: [`ConnectApi.ActivationTargetInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_activation_target.htm "Input details for the activation target.")

Input details for the activation target.

#### Return Value

Type: `ConnectApi.ActivationTarget`
