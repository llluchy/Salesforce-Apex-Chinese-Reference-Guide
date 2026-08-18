---
doc_id: "apex_class_reports_filteroperator"
---

# FilterOperator Class

Contains information about a filter operator, such as display name and API name.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## FilterOperator Methods

The following are methods for `FilterOperator`. All are instance methods.

## See Also

- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_filteroperator.htm#apex_Reports_FilterOperator_getLabel)
- [getName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_filteroperator.htm#apex_Reports_FilterOperator_getName)

### getLabel()

Returns the localized display name of the filter operator. Possible values for this name are restricted based on the data type of the column being filtered. 

#### Syntax

`public String getLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getName()

Returns the unique API name of the filter operator. Possible values for this name are restricted based on the data type of the column being filtered.  For example multipicklist fields can use the following filter operators: “equals,” “not equal to,” “includes,” and “excludes.” Bucket fields are considered to be of the String type.

#### Syntax

`public String getName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
