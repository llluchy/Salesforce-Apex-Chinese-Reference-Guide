---
doc_id: "apex_dml_convertLead"
---

# LeadConvert Class

Contains information used for lead conversion.

## Namespace

[Database](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm "The Database namespace provides classes used with DML operations.")

## Usage

The `convertLead` Database method converts a lead into an account and contact or an account and person account, as well as (optionally) an opportunity. The `convertLead` takes an instance of the `Database.LeadConvert` class as a parameter. Create an instance of this class and set the information required for conversion, such as setting the lead, and destination account and contact.

:::tip Note
The `Database.convertLead()` method can take one
      `LeadConvert` object or a list of `LeadConvert` objects.
:::

## Example

This example shows how to use the `Database.convertLead` method to convert a lead. It inserts a new lead, creates a `LeadConvert` object, sets its status to `converted`, then passes it to the `Database.convertLead` method. Finally, it verifies that the conversion was successful.

```apex
Lead myLead = new Lead(LastName = 'Fry', Company='Fry And Sons');
insert as user myLead;

Database.LeadConvert lc = new Database.LeadConvert();
lc.setLeadId(myLead.id);

LeadStatus convertStatus = [SELECT Id, ApiName FROM LeadStatus WHERE IsConverted=true WITH USER_MODE LIMIT 1];
lc.setConvertedStatus(convertStatus.ApiName);

Database.LeadConvertResult lcr = Database.convertLead(lc, AccessLevel.USER_MODE);
Assert.isTrue(lcr.isSuccess());
```

## See Also

- [LeadConvert Constructors](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_constructors)
- [LeadConvert Methods](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_methods)

## LeadConvert Constructors

The following are constructors for `LeadConvert`.

## See Also

- [LeadConvert()](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_ctor)

### LeadConvert()

Creates a new instance of the `Database.LeadConvert` class.

#### Signature

`public LeadConvert()`

## LeadConvert Methods

The following are methods for `LeadConvert`. All are instance methods.

## See Also

