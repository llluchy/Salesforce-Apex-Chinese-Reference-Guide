---
doc_id: "apex_connectapi_output_external_credential_principal"
---

# ConnectApi.ExternalCredentialPrincipal

External credential principal.

If you don’t have the View Setup and Configuration permission, some properties are empty or show limited information.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `authenticationStatus` | [`ConnectApi.​CredentialAuthentication​Status`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CredentialAuthenticationStatusEnum) | Status of the credential authentication. Values are:
-   `Configured`—Credential has all required credentials for at least one principal.
-   `NotConfigured`—Credential isn’t configured.
-   `Unknown`—Credential status can’t be determined because the authentication protocol is custom.

 | 56.0 |
| `id` | String | ID of the external credential principal. | 58.0 |
| `parameters` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​ExternalCredential​Parameter`\> | List of external credential parameters. | 58.0 |
| `principalAccess` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ExternalCredential​PrincipalAccess`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential_principal_access.htm "External credential principal access.")\> | List of access entities associated with the external credential principal. | 58.0 |
| `principalName` | String | Name of the external credential named principal. | 56.0 |
| `principalType` | [`ConnectApi.​CredentialPrincipal​Type`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CredentialPrincipalTypeEnum) | Type of credential principal. Values are:

-   `AwsStsPrincipal`
-   `NamedPrincipal`
-   `PerUserPrincipal`

 | 56.0 |
| `sequenceNumber` | Integer | Sequence number of the external credential principal. | 58.0 |

## See Also

- [ConnectApi.ExternalCredential](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential.htm)
