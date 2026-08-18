---
doc_id: "apex_classes_email_outbound_mass"
---

# MassEmailMessage Class

Contains methods for sending mass email.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce notifications and email functionality.")

## Usage

:::tip Important
Sending an email by using Apex requires domain-level and user-level email
    verification. System-generated emails also require verification of the From email address. Email
    delivery fails if any of these verifications is incomplete. See [Requirements to Send Email from Salesforce](https://help.salesforce.com/s/articleView?id=xcloud.security_email_verification_requirements.htm&language=en_US&type=5).
:::

MassEmailMessage extends Email and inherits all of its methods. All base email (`Email` class) methods are also available to the `MassEmailMessage` objects.

## See Also

- [MassEmailMessage Constructors](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_mass.htm#apex_Messaging_MassEmailMessage_constructors)
- [MassEmailMessage Methods](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_mass.htm#apex_Messaging_MassEmailMessage_methods)
- [Email Class (Base Email Methods)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_base.htm#apex_classes_email_outbound_base)

## MassEmailMessage Constructors

The following are constructors for `MassEmailMessage`.

## See Also

- [MassEmailMessage()](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_mass.htm#apex_Messaging_MassEmailMessage_ctor)

### MassEmailMessage()

Creates a new instance of the `Messaging.MassEmailMessage` class.

#### Signature

`public MassEmailMessage()`

## MassEmailMessage Methods

The following are methods for `MassEmailMessage`. All are instance methods. All base email (`Email` class) methods are also available to the `MassEmailMessage` objects. These methods are described in [Email Class (Base Email Methods)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_base.htm#apex_classes_email_outbound_base "Contains base email methods common to both single and mass email.").

## See Also

- [setDescription(description)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_mass.htm#apex_Messaging_MassEmailMessage_setDescription)
- [setTargetObjectIds(targetObjectIds)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_mass.htm#apex_Messaging_MassEmailMessage_setTargetObjectIds)
- [setWhatIds(whatIds)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_mass.htm#apex_Messaging_MassEmailMessage_setWhatIds)

### setDescription(description)

The description of the email.

#### Signature

`public Void setDescription(String description)`

#### Parameters

-   **description**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

### setTargetObjectIds(targetObjectIds)

A list of IDs of the contacts, leads, or users to which the email will be sent. The IDs you specify set the context and ensure that merge fields in the template contain the correct data. The objects must be of the same type (all contacts, all leads, or all users).

#### Signature

`public Void setTargetObjectIds(ID[] targetObjectIds)`

#### Parameters

-   **targetObjectIds**:
    
    Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\[\]
    

#### Return Value

Type: Void

#### Usage

You can list multiple IDs per email. If you specify a value for the targetObjectIds field, optionally specify a whatId as well to set the email context to a user, contact, or lead. This ensures that merge fields in the template contain the correct data. Each ID counts against the sending organization’s daily mass email limit, except for user IDs. Each ID counts against the sending organization’s daily mass email limit, except for IDs of users in the organization.

Do not specify the IDs of records that have the Email Opt Out option selected.

All emails must have a recipient value in at least one of the following fields:

-   toAddresses
-   ccAddresses
-   bccAddresses
-   targetObjectId

### setWhatIds(whatIds)

Optional. If you specify a list of contacts for the targetObjectIds field, you can specify a list of whatIds as well. This helps to further ensure that merge fields in the template contain the correct data.

#### Signature

`public Void setWhatIds(ID[] whatIds)`

#### Parameters

-   **whatIds**:
    
    Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\[\]
    

#### Return Value

Type: Void

#### Usage

The values must be one of the following types:

-   Contract
-   Case
-   Opportunity
-   Product

:::tip Note
If you specify whatIds, specify one for each
     targetObjectId; otherwise, you will receive an `INVALID_ID_FIELD` error.
:::
