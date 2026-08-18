---
doc_id: "apex_class_reports_reportdatacell"
---

# ReportDataCell Class

Contains the data for a cell in the report, including the display label and value.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## ReportDataCell Methods

The following are methods for `ReportDataCell`. All are instance methods.

## See Also

- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdatacell.htm#apex_Reports_ReportDataCell_getLabel)
- [getValue()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdatacell.htm#apex_Reports_ReportDataCell_getValue)

### getLabel()

Returns the localized display name of the value of a specified cell in the report.

#### Syntax

`public String getLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValue()

Returns the value of a specified cell of a detail row of a report.

#### Syntax

`public Object getValue()`

#### Return Value

Type: Object
