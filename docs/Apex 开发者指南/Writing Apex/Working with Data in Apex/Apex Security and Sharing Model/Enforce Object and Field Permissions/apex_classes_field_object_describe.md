---
doc_id: "apex_classes_field_object_describe"
---

# Enforce Security with Field and SObject Describe Methods

At the most granular level, you can enforce object-level and field-level permissions in your code by explicitly calling the `Schema.DescribeSObjectResult` and the `Schema.DescribeFieldResult` methods to check the current user’s access permission levels.

By using the [Schema.DescribeSObjectResult](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_sobject_describe.htm) methods and the [Schema.DescribeFieldResult](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_fields_describe.htm) methods, you can verify that the current user has the necessary permissions and perform a specific DML operation or a query only if the user has sufficient permissions.

For example, you can call the `isAccessible`, `isCreateable`, or `isUpdateable` methods of `Schema.DescribeSObjectResult` to verify whether the current user has read, create, or update access to an sObject, respectively. Similarly, `Schema.DescribeFieldResult` exposes these access control methods that you can call to check the current user’s read, create, or update access for a field. In addition, you can call the `isDeletable` method provided by `Schema.DescribeSObjectResult` to check if the current user has permission to delete a specific sObject.

These examples call the access control methods.

To check the field-level update permission of the contact's email field before updating it:

```apex
if (Schema.sObjectType.Contact.fields.Email.isUpdateable()) {
   // Update contact phone number
}
```

To check the field-level create permission of the contact's email field before creating a new contact:

```apex
if (Schema.sObjectType.Contact.fields.Email.isCreateable()) {
   // Create new contact
}
```

To check the field-level read permission of the contact's email field before querying for this field:

```apex
if (Schema.sObjectType.Contact.fields.Email.isAccessible()) {
   Contact c = [SELECT Email FROM Contact WHERE Id= :Id];
}
```

To check the object-level permission for the contact before deleting the contact:

```apex
if (Schema.sObjectType.Contact.isDeletable()) {
   // Delete contact
}
```
