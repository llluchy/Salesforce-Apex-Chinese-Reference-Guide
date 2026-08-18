---
doc_id: "apex_classes_keywords_sharing"
---

# Use the with sharing, without sharing, and inherited sharing Keywords

Use the `with sharing` or `without sharing` keywords on a class to specify whether sharing rules are enforced. Use the `inherited sharing` keyword on a class to run the class in the sharing mode of the calling class. The default sharing mode is `with sharing`.

:::tip Tip
For information about how to create sharing rules, see [Sharing Rules](https://help.salesforce.com/s/articleView?id=platform.security_about_sharing_rules.htm&type=5&language=en_US) in Salesforce
      Help.
:::

## With Sharing

Use the `with sharing` keyword when declaring a class to enforce sharing rules of the current user. Salesforce recommends that you explicitly set this keyword to ensure that Apex code runs in the current user context. If a class doesn’t have an explicit sharing declaration, then it defaults to `with sharing`.

```apex
public with sharing class sharingClass {
        
        // Code here
        
        }
```

## Without Sharing

Use the `without sharing` keyword when declaring a class to ensure that the sharing rules for the current user aren’t enforced. For example, you can explicitly allow a class to ignore sharing rules even when it’s called from another class that does enforce sharing rules.

```apex
public without sharing class noSharing {
        
        // Code here
        
        }
```

 

:::tip Important
If you declare a class as `without
          sharing`, the class can access records that the current user otherwise doesn’t
        have permission to access. Salesforce recommends that you use `without sharing` only for classes that require system-level access.
:::

## Inherited Sharing

Use the `inherited sharing` keyword when declaring a class to enforce the sharing rules of the calling class. Using `inherited sharing` is an advanced technique to determine the sharing mode at run time and design Apex classes that can run in either `with sharing` or `without sharing` mode.

:::tip Important
Because the sharing mode is determined at run time, you must take
        extreme care to ensure that your Apex code is secure to run in both `with sharing` and `without
          sharing` modes.
:::

Using `inherited sharing`, along with other appropriate security checks, helps your code pass AppExchange security review and ensures that your privileged Apex code isn’t used in unexpected or insecure ways. An Apex class with `inherited sharing` runs in `with sharing` mode if used as:

-   An Aura component controller
-   An `@AuraEnabled` method called from a Lightning web component
-   A Visualforce controller
-   An Apex REST service
-   An asynchronous Apex class
-   Any other entry point to an Apex transaction

A class declared as `inherited sharing` runs as `without sharing` only when explicitly called from an already established `without sharing` context.

## Omitted Sharing

Apex without an explicit sharing declaration runs as `with sharing` by default. However, if an Apex class without an explicit sharing declaration extends from a parent class, it adopts the same sharing mode as the parent class.

:::tip Important
We recommend that you always include an explicit sharing declaration on Apex classes that
          include database operations or SOQL queries. This practice promotes intentionality and
          increases code maintainability.

        Identifying the sharing mode for Apex classes compiled with API version 66.0 or earlier
          is challenging without an explicit declaration. Determining the sharing mode in these
          cases requires a thorough investigation of the class inheritance tree, the caller
          sequence, and the class’s behavior. See the Versioned Behavior Changes section.
:::

## Implementation in Apex Triggers

Apex triggers can’t have an explicit sharing declaration. Triggers always run implicitly in a `without sharing` context, which means that they bypass the sharing rules of the current user.

However, database operations within trigger bodies, including SOQL queries, SOSL queries, DML statements, and Database methods, run in user mode unless system mode is explicitly specified. User mode overrides the trigger’s `without sharing` context and effectively enforces a `with sharing` context in the trigger body.

The `AccountUpdateTrigger` example demonstrates this distinction.

```apex
// API version 67.0 and later

// The trigger itself runs as without sharing (all records accessible by default)
trigger AccountUpdateTrigger on Account (after update) {

    // This SOQL query doesn't specify an access mode, so it defaults to WITH USER_MODE.
    // Object- and field-level permissions are enforced.
    // User mode reapplies the record sharing rules of the current user,
    // effectively overriding trigger's own without sharing context.
    List contactsAccessibleByCurrentUser = [SELECT Id, Name, AccountId 
                                                     FROM Contact 
                                                     WHERE AccountId = :Trigger.newMap.keySet()];

    // This SOQL query explicitly includes a WITH SYSTEM_MODE clause.
    // Object- and field-level are bypassed.
    // Record sharing remains governed by the trigger's own without sharing context, 
    // so all records are visible regardless of the user running the query    

List allRelatedContacts = [SELECT Id, Name, AccountId 
                                    FROM Contact 
                                    WHERE AccountId = :Trigger.newMap.keySet() 
                                    WITH SYSTEM_MODE ];

    // Further processing with the related Contacts

}
```

To eliminate ambiguity, we recommend that you set explicit access mode on all database operations in your trigger and handler classes. When possible, delegate all business logic to trigger handlers.

## Other Implementation Details

-   Sharing declarations don’t enforce object-level access or field-level security. See [Enforcing Object and Field Permissions](atlas.en-us.apexcode.meta/apexcode/apex_classes_perms_enforcing.htm "Apex generally runs in user context by default, meaning that the current user’s permissions and field-level security (FLS) are enforced during code execution. To ignore the FLS and object permissions of the current user, you must explicitly set a database operation or query to run in system mode. For fine-grained control, you can check the current user’s permissions for an object or a field, and then perform a specific DML operation or a query only if the user has sufficient permissions.").
-   Except for methods in an `inherited sharing` class, the sharing mode of a method is determined by where the method is defined, not where it’s called from. For example, a method defined in a `with sharing` class still enforces sharing rules even if it’s called from a `without sharing` class. Exceptions also apply to methods for classes compiled with API version 66.0 or earlier. See the Versioned Behavior Changes section.
-   You can declare a sharing mode on both inner classes and outer classes. Inner classes don’t adopt the sharing mode of the container class. Otherwise, the sharing setting applies to all code contained in the class, including initialization code, constructors, and methods.
-   If an Apex class without an explicit sharing declaration extends from a parent class, then it adopts the same sharing mode as the parent class.
-   [Asynchronous Apex](atlas.en-us.apexcode.meta/apexcode/apex_async_overview.htm "Apex offers multiple ways for running your Apex code asynchronously. Choose the asynchronous Apex feature that best suits your needs.") classes defined with `inherited sharing` always run in `with sharing` mode for asynchronous operations. Each asynchronous operation is a new entry point and the sharing mode isn’t serialized.
-   Anonymous Apex and Connect in Apex always run in `with sharing` mode.

## Best Practices

We recommend that you always include an explicit sharing declaration on Apex classes that include database operations or SOQL queries. This practice promotes intentionality and increases code maintainability.

| Sharing Mode | When to Use |
| --- | --- |
| `with sharing` | Use this mode as the default unless your use case requires otherwise. |
| `without sharing` | 
Use this mode with caution. Make sure that you don’t inadvertently expose sensitive data that’s normally hidden by sharing rules. This sharing mode is best used to grant targeted elevation of sharing privileges to the current user.

For example, use `without sharing` to allow community users to read records to which they wouldn’t otherwise have access.

 |
| `inherited sharing` | Use this mode for service classes that must be flexible and support use cases with different sharing modes. |

## Versioned Behavior Changes

In API version 67.0 and later, classes without an explicit sharing declaration run in `with sharing` mode.

In API version 66.0 and earlier, the sharing mode of classes without an explicit sharing declaration is determined according these factors.

-   If the class is part of an inheritance chain, and any class in that chain is saved as API version 67.0 and later, the class runs in `with sharing` mode.
-   If the class is an Aura controller or an `@AuraEnabled` method called from a Lightning web component, the class runs in `with sharing` mode.
-   Otherwise, the class runs in `without sharing` mode.
-   If the class isn’t an Apex entry point, its sharing mode is defined by the sharing mode of the calling class.

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_transient.htm)
