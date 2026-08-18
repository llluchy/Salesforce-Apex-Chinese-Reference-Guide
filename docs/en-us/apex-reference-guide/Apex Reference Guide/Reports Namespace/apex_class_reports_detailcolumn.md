---
doc_id: "apex_class_reports_detailcolumn"
---

# DetailColumn Class

Contains methods for describing fields that contain detailed data. Detailed data fields are also listed in the report metadata.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## DetailColumn Instance Methods

The following are instance methods for `DetailColumn`. All are instance methods.

## See Also

- [getName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_detailcolumn.htm#apex_Reports_DetailColumn_getName)
- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_detailcolumn.htm#apex_Reports_DetailColumn_getLabel)
- [getDataType()](atlas.en-us.apexref.meta/apexref/apex_class_reports_detailcolumn.htm#apex_Reports_DetailColumn_getDataType)

### getName()

Returns the unique API name of the detail column field.

#### Syntax

`public String getName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLabel()

Returns the localized display name of a standard field, the ID of a custom field, or the API name of a bucket field that has detailed data.

#### Syntax

`public String getLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getDataType()

Returns the data type of a detail column field.

#### Syntax

`public Reports.ColumnDataType getDataType()`

#### Return Value

Type: [Reports.ColumnDataType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_columndatatype.htm "The Reports.ColumnDataType enum describes the type of data in a column. It is returned by the getDataType method.")
