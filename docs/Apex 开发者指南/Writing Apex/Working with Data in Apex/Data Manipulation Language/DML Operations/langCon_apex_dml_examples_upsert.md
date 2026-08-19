---
doc_id: "langCon_apex_dml_examples_upsert"
---

# Upserting Records

Using the `upsert` operation, you can either insert or update an existing record in one call. To determine whether a record already exists, the `upsert` statement or Database method uses the record’s ID as the key to match records, a custom external ID field, or a standard field with the idLookup attribute set to true.

-   If the key isn’t matched, then a new object record is created.
-   If the key is matched once, then the existing object record is updated.
-   If the key is matched multiple times, then an error is generated and the object record is not inserted or updated.

:::tip Note
Custom field matching is case-insensitive only if the custom field has the
               **Unique** and **Treat "ABC" and "abc" as duplicate
               values (case insensitive)** attributes selected as part of the field
            definition. If this is the case, “ABC123” is matched with “abc123.”
:::

## Examples

The following example updates the city name for all existing accounts in the city formerly known as Bombay, and also inserts a new account in San Francisco:

```apex
Account[] acctsList = [SELECT Id, Name, BillingCity
                        FROM Account WHERE BillingCity = 'Bombay' WITH USER_MODE];
for (Account a : acctsList) {
    a.BillingCity = 'Mumbai';
}
Account newAcct = new Account(Name = 'Acme', BillingCity = 'San Francisco');
acctsList.add(newAcct);
try {
    upsert as user acctsList;
} catch (DmlException e) {
    // Process exception here
}
```

:::tip Note
For more information on processing `DmlException`s, see [Bulk DML Exception Handling](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_dml_bulk_exceptions.htm).
:::

This next example uses the `Database.upsert` method to upsert a collection of leads that are passed in. This example allows for partial processing of records, that is, in case some records fail processing, the remaining records are still inserted or updated. It iterates through the results and adds a task to each record that was processed successfully. The task sObjects are saved in a list, which is then bulk inserted. This example is followed by a test class that contains a test method for testing the example.

```apex
/* This class demonstrates and tests the use of the
 * partial processing DML operations */

public with sharing class DmlSamples {
    
    /* This method accepts a collection of lead records and
    creates a task for the owner(s) of any leads that were
        created as new, that is, not updated as a result of the upsert
        operation */
    public static List upsertLeads(List leads)  {
        
        /* Perform the upsert. In this case the unique identifier for the
        insert or update decision is the Salesforce record ID. If the
            record ID is null the row will be inserted, otherwise an update
            will be attempted. */
            List uResults = Database.upsert(leads,false, AccessLevel.USER_MODE);
        
        /* This is the list for new tasks that will be inserted when new
        leads are created. */
            List tasks = new List();
        for(Database.upsertResult result:uResults) {
            if (result.isSuccess() && result.isCreated())
                tasks.add(new Task(Subject = 'Follow-up', WhoId = result.getId()));
        }
        
        /* If there are tasks to be inserted, insert them */
        Database.insert(tasks, AccessLevel.USER_MODE);
        
        return uResults;
    }
}
```

 

```apex
@IsTest
private with sharing class DmlSamplesTest {
    @IsTest
    public static void testUpsertLeads() {
        /* We only need to test the insert side of upsert */
        List leads = new List();
        
        /* Create a set of leads for testing */
        for(Integer i = 0;i new Lead(LastName = 'testLead', Company = 'testCompany'));
        }
        
        /* Switch to the runtime limit context */
        Test.startTest();
        
        /* Exercise the method */
        List results = DmlSamples.upsertLeads(leads);
        
        /* Switch back to the test context for limits */
        Test.stopTest();
        
        /* ID set for asserting the tasks were created as expected */
        Set ids = new Set();
        
        /* Iterate over the results, asserting success and adding the new ID
        to the set for use in the comprehensive assertion phase below. */
        for(Database.upsertResult result:results) {
            Assert.isTrue(result.isSuccess());
            ids.add(result.getId());
        }
        
        /* Assert that exactly one task exists for each lead that was inserted. */
        for(Lead l:[SELECT Id, (SELECT Subject FROM Tasks) FROM Lead WHERE Id IN :ids WITH USER_MODE]) {
            Assert.areEqual(1,l.tasks.size());
        }
    }
}
```

Use of `upsert` with an external ID can reduce the number of DML statements in your code, and help you to avoid hitting governor limits (see [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.")).

This example uses `upsert` and an external ID field `Line_Item_Id__c` on the Asset object to maintain a one-to-one relationship between an asset and an opportunity line item. Before running the sample, create a custom text field on the Asset object named `Line_Item_Id__c` and mark it as an external ID. For information on custom fields, see Salesforce Help.

:::tip Note
External ID fields used in upsert calls must be unique or the user must have the
            View All Data permission.
:::

 

```apex
public void upsertExample() {
    Opportunity opp = [SELECT Id, Name, AccountId, 
                              (SELECT Id, PricebookEntry.Product2Id, PricebookEntry.Name 
                               FROM OpportunityLineItems)
                       FROM Opportunity 
                       WHERE HasOpportunityLineItem = true 
                       WITH USER_MODE LIMIT 1]; 

    Asset[] assets = new Asset[]{}; 

    // Create an asset for each line item on the opportunity
    for (OpportunityLineItem lineItem:opp.OpportunityLineItems) {

        //This code populates the line item Id, AccountId, and Product2Id for each asset
        Asset asset = new Asset(Name = lineItem.PricebookEntry.Name,
                                Line_Item_ID__c = lineItem.Id,
                                AccountId = opp.AccountId,
                                Product2Id = lineItem.PricebookEntry.Product2Id);

        assets.add(asset);
    }
 
    try {
        upsert as user assets Line_Item_ID__c;  // This line upserts the assets list with
                                        // the Line_Item_Id__c field specified as the 
                                        // Asset field that should be used for matching
                                        // the record that should be upserted. 
    } catch (DmlException e) {
        System.debug(e.getMessage());
    }
}
```
