---
doc_id: "apex_connectapi_input_named_credential_parameter"
---

# ConnectApi.NamedCredentialParameterInput

Named credential parameter input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `id` | String | ID of the parameter. | Optional | 58.0 |
| `parameter​Description` | String | Description of the parameter. | Optional | 58.0 |
| `parameterName` | String | Name of the parameter. | Required | 58.0 |
| `parameterType` | [`ConnectApi.​NamedCredential​ParameterType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#NamedCredentialParameterTypeEnum) | Type of named credential parameter. Values are:
-   `AllowedManagedPackageNamespaces`
-   `ClientCertificate`
-   `ConnectionStatus`
-   `SfHttpRequestExtensionName`

 | Required | 58.0 |
| `parameterValue` | String | Value of the parameter. | Required | 58.0 |

## See Also

- [ConnectApi.NamedCredentialInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_named_credential.htm)
