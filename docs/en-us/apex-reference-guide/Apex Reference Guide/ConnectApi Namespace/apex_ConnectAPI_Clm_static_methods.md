---
doc_id: "apex_ConnectAPI_Clm_static_methods"
---

# Clm Class

Create and update Contract Lifecycle Management (CLM) contracts using object ID.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Clm Methods

These methods are for `Clm`. All methods are static.

## See Also

- [createContract(contractInputPayload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Clm_static_methods.htm#apex_ConnectAPI_Clm_createContract_2)
- [updateContract(contractInputPayload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Clm_static_methods.htm#apex_ConnectAPI_Clm_updateContract_1)

### createContract(contractInputPayload)

Create contracts using the object ID.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ContractOutputRepresentation createContract(ConnectApi.ContractInputRepresentation contractInputPayload)`

#### Parameters

contractInputPayload

Type: `ConnectApi.ContractInputRepresentation`

Input payload to create contract.

#### Return Value

Type: `ConnectApi.ContractOutputRepresentation`

### updateContract(contractInputPayload)

Update contracts using the object ID.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ContractOutputRepresentation updateContract(ConnectApi.ContractInputRepresentation contractInputPayload)`

#### Parameters

contractInputPayload

Type: `ConnectApi.ContractInputRepresentation`

Input payload to update contract.

#### Return Value

Type: `ConnectApi.ContractOutputRepresentation`
