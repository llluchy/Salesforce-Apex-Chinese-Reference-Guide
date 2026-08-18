---
doc_id: "apex_class_reports_reportfactwithsummaries"
---

# ReportFactWithSummaries Class

Contains the fact map for the report, which represents the report’s data values, and includes summarized fields.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## Usage

The `ReportFactWithSummaries` class extends the `ReportFact` class. A `ReportFactWithSummaries` object is returned if includeDetails is set to `false` when the report is run.

## ReportFactWithSummaries Methods

The following are methods for `ReportFactWithSummaries`. All are instance methods.

## See Also

- [getAggregates()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithsummaries.htm#apex_Reports_ReportFactWithSummaries_getAggregates)
- [getKey()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithsummaries.htm#apex_Reports_ReportFactWithSummaries_getKey)
- [toString()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithsummaries.htm#apex_Reports_ReportFactWithSummaries_toString)

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

### toString()

Returns a string.

#### Signature

`public String toString()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
