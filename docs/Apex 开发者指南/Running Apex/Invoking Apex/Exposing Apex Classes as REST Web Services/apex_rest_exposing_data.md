---
doc_id: "apex_rest_exposing_data"
---

# Exposing Data with Apex REST Web Service Methods

Custom Apex REST web service methods run in user mode by default. In user mode, the current user’s object permissions, field-level security, and sharing rules are enforced.

To bypass object or field-level security while using SOQL SELECT statements in Apex, you must use the [`WITH SYSTEM_MODE`](atlas.en-us.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm "Apex database operations run in user mode by default, which means that they apply the sharing rules, field-level security (FLS), and object permissions of the running user. Database operations only ignore FLS and object permissions if you explicitly set them to run in system mode.") clause.

You can also use the appropriate object or field describe result methods to check the current user’s access level on the objects and fields that the Apex REST API method is accessing. See [DescribeSObjectResult Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_sobject_describe.htm) and [DescribeFieldResult Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_fields_describe.htm).

Sharing rules, record-level access are also enforced by default. To bypass sharing rules for Apex REST API methods, you must explicitly declare the class that contains these methods with the `without sharing` keyword. See [Using the `with sharing` or `without sharing` Keywords](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm "Use the with sharing or without sharing keywords on a class to specify whether sharing rules are enforced. Use the inherited sharing keyword on a class to run the class in the sharing mode of the calling class. The default sharing mode is with sharing.").

## Versioned Behavior Changes

In API version 67.0 and later, Apex runs in user context by default, which means that the current user’s object permissions and field-level security (FLS) are enforced during code execution. In API version 66.0 and earlier, system mode is the default, which means that the current user’s object permissions and FLS settings are ignored.

In API version 67.0 and later, classes without an explicit sharing declaration run in `with sharing` mode. In API version 66.0 and earlier, the default sharing mode of classes without an explicit sharing declaration is `without sharing`.

## See Also

- [Apex Security and Sharing Model](atlas.en-us.apexcode.meta/apexcode/apex_security_sharing_chapter.htm)
