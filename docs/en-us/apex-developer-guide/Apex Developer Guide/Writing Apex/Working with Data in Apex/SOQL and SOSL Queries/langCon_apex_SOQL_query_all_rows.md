---
doc_id: "langCon_apex_SOQL_query_all_rows"
---

# Querying All Records with a SOQL Statement

SOQL statements can use the `ALL ROWS` keywords to query all records in an organization, including deleted records and archived activities. For example:

```apex
System.assertEquals(2, [SELECT COUNT() FROM Contact WHERE AccountId = a.Id ALL ROWS]);
```

You can use `ALL ROWS` to query records in your organization's Recycle Bin. You cannot use the `ALL ROWS` keywords with the `FOR UPDATE` keywords.

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_variables.htm)
