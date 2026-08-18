---
doc_id: "apex_connectapi_output_audience_criteria_details"
---

# ConnectApi.AudienceCriteriaDetail

Personalization audience criteria.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `criterion` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​AudienceCriterion​Detail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience_criterion_details.htm "Audience criterion information.")\> | List of mappings of audience criteria fields and values. | 48.0 |
| `criterionNumber` | Integer | Number associated with the audience criterion in a formula. For example, (1 AND 2) OR 3. If unspecified, criteria are assigned numbers in the order that they’re added. | 48.0 |
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

 | 48.0 |
| `criterionType` | [`ConnectApi.​AudienceCriteria​Type`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#audienceCriteriaType) | Type of personalization audience criterion. Values are:

-   `Audience`—Criterion based on audience.
-   `Default`—Audience has no criteria.
-   `Domain`—Criterion based on domain.
-   `FieldBased`—Criterion based on object fields.
-   `GeoLocation`—Criterion based on location.
-   `Permission`—Criterion based on standard or custom permissions.
-   `Profile`—Criterion based on profile.

 | 48.0 |

## See Also

- [ConnectApi.Audience](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience.htm)
