---
doc_id: "apex_classes_email_outbound_sendemailerror"
---

# SendEmailError Class

Represents an error that the SendEmailResult object may contain.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce notifications and email functionality.")

## Usage

:::tip Important
Sending an email by using Apex requires domain-level and user-level email
    verification. System-generated emails also require verification of the From email address. Email
    delivery fails if any of these verifications is incomplete. See [Requirements to Send Email from Salesforce](https://help.salesforce.com/s/articleView?id=xcloud.security_email_verification_requirements.htm&language=en_US&type=5).
:::

## SendEmailError Methods

The following are methods for `SendEmailError`. All are instance methods.

## See Also

- [getFields()](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailerror.htm#apex_Messaging_SendEmailError_getFields)
- [getMessage()](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailerror.htm#apex_Messaging_SendEmailError_getMessage)
- [getStatusCode()](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailerror.htm#apex_Messaging_SendEmailError_getStatusCode)
- [getTargetObjectId()](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailerror.htm#apex_Messaging_SendEmailError_getTargetObjectId)

### getFields()

A list of one or more field names. Identifies which fields in the object, if any, affected the error condition.

#### Signature

`public String[] getFields()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\[\]

### getMessage()

The text of the error message.

#### Signature

`public String getMessage()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getStatusCode()

Returns a code that characterizes the error.

#### Signature

`public System.StatusCode getStatusCode()`

#### Return Value

Type: System.StatusCode

#### Usage

The full list of status codes is available in the WSDL file for your organization. For more information about accessing the WSDL file for your organization, see *Downloading Salesforce WSDLs and Client Authentication Certificates* in the Salesforce online help.

### getTargetObjectId()

The ID of the target record for which the error occurred.

#### Signature

`public String getTargetObjectId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
