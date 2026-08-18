---
doc_id: "apex_connectapi_output_external_auth_identity_provider"
---

# ConnectApi.ExternalAuthIdentityProvider

External auth identity provider.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `authenticationFlow` | [`ConnectApi.​IdentityProvider​AuthFlow`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#IdentityProviderAuthFlowEnum) | Authentication flow to get tokens to call protected APIs. Values are:
-   `AuthorizationCode`
-   `ClientCredentials`

 | 62.0 |
| `authenticationProtocol` | [`ConnectApi.​IdentityProvider​AuthProtocol`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#IdentityProviderAuthProtocolEnum) | Authentication protocol required to access the external system. Values are:

-   `OAuth`

 | 62.0 |
| `authorizeUrl` | String | Authorization endpoint URL for the external system. | 62.0 |
| `callbackUrl` | String | For the Authorization Code authentication flow, the callback URL that's used by the external system after authorization. | 62.0 |
| `clientAuthentication` | [`ConnectApi.​IdentityProvider​ClientAuth`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#IdentityProviderClientAuthEnum) | Client authentication method that describes how credentials are sent to the authorization server. Values are:

-   `ClientSecretBasic`
-   `ClientSecretPost`

 | 63.0 |
| `createdByNamespace` | String | Namespace of the package that created the external auth identity provider. | 62.0 |
| `credentials` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ExternalAuth​IdentityProvider​Credential`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_auth_identity_provider_credential.htm "External auth identity provider credential.")\> | List of the external auth identity provider credentials. | 62.0 |
| `description` | String | Description of the external auth identity provider. | 62.0 |
| `fullName` | String | Full name of the external auth identity provider. The full name can include a namespace prefix. | 62.0 |
| `id` | String | External auth identity provider ID. | 62.0 |
| `label` | String | External auth identity provider label. | 62.0 |
| `parameters` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ExternalAuth​IdentityProvider​Parameter`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_auth_identity_provider_parameter.htm "External auth identity provider parameter.")\> | List of custom request parameters. | 63.0 |
| `standardExternal​IdentityProvider` | String | Reference to a standard external auth identity provider. | 63.0 |
| `tokenUrl` | String | Token endpoint URL to retrieve tokens from the external system. Required for all OAuth 2.0 authentication flows. | 62.0 |
| `url` | String | Connect REST API URL for the external auth identity provider. | 62.0 |
| `userInfoUrl` | String | User info URL to retrieve user profile information from the external system. | 62.0 |

## See Also

- [ConnectApi.ExternalAuthIdentityProviderList](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_auth_identity_provider_list.htm)

-   [createExternalAuthIdentityProvider(requestBody)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_createExternalAuthIdentityProvider_2 "Create an external auth identity provider.")
    
-   [getExternalAuthIdentityProvider(fullName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_getExternalAuthIdentityProvider_2 "Get an external auth identity provider.")
    
-   [updateExternalAuthIdentityProvider(developerName, requestBody)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_updateExternalAuthIdentityProvider_3 "Update an external auth identity provider.")
