---
doc_id: "apex_class_Database_Cursor"
---

# Cursor Class

Contains methods to fetch records and to get the number of cursor rows returned from a SOQL query.

## Namespace

[Database](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm "The Database namespace provides classes used with DML operations.")

## Usage

A cursor is created when a SOQL query is executed on a `Database.getCursor()` or a `Database.getCursorWithBinds()` call. When the SOQL query is invoked, the corresponding rows are returned from the cursor. The maximum number of rows per cursor is 50 million, regardless of the operation being synchronous or asynchronous.

## Example

```apex
public with sharing class QueryChunkingQueueable implements Queueable {
    private Database.Cursor locator;
    private Integer position;

    public QueryChunkingQueueable() {
        locator = Database.getCursor(
            'SELECT Id FROM Contact WHERE LastActivityDate = LAST_N_DAYS:400',
            AccessLevel.USER_MODE);
        position = 0;
    }

    public void execute(QueueableContext ctx) {
        Integer remainingRows = locator.getNumRecords() - position;
        if (remainingRows == 0) {
            return; // Nothing to do
        }

        // Take the minimum of batch size and remaining rows to avoid over-fetching
        Integer fetchSize = Math.min(200, remainingRows);

        List scope = locator.fetch(position, 200);
        position += scope.size();
        // do something, like archive or delete the scope list records
        if (position // process the next chunk
            System.enqueueJob(this);
        }
    }
}
```

## See Also

- [Cursor Methods](atlas.en-us.apexref.meta/apexref/apex_class_Database_Cursor.htm#apex_Database_Cursor_methods)

## Cursor Methods

The following are methods for `Cursor`.

## See Also

- [fetch(position, count)](atlas.en-us.apexref.meta/apexref/apex_class_Database_Cursor.htm#apex_Database_Cursor_fetch)
- [getNumRecords()](atlas.en-us.apexref.meta/apexref/apex_class_Database_Cursor.htm#apex_Database_Cursor_getNumRecords)

### fetch(position, count)

Fetches cursor rows that correspond to the offset position and the specified record count. The maximum number of rows per cursor is 50 million, regardless of whether the operation is synchronous or asynchronous. Calling the `Cursor.fetch()` method counts against the SOQL query limit, and the rows fetched count against the SOQL query row limit. You can make a maximum of 100 `Cursor.fetch()` calls per transaction.

#### Signature

`public static List<SObject> fetch(Integer position, Integer count)`

#### Parameters

-   **position**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.") The offset position from which records are fetched.
-   **count**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.") The number of sObjects to fetch from the cursor, up to a maximum of 2,000.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

The list of sObjects from the SOQL query, starting from the specified position.

### getNumRecords()

Gets the number of rows returned in an Apex cursor from a `Cursor.fetch(position, count)` operation.

#### Signature

`public static Integer getNumRecords()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
