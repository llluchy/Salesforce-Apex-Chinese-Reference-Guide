---
doc_id: "apex_connectapi_input_cdp_identity_resolution_match_rul"
---

# ConnectApi.CdpIdentityResolutionMatchRule

Input representation for an identity resolution ruleset’s match rule.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `criteria` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​CdpIdentityResolution​MatchCriterion`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_match_criteri.htm "Input representation for an identity resolution ruleset's match rule criterion.")\> | Object and field the match rule applies to and the match method applied. | Required | 57.0 |
| `label` | String | User friendly name for the identity resolution match rule. | Required | 57.0 |

## See Also

- [ConnectApi.CdpIdentityResolutionConfigInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_config_inpu.htm)

-   [ConnectApi.CdpIdentityResolutionConfigPatchInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_config_patch_inpu.htm "Input representation for updating an identity resolution ruleset.")
