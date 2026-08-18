---
doc_id: "apex_connectapi_output_named_credential"
---

# ConnectApi.NamedCredential

Named credential associated with an external credential.

:::tip Important
Where possible, we changed noninclusive terms to align with our company
        value of Equality. We maintained certain terms to avoid any effect on customer
        implementations.
:::

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `calloutOptions` | [`ConnectApi.​NamedCredential​CalloutOptions`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_named_credential_callout_options.htm "Named credential callout options.") | Callout options for the named credential. | 58.0 |
| `calloutStatus` | [`ConnectApi.​CalloutStatus`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CalloutStatusEnum) | Indicates whether a named credential is enabled for callout. Values are:
-   `Disabled`
-   `Enabled`

 | 59.0 |
| `calloutUrl` | String | URL of the named credential in a callout. | 58.0 |
| `createdByNamespace` | String | Namespace of the package that created the named credential. | 59.0 |
| `customHeaders` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​CredentialCustom​Header`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_credential_custom_header.htm "Credential custom header.")\> | Custom HTTP headers for the named credential. | 58.0 |
| `description` | String | Description of the named credential. | 64.0 |
| `developerName` | String | Fully qualified developer name of the named credential. | 56.0 |
| `externalCredentials` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ExternalCredential`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential.htm "External credential, including the named credentials and principals associated with it and the type and status of each principal.")\> | External credentials used by the named credential. | 58.0 |
| `id` | String | Named credential ID. | 58.0 |
| `masterLabel` | String | Named credential label. | 56.0 |
| `networkConnection` | [`ConnectApi.​NetworkConnection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_network_connection.htm "External network connection.") | PrivateConnect outbound network connection for the named credential. | 58.0 |
| `parameters` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​NamedCredential​Parameter`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_named_credential_parameter.htm "Named credential parameter.")\> | Named credential parameters. | 58.0 |
| `type` | [`ConnectApi.​NamedCredentialType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#NamedCredentialTypeEnum) | Type of named credential. Values are:

-   `PrivateEndpoint`
-   `SecuredEndpoint`

 | 58.0 |
| `url` | String | Connect REST API URL of the named credential. | 58.0 |

## See Also

- [ConnectApi.ExternalCredential](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential.htm)

-   [ConnectApi.NamedCredentialList](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_named_credential_list.htm "List of named credentials.")
