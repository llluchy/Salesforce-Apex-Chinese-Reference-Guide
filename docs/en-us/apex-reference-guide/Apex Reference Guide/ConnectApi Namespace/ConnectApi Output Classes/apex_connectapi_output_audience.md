---
doc_id: "apex_connectapi_output_audience"
---

# ConnectApi.Audience

A personalization audience.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `criteria` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​AudienceCriteria​Detail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience_criteria_details.htm "Personalization audience criteria.")\> | Criteria details for the audience. | 48.0 |
| `customFormula` | String | Custom formula for the audience criteria. For example, (1 AND 2) OR 3. | 48.0 |
| `formulaFilterType` | [`ConnectApi.​FormulaFilterType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FormulaFilterType) | Formula filter type for the personalization audience. Values are:
-   `AllCriteriaMatch`—All audience criteria are true (AND operation).
-   `AnyCriterionMatches`—Any audience criterion is true (OR operation).
-   `CustomLogicMatches`—Audience criteria match the custom formula (for example, (1 AND 2) OR 3).

 | 48.0 |
| `id` | String | ID of the audience. | 48.0 |
| `name` | String | Name of the audience. | 48.0 |
| `targets` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​AudienceTarget​Assignment`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience_target_assignment.htm "Target assignments for a personalization audience.")\> | Target assignments for the audience. | 48.0 |
| `url` | String | URL to this audience. | 48.0 |

## See Also

- [ConnectApi.AudienceCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience_collection.htm)
