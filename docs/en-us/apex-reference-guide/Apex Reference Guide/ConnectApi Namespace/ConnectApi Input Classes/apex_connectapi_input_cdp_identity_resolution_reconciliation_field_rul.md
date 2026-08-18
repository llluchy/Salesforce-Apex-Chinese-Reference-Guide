---
doc_id: "apex_connectapi_input_cdp_identity_resolution_reconciliation_field_rul"
---

# ConnectApi.CdpIdentityResolutionReconciliationFieldRule

Input representation for an identity resolution ruleset's reconciliation rule for a field.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `fieldName` | String | The field that this reconciliation rule applies to. | Required | 57.0 |
| `ruleType` | [`ConnectApi.​CdpIdentityResolution​ReconciliationRuleType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CdpIdentityResolutionReconciliationRuleType) | Default reconciliation rule applied to fields in the object the reconciliation rule applies to. Values are:
-   `LastUpdated`
-   `MostFrequent`
-   `SourceSequence`

 | Required | 57.0 |
| `shouldIgnore​EmptyValue` | Boolean | Specifies whether to ignore an empty value (`true`) or not (`false`). | Required | 57.0 |
| `sources` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​CdpIdentityResolution​ReconciliationSource`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_reconciliation_sourc.htm "Input representation for an identity resolution default reconciliation rule or field-specific rule using the SourceSequence match method.")\> | If `ruleType` is `SourceSequence`, a prioritized list of data sources. | Required if `ruleType` is `SourceSequence` | 57.0 |

## See Also

- [ConnectApi.CdpIdentityResolutionReconciliationRule](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_reconciliation_rul.htm)
