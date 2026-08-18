---
doc_id: "apex_class_reports_aggregatecolumn"
---

# AggregateColumn Class

Contains methods for describing summary fields such as Record Count, Sum, Average, Max, Min, and custom summary formulas. Includes name, label, data type, and grouping context.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## AggregateColumn Methods

The following are methods for `AggregateColumn`. All are instance methods.

## See Also

- [getName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_aggregatecolumn.htm#apex_Reports_AggregateColumn_getName)
- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_aggregatecolumn.htm#apex_Reports_AggregateColumn_getLabel)
- [getDataType()](atlas.en-us.apexref.meta/apexref/apex_class_reports_aggregatecolumn.htm#apex_Reports_AggregateColumn_getDataType)
- [getAcrossGroupingContext()](atlas.en-us.apexref.meta/apexref/apex_class_reports_aggregatecolumn.htm#apex_Reports_AggregateColumn_getAcrossGroupingContext)
- [getDownGroupingContext()](atlas.en-us.apexref.meta/apexref/apex_class_reports_aggregatecolumn.htm#apex_Reports_AggregateColumn_getDownGroupingContext)

### getName()

Returns the unique API name of the summary field.

#### Syntax

`public String getName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLabel()

Returns the localized display name for the summarized or custom summary formula field.

#### Syntax

`public String getLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getDataType()

Returns the data type of the summarized or custom summary formula field.

#### Syntax

`public Reports.ColumnDataType getDataType()`

#### Return Value

Type: [Reports.ColumnDataType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_columndatatype.htm "The Reports.ColumnDataType enum describes the type of data in a column. It is returned by the getDataType method.")

### getAcrossGroupingContext()

Returns the column grouping in the report where the summary field is displayed.

#### Syntax

`public String getAcrossGroupingContext()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getDownGroupingContext()

Returns the row grouping in the report where the summary field is displayed.

#### Syntax

`public String getDownGroupingContext()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
