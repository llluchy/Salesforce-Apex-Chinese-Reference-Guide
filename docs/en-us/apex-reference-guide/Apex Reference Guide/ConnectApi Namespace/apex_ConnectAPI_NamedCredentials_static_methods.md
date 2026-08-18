---
doc_id: "apex_ConnectAPI_NamedCredentials_static_methods"
---

# NamedCredentials Class

Create, refresh, get, delete, replace, and update credentials. Create and get external credentials. Create and get named credentials. Create, get, delete, and update external auth identity providers. Get the URL for the OAuth token flow for an external credential.

:::tip Note
Managed packages can access only the named credentials and external credentials that are
        included in or created from the package’s Apex code. If a managed package tries to access
        non-packaged named credentials and external credentials that a Salesforce admin created in
        the org, an error occurs.
:::

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## NamedCredentials Methods

These methods are for `NamedCredentials`. All methods are static.

## See Also

- [createCredential(requestBody)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_createCredential_3)
- [createCredential(requestBody, action)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_createCredential_4)
- [createExternalAuthIdentityProvider(requestBody)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_createExternalAuthIdentityProvider_2)
- [createExternalAuthIdentityProviderCredentials(fullName, requestBody)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_createExternalAuthIdentityProviderCredentials_2)
- [createExternalCredential(requestBody)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_createExternalCredential_2)
- [createNamedCredential(requestBody)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_createNamedCredential_2)
- [deleteCredential(externalCredential, principalName, principalType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_deleteCredential_1)
- [deleteCredential(externalCredential, principalName, principalType, authenticationParameters)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_deleteCredential_2)
- [deleteExternalAuthIdentityProvider(developerName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_deleteExternalAuthIdentityProvider_1)
- [deleteExternalCredential(developerName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_deleteExternalCredential_1)
- [deleteNamedCredential(developerName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_deleteNamedCredential_1)
- [getCredential(externalCredential, principalName, principalType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_getCredential_2)
- [getExternalAuthIdentityProvider(fullName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_getExternalAuthIdentityProvider_2)
- [getExternalAuthIdentityProviderCredentials(fullName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_getExternalAuthIdentityProviderCredentials_1)
- [getExternalAuthIdentityProviders()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_getExternalAuthIdentityProviders_1)
- [getExternalCredential(developerName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_getExternalCredential_1)
- [getExternalCredentials()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_getExternalCredentials_1)
- [getNamedCredential(developerName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_getNamedCredential_1)
- [getNamedCredentials()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_getNamedCredentials_1)
- [getOAuthCredentialAuthUrl(requestBody)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_getOAuthCredentialAuthUrl_1)
- [patchCredential(requestBody)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_patchCredential_4)
- [updateCredential(requestBody)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_updateCredential_4)
- [updateExternalAuthIdentityProvider(developerName, requestBody)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_updateExternalAuthIdentityProvider_3)
- [updateExternalAuthIdentityProviderCredentials(fullName, requestBody)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_updateExternalAuthIdentityProviderCredentials_3)
- [updateExternalCredential(developerName, requestBody)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_updateExternalCredential_3)
- [updateNamedCredential(developerName, requestBody)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_updateNamedCredential_2)
- [Salesforce Help: Named Credentials](https://help.salesforce.com/HTViewHelpDoc?id=named_credentials_about.htm&amp;language=en_US)

-   [*Named Credentials Developer Guide*: Get Started with Named Credentials](https://developer.salesforce.com/docs/platform/named-credentials/guide/get-started.html "Named Credentials Developer Guide: Get Started with Named
    Credentials - HTML (New Window)")
    
-   [*Named Credentials Developer Guide*: Named Credential API Links](https://developer.salesforce.com/docs/platform/named-credentials/references/named-credentials-reference/nc-api-links.html "Named Credentials Developer Guide: Named Credential API Links - HTML (New Window)")
    
-   [*Apex Developer Guide*: Invoking Callouts Using Apex](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_callouts.htm "Apex Developer Guide: Invoking Callouts Using Apex - html (New Window)")
    
-   [*Apex Developer Guide*: Named Credentials as Callout Endpoints](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_callouts_named_credentials.htm "Apex Developer Guide: Named Credentials as Callout Endpoints - HTML (New Window)")
    

### createCredential(requestBody)

Create a credential.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.Credential createCredential(ConnectApi.CredentialInput requestBody)`

#### Parameters

requestBody

Type: [`ConnectApi.CredentialInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_credential.htm "Credential input.")

A `ConnectApi.CredentialInput` class.

#### Return Value

Type: [`ConnectApi.Credential`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_credential.htm "Credential.")

### createCredential(requestBody, action)

Refresh an OAuth or AWS Roles Anywhere credential.

#### API Version

58.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.Credential createCredential(ConnectApi.CredentialInput requestBody, ConnectApi.CreateCredentialAction action)`

#### Parameters

**requestBody**

Type: `ConnectApi.CredentialInput`

A `ConnectApi.CredentialInput` class.

**action**

Type: [`ConnectApi.CreateCredentialAction`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CreateCredentialActionEnum)

Action to take when creating the credential. Value is:

-   `Refresh`

#### Return Value

Type: `ConnectApi.Credential`

### createExternalAuthIdentityProvider(requestBody)

Create an external auth identity provider.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ExternalAuthIdentityProvider createExternalAuthIdentityProvider(ConnectApi.ExternalAuthIdentityProviderInput requestBody)`

#### Parameters

requestBody

Type: [`ConnectApi.ExternalAuthIdentityProviderInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_auth_identity_provider.htm "External auth identity provider input.")

A `ConnectApi.ExternalAuthIdentityProviderInput` input class.

#### Return Value

Type: [`ConnectApi.ExternalAuthIdentityProvider`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_auth_identity_provider.htm "External auth identity provider.")

### createExternalAuthIdentityProviderCredentials(fullName, requestBody)

Create external auth identity provider credentials.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ExternalAuthIdentityProviderCredentials createExternalAuthIdentityProviderCredentials(String fullName, ConnectApi.ExternalAuthIdentityProviderCredentialsInput requestBody)`

#### Parameters

fullName

Type: String

Full name of the external auth identity provider to create credentials for.

requestBody

Type: [`ConnectApi.ExternalAuthIdentityProviderCredentialsInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_auth_identity_provider_credentials.htm "External auth identity provider credentials input.")

A `ConnectApi.ExternalAuthIdentityProviderCredentialsInput` input class

#### Return Value

Type: [`ConnectApi.ExternalAuthIdentityProviderCredentials`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_auth_identity_provider_credentials.htm "List of an external auth identity provider's credentials.")

### createExternalCredential(requestBody)

Create an external credential.

#### API Version

58.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ExternalCredential createExternalCredential(ConnectApi.ExternalCredentialInput requestBody)`

#### Parameters

requestBody

Type: `ConnectApi.ExternalCredentialInput`

Input used to create or update an external credential.

#### Return Value

Type: `ConnectApi.ExternalCredential`

### createNamedCredential(requestBody)

Create a named credential.

#### API Version

58.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.NamedCredential createNamedCredential(ConnectApi.NamedCredentialInput requestBody)`

#### Parameters

requestBody

Type: `ConnectApi.NamedCredentialInput`

Input used to create or update a named credential.

#### Return Value

Type: `ConnectApi.NamedCredential`

### deleteCredential(externalCredential, principalName, principalType)

Delete a credential.

This method deletes the user external credentials that store the encrypted access tokens used for named credential callouts, not the external credential itself. You can delete an external credential only in the UI or by using REST API.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

`public static Void deleteCredential(String externalCredential, String principalName, ConnectApi.CredentialPrincipalType principalType)`

#### Parameters

**externalCredential**

Type: String

Fully qualified developer name of the external credential.

**principalName**

Type: String

Name of the external credential named principal.

**principalType**

Type: [`ConnectApi.CredentialPrincipalType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CredentialPrincipalTypeEnum)

Type of credential principal. Values are:

-   `AwsStsPrincipal`
-   `NamedPrincipal`
-   `PerUserPrincipal`

#### Return Value

Type: Void

### deleteCredential(externalCredential, principalName, principalType, authenticationParameters)

Delete a credential with authentication parameters.

This method deletes the user external credentials that store the encrypted access tokens used for named credential callouts, not the external credential itself. You can delete an external credential only in the UI or by using REST API.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

`public static Void deleteCredential(String externalCredential, String principalName, ConnectApi.CredentialPrincipalType principalType, List<String> authenticationParameters)`

#### Parameters

**externalCredential**

Type: String

Fully qualified developer name of the external credential.

**principalName**

Type: String

Name of the external credential named principal.

**principalType**

Type: [`ConnectApi.CredentialPrincipalType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CredentialPrincipalTypeEnum)

Type of credential principal. Values are:

-   `AwsStsPrincipal`
-   `NamedPrincipal`
-   `PerUserPrincipal`

**authenticationParameters**

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

List of authentication parameters only for custom protocols, for example `myApiKey,myApiSecret`. If unspecified, all credentials are deleted.

#### Return Value

Type: Void

### deleteExternalAuthIdentityProvider(developerName)

Delete an external auth identity provider.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

`public static Void deleteExternalAuthIdentityProvider(String developerName)`

#### Parameters

developerName

Type: String

Fully qualified developer name of the external auth identity provider.

#### Return Value

Type: Void

### deleteExternalCredential(developerName)

Delete an external credential.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

`public static Void deleteExternalCredential(String developerName)`

#### Parameters

developerName

Type: String

Fully qualified developer name of the external credential.

#### Return Value

Type: Void

### deleteNamedCredential(developerName)

Delete a named credential.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

`public static Void deleteNamedCredential(String developerName)`

#### Parameters

developerName

Type: String

Fully qualified developer name of the named credential.

#### Return Value

Type: Void

### getCredential(externalCredential, principalName, principalType)

Get a credential.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.Credential getCredential(String externalCredential, String principalName, ConnectApi.CredentialPrincipalType principalType)`

#### Parameters

**externalCredential**

Type: String

Fully qualified developer name of the external credential.

**principalName**

Type: String

Name of the external credential named principal.

**principalType**

Type: [`ConnectApi.CredentialPrincipalType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CredentialPrincipalTypeEnum)

Type of credential principal. Values are:

-   `AwsStsPrincipal`
-   `NamedPrincipal`
-   `PerUserPrincipal`

#### Return Value

Type: [`ConnectApi.Credential`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_credential.htm "Credential.")

### getExternalAuthIdentityProvider(fullName)

Get an external auth identity provider.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ExternalAuthIdentityProvider getExternalAuthIdentityProvider(String fullName)`

#### Parameters

fullName

Type: String

Full name of the external auth identity provider.

#### Return Value

Type: [`ConnectApi.ExternalAuthIdentityProvider`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_auth_identity_provider.htm "External auth identity provider.")

### getExternalAuthIdentityProviderCredentials(fullName)

Get external auth identity provider credentials.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ExternalAuthIdentityProviderCredentials getExternalAuthIdentityProviderCredentials(String fullName)`

#### Parameters

fullName

Type: String

Full name of the external auth identity provider.

#### Return Value

Type: [`ConnectApi.ExternalAuthIdentityProviderCredentials`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_auth_identity_provider_credentials.htm "List of an external auth identity provider's credentials.")

### getExternalAuthIdentityProviders()

Get a list of external auth identity providers in the org.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ExternalAuthIdentityProviderList getExternalAuthIdentityProviders()`

#### Return Value

Type: [`ConnectApi.ExternalAuthIdentityProviderList`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_auth_identity_provider_list.htm "List of external auth identity providers in the org.")

### getExternalCredential(developerName)

Get an external credential, including the named credentials and principals associated with it and the type and status of each principal.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ExternalCredential getExternalCredential(String developerName)`

#### Parameters

developerName

Type: String

Fully qualified developer name of the external credential.

#### Return Value

Type: [`ConnectApi.ExternalCredential`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential.htm "External credential, including the named credentials and principals associated with it and the type and status of each principal.")

### getExternalCredentials()

Get external credentials that the user can authenticate to.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ExternalCredentialList getExternalCredentials()`

#### Return Value

Type: [`ConnectApi.ExternalCredentialList`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential_list.htm "List of external credentials.")

### getNamedCredential(developerName)

Get a named credential.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.NamedCredential getNamedCredential(String developerName)`

#### Parameters

developerName

Type: String

Fully qualified developer name of the named credential.

#### Return Value

Type: `ConnectApi.NamedCredential`

### getNamedCredentials()

Get a list of named credentials for the org.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.NamedCredentialList getNamedCredentials()`

#### Return Value

Type: `ConnectApi.NamedCredentialList`

### getOAuthCredentialAuthUrl(requestBody)

Get the URL for the OAuth token flow for an external credential.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.OAuthCredentialAuthUrl getOAuthCredentialAuthUrl(ConnectApi.OAuthCredentialAuthUrlInput requestBody)`

#### Parameters

requestBody

Type: [`ConnectApi.OAuthCredentialAuthUrlInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_o_auth_credential_auth_url.htm "OAuth authentication flow.")

A `ConnectApi.OAuthCredentialAuthUrlInput` class indicating the OAuth authentication flow.

#### Return Value

Type: [`ConnectApi.OAuthCredentialAuthUrl`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_auth_credential_auth_url.htm "OAuth authentication URL for a credential.")

#### Usage

Accepts input parameters representing a specific external credential and, optionally, a named principal. Returns the URL a user must visit to begin the authentication flow, ultimately returning authentication tokens to Salesforce. Use this method as part of building a customized or branded user interface to help users initiate authentication.

#### Example

```apex
ConnectApi.OAuthCredentialAuthUrlInput input = new ConnectApi.OAuthCredentialAuthUrlInput();

input.externalCredential = 'MyExternalCredentialDeveloperName';
input.principalType = ConnectApi.CredentialPrincipalType.PerUserPrincipal;
input.principalName = 'MyPrincipal'; // Only required when principalType = NamedPrincipal

ConnectApi.OAuthCredentialAuthUrl output = ConnectApi.NamedCredentials.getOAuthCredentialAuthUrl(input);

String authenticationUrl = output.authenticationUrl; // Redirect users to this URL to authenticate in the browser
```

### patchCredential(requestBody)

Update custom credentials.

This method updates custom credentials. To replace a credential, use [`updateCredential(requestBody)`](#apex_ConnectAPI_NamedCredentials_updateCredential_4 "Replace a credential.").

#### API Version

59.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.Credential patchCredential(ConnectApi.CredentialInput requestBody)`

#### Parameters

requestBody

Type: `ConnectApi.CredentialInput`

A `ConnectApi.CredentialInput` class. Only the custom credentials in the input class are updated.

#### Return Value

Type: `ConnectApi.Credential`

### updateCredential(requestBody)

Replace a credential.

This method uses the `ConnectApi.CredentialInput` and the `ConnectApi.CredentialValueInput` input classes to replace a credential’s values. In the UI, these values appear as the credential’s authentication parameters. To update a credential, use [`patchCredential(requestBody)`](#apex_ConnectAPI_NamedCredentials_patchCredential_4 "Update custom credentials.").

#### API Version

56.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.Credential updateCredential(ConnectApi.CredentialInput requestBody)`

#### Parameters

requestBody

Type: [`ConnectApi.CredentialInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_credential.htm "Credential input.")

A `ConnectApi.CredentialInput` class.

#### Return Value

Type: [`ConnectApi.Credential`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_credential.htm "Credential.")

### updateExternalAuthIdentityProvider(developerName, requestBody)

Update an external auth identity provider.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ExternalAuthIdentityProvider updateExternalAuthIdentityProvider(String developerName, ConnectApi.ExternalAuthIdentityProviderInput requestBody)`

#### Parameters

developerName

Type: String

Fully qualified developer name of the external auth identity provider.

requestBody

Type: [`ConnectApi.ExternalAuthIdentityProviderInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_auth_identity_provider.htm "External auth identity provider input.")

Input used to create or update an external auth identity provider.

#### Return Value

Type: [`ConnectApi.ExternalAuthIdentityProvider`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_auth_identity_provider.htm "External auth identity provider.")

### updateExternalAuthIdentityProviderCredentials(fullName, requestBody)

Replace external auth identity provider credentials.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ExternalAuthIdentityProviderCredentials updateExternalAuthIdentityProviderCredentials(String fullName, ConnectApi.ExternalAuthIdentityProviderCredentialsInput requestBody)`

#### Parameters

fullName

Type: String

The external auth identity provider credentials to replace.

requestBody

Type: [`ConnectApi.ExternalAuthIdentityProviderCredentialsInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_auth_identity_provider_credentials.htm "External auth identity provider credentials input.")

A `ConnectApi.ExternalAuthIdentityProviderCredentialsInput` input class.

#### Return Value

Type: [`ConnectApi.ExternalAuthIdentityProviderCredentials`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_auth_identity_provider_credentials.htm "List of an external auth identity provider's credentials.")

### updateExternalCredential(developerName, requestBody)

Update an external credential.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ExternalCredential updateExternalCredential(String developerName, ConnectApi.ExternalCredentialInput requestBody)`

#### Parameters

developerName

Type: String

Fully qualified developer name of the external credential.

requestBody

Type: `ConnectApi.ExternalCredentialInput`

Input used to create or update an external credential.

#### Return Value

Type: `ConnectApi.ExternalCredential`

### updateNamedCredential(developerName, requestBody)

Update a named credential.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.NamedCredential updateNamedCredential(String developerName, ConnectApi.NamedCredentialInput requestBody)`

#### Parameters

developerName

Type: String

Fully qualified developer name of the named credential.

requestBody

Type: `ConnectApi.NamedCredentialInput`

Input used to create or update a named credential.

#### Return Value

Type: `ConnectApi.NamedCredential`
