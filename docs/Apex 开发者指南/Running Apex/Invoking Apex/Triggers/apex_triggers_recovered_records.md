---
doc_id: "apex_triggers_recovered_records"
---

# Triggers and Recovered Records

The `after undelete` trigger event only works with recovered records—that is, records that were deleted and then recovered from the Recycle Bin through the `undelete` DML statement. These are also called undeleted records.

The `after undelete` trigger events only run on top-level objects. For example, if you delete an Account, an Opportunity may also be deleted. When you recover the Account from the Recycle Bin, the Opportunity is also recovered. If there is an `after undelete` trigger event associated with both the Account and the Opportunity, only the Account `after undelete` trigger event executes.

The `after undelete` trigger event only fires for custom objects and these standard objects.

-   Account
-   Asset
-   Campaign
-   Case
-   Contact
-   ContentDocument
-   Contract
-   Event
-   Lead
-   Opportunity
-   Product
-   Solution
-   Task

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_triggers_merge_statements.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm)
