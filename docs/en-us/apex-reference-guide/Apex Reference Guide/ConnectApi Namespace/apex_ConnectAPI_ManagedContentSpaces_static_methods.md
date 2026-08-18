---
doc_id: "apex_ConnectAPI_ManagedContentSpaces_static_methods"
---

# ManagedContentSpaces Class

Get channels in a managed content space. Add or remove channels from a managed content space.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## ManagedContentSpaces Methods

These methods are for `ManagedContentSpaces`. All methods are static.

## See Also

- [getManagedContentSpace(contentSpaceId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm#apex_ConnectAPI_ManagedContentSpaces_getManagedContentSpace_2)
- [getManagedContentSpaceChannels(contentSpaceId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm#apex_ConnectAPI_ManagedContentSpaces_getManagedContentSpaceChannels_1)
- [getManagedContentSpaces(pageParam, pageSize, nameFragment)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm#apex_ConnectAPI_ManagedContentSpaces_getManagedContentSpaces_1)
- [patchManagedContentSpace(contentSpaceId, ManagedContentSpaceUpdateInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm#apex_ConnectAPI_ManagedContentSpaces_patchManagedContentSpace_3)
- [patchManagedContentSpaceChannels(contentSpaceId, spaceChannels)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm#apex_ConnectAPI_ManagedContentSpaces_patchManagedContentSpaceChannels_2)
- [postManagedContentSpace(ManagedContentSpaceInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm#apex_ConnectAPI_ManagedContentSpaces_postManagedContentSpace_2)

### getManagedContentSpace(contentSpaceId)

Get a managed content space.

#### API Version

64.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedContentSpace getManagedContentSpace(String contentSpaceId)`

#### Parameters

contentSpaceId

Type: String

ID of the managed content space.

#### Return Value

Type: `ConnectApi.ManagedContentSpace`

### getManagedContentSpaceChannels(contentSpaceId, pageParam, pageSize)

Get channels for a managed content space.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedContentSpaceChannelsRepresentation getManagedContentSpaceChannels(String contentSpaceId, Integer pageParam, Integer pageSize)`

#### Parameters

contentSpaceId

Type: String

ID of the managed content space.

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Number of items per page. Valid values are from 1 through 250. If you pass in `null`, the default size is 25. Items are sorted by the last modified date.

#### Return Value

Type: [`ConnectApi.ManagedContentSpaceChannelsRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_space_channels.htm "List of managed content space channels.")

### getManagedContentSpaces(pageParam, pageSize, nameFragment)

Get managed content spaces.

#### API Version

64.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedContentSpaceCollectionRepresentation getManagedContentSpaces(Integer pageParam, Integer pageSize, String nameFragment)`

#### Parameters

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 250. If you pass in `null`, the default size is 25.

nameFragment

Type: String

Name fragment to filter spaces that contain the value in the workspace name.

#### Return Value

Type: [`ConnectApi.ManagedContentSpaceCollectionRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_space_collection.htm "Collection of managed content spaces.")

### patchManagedContentSpace(contentSpaceId, ManagedContentSpaceUpdateInput)

Update the name or description of a managed content space.

#### API Version

64.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedContentSpace patchManagedContentSpace(String contentSpaceId, ConnectApi.ManagedContentSpaceUpdateInput ManagedContentSpaceUpdateInput)`

#### Parameters

contentSpaceId

Type: String

ID of the managed content space.

ManagedContentSpaceUpdateInput

Type: [`ConnectApi.ManagedContentSpaceUpdateInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_space_update.htm "Update the name or description of a managed content space.")

`ConnectApi.ManagedContentSpaceUpdateInput` class with the updated name or description.

#### Return Value

Type: `ConnectApi.ManagedContentSpace`

### patchManagedContentSpaceChannels(contentSpaceId, spaceChannels)

Add or remove channels from a managed content space.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedContentSpaceChannelsRepresentation patchManagedContentSpaceChannels(String contentSpaceId, ConnectApi.ManagedContentSpaceChannelsInputRepresentation spaceChannels)`

#### Parameters

contentSpaceId

Type: String

ID of the managed content space.

spaceChannels

Type: [`ConnectApi.ManagedContentSpaceChannelsInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_space_channels.htm "Channels to add or remove from the managed content space.")

`ConnectApi.ManagedContentSpaceChannelsInputRepresentation` input class with the channels to add or remove from the managed content space.

#### Return Value

Type: [`ConnectApi.ManagedContentSpaceChannelsRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_space_channels.htm "List of managed content space channels.")

### postManagedContentSpace(ManagedContentSpaceInput)

Create a managed content space.

#### API Version

64.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedContentSpace postManagedContentSpace(ConnectApi.ManagedContentSpaceInput ManagedContentSpaceInput)`

#### Parameters

ManagedContentSpaceInput

Type: [`ConnectApi.ManagedContentSpaceInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_space.htm "Create a managed content space.")

`ConnectApi.ManagedContentSpaceInput` class describing the space to create.

#### Return Value

Type: [`ConnectApi.ManagedContentSpace`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_space.htm "Managed content space.")
