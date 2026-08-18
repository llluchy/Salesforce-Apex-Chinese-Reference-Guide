---
doc_id: "apex_class_sfsqlquery_SqlTester"
---

# SqlTester Class

Test utility for mocking Data 360 SQL query API responses in Apex tests. The framework automatically detects the test context via `Test.isRunningTest()` and returns mocked responses when configured. Call `clearMocks()` before each test to ensure a clean state.

## Namespace

[sfsqlquery](atlas.en-us.apexref.meta/apexref/apex_namespace_sfsqlquery.htm "Contains classes for executing SQL queries against Data 360 data spaces from Apex.")

## Usage

You provide mock column metadata and mock row data. The framework auto-generates the query submission and status responses from your mock data. Use `setMockRows()` to set a single page of results, or call `enqueueMockRows()` multiple times to simulate multi-page results. If you call `cancel()` in a test, any subsequent fetch against that query ID raises an exception in the mock layer, simulating production cancellation behavior.

## Example

Set up a single-page mock and test an iterator:

```apex
@IsTest
static void testBasicQuery() {
    sfsqlquery.SqlTester.clearMocks();

    ConnectApi.QuerySqlMetadataItem col = new ConnectApi.QuerySqlMetadataItem();
    col.name = 'Name__c';
    col.type = ConnectApi.TypeEnum.VARCHAR;
    sfsqlquery.SqlTester.setMockMetadata(new List{ col });

    ConnectApi.QuerySqlRow mockRow = new ConnectApi.QuerySqlRow();
    mockRow.rowData = new ListObject>{ 'Acme' };
    sfsqlquery.SqlTester.setMockRows(new List{ mockRow });

    sfsqlquery.SqlRowIterator iterator = sfsqlquery.SqlStatement.create('SELECT Name__c FROM accounts__dlm', 'default')
        .execute();

    Assert.isTrue(iterator.hasNext());
    sfsqlquery.Row row = iterator.next();
    Assert.areEqual('Acme', row.getString('Name__c'));
}
```

## SqlTester Methods

The following are methods for `SqlTester`.

### clearMocks()

Resets all mock state, including metadata, rows, and page queues. Call this at the start of each test method to ensure a clean state.

#### Signature

`public static void clearMocks()`

#### Return Value

Type: void

#### Example

Clear mocks at the start of each test:

```apex
@IsTest
static void testMyQuery() {
    sfsqlquery.SqlTester.clearMocks();
    // Set up fresh mocks for this test
    // ... test code ...
}
```

### enqueueMockRows(rows)

Adds a page of mock rows to the result queue. Call this multiple times to simulate multi-page results. Each call adds one page; pages are returned in the order they were enqueued.

#### Signature

`public static void enqueueMockRows(List<ConnectApi.QuerySqlRow> rows)`

#### Parameters

-   **rows**:
    
    Type: [List<ConnectApi.QuerySqlRow>](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_row.htm "Represents data associated with the an SQL query output.")
    
    List of `ConnectApi.QuerySqlRow` objects representing one page of results.
    

#### Return Value

Type: void

#### Example

Simulate multi-page results for SqlQueueable:

```apex
@IsTest
static void testMultiPageQuery() {
    sfsqlquery.SqlTester.clearMocks();

    // Set up metadata
    ConnectApi.QuerySqlMetadataItem col = new ConnectApi.QuerySqlMetadataItem();
    col.name = 'Name__c';
    col.type = ConnectApi.TypeEnum.VARCHAR;
    sfsqlquery.SqlTester.setMockMetadata(new List{ col });

    // Page 1
    ConnectApi.QuerySqlRow page1Row = new ConnectApi.QuerySqlRow();
    page1Row.rowData = new ListObject>{ 'Page 1 Data' };
    sfsqlquery.SqlTester.enqueueMockRows(new List{ page1Row });

    // Page 2
    ConnectApi.QuerySqlRow page2Row = new ConnectApi.QuerySqlRow();
    page2Row.rowData = new ListObject>{ 'Page 2 Data' };
    sfsqlquery.SqlTester.enqueueMockRows(new List{ page2Row });

    // Execute queueable - will process both pages
    Test.startTest();
    System.enqueueJob(new MyQueryJob(
        sfsqlquery.SqlStatement.create('SELECT Name__c FROM accounts__dlm', 'default')
    ));
    Test.stopTest();
}
```

### isRunningTest()

Returns `true` if the framework is currently executing within a test context. The framework calls this internally to decide whether to return mocked responses.

#### Signature

`public static Boolean isRunningTest()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

`true` if executing in a test context; `false` otherwise.

### setMockMetadata(metadata)

Sets the mock column metadata that the framework returns for all queries in the current test. Call this before executing any query.

#### Signature

`public static void setMockMetadata(List<ConnectApi.QuerySqlMetadataItem> metadata)`

#### Parameters

-   **metadata**:
    
    Type: [List<ConnectApi.QuerySqlMetadataItem>](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_metadata_item.htm "Represents the metadata associated with an SQL query output.")
    
    List of `ConnectApi.QuerySqlMetadataItem` objects that define the column names and types for the mocked query results.
    

#### Return Value

Type: void

#### Example

Define column metadata for mocked results:

```apex
ConnectApi.QuerySqlMetadataItem idCol = new ConnectApi.QuerySqlMetadataItem();
idCol.name = 'Id__c';
idCol.type = ConnectApi.TypeEnum.VARCHAR;

ConnectApi.QuerySqlMetadataItem amountCol = new ConnectApi.QuerySqlMetadataItem();
amountCol.name = 'Amount__c';
amountCol.type = ConnectApi.TypeEnum.DECIMAL;

sfsqlquery.SqlTester.setMockMetadata(new List{ idCol, amountCol });
```

### setMockRows(rows)

Sets a single page of mock rows to return for the query. Use `enqueueMockRows()` instead when simulating multi-page results.

#### Signature

`public static void setMockRows(List<ConnectApi.QuerySqlRow> rows)`

#### Parameters

-   **rows**:
    
    Type: [List<ConnectApi.QuerySqlRow>](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_row.htm "Represents data associated with the an SQL query output.")
    
    List of `ConnectApi.QuerySqlRow` objects representing the single page of results to return.
    

#### Return Value

Type: void

#### Example

Set a single page of mock results:

```apex
ConnectApi.QuerySqlRow row1 = new ConnectApi.QuerySqlRow();
row1.rowData = new ListObject>{ 'acc-001', 1000.00 };

ConnectApi.QuerySqlRow row2 = new ConnectApi.QuerySqlRow();
row2.rowData = new ListObject>{ 'acc-002', 2500.50 };

sfsqlquery.SqlTester.setMockRows(new List{ row1, row2 });
```
