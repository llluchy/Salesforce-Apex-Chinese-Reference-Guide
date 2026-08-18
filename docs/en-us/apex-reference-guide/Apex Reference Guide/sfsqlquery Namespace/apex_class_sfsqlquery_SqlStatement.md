---
doc_id: "apex_class_sfsqlquery_SqlStatement"
---

# SqlStatement Class

Encapsulates the inputs required to execute a Data 360 SQL query against a data space. Build a statement from a raw SQL string or a pre-built `ConnectApi.QuerySqlInput` object, and then execute synchronously with `SqlRowIterator` or pass it to a `SqlQueueable` subclass for asynchronous processing.

## Namespace

[sfsqlquery](atlas.en-us.apexref.meta/apexref/apex_namespace_sfsqlquery.htm "Contains classes for executing SQL queries against Data 360 data spaces from Apex.")

## Usage

Use the static `create()` factories to build a statement, optionally configure the workload name with `withWorkloadName()`, and then either call `execute()` to get a synchronous `SqlRowIterator` or pass the statement to a `SqlQueueable` subclass for asynchronous execution.

## Example

Build and execute a statement synchronously.

```apex
sfsqlquery.SqlRowIterator iterator = sfsqlquery.SqlStatement.create('SELECT Id__c FROM accounts__dlm', 'default')
    .withWorkloadName('my_workload')
    .execute();

for (sfsqlquery.Row row : iterator) {
    System.debug(row.getString('Id__c'));
}
```

## SqlStatement Methods

The following are methods for `SqlStatement`.

### create(query, dataspace)

Creates a `SqlStatement` from a pre-built `ConnectApi.QuerySqlInput` object. Use this method when you need to configure query properties beyond a SQL string, such as parameterized queries, a server-side row limit, or custom query settings.

:::tip Note
Keep the class name and `.create()` on the same line when chaining methods.
:::

#### Signature

`public static sfsqlquery.SqlStatement create(ConnectApi.QuerySqlInput query, String dataspace)`

#### Parameters

-   **query**:
    
    Type: [ConnectApi.QuerySqlInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_query_sql.htm "Represents the input to create an SQL query.")
    
    Pre-built query input object that c
    
    an include parameterized queries, a server-side row limit, or custom query settings.
    
-   **dataspace**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the Data 360 data space to query against.
    

#### Return Value

Type: [sfsqlquery.SqlStatement](#apex_class_sfsqlquery_SqlStatement "Encapsulates the inputs required to execute a Data 360 SQL query against a data space. Build a statement from a raw SQL string or a pre-built ConnectApi.QuerySqlInput object, and then execute synchronously with SqlRowIterator or pass it to a SqlQueueable subclass for asynchronous processing.")

A new `SqlStatement` instance configured with the provided query input and data space.

### create(sql, dataspace)

Creates a `SqlStatement` from a raw SQL string and a data space name.

:::tip Note
Keep the class name and `.create()` on the same line when chaining methods.
:::

#### Signature

`public static sfsqlquery.SqlStatement create(String sql, String dataspace)`

#### Parameters

-   **sql**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    SQL query string to execute.
    
-   **dataspace**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the Data 360 data space to query against.
    

#### Return Value

Type: [sfsqlquery.SqlStatement](#apex_class_sfsqlquery_SqlStatement "Encapsulates the inputs required to execute a Data 360 SQL query against a data space. Build a statement from a raw SQL string or a pre-built ConnectApi.QuerySqlInput object, and then execute synchronously with SqlRowIterator or pass it to a SqlQueueable subclass for asynchronous processing.")

A new `SqlStatement` instance configured with the provided SQL and data space.

### execute()

Returns a synchronous `SqlRowIterator` built from this statement. Equivalent to `new sfsqlquery.SqlRowIterator(statement)`. The query isn't submitted until iteration begins.

#### Signature

`public sfsqlquery.SqlRowIterator execute()`

#### Return Value

Type: [sfsqlquery.SqlRowIterator](atlas.en-us.apexref.meta/apexref/apex_class_sfsqlquery_SqlRowIterator.htm#apex_class_sfsqlquery_SqlRowIterator "Synchronous iterator for executing Data 360 SQL queries and retrieving results row-by-row within the current transaction. Implements Iterator<Row> and Iterable<Row> for use in both for-each and while loops. The iterator is single-use; once all rows are consumed, iterating again does not restart from the beginning.")

A new `SqlRowIterator` configured from this statement.

### toString()

Returns a string representation of this `SqlStatement`.

#### Signature

`public String toString()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A string representation of this `SqlStatement`.

### withWorkloadName(name)

Sets the workload name to send with the query and returns the same `SqlStatement` instance for method chaining. If not set, the framework uses `dcsql_row_iterator_workload` for iterators or `dcsql_queueable_workload` for queueables.

#### Signature

`public sfsqlquery.SqlStatement withWorkloadName(String name)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Custom workload name to associate with the query. Set this value to help Salesforce Customer Support assist you with debugging issues
    

#### Return Value

Type: [sfsqlquery.SqlStatement](#apex_class_sfsqlquery_SqlStatement "Encapsulates the inputs required to execute a Data 360 SQL query against a data space. Build a statement from a raw SQL string or a pre-built ConnectApi.QuerySqlInput object, and then execute synchronously with SqlRowIterator or pass it to a SqlQueueable subclass for asynchronous processing.")

This `SqlStatement` instance.

#### Example

Use custom workload names to monitor and throttle different query types:

```apex
// High-priority user-facing query
sfsqlquery.SqlRowIterator userQuery = sfsqlquery.SqlStatement.create('SELECT * FROM accounts__dlm WHERE Region__c = \'West\'', 'default')
    .withWorkloadName('salescloud-userdashboard')
    .execute();

// Background batch processing query
sfsqlquery.SqlStatement batchStmt = sfsqlquery.SqlStatement.create('SELECT * FROM accounts__dlm', 'default')
    .withWorkloadName('marketing-nightlybatch');
System.enqueueJob(new MyBatchJob(batchStmt));
```
