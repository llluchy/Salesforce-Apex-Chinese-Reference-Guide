---
doc_id: "langCon_apex_dml_examples_undelete"
---

# Restoring Deleted Records

After you have deleted records, the records are placed in the Recycle Bin for 15 days, after which they are permanently deleted. While the records are still in the Recycle Bin, you can restore them using the `undelete` operation. If you accidentally deleted some records that you want to keep, restore them from the Recycle Bin.

## Example

The following example undeletes an account named 'Universal Containers'. The `ALL ROWS` keyword queries all rows for both top level and aggregate relationships, including deleted records and archived activities.

```apex
Account a = new Account(Name='Universal Containers');
insert(a);
insert(new Contact(LastName='Carter',AccountId=a.Id));
delete a;

Account[] savedAccts = [SELECT Id, Name FROM Account WHERE Name = 'Universal Containers' ALL ROWS]; 
try {
    undelete savedAccts;
} catch (DmlException e) {
    // Process exception here
}
```

:::tip Note
For more information on processing `DmlException`s, see [Bulk DML Exception Handling](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_dml_bulk_exceptions.htm).
:::

## Undelete Considerations

Note the following when using the `undelete` statement.

-   You can undelete records that were deleted as the result of a merge. However, the merge reparents the child objects, and that reparenting can’t be undone.
-   To identify deleted records, including records deleted as a result of a merge, use the `ALL ROWS` parameters with a SOQL query.
-   See [Referential Integrity When Deleting and Restoring Records](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_examples_delete.htm#referential_integrity).

## See Also

- [Querying All Records with a SOQL Statement](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_query_all_rows.htm)
