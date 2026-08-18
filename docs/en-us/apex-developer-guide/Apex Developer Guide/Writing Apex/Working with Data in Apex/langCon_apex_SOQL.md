---
doc_id: "langCon_apex_SOQL"
---

# SOQL and SOSL Queries

You can evaluate Salesforce Object Query Language (SOQL) or Salesforce Object Search Language (SOSL) statements on-the-fly in Apex by surrounding the statement in square brackets.

## SOQL Statements

SOQL statements evaluate to a list of sObjects, a single sObject, or an Integer for `count` method queries.

For example, you could retrieve a list of accounts that are named Acme:

```apex
List aa = [SELECT Id, Name FROM Account WHERE Name = 'Acme' WITH USER_MODE];
```

 From this list, you can access individual elements:

```apex
if (!aa.isEmpty()) {
   // Execute commands
}
```

You can also create new objects from SOQL queries on existing ones. This example creates a new contact for the first account with the number of employees greater than 10.

```apex
Contact c = new Contact(Account = [SELECT Name FROM Account 
    WHERE NumberOfEmployees > 10 WITH USER_MODE LIMIT 1]);
c.FirstName = 'James';
c.LastName = 'Yoyce';
```

 The newly created object contains null values for its fields, which must be set.

The `count` method can be used to return the number of rows returned by a query. The following example returns the total number of contacts with the last name of Weissman:

```apex
Integer i = [SELECT COUNT() FROM Contact WHERE LastName = 'Weissman' WITH USER_MODE];
```

 You can also operate on the results using standard arithmetic:

```apex
Integer j = 5 * [SELECT COUNT() FROM Account WITH USER_MODE];
```

SOQL limits apply when executing SOQL queries. See [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.").

For a full description of SOQL query syntax, see the [Salesforce SOQL and SOSL Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.262.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").

## SOSL Statements

SOSL statements evaluate to a list of lists of sObjects, where each list contains the search results for a particular sObject type. The result lists are always returned in the same order as they were specified in the SOSL query. If a SOSL query doesn’t return any records for a specified sObject type, the search results include an empty list for that sObject.

For example, you can return a list of accounts, contacts, opportunities, and leads that begin with the phrase map:

```apex
List> searchList = [FIND 'map*' IN ALL FIELDS RETURNING Account (Id, Name), Contact, Opportunity, Lead WITH USER_MODE];
```

The syntax of the `FIND` clause in Apex differs from the syntax of the `FIND` clause in SOAP API and REST API:

-   In Apex, the value of the `FIND` clause is demarcated with single quotes. For example:

```apex
FIND 'map*' IN ALL FIELDS RETURNING Account (Id, Name), Contact, Opportunity, Lead
```

    
    Apex that is running in system mode ignores field-level security while scanning for a match using `IN ALL FIELDS`.
    
-   In the API, the value of the `FIND` clause is demarcated with braces. For example:

```apex
FIND {map*} IN ALL FIELDS RETURNING Account (Id, Name), Contact, Opportunity, Lead
```

From `searchList`, you can create arrays for each object returned:

```apex
Account [] accounts = ((List)searchList[0]);
Contact [] contacts = ((List)searchList[1]);
Opportunity [] opportunities = ((List)searchList[2]);
Lead [] leads = ((List)searchList[3]);
```

SOSL limits apply when executing SOSL queries. See [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.").

:::tip Note
The 4,000 characters limit for `WHERE` clause strings
                doesn’t apply to SOQL queries in Apex if the `WHERE` clause includes the `IN`
                operator.
:::

For a full description of SOSL query syntax, see the [Salesforce SOQL and SOSL Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.262.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").

## See Also

- [Working with SOQL and SOSL Query Results](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_working_with_results.htm)
- [Accessing sObject Fields Through Relationships](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SObjects_field_relationships.htm)
- [Understanding Foreign Key and Parent-Child Relationship SOQL Queries](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_foreign_key.htm)
- [Working with SOQL Aggregate Functions](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm)
- [Working with Very Large SOQL Queries](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_VLSQ.htm)
- [Using SOQL Queries That Return One Record](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_single_row.htm)
- [Improve Performance by Avoiding Null Values](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_filtering_nulls.htm)
- [Working with Polymorphic Relationships in SOQL Queries](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_polymorphic_relationships.htm)
- [Using Apex Variables in SOQL and SOSL Queries](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_variables.htm)
- [Querying All Records with a SOQL Statement](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_query_all_rows.htm)
