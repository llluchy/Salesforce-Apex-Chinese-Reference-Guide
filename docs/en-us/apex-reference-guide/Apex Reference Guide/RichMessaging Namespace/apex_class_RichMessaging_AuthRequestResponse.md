---
doc_id: "apex_class_RichMessaging_AuthRequestResponse"
---

# AuthRequestResponse Class

This class contains authorization request response data.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## See Also

- [AuthRequestResponse Constructors](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm#apex_RichMessaging_AuthRequestResponse_constructors)
- [AuthRequestResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm#apex_RichMessaging_AuthRequestResponse_methods)

## AuthRequestResponse Constructors

The following are constructors for `AuthRequestResponse`.

## See Also

- [AuthRequestResponse(accessToken, contextRecordId, authProviderName)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm#apex_RichMessaging_AuthRequestResponse_ctor)

### AuthRequestResponse(accessToken, contextRecordId, authProviderName)

Creates a new instance of the `RichMessaging.AuthRequestResponse` class.

#### Signature

`public AuthRequestResponse(String accessToken, String contextRecordId, String authProviderName)`

#### Parameters

-   **accessToken**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The authorization access token.
-   **contextRecordId**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The context record ID.
-   **authProviderName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The provider name.

## AuthRequestResponse Methods

The following are methods for `AuthRequestResponse`.

## See Also

- [getAccessToken()](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm#apex_RichMessaging_AuthRequestResponse_getAccessToken)
- [getAuthProviderName()](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm#apex_RichMessaging_AuthRequestResponse_getAuthProviderName)
- [getContextRecordId()](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm#apex_RichMessaging_AuthRequestResponse_getContextRecordId)

### getAccessToken()

Gets the authorization access token.

#### Signature

`public String getAccessToken()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The access token.

### getAuthProviderName()

Get the authorization provider name.

#### Signature

`public String getAuthProviderName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The authorization provider name.

### getContextRecordId()

Gets the context record ID.

#### Signature

`public String getContextRecordId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The context record ID.
