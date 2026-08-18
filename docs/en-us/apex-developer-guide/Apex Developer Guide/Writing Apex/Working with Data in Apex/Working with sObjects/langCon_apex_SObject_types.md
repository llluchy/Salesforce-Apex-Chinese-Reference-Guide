---
doc_id: "langCon_apex_SObject_types"
---

# sObject Types

An sObject variable represents a row of data and can only be declared in Apex using SOAP API name of the object.

For example:

```apex
Account a = new Account();
MyCustomObject__c co = new MyCustomObject__c();
```

Similar to SOAP API, Apex allows the use of the generic sObject abstract type to represent any object. The sObject data type can be used in code that processes different types of sObjects.

The `new` operator still requires a concrete sObject type, so all instances are specific sObjects. For example:

```apex
sObject s = new Account();
```

You can also use casting between the generic sObject type and the specific sObject type. For example:

```apex
// Cast the generic variable s from the example above
// into a specific account and account variable a
Account a = (Account)s;
// The following generates a runtime error
Contact c = (Contact)s;
```

Because sObjects work like objects, you can also have the following:

```apex
Object obj = s;
// and
a = (Account)obj;
```

DML operations work on variables declared as the generic sObject data type as well as with regular sObjects.

sObject variables are initialized to `null`, but can be assigned a valid object reference with the `new` operator. For example:

```apex
Account a = new Account();
```

Developers can also specify initial field values with comma-separated `name = value` pairs when instantiating a new sObject. For example:

```apex
Account a = new Account(name = 'Acme', billingcity = 'San Francisco');
```

For information on accessing existing sObjects from the Lightning Platform database, see “SOQL and SOSL Queries” in the *SOQL and SOSL Reference*.

:::tip Note
The Lightning Platform assigns ID values automatically when an object record is
            initially inserted to the database for the first time. For more information see [Lists](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_lists.htm).
:::

## Custom Labels

Custom labels aren’t standard sObjects. You can’t create a new instance of a custom label. You can only access the value of a custom label using `system.label.label_name`. For example:

```apex
String errorMsg = System.Label.generic_error;
```

For more information on custom labels, see “Custom Labels” in Salesforce Help.
