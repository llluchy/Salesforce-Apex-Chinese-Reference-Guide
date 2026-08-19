---
doc_id: "apex_classes_defining"
---

# Apex Class Definition

In Apex, you can define top-level classes (also called outer classes) as well as inner classes, that is, a class defined within another class. You can only have inner classes one level deep. For example:

```apex
public with sharing class myOuterClass {
    // Additional myOuterClass code here
    public with sharing class myInnerClass {
        // myInnerClass code here
    }
}
```

To define a class, specify the following:

1.  Access modifiers:
    -   You must use one of the access modifiers (such as `public` or `global`) in the declaration of a top-level class.
    -   You don’t have to use an access modifier in the declaration of an inner class.
2.  Optional definition modifiers (such as `virtual`, `abstract`, and so on)
3.  Required: The keyword `class` followed by the name of the class
4.  Optional extensions or implementations or both

:::tip Note
Avoid using standard object names for class names. Doing so
causes unexpected results. For a list of standard objects, see [Object Reference for Salesforce](https://developer.salesforce.com/docs/atlas.en-us.262.0.object_reference.meta/object_reference/).
:::

Use the following syntax for defining classes:

```apex
private | public | global 
[virtual | abstract | protected | with sharing | without sharing | with inherited sharing] 
class ClassName [implements InterfaceNameList] [extends ClassName] 
{ 
// The body of the class
}
```

-   The `private` access modifier declares that this class is only known locally, that is, only by this section of code. This is the default access for inner classes—that is, if you don't specify an access modifier for an inner class, it’s considered `private`. This keyword can only be used with inner classes (or with top-level test classes marked with the `@IsTest` annotation).
-   The `public` access modifier declares that this class is visible in your application or namespace.
-   The `global` access modifier declares that this class is known by all Apex code everywhere. All classes containing methods defined with the `webservice` keyword must be declared as `global`. If a method or inner class is declared as `global`, the outer, top-level class must also be defined as `global`.
-   The `with sharing` and `without sharing` keywords specify the sharing mode for this class. For more information, see [Use the with sharing, without sharing, and inherited sharing Keywords](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm "Use the with sharing or without sharing keywords on a class to specify whether sharing rules are enforced. Use the inherited sharing keyword on a class to run the class in the sharing mode of the calling class. The default sharing mode is with sharing.").
-   The `virtual` definition modifier declares that this class allows extension and overrides. You can’t override a method with the `override` keyword unless the class has been defined as `virtual`.
-   The `abstract` definition modifier declares that this class contains abstract methods, that is, methods that only have their signature declared and no body defined.

:::tip Note
- You can’t add an abstract method to a global class after the class has been uploaded in a
                        Managed - Released package version. 

- If the class in the Managed - Released  package is virtual, the method that you can add to it
must also be virtual and must have an implementation.

- You can’t override a public or protected virtual method of a global class of an installed
                        managed package.

For more information about managed packages, see [Managed Package Types](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_dev.htm).
:::

A class can implement multiple interfaces, but only extend one existing class. This restriction means that Apex doesn’t support multiple inheritance. The interface names in the list are separated by commas. For more information about interfaces, see [Interfaces](atlas.en-us.apexcode.meta/apexcode/apex_classes_interfaces.htm "An interface is like a class in which none of the methods have been implemented—the method signatures are there, but the body of each method is empty. To use an interface, another class must implement it by providing a body for all of the methods contained in the interface.").

For more information about method and variable access modifiers, see [Access Modifiers](atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm).

## Versioned Behavior Changes

In API version 65.0 and later, an abstract or override method requires a `protected`, `public`, or `global` access modifier. If one of these access modifiers isn’t explicitly included in the method declaration, then method access defaults to `private`. Private access is invalid for these method types because the implementing class can’t access the abstract method. Therefore, if you attempt to declare an abstract or override method without an allowed access modifier, you get the compilation error `Abstract methods require at least one of the following: global, public, protected`.

In API version 61.0 and later, private methods are no longer overridden by an instance method with the same signature in a subclass. This change is versioned, so to prevent the override, update your abstract or virtual classes that contain private methods to API version 61.0 or later. In API version 60.0 and earlier, if a subclass declares an instance method with the same signature as a private method in one of its superclasses, the subclass method overrides the private method.

## See Also

- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_declaring_variables.htm)

#### See Also

-   [Documentation Typographical Conventions](atlas.en-us.apexcode.meta/apexcode/apex_qs_conventions.htm "Apex and Visualforce documentation uses these typographical conventions.")
    
-   [*Salesforce Help*: Manage Apex Classes](https://help.salesforce.com/articleView?id=code_manage_packages.htm&language=en_US "Salesforce Help: Manage Apex Classes - HTML (New Window)")
    
-   [*Salesforce Help*: Developer Console Functionality](https://help.salesforce.com/articleView?id=code_system_log.htm&language=en_US "Salesforce Help: Developer Console Functionality - HTML (New Window)")
