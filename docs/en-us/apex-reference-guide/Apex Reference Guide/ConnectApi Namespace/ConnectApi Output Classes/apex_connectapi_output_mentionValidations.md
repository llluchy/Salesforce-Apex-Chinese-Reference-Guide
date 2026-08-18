---
doc_id: "apex_connectapi_output_mentionValidations"
---

# ConnectApi.MentionValidations

Information about whether a set of mentions is valid for the context user.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `hasErrors` | Boolean | Indicates whether at least one of the proposed mentions has an error (`true`), or not (`false`). For example, context users can’t mention private groups they don’t belong to. If such a group is included in the list of mention validations, `hasErrors` is `true` and the group has a `validationStatus` of `Disallowed` in its mention validation. | 29.0 |
| `mentionValidations` | `List<ConnectApi.​MentionValidation>` | List of mention validation information in the same order as the provided record IDs. | 29.0 |
