---
doc_id: "langCon_apex_dml_examples_merge"
---

# Merging Records

When you have duplicate lead, contact, case, or account records in the database, cleaning up your data and consolidating the records is a good idea. You can merge up to three records of the same sObject type. The `merge` operation merges the duplicate records into the main record, deletes the duplicate records, and reparents any related records.

## Use the merge Statement

This example shows how to merge a duplicate account record into a main account record. The duplicate account has a related contact, which is moved to the main account record after the `merge` operation. After merging, the duplicate record is deleted and only the main record remains in the database.

```apex
// Insert new accounts
List ls = new List{
    new Account(Name = 'Acme Inc.'),
    new Account(Name = 'Acme')
};                                        
insert as user ls;

// Queries to get the inserted accounts 
Account mainAcct = [
    SELECT Id, Name 
    FROM Account 
    WHERE Name = 'Acme Inc.' 
    WITH USER_MODE 
    LIMIT 1
];

Account dupAcct = [
    SELECT Id, Name 
    FROM Account 
    WHERE Name = 'Acme' 
    WITH USER_MODE 
    LIMIT 1
];

// Add a contact to the account to be merged
Contact c = new Contact(FirstName = 'Joe', LastName = 'Merged');
c.AccountId = dupAcct.Id;
insert as user c;

try {
    merge mainAcct dupAcct;
} catch (DmlException e) {
    // Process exception
    System.debug('An unexpected error has occurred: ' + e.getMessage()); 
}

// After the account is merged with the main account,
// the related contact is moved to the main record.
mainAcct = [
    SELECT Id, Name, (SELECT FirstName, LastName FROM Contacts) 
    FROM Account 
    WHERE Name = 'Acme Inc.'  
    WITH USER_MODE 
    LIMIT 1
];

Assert.isTrue(mainAcct.getSObjects('Contacts').size() > 0);
Assert.areEqual('Joe', mainAcct.getSObjects('Contacts')[0].get('FirstName'));
Assert.areEqual('Merged', mainAcct.getSObjects('Contacts')[0].get('LastName'));

// Verify that the duplicate record is deleted
Account[] result = [SELECT Id, Name FROM Account WHERE Id = :dupAcct.Id WITH USER_MODE];
Assert.areEqual(0, result.size());
```

## Use the Database.merge Method

This second example is similar to the previous example, except that it uses the `Database.merge` method instead of the `merge` statement. The last argument of `Database.merge` is set to `false`, so any errors encountered in this operation are returned in the merge result without throwing exceptions. In the example, a main account and two duplicate account records are created. One of the duplicate account records has a child contact record. Through the merge operation, the contact is moved to the main account record, and the other records are deleted.

:::tip Note
To use the AccountContactRelation sObject in this example, enable the “Allow
                users to relate a contact to multiple accounts” setting in your org. See [Set Up Contacts to
                    Multiple Accounts](https://help.salesforce.com/s/articleView?id=sales.shared_contacts_set_up.htm&type=5&language=en_US).
:::

```apex
// Create main account
Account main = new Account(Name = 'Account1');
insert as user main;

// Create duplicate accounts
List duplicates = new List{
    // Duplicate account 
    new Account(Name = 'Account1, Inc.'),
    // Second duplicate account
    new Account(Name = 'Account 1')
};
insert as user duplicates;

// Create child contact and associate it with first account
Contact c = new Contact(FirstName = 'Joe', LastName = 'Smith', AccountId = duplicates[0].Id);
insert as user c;

// Get the account contact relation ID, which is created when a contact is created on "Account1, Inc." 
AccountContactRelation resultAcrel = [
    SELECT Id 
    FROM AccountContactRelation 
    WHERE ContactId = :c.Id 
    WITH USER_MODE 
    LIMIT 1
];

// Merge duplicate accounts into main account
Database.MergeResult[] results = Database.merge(main, duplicates, false);

for (Database.MergeResult res : results) {
    if (res.isSuccess()) {
        // Get the main record ID from the result and validate it
        System.debug('Main record ID: ' + res.getId());
        Assert.areEqual(main.Id, res.getId());              
        
        // Get the IDs of the merged records and display them
        List mergedIds = res.getMergedRecordIds();
        System.debug('IDs of merged records: ' + mergedIds);                
        
        // Get the ID of the reparented record and validate that this is the contact ID.
        System.debug('Reparented record ID: ' + res.getUpdatedRelatedIds());

        // Make sure there are two IDs (contact ID and account contact relation ID); the order isn't defined
        Assert.areEqual(2, res.getUpdatedRelatedIds().size());    
        Boolean flag1 = false;
        Boolean flag2 = false;

        // Because the order of the IDs isn't defined, the ID can be at index 0 or 1 of the array         
        if (resultAcrel.Id == res.getUpdatedRelatedIds()[0] || resultAcrel.Id == res.getUpdatedRelatedIds()[1]) {
            flag1 = true;
        }
        
        if (c.Id == res.getUpdatedRelatedIds()[0] || c.Id == res.getUpdatedRelatedIds()[1]) {
            flag2 = true;
        }
            
        Assert.isTrue(flag1); 
        Assert.isTrue(flag2);  
            
    } else {
        for (Database.Error err : res.getErrors()) {
            // Write each error to the debug output
            System.debug(err.getMessage());
        }
    }
}
```

## Merge Considerations

When merging sObject records, consider these rules and guidelines:

-   Only leads, contacts, cases, and accounts can be merged. See [sObjects That Don’t Support DML Operations](atlas.en-us.apexcode.meta/apexcode/apex_dml_non_dml_objects.htm).
-   You can pass a main record and up to two additional sObject records to a single `merge` method.
-   Field values on the main record, including null and empty field values, always supersede the corresponding field values on the records to be merged. Therefore, if a field value on the main record is empty, the resulting field value remains empty after the `merge` operation regardless of the field value on the duplicate record. To preserve a field value from a duplicate record, manually set this field value on the main record before performing the merge.
-   External ID fields can’t be used with `merge`.
