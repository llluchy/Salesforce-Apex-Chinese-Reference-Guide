---
doc_id: "apex_class_reports_reportresults"
---

# ReportResults Class

Contains the results of running a report.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## ReportResults Methods

The following are methods for `ReportResults`. All are instance methods.

## See Also

- [getAllData()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportresults.htm#apex_Reports_ReportResults_getAllData)
- [getFactMap()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportresults.htm#apex_Reports_ReportResults_getFactMap)
- [getGroupingsAcross()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportresults.htm#apex_Reports_ReportResults_getGroupingsAcross)
- [getGroupingsDown()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportresults.htm#apex_Reports_ReportResults_getGroupingsDown)
- [getHasDetailRows()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportresults.htm#apex_Reports_ReportResults_getHasDetailRows)
- [getReportExtendedMetadata()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportresults.htm#apex_Reports_ReportResults_getReportExtendedMetadata)
- [getReportMetadata()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportresults.htm#apex_Reports_ReportResults_getReportMetadata)

### getAllData()

Returns all report data.

#### Syntax

`public Boolean getAllData()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

When `true`, indicates that all report results are returned.

When `false`, indicates that results are returned for the same number of rows as in a report run in Salesforce.

:::tip Note
For reports that contain too many records, use filters
to refine results.
:::

### getFactMap()

Returns summary-level data or summary and detailed data for each row or column grouping. Detailed data is available if the `includeDetails` parameter is set to `true` when the report is run.

#### Syntax

`public MAP<String,Reports.ReportFact> getFactMap()`

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[Reports.ReportFact](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfact.htm#apex_class_reports_reportfact "Contains the fact map for the report, which represents the report’s data values.")\>

### getGroupingsAcross()

Returns a collection of column groupings, keys, and values.

#### Syntax

`public Reports.Dimension getGroupingsAcross()`

#### Return Value

Type: [Reports.Dimension](atlas.en-us.apexref.meta/apexref/apex_class_reports_dimension.htm#apex_class_reports_dimension "Contains information for each row or column grouping.")

### getGroupingsDown()

Returns a collection of row groupings, keys, and values.

#### Syntax

`public Reports.Dimension getGroupingsDown()`

#### Return Value

Type: [Reports.Dimension](atlas.en-us.apexref.meta/apexref/apex_class_reports_dimension.htm#apex_class_reports_dimension "Contains information for each row or column grouping.")

### getHasDetailRows()

Returns information about whether the fact map has detail rows.

#### Syntax

`public Boolean getHasDetailRows()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

-   When `true`, indicates that the fact map returns values for summary-level and record-level data.
-   When `false`, indicates that the fact map returns summary values.

### getReportExtendedMetadata()

Returns additional, detailed metadata about the report, including data type and label information for groupings and summaries.

#### Syntax

`public Reports.ReportExtendedMetadata getReportExtendedMetadata()`

#### Return Value

Type: [Reports.ReportExtendedMetadata](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportextendedmetadata.htm#apex_class_reports_reportextendedmetadata "Contains report extended metadata for a tabular, summary, or matrix report.")

### getReportMetadata()

Returns metadata about the report, including grouping and summary information.

#### Syntax

`public Reports.ReportMetadata getReportMetadata()`

#### Return Value

Type: [Reports.ReportMetadata](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_class_reports_reportmetadata "Contains report metadata for a tabular, summary, or matrix report.")
