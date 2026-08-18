---
doc_id: "apex_connectapi_output_o_auth_credential_auth_url"
---

# ConnectApi.OAuthCredentialAuthUrl

OAuth authentication URL for a credential.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `authenticationUrl` | String | Authentication URL for the user external credential.
Authentication URLs have encoded and escaped special characters. Before using the URL, undo the encoded and escaped characters.

 | 56.0 |
| `external​Credential` | String | Fully qualified developer name of the external credential. | 56.0 |
| `principalName` | String | Name of the external credential named principal. | 56.0 |
| `principalType` | [`ConnectApi.​CredentialPrincipal​Type`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CredentialPrincipalTypeEnum) | Type of credential principal. Values are:

-   `AwsStsPrincipal`
-   `NamedPrincipal`
-   `PerUserPrincipal`

 | 56.0 |
