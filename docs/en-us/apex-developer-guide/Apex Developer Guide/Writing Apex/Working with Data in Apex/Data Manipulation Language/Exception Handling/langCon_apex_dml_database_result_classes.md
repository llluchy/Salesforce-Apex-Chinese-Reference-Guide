---
doc_id: "langCon_apex_dml_database_result_classes"
---

# Database Class Method Result Objects

Database class methods return the results of the data operation. These result objects contain useful information about the data operation for each record, such as whether the operation was successful or not, and any error information. Each type of operation returns a specific result object type, as outlined below.

| Operation | Result Class |
| --- | --- |
| insert, update | [SaveResult Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database_saveresult.htm) |
| upsert | [UpsertResult Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database_upsertresult.htm) |
| merge | [MergeResult Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_database_mergeresult.htm) |
| delete | [DeleteResult Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm) |
| undelete | [UndeleteResult Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database_undeleteresult.htm) |
| convertLead | [LeadConvertResult Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_database_leadconvertresult.htm) |
| emptyRecycleBin | [EmptyRecycleBinResult Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database_EmptyRecycleBinResult.htm) |
