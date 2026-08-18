---
doc_id: "apex_triggers_bulk"
---

# Bulk Triggers

All triggers are **bulk triggers** by default, and can process multiple records at a time. You should always plan on processing more than one record at a time.

:::tip Note
An Event object that is defined as recurring is not processed in bulk for `insert`, `delete`, or
    `update` triggers.
:::

Bulk triggers can handle both single record updates and bulk operations like:

-   Data import
-   Lightning Platform Bulk API calls
-   Mass actions, such as record owner changes and deletes
-   Recursive Apex methods and triggers that invoke bulk DML statements

## See Also

- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_triggers_syntax.htm)
