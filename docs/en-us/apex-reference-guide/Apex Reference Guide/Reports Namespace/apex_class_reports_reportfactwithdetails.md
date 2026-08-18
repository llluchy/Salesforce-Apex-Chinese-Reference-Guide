---
doc_id: "apex_class_reports_reportfactwithdetails"
---

# ReportFactWithDetails Class

Contains the detailed fact map for the report, which represents the report’s data values.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## Usage

The `ReportFactWithDetails` class extends the `ReportFact` class. A `ReportFactWithDetails` object is returned if includeDetails is set to `true` when the report is run. To access the detail values, you’ll need to cast the return value of the `ReportResults.getFactMap` method to a `ReportFactWithDetails` object.

## ReportFactWithDetails Methods

The following are methods for `ReportFactWithDetails`. All are instance methods.

## See Also

- [getAggregates()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithdetails.htm#apex_Reports_ReportFactWithDetails_getAggregates)
- [getKey()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithdetails.htm#apex_Reports_ReportFactWithDetails_getKey)
- [getRows()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithdetails.htm#apex_Reports_ReportFactWithDetails_getRows)

### getAggregates()

Returns summary-level data for a report, including the record count.

#### Syntax

`public LIST<Reports.SummaryValue> getAggregates()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.SummaryValue](atlas.en-us.apexref.meta/apexref/apex_class_reports_summaryvalue.htm#apex_class_reports_summaryvalue "Contains summary data for a cell of the report.")\>

### getKey()

Returns the unique identifier for a row or column grouping. This identifier can be used to index specific data values within each grouping.

#### Syntax

`public String getKey()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getRows()

Returns a list of detailed report data in the order of the detail columns that are provided by the report metadata.

#### Syntax

`public LIST<Reports.ReportDetailRow> getRows()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.ReportDetailRow](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdetailrow.htm#apex_class_reports_reportdetailrow "Contains data cells for a detail row of a report.")\>
