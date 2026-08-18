---
doc_id: "apex_class_sfsqlquery_SqlRowIterator"
---

# SqlRowIterator Class

Synchronous iterator for executing Data 360 SQL queries and retrieving results row-by-row within the current transaction. Implements `Iterator<Row>` and `Iterable<Row>` for use in both for-each and while loops. The iterator is single-use; once all rows are consumed, iterating again does not restart from the beginning.

## Namespace

[sfsqlquery](atlas.en-us.apexref.meta/apexref/apex_namespace_sfsqlquery.htm "Contains classes for executing SQL queries against Data 360 data spaces from Apex.")

## Usage

Use `SqlRowIterator` for queries that return manageable result sets within a single transaction's governor limits. The query isn't submitted until iteration begins or until `getQueryId()` is called. For large result sets that may exceed single-transaction governor limits, use [`SqlQueueable`](atlas.en-us.apexref.meta/apexref/apex_class_sfsqlquery_SqlQueueable.htm#apex_class_sfsqlquery_SqlQueueable "Abstract base class for executing long-running Data 360 SQL queries asynchronously in chained Queueable jobs. Implements Queueable and Database.AllowsCallouts. Create a concrete subclass that implements processDataChunk() to process each page of results and chainNextJob() to enqueue the next job when more data remains.") instead.

## Example

Basic query using a for-each loop:

```apex
sfsqlquery.SqlRowIterator iterator = sfsqlquery.SqlStatement.create('SELECT Id__c, Name__c FROM accounts__dlm LIMIT 100', 'default')
    .execute();

for (sfsqlquery.Row row : iterator) {
    System.debug(row.getString('Id__c') + ': ' + row.getString('Name__c'));
}
```

Resume from a previously saved query ID:

```apex
sfsqlquery.QueryHandle handle = sfsqlquery.QueryHandle.create('my-query-id-123', 'default')
    .withOffset(500);  // Skip first 500 rows already processed

sfsqlquery.SqlRowIterator iterator = new sfsqlquery.SqlRowIterator(handle);
while (iterator.hasNext()) {
    sfsqlquery.Row row = iterator.next();
    System.debug(row.getString('Name__c'));
}
```

## SqlRowIterator Constructors

The following are constructors for `SqlRowIterator`.

### SqlRowIterator(handle)

Creates a `SqlRowIterator` that resumes fetching results for a previously submitted query.

#### Signature

`public SqlRowIterator(sfsqlquery.QueryHandle handle)`

#### Parameters

-   **handle**:
    
    Type: [sfsqlquery.QueryHandle](atlas.en-us.apexref.meta/apexref/apex_class_sfsqlquery_QueryHandle.htm#apex_class_sfsqlquery_QueryHandle "Tracks the runtime execution state of a Data 360 SQL query as it progresses through submission, execution, and result retrieval. Use QueryHandle to resume a previously submitted query from a saved query ID in a new SqlRowIterator or a new SqlQueueable job.") `QueryHandle` built from
    
    a previously submitted query ID and data space.
    

### SqlRowIterator(input)

Creates a `SqlRowIterator` from a `SqlStatement`. Equivalent to calling `execute()` on the statement.

#### Signature

`public SqlRowIterator(sfsqlquery.SqlStatement input)`

#### Parameters

-   **input**:
    
    Type: [sfsqlquery.SqlStatement](atlas.en-us.apexref.meta/apexref/apex_class_sfsqlquery_SqlStatement.htm#apex_class_sfsqlquery_SqlStatement "Encapsulates the inputs required to execute a Data 360 SQL query against a data space. Build a statement from a raw SQL string or a pre-built ConnectApi.QuerySqlInput object, and then execute synchronously with SqlRowIterator or pass it to a SqlQueueable subclass for asynchronous processing.") `SqlStatement` that defines
    
    the query to execute.
    

## SqlRowIterator Methods

The following are methods for `SqlRowIterator`.

### cancel()

Cancels the query and releases server-side resources. Any subsequent call to `hasNext()` returns `false`.

#### Signature

`public void cancel()`

#### Return Value

Type: void

#### Example

Cancel the query based on a condition:

```apex
sfsqlquery.SqlRowIterator iterator = sfsqlquery.SqlStatement.create('SELECT Id__c, Amount__c FROM accounts__dlm', 'default')
    .execute();

Decimal totalAmount = 0;
for (sfsqlquery.Row row : iterator) {
    Decimal amount = row.getDecimal('Amount__c');
    if (amount != null) {
        totalAmount += amount;
        if (totalAmount > 1000000) {
            iterator.cancel();  // Stop when threshold is reached
            break;
        }
    }
}
```

### getColumnNames()

Returns the ordered list of column names from the query result set. Available after the first page of results is fetched.

#### Signature

`public List<String> getColumnNames()`

#### Return Value

Type: [List<String>](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")

An ordered list of column names as they appear in the result set.

#### Example

See [getMetadata()](#apex_sfsqlquery_SqlRowIterator_getMetadata "Returns the column metadata for the query result set, including column names and their data types. Available after the first page of results is fetched.") for a combined example.

### getMetadata()

Returns the column metadata for the query result set, including column names and their data types. Available after the first page of results is fetched.

#### Signature

`public List<ConnectApi.QuerySqlMetadataItem> getMetadata()`

#### Return Value

Type: [List<ConnectApi.QuerySqlMetadataItem>](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_metadata_item.htm "Represents the metadata associated with an SQL query output.")

A list of `ConnectApi.QuerySqlMetadataItem` objects describing each column's name and data type.

#### Example

Use metadata and column names for dynamic column handling:

```apex
sfsqlquery.SqlRowIterator iterator = sfsqlquery.SqlStatement.create('SELECT * FROM accounts__dlm LIMIT 10', 'default')
    .execute();

ListString> columns = iterator.getColumnNames();
List metadata = iterator.getMetadata();

System.debug('Query returned ' + columns.size() + ' columns');
for (Integer i = 0; i ' (' + metadata[i].type + ')');
}

// Process rows using the metadata
for (sfsqlquery.Row row : iterator) {
    for (String columnName : columns) {
        Object value = row.getObject(columnName);
        System.debug(columnName + ': ' + value);
    }
}
```

### getQueryId()

Returns the server-assigned ID for this query. Triggers query submission if the query hasn't started yet. Save this value to resume the query in a later transaction using `QueryHandle.create()`.

#### Signature

`public String getQueryId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The server-assigned query ID string.

#### Example

Save query ID for resuming later:

```apex
sfsqlquery.SqlRowIterator iterator = sfsqlquery.SqlStatement.create('SELECT Id__c FROM accounts__dlm', 'default')
    .execute();

String queryId = iterator.getQueryId();
// Store queryId to resume in a later transaction
```

### hasNext()

Returns `true` if more rows remain to be fetched, or `false` if all rows have been consumed or the query was canceled.

#### Signature

`public Boolean hasNext()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

`true` if more rows are available; `false` otherwise.

#### Example

Use in a while loop:

```apex
sfsqlquery.SqlRowIterator iterator = sfsqlquery.SqlStatement.create('SELECT Name__c FROM accounts__dlm', 'default')
    .execute();

while (iterator.hasNext()) {
    sfsqlquery.Row row = iterator.next();
    System.debug(row.getString('Name__c'));
}
```

### iterator()

Returns this `SqlRowIterator` as an `Iterator`, enabling use in for-each loops.

#### Signature

`public Iterator iterator()`

#### Return Value

Type: [Iterator](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_iterator "Returns an instance of an iterator for this list.")

This `SqlRowIterator` instance as an `Iterator`.

### next()

Returns the next `Row` in the result set. Throws `NoSuchElementException` if `hasNext()` is `false`.

#### Signature

`public sfsqlquery.Row next()`

#### Return Value

Type: [sfsqlquery.Row](atlas.en-us.apexref.meta/apexref/apex_class_sfsqlquery_Row.htm#apex_class_sfsqlquery_Row "Wraps a single Data 360 SQL query result row and provides typed accessor methods for retrieving column values by name or by 0-based index. Row instances are produced by SqlRowIterator and SqlQueueable; you don't construct Row objects directly during normal usage.")

The next `Row` in the result set.

#### Example

Process rows one at a time:

```apex
sfsqlquery.SqlRowIterator iterator = sfsqlquery.SqlStatement.create('SELECT Id__c FROM accounts__dlm LIMIT 10', 'default')
    .execute();

if (iterator.hasNext()) {
    sfsqlquery.Row firstRow = iterator.next();
    System.debug('First ID: ' + firstRow.getString('Id__c'));
}
```

### toString()

Returns a string representation of this `SqlRowIterator`.

#### Signature

`public String toString()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A string representation of this `SqlRowIterator`.
