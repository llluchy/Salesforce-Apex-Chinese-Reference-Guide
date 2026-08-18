---
doc_id: "apex_connectapi_input_external_credential"
---

# ConnectApi.ExternalCredentialInput

Input used to create or update an external credential.

:::tip Important
Where possible, we changed noninclusive terms to align with our company
        value of Equality. We maintained certain terms to avoid any effect on customer
        implementations.
:::

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `authentication​Protocol` | [`ConnectApi.​Credential​Authentication​Protocol`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CredentialAuthenticationProtocolEnum) | Authentication protocol of the external credential. Values are:
-   `AwsSv4`
-   `Basic`
-   `Custom`
-   `Jwt`
-   `OAuth`

 | Required | 58.0 |
| `authentication​ProtocolVariant` | [`ConnectApi.​Credential​Authentication​ProtocolVariant`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CredentialAuthenticationProtocolVariantEnum) | Authentication protocol variant of the external credential. Values are:

-   `AwsSv4_STS`—AWS Signature Version 4 with Security Token Service.
-   `ClientCredentialsClientSecret`—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s request body.
-   `ClientCredentialsClientSecretBasic`—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s authorization header, as with Basic authentication.
-   `ClientCredentialsJwtAssertion`—OAuth 2.0 Client Credentials JSON Web Token assertion.
-   `JwtBearer`—OAuth 2.0 JSON Web Token bearer flow.
-   `NoAuthentication`—No authentication.
-   `RolesAnywhere`—AWS Signature Version 4 with Identity and Access Management (IAM) Roles Anywhere.

If specified, the authentication protocol variant must match the actual protocol variant of the external credential. | Optional | 58.0 |
| `customHeaders` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​CredentialCustom​HeaderInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_credential_custom_header.htm "Credential custom header input.")\> | List of credential custom headers. | Optional | 58.0 |
| `developerName` | String | Fully qualified developer name of the external credential. | Required for creating an external credential

Optional for updating an external credential

 | 58.0 |
| `masterLabel` | String | External credential label. | Required | 58.0 |
| `parameters` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ExternalCredential​ParameterInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_credential_parameter.htm "External credential parameter input.")\> | List of external credential parameters. | Optional depending on `authenticationProtocol` and `authenticationVariant` | 58.0 |
| `principals` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ExternalCredential​PrincipalInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_credential_principal.htm "External credential principal input.")\> | List of principals the credential has. | Optional | 58.0 |
