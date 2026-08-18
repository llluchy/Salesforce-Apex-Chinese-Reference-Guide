---
doc_id: "apex_class_reports_reportmetadata"
---

# ReportMetadata Class

Contains report metadata for a tabular, summary, or matrix report.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## Usage

Report metadata gives information about the report as a whole, such as the report type, format, summary fields, row or column groupings, and filters that are saved to the report. You can use the `ReportMetadata` class to retrieve report metadata and to set metadata that can be used to filter a report.

## ReportMetadata Methods

The following are methods for `ReportMetadata`. All are instance methods.

## See Also

- [getAggregates()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_getAggregates)
- [getBuckets()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_getBuckets)
- [getCrossFilters()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_getCrossFilters)
- [getCurrencyCode()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_getCurrencyCode)
- [getCustomSummaryFormula()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_getCustomSummaryFomula)
- [getDescription()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_getDescription)
- [getDetailColumns()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_getDetailColumns)
- [getDeveloperName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_getDeveloperName)
- [getDivision()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_getDivision)
- [getGroupingsAcross()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_getGroupingsAcross)
- [getGroupingsDown()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_getGroupingsDown)
- [getHasDetailRows()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_getHasDetailRows)
- [getHasRecordCount()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_getHasRecordCount)
- [getHistoricalSnapshotDates()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_getHistoricalSnapshotDates)
- [getId()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_getId)
- [getName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_getName)
- [getReportBooleanFilter()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_getReportBooleanFilter)
- [getReportFilters()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_getReportFilters)
- [getReportFormat()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_getReportFormat)
- [getReportType()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_getReportType)
- [getScope()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_getScope)
- [getShowGrandTotal()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_getShowGrandTotal)
- [getShowSubtotals()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_getShowSubtotals)
- [getSortBy()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_getSortBy)
- [getStandardDateFilter()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_getStandardDateFilter)
- [getStandardFilters()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_getStandardFilters)
- [getTopRows()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_getTopRows)
- [setAggregates(aggregates)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setAggregates)
- [setBuckets(buckets)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_setBuckets)
- [setCrossFilters(crossFilters)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setCrossFilters)
- [setCurrencyCode(currencyCode)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setCurrencyCode)
- [setCustomSummaryFormula(customSummaryFormula)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_setCustomSummaryFormula)
- [setDescription(description)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setDescription)
- [setDetailColumns(detailColumns)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setDetailColumns)
- [setDeveloperName(developerName)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setDeveloperName)
- [setDivision(division)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setDivision)
- [setGroupingsAcross(groupingInfo)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setGroupingsAcross)
- [setGroupingsDown(groupingInfo)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setGroupingsDown)
- [setHasDetailRows(hasDetailRows)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setHasDetailRows)
- [setHasRecordCount(hasRecordCount)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setHasRecordCount)
- [setHistoricalSnapshotDates(historicalSnapshot)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_setHistoricalSnapshotDates)
- [setId(id)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setId)
- [setName(name)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setName)
- [setReportBooleanFilter(reportBooleanFilter)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_setReportBooleanFilter)
- [setReportFilters(reportFilters)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_Reports_ReportMetadata_setReportFilters)
- [setReportFormat(format)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setReportFormat_2)
- [setReportType(reportType)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setReportType)
- [setScope(scopeName)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setScope)
- [setShowGrandTotal(showGrandTotal)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setShowGrandTotal)
- [setShowSubtotals(showSubtotals)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setShowSubtotals)
- [setSortBy(column)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setSortBy)
- [setStandardDateFilter(dateFilter)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setStandardDateFilter)
- [setStandardFilters(filters)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setStandardFilters)
- [setTopRows(topRows)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_reports_ReportMetadata_setTopRows)

### getAggregates()

Returns unique identifiers for summary or custom summary formula fields in the report.

#### Syntax

`public LIST<String> getAggregates()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

#### Usage

For example:

-   a!Amount represents the average for the Amount column.
-   s!Amount represents the sum of the Amount column.
-   m!Amount represents the minimum value of the Amount column.
-   x!Amount represents the maximum value of the Amount column.
-   s!<customfieldID> represents the sum of a custom field column. For custom fields and custom report types, the identifier is a combination of the summary type and the field ID.

### getBuckets()

Returns a list of bucket fields in the report.

#### Signature

`public List<Reports.BucketField> getBuckets()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.BucketField](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_class_reports_BucketField "Contains methods and constructors to work with information about a bucket field, including bucket type, name, and bucketed values.")\>

### getCrossFilters()

Returns information about cross filters applied to a report.

#### Signature

`public Reports.CrossFilter getCrossFilters()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.CrossFilter](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_class_reports_CrossFilter "Contains methods and constructors used to work with information about a cross filter.")\>

### getCurrencyCode()

Returns report currency, such as USD, EUR, or GBP, for an organization that has multicurrency enabled. The value is `null` if the organization does not have multicurrency enabled.

#### Syntax

`public String getCurrencyCode()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getCustomSummaryFormula()

