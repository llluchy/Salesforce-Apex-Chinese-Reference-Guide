---
doc_id: "apex_connectapi_input_cdp_identity_resolution_match_criteri"
---

# ConnectApi.CdpIdentityResolutionMatchCriterion

Input representation for an identity resolution ruleset's match rule criterion.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `caseSensitiveMatch` | Boolean | Specifies whether the criterion match is case sensitive (`true`) or not (`false`). Available only when matching is based on the [party identifier](https://help.salesforce.com/s/articleView?id=data.c360_a_match_rules.htm&type=5&language=en_US). | Optional | 58.0 |
| `entityName` | String | API name of the Data Model Object the match rule applies to. | Required | 57.0 |
| `fieldName` | String | Name of the field the criterion applies to. | Required | 57.0 |
| `matchMethodType` | [`ConnectApi.​CdpIdentityResolution​MatchMethodType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CdpIdentityResolutionMatchMethodType) | Match method for a match rule criterion. Values are:
-   `Exact`—Exact match.
-   `ExactNormalized`—Exact normalized match.
-   `Fuzzy`—Fuzzy match with medium precision.
-   `FuzzyHigh`—Fuzzy match with high precision.
-   `FuzzyLow`—Fuzzy match with low precision.

 | Required | 57.0 |
| `partyIdentification​Info` | [`ConnectApi.​CdpIdentityResolution​MatchCriterionParty​IdentificationInfo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_match_criteria_party_identification_inf.htm "Input representation for information when party identification is used in an identity resolution ruleset's match rule criterion.") | Party Identifier information. | Optional | 57.0 |
| `shouldMatch​OnBlank` | Boolean | Specifies whether blank fields can be used for matching (`true`) or not (`false`). | Required | 57.0 |

## See Also

- [ConnectApi.CdpIdentityResolutionMatchRule](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_match_rul.htm)
