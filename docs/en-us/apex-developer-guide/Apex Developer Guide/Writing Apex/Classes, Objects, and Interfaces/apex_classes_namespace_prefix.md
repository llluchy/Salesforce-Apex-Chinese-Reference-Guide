---
doc_id: "apex_classes_namespace_prefix"
---

# Namespace Prefix

The Salesforce application supports the use of **namespace prefixes**. Namespace prefixes are used in managed AppExchange packages to differentiate custom object and field names from names used by other organizations.

:::tip Important
When creating a namespace, use something that’s useful and
            informative to users. However, don’t name a namespace after a person (for example, by
            using a person's name, nickname, or private information). Once namespaces are assigned,
            they cannot be changed.
:::

After a developer registers a globally unique namespace prefix and registers it with AppExchange registry, external references to custom object and field names in the developer's managed packages take on the following long format:

```apex
namespace_prefix__obj_or_field_name__c
```

These fully qualified names can be onerous to update in working SOQL or SOSL statements, and Apex once a class is marked as “managed”. Therefore, Apex supports a default namespace for schema names. When looking at identifiers, the parser assumes that the namespace of the current object is the namespace of all other objects and fields unless otherwise specified. Therefore, a stored class must refer to custom object and field names directly (using `obj_or_field_name__c`) for those objects that are defined within its same application namespace.

:::tip Tip
Only use namespace prefixes when referring to custom objects
            and fields in managed packages that have been installed to your organization from the
            AppExchange.
:::

## Using Namespaces When Invoking Package Methods

To invoke a method that is defined in a managed package, Apex allows fully qualified identifiers of the form:

```apex
namespace_prefix.class.method(args)
```

## Versioned Behavior Changes

In API version 34.0 and later, Schema.DescribeSObjectResult on a custom SObjectType includes map keys prefixed with the namespace, even if the namespace is that of currently executing code. If you work with multiple namespaces and generate runtime describe data, make sure that your code accesses keys correctly using the namespace prefix.

## See Also

- [Using the System Namespace](atlas.en-us.apexcode.meta/apexcode/apex_classes_namespaces_and_invoking_methods.htm)
- [Using the Schema Namespace](atlas.en-us.apexcode.meta/apexcode/apex_classes_schema_namespace_using.htm)
- [Namespace, Class, and Variable Name Precedence](atlas.en-us.apexcode.meta/apexcode/apex_classes_namespace_precedence.htm)
- [Type Resolution and System Namespace for Types](atlas.en-us.apexcode.meta/apexcode/apex_classes_namespace_type_resolution.htm)
- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_creating.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_version_settings_intro.htm)
