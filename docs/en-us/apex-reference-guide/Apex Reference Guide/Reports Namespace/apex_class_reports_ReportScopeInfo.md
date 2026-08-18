---
doc_id: "apex_class_reports_ReportScopeInfo"
---

# ReportScopeInfo Class

Contains information about possible scope values that you can choose. Scope values depend on the report type. For example, you can set the scope for opportunity reports to `All opportunities`, `My team’s opportunities`, or `My opportunities`.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## See Also

- [ReportScopeInfo Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportScopeInfo.htm#apex_reports_ReportScopeInfo_methods)

## ReportScopeInfo Methods

The following are methods for `ReportScopeInfo`.

## See Also

- [getDefaultValue()](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportScopeInfo.htm#apex_reports_ReportScopeInfo_getDefaultValue)
- [getValues()](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportScopeInfo.htm#apex_reports_ReportScopeInfo_getValues)

### getDefaultValue()

Returns the default scope of the data to display in the report.

#### Signature

`public String getDefaultValue()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValues()

Returns a list of scope values specified for the report.

#### Signature

`public List<Reports.ReportScopeValue> getValues()`

#### Return Value

Type: List<[Reports.ReportScopeValue](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportScopeValue.htm#apex_class_reports_ReportScopeValue "Contains information about a possible scope value. Scope values depend on the report type. For example, you can set the scope for opportunity reports to All opportunities, My team’s opportunities, or My opportunities.")\>
