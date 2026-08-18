---
doc_id: "apex_connectapi_output_referenceWithDateRecordField"
---

# ConnectApi.ReferenceWithDateRecordField

Record field containing a referenced object that acted at a specific time, for example, “Created By...”.

Subclass of [ConnectApi.LabeledRecordField](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_labeledRecordField.htm "Record field containing a label and a text value.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `dateValue` | Datetime | Time at which the referenced object acted. | 29.0 |
| `reference` | `ConnectApi.​RecordSummary` | Object referenced by the record field. | 29.0 |
