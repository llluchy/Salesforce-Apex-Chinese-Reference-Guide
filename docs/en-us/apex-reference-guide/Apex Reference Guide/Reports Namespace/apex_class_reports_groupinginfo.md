---
doc_id: "apex_class_reports_groupinginfo"
---

# GroupingInfo Class

Contains methods for describing fields that are used for grouping.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## GroupingInfo Methods

The following are methods for `GroupingInfo`. All are instance methods.

## See Also

- [getName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupinginfo.htm#apex_Reports_GroupingInfo_getName)
- [getSortOrder()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupinginfo.htm#apex_Reports_GroupingInfo_getSortOrder)
- [getDateGranularity()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupinginfo.htm#apex_Reports_GroupingInfo_getDateGranularity)
- [getSortAggregate()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupinginfo.htm#apex_Reports_GroupingInfo_getSortAggregate)

### getName()

Returns the unique API name of the field or bucket field that is used for row or column grouping.

#### Syntax

`public String getName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSortOrder()

Returns the order that is used to sort data in a row or column grouping (`ASCENDING` or `DESCENDING`).

#### Syntax

`public Reports.ColumnSortOrder getSortOrder()`

#### Return Value

Type: [Reports.ColumnSortOrder](atlas.en-us.apexref.meta/apexref/apex_enum_reports_columnsortorder.htm "The Reports.ColumnSortOrder enum describes the order that the grouping column uses to sort data.")

### getDateGranularity()

Returns the date interval that is used for row or column grouping.

#### Syntax

`public Reports.DateGranularity getDateGranularity()`

#### Return Value

Type: [Reports.DateGranularity](atlas.en-us.apexref.meta/apexref/apex_enum_reports_dategranularity.htm "The Reports.DateGranularity enum describes the date interval that is used for grouping.")

### getSortAggregate()

Returns the summary field that is used to sort data within a grouping in a summary report. The value is null when data within a grouping is not sorted by a summary field.

#### Syntax

`public String getSortAggregate()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
