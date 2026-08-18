---
doc_id: "apex_class_database_deletedrecord"
---

# DeletedRecord Class

Contains information about a deleted record.

## Namespace

[Database](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm "The Database namespace provides classes used with DML operations.")

## Usage

The `getDeletedRecords` method of the `Database.GetDeletedResult` class returns a list of `Database.DeletedRecord` objects. Use the methods in the `Database.DeletedRecord` class to retrieve details about each deleted record.

## DeletedRecord Methods

The following are methods for `DeletedRecord`. All are instance methods.

## See Also

- [getDeletedDate()](atlas.en-us.apexref.meta/apexref/apex_class_database_deletedrecord.htm#apex_Database_DeletedRecord_getDeletedDate)
- [getId()](atlas.en-us.apexref.meta/apexref/apex_class_database_deletedrecord.htm#apex_Database_DeletedRecord_getId)

### getDeletedDate()

Returns the deleted date of this record.

#### Signature

`public Date getDeletedDate()`

#### Return Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

### getId()

Returns the ID of a record deleted within the time window specified in the `Database.getDeleted` method.

#### Signature

`public Id getId()`

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")
