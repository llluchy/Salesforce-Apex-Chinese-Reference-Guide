---
doc_id: "apex_testing_tools_runas"
---

# Using the runAs Method

Generally, all Apex code runs in user mode, where the object-level and field-level permissions of the current user are enforced. With the System method `runAs`, you can write test methods that change the user context to an existing user or a new user. Then that user’s sharing rules and object-level and field-level permissions are enforced.

:::tip Note
The
            user’s
            sharing
            rules
            and
            object-level
            and
            field-level
            permissions
            are enforced within a `runAs` block, regardless
            of the sharing
            mode (`with sharing` or `without sharing`)
            of
            the
            test class.

         If
            a user-defined method is called in the `runAs`
            block, the sharing mode enforced is that of the class where the method is
            defined, not
            the test class.
:::

You can use `runAs` only in test methods. The original current user context is started again after all `runAs` test methods complete.

The `runAs` method ignores user license limits. You can create users with `runAs` even if your organization has no additional user licenses.

:::tip Note
Every call to `runAs` counts
         against the total number of DML statements issued in the process.
:::

In the following example, a new test user is created, then code is run as that user, with that user's record sharing access:

```apex
@IsTest
private with sharing class TestRunAs {
    @IsTest
    public static void testRunAs() {
        // Setup test data
        // Create a unique UserName
        String uniqueUserName = 'standarduser' + DateTime.now().getTime() + '@testorg.com';
        // This code runs as the system user
        Profile p = [SELECT Id FROM Profile WHERE Name='Standard User' WITH USER_MODE];
        User u = new User(Alias = 'standt', Email='standarduser@testorg.com',
        EmailEncodingKey='UTF-8', LastName='Testing', LanguageLocaleKey='en_US',
        LocaleSidKey='en_US', ProfileId = p.Id,
        TimeZoneSidKey='America/Los_Angeles',
         UserName=uniqueUserName);

        System.runAs(u) {
              // The following code runs as user 'u'
              System.debug('Current User: ' + UserInfo.getUserName());
              System.debug('Current Profile: ' + UserInfo.getProfileId());
          }
    }
}
```

You can nest more than one `runAs` method. For example:

```apex
@IsTest
private with sharing class TestRunAs2 {

    @IsTest
    public static void test2() {

      Profile p = [SELECT Id FROM Profile WHERE Name='Standard User' WITH USER_MODE];
      User u2 = new User(Alias = 'newUser', Email='newuser@testorg.com',
         EmailEncodingKey='UTF-8', LastName='Testing', LanguageLocaleKey='en_US',
         LocaleSidKey='en_US', ProfileId = p.Id,
         TimeZoneSidKey='America/Los_Angeles', UserName='newuser@testorg.com');

      System.runAs(u2) {
         // The following code runs as user u2.
         System.debug('Current User: ' + UserInfo.getUserName());
         System.debug('Current Profile: ' + UserInfo.getProfileId());

         // The following code runs as user u3.
         User u3 = [SELECT Id FROM User WHERE UserName='newuser@testorg.com' WITH USER_MODE];
         System.runAs(u3) {
            System.debug('Current User: ' + UserInfo.getUserName());
            System.debug('Current Profile: ' + UserInfo.getProfileId());
         }

         // Any additional code here would run as user u2.
      }
   }
}
```

## Other Uses of runAs

You can also use the `runAs` method to perform mixed DML operations in your test by enclosing the DML operations within the `runAs` block. In this way, you bypass the mixed DML error that is otherwise returned when inserting or updating setup objects together with other sObjects. See [sObjects That Cannot Be Used Together in DML Operations](atlas.en-us.apexcode.meta/apexcode/apex_dml_non_mix_sobjects.htm#apex_dml_non_mix_sobjects "DML operations on certain sObjects, sometimes referred to as setup objects, can’t be mixed with DML on non-setup sObjects in the same transaction. This restriction exists because some sObjects affect the user’s access to records in the org. You must insert or update these types of sObjects in a different transaction to prevent operations from happening with incorrect access-level permissions. For example, you can’t update an account and a user role in a single transaction.").

There’s another overload of the `runAs` method (`runAs(System.Version)`) that takes a package version as an argument. This method causes the code of a specific version of a managed package to be used. For information on using the `runAs` method and specifying a package version context, see [Testing Behavior in Package Versions](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_behavior_testing.htm "When you change the behavior in an Apex class or trigger for different package versions, it’s important to test that your code runs as expected in the different package versions. You can write test methods that change the package version context to a different package version by using the System.runAs method. You can only use System.runAs in a test method.").

## See Also

- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_testing_tools_start_stop_test.htm)

#### See Also

-   [Enforce Sharing Rules](atlas.en-us.apexcode.meta/apexcode/apex_security_sharing_rules.htm "In Apex, sharing rules are always enforced by default. Use the with sharing, without sharing, and inherited sharing keywords to control record-level security. If you don't want sharing rules to be enforced, then you must declare a class with the without sharing keyword.")
    
-   [Enforce Object and Field Permissions](atlas.en-us.apexcode.meta/apexcode/apex_classes_perms_enforcing.htm "Apex generally runs in user context by default, meaning that the current user’s permissions and field-level security (FLS) are enforced during code execution. To ignore the FLS and object permissions of the current user, you must explicitly set a database operation or query to run in system mode. For fine-grained control, you can check the current user’s permissions for an object or a field, and then perform a specific DML operation or a query only if the user has sufficient permissions.")
    
-   [*Apex Reference Guide*: System.runAs(userSObject)](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_runAs_2)
