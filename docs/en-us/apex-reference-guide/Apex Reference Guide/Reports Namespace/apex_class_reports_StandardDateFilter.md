---
doc_id: "apex_class_reports_StandardDateFilter"
---

# StandardDateFilter Class

Contains information about standard date filter available in the report—for example, the API name, start date, and end date of the standard date filter duration as well as the API name of the date field on which the filter is placed.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## See Also

- [StandardDateFilter Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilter.htm#apex_reports_StandardDateFilter_methods)

## StandardDateFilter Methods

The following are methods for `StandardDateFilter`.

## See Also

- [getColumn()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilter.htm#apex_reports_StandardDateFilter_getColumn)
- [getDurationValue()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilter.htm#apex_reports_StandardDateFilter_getDurationValue)
- [getEndDate()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilter.htm#apex_reports_StandardDateFilter_getEndDate)
- [getStartDate()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilter.htm#apex_reports_StandardDateFilter_getStartDate)
- [setColumn(standardDateFilterColumnName)](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilter.htm#apex_reports_StandardDateFilter_setColumn)
- [setDurationValue(durationName)](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilter.htm#apex_reports_StandardDateFilter_setDurationValue)
- [setEndDate(endDate)](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilter.htm#apex_reports_StandardDateFilter_setEndDate)
- [setStartDate(startDate)](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilter.htm#apex_reports_StandardDateFilter_setStartDate)

### getColumn()

Returns the API name of the standard date filter column.

#### Signature

`public String getColumn()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getDurationValue()

Returns duration information about a standard date filter, such as start date, end date, and display name and API name of the date filter.

#### Signature

`public String getDurationValue()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getEndDate()

Returns the end date of the standard date filter.

#### Signature

`public String getEndDate()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getStartDate()

Returns the start date for the standard date filter.

#### Signature

`public String getStartDate()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### setColumn(standardDateFilterColumnName)

Sets the API name of the standard date filter column.

#### Signature

`public void setColumn(String standardDateFilterColumnName)`

#### Parameters

-   **standardDateFilterColumnName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void

### setDurationValue(durationName)

Sets the API name of the standard date filter.

#### Signature

`public void setDurationValue(String durationName)`

#### Parameters

-   **durationName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void

### setEndDate(endDate)

Sets the end date for the standard date filter.

#### Signature

`public void setEndDate(String endDate)`

#### Parameters

-   **endDate**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void

### setStartDate(startDate)

Sets the start date for the standard date filter.

#### Signature

`public void setStartDate(String startDate)`

#### Parameters

-   **startDate**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void
