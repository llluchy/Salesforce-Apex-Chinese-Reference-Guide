---
doc_id: "apex_connectapi_output_external_credential"
---

# ConnectApi.ExternalCredential

External credential, including the named credentials and principals associated with it and the type and status of each principal.

If you don’t have the View Setup and Configuration permission, some properties are empty or show limited information.

:::tip Important
Where possible,
        we changed noninclusive terms to align with our company value of Equality. We maintained
        certain terms to avoid any effect on customer implementations.
:::

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `authenticationProtocol` | [`ConnectApi.​CredentialAuthentication​Protocol`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CredentialAuthenticationProtocolEnum) | Authentication protocol of the external credential. Values are:
-   `AwsSv4`
-   `Basic`
-   `Custom`
-   `Jwt`
-   `OAuth`

 | 56.0 |
| `authenticationProtocol​Variant` | [`ConnectApi.​CredentialAuthentication​ProtocolVariant`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CredentialAuthenticationProtocolVariantEnum) | Authentication protocol variant of the external credential. Values are:

-   `AwsSv4_STS`—AWS Signature Version 4 with Security Token Service.
-   `ClientCredentialsClientSecret`—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s request body.
-   `ClientCredentialsClientSecretBasic`—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s authorization header, as with Basic authentication.
-   `ClientCredentialsJwtAssertion`—OAuth 2.0 Client Credentials JSON Web Token assertion.
-   `JwtBearer`—OAuth 2.0 JSON Web Token bearer flow.
-   `NoAuthentication`—No authentication.
-   `RolesAnywhere`—AWS Signature Version 4 with Identity and Access Management (IAM) Roles Anywhere.

 | 57.0 |
| `authenticationStatus` | [`ConnectApi.​CredentialAuthentication​Status`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CredentialAuthenticationStatusEnum) | Status of the credential authentication. Values are:

-   `Configured`—Credential has all required credentials for at least one principal.
-   `NotConfigured`—Credential isn’t configured.
-   `Unknown`—Credential status can’t be determined because the authentication protocol is custom.

 | 56.0 |
| `createdByNamespace` | String | Namespace of the package that created the external credential. | 59.0 |
| `customHeaders` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​CredentialCustom​Header`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_credential_custom_header.htm "Credential custom header.")\> | List of custom headers. | 57.0 |
| `developerName` | String | Fully qualified developer name of the external credential. | 56.0 |
| `id` | String | External credential ID. | 58.0 |
| `masterLabel` | String | External credential label. | 56.0 |
| `parameters` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ExternalCredential​Parameter`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential_parameter.htm "External credential parameter.")\> | List of parameters of the external credential. | 57.0 |
| `principals` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ExternalCredential​Principal`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential_principal.htm "External credential principal.")\> | List of principals the credential has. | 56.0 |
| `relatedNamed​Credentials` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​NamedCredential`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_named_credential.htm "Named credential associated with an external credential.")\> | List of named credentials associated to the external credential. | 56.0 |
| `url` | String | Connect REST API URL for the external credential. | 58.0 |

## See Also

- [ConnectApi.ExternalCredentialList](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential_list.htm)

-   [ConnectApi.NamedCredential](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_named_credential.htm "Named credential associated with an external credential.")
