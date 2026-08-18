---
doc_id: "apex_connectapi_input_cdp_identity_resolution_config_patch_inpu"
---

# ConnectApi.CdpIdentityResolutionConfigPatchInput

Input representation for updating an identity resolution ruleset.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `description` | String | Description of the identity resolution ruleset. | Optional | 57.0 |
| `doesRun​Automatically` | Boolean | Specifies whether automatic job run scheduling is enabled for the ruleset (`true`) or not (`false`). If unspecified, defaults to `false`. | Optional | 57.0 |
| `label` | String | User friendly name of the identity resolution ruleset. | Required | 57.0 |
| `matchRules` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​CdpIdentityResolution​MatchRule`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_match_rul.htm "Input representation for an identity resolution ruleset’s match rule.")\> | List of match rules for the identity resolution ruleset. | Optional | 57.0 |
| `reconciliationRules` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​CdpIdentityResolution​ReconciliationRule`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_reconciliation_rul.htm "Input representation for an identity resolution ruleset's default reconciliation rule for an object.")\> | List of reconciliation rules for the identity resolution ruleset. | Required | 57.0 |
