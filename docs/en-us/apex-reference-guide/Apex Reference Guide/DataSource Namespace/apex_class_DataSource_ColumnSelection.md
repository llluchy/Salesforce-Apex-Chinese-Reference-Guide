---
doc_id: "apex_class_DataSource_ColumnSelection"
---

# ColumnSelection Class

Identifies the list of columns to return during a query or search.

## Namespace

[DataSource Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

## Usage

This class is associated with the `SELECT` clause for a SOQL query, or the `RETURNING` clause for a SOSL query.

## See Also

- [ColumnSelection Properties](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ColumnSelection.htm#apex_DataSource_ColumnSelection_properties)

## ColumnSelection Properties

The following are properties for `ColumnSelection`.

## See Also

- [aggregation](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ColumnSelection.htm#apex_DataSource_ColumnSelection_aggregation)
- [columnName](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ColumnSelection.htm#apex_DataSource_ColumnSelection_columnName)
- [tableName](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ColumnSelection.htm#apex_DataSource_ColumnSelection_tableName)

### aggregation

How to aggregate the column’s data.

#### Signature

`public DataSource.QueryAggregation aggregation {get; set;}`

#### Property Value

Type: [DataSource.QueryAggregation](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_QueryAggregation.htm "Specifies how to aggregate a column in a query.")

### columnName

Name of the selected column.

#### Signature

`public String columnName {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### tableName

Name of the column’s table.

#### Signature

`public String tableName {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
