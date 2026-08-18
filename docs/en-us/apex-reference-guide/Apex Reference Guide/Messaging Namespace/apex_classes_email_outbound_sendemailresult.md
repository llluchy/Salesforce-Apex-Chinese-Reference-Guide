---
doc_id: "apex_classes_email_outbound_sendemailresult"
---

# SendEmailResult Class

Contains the result of sending an email message.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce notifications and email functionality.")

## Usage

:::tip Important
Sending an email by using Apex requires domain-level and user-level email
   verification. System-generated emails also require verification of the From email address. Email
   delivery fails if any of these verifications is incomplete. See [Requirements to Send Email from Salesforce](https://help.salesforce.com/s/articleView?id=xcloud.security_email_verification_requirements.htm&language=en_US&type=5).
:::

## SendEmailResult Methods

The following are methods for `SendEmailResult`. All are instance methods.

## See Also

- [getErrors()](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailresult.htm#apex_Messaging_SendEmailResult_getErrors)
- [isSuccess()](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailresult.htm#apex_Messaging_SendEmailResult_isSuccess)

### getErrors()

If an error occurred during the `sendEmail` method, a `SendEmailError` object is returned.

#### Signature

`public SendEmailError[] getErrors()`

#### Return Value

Type: [Messaging.SendEmailError](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailerror.htm#apex_classes_email_outbound_sendemailerror "Represents an error that the SendEmailResult object may contain.")\[\]

### isSuccess()

Indicates whether the email was successfully submitted for delivery (`true`) or not (`false`). Even if `isSuccess` is true, it does not mean the intended recipients received the email, as there could have been a problem with the email address or it could have bounced or been blocked by a spam blocker.

#### Signature

`public Boolean isSuccess()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
