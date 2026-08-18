---
doc_id: "apex_connectapi_output_external_auth_identity_provider_parameter"
---

# ConnectApi.ExternalAuthIdentityProviderParameter

External auth identity provider parameter.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `parameterName` | String | The name of the external auth identity provider parameter. | 63.0 |
| `parameterType` | [`ConnectApi.​ExternalAuth​IdentityProvider​ParameterType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ExternalAuthIdentityProviderParameterTypeEnum) | Parameter type for an external auth identity provider. Values are:
-   `AuthorizeRequestQueryParameter`
-   `IdentityProviderOptions`
-   `ManagedByComponent`
-   `ManagedByFeature`
-   `RefreshRequestBodyParameter`
-   `RefreshRequestHttpHeader`
-   `RefreshRequestQueryParameter`
-   `TokenRequestBodyParameter`
-   `TokenRequestHttpHeader`
-   `TokenRequestQueryParameter`

 | 63.0 |
| `parameterValue` | String | If `parameterType` describes a literal value then the literal value is stored in this property. | 63.0 |
| `sequenceNumber` | Integer | Specifies the order of parameters to apply when an external auth identity provider has more than one parameter. Priority is from lower to higher numbers, for example, `1` is the highest priority. | 63.0 |

## See Also

- [ConnectApi.ExternalAuthIdentityProvider](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_auth_identity_provider.htm)
