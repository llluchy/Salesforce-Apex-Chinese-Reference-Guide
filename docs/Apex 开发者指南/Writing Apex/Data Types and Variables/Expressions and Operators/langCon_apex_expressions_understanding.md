---
doc_id: "langCon_apex_expressions_understanding"
---

# Expressions

An expression is a construct made up of variables, operators, and method invocations that evaluates to a single value.

In Apex, an expression is always one of the following types:

-   A literal expression. For example: 

```apex
1 + 1
```

-   A new sObject, Apex object, list, set, or map. For example:

```apex
new Account()
new Integer[]
new Account[]{}
new List()
new SetString>{}
new MapString, Integer>()
new myRenamingClass(string oldName, string newName)
```

-   Any value that can act as the left-hand of an assignment operator (L-values), including variables, one-dimensional list positions, and most sObject or Apex object field references. For example:

```apex
Integer i
myList[3]
myContact.name
myRenamingClass.oldName
```

-   Any sObject field reference that is not an L-value, including:
    -   The ID of an sObject in a list (see [Lists](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_lists.htm "A list is an ordered collection of elements that are distinguished by their indices. List elements can be of any data type—primitive types, collections, sObjects, user-defined types, and built-in Apex types."))
    -   A set of child records associated with an sObject (for example, the set of contacts associated with a particular account). This type of expression yields a query result, much like SOQL and SOSL queries.
-   A SOQL or SOSL query surrounded by square brackets, allowing for on-the-fly evaluation in Apex. For example:

```apex
Account[] aa = [SELECT Id, Name FROM Account WHERE Name ='Acme'];
Integer i = [SELECT COUNT() FROM Contact WHERE LastName ='Weissman'];
List> searchList = [FIND 'map*' IN ALL FIELDS RETURNING Account (Id, Name), Contact, Opportunity, Lead];
```

    
    For information, see [SOQL and SOSL Queries](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL.htm "You can evaluate Salesforce Object Query Language (SOQL) or Salesforce Object Search Language (SOSL) statements on-the-fly in Apex by surrounding the statement in square brackets.").
    
-   A static or instance method invocation. For example:

```apex
System.assert(true)
myRenamingClass.replaceNames()
changePoint(new Point(x, y));
```
