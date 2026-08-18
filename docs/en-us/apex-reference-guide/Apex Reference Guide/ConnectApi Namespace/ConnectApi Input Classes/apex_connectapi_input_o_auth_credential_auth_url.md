---
doc_id: "apex_connectapi_input_o_auth_credential_auth_url"
---

# ConnectApi.OAuthCredentialAuthUrlInput

OAuth authentication flow.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `external​Credential` | String | Fully qualified developer name of the external credential. | Required | 56.0 |
| `principalName` | String | Name of the external credential named principal. | Required if `principalType` is `NamedPrincipal` | 56.0 |
| `principalType` | [`ConnectApi.​CredentialPrincipal​Type`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CredentialPrincipalTypeEnum) | Type of credential principal. Values are:
-   `AwsStsPrincipal`
-   `NamedPrincipal`
-   `PerUserPrincipal`

 | Required | 56.0 |
| `returnUrl` | String | Return URL to apply to the authentication URL. | Optional | 56.0 |
