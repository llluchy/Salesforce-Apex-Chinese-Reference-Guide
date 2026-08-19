---
doc_id: "apex_connector_filters"
---

# Filters in the Apex Connector Framework

The `DataSource.QueryContext` contains one `DataSource.TableSelection`. The `DataSource.SearchContext` can have more than one `TableSelection`. Each `TableSelection` has a `filter` property that represents the `WHERE` clause in a SOQL or SOSL query.

For example, when a user goes to an external object’s record detail page, your `DataSource.Connection` is executed. Behind the scenes, we generate a SOQL query similar to the following.

```plain
SELECT columnNames 
FROM externalObjectApiName 
WHERE ExternalId = 'selectedExternalObjectExternalId'
```

This SOQL query causes the `query` method on your `DataSource.Connection` class to be invoked. The following code can detect this condition.

```apex
if (context.tableSelection.filter != null) {
    if (context.tableSelection.filter.type == DataSource.FilterType.EQUALS 
        && 'ExternalId' ==  context.tableSelection.filter.columnName 
        && context.tableSelection.filter.columnValue instanceOf String) {
        String selection = (String)context.tableSelection.filter.columnValue;
        return DataSource.TableResult.get(true, null, 
                tableSelection.tableSelected, findSingleResult(selection));
    }
}
```

This code example assumes that you implemented a `findSingleResult` method that returns a single record, given the selected `ExternalId`. Make sure that your code obtains the record that matches the requested `ExternalId`.

## See Also

- [Evaluating Filters in the Apex Connector Framework](atlas.en-us.apexcode.meta/apexcode/apex_connector_filters_evaluating.htm)
- [Compound Filters in the Apex Connector Framework](atlas.en-us.apexcode.meta/apexcode/apex_connector_filters_compound.htm)