- [getAccountId()](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_getAccountId)
- [getAccountRecord()](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_getAccountRecord)
- [getBypassAccountDedupeCheck()](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_getBypassAccountDedupeCheck)
- [getBypassContactDedupeCheck()](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_getBypassContactDedupeCheck)
- [getContactId()](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_getContactId)
- [getContactRecord()](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_getContactRecord)
- [getConvertedStatus()](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_getConvertedStatus)
- [getLeadID()](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_getLeadID)
- [getOpportunityId()](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_getOpportunityId)
- [getOpportunityName()](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_getOpportunityName)
- [getOpportunityRecord()](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_getOpportunityRecord)
- [getOwnerID()](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_getOwnerID)
- [getRelatedPersonAccountId()](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_getRelatedPersonAccountId)
- [getRelatedPersonAccountRecord()](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#unique_1456249524)
- [isDoNotCreateOpportunity()](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_isDoNotCreateOpportunity)
- [isOverWriteLeadSource()](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_isOverWriteLeadSource)
- [isSendNotificationEmail()](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_isSendNotificationEmail)
- [setAccountId(accountId)](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_setAccountId)
- [setAccountRecord(accountRecord)](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_setAccountRecord)
- [setBypassAccountDedupeCheck(bypassAccountDedupeCheck)](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_setBypassAccountDedupeCheck)
- [setBypassContactDedupeCheck(bypassContactDedupeCheck)](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_setBypassContactDedupeCheck)
- [setContactId(contactId)](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_setContactId)
- [setContactRecord(contactRecord)](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_setContactRecord)
- [setConvertedStatus(status)](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_setConvertedStatus)
- [setDoNotCreateOpportunity(createOpportunity)](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_setDoNotCreateOpportunity)
- [setLeadId(leadId)](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_setLeadId)
- [setOpportunityId(opportunityId)](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_setOpportunityId)
- [setOpportunityName(opportunityName)](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_setOpportunityName)
- [setOpportunityRecord(opportunityRecord)](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_setOpportunityRecord)
- [setOverwriteLeadSource(overwriteLeadSource)](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_setOverwriteLeadSource)
- [setOwnerId(ownerId)](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_setOwnerId)
- [setRelatedPersonAccountId(relatedPersonAccountId)](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_setRelatedPersonAccountId)
- [setSendNotificationEmail(sendEmail)](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_Database_LeadConvert_setSendNotificationEmail)

### getAccountId()

Gets the ID of the account into which the lead will be merged.

#### Signature

`public ID getAccountId()`

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getAccountRecord()

This method is for internal use only.

### getBypassAccountDedupeCheck()

This method is for internal use only.

### getBypassContactDedupeCheck()

This method is for internal use only.

### getContactId()

Gets the ID of the contact into which the lead will be merged.

#### Signature

`public ID getContactId()`

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getContactRecord()

This method is for internal use only.

### getConvertedStatus()

Gets the lead status value for a converted lead.

#### Signature

`public String getConvertedStatus()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLeadID()

Gets the ID of the lead to convert.

#### Signature

`public ID getLeadID()`

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getOpportunityId()

Gets the ID of the existing opportunity that will be related to the resulting contact.

#### Signature

`public ID getOpportunityId()`

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getOpportunityName()

Gets the name of the opportunity to create.

#### Signature

`public String getOpportunityName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getOpportunityRecord()

This method is for internal use only.

### getOwnerID()

Gets the ID of the person to own any newly created account, contact, and opportunity.

#### Signature

`public ID getOwnerID()`

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getRelatedPersonAccountId()

Gets the ID of the existing person account into which the lead will be converted.

#### Signature

`public ID getRelatedPersonAccountId()`

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getRelatedPersonAccountRecord()

Gets the entity record of the new person account into which the lead will be converted.

#### Signature

`public ID getRelatedPersonAccountRecord()`

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### isDoNotCreateOpportunity()

Indicates whether an Opportunity is created during lead conversion (`false`, the default) or not (`true`).

#### Signature

`public Boolean isDoNotCreateOpportunity()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isOverWriteLeadSource()

Indicates whether the LeadSource field on the target Contact object is overwritten with the contents of the LeadSource field in the source Lead object (`true`), or not (`false`, the default).

#### Signature

`public Boolean isOverWriteLeadSource()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isSendNotificationEmail()

Indicates whether a notification email is sent to the owner specified by `setOwnerId` (`true`) or not (`false`, the default).

#### Signature

`public Boolean isSendNotificationEmail()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### setAccountId(accountId)

Sets the ID of the account into which the lead is merged. This value is required only when updating an existing account, including person accounts.

#### Signature

`public Void setAccountId(ID accountId)`

#### Parameters

-   **accountId**: Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: Void

### setAccountRecord(accountRecord)

This method is for internal use only.

### setBypassAccountDedupeCheck(bypassAccountDedupeCheck)

This method is for internal use only.

### setBypassContactDedupeCheck(bypassContactDedupeCheck)

This method is for internal use only.

### setContactId(contactId)

Sets the ID of the contact into which the lead will be merged (this contact must be associated with the account specified with `setAccountId`, and `setAccountId` must be specified). This value is required only when updating an existing contact.

#### Signature

`public Void setContactId(ID contactId)`

#### Parameters

-   **contactId**: Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: Void

#### Usage

If `setContactId` is specified, then the application creates a new contact that is implicitly associated with the account. The contact name and other existing data are not overwritten (unless `setOverwriteLeadSource` is set to true, in which case only the `LeadSource` field is overwritten).

:::tip Important
If you are converting a lead into a person account, do not specify `setContactId` or an error will result.
Specify only `setAccountId` of
the person account.
:::

### setContactRecord(contactRecord)

This method is for internal use only.

### setConvertedStatus(status)

Sets the lead status value for a converted lead. This field is required.

#### Signature

`public Void setConvertedStatus(String status)`

#### Parameters

-   **status**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setDoNotCreateOpportunity(createOpportunity)

Specifies whether to create an opportunity during lead conversion. The default value is `false`: opportunities are created by default. Set this flag to `true` only if you do not want to create an opportunity from the lead.

#### Signature

`public Void setDoNotCreateOpportunity(Boolean createOpportunity)`

#### Parameters

-   **createOpportunity**: Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: Void

### setLeadId(leadId)

Sets the ID of the lead to convert. This field is required.

#### Signature

`public Void setLeadId(ID leadId)`

#### Parameters

-   **leadId**: Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: Void

### setOpportunityId(opportunityId)

Sets the ID of the opportunity into which the lead is merged. This value is required only when updating an existing opportunity.

#### Signature

`public Void setOpportunityId(ID opportunityId)`

#### Parameters

-   **opportunityId**: Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: Void

### setOpportunityName(opportunityName)

Sets the name of the opportunity to create. If no name is specified, this value defaults to the company name of the lead.

#### Signature

`public Void setOpportunityName(String opportunityName)`

#### Parameters

-   **opportunityName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

#### Usage

The maximum length of this field is 80 characters.

If `setDoNotCreateOpportunity` is true, no Opportunity is created and this field must be left blank; otherwise, an error is returned.

### setOpportunityRecord(opportunityRecord)

This method is for internal use only.

### setOverwriteLeadSource(overwriteLeadSource)

Specifies whether to overwrite the `LeadSource` field on the target contact object with the contents of the `LeadSource` field in the source lead object. The default value is `false`, to not overwrite the field. If you specify this as `true`, you must also specify `setContactId` for the target contact.

#### Signature

`public Void setOverwriteLeadSource(Boolean overwriteLeadSource)`

#### Parameters

-   **overwriteLeadSource**: Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: Void

### setOwnerId(ownerId)

Specifies the ID of the person to own any newly created account, contact, and opportunity. If the application does not specify this value, the owner of the new object will be the owner of the lead.

#### Signature

`public Void setOwnerId(ID ownerId)`

#### Parameters

-   **ownerId**: Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: Void

#### Usage

This method is not applicable when merging with existing objects—if `setOwnerId` is specified, the `ownerId` field is not overwritten in an existing account or contact.

### setRelatedPersonAccountId(relatedPersonAccountId)

Sets the ID of the existing person account into which to convert the lead. This value is required only when updating an existing person account.

#### Signature

`public Void setRelatedPersonAccountId(ID relatedPersonAccountId)`

#### Parameters

-   **relatedPersonAccountId**: Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: Void

### setSendNotificationEmail(sendEmail)

Specifies whether to send a notification email to the owner specified by `setOwnerId`. The default value is `false`, that is, to not send email.

#### Signature

`public Void setSendNotificationEmail(Boolean sendEmail)`

#### Parameters

-   **sendEmail**: Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: Void
