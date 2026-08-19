---
doc_id: "apex_connector_example_google_drive"
---

# Google Drive™ Custom Adapter for Salesforce Connect

This example illustrates how to use callouts and OAuth to connect to an external system, which in this case is the Google Drive™ online storage service. The example also shows how to avoid failing tests from web service callouts by returning mock responses for test methods.

For this example to work reliably, request offline access when setting up OAuth so that Salesforce can obtain and maintain a refresh token for your connections.

## DriveDataSourceConnection Class

```apex
/**
 *   Extends the DataSource.Connection class to enable 
 *   Salesforce to sync the external system’s schema 
 *   and to handle queries and searches of the external data. 
 **/
global class DriveDataSourceConnection extends
    DataSource.Connection {
    private DataSource.ConnectionParams connectionInfo;
    
    /**
     *   Constructor for DriveDataSourceConnection.
     **/
    global DriveDataSourceConnection(
        DataSource.ConnectionParams connectionInfo) {
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
        columns.add(DataSource.Column.text('title', 255));
        columns.add(DataSource.Column.text('description',255));
        columns.add(DataSource.Column.text('createdDate',255));
        columns.add(DataSource.Column.text('modifiedDate',255));
        columns.add(DataSource.Column.url('selfLink'));
        columns.add(DataSource.Column.url('DisplayUrl'));
        columns.add(DataSource.Column.text('ExternalId',255));
        tables.add(DataSource.Table.get('googleDrive','title',
            columns));
        return tables;
    }

    /**
     *   Called to query and get results from the external 
     *   system for SOQL queries, list views, and detail pages 
     *   for an external object that’s associated with the 
     *   external data source.
     *   
     *   The QueryContext argument represents the query to run 
     *   against a table in the external system.
     *   
     *   Returns a list of rows as the query results.
     **/
    override global DataSource.TableResult query(
        DataSource.QueryContext context) {
        DataSource.Filter filter = context.tableSelection.filter;
        String url;
        if (filter != null) {
            String thisColumnName = filter.columnName;
            if (thisColumnName != null && 
                    thisColumnName.equals('ExternalId'))
                url = 'https://www.googleapis.com/drive/v2/'
                + 'files/' + filter.columnValue;
            else
                url = 'https://www.googleapis.com/drive/v2/'
                + 'files';
        } else {
            url = 'https://www.googleapis.com/drive/v2/' 
            + 'files';
        }

        /**
         * Filters, sorts, and applies limit and offset clauses.
         **/
        ListString, Object>> rows = 
            DataSource.QueryUtils.process(context, getData(url));
        return DataSource.TableResult.get(true, null,
            context.tableSelection.tableSelected, rows);
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
        DataSource.SearchContext context) {
        List results =
            new List();

        for (Integer i =0;iString entity = context.tableSelections[i].tableSelected;
            String url = 
                'https://www.googleapis.com/drive/v2/files'+
                '?q=fullText+contains+\''+context.searchPhrase+'\'';
            results.add(DataSource.TableResult.get(
                true, null, entity, getData(url)));
        }

        return results;
    }

    /**
     *   Helper method to parse the data.
     *   The url argument is the URL of the external system.
     *   Returns a list of rows from the external system.
     **/
    public ListString, Object>> getData(String url) {
        String response = getResponse(url);

        ListString, Object>> rows =
            new ListString, Object>>();

        MapString, Object> responseBodyMap = (MapString, Object>)
            JSON.deserializeUntyped(response);

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
            String errorMessage = (String)errors.get('message');
            throw new DataSource.OAuthTokenExpiredException(errorMessage);
        }

        ListObject> fileItems=(ListObject>)responseBodyMap.get('items');
        if (fileItems != null) {
            for (Integer i=0; i String, Object> item = 
                    (MapString, Object>)fileItems[i];
                rows.add(createRow(item));  
            }
        } else {
            rows.add(createRow(responseBodyMap));
        }

        return rows;
    }

    /**
     *   Helper method to populate the External ID and Display 
     *   URL fields on external object records based on the 'id' 
     *   value that’s sent by the external system.
     *   
     *   The Map item parameter maps to the data 
     *   that represents a row.
     *   
     *   Returns an updated map with the External ID and 
     *   Display URL values.
     **/
    public MapString, Object> createRow(
        MapString, Object> item){
        MapString, Object> row = new MapString, Object>();
        for ( String key : item.keySet() ) {
            if (key == 'id') {
                row.put('ExternalId', item.get(key));
            } else if (key=='selfLink') {
                row.put(key, item.get(key));
                row.put('DisplayUrl', item.get(key));
            } else {
                row.put(key, item.get(key));
            }
        }
        return row;
    }
    
    static String mockResponse = '{' +
      '  "kind": "drive#file",' +
      '  "id": "12345",' +
      '  "selfLink": "files/12345",' +
      '  "title": "Mock File",' +
      '  "mimeType": "application/text",' +
      '  "description": "Mock response that’s used during tests",' +
      '  "createdDate": "2016-04-20",' +
      '  "modifiedDate": "2016-04-20",' +
      '  "version": 1' +
      '}';
    
    /**
     *   Helper method to make the HTTP GET call.
     *   The url argument is the URL of the external system.
     *   Returns the response from the external system.
     **/
    public String getResponse(String url) {
        if (System.Test.isRunningTest()) {
          // Avoid callouts during tests. Return mock data instead.
          return mockResponse;
        } else {
          // Perform callouts for production (non-test) results.
          Http httpProtocol = new Http();
          HttpRequest request = new HttpRequest();
          request.setEndPoint(url);
          request.setMethod('GET');
          request.setHeader('Authorization', 'Bearer '+
              this.connectionInfo.oauthToken);
          HttpResponse response = httpProtocol.send(request);
          return response.getBody();
        }
    }
}
```

## DriveDataSourceProvider Class

```apex
/**
 *   Extends the DataSource.Provider base class to create a 
 *   custom adapter for Salesforce Connect. The class informs 
 *   Salesforce of the functional and authentication 
 *   capabilities that are supported by or required to connect 
 *   to an external system.
 **/
global class DriveDataSourceProvider
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
        List capabilities =
            new List();
        capabilities.add(DataSource.Capability.ROW_QUERY);
        capabilities.add(DataSource.Capability.SEARCH);
        return capabilities;
    }

    /**
     *   Declares the associated DataSource.Connection class.
     **/
    override global DataSource.Connection getConnection(
        DataSource.ConnectionParams connectionParams) {
        return new DriveDataSourceConnection(connectionParams);
    }
}
```
