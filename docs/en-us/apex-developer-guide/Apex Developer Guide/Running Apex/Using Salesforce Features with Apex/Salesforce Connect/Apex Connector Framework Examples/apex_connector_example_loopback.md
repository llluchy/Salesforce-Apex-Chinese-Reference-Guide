---
doc_id: "apex_connector_example_loopback"
---

# Loopback Custom Adapter for Salesforce Connect

This example illustrates how to handle filtering in queries. For simplicity, this example connects the Salesforce org to itself as the external system.

## LoopbackDataSourceConnection Class

```apex
/**
 *   Extends the DataSource.Connection class to enable 
 *   Salesforce to sync the external systemâ€™s schema 
 *   and to handle queries and searches of the external data. 
 **/
global class LoopbackDataSourceConnection 
    extends DataSource.Connection {

    /**
     *   Constructors.
     **/
    global LoopbackDataSourceConnection(
        DataSource.ConnectionParams connectionParams) {
    }
    global LoopbackDataSourceConnection() {}
    
    /**
     *   Called when an external object needs to get a list of 
     *   schema from the external data source, for example when 
     *   the administrator clicks â€œValidate and Syncâ€ in the 
     *   user interface for the external data source.   
     **/
    override global List sync() {
        List tables = 
            new List();        
        List columns;
        columns = new List();
        columns.add(DataSource.Column.text('ExternalId', 255));
        columns.add(DataSource.Column.url('DisplayUrl'));
        columns.add(DataSource.Column.text('Name', 255));
        columns.add(
            DataSource.Column.number('NumberOfEmployees', 18, 0));
        tables.add(
            DataSource.Table.get('Looper', 'Name', columns));
        return tables;
    }
    
    /**
     *   Called to query and get results from the external 
     *   system for SOQL queries, list views, and detail pages 
     *   for an external object thatâ€™s associated with the 
     *   external data source.
     *   
     *   The QueryContext argument represents the query to run 
     *   against a table in the external system.
     *   
     *   Returns a list of rows as the query results.
     **/
    override global DataSource.TableResult 
        query(DataSource.QueryContext context) {
        if (context.tableSelection.columnsSelected.size() == 1 &&
            context.tableSelection.columnsSelected.get(0).aggregation ==
                DataSource.QueryAggregation.COUNT) {
            integer count = execCount(getCountQuery(context));
            ListString, Object>> countResponse =
                new ListString, Object>>();
            MapString, Object> countRow =
                new MapString, Object>();
            countRow.put(
                context.tableSelection.columnsSelected.get(0).columnName,
                count);
            countResponse.add(countRow);
            return DataSource.TableResult.get(context,countResponse);
        } else {
            ListString,Object>> rows = execQuery(
                getSoqlQuery(context));
            return DataSource.TableResult.get(context,rows);
        }
    }
    
    /**
     *   Called to do a full text search and get results from
     *   the external system for SOSL queries and Salesforce
     *   global searches.
     *   
     *   The SearchContext argument represents the query to run 
     *   against a table in the external system.
     *   
     *   Returns results for each table that the SearchContext 
     *   requested to be searched.
     **/
    override global List 
        search(DataSource.SearchContext context) {        
        return DataSource.SearchUtils.searchByName(context, this);
    }

    /**
     *   Helper method to execute the SOQL query and 
     *   return the results.
     **/
    private ListString,Object>> 
        execQuery(String soqlQuery) {
        List objs = Database.query(soqlQuery);
        ListString,Object>> rows = 
            new ListString,Object>>();
        for (Account obj : objs) {
            MapString,Object> row = new MapString,Object>();
            row.put('Name', obj.Name);
            row.put('NumberOfEmployees', obj.NumberOfEmployees);
            row.put('ExternalId', obj.Id);
            row.put('DisplayUrl', 
                URL.getOrgDomainUrl().toExternalForm() + 
                    obj.Id);
            rows.add(row);
        }
        return rows;
    }

    /**
     *   Helper method to get aggregate count.
     **/
    private integer execCount(String soqlQuery) {
        integer count = Database.countQuery(soqlQuery);
        return count;
    }

    /**
     *   Helper method to create default aggregate query.
     **/
    private String getCountQuery(DataSource.QueryContext context) {
        String baseQuery = 'SELECT COUNT() FROM Account';
        String filter = getSoqlFilter('', 
            context.tableSelection.filter);
        if (filter.length() > 0)
            return baseQuery + ' WHERE ' + filter;
        return baseQuery;
    }

    /**
     *   Helper method to create default query.
     **/
    private String getSoqlQuery(DataSource.QueryContext context) {
        String baseQuery = 
            'SELECT Id,Name,NumberOfEmployees FROM Account';
        String filter = getSoqlFilter('', 
            context.tableSelection.filter);
        if (filter.length() > 0)
            return baseQuery + ' WHERE ' + filter;
        return baseQuery;
    }

    /**
     *   Helper method to handle query filter.
     **/
    private String getSoqlFilter(String query, 
        DataSource.Filter filter) {
        if (filter == null) {
            return query;
        }
        String append;
        DataSource.FilterType type = filter.type;
        ListString,Object>> retainedRows = 
            new ListString,Object>>();
        if (type == DataSource.FilterType.NOT_) {
            DataSource.Filter subfilter = filter.subfilters.get(0);
            append = getSoqlFilter('NOT', subfilter);
        } else if (type == DataSource.FilterType.AND_) {
            append =  
                getSoqlFilterCompound('AND', filter.subfilters);
        } else if (type == DataSource.FilterType.OR_) {
            append = 
                getSoqlFilterCompound('OR', filter.subfilters);
        } else {
            append = getSoqlFilterExpression(filter);
        }
        return query + ' ' + append;
    }
    
    /**
     *   Helper method to handle query subfilters.
     **/
    private String getSoqlFilterCompound(String operator, 
        List subfilters) {
        String expression = ' (';
        boolean first = true;
        for (DataSource.Filter subfilter : subfilters) {
            if (first)
                first = false;
            else
                expression += ' ' + operator + ' ';
            expression += getSoqlFilter('', subfilter);
        }
        expression += ') ';
        return expression;
    }
    
    /**
     *   Helper method to handle query filter expressions.
     **/
    private String getSoqlFilterExpression(
        DataSource.Filter filter) {
        String columnName = filter.columnName;
        String operator;
        Object expectedValue = filter.columnValue;
        if (filter.type == DataSource.FilterType.EQUALS) {
            operator = '=';
        } else if (filter.type == 
            DataSource.FilterType.NOT_EQUALS) {
            operator = '<>';
        } else if (filter.type == 
            DataSource.FilterType.LESS_THAN) {
            operator = ';
        } else if (filter.type == 
            DataSource.FilterType.GREATER_THAN) {
            operator = '>';
        } else if (filter.type == 
            DataSource.FilterType.LESS_THAN_OR_EQUAL_TO) {
            operator = ';
        } else if (filter.type == 
            DataSource.FilterType.GREATER_THAN_OR_EQUAL_TO) {
            operator = '>=';
        } else if (filter.type == 
            DataSource.FilterType.STARTS_WITH) {
            return mapColumnName(columnName) + 
            ' LIKE \'' + String.valueOf(expectedValue) + '%\'';
        } else if (filter.type == 
            DataSource.FilterType.ENDS_WITH) {
            return mapColumnName(columnName) + 
            ' LIKE \'%' + String.valueOf(expectedValue) + '\'';
        } else if (filter.type == 
            DataSource.FilterType.LIKE_) {
            return mapColumnName(columnName) + 
            ' LIKE \'' + String.valueOf(expectedValue) + '\'';
        } else {
            throwException(
            'Implementing other filter types is left as an exercise for the reader: ' 
            + filter.type);
        }
        return mapColumnName(columnName) + 
            ' ' + operator + ' ' + wrapValue(expectedValue);
    }
    
    /**
     *   Helper method to map column names.
     **/
    private String mapColumnName(String apexName) {
        if (apexName.equalsIgnoreCase('ExternalId'))
            return 'Id';
        if (apexName.equalsIgnoreCase('DisplayUrl'))
            return 'Id';
        return apexName;
    }

    /**
    *   Helper method to wrap expression Strings with quotes.
    **/
    private String wrapValue(Object foundValue) {
        if (foundValue instanceof String)
            return '\'' + String.valueOf(foundValue) + '\'';
        return String.valueOf(foundValue);
    }
}
```

