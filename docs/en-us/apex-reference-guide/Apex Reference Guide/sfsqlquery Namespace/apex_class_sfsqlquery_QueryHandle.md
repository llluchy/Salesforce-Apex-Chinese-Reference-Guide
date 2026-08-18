---
doc_id: "apex_class_sfsqlquery_QueryHandle"
---

# QueryHandle Class

Tracks the runtime execution state of a Data 360 SQL query as it progresses through submission, execution, and result retrieval. Use `QueryHandle` to resume a previously submitted query from a saved query ID in a new `SqlRowIterator` or a new `SqlQueueable` job.

## Namespace

[sfsqlquery](atlas.en-us.apexref.meta/apexref/apex_namespace_sfsqlquery.htm "Contains classes for executing SQL queries against Data 360 data spaces from Apex.")

## Usage

`QueryHandle` doesn't expose getters to subscribers. All internal state—query ID, data space, workload name, offset, and lifecycle flags—is managed by `SqlRowIterator` and `SqlQueueable`. Use `SqlRowIterator.getQueryId()` or `SqlQueueable.getQueryId()` to retrieve the query ID. When you resume from a saved query ID, call `withOffset()` to tell the framework how many rows were already processed so it resumes from the correct position.

## Example

Resume a previously submitted query:

```apex
sfsqlquery.QueryHandle handle = sfsqlquery.QueryHandle.create('my-query-id-123', 'default')
    .withWorkloadName('my_workload')
    .withOffset(500);

sfsqlquery.SqlRowIterator iterator = new sfsqlquery.SqlRowIterator(handle);
for (sfsqlquery.Row row : iterator) {
    System.debug(row.getString('Name__c'));
}
```

## QueryHandle Methods

The following are methods for `QueryHandle`.

### create(queryId, dataspace)

Creates a `QueryHandle` from a previously submitted query ID and data space name. Use this method to resume fetching results for a query that was submitted in an earlier transaction.

:::tip Note
Keep the class name and `.create()` on the same line when chaining methods.
:::

#### Signature

`public static sfsqlquery.QueryHandle create(String queryId, String dataspace)`

#### Parameters

-   **queryId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    ID of a previously submitted query, obtained from `getQueryId()` on a `SqlRowIterator` or `SqlQueueable`.
    
-   **dataspace**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the Data 360 data space the original query was submitted against.
    

#### Return Value

Type: [sfsqlquery.QueryHandle](#apex_class_sfsqlquery_QueryHandle "Tracks the runtime execution state of a Data 360 SQL query as it progresses through submission, execution, and result retrieval. Use QueryHandle to resume a previously submitted query from a saved query ID in a new SqlRowIterator or a new SqlQueueable job.")

A new `QueryHandle` instance for the specified query.

### toString()

Returns a string representation of this `QueryHandle`.

#### Signature

`public String toString()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A string representation of this `QueryHandle`.

### withOffset(offset)

Sets the row offset at which to begin fetching results and returns the same `QueryHandle` instance for method chaining. Use this when resuming a query to skip rows that were already processed.

#### Signature

`public sfsqlquery.QueryHandle withOffset(Long offset)`

#### Parameters

-   **offset**:
    
    Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.") 0-based row offset at which to begin fetching results.
    

#### Return Value

Type: [sfsqlquery.QueryHandle](#apex_class_sfsqlquery_QueryHandle "Tracks the runtime execution state of a Data 360 SQL query as it progresses through submission, execution, and result retrieval. Use QueryHandle to resume a previously submitted query from a saved query ID in a new SqlRowIterator or a new SqlQueueable job.")

This `QueryHandle` instance.

#### Example

Resume processing after 500 rows were already processed:

```apex
// In a previous transaction, you processed 500 rows and saved the query ID
Integer rowsProcessed = 500;
String savedQueryId = 'my-query-id-123';

// In a later transaction, resume from where you left off
sfsqlquery.QueryHandle handle = sfsqlquery.QueryHandle.create(savedQueryId, 'default')
    .withOffset(rowsProcessed);  // Skip the 500 rows already processed

sfsqlquery.SqlRowIterator iterator = new sfsqlquery.SqlRowIterator(handle);
while (iterator.hasNext()) {
    sfsqlquery.Row row = iterator.next();
    // Continue processing from row 501 onward
    rowsProcessed++;
}
```

### withWorkloadName(name)

Sets the workload name to use when fetching results and returns the same `QueryHandle` instance for method chaining.

#### Signature

`public sfsqlquery.QueryHandle withWorkloadName(String name)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Custom workload name to associate with result fetch requests. Set this value to help Salesforce Customer Support assist you with debugging issues
    

#### Return Value

Type: [sfsqlquery.QueryHandle](#apex_class_sfsqlquery_QueryHandle "Tracks the runtime execution state of a Data 360 SQL query as it progresses through submission, execution, and result retrieval. Use QueryHandle to resume a previously submitted query from a saved query ID in a new SqlRowIterator or a new SqlQueueable job.")

This `QueryHandle` instance.
