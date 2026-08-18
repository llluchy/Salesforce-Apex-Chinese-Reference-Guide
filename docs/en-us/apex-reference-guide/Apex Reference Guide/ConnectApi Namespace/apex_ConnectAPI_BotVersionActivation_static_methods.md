---
doc_id: "apex_ConnectAPI_BotVersionActivation_static_methods"
---

# BotVersionActivation Class

Access and update activation information of a bot version.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## BotVersionActivation Methods

These methods are for `BotVersionActivation`. All methods are static.

## See Also

- [getVersionActivationInfo(botVersionId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_BotVersionActivation_static_methods.htm#apex_ConnectAPI_BotVersionActivation_getVersionActivationInfo_1)
- [updateVersionStatus(botVersionId, status, postBody)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_BotVersionActivation_static_methods.htm#apex_ConnectAPI_BotVersionActivation_updateVersionStatus_2)

### getVersionActivationInfo(botVersionId)

Get the active or inactive status of the bot version.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.BotVersionActivationInfo getVersionActivationInfo(String botVersionId)`

#### Parameters

botVersionId

Type: String

ID of the bot version.

#### Return Value

Type: [`ConnectApi.BotVersionActivationInfo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_bot_version_activation_info.htm "Success or failure information of the bot version activation.")

#### Usage

To access this method, enable the bot feature, and the user must be an admin or have the Manage Bots or Manage Bots Training Data user permissions.

### updateVersionStatus(botVersionId, status, postBody)

Update the status of the specified bot version.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.BotVersionActivationInfo updateVersionStatus(String botVersionId, ConnectApi.BotVersionActivationStatus status, ConnectApi.BotVersionActivationInput postBody)`

#### Parameters

**botVersionId**

Type: String

ID of the bot version.

**status**

Type: [`ConnectApi.BotVersionActivationStatus`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#BotVersionActivationStatus)

Activation status of the bot version. Values are:

-   `Active`
-   `Inactive`

Activation status must be specified in the status or postBody parameter.

**postBody**

Type: [`ConnectApi.BotVersionActivationInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_bot_version_activation.htm "Activation status of the bot version.")

Parameters to update for the bot version. Activation status must be specified in the status or postBody parameter.

#### Return Value

Type: [`ConnectApi.BotVersionActivationInfo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_bot_version_activation_info.htm "Success or failure information of the bot version activation.")

#### Usage

To access this method, enable the bot feature, and the user must be an admin or have the Manage Bots or Manage Bots Training Data user permissions.
