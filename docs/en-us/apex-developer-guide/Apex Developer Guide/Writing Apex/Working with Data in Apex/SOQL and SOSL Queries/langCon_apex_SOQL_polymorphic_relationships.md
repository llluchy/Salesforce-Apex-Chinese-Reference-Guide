---
doc_id: "langCon_apex_SOQL_polymorphic_relationships"
---

# Working with Polymorphic Relationships in SOQL Queries

A polymorphic relationship is a relationship between objects where a referenced object can be one of several different types. For example, the `Who` relationship field of a Task can be a Contact or a Lead.

The following describes how to use SOQL queries with polymorphic relationships in Apex. If you want more general information on polymorphic relationships, see [Understanding Relationship Fields and Polymorphic Fields](https://developer.salesforce.com/docs/atlas.en-us.262.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_and_polymorph_keys.htm "HTML (New Window)") in the SOQL and SOSL Reference.

You can use SOQL queries that reference polymorphic fields in Apex to get results that depend on the object type referenced by the polymorphic field. One approach is to filter your results using the Type qualifier. This example queries Events that are related to an Account or Opportunity via the What field.

```apex
List events = [SELECT Description FROM Event WHERE What.Type IN ('Account', 'Opportunity')];
```

 Another approach would be to use the `TYPEOF` clause in the SOQL `SELECT` statement. This example also queries Events that are related to an Account or Opportunity via the What field.

```apex
List events = [SELECT TYPEOF What WHEN Account THEN Phone WHEN Opportunity THEN Amount END FROM Event];
```

 These queries return a list of sObjects where the relationship field references the desired object types.

If you need to access the referenced object in a polymorphic relationship, you can use the [instanceof](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_instanceof.htm) keyword to determine the object type. The following example uses `instanceof` to determine whether an Account or Opportunity is related to an Event.

```apex
Event myEvent = eventFromQuery;
if (myEvent.What instanceof Account) {
    // myEvent.What references an Account, so process accordingly
} else if (myEvent.What instanceof Opportunity) {
    // myEvent.What references an Opportunity, so process accordingly
}
```

 Note that you must assign the referenced sObject that the query returns to a variable of the appropriate type before you can pass it to another method. The following example

1.  Queries for User or Group owners of Merchandise\_\_c custom objects using a SOQL query with a `TYPEOF` clause
2.  Uses `instanceof` to determine the owner type
3.  Assigns the owner objects to User or Group type variables before passing them to utility methods

public class PolymorphismExampleClass { // Utility method for a User public static void processUser(User theUser) { System.debug('Processed User'); } // Utility method for a Group public static void processGroup(Group theGroup) { System.debug('Processed Group'); } public static void processOwnersOfMerchandise() { // Select records based on the Owner polymorphic relationship field List<Merchandise\_\_c> merchandiseList = \[SELECT TYPEOF Owner WHEN User THEN LastName WHEN Group THEN Email END FROM Merchandise\_\_c\]; // We now have a list of Merchandise\_\_c records owned by either a User or Group for (Merchandise\_\_c merch: merchandiseList) { // We can use instanceof to check the polymorphic relationship type // Note that we have to assign the polymorphic reference to the appropriate // sObject type before passing to a method if (merch.Owner instanceof User) { User userOwner = merch.Owner; processUser(userOwner); } else if (merch.Owner instanceof Group) { Group groupOwner = merch.Owner; processGroup(groupOwner); } } } }

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_filtering_nulls.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_variables.htm)
