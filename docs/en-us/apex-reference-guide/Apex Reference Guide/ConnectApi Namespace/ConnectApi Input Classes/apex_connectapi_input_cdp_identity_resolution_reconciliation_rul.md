---
doc_id: "apex_connectapi_input_cdp_identity_resolution_reconciliation_rul"
---

# ConnectApi.CdpIdentityResolutionReconciliationRule

Input representation for an identity resolution ruleset's default reconciliation rule for an object.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `entityName` | String | API name of the Data Model Object the reconciliation rule applies to. | Required | 57.0 |
| `fields` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​CdpIdentityResolution​ReconciliationField​Rule`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_reconciliation_field_rul.htm "Input representation for an identity resolution ruleset's reconciliation rule for a field.")\> | Field-specific reconciliation rules that override this default rule for the specified field. | Optional | 57.0 |
| `ruleType` | [`ConnectApi.​CdpIdentityResolution​ReconciliationRuleType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CdpIdentityResolutionReconciliationRuleType) | Default reconciliation rule applied to fields in the object the reconciliation rule applies to. Values are:
-   `LastUpdated`
-   `MostFrequent`
-   `SourceSequence`

 | Required | 57.0 |
| `shouldIgnore​EmptyValue` | Boolean | Specifies whether to ignore an empty value (`true`) or not (`false`). | Required | 57.0 |
| `sources` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​CdpIdentityResolution​ReconciliationSource`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_reconciliation_sourc.htm "Input representation for an identity resolution default reconciliation rule or field-specific rule using the SourceSequence match method.")\> | If `ruleType` is `SourceSequence`, a list of data sources in priority order. | Required if `ruleType` is `SourceSequence` | 57.0 |

## See Also

- [ConnectApi.CdpIdentityResolutionConfigInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_config_inpu.htm)

-   [ConnectApi.CdpIdentityResolutionConfigPatchInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_config_patch_inpu.htm "Input representation for updating an identity resolution ruleset.")
