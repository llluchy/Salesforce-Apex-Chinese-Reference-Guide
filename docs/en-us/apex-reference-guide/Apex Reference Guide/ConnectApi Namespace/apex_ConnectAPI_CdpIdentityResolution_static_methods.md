---
doc_id: "apex_ConnectAPI_CdpIdentityResolution_static_methods"
---

# CdpIdentityResolution Class

Create, delete, get, run, and update Data 360 identity resolution rulesets.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpIdentityResolution Methods

These methods are for `CdpIdentityResolution`. All methods are static.

## See Also

- [createIdentityResolution(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpIdentityResolution_static_methods.htm#apex_ConnectAPI_CDPIdentityResolution_createIdentityResolution_2)
- [deleteIdentityResolution(identityResolution)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpIdentityResolution_static_methods.htm#apex_ConnectAPI_CDPIdentityResolution_deleteIdentityResolution_1)
- [getIdentityResolution(identityResolution)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpIdentityResolution_static_methods.htm#apex_ConnectAPI_CDPIdentityResolution_getIdentityResolution_2)
- [getIdentityResolutions()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpIdentityResolution_static_methods.htm#apex_ConnectAPI_CDPIdentityResolution_getIdentityResolutions_1)
- [runIdentityResolutionNow(identityResolution, input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpIdentityResolution_static_methods.htm#apex_ConnectAPI_CDPIdentityResolution_runIdentityResolutionNow_1)
- [updateIdentityResolution(identityResolution, input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpIdentityResolution_static_methods.htm#apex_ConnectAPI_CDPIdentityResolution_updateIdentityResolution_3)

### createIdentityResolution(input)

Create an identity resolution ruleset.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CdpIdentityResolutionOutput createIdentityResolution(ConnectApi.CdpIdentityResolutionConfigInput input)`

#### Parameters

input

Type: [`ConnectApi.CdpIdentityResolutionConfigInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_config_inpu.htm "Input representation for creating an identity resolution ruleset.")

Input representation for creating an identity resolution ruleset.

#### Return Value

Type: `ConnectApi.CdpIdentityResolutionOutput`

### deleteIdentityResolution(identityResolution)

Delete an identity resolution ruleset.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

`public static Void deleteIdentityResolution(String identityResolution)`

#### Parameters

identityResolution

Type: String

Developer name or ID of the ruleset.

#### Return Value

Type: Void

### getIdentityResolution(identityResolution)

Get an identity resolution ruleset.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CdpIdentityResolutionOutput getIdentityResolution(String identityResolution)`

#### Parameters

identityResolution

Type: String

Developer name or ID of the ruleset.

#### Return Value

Type: `ConnectApi.CdpIdentityResolutionOutput`

### getIdentityResolutions()

Get identity resolution rulesets.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CdpIdentityResolutionsOutput getIdentityResolutions()`

#### Return Value

Type: `ConnectApi.CdpIdentityResolutionsOutput`

### runIdentityResolutionNow(identityResolution, input)

Trigger an immediate identity resolution ruleset job run.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CdpIdentityResolutionRunNowOutput runIdentityResolutionNow(String identityResolution, ConnectApi.CdpIdentityResolutionRunNowInput input)`

#### Parameters

identityResolution

Type: String

Developer name of the ruleset.

input

Type: [`ConnectApi.CdpIdentityResolutionRunNowInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_run_now_inpu.htm "Input representation for running an identity resolution ruleset job on demand.")

Input representation for running an identity resolution ruleset job on demand.

#### Return Value

Type: `ConnectApi.CdpIdentityResolutionRunNowOutput`

### updateIdentityResolution(identityResolution, input)

Update an identity resolution ruleset.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CdpIdentityResolutionOutput updateIdentityResolution(String identityResolution, ConnectApi.CdpIdentityResolutionConfigPatchInput input)`

#### Parameters

identityResolution

Type: String

Developer name or ID of the ruleset.

input

Type: [`ConnectApi.CdpIdentityResolutionConfigPatchInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_config_patch_inpu.htm "Input representation for updating an identity resolution ruleset.")

Input representation for updating an identity resolution ruleset.

#### Return Value

Type: `ConnectApi.CdpIdentityResolutionOutput`
