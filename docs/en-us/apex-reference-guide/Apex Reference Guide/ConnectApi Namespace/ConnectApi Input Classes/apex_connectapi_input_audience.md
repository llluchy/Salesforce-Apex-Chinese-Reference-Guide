---
doc_id: "apex_connectapi_input_audience"
---

# ConnectApi.AudienceInput

A personalization audience.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `criteria` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​AudienceCriterion​Input`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_audience_criterion.htm "Personalization audience criterion.")\> | List of audience criteria to update or add. An audience can have up to 100 criteria. | Required when creating an audience
Optional when updating an audience

 | 48.0 |
| `customFormula` | String | Custom formula for the audience criteria. For example, (1 AND 2) OR 3. | Required when creating an audience with the `formulaFilterType` set to `CustomLogicMatches`

Optional, otherwise

 | 48.0 |
| `formulaFilterType` | [`ConnectApi.​FormulaFilterType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FormulaFilterType) | Formula filter type for the personalization audience. Values are:

-   `AllCriteriaMatch`—All audience criteria are true (AND operation).
-   `AnyCriterionMatches`—Any audience criterion is true (OR operation).
-   `CustomLogicMatches`—Audience criteria match the custom formula (for example, (1 AND 2) OR 3).

 | Required when creating an audience

Optional when updating an audience

 | 48.0 |
| `name` | String | Name of the audience. | Required when creating an audience

Optional when updating an audience

 | 48.0 |
