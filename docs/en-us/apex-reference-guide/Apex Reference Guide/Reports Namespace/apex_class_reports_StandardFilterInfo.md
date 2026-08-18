---
doc_id: "apex_class_reports_StandardFilterInfo"
---

# StandardFilterInfo Class

Is an abstract base class for an object that provides standard filter information.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## See Also

- [StandardFilterInfo Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfo.htm#apex_reports_StandardFilterInfo_methods)

## StandardFilterInfo Methods

The following are methods for `StandardFilterInfo`.

## See Also

- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfo.htm#apex_reports_StandardFilterInfo_getLabel)
- [getType()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfo.htm#apex_reports_StandardFilterInfo_getType)

### getLabel()

Returns the display label of the standard filter.

#### Signature

`public String getLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getType()

Returns the type of standard filter.

#### Signature

`public Reports.StandardFilterType getType()`

#### Return Value

Type: [Reports.StandardFilterType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_StandardFilterType.htm#apex_enum_reports_StandardFilterType "The StandardFilterType enum describes the type of standard filters in a report. The getType() method returns a Reports.StandardFilterType enum value.")
