---
doc_id: "apex_class_reports_groupingcolumn"
---

# GroupingColumn Class

Contains methods for describing fields that are used for column grouping.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

The `GroupingColumn` class provides basic information about column grouping fields. The `GroupingInfo` class includes additional methods for describing and updating grouping fields.

## GroupingColumn Methods

The following are methods for `GroupingColumn`. All are instance methods.

## See Also

- [getName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingcolumn.htm#apex_Reports_GroupingColumn_getName)
- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingcolumn.htm#apex_Reports_GroupingColumn_getLabel)
- [getDataType()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingcolumn.htm#apex_Reports_GroupingColumn_getDataType)
- [getGroupingLevel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingcolumn.htm#apex_Reports_GroupingColumn_getGroupingLevel)

### getName()

Returns the unique API name of the field or bucket field that is used for column grouping.

#### Syntax

`public String getName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLabel()

Returns the localized display name of the field that is used for column grouping.

#### Syntax

`public String getLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getDataType()

Returns the data type of the field that is used for column grouping.

#### Syntax

`public Reports.ColumnDataType getDataType()`

#### Return Value

Type: [Reports.ColumnDataType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_columndatatype.htm "The Reports.ColumnDataType enum describes the type of data in a column. It is returned by the getDataType method.")

### getGroupingLevel()

Returns the level of grouping for the column.

#### Syntax

`public Integer getGroupingLevel()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

-   In a summary report, 0, 1, or 2 indicates grouping at the first, second, or third row level.
-   In a matrix report, 0 or 1 indicates grouping at the first or second row or column level.
