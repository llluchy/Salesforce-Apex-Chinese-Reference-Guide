---
doc_id: "apex_class_sfsqlquery_SqlQueueable"
---

# SqlQueueable Class

Abstract base class for executing long-running Data 360 SQL queries asynchronously in chained Queueable jobs. Implements `Queueable` and `Database.AllowsCallouts`. Create a concrete subclass that implements `processDataChunk()` to process each page of results and `chainNextJob()` to enqueue the next job when more data remains.

## Namespace

[sfsqlquery](atlas.en-us.apexref.meta/apexref/apex_namespace_sfsqlquery.htm "Contains classes for executing SQL queries against Data 360 data spaces from Apex.")

## Usage

The framework handles query submission, status polling, pagination, and job chaining automatically. Your subclass only needs to process data chunks and define how to chain the next job. Inside `processDataChunk()`, call `getRows()` to iterate results as `Row` objects, or `getPageOutput()` to access the raw `ConnectApi.QuerySqlPageOutput`. If you call `cancel()` inside `processDataChunk()`, the framework skips `chainNextJob()` automatically.

## Example

Define a concrete subclass and start a new query:

```apex
public with sharing class MyQueryJob extends sfsqlquery.SqlQueueable {
    public MyQueryJob(sfsqlquery.SqlStatement stmt) { super(stmt); }
    public MyQueryJob(sfsqlquery.QueryHandle handle) { super(handle); }

    public override void processDataChunk() {
        for (sfsqlquery.Row row : getRows()) {
            System.debug(row.getString('Name__c'));
        }
    }

    public override void chainNextJob(sfsqlquery.QueryHandle handle) {
        System.enqueueJob(new MyQueryJob(handle));
    }
}

// Start the job
sfsqlquery.SqlStatement stmt = sfsqlquery.SqlStatement.create('SELECT Id__c, Name__c FROM accounts__dlm', 'default');
System.enqueueJob(new MyQueryJob(stmt));
```

## SqlQueueable Constructors

The following are constructors for `SqlQueueable`.

### SqlQueueable(handle)

Creates a `SqlQueueable` subclass instance that resumes an in-progress query from a saved `QueryHandle`. Use this constructor in `chainNextJob()` to continue processing the next page.

#### Signature

`public SqlQueueable(sfsqlquery.QueryHandle handle)`

#### Parameters

