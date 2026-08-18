---
doc_id: "apex_class_database_querylocatoriterator"
---

# QueryLocatorIterator Class

Represents an iterator over a query locator record set.

## Namespace

[Database](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm "The Database namespace provides classes used with DML operations.")

## Example

This sample shows how to obtain an iterator for a query locator, which contains five accounts. This sample calls `hasNext` and `next` to get each record in the collection.

```apex
// Get a query locator
Database.QueryLocator q = Database.getQueryLocator(
    [SELECT Name FROM Account LIMIT 5]);
// Get an iterator
Database.QueryLocatorIterator it =  q.iterator();
 
// Iterate over the records
while (it.hasNext())
{
    Account a = (Account)it.next();
    System.debug(a);
}
```

## QueryLocatorIterator Methods

The following are methods for `QueryLocatorIterator`. All are instance methods.

## See Also

- [hasNext()](atlas.en-us.apexref.meta/apexref/apex_class_database_querylocatoriterator.htm#apex_Database_QueryLocatorIterator_hasNext)
- [next()](atlas.en-us.apexref.meta/apexref/apex_class_database_querylocatoriterator.htm#apex_Database_QueryLocatorIterator_next)

### hasNext()

Returns `true` if there are one or more records remaining in the collection; otherwise, returns `false`.

#### Signature

`public Boolean hasNext()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### next()

Advances the iterator to the next sObject record and returns the sObject.

#### Signature

`public sObject next()`

#### Return Value

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

#### Usage

Because the return value is the generic sObject type, you must cast it if using a more specific type. For example:

```apex
Account a = (Account)myIterator.next();
```

#### Example

```apex
Account a = (Account)myIterator.next();
```
