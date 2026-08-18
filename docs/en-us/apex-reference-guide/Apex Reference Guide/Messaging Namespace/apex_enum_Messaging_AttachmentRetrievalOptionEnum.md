---
doc_id: "apex_enum_Messaging_AttachmentRetrievalOptionEnum"
---

# AttachmentRetrievalOption Enum

Provides options for including attachment metadata only, attachment metadata and content, or excluding attachments.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce notifications and email functionality.")

## Usage

:::tip Important
Sending an email by using Apex requires domain-level and user-level
        email verification. System-generated emails also require verification of the From email
        address. Email delivery fails if any of these verifications is incomplete. See [Requirements to Send Email from Salesforce](https://help.salesforce.com/s/articleView?id=xcloud.security_email_verification_requirements.htm&language=en_US&type=5).
:::

Use these enum values with the [renderStoredEmailTemplate(templateId, whoId, whatId, attachmentRetrievalOption)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm#apex_System_messaging_renderStoredEmailTemplate_2 "Renders a text, custom, HTML, or Visualforce email template that exists in the database into an instance of Messaging.SingleEmailMessage. Provides options for including attachment metadata only, attachment metadata and content, or excluding attachments.") method.

## Enum Values

The following are the values of the `Messaging.AttachmentRetrievalOption` enum.

| Value | Description |
| --- | --- |
| `METADATA_ONLY` | Includes only the file name, content type, and the object ID in the `fileAttachments` property of `Messaging.SingleEmailMessage`. When the template is rendered from a Visualforce template (and not from a static file attached to the template), the object ID is not available. |
| `METADATA_WITH_BODY` | Includes the attachment content, in addition to the file name, content type, and the object ID in the `fileAttachments` property of `Messaging.SingleEmailMessage`. |
| `NONE` | Doesn’t include any attachments in `Messaging.SingleEmailMessage`. |
