---
doc_id: "apex_connectapi_input_recordset_filter_criteria"
---

# ConnectApi.RecordsetFilterCriteriaInput

A set of recordset filter criteria applied to records, such as service appointment records.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `criteriaIds` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | Recordset filter criteria IDs. | Required | 53.0 |
| `enforceSharing` | Boolean | Determines whether record sharing checks are enforced (`true`) or not (`false`) during the execution of this call. | Optional | 53.0 |
| `filteredObjectName` | String | Object that the filter is applied to. | Required | 53.0 |
| `recordIds` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | List of record IDs of the filtered object. | Required | 53.0 |

## See Also

- [evaluateRecordsetFilterCriteria(recordsetFilterCriteriaInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_RecordFilterCriteriaFamily_static_methods.htm#apex_ConnectAPI_RecordFilterCriteriaFamily_evaluateRecordsetFilterCriteria_1)
