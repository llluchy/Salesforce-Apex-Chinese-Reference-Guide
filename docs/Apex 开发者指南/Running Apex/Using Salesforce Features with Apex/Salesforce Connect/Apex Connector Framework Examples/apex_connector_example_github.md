---
doc_id: "apex_connector_example_github"
---

# GitHub Custom Adapter for Salesforce Connect

This example illustrates how to support indirect lookup relationships. An indirect lookup relationship links a child external object to a parent standard or custom object.

For this example to work, create a custom field on the Contact standard object. Name the custom field github\_username, make it a text field of length 39, and select the `External ID` and `Unique` attributes. Also, add https://api.github.com to your remote site settings.

## GitHubDataSourceConnection Class

```apex
/**
 *   Defines the connection to GitHub REST API v3 to support
 *   querying of GitHub profiles.
 *   Extends the DataSource.Connection class to enable
 *   Salesforce to sync the external system’s schema
 *   and to handle queries and searches of the external data.
 **/
global class GitHubDataSourceConnection extends
        DataSource.Connection {
    private DataSource.ConnectionParams connectionInfo;

    /**
     *   Constructor for GitHubDataSourceConnection
     **/
    global GitHubDataSourceConnection(
            DataSource.ConnectionParams connectionInfo) {
        this.connectionInfo = connectionInfo;
    }

    /**
     *   Called to query and get results from the external 
     *   system for SOQL queries, list views, and detail pages 
     *   for an external object that’s associated with the 
     *   external data source.
     *   
     *   The queryContext argument represents the query to run 
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
               (thisColumnName.equals('ExternalId') ||
                thisColumnName.equals('login')))
                url = 'https://api.github.com/users/'
                        + filter.columnValue;
            else
                    url = 'https://api.github.com/users';
        } else {
            url = 'https://api.github.com/users';
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
     *   Defines the schema for the external system. 
     *   Called when the administrator clicks “Validate and Sync”
     *   in the user interface for the external data source.
     **/
    override global List sync() {
        List tables =
                new List();
        List columns;
        columns = new List();

        // Defines the indirect lookup field. (For this to work,
        // make sure your Contact standard object has a
        // custom unique, external ID field called github_username.)
        columns.add(DataSource.Column.indirectLookup(
                'login', 'Contact', 'github_username__c'));

        columns.add(DataSource.Column.text('id', 255));
        columns.add(DataSource.Column.text('name',255));
        columns.add(DataSource.Column.text('company',255));
        columns.add(DataSource.Column.text('bio',255));
        columns.add(DataSource.Column.text('followers',255));
        columns.add(DataSource.Column.text('following',255));
        columns.add(DataSource.Column.url('html_url'));
        columns.add(DataSource.Column.url('DisplayUrl'));
        columns.add(DataSource.Column.text('ExternalId',255));
        tables.add(DataSource.Table.get('githubProfile','login',
                columns));
        return tables;
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

            // Search usernames
            String url = 'https://api.github.com/users/'
                            + context.searchPhrase;
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

        // Standardize response string
        if (!response.contains('"items":')) {
            if (response.substring(0,1).equals('{')) {
                response = '[' + response  + ']';
            }
            response = '{"items": ' + response + '}';
        }

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
            throw new 
                    DataSource.OAuthTokenExpiredException(errorMessage);
        }

        ListObject> fileItems = 
            (ListObject>)responseBodyMap.get('items');
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
            if (key == 'login') {
                row.put('ExternalId', item.get(key));
            } else if (key=='html_url') {
                row.put('DisplayUrl', item.get(key));
            }

            row.put(key, item.get(key));
        }
        return row;
    }

    /**
     *   Helper method to make the HTTP GET call.
     *   The url argument is the URL of the external system.
     *   Returns the response from the external system.
     **/
    public String getResponse(String url) {
        // Perform callouts for production (non-test) results.
        Http httpProtocol = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndPoint(url);
        request.setMethod('GET');
        HttpResponse response = httpProtocol.send(request);
        return response.getBody();
    }
}
```

## GitHubDataSourceProvider Class

```apex
/**
 *   Extends the DataSource.Provider base class to create a
 *   custom adapter for Salesforce Connect. The class informs
 *   Salesforce of the functional and authentication
 *   capabilities that are supported by or required to connect
 *   to an external system.
 **/
global class GitHubDataSourceProvider
        extends DataSource.Provider {

    /**
     *   For simplicity, this example declares that the external 
     *   system doesn’t require authentication by returning
     *   AuthenticationCapability.ANONYMOUS as the sole entry 
     *   in the list of authentication capabilities.
     **/
    override global List
    getAuthenticationCapabilities() {
        List capabilities =
                new List();
        capabilities.add(
                DataSource.AuthenticationCapability.ANONYMOUS);
        return capabilities;
    }

    /**
     *   Declares the functional capabilities that the
     *   external system supports, in this case
     *   only SOQL queries.
     **/
    override global List
    getCapabilities() {
        List capabilities =
                new List();
        capabilities.add(DataSource.Capability.ROW_QUERY);
        return capabilities;
    }

    /**
     *   Declares the associated DataSource.Connection class.
     **/
    override global DataSource.Connection getConnection(
            DataSource.ConnectionParams connectionParams) {
        return new GitHubDataSourceConnection(connectionParams);
    }
}
```

## See Also

- [Adding Remote Site Settings](atlas.en-us.apexcode.meta/apexcode/apex_callouts_remote_site_settings.htm)
