---
doc_id: "apex_class_reports_SortColumn"
---

# SortColumn Class

Contains information about the sort column used in the report.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## See Also

- [SortColumn Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_SortColumn.htm#apex_reports_SortColumn_methods)

## SortColumn Methods

The following are methods for `SortColumn`.

## See Also

- [getSortColumn()](atlas.en-us.apexref.meta/apexref/apex_class_reports_SortColumn.htm#apex_reports_SortColumn_getSortColumn)
- [getSortOrder()](atlas.en-us.apexref.meta/apexref/apex_class_reports_SortColumn.htm#apex_reports_SortColumn_getSortOrder)
- [setSortColumn(sortColumn)](atlas.en-us.apexref.meta/apexref/apex_class_reports_SortColumn.htm#apex_reports_SortColumn_setSortColumn)
- [setSortOrder(SortOrder)](atlas.en-us.apexref.meta/apexref/apex_class_reports_SortColumn.htm#apex_reports_SortColumn_setSortOrder_2)

### getSortColumn()

Returns the column used to sort the records in the report.

#### Signature

`public String getSortColumn()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSortOrder()

Returns the the sort order— ascending or descending—for the sort column.

#### Signature

`public Reports.ColumnSortOrder getSortOrder()`

#### Return Value

Type: [Reports.ColumnSortOrder](atlas.en-us.apexref.meta/apexref/apex_enum_reports_columnsortorder.htm#apex_enum_reports_columnsortorder "The Reports.ColumnSortOrder enum describes the order that the grouping column uses to sort data.")

### setSortColumn(sortColumn)

Sets the column used to sort the records in the report.

#### Signature

`public void setSortColumn(String sortColumn)`

#### Parameters

-   **sortColumn**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void

### setSortOrder(SortOrder)

Sets the sort order— ascending or descending—for the sort column.

#### Signature

`public void setSortOrder(Reports.ColumnSortOrder sortOrder)`

#### Parameters

-   **sortOrder**:
    
    Type: [Reports.ColumnSortOrder](atlas.en-us.apexref.meta/apexref/apex_enum_reports_columnsortorder.htm#apex_enum_reports_columnsortorder "The Reports.ColumnSortOrder enum describes the order that the grouping column uses to sort data.")
    

#### Return Value

Type: void
