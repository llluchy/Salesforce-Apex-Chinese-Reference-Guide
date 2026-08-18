---
doc_id: "apex_connectapi_input_external_credential_principal"
---

# ConnectApi.ExternalCredentialPrincipalInput

External credential principal input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `id` | String | ID of the principal external credential parameter. | Optional | 58.0 |
| `parameters` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ExternalCredential​ParameterInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_credential_parameter.htm "External credential parameter input.")\> | List of external credential parameters. | Optional | 58.0 |
| `principalName` | String | Principal name. | Required | 58.0 |
| `principalType` | [`ConnectApi.​CredentialPrincipal​Type`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CredentialPrincipalTypeEnum) | Type of credential principal. Values are:
-   `AwsStsPrincipal`
-   `NamedPrincipal`
-   `PerUserPrincipal`

 | Required | 58.0 |
| `sequenceNumber` | Integer | Sequence number. | Required | 58.0 |

## See Also

- [ConnectApi.ExternalCredentialInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_credential.htm)

-   [ConnectApi.NamedCredentialInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_named_credential.htm "Input used to create or update a named credential.")
