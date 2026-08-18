---
doc_id: "langCon_apex_SOQL_foreign_key"
---

# Understanding Foreign Key and Parent-Child Relationship SOQL Queries

The `SELECT` statement of a SOQL query can be any valid SOQL statement, including foreign key and parent-child record joins. If foreign key joins are included, the resulting sObjects can be referenced using normal field notation. For example:

```apex
System.debug([SELECT Account.Name FROM Contact
              WHERE FirstName = 'Caroline'].Account.Name);
```

Additionally, parent-child relationships in sObjects act as SOQL queries as well. For example:

```apex
for (Account a : [SELECT Id, Name, (SELECT LastName FROM Contacts)
                  FROM Account
                  WHERE Name = 'Acme']) {
     Contact[] cons = a.Contacts;
}

//The following example also works because we limit to only 1 contact
for (Account a : [SELECT Id, Name, (SELECT LastName FROM Contacts LIMIT 1)
                  FROM Account
                  WHERE Name = 'testAgg']) {
     Contact c = a.Contacts;
}
```

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SObjects_field_relationships.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm)
