---
doc_id: "langCon_apex_locking_records"
---

# Locking Records

When an sObject record is locked, no other client or user is allowed to make updates either through code or the Salesforce user interface. The client locking the records can perform logic on the records and make updates with the guarantee that the locked records won’t be changed by another client during the lock period.

## See Also

- [Locking Statements](atlas.en-us.apexcode.meta/apexcode/langCon_apex_locking_statements.htm)
- [Locking in a SOQL For Loop](atlas.en-us.apexcode.meta/apexcode/langCon_apex_locking_soql_for_loop.htm)
- [Avoiding Deadlocks](atlas.en-us.apexcode.meta/apexcode/langCon_apex_deadlocks.htm)
