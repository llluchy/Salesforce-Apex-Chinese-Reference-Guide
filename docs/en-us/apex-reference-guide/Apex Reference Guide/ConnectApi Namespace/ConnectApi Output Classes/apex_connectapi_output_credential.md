---
doc_id: "apex_connectapi_output_credential"
---

# ConnectApi.Credential

Credential.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `authentication​Protocol` | [`ConnectApi.​CredentialAuthentication​Protocol`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CredentialAuthenticationProtocolEnum) | Authentication protocol of the external credential. Values are:
-   `AwsSv4`
-   `Basic`
-   `Custom`
-   `Jwt`
-   `OAuth`

 | 56.0 |
| `authentication​ProtocolVariant` | [`ConnectApi.​CredentialAuthentication​ProtocolVariant`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CredentialAuthenticationProtocolVariantEnum) | Authentication protocol variant of the external credential. Values are:

-   `AwsSv4_STS`—AWS Signature Version 4 with Security Token Service.
-   `ClientCredentialsClientSecret`—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s request body.
-   `ClientCredentialsClientSecretBasic`—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s authorization header, as with Basic authentication.
-   `ClientCredentialsJwtAssertion`—OAuth 2.0 Client Credentials JSON Web Token assertion.
-   `JwtBearer`—OAuth 2.0 JSON Web Token bearer flow.
-   `NoAuthentication`—No authentication.
-   `RolesAnywhere`—AWS Signature Version 4 with Identity and Access Management (IAM) Roles Anywhere.

 | 57.0 |
| `authentication​Status` | [`ConnectApi.​CredentialAuthentication​Status`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CredentialAuthenticationStatusEnum) | Status of the credential authentication. Values are:

-   `Configured`—Credential has all required credentials for at least one principal.
-   `NotConfigured`—Credential isn’t configured.
-   `Unknown`—Credential status can’t be determined because the authentication protocol is custom.

 | 56.0 |
| `credentials` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, `ConnectApi.​CredentialValue`\> | Map of protocol-specific credentials. | 56.0 |
| `externalCredential` | String | Fully qualified developer name of the external credential. | 56.0 |
| `principalName` | String | Name of the external credential named principal. | 56.0 |
| `principalType` | [`ConnectApi.​CredentialPrincipal​Type`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CredentialPrincipalTypeEnum) | Type of credential principal. Values are:

-   `AwsStsPrincipal`
-   `NamedPrincipal`
-   `PerUserPrincipal`

 | 56.0 |
