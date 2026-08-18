---
doc_id: "langCon_apex_locking_soql_for_loop"
---

# Locking in a SOQL For Loop

The `FOR UPDATE` keywords can also be used within SOQL `for` loops. For example:

```apex
for (Account[] accts : [SELECT Id FROM Account
                        FOR UPDATE]) {
    // Your code
}
```

As discussed in [SOQL For Loops](atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops_for_SOQL.htm "SOQL for loops iterate over all of the sObject records returned by a SOQL query."), the example above corresponds internally to calls to the `query()` and `queryMore()` methods in the SOAP API.

Note that there is no `commit` statement. If your Apex trigger completes successfully, any database changes are automatically committed. If your Apex trigger does not complete successfully, any changes made to the database are rolled back.
