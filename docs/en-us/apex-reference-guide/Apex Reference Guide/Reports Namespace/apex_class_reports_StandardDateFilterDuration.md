---
doc_id: "apex_class_reports_StandardDateFilterDuration"
---

# StandardDateFilterDuration Class

Contains information about each standard date filter—also referred to as a relative date filter. It contains the API name and display label of the standard date filter duration as well as the start and end dates.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## See Also

- [StandardDateFilterDuration Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDuration.htm#apex_reports_StandardDateFilterDuration_methods)

## StandardDateFilterDuration Methods

The following are methods for `StandardDateFilterDuration`.

## See Also

- [getEndDate()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDuration.htm#apex_reports_StandardDateFilterDuration_getEndDate)
- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDuration.htm#apex_reports_StandardDateFilterDuration_getLabel)
- [getStartDate()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDuration.htm#apex_reports_StandardDateFilterDuration_getStartDate)
- [getValue()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDuration.htm#apex_reports_StandardDateFilterDuration_getValue)

### getEndDate()

Returns the end date of the date filter.

#### Signature

`public String getEndDate()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLabel()

Returns the display name of the date filter. Possible values are relative date filters—like `Current FY` and `Current FQ`—and custom date filters.

#### Signature

`public String getLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getStartDate()

Returns the start date of the date filter.

#### Signature

`public String getStartDate()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValue()

Returns the API name of the date filter. Possible values are relative date filters—like `THIS_FISCAL_YEAR` and `NEXT_FISCAL_QUARTER`—and custom date filters.

#### Signature

`public String getValue()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