-   **handle**:
    
    Type: [sfsqlquery.QueryHandle](atlas.en-us.apexref.meta/apexref/apex_class_sfsqlquery_QueryHandle.htm#apex_class_sfsqlquery_QueryHandle "Tracks the runtime execution state of a Data 360 SQL query as it progresses through submission, execution, and result retrieval. Use QueryHandle to resume a previously submitted query from a saved query ID in a new SqlRowIterator or a new SqlQueueable job.") `QueryHandle` tracking
    
    the position and state of an in-progress query.
    

### SqlQueueable(statement)

Creates a `SqlQueueable` subclass instance from a `SqlStatement` to start a new query. Pass the constructed job to `System.enqueueJob()` to begin execution.

#### Signature

`public SqlQueueable(sfsqlquery.SqlStatement statement)`

#### Parameters

-   **statement**:
    
    Type: [sfsqlquery.SqlStatement](atlas.en-us.apexref.meta/apexref/apex_class_sfsqlquery_SqlStatement.htm#apex_class_sfsqlquery_SqlStatement "Encapsulates the inputs required to execute a Data 360 SQL query against a data space. Build a statement from a raw SQL string or a pre-built ConnectApi.QuerySqlInput object, and then execute synchronously with SqlRowIterator or pass it to a SqlQueueable subclass for asynchronous processing.") `SqlStatement` defining
    
    the query to execute.
    

## SqlQueueable Methods

The following are methods for `SqlQueueable`.

### cancel()

Cancels the current query. When called inside `processDataChunk()`, the framework automatically skips `chainNextJob()`, stopping further job chaining.

#### Signature

`public void cancel()`

#### Return Value

Type: void

#### Example

Cancel the query based on a condition:

```apex
public override void processDataChunk() {
    Integer errorCount = 0;
    for (sfsqlquery.Row row : getRows()) {
        try {
            // Process row
        } catch (Exception e) {
            errorCount++;
            if (errorCount > 10) {
                cancel();  // Stop processing after too many errors
                return;
            }
        }
    }
}
```

### chainNextJob(handle)

Abstract method called by the framework when more pages remain. Override this in your concrete subclass to enqueue the next job, passing the provided `QueryHandle` to the next job's constructor.

#### Signature

`public abstract void chainNextJob(sfsqlquery.QueryHandle handle)`

#### Parameters

-   **handle**:
    
    Type: [sfsqlquery.QueryHandle](atlas.en-us.apexref.meta/apexref/apex_class_sfsqlquery_QueryHandle.htm#apex_class_sfsqlquery_QueryHandle "Tracks the runtime execution state of a Data 360 SQL query as it progresses through submission, execution, and result retrieval. Use QueryHandle to resume a previously submitted query from a saved query ID in a new SqlRowIterator or a new SqlQueueable job.") `QueryHandle` tracking
    
    the current query state, including position for the next page. Pass this to your next job's constructor.
    

#### Return Value

Type: void

### getColumnNames()

Returns the ordered list of column names from the current data chunk. Call this inside `processDataChunk()`.

#### Signature

`public List<String> getColumnNames()`

#### Return Value

Type: [List<String>](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")

An ordered list of column names as they appear in the result set.

#### Example

See [getMetadata()](#apex_sfsqlquery_SqlQueueable_getMetadata "Returns the column metadata for the current data chunk, including column names and data types. Call this inside processDataChunk().") for a combined example.

### getMetadata()

Returns the column metadata for the current data chunk, including column names and data types. Call this inside `processDataChunk()`.

#### Signature

`public List<ConnectApi.QuerySqlMetadataItem> getMetadata()`

#### Return Value

Type: [List<ConnectApi.QuerySqlMetadataItem>](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_metadata_item.htm "Represents the metadata associated with an SQL query output.")

A list of `ConnectApi.QuerySqlMetadataItem` objects describing each column's name and data type.

#### Example

Use metadata and column names for dynamic column handling:

```apex
public override void processDataChunk() {
    ListString> columns = getColumnNames();
    List metadata = getMetadata();

    System.debug('Query returned ' + columns.size() + ' columns');
    for (Integer i = 0; i ' (' + metadata[i].type + ')');
    }

    // Process rows using the metadata
    for (sfsqlquery.Row row : getRows()) {
        for (String columnName : columns) {
            Object value = row.getObject(columnName);
            System.debug(columnName + ': ' + value);
        }
    }
}
```

### getPageOutput()

Returns the raw `ConnectApi.QuerySqlPageOutput` for the current page. Use this inside `processDataChunk()` when you need direct access to the underlying API response instead of `Row` objects.

#### Signature

`public ConnectApi.QuerySqlPageOutput getPageOutput()`

#### Return Value

Type: [ConnectApi.QuerySqlPageOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_page.htm "Represents the rows output for an SQL query.")

The raw `ConnectApi.QuerySqlPageOutput` for the current page.

#### Example

Access raw API response for custom processing:

```apex
public override void processDataChunk() {
    ConnectApi.QuerySqlPageOutput output = getPageOutput();
    System.debug('Page size: ' + output.rows.size());
    System.debug('Done: ' + output.done);
}
```

### getQueryId()

Returns the server-assigned ID for this query. Save this value to resume the query in a later job using `QueryHandle.create()`.

#### Signature

`public String getQueryId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The server-assigned query ID string.

#### Example

Save the query ID to resume later:

```apex
public override void processDataChunk() {
    String queryId = getQueryId();
    // Store queryId in a custom object or platform cache
    MyQueryState__c state = new MyQueryState__c(QueryId__c = queryId);
    insert state;
}
```

### getRows()

Returns the rows in the current data chunk as an iterable of `Row` objects. Call this inside `processDataChunk()` to iterate over the page with typed accessor methods.

#### Signature

`public Iterable<sfsqlquery.Row> getRows()`

#### Return Value

Type: [Iterable](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")

An iterable of `Row` objects for the current page.

#### Example

Iterate over rows and insert records:

```apex
public override void processDataChunk() {
    List accounts = new List();
    for (sfsqlquery.Row row : getRows()) {
        accounts.add(new Account(
            Name = row.getString('Name__c'),
            AnnualRevenue = row.getDecimal('Revenue__c')
        ));
    }
    insert accounts;
}
```

### processDataChunk()

Abstract method called by the framework with each page of query results. Override this in your concrete subclass to process the data chunk. Use `getRows()` or `getPageOutput()` to access the current page's data.

#### Signature

`public abstract void processDataChunk()`

#### Return Value

Type: void

### toString()

Returns a string representation of this `SqlQueueable`.

#### Signature

`public String toString()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A string representation of this `SqlQueueable`.
