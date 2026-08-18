---
doc_id: "apex_class_Database_CursorFetchResult"
---

# CursorFetchResult Class

This class encapsulates the result of a `PaginationCursor.fetchPage()` call. It contains methods that get the rows for the current page, the start index of the next page, and the number of deleted rows skipped during the fetch operation. It also contains a method that indicates whether the pagination cursor has fetched all available rows in the result set.

## Namespace

[Database](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm "The Database namespace provides classes used with DML operations.")

## See Also

- [CursorFetchResult Methods](atlas.en-us.apexref.meta/apexref/apex_class_Database_CursorFetchResult.htm#apex_Database_CursorFetchResult_methods)

## CursorFetchResult Methods

The following are methods for `CursorFetchResult`.

## See Also

- [getNextIndex()](atlas.en-us.apexref.meta/apexref/apex_class_Database_CursorFetchResult.htm#apex_Database_CursorFetchResult_getNextIndex)
- [getNumDeletedRecords()](atlas.en-us.apexref.meta/apexref/apex_class_Database_CursorFetchResult.htm#apex_Database_CursorFetchResult_getNumDeletedRecords)
- [getRecords()](atlas.en-us.apexref.meta/apexref/apex_class_Database_CursorFetchResult.htm#apex_Database_CursorFetchResult_getRecords)
- [isDone()](atlas.en-us.apexref.meta/apexref/apex_class_Database_CursorFetchResult.htm#apex_Database_CursorFetchResult_isDone)

### getNextIndex()

Gets the start index required to fetch the next page of results. Use this value as the start parameter in the call to `PaginationCursor.fetchPage(start, pageSize)` to fetch the next page of results.

#### Signature

`public Integer getNextIndex()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getNumDeletedRecords()

Gets the number of deleted rows that were skipped during the fetch operation.

#### Signature

`public Integer getNumDeletedRecords()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getRecords()

Gets the list of records that comprise the rows on the current page.

#### Signature

`public List<SObject> getRecords()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

The list of sObjects from the SOQL query for the current page.

### isDone()

Returns `true` if the pagination cursor has reached either the page size passed to `PaginationCursor.fetchPage(start, pageSize)` or the end of the result set. Otherwise returns `false`.

#### Signature

`public Boolean isDone()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## See Also

- [getPaginationCursor(query, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_getPaginationCursor)

-   [PaginationCursor Class](atlas.en-us.apexref.meta/apexref/apex_class_Database_PaginationCursor.htm#apex_class_Database_PaginationCursor "This class represents a pagination cursor that can traverse a SOQL query result set. It contains methods that fetch rows by page. It also contains a method that returns the total number of rows in the result set.")
    
-   [*Apex Developer Guide*: Apex Cursors](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_cursors.htm "Apex Developer Guide: Apex Cursors - HTML (New Window)")
