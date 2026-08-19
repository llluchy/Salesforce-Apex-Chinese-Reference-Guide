---
doc_id: "apex_classes_enforce_usermode"
---

# Set an Access Mode for Database Operations

Apex database operations run in user mode by default, which means that they apply the sharing rules, field-level security (FLS), and object permissions of the running user. Database operations only ignore FLS and object permissions if you explicitly set them to run in system mode.

:::tip Note
If you set a database operation to user mode, the operation always respects the user’s
            sharing rules. However, if you set the operation to system mode, the sharing keyword on
            the calling class determines whether the operation respects the user’s record-level
            permissions. See [Use the with sharing, without sharing, and inherited sharing Keywords](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm).
:::

## Set an Access Mode for SOQL and SOSL Queries

To indicate an access mode for a SOQL or SOSL query, insert a `WITH USER_MODE` or `WITH SYSTEM_MODE` clause. This example specifies user mode in SOQL.

```apex
List acc = [SELECT Id FROM Account WITH USER_MODE];
```

In SOQL queries, user mode:

-   Supports polymorphic fields, such as as `Owner` and `Task.whatId`.
-   Processes all clauses in the SOQL `SELECT` statement including the `WHERE` clause.
-   Finds all FLS errors in your SOQL query.
-   Supports the `getInaccessibleFields()` method on QueryException to examine the full set of access errors.

## Set an Access Mode for DML Statements

To indicate an access mode for a DML statement, insert the `as user` or `as system` keywords between the DML operator and the object name. This example inserts a new account in user mode.

Account acc = new Account(Name='test'); insert as user acc;

:::tip Tip
If you run DML operations in user mode, you can use the `DMLException` method `getDmlFieldNames()` to obtain the fields with FLS errors.
:::

## Set an Access Mode for Database and Search Methods

The [`AccessLevel`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel) class represents the two modes in which Apex runs database operations. Use this class to define the mode as user mode or system mode.

An accessLevel parameter in Database and Search methods specifies whether the method runs in user mode (`AccessLevel.USER_MODE`) or system mode (`AccessLevel.SYSTEM_MODE`).

These DML and query operations support the accessLevel parameter.

-   [`Database.query`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_query_2) method. See [Dynamic SOQL](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_soql.htm "Dynamic SOQL refers to the creation of a SOQL string at run time with Apex code. Dynamic SOQL enables you to create more flexible applications. For example, you can create a search based on input from an end user or update records with varying field names.").
-   [`Database.getQueryLocator`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_getQueryLocator_3) methods
-   [`Database.countQuery`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_countQuery_2) method
-   [`Database.getCursor`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_getCursor_2) method
-   [`Database.getPaginationCursor`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_getPaginationCursor) method
-   [`Search.query`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_search.htm#apex_System_Search_query_2) method
-   [Database DML methods](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database.htm) (`insert`, `update`, `upsert`, `merge`, `delete`, `undelete`, and `convertLead`). Includes the `*Immediate` and `*Async` methods, such as `insertImmediate` and `deleteAsync`.

:::tip Tip
If you run Database DML methods with `AccessLevel.USER_MODE`, you can access errors via `SaveResult.getErrors().getFields()`.
:::

These Database methods require the accessLevel parameter.

-   [`Database.queryWithBinds`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_queryWithBinds).
-   [`Database.getQueryLocatorWithBinds`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_getQueryLocatorWithBinds)
-   [`Database.countQueryWithBinds`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_countQueryWithBinds)
-   [`Database.getCursorWithBinds`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_getCursorWithBinds)
-   [`Database.getPaginationCursorWithBinds`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_getPaginationCursorWithBinds)

## Use Permission Sets to Enforce Security in DML and Search Operations (Developer Preview)

In Developer Preview, you can specify a permission set that to augment the field-level and object-level security for database and search operations. Run the `AccessLevel.withPermissionSetId()` method with a specified permission set ID. Specific user mode DML operations that are performed with that `AccessLevel`, respect the permissions in the specified permission set, in addition to the running user’s permissions.

This example runs the `AccessLevel.withPermissionSetId()` method with the specified permission set and inserts a custom object.

```apex
@IsTest
public with sharing class ElevateUserModeOperations_Test {
  @IsTest
  static void objectCreatePermViaPermissionSet() {
    Profile p = [
      SELECT Id
      FROM Profile
      WHERE Name = 'Minimum Access - Salesforce'
    ];
    User u = new User(
      Alias = 'standt',
      Email = 'standarduser@testorg.com',
      EmailEncodingKey = 'UTF-8',
      LastName = 'Testing',
      LanguageLocaleKey = 'en_US',
      LocaleSidKey = 'en_US',
      ProfileId = p.Id,
      TimeZoneSidKey = 'America/Los_Angeles',
      UserName = 'standarduser' + DateTime.now().getTime() + '@testorg.com'
    );

    System.runAs(u) {
      try {
        Database.insert(new Account(name = 'foo'), AccessLevel.User_mode);
        Assert.fail();
      } catch (SecurityException ex) {
        Assert.isTrue(ex.getMessage().contains('Account'));
      }
      //Get ID of previously created permission set named 'AllowCreateToAccount'
      Id permissionSetId = [
        SELECT Id
        FROM PermissionSet
        WHERE Name = 'AllowCreateToAccount'
        LIMIT 1
      ]
      .Id;

      Database.insert(
        new Account(name = 'foo'),
        AccessLevel.User_mode.withPermissionSetId(permissionSetId)
      );

      // The elevated access level is not persisted to subsequent operations
      try {
        Database.insert(new Account(name = 'foo2'), AccessLevel.User_mode);
        Assert.fail();
      } catch (SecurityException ex) {
        Assert.isTrue(ex.getMessage().contains('Account'));
      }
    }
  }
}
```

:::tip Note
Checkmarx, the [AppExchange Security Review](https://developer.salesforce.com/docs/atlas.en-us.262.0.packagingGuide.meta/packagingGuide/security_review_partner_security_portal_scanners.htm) source code
                scanner, isn’t updated with this new Apex feature. Until it’s updated, Checkmarx can
                generate false positives for field or object-level security violations that require
                exception documentation.
:::

## Versioned Behavior Changes

In API version 67.0 and later, Apex runs in user context by default, meaning that the current user’s permissions and field-level security (FLS) are enforced during code execution. In API version 66.0 and earlier, system mode is the default.
