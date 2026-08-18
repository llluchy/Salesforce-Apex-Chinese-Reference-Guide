---
doc_id: "apex_connectapi_input_external_auth_identity_provider"
---

# ConnectApi.ExternalAuthIdentityProviderInput

External auth identity provider input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `authenticationFlow` | [`ConnectApi.​IdentityProvider​AuthFlow`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#IdentityProviderAuthFlowEnum) | Authentication flow to get tokens to call protected APIs. Values are:
-   `AuthorizationCode`
-   `ClientCredentials`

 | Required | 62.0 |
| `authenticationProtocol` | [`ConnectApi.​IdentityProvider​AuthProtocol`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#IdentityProviderAuthProtocolEnum) | Authentication protocol required to access the external system. Values are:

-   `OAuth`

 | Required | 62.0 |
| `authorizeUrl` | String | Authorization endpoint URL for the external system. | Required when the `authenticationProtocol` is `OAuth` and the `authenticationFlow` is `AuthorizationCode`. Otherwise, Optional. | 62.0 |
| `clientAuthentication` | [`ConnectApi.​IdentityProvider​ClientAuth`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#IdentityProviderClientAuthEnum) | Client authentication method that describes how credentials are sent to the authorization server. Values are:

-   `ClientSecretBasic`
-   `ClientSecretPost`

The default value is `ClientSecretBasic`.

 | Optional | 63.0 |
| `description` | String | Description of the external auth identity provider. | Optional | 62.0 |
| `fullName` | String | Full name of the external auth identity provider. The full name can include a namespace prefix. | Required | 62.0 |
| `label` | String | External auth identity provider label. | Required | 62.0 |
| `parameters` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ExternalAuth​IdentityProvider​Parameter`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_auth_identity_provider_parameter.htm "External auth identity provider parameter input.")\> | List of custom request parameters to customize and extend requests to the identity provider’s token endpoint. | Optional | 63.0 |
| `standardExternal​IdentityProvider` | String | Reference to a standard external auth identity provider. | Optional | 63.0 |
| `tokenUrl` | String | Token endpoint URL to retrieve tokens from the external system. Required for all OAuth 2.0 authentication flows. | Required | 62.0 |
| `userInfoUrl` | String | User info URL to retrieve user profile information from the external system.

Applicable only when the `authenticationProtocol` is `OAuth`.

 | Optional | 62.0 |

## See Also

- [createExternalAuthIdentityProvider(requestBody)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_createExternalAuthIdentityProvider_2)

-   [updateExternalAuthIdentityProvider(developerName, requestBody)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_updateExternalAuthIdentityProvider_3 "Update an external auth identity provider.")
