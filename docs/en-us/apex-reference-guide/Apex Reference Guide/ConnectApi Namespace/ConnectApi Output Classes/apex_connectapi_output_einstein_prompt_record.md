---
doc_id: "apex_connectapi_output_einstein_prompt_record"
---

# ConnectApi.EinsteinPromptRecordRepresentation

Prompt template record.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `apiName` | String | API name of the prompt template record. | 62.0 |
| `childRelationships` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.​EinsteinPrompt​RecordRepresentation`](# "Prompt template record.")\> | Map of prompt template name and prompt template records that are versions of the prompt template. | 62.0 |
| `fields` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.​EinsteinPrompt​RecordField​Representation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_einstein_prompt_record_field.htm "Field values for a prompt template record field.")\> | Map of field name and prompt template record fields. | 62.0 |
| `id` | String | ID of the prompt template record. | 62.0 |
| `isStandard` | Boolean | Specifies whether the prompt template record is a standard prompt template `(true)` or user-created prompt template `(false)`. | 62.0 |
