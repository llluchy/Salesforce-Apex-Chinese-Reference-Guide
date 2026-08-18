---
doc_id: "apex_connectapi_input_audience_criterion"
---

# ConnectApi.AudienceCriterionInput

Personalization audience criterion.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `criterion` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​AudienceCriterion​ValueInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_audience_criterion_value.htm "Audience criterion value.")\> | List of mappings of audience criteria fields and values. | Required when creating an audience
Optional when updating an audience

 | 48.0 |
| `criterionNumber` | Integer | Number associated with the audience criterion in a formula. For example, (1 AND 2) OR 3. If unspecified, criteria are assigned numbers in the order that they’re added. | Optional | 48.0 |
| `criterionOperator` | [`ConnectApi.​AudienceCriteria​Operator`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#audienceCriteriaOperatorEnum) | Operator used in the personalization audience criterion. Values are:

-   `Contains`
-   `Equal`
-   `GreaterThan`
-   `GreaterThanOrEqual`
-   `Includes`
-   `LessThan`
-   `LessThanOrEqual`
-   `NotEqual`
-   `NotIncludes`
-   `StartsWith`

 | Required when creating an audience

Optional when updating an audience

 | 48.0 |
| `criterionType` | [`ConnectApi.​AudienceCriteria​Type`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#audienceCriteriaType) | Type of personalization audience criterion. Values are:

-   `Audience`—Criterion based on audience.
-   `Default`—Audience has no criteria.
-   `Domain`—Criterion based on domain.
-   `FieldBased`—Criterion based on object fields.
-   `GeoLocation`—Criterion based on location.
-   `Permission`—Criterion based on standard or custom permissions.
-   `Profile`—Criterion based on profile.

 | Required when creating an audience

Optional when updating an audience

 | 48.0 |

## See Also

- [ConnectApi.AudienceInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_audience.htm)