## LoopbackDataSourceProvider Class

```apex
/**
 *   Extends the DataSource.Provider base class to create a 
 *   custom adapter for Salesforce Connect. The class informs 
 *   Salesforce of the functional and authentication 
 *   capabilities that are supported by or required to connect 
 *   to an external system.
 **/
global class LoopbackDataSourceProvider 
    extends DataSource.Provider {
    
    /**
     *   Declares the types of authentication that can be used 
     *   to access the external system.
     **/
    override global List 
        getAuthenticationCapabilities() {
        List capabilities = 
            new List();
        capabilities.add(
            DataSource.AuthenticationCapability.ANONYMOUS);
        capabilities.add(
            DataSource.AuthenticationCapability.BASIC);
        return capabilities;
    }

    /**
     *   Declares the functional capabilities that the 
     *   external system supports.
     **/
    override global List 
        getCapabilities() {
        List capabilities = 
            new List();
        capabilities.add(DataSource.Capability.ROW_QUERY);
        capabilities.add(DataSource.Capability.SEARCH);
        return capabilities;
    }

    /**
     *   Declares the associated DataSource.Connection class.
     **/
    override global DataSource.Connection 
        getConnection(DataSource.ConnectionParams connectionParams) {
        return new LoopbackDataSourceConnection();
    }
}
```