Returns information about custom summary formulas in a report.

#### Signature

`public Map<String,Reports.ReportCsf> getCustomSummaryFormula()`

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[Reports.ReportCsf](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportCsf.htm#apex_class_reports_ReportCsf "Contains methods and constructors for working with information about a custom summary formula (CSF).")\>

### getDescription()

Returns the description of the report.

#### Signature

`public String getDescription()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getDetailColumns()

Returns unique API names (column names) for the fields that contain detailed data. For example, the method might return the following values: “OPPORTUNITY\_NAME, TYPE, LEAD\_SOURCE, AMOUNT.”

#### Syntax

`public LIST<String> getDetailColumns()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### getDeveloperName()

Returns the report API name. For example, the method might return the following value: “Closed\_Sales\_This\_Quarter.”

#### Syntax

`public String getDeveloperName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getDivision()

Returns the division specified in the report.

:::tip Note
Reports that use standard filters (such as My Cases or My Team’s Accounts) show
        records in all divisions. These reports can’t be further limited to a specific
        division.
:::

#### Signature

`public String getDivision()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getGroupingsAcross()

Returns column groupings in a report.

#### Syntax

`public LIST<Reports.GroupingInfo> getGroupingsAcross()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.GroupingInfo](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupinginfo.htm#apex_class_reports_groupinginfo "Contains methods for describing fields that are used for grouping.")\>

#### Usage

The identifier is:

-   An empty array for reports in summary format, because summary reports don't include column groupings
-   `BucketField_(ID)` for bucket fields
-   The ID of a custom field when the custom field is used for a column grouping

### getGroupingsDown()

Returns row groupings for a report.

#### Syntax

`public LIST<Reports.GroupingInfo> getGroupingsDown()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.GroupingInfo](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupinginfo.htm#apex_class_reports_groupinginfo "Contains methods for describing fields that are used for grouping.")\>

#### Usage

The identifier is:

-   `BucketField_(ID)` for bucket fields
-   The ID of a custom field when the custom field is used for grouping

### getHasDetailRows()

Indicates whether the report has detail rows.

#### Signature

`public Boolean getHasDetailRows()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getHasRecordCount()

Indicates whether the report shows the total number of records.

#### Signature

`public Boolean getHasRecordCount()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getHistoricalSnapshotDates()

Returns a list of historical snapshot dates.

#### Syntax

`public LIST<String> getHistoricalSnapshotDates()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### getId()

Returns the unique report ID.

#### Syntax

`public Id getId()`

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getName()

Returns the report name.

#### Syntax

`public String getName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getReportBooleanFilter()

Returns logic to parse custom field filters. The value is `null` when filter logic is not specified.

#### Syntax

`public String getReportBooleanFilter()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getReportFilters()

Returns a list of each custom filter in the report along with the field name, filter operator, and filter value.

#### Syntax

`public LIST<Reports.ReportFilter> getReportFilters()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.ReportFilter](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_class_reports_reportfilter "Contains information about a report filter, including column, operator, and value.")\>

### getReportFormat()

Returns the format of the report.

#### Syntax

`public Reports.ReportFormat getReportFormat()`

#### Return Value

Type: [Reports.ReportFormat](atlas.en-us.apexref.meta/apexref/apex_enum_reports_reportformat.htm "Contains the possible report format types.")

#### Usage

This value can be:

-   `TABULAR`
-   `SUMMARY`
-   `MATRIX`

### getReportType()

Returns the unique API name and display name for the report type.

#### Syntax

`public Reports.ReportType getReportType()`

#### Return Value

