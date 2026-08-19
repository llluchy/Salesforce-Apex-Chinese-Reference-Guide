---
doc_id: "apex_set_sobject"
---

# Sets of Objects

Sets can contain sObjects among other types of elements.

Sets contain unique elements. Uniqueness of sObjects is determined by comparing the objects’ fields. For example, if you try to add two accounts with the same name to a set, with no other fields set, only one sObject is added to the set.

```apex
// Create two accounts, a1 and a2
Account a1 = new account(name='MyAccount');
Account a2 = new account(name='MyAccount');

// Add both accounts to the new set 
Set accountSet = new Set{a1, a2};

// Verify that the set only contains one item
System.assertEquals(accountSet.size(), 1);
```

If you add a description to one of the accounts, it is considered unique and both accounts are added to the set.

```apex
// Create two accounts, a1 and a2, and add a description to a2
Account a1 = new account(name='MyAccount');
Account a2 = new account(name='MyAccount', description='My test account');

// Add both accounts to the new set
Set accountSet = new Set{a1, a2};

// Verify that the set contains two items
System.assertEquals(accountSet.size(), 2);
```

:::tip Warning
If set elements are objects, and these objects
change after being added to the collection, they won’t be found
anymore when using, for example, the `contains` or `containsAll` methods, because of changed field values.
:::
