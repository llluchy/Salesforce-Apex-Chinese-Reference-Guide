---
doc_id: "apex_class_database_leadconvertresult"
---

# LeadConvertResult Class

The result of a lead conversion.

## Namespace

[Database](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm "The Database namespace provides classes used with DML operations.")

## Usage

An array of LeadConvertResult objects is returned with the `convertLead` Database method. Each element in the LeadConvertResult array corresponds to the sObject array passed as the SObject\[\] parameter in the `convertLead` Database method, that is, the first element in the LeadConvertResult array matches the first element passed in the SObject array, the second element corresponds to the second element, and so on. If only one sObject is passed in, the LeadConvertResult array contains a single element.

## LeadConvertResult Methods

The following are methods for `LeadConvertResult`. All are instance methods.

## See Also

- [getAccountId()](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_Database_LeadConvertResult_getAccountId)
- [getContactId()](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_Database_LeadConvertResult_getContactId)
- [getErrors()](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_Database_LeadConvertResult_getErrors)
- [getLeadId()](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_Database_LeadConvertResult_getLeadId)
- [getOpportunityId()](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_Database_LeadConvertResult_getOpportunityId)
- [getRelatedPersonAccountId()](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#unique_348426859)
- [isSuccess()](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_Database_LeadConvertResult_isSuccess)

### getAccountId()

The ID of the new account (if a new account was specified) or the ID of the account specified when `convertLead` was invoked.

#### Signature

`public ID getAccountId()`

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getContactId()

The ID of the new contact (if a new contact was specified) or the ID of the contact specified when `convertLead` was invoked.

#### Signature

`public ID getContactId()`

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getErrors()

If an error occurred, an array of one or more database error objects providing the error code and description.

#### Signature

`public Database.Error[] getErrors()`

#### Return Value

Type: [Database.Error](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_methods_system_database_error "Represents information about an error that occurred during a DML operation when using a Database method.")\[\]

### getLeadId()

The ID of the converted lead.

#### Signature

`public ID getLeadId()`

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getOpportunityId()

The ID of the new opportunity, if one was created when `convertLead` was invoked.

#### Signature

`public ID getOpportunityId()`

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getRelatedPersonAccountId()

The ID of the new or existing person account specified when `convertLead` was invoked.

#### Signature

`public ID getRelatedPersonAccountId()`

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### isSuccess()

A Boolean value that is set to `true` if the DML operation was successful for this object, `false` otherwise

#### Signature

`public Boolean isSuccess()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
