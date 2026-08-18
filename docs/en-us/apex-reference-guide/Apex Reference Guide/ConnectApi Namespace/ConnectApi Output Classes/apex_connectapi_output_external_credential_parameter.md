---
doc_id: "apex_connectapi_output_external_credential_parameter"
---

# ConnectApi.ExternalCredentialParameter

External credential parameter.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `id` | String | Parameter ID. | 58.0 |
| `parameterDescription` | String | Parameter description. | 58.0 |
| `parameterName` | String | Parameter name. If the `parameterType` is `AuthParameter`, valid values are:
-   `AwsAccountId`—Valid for AwsSv4.
-   `AwsProfileArn`—Valid for AwsSv4 with RolesAnywhere.
-   `AwsRegion`—Valid for AwsSv4.
-   `AwsService`—Valid for AwsSv4.
-   `AwsStsDuration`—Valid for AwsSv4 with STS or RolesAnywhere.
-   `AwsStsExternalId`—Valid for AwsSv4 with STS.
-   `AwsTrustAnchorArn`—Valid for AwsSv4 with RolesAnywhere.
-   `Scope`—Valid for OAuth.

Other parameter types can be any value. | 57.0 |
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

 | 57.0 |
| `parameterValue` | String | Parameter value. If the `parameterType` is `JwtBodyClaim` or `JwtHeaderClaim`, the parameter value can contain formulas. If the `parameterType` is `AuthProvider` or `SigningCertificate`, the parameter value is the fully qualified entity name of the corresponding entity. | 57.0 |

## See Also

- [ConnectApi.ExternalCredential](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential.htm)
