---
doc_id: "apex_classes_perms_enforcing"
---

# Enforce Object and Field Permissions

Apex generally runs in user context by default, meaning that the current user’s permissions and field-level security (FLS) are enforced during code execution. To ignore the FLS and object permissions of the current user, you must explicitly set a database operation or query to run in system mode. For fine-grained control, you can check the current user’s permissions for an object or a field, and then perform a specific DML operation or a query only if the user has sufficient permissions.

## Set an Access Mode for Database Operations

You can run database operations and SOQL queries in either user mode or system mode. See [Set an Access Mode for Database Operations](atlas.en-us.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm "Apex database operations run in user mode by default, which means that they apply the sharing rules, field-level security (FLS), and object permissions of the running user. Database operations only ignore FLS and object permissions if you explicitly set them to run in system mode.").

## Check Field-Level Permissions

You can also enforce object-level and field-level permissions in your code by explicitly calling the access control methods of the [Schema.DescribeSObjectResult](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_sobject_describe.htm) and the [Schema.DescribeFieldResult](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_fields_describe.htm) classes. See [Enforce Security with Field and SObject Describe Methods](atlas.en-us.apexcode.meta/apexcode/apex_classes_field_object_describe.htm "At the most granular level, you can enforce object-level and field-level permissions in your code by explicitly calling the Schema.DescribeSObjectResult and the Schema.DescribeFieldResult methods to check the current user’s access permission levels.").

## Considerations

-   Object-level and field-level permissions are distinct from sharing rules, which enforce specific record access. They can coexist. If sharing rules are defined in Salesforce, you can enforce them at the class level by declaring the class with the `with sharing` keyword. See [Use the with sharing, without sharing, and inherited sharing Keywords](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm "Use the with sharing or without sharing keywords on a class to specify whether sharing rules are enforced. Use the inherited sharing keyword on a class to run the class in the sharing mode of the calling class. The default sharing mode is with sharing."). If you call the [Schema.DescribeSObjectResult](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_sobject_describe.htm) and [Schema.DescribeFieldResult](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_fields_describe.htm) access control methods, the verification of object and field-level permissions is performed in addition to the sharing rules that are in effect. Sometimes, the access level granted by a sharing rule can conflict with an object-level or field-level permission. In that case, object-level and field-level permissions take precedence over sharing rules.
-   Orgs with Experience Cloud sites enabled provide various settings to hide a user’s personal information from other users. See [Manage Personal User Information Visibility](https://help.salesforce.com/s/articleView?id=platform.users_manage_personal_info_visibility.htm&type=5&language=en_US) and [Share Personal Contact Information Within Experience Cloud Sites](https://help.salesforce.com/articleView?id=networks_contact_info_visibility.htm&language=en_US). These settings aren’t enforced in Apex, even with security features such as the `WITH USER_MODE` clause or the `stripInaccessible` method. To hide specific fields on the User object in Apex, follow the example code outlined in [Comply with a User’s Personal Information Visibility Settings](https://developer.salesforce.com/docs/atlas.en-us.262.0.communities_dev.meta/communities_dev/communities_dev_pii_settings.htm "HTML (New Window)").
-   Automated Process users can’t perform Object and FLS checks in custom code unless appropriate permission sets are explicitly applied to those users.

## Versioned Behavior Changes

In API version 67.0 and later, Apex runs in user context by default, meaning that the current user’s permissions and field-level security (FLS) are enforced during code execution. In API version 66.0 and earlier, system mode is the default.

## See Also

- [Set an Access Mode for Database Operations](atlas.en-us.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm)
- [Enforce Security with the stripInaccessible Method](atlas.en-us.apexcode.meta/apexcode/apex_classes_with_security_stripInaccessible.htm)
- [Enforce Security with Field and SObject Describe Methods](atlas.en-us.apexcode.meta/apexcode/apex_classes_field_object_describe.htm)
- [Salesforce Help: Set Up Your Users’ Object, User, and Field
                            Permissions](https://help.salesforce.com/s/articleView?id=platform.security_data_access_mgmt.htm&amp;type=5&amp;language=en_US)
