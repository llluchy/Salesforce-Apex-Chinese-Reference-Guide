---
doc_id: "apex_connectapi_output_einstein_prompt_record_collection_output"
---

# ConnectApi.EinsteinPromptRecordCollectionOutputRepresentation

List of prompt template records.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `hasMoreRecords` | Boolean | Specifies whether the query returned more prompt template records `(true)` or not `(false)`. | 62.0 |
| `promptRecords` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​EinsteinPrompt​RecordRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_einstein_prompt_record.htm "Prompt template record.")\> | List of prompt template records returned. | 62.0 |
| `totalPromptRecords` | Integer | Number of prompt template records returned. | 62.0 |
