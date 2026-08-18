---
doc_id: "apex_class_reports_StandardDateFilterDurationGroup"
---

# StandardDateFilterDurationGroup Class

Contains information about the standard date filter groupings, such as the grouping display label and all standard date filters that fall under the grouping. Groupings include `Calendar Year`, `Calendar Quarter`, `Calendar Month`, `Calendar Week`, `Fiscal Year`, `Fiscal Quarter`, `Day`, and custom values based on user-defined date ranges.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## See Also

- [StandardDateFilterDurationGroup Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDurationGroup.htm#apex_reports_StandardDateFilterDurationGroup_methods)

## StandardDateFilterDurationGroup Methods

The following are methods for `StandardDateFilterDurationGroup`.

## See Also

- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDurationGroup.htm#apex_reports_StandardDateFilterDurationGroup_getLabel)
- [getStandardDateFilterDurations()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDurationGroup.htm#apex_reports_StandardDateFilterDurationGroup_getStandardDateFilterDurations)

### getLabel()

Returns the display label for the standard date filter grouping.

#### Signature

`public String getLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getStandardDateFilterDurations()

Returns the standard date filter groupings.

#### Signature

`public List<Reports.StandardDateFilterDuration> getStandardDateFilterDurations()`

#### Return Value

Type: List<[Reports.StandardDateFilterDuration](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDuration.htm#apex_class_reports_StandardDateFilterDuration "Contains information about each standard date filter—also referred to as a relative date filter. It contains the API name and display label of the standard date filter duration as well as the start and end dates.")\>

For example, a standard filter date grouping might look like this:

```plain
Reports.StandardDateFilterDuration[endDate=2015-12-31, label=Current FY, startDate=2015-01-01, value=THIS_FISCAL_YEAR],                                 
Reports.StandardDateFilterDuration[endDate=2014-12-31, label=Previous FY, startDate=2014-01-01, value=LAST_FISCAL_YEAR],                                 
Reports.StandardDateFilterDuration[endDate=2014-12-31, label=Previous 2 FY, startDate=2013-01-01, value=LAST_N_FISCAL_YEARS:2]
```
