---
doc_id: "apex_class_reports_StandardFilterInfoPicklist"
---

# StandardFilterInfoPicklist Class

Contains information about the standard filter picklist, such as the display name and type of the filter field, the default picklist value, and a list of all possible picklist values.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## See Also

- [StandardFilterInfoPicklist Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfoPicklist.htm#apex_reports_StandardFilterInfoPicklist_methods)

## StandardFilterInfoPicklist Methods

The following are methods for `StandardFilterInfoPicklist`.

## See Also

- [getDefaultValue()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfoPicklist.htm#apex_reports_StandardFilterInfoPicklist_getDefaultValue)
- [getFilterValues()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfoPicklist.htm#apex_reports_StandardFilterInfoPicklist_getFilterValues)
- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfoPicklist.htm#apex_reports_StandardFilterInfoPicklist_getLabel)
- [getType()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfoPicklist.htm#apex_reports_StandardFilterInfoPicklist_getType)

### getDefaultValue()

Returns the default value for the standard filter picklist.

#### Signature

`public String getDefaultValue()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getFilterValues()

Returns a list of standard filter picklist values.

#### Signature

`public List<Reports.FilterValue> getFilterValues()`

#### Return Value

Type: List<[Reports.FilterValue](atlas.en-us.apexref.meta/apexref/apex_class_reports_filtervalue.htm#apex_class_reports_filtervalue "Contains information about a filter value, such as the display name and API name.")\>

### getLabel()

Returns the display name of the standard filter picklist.

#### Signature

`public String getLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getType()

Returns the type of the standard filter picklist.

#### Signature

`public Reports.StandardFilterType getType()`

#### Return Value

Type: [Reports.StandardFilterType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_StandardFilterType.htm#apex_enum_reports_StandardFilterType "The StandardFilterType enum describes the type of standard filters in a report. The getType() method returns a Reports.StandardFilterType enum value.")
