---
doc_id: "langCon_apex_SObjects_accessing_fields"
---

# Accessing SObject Fields

As in Java, SObject fields can be accessed or changed with simple dot notation. For example:

```apex
Account a = new Account();
a.Name = 'Acme';    // Access the account name field and assign it 'Acme'
```

System-generated fields, such as Created By or Last Modified Date, cannot be modified. If you try, the Apex runtime engine generates an error. Additionally, formula field values and values for other fields that are read-only for the context user cannot be changed.

If you use the generic SObject type instead of a specific object, such as Account, you can retrieve only the Id field using dot notation. You can set the Id field for Apex code saved using Salesforce API version 27.0 and later). Alternatively, you can use the generic SObject `put` and `get` methods. See [SObject Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_sobject.htm).

This example shows how you can access the Id field and operations that aren’t allowed on generic SObjects.

```plain
Account a = new Account(Name = 'Acme', BillingCity = 'San Francisco');
insert a;
sObject s = [SELECT Id, Name FROM Account WHERE Name = 'Acme' LIMIT 1];
// This is allowed
ID id = s.Id;
// The following line results in an error when you try to save
String x = s.Name;
// This line results in an error when you try to save using API version 26.0 or earlier
s.Id = [SELECT Id FROM Account WHERE Name = 'Acme' LIMIT 1].Id;
```

 

:::tip Note
If your organization has enabled person accounts, you have two different kinds of
      accounts: business accounts and person accounts. If your code creates a new account using
        `name`, a business account is created. If your code
      uses `LastName`, a person account is created.
:::

If you want to perform operations on an SObject, it is recommended that you first convert it into a specific object. For example:

```apex
Account a = new Account(Name = 'Acme', BillingCity = 'San Francisco');
insert a;
sObject s = [SELECT Id, Name FROM Account WHERE Name = 'Acme' LIMIT 1];
ID id = s.ID;
Account convertedAccount = (Account)s;
convertedAccount.name = 'Acme2';
update convertedAccount;
Contact sal = new Contact(FirstName = 'Sal', Account = convertedAccount);
```

The following example shows how you can use SOSL over a set of records to determine their object types. Once you have converted the generic SObject record into a Contact, Lead, or Account, you can modify its fields accordingly:

```apex
public class convertToCLA {
    List contacts = new List();
    List leads = new List();
    List accounts = new List();
 
    public void convertType(String phoneNumber) {
        List> results = [FIND :phoneNumber 
            IN Phone FIELDS 
            RETURNING Contact(Id, Phone, FirstName, LastName), 
            Lead(Id, Phone, FirstName, LastName), 
            Account(Id, Phone, Name)];
        List records = new List();
        records.addAll(results[0]); //add Contact results to our results super-set
        records.addAll(results[1]); //add Lead results
        records.addAll(results[2]); //add Account results
 
        if (!records.isEmpty()) { 
            for (Integer i = 0; i if (record.getSObjectType() == Contact.sObjectType) { 
                    contacts.add((Contact) record);
                } else if (record.getSObjectType() == Lead.sObjectType){ 
                    leads.add((Lead) record);
                } else if (record.getSObjectType() == Account.sObjectType) { 
                    accounts.add((Account) record); 
                }
            }
        }
    }
}
```

## Using SObject Fields

SObject fields can be initially set or not set (unset); unset fields are not the same as null or blank fields. When you perform a DML operation on an SObject, you can change a field that is set; you can’t change unset fields.

:::tip Note
To erase the current value of a field,  set the field to null.
:::

If an Apex method takes an SObject parameter, you can use the [System.isSet()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_isSet) method to identify the set fields. If you want to unset any fields to retain their values, first create an SObject instance. Then apply only the fields you want to be part of the DML operation.

This example code shows how SObject fields are identified as set or unset.

```apex
Contact nullFirst = new Contact(LastName='Codey', FirstName=null);
System.assertEquals(true, nullFirst.isSet('FirstName'), 'FirstName is set to a literal value, so it counts as set');
Contact unsetFirst = new Contact(LastName='Astro');
System.assertEquals(false, unsetFirst.isSet('FirstName'), ‘FirstName is not set’);
```

An expression with SObject fields of type Boolean evaluates to true only if the SObject field is true. If the field is false or null, the expression evaluates to false. This example code shows an expression that checks if the `IsActive` field of a Campaign object is null. Because this expression always evaluates to false, the code in the `if` statement is never executed.

```apex
Campaign cObj= new Campaign(); 
...
   if (cObj.IsActive == null) {
  ... // IsActive is evaluated to false and this code block is not executed.
   }
```