Type: [Reports.ReportType](atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttype.htm#apex_class_reports_reporttype "Contains the unique API name and display name for the report type.")

### getScope()

Returns the API name for the scope defined for the report. Scope values depend on the report type.

#### Signature

`public String getScope()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getShowGrandTotal()

Indicates whether the report shows the grand total.

#### Signature

`public Boolean getShowGrandTotal()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getShowSubtotals()

Indicates whether the report shows subtotals, such as column or row totals.

#### Signature

`public Boolean getShowSubtotals()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getSortBy()

Returns the list of columns on which the report is sorted. Currently, you can sort on only one column.

#### Signature

`public List<Reports.SortColumn> getSortBy()`

#### Return Value

Type: List<[Reports.SortColumn](atlas.en-us.apexref.meta/apexref/apex_class_reports_SortColumn.htm#apex_class_reports_SortColumn "Contains information about the sort column used in the report.")\>

### getStandardDateFilter()

Returns information about the standard date filter for the report, such as the start date, end date, date range, and date field API name.

#### Signature

`public Reports.StandardDateFilter getStandardDateFilter()`

#### Return Value

Type: [Reports.StandardDateFilter](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilter.htm#apex_class_reports_StandardDateFilter "Contains information about standard date filter available in the report—for example, the API name, start date, and end date of the standard date filter duration as well as the API name of the date field on which the filter is placed.")

### getStandardFilters()

Returns a list of standard filters for the report.

#### Signature

`public List<Reports.StandardFilter> getStandardFilters()`

#### Return Value

Type: List<[Reports.StandardFilter](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilter.htm#apex_class_reports_StandardFilter "Contains information about the standard filter defined in the report, such as the filter field API name and filter value.")\>

### getTopRows()

Returns information about a row limit filter, including the number of rows returned and the sort order.

#### Signature

`public Reports.TopRows getTopRows()`

#### Return Value

Type: [Reports.TopRows](atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm#apex_class_reports_TopRows "Contains methods and constructors for working with information about a row limit filter.")

### setAggregates(aggregates)

Sets unique identifiers for standard or custom summary formula fields in the report.

#### Signature

`public void setAggregates(List<String> aggregates)`

#### Parameters

-   **aggregates**:
    
    Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>
    

#### Return Value

Type: void

### setBuckets(buckets)

Creates bucket fields in a report.

#### Signature

`public void setBuckets(List<Reports.BucketField> buckets)`

#### Parameters

-   **buckets**:
    
    Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.BucketField](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_class_reports_BucketField "Contains methods and constructors to work with information about a bucket field, including bucket type, name, and bucketed values.")\>
    

#### Return Value

Type: void

### setCrossFilters(crossFilters)

Applies cross filters to a report.

#### Signature

`public void setCrossFilters(List<Reports.CrossFilter> crossFilters)`

#### Parameters

-   **crossFilter**:
    
    Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.CrossFilter](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_class_reports_CrossFilter "Contains methods and constructors used to work with information about a cross filter.")\>
    

#### Return Value

Type: void

### setCurrencyCode(currencyCode)

Sets the currency, such as USD, EUR, or GBP, for report summary fields in an organization that has multicurrency enabled.

#### Signature

`public void setCurrencyCode(String currencyCode)`

#### Parameters

-   **currencyCode**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void

### setCustomSummaryFormula(customSummaryFormula)

Adds a custom summary formula to a report.

#### Signature

`public void setCustomSummaryFormula(MAP<String,Reports.ReportCsf> customSummaryFormula)`

#### Parameters

-   **customSummaryFormula**:
    
    Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [Reports.ReportCsf](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportCsf.htm#apex_class_reports_ReportCsf "Contains methods and constructors for working with information about a custom summary formula (CSF).")\>
    

#### Return Value

Type: void

### setDescription(description)

Sets the description of the report.

#### Signature

`public void setDescription(String description)`

#### Parameters

-   **description**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void

### setDetailColumns(detailColumns)

Sets the unique API names for the fields that contain detailed data—for example, `OPPORTUNITY_NAME`, `TYPE`, `LEAD_SOURCE`, or `AMOUNT`.

#### Signature

`public void setDetailColumns(List<String> detailColumns)`

#### Parameters

-   **detailColumns**:
    
    Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>
    

#### Return Value

Type: void

### setDeveloperName(developerName)

Sets the report API name—for example, `Closed_Sales_This_Quarter`.

#### Signature

`public void setDeveloperName(String developerName)`

#### Parameters

-   **developerName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void

### setDivision(division)

Sets the division of the report.

:::tip Note
Reports that use standard filters (such as My Cases or My Team’s Accounts) show
        records in all divisions. These reports can’t be further limited to a specific
        division.
:::

#### Signature

`public void setDivision(String division)`

#### Parameters

-   **division**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void

### setGroupingsAcross(groupingInfo)

Sets column groupings in a report.

#### Signature

`public void setGroupingsAcross(List<Reports.GroupingInfo> groupingInfo)`

#### Parameters

-   **groupingInfo**:
    
    Type: List<[Reports.GroupingInfo](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupinginfo.htm#apex_class_reports_groupinginfo "Contains methods for describing fields that are used for grouping.")\>
    

#### Return Value

Type: void

### setGroupingsDown(groupingInfo)

Sets row groupings for a report.

#### Signature

`public void setGroupingsDown(List<Reports.GroupingInfo> groupingInfo)`

#### Parameters

-   **groupingInfo**:
    
    Type: List<[Reports.GroupingInfo](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupinginfo.htm#apex_class_reports_groupinginfo "Contains methods for describing fields that are used for grouping.")\>
    

#### Return Value

Type: void

### setHasDetailRows(hasDetailRows)

Specifies whether the report has detail rows.

#### Signature

`public void setHasDetailRows(Boolean hasDetailRows)`

#### Parameters

-   **hasDetailRows**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    

#### Return Value

Type: void

### setHasRecordCount(hasRecordCount)

Specifies whether the report is configured to show the total number of records.

#### Signature

`public void setHasRecordCount(Boolean hasRecordCount)`

#### Parameters

-   **hasRecordCount**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    

#### Return Value

Type: void

### setHistoricalSnapshotDates(historicalSnapshot)

Sets a list of historical snapshot dates.

#### Syntax

`public Void setHistoricalSnapshotDates(LIST<String> historicalSnapshot)`

#### Parameters

-   **historicalSnapshot**:
    
    Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>
    

#### Return Value

Type: Void

### setId(id)

Sets the unique report ID.

#### Signature

`public void setId(Id id)`

#### Parameters

-   **id**:
    
    Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")
    

#### Return Value

Type: void

### setName(name)

Sets the report name.

#### Signature

`public void setName(String name)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void

### setReportBooleanFilter(reportBooleanFilter)

Sets logic to parse custom field filters.

#### Syntax

`public Void setReportBooleanFilter(String reportBooleanFilter)`

#### Parameters

-   **reportBooleanFilter**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

### setReportFilters(reportFilters)

Sets a list of each custom filter in the report along with the field name, filter operator, and filter value.

#### Syntax

`public Void setReportFilters(LIST<Reports.ReportFilter> reportFilters)`

#### Parameters

-   **reportFilters**:
    
    Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.ReportFilter](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_class_reports_reportfilter "Contains information about a report filter, including column, operator, and value.")\>
    

