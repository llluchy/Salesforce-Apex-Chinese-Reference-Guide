---
doc_id: "apex_connectapi_input_named_credential"
---

# ConnectApi.NamedCredentialInput

Input used to create or update a named credential.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `calloutOptions` | [`ConnectApi.​NamedCredential​CalloutOptionsInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_named_credential_callout_options.htm "Named credential callout options input.") | Callout options. | Required | 58.0 |
| `calloutUrl` | String | URL of the named credential in a callout. | Required | 58.0 |
| `customHeaders` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.CredentialCustomHeaderInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_credential_custom_header.htm "Credential custom header input.")\> | Custom HTTP headers. | Optional | 58.0 |
| `description` | String | Description of the named credential. | Optional | 64.0 |
| `developerName` | String | Named credential developer name. | Required for creating a named credential
Optional for updating a named credential

 | 58.0 |
| `external​Credentials` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.ExternalCredentialInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_credential.htm "Input used to create or update an external credential.")\> | External credentials used by the named credential. In version 58.0 and later only one external credential is supported. | Required | 58.0 |
| `masterLabel` | String | Named credential label. | Required | 58.0 |
| `network​Connection` | [`ConnectApi.​NetworkConnection​Input`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_network_connection.htm "Network connection input.") | PrivateConnect outbound network connection. | Optional depending on `type` | 58.0 |
| `parameters` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.NamedCredentialParameterInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_named_credential_parameter.htm "Named credential parameter input.")\> | Named credential parameters. | Optional | 58.0 |
| `type` | [`ConnectApi.​NamedCredential​Type`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#NamedCredentialTypeEnum) | Type of named credential. Values are:

-   `PrivateEndpoint`
-   `SecuredEndpoint`

 | Required | 58.0 |
