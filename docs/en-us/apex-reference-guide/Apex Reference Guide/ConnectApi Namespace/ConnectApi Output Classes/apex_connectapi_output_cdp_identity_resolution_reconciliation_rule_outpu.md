---
doc_id: "apex_connectapi_output_cdp_identity_resolution_reconciliation_rule_outpu"
---

# ConnectApi.CdpIdentityResolutionReconciliationRuleOutput

Identity resolution ruleset’s reconciliation rule for an object.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `entityName` | String | API name of the Data Model Object the reconciliation rule applies to. | 57.0 |
| `fields` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​CdpIdentityResolution​ReconciliationField​RuleOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_identity_resolution_reconciliation_field_rule_outpu.htm "Identity resolution ruleset's reconciliation rule for a field.")\> | Field-specific reconciliation rules that override this default rule for the specified field. | 57.0 |
| `linkDmoName` | String | API name of the unified link object created by the identity resolution process. | 57.0 |
| `ruleType` | [`ConnectApi.​CdpIdentityResolution​ReconciliationRuleType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CdpIdentityResolutionReconciliationRuleType) | Default reconciliation rule applied to fields in the object the reconciliation rule applies to. Values are:
-   `LastUpdated`
-   `MostFrequent`
-   `SourceSequence`

 | 57.0 |
| `shouldIgnore​EmptyValue` | Boolean | Specifies whether to ignore an empty value (`true`) or not (`false`). | 57.0 |
| `sources` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​CdpIdentityResolution​ReconciliationSourceOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_identity_resolution_reconciliation_source_outpu.htm "Source for an identity resolution default reconciliation rule or field-specific rule using the SourceSequence match method.")\> | If `ruleType` is `SourceSequence`, a list of data sources in priority order. | 57.0 |
| `unifiedDmoName` | String | API name of the unified data model object created by the identity resolution process. | 57.0 |

## See Also

- [ConnectApi.CdpIdentityResolutionOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_identity_resolution_output.htm)
