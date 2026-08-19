---
doc_id: "langCon_apex_dml_exception_handling"
---

# Exception Handling

DML statements return run-time exceptions if something went wrong in the database during the execution of the DML operations. You can handle the exceptions in your code by wrapping your DML statements within try-catch blocks. The following example includes the `insert` DML statement inside a try-catch block.

```apex
Account a = new Account(Name='Acme');
try {
    insert a;
} catch(DmlException e) {
    // Process exception here
}
```

## See Also

- [Database Class Method Result Objects](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_database_result_classes.htm)
- [Returned Database Errors](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_database_error.htm)
