---
doc_id: "apex_classes_with_security_stripInaccessible"
---

# Enforce Security with the stripInaccessible Method

Use the `stripInaccessible` method to enforce field-level and object-level data protection by stripping fields and relationship fields from query and subquery results that the user can’t access. The method can also be used to remove inaccessible sObject fields before DML operations to avoid exceptions and to sanitize sObjects that have been deserialized from an untrusted source.

The `Security.stripInaccessible()` method takes a permission set ID as a parameter and enforces field-level and object-level access as per the specified permission set, in addition to the running user’s permissions.

The method allows graceful degradation of the application by omitting fields, rather than failing outright, and is similar to the behavior with views, reports, and layouts. Developers can enforce security at the level of business processes, and not merely at the object, field, or row level. This approach allows coverage of a large number of platform features that pass records into Apex from potentially untrusted sources such as Apex REST, Lightning clients, and so on.

:::tip Note
The ID field is never stripped by the `stripInaccessible` method to avoid issues when performing DML on the result.
:::

## Implementation Details

The field-level and object-level data protection is accessed through the [Security](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_System_Security.htm) and [SObjectAccessDecision](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_System_SObjectAccessDecision.htm) classes. The access check is based on the field-level permission of the current user in the context of the specified operation—create, read, update, or upsert. The [Security.stripInaccessible()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_System_Security.htm) method checks the source records for fields that don’t meet the field-level security check for the current user. The method also checks the source records for lookup or master-detail relationship fields to which the current user doesn’t have access. The method creates a return list of sObjects that is identical to the source records, except that the fields that are inaccessible to the current user are removed. The sObjects returned by the `getRecords` method contain records in the same order as the sObjects in the `sourceRecords` parameter of the `stripInaccessible` method.

## Considerations

-   Use this feature for graceful degradation on errors by omitting fields, rather than failing outright.
-   The `stripInaccessible` method doesn’t support AggregateResult SObject. If the source records are of AggregateResult SObject type, an exception is thrown.
-   To enforce object and field permissions on the User object and hide a user’s personal information from other users in orgs with Experience Cloud sites, see [Enforcing Object and Field Permissions](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_perms_enforcing.htm).

## Examples

These examples show several applications of the `stripInaccessible` method.

This example code removes inaccessible fields from the query result. A display table for campaign data must always show the `BudgetedCost`. The `ActualCost` must be shown only to users who have permission to read that field. 

```apex
SObjectAccessDecision securityDecision = 
         Security.stripInaccessible(AccessType.READABLE,
                 [SELECT Name, BudgetedCost, ActualCost FROM Campaign]                 );

    // Construct the output table
    if (securityDecision.getRemovedFields().get('Campaign').contains('ActualCost')) {
        for (Campaign c : securityDecision.getRecords()) {
        //System.debug Output: Name, BudgetedCost
        }
    } else {
        for (Campaign c : securityDecision.getRecords()) {
        //System.debug Output: Name, BudgetedCost, ActualCost
        }
}
```

This example code removes inaccessible fields from the subquery result. The user doesn’t have permission to read the `Phone` field of a Contacts object.

```apex
List accountsWithContacts =
	[SELECT Id, Name, Phone,
	    (SELECT Id, LastName, Phone FROM Account.Contacts)
	FROM Account];
  
   // Strip fields that are not readable
   SObjectAccessDecision decision = Security.stripInaccessible(
	                                   AccessType.READABLE,
	                                   accountsWithContacts);
 
// Print stripped records
   for (Integer i = 0; i 'Insecure record access: '+accountsWithContacts[i]);
      System.debug('Secure record access: '+decision.getRecords()[i]);
   }
 
// Print modified indexes
   System.debug('Records modified by stripInaccessible: '+decision.getModifiedIndexes());
 
// Print removed fields
   System.debug('Fields removed by stripInaccessible: '+decision.getRemovedFields());
```

This example code removes inaccessible fields from sObjects before DML operations. The user who doesn’t have permission to create Rating for an Account can still create an Account. The method ensures that no Rating is set and doesn’t throw an exception. 

```apex
List newAccounts = new List();
Account a = new Account(Name='Acme Corporation');
Account b = new Account(Name='Blaze Comics', Rating=’Warm’);
newAccounts.add(a);
newAccounts.add(b);

SObjectAccessDecision securityDecision = Security.stripInaccessible(
                                         AccessType.CREATABLE, newAccounts);

// No exceptions are thrown and no rating is set
insert securityDecision.getRecords();

System.debug(securityDecision.getRemovedFields().get('Account')); // Prints "Rating"
System.debug(securityDecision.getModifiedIndexes()); // Prints "1"
```

This example code sanitizes sObjects that have been deserialized from an untrusted source. The user doesn’t have permission to update the `AnnualRevenue` of an Account.

```apex
String jsonInput =
'[' +
'{' +
'"Name": "InGen",' +
'"AnnualRevenue": "100"' +
'},' +
'{' +
'"Name": "Octan"' +
'}' +
']';

List accounts = (List)JSON.deserializeStrict(jsonInput, List.class);
SObjectAccessDecision securityDecision = Security.stripInaccessible(
                                         AccessType.UPDATABLE, accounts);

// Secure update
update securityDecision.getRecords(); // Doesn’t update AnnualRevenue field
System.debug(String.join(securityDecision.getRemovedFields().get('Account'), ', ')); // Prints "AnnualRevenue"
System.debug(String.join(securityDecision.getModifiedIndexes(), ', ')); // Prints "0”
```

This example code removes inaccessible relationship fields from the query result. The user doesn’t have permission to insert the `Account__c` field, which is a lookup from MyCustomObject\_\_c to Account.

```apex
// Account__c is a lookup from MyCustomObject__c to Account
@IsTest
   public class TestCustomObjectLookupStripped {
      @IsTest static void caseCustomObjectStripped() {
         Account a = new Account(Name='foo');
         insert a;
         List records = new List{
            new MyCustomObject__c(Name='Custom0', Account__c=a.id)
         };
         insert records;
         records = [SELECT Id, Account__c FROM MyCustomObject__c];
         SObjectAccessDecision securityDecision = Security.stripInaccessible
                                                  (AccessType.READABLE, records);
         
         // Verify stripped records
         System.assertEquals(1, securityDecision.getRecords().size());
         for (SObject strippedRecord : securityDecision.getRecords()) {
             System.debug('Id should be set as Id fields are ignored: ' + 
                           strippedRecord.isSet('Id')); // prints true
             System.debug('Lookup field FLS is not READABLE to running user, 
                           should not be set: ' +
                           strippedRecord.isSet('Account__c')); // prints false
         }
      }
   }
```

## Versioned Behavior Changes

In API version 67.0 and later, Apex runs in user context by default, meaning that the current user’s permissions and field-level security (FLS) are enforced during code execution. In API version 66.0 and earlier, system mode is the default.

## See Also

- [Apex Reference Guide: AccessType Enum](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_enum_System_AccessType.htm)

-   [*Apex Reference Guide*: Security Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_System_Security.htm "Apex Reference Guide: Security Class - HTML (New Window)")
    
-   [*Apex Reference Guide*: SObjectAccessDecision Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_System_SObjectAccessDecision.htm "Apex Reference Guide: SObjectAccessDecision
    Class - HTML (New Window)")
