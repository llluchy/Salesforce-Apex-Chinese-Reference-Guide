---
doc_id: "langCon_apex_dml_examples"
---

# How DML Works

## Single vs. Bulk DML Operations

You can perform DML operations either on a single sObject, or in bulk on a list of sObjects. Performing bulk DML operations is the recommended way because it helps avoid hitting governor limits, such as the DML limit of 150 statements per Apex transaction. This limit is in place to ensure fair access to shared resources in the Lightning Platform. Performing a DML operation on a list of sObjects counts as one DML statement, not as one statement for each sObject.

This example performs DML calls on single sObjects, which isn’t efficient.

The `for` loop iterates over contacts. For each contact, if the department field matches a certain value, it sets a new value for the Description field. If the list contains more than items, the 151st update returns an exception that can't be caught.

```apex
List conList = [Select Department , Description from Contact];
for(Contact badCon : conList) {
    if (badCon.Department == 'Finance') {
        badCon.Description = 'New description';
    }
    // Not a good practice since governor limits might be hit.
    update badCon;
}
```

This example is a modified version of the previous example that doesn't hit the governor limit. The DML operation is performed in bulk by calling `update` on a list of contacts. This code counts as one DML statement, which is far below the limit of 150.

```apex
// List to hold the new contacts to update.
List updatedList = new List();
List conList = [Select Department , Description from Contact];
for(Contact con : conList) {
    if (con.Department == 'Finance') {
        con.Description = 'New description';
        // Add updated contact sObject to the list.
        updatedList.add(con);
    }
}

// Call update on the list of contacts.
// This results in one DML call for the entire list.
update updatedList;
```

Another DML governor limit is the total number of rows that can be processed by DML operations in a single transaction, which is 10,000. All rows processed by all DML calls in the same transaction count incrementally toward this limit. For example, if you insert 100 contacts and update 50 contacts in the same transaction, your total DML processed rows are 150. You still have 9,850 rows left (10,000 - 150).

## System Context and Sharing Rules

Most DML operations execute in user context, which means that the current user's permissions, field-level security, organization-wide defaults, position in the role hierarchy, and sharing rules are enforced. See [Apex Security and Sharing Model](atlas.en-us.apexcode.meta/apexcode/apex_security_sharing_chapter.htm "The Apex security model includes record-level, field-level, and object-level security mechanisms. You can control record-level security modes by using the with sharing, without sharing, and inherited sharing keywords on classes. Apex runs in user mode by default, which means that user permissions on objects and field-level security are respected. A user cannot run code that tries to access fields or objects that are hidden from the user. Other security mechanisms include the Security.stripInaccessible() method, and Field and SObject describe methods.").

## Best Practices

With DML on SObjects, it’s best to construct new instances and only update the fields you wish to modify without querying other fields. If you query fields other than the fields you wish to update, you may revert queried field values that could have changed between the query and the DML.
