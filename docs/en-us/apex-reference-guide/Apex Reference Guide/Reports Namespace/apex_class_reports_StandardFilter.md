---
doc_id: "apex_class_reports_StandardFilter"
---

# StandardFilter Class

Contains information about the standard filter defined in the report, such as the filter field API name and filter value.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## Usage

Use to get or set standard filters on a report. Standard filters vary by report type. For example, standard filters for reports on the Opportunity object are Show, Opportunity Status, and Probability.

## See Also

- [StandardFilter Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilter.htm#apex_reports_StandardFilter_methods)

## StandardFilter Methods

The following are methods for `StandardFilter`.

## See Also

- [getName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilter.htm#apex_reports_StandardFilter_getName)
- [getValue()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilter.htm#apex_reports_StandardFilter_getValue)
- [setName(name)](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilter.htm#apex_reports_StandardFilter_setName)
- [setValue(value)](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilter.htm#apex_reports_StandardFilter_setValue)

### getName()

Return the API name of the standard filter.

#### Signature

`public String getName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValue()

Returns the standard filter value.

#### Signature

`public String getValue()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### setName(name)

Sets the API name of the standard filter.

#### Signature

`public void setName(String name)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void

### setValue(value)

Sets the standard filter value.

#### Signature

`public void setValue(String value)`

#### Parameters

-   **value**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void