#### Return Value

Type: Void

### setReportFormat(format)

Sets the format of the report.

#### Signature

`public void setReportFormat(Reports.ReportFormat format)`

#### Parameters

-   **format**:
    
    Type: [Reports.ReportFormat](atlas.en-us.apexref.meta/apexref/apex_enum_reports_reportformat.htm#apex_enum_reports_reportformat "Contains the possible report format types.")
    

#### Return Value

Type: void

### setReportType(reportType)

Sets the unique API name and display name for the report type.

#### Signature

`public void setReportType(Reports.ReportType reportType)`

#### Parameters

-   **reportType**:
    
    Type: [Reports.ReportType](atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttype.htm#apex_class_reports_reporttype "Contains the unique API name and display name for the report type.")
    

#### Return Value

Type: void

### setScope(scopeName)

Sets the API name for the scope defined for the report. Scope values depend on the report type.

#### Signature

`public void setScope(String scopeName)`

#### Parameters

-   **scopeName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void

### setShowGrandTotal(showGrandTotal)

Specifies whether the report shows the grand total.

#### Signature

`public void setShowGrandTotal(Boolean showGrandTotal)`

#### Parameters

-   **showGrandTotal**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    

#### Return Value

Type: void

### setShowSubtotals(showSubtotals)

Specifies whether the report shows subtotals, such as column or row totals.

#### Signature

`public void setShowSubtotals(Boolean showSubtotals)`

#### Parameters

-   **showSubtotals**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    

#### Return Value

Type: void

### setSortBy(column)

Sets the list of columns on which the report is sorted. Currently, you can only sort on one column.

#### Signature

`public void setSortBy(List<Reports.SortColumn> column)`

#### Parameters

-   **column**:
    
    Type: List<[Reports.SortColumn](atlas.en-us.apexref.meta/apexref/apex_class_reports_SortColumn.htm#apex_class_reports_SortColumn "Contains information about the sort column used in the report.")\>
    

#### Return Value

Type: void

### setStandardDateFilter(dateFilter)

Sets the standard date filter—which includes the start date, end date, date range, and date field API name—for the report.

#### Signature

`public void setStandardDateFilter(Reports.StandardDateFilter dateFilter)`

#### Parameters

-   **dateFilter**:
    
    Type: [Reports.StandardDateFilter](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilter.htm#apex_class_reports_StandardDateFilter "Contains information about standard date filter available in the report—for example, the API name, start date, and end date of the standard date filter duration as well as the API name of the date field on which the filter is placed.")
    

#### Return Value

Type: void

### setStandardFilters(filters)

Sets one or more standard filters on the report.

#### Signature

`public void setStandardFilters(List<Reports.StandardFilter> filters)`

#### Parameters

-   **filters**:
    
    Type: List<[Reports.StandardFilter](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilter.htm#apex_class_reports_StandardFilter "Contains information about the standard filter defined in the report, such as the filter field API name and filter value.")\>
    

#### Return Value

Type: void

### setTopRows(topRows)

Applies a row limit filter to a report.

#### Signature

`public Reports.TopRows setTopRows(Reports.TopRows topRows)`

#### Parameters

-   **topRows**:
    
    Type: [Reports.TopRows](atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm#apex_class_reports_TopRows "Contains methods and constructors for working with information about a row limit filter.")
    

#### Return Value

Type: void
