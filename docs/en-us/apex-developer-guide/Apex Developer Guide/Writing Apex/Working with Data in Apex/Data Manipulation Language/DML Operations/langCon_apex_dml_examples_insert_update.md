---
doc_id: "langCon_apex_dml_examples_insert_update"
---

# Inserting and Updating Records

Using DML, you can insert new records and commit them to the database. Similarly, you can update the field values of existing records.

:::tip Important
Where possible, we changed noninclusive terms to align with our
            company value of Equality. We maintained certain terms to avoid any effect on
            customer implementations.
:::

This example inserts three account records and updates an existing account record. First, three Account sObjects are created and added to a list. An insert statement bulk inserts the list of accounts as an argument. Then, the second account record is updated, the billing city is updated, and the update statement is called to persist the change in the database.

```apex
Account[] accts = new List();
for(Integer i=0;inew Account(Name='Acme' + i, 
                            BillingCity='San Francisco');
    accts.add(a);
}
Account accountToUpdate;
try {
    insert accts;        
    
    // Update account Acme2.
    accountToUpdate = 
        [SELECT BillingCity FROM Account 
         WHERE Name='Acme2' AND BillingCity='San Francisco'
         LIMIT 1];
    // Update the billing city.
    accountToUpdate.BillingCity = 'New York';
    // Make the update call.
    update accountToUpdate;
} catch(DmlException e) {
    System.debug('An unexpected error has occurred: ' + e.getMessage());
}

// Verify that the billing city was updated to New York.
Account afterUpdate = 
    [SELECT BillingCity FROM Account WHERE Id=:accountToUpdate.Id];
System.assertEquals('New York', afterUpdate.BillingCity);
```

## Inserting Related Records

You can insert records related to existing records if a relationship has already been defined between the two objects, such as a lookup or master-detail relationship. A record is associated with a related record through a foreign key ID. For example, when inserting a new contact, you can specify the contact’s related account record by setting the value of the `AccountId` field.

This example adds a contact to an account (the related record) by setting the `AccountId` field on the contact. Contact and Account are linked through a lookup relationship.

```apex
try {
    Account acct = new Account(Name='SFDC Account');
    insert acct;

    // Once the account is inserted, the sObject will be 
    // populated with an ID.
    // Get this ID.
    ID acctID = acct.ID;

    // Add a contact to this account.
    Contact con = new Contact(
        FirstName='Joe',
        LastName='Smith',
        Phone='415.555.1212',
        AccountId=acctID);
    insert con;
} catch(DmlException e) {
    System.debug('An unexpected error has occurred: ' + e.getMessage());
}
```

## Updating Related Records

Fields on related records can't be updated with the same call to the DML operation and require a separate DML call. For example, if inserting a new contact, you can specify the contact's related account record by setting the value of the `AccountId` field. However, you can't change the account's name without updating the account itself with a separate DML call. Similarly, when updating a contact, if you also want to update the contact’s related account, you must make two DML calls. The following example updates a contact and its related account using two `update` statements.

```apex
try {
    // Query for the contact, which has been associated with an account.
    Contact queriedContact = [SELECT Account.Name 
                              FROM Contact 
                              WHERE FirstName = 'Joe' AND LastName='Smith'
                              LIMIT 1];

    // Update the contact's phone number
    queriedContact.Phone = '415.555.1213';

    // Update the related account industry
    queriedContact.Account.Industry = 'Technology';

    // Make two separate calls 
    // 1. This call is to update the contact's phone.
    update queriedContact;
    // 2. This call is to update the related account's Industry field.
    update queriedContact.Account; 
} catch(Exception e) {
    System.debug('An unexpected error has occurred: ' + e.getMessage());
}
```

## See Also

- [Relating Records by Using an External ID](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_nested_object.htm)
- [Creating Parent and Child Records in a Single Statement Using Foreign Keys](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_foreign_keys.htm)
