---
doc_id: "apex_class_Messaging_InboundEmail_AuthenticationResult"
---

# InboundEmail.AuthenticationResult Class

Contains the authentication type and response for inbound emails.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce notifications and email functionality.")

## See Also

- [InboundEmail.AuthenticationResult Constructors](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm#apex_Messaging_InboundEmail_AuthenticationResult_constructors)
- [InboundEmail.AuthenticationResult Properties](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm#apex_Messaging_InboundEmail_AuthenticationResult_properties)

## InboundEmail.AuthenticationResult Constructors

The following are constructors for `InboundEmail.AuthenticationResult`.

## See Also

- [InboundEmail.AuthenticationResult()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm#apex_Messaging_InboundEmail_AuthenticationResult_ctor)

### InboundEmail.AuthenticationResult()

Creates a new instance of the `Messaging.InboundEmail.AuthenticationResult` class.

#### Signature

`public InboundEmail.AuthenticationResult()`

## InboundEmail.AuthenticationResult Properties

The following are properties for `InboundEmail.AuthenticationResult`.

## See Also

- [authenticationResultFields](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm#apex_Messaging_InboundEmail_AuthenticationResult_authenticationResultFields)
- [method](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm#apex_Messaging_InboundEmail_AuthenticationResult_method)
- [result](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm#apex_Messaging_InboundEmail_AuthenticationResult_result)

### authenticationResultFields

Additional information in authentication result headers. Examples include: `name: smtp.mailfrom` and `value: example.com`.

#### Signature

`public InboundEmail.AuthenticationResultField[] authenticationResultFields {get; set;}`

#### Property Value

Type: [InboundEmail.AuthenticationResultField](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResultField.htm#apex_class_Messaging_InboundEmail_AuthenticationResultField "Contains field data from the authentication result response for inbound emails.")\[\]

### method

The authentication method used for the security check. Possible values include `dkim`, `dmarc`, or `spf`.

#### Signature

`public String method {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### result

The result of the authentication check. When the email service is configured to verify the legitimacy of the sending server before processing a message, possible values include `pass` or `fail`. Otherwise, the value returned is `none`.

#### Signature

`public String result {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
