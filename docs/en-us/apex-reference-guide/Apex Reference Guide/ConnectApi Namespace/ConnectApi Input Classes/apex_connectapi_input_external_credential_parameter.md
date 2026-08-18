---
doc_id: "apex_connectapi_input_external_credential_parameter"
---

# ConnectApi.ExternalCredentialParameterInput

External credential parameter input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `id` | String | Parameter ID. | Optional | 58.0 |
| `parameter​Description` | String | Parameter description. | Optional | 58.0 |
| `parameterName` | String | Parameter name of the external credential. | Required | 58.0 |
| `parameterType` | [`ConnectApi.​ExternalCredential​ParameterType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ExternalCredentialParameterType) | Parameter type of the external credential. Values are:
-   `AdditionalRefreshStatusCode`
-   `AuthParameter`
-   `AuthProvider`
-   `AuthProviderUrl`
-   `AuthProviderUrlQueryParameter`
-   `JwtBodyClaim`
-   `JwtHeaderClaim`
-   `ManagedByComponent`
-   `ManagedByFeature`
-   `SfHttpRequestExtensionName`
-   `SigningCertificate`

 | Required | 58.0 |
| `parameterValue` | String | Parameter value of the external credential. | Required | 58.0 |

## See Also

- [ConnectApi.ExternalCredentialInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_credential.htm)

-   [ConnectApi.ExternalCredentialPrincipalInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_credential_principal.htm "External credential principal input.")
