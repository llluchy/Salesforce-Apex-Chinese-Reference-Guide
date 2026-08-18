---
doc_id: "apex_connectapi_output_cdp_identity_resolution_output"
---

# ConnectApi.CdpIdentityResolutionOutput

Identity resolution ruleset.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `anonymousUnified​Profiles` | Long | Count of anonymous unified profiles created by running the identity resolution ruleset. | 57.0 |
| `configurationType` | [`ConnectApi.​CdpIdentityResolution​ConfigurationType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CdpIdentityResolutionConfigurationType) | Source object for an identity resolution ruleset. Values are:
-   `Account`
-   `Individual`

 | 57.0 |
| `consolidationRate` | Double | Consolidation rate resulting from the run of an identity resolution ruleset. | 57.0 |
| `dataSpaceName` | String | Data space used as source data for an identity resolution ruleset. | 57.0 |
| `description` | String | Description of the identity resolution ruleset. | 57.0 |
| `doesRun​Automatically` | Boolean | Specifies whether automatic job run scheduling is enabled for the ruleset (`true`) or not (`false`). If unspecified, defaults to `false`. | 57.0 |
| `id` | String | Identity resolution ruleset's ID. This is not the identity resolution's extended ruleset ID (`rulesetId`). | 57.0 |
| `knownUnified​Profiles` | Long | Count of known unified profiles created by running the identity resolution ruleset. | 57.0 |
| `label` | String | User friendly name of the identity resolution ruleset. | 57.0 |
| `lastJobCompleted` | Datetime | Date and time the last job completed. | 57.0 |
| `lastJobStatus` | String | Last job's status. Possible values are:

-   `SUCCESS`
-   `IN_PROGRESS`
-   `FAIL`
-   `SCHEDULED`
-   `SKIPPED`

 | 57.0 |
| `matchRules` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​CdpIdentityResolution​MatchRuleOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_identity_resolution_match_rule_outpu.htm "Identity resolution ruleset’s match rule.")\> | List of match rules. | 57.0 |
| `matchedSource​Profiles` | Long | Count of matched source profiles identified by running the identity resolution ruleset. | 57.0 |
| `objectApiName` | String | Object name of the identity resolution ruleset. | 57.0 |
| `reconciliationRules` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​CdpIdentityResolution​ReconciliationRuleOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_identity_resolution_reconciliation_rule_outpu.htm "Identity resolution ruleset’s reconciliation rule for an object.")\> | List of reconciliation rules. | 57.0 |
| `rulesetId` | String | Extension ID of a ruleset. The ruleset ID must be unique and no longer than 4 characters. This ID is not the identifying ID for the ruleset. | 57.0 |
| `rulesetStatus` | String | Status of a ruleset job. Possible values are:

-   `NEW`
-   `PUBLISHING`
-   `PUBLISHED`
-   `ERROR`
-   `DELETING`
-   `DELETE_FAILED`

 | 57.0 |
| `sourceProfiles` | Long | Count of source profiles that were processed by a ruleset job. | 57.0 |
| `totalUnifiedProfiles` | Long | Count of unified profiles created by running the identity resolution ruleset. | 57.0 |

## See Also

- [ConnectApi.CdpIdentityResolutionsOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_identity_resolutions_output.htm)
