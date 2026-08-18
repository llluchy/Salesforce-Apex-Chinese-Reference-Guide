---
doc_id: "apex_ConnectAPI_CdpActivation_static_methods"
---

# CdpActivation Class

Get, create, update, and delete Data 360 activations.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpActivation Methods

These methods are for `CdpActivation`. All methods are static.

## See Also

- [getActivations()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_getActivations_1)
- [getActivationsPaginated(batchSize, offset, orderBy, filters)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_getActivationsPaginated_1)
- [createActivation(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_createActivation_1)
- [deleteActivation(activationId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_deleteActivation_1)
- [getActivation(activationId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_getActivation_1)
- [updateActivation(activationId, input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_updateActivation_1)

### getActivations()

Get activations.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ActivationCollection getActivations()`

#### Return Value

Type: [`ConnectApi.ActivationCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_collection.htm "Represents a collection of activations.")

### getActivationsPaginated(batchSize, offset, orderBy, filters)

Get a paginated list of activations.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ActivationCollection getActivationsPaginated(Integer batchSize, Integer offset, String orderBy, String filters)`

#### Parameters

batchSize

Type: Integer

Number of results to return. Values are from `1` through `200`. If unspecified, the default value is `20`.

offset

Type: Integer

Number of rows to skip before returning results. Must be greater than or equal to `0`. If unspecified, no rows are skipped.

orderBy

Type: String

Specify `createdDate` to sort results by creation date. If unspecified, items are returned by ID in ascending order.

filters

Type: String

Filter the result set to a more narrow scope or specific type. These filters are supported:

-   name (field name: name; description: name of the activation)
-   marketSegmentId (field name: segmentId; description: segment ID of the activation)
-   activationTargetId (field name: activationTarget.id; description: activation target ID of the activation)
-   activationRefreshType (field name: refreshType; description: refresh type of the activation; example: incremental)
-   activationStatus (field name: status; description: status of the activation, which accepts only the values in the status response field; example: active)

#### Return Value

Type: [`ConnectApi.ActivationCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_collection.htm "Represents a collection of activations.")

### createActivation(input)

Create an activation.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.Activation createActivation(ConnectApi.ActivationDefinitionInput input)`

#### Parameters

input

Type: [`ConnectApi.ActivationDefinitionInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_activation_definition.htm "Represents the activation definition input.")

Input representation for an activation.

#### Return Value

Type: [`ConnectApi.Activation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation.htm "Represents an activation output.")

### deleteActivation(activationId)

Delete an activation.

#### API Version

:::tip Note
Before deleting an activation, ensure there are no downstream systems
        that expect data from it. After you delete an activation, Data 360 stops sending data to
        any downstream systems that are associated with the deleted activation. To identify the
        downstream system (activation target) that's associated with the activation, use the
        getActivation(activationId) resource. It provides the activation target details needed to
        evaluate the impact before deleting the activation.
:::

60.0

#### Requires Chatter

No

#### Signature

`public static Void deleteActivation(String activationId)`

#### Parameters

activationId

Type: String

The unique identifier (ID) or developer name of a specific activation target.

#### Return Value

Type: Void

### getActivation(activationId)

Get an activation by ID.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.Activation getActivation(String activationId)`

#### Parameters

activationId

Type: String

The unique identifier (ID) or developer name of a specific activation target.

#### Return Value

Type: [`ConnectApi.Activation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation.htm "Represents an activation output.")

### updateActivation(activationId, input)

Update an activation by ID.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.Activation updateActivation(String activationId, ConnectApi.ActivationDefinitionInput input)`

#### Parameters

activationId

Type: String

The unique identifier (ID) or developer name of a specific activation target.

input

Type: [`ConnectApi.ActivationDefinitionInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_activation_definition.htm "Represents the activation definition input.")

Input representation for an activation.

#### Return Value

Type: [`ConnectApi.Activation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation.htm "Represents an activation output.")
