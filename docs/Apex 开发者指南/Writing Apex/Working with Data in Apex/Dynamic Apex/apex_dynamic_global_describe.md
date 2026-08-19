---
doc_id: "apex_dynamic_global_describe"
---

# Accessing All sObjects

Use the Schema `getGlobalDescribe` method to return a map that represents the relationship between all sObject names (keys) to sObject tokens (values). For example:

```apex
MapString, Schema.SObjectType> gd = Schema.getGlobalDescribe();
```

The map has the following characteristics:

-   It is dynamic, that is, it is generated at runtime on the sObjects currently available for the organization, based on permissions.
-   The sObject names are case insensitive.
-   The keys are prefixed with the namespace, if any.\*
-   The keys reflect whether the sObject is a custom object.

\* Starting with Apex saved using Salesforce API version 28.0, the keys in the map that `getGlobalDescribe` returns are always prefixed with the namespace, if any, of the code in which it is running. For example, if the code block that makes the `getGlobalDescribe` call is in namespace NS1, and a custom object named MyObject\_\_c is in the same namespace, the key returned is `NS1__MyObject__c`. For Apex saved using earlier API versions, the key contains the namespace only if the namespace of the code block and the namespace of the sObject are different. For example, if the code block that generates the map is in namespace N1, and an sObject is also in N1, the key in the map is represented as `MyObject__c`. However, if the code block is in namespace N1, and the sObject is in namespace N2, the key is `N2__MyObject__c`.

Standard sObjects have no namespace prefix.

:::tip Note
If the `getGlobalDescribe` method is called from an installed managed package, it returns sObject
names and tokens for Chatter sObjects, such as NewsFeed and UserProfileFeed,
even if Chatter is not enabled in the installing organization. This
is not true if the `getGlobalDescribe` method is called from a class not within an installed managed package.
:::

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describeTabs.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_data_categories.htm)
