---
doc_id: "apex_connector_example_google_books"
---

# Google Books™ Custom Adapter for Salesforce Connect

This example illustrates how to work around the requirements and limits of an external system’s APIs: in this case, the Google Books API Family.

To integrate with the Google Books™ service, we set up Salesforce Connect as follows.

-   The Google Books API allows a maximum of 40 returned results, so we develop our custom adapter to handle result sets with more than 40 rows.
-   The Google Books API can sort only by search relevance and publish dates, so we develop our custom adapter to disable sorting on columns.
-   To support OAuth, we set up our authentication settings in Salesforce so that the requested scope of permissions for access tokens includes https://www.googleapis.com/auth/books.
-   To allow Apex callouts, we define these remote sites in Salesforce:
    -   https://www.googleapis.com
    -   https://books.google.com

## BooksDataSourceConnection Class

```apex
/**
 *   Extends the DataSource.Connection class to enable
 *   Salesforce to sync the external system metadata
 *   schema and to handle queries and searches of the external
 *   data.
 **/
global class BooksDataSourceConnection extends
    DataSource.Connection {
 
    private DataSource.ConnectionParams connectionInfo;

    // Constructor for BooksDataSourceConnection.
    global BooksDataSourceConnection(DataSource.ConnectionParams
                                    connectionInfo) {
        this.connectionInfo = connectionInfo;
    }

    /**
     *   Called when an external object needs to get a list of 
     *   schema from the external data source, for example when 
     *   the administrator clicks “Validate and Sync” in the 
     *   user interface for the external data source.   
     **/
    override global List sync() {
        List tables =
            new List();
        List columns;
        columns = new List();
        columns.add(getColumn('title'));
        columns.add(getColumn('description'));
        columns.add(getColumn('publishedDate'));
        columns.add(getColumn('publisher'));
        columns.add(DataSource.Column.url('DisplayUrl'));
        columns.add(DataSource.Column.text('ExternalId', 255));
        tables.add(DataSource.Table.get('googleBooks', 'title',
                                        columns));
        return tables;
    }

    /**
     *   Google Books API v1 doesn't support sorting,
     *   so we create a column with sortable = false.
     **/
    private DataSource.Column getColumn(String columnName) {
        DataSource.Column column = DataSource.Column.text(columnName,
                                                        255);
        column.sortable = false;
        return column;
    }

    /**
     *   Called to query and get results from the external
     *   system for SOQL queries, list views, and detail pages
     *   for an external object that's associated with the
     *   external data source.
     *
     *   The QueryContext argument represents the query to run
     *   against a table in the external system.
     *
     *   Returns a list of rows as the query results.
     **/
    override global DataSource.TableResult query(
                    DataSource.QueryContext contexts) {
        DataSource.Filter filter = contexts.tableSelection.filter;
        String url;
        if (contexts.tableSelection.columnsSelected.size() == 1 &&
        contexts.tableSelection.columnsSelected.get(0).aggregation ==
            DataSource.QueryAggregation.COUNT) {
            return getCount(contexts);
        }

        if (filter != null) {
            String thisColumnName = filter.columnName;
            if (thisColumnName != null &&
                thisColumnName.equals('ExternalId')) {
                url = 'https://www.googleapis.com/books/v1/' +
                    'volumes?q=' + filter.columnValue +
                    '&maxResults=1&id=' + filter.columnValue;
                return DataSource.TableResult.get(true, null,
                            contexts.tableSelection.tableSelected,
                            getData(url));
            }
            else {
                url = 'https://www.googleapis.com/books/' +
                    'v1/volumes?q=' + filter.columnValue +
                    '&id=' + filter.columnValue +
                    '&maxResults=40' + '&startIndex=';
            }
        } else {
            url = 'https://www.googleapis.com/books/v1/' +
                'volumes?q=america&' + '&maxResults=40' +
                '&startIndex=';
        }
        /**
         *   Google Books API v1 supports maxResults of 40
         *   so we handle pagination explicitly in the else statement
         *   when we handle more than 40 records per query.
         **/
        if (contexts.maxResults return DataSource.TableResult.get(true, null,
                    contexts.tableSelection.tableSelected,
                    getData(url + contexts.offset));
        }
        else {
            return fetchData(contexts, url);
        }
     }

    /**
     *   Helper method to fetch results when maxResults is 
     *   greater than 40 (the max value for maxResults supported 
     *   by Google Books API v1).
     **/
    private DataSource.TableResult fetchData(
        DataSource.QueryContext contexts, String url) {
        Integer fetchSlot = (contexts.maxResults / 40) + 1;
        ListString, Object>> data =
            new ListString, Object>>();
        Integer startIndex = contexts.offset;
        for(Integer count = 0; count if(count == 0)
                contexts.offset = 41;
            else
                contexts.offset += 40;
        }
 
        return DataSource.TableResult.get(true, null,
                        contexts.tableSelection.tableSelected, data);
    }

    /**
     *   Helper method to execute count() query.
     **/
    private DataSource.TableResult getCount(
        DataSource.QueryContext contexts) {
        String url = 'https://www.googleapis.com/books/v1/' +
                    'volumes?q=america&projection=full';
        ListString,Object>> response =
            DataSource.QueryUtils.filter(contexts, getData(url));
        ListString, Object>> countResponse =
            new ListString, Object>>();
        MapString, Object> countRow =
            new MapString, Object>();
        countRow.put(
            contexts.tableSelection.columnsSelected.get(0).columnName,
            response.size());
        countResponse.add(countRow);
        return DataSource.TableResult.get(contexts, countResponse);
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
    override global List search(
        DataSource.SearchContext contexts) {
        List results =
            new List();

        for (Integer i =0; iString entity = contexts.tableSelections[i].tableSelected;
            String url = 'https://www.googleapis.com/books/v1' +
                        '/volumes?q=' + contexts.searchPhrase;
            results.add(DataSource.TableResult.get(true, null,
                                                entity,
                                                getData(url)));
        }

        return results;
    }

    /**
     *   Helper method to parse the data.
     *   Returns a list of rows from the external system.
     **/
    public ListString, Object>> getData(String url) {
        HttpResponse response = getResponse(url);
        String body = response.getBody();

        ListString, Object>> rows =
            new ListString, Object>>();

        MapString, Object> responseBodyMap =
            (MapString, Object>)JSON.deserializeUntyped(body);

    /**
     *   Checks errors.
     **/        
        MapString, Object> error =
            (MapString, Object>)responseBodyMap.get('error');
        if (error!=null) {
            ListObject> errorsList =
                (ListObject>)error.get('errors');
            MapString, Object> errors =
                (MapString, Object>)errorsList[0];
            String messages = (String)errors.get('message');
            throw new DataSource.OAuthTokenExpiredException(messages);
        }

        ListObject> sItems = (ListObject>)responseBodyMap.get('items');
        if (sItems != null) {
            for (Integer i=0; iString, Object> item =
                    (MapString, Object>)sItems[i];
                rows.add(createRow(item));
            }
        } else {
            rows.add(createRow(responseBodyMap));
        }
 
        return rows;
    }

    /**
     *   Helper method to populate a row based on source data.
     *
     *   The item argument maps to the data that
     *   represents a row.
     *
     *   Returns an updated map with the External ID and
     *   Display URL values.
     **/
    public MapString, Object> createRow(
        MapString, Object> item) {
        MapString, Object> row = new MapString, Object>();
        for ( String key : item.keySet() ){
            if (key == 'id') {
                row.put('ExternalId', item.get(key));
            } else if (key == 'volumeInfo') {
                MapString, Object> volumeInfoMap =
                    (MapString, Object>)item.get(key);
                row.put('title', volumeInfoMap.get('title'));
                row.put('description',
                        volumeInfoMap.get('description'));
                row.put('DisplayUrl',
                        volumeInfoMap.get('infoLink'));
                row.put('publishedDate',
                        volumeInfoMap.get('publishedDate'));
                row.put('publisher',
                        volumeInfoMap.get('publisher'));
            }
        }
        return row;
    }

    /**
     *   Helper method to make the HTTP GET call.
     *   The url argument is the URL of the external system.
     *   Returns the response from the external system.
     **/
    public HttpResponse getResponse(String url) {
        Http httpProtocol = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndPoint(url);
        request.setMethod('GET');
        request.setHeader('Authorization', 'Bearer '+
                        this.connectionInfo.oauthToken);
        HttpResponse response = httpProtocol.send(request);
        return response;
    }
}
```

## BooksDataSourceProvider Class

```apex
/**
 *   Extends the DataSource.Provider base class to create a
 *   custom adapter for Salesforce Connect. The class informs
 *   Salesforce of the functional and authentication
 *   capabilities that are supported by or required to connect
 *   to an external system.
 **/
global class BooksDataSourceProvider extends
    DataSource.Provider {
    /**
     *   Declares the types of authentication that can be used
     *   to access the external system.
     **/   
    override global List
        getAuthenticationCapabilities() {
        List capabilities =
            new List();
        capabilities.add(
            DataSource.AuthenticationCapability.OAUTH);
        capabilities.add(
            DataSource.AuthenticationCapability.ANONYMOUS);
        return capabilities;
    }

    /**
     *   Declares the functional capabilities that the
     *   external system supports.
     **/
    override global List
        getCapabilities() {
        List capabilities = new
            List();
        capabilities.add(DataSource.Capability.ROW_QUERY);
        capabilities.add(DataSource.Capability.SEARCH);
        return capabilities;
    }

    /**
     *   Declares the associated DataSource.Connection class.
     **/
    override global DataSource.Connection getConnection(
        DataSource.ConnectionParams connectionParams) {
        return new BooksDataSourceConnection(connectionParams);
    }
}
```
