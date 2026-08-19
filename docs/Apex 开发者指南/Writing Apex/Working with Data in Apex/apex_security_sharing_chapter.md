---
doc_id: "apex_security_sharing_chapter"
---

# Apex Security and Sharing Model

The Apex security model includes record-level, field-level, and object-level security mechanisms. You can control record-level security modes by using the `with sharing`, `without sharing`, and `inherited sharing` keywords on classes. Apex runs in user mode by default, which means that user permissions on objects and field-level security are respected. A user cannot run code that tries to access fields or objects that are hidden from the user. Other security mechanisms include the `Security.stripInaccessible()` method, and Field and SObject describe methods.

## Versioned Behavior Changes

In API version 67.0 and later, you can’t use the `WITH SECURITY_ENFORCED` clause in SOQL `SELECT` queries in Apex code. Instead, use the `WITH USER_MODE` clause.

In API version 67.0 and later, Apex runs in user context by default, meaning that the current user’s permissions and field-level security (FLS) are enforced during code execution. In API version 66.0 and earlier, system mode is the default.

In API version 67.0 and later, classes without an explicit sharing declaration run in `with sharing` mode. In API version 66.0 and earlier, the sharing mode of classes without an explicit sharing declaration is determined according these factors.

-   If the class is part of an inheritance chain, and any class in that chain is saved as API version 67.0 and later, the class runs in `with sharing` mode.
-   If the class is an Aura controller or an `@AuraEnabled` method called from a Lightning web component, the class runs in `with sharing` mode.
-   If the class isn’t an Apex entry point, its sharing mode is defined by the sharing mode of the calling class.
-   Otherwise, the class runs in `without sharing` mode.

## See Also

- [Enforce Sharing Rules](atlas.en-us.apexcode.meta/apexcode/apex_security_sharing_rules.htm)
- [Enforce Object and Field Permissions](atlas.en-us.apexcode.meta/apexcode/apex_classes_perms_enforcing.htm)
- [Class Security](atlas.en-us.apexcode.meta/apexcode/apex_classes_security.htm)
- [Understanding Apex Managed Sharing](atlas.en-us.apexcode.meta/apexcode/apex_bulk_sharing.htm)
- [Security Tips for Apex and Visualforce Development](atlas.en-us.apexcode.meta/apexcode/pages_security_tips_intro.htm)
- [Enforce Security with Field and SObject Describe Methods](atlas.en-us.apexcode.meta/apexcode/apex_classes_field_object_describe.htm)

-   [*Apex Reference Guide*: stripInaccessible()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_System_Security.htm#apex_System_Security_methods)
