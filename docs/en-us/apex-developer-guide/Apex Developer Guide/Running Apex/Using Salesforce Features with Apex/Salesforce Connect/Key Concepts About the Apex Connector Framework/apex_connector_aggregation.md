---
doc_id: "apex_connector_aggregation"
---

# Aggregation for Salesforce Connect Custom Adapters

If you receive a `COUNT()` query, the selected column has the value `QueryAggregation.COUNT` in its `aggregation` property. The selected column is provided in the `columnsSelected` property on the `tableSelection` for the `DataSource.QueryContext`.

The following example illustrates how to apply the value of the `aggregation` property to handle `COUNT()` queries.

```apex
// Handle COUNT() queries
if (context.tableSelection.columnsSelected.size() == 1 &&      
    context.tableSelection.columnsSelected.get(0).aggregation == 
        QueryAggregation.COUNT) {
    ListString, Object>> countResponse = new ListString, Object>>();
    MapString, Object> countRow = new MapString, Object>();
    countRow.put(context.tableSelection.columnsSelected.get(0).columnName, 
    response.size());
    countResponse.add(countRow);
    return countResponse;
}
```

An aggregate query can still have filters, so your query method can be implemented like the following example to support basic `aggregation` queries, with or without filters.

```apex
override global DataSource.TableResult query(DataSource.QueryContext context) {
    ListString,Object>> rows = retrieveData(context);
    ListString,Object>> response = postFilterRecords(
            context.tableSelection.filter, rows);
    if (context.tableSelection.columnsSelected.size() == 1 &&        
        context.tableSelection.columnsSelected.get(0).aggregation ==   
                DataSource.QueryAggregation.COUNT) {
        ListString, Object>> countResponse = new ListString, 
                Object>>();
        MapString, Object> countRow = new MapString, Object>();
        countRow.put(context.tableSelection.columnsSelected.get(0).columnName, 
                response.size());
        countResponse.add(countRow);
        return DataSource.TableResult.get(context, countResponse);
    }
    return DataSource.TableResult.get(context, response);
}
```

## See Also

- [Apex Reference Guide: QueryContext Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm)

-   [Create a Sample DataSource.Connection Class](atlas.en-us.apexcode.meta/apexcode/apex_connector_start_connection_class.htm "First, create a DataSource.Connection class to enable Salesforce to obtain the external system’s schema and to handle queries and searches of the external data.")
