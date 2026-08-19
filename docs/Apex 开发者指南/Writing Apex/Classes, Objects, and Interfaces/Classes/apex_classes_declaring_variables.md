---
doc_id: "apex_classes_declaring_variables"
---

# Class Variables

To declare a variable, specify the following:

-   Optional: Modifiers, such as `public` or `final`, as well as `static`.
-   Required: The data type of the variable, such as String or Boolean.
-   Required: The name of the variable.
-   Optional: The value of the variable.

Use the following syntax when defining a variable:

```apex
[public | private | protected | global] [final] [static] data_type variable_name 
[= value]
```

For example:

```apex
private static final Integer MY_INT; 
      private final Integer i = 1;
```

## Versioned Behavior Changes

In API version 50.0 and later, scope and accessibility rules are enforced on Apex variables, methods, inner classes, and interfaces that are annotated with `@namespaceAccessible`. For accessibility considerations, see [NamespaceAccessible Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm). For more information on namespace-based visibility, see [Namespace-Based Visibility for Apex Classes in Second-Generation Packages](https://developer.salesforce.com/docs/atlas.en-us.262.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_namespace_visibility.htm "HTML (New Window)").

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_defining.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_defining_methods.htm)
