---
doc_id: "apex_ConnectAPI_EmailMergeFieldService_static_methods"
---

# EmailMergeFieldService Class

Extract a list of merge fields for an object. A merge field is a field you can put in an email template, mail merge template, custom link, or formula to incorporate values from a record.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## EmailMergeFieldService Methods

These methods are for `EmailMergeFieldService`. All methods are static.

## See Also

- [getMergeFields(objectApiNames)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmailMergeFieldService_static_methods.htm#apex_ConnectAPI_EmailMergeFieldService_getMergeFields_1)

### getMergeFields(objectApiNames)

Extract the merge fields for a specific object.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.EmailMergeFieldInfo getMergeFields(List<String> objectApiNames)`

#### Parameters

objectApiNames

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

The API names for the objects being referenced.

#### Return Value

Type: [`ConnectApi.EmailMergeFieldInfo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_email_merge_field.htm#apex_connectapi_output_email_merge_field "The map for objects and their merge fields.")
