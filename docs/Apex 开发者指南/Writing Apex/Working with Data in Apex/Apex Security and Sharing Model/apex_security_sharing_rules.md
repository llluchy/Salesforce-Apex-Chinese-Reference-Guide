---
doc_id: "apex_security_sharing_rules"
---

# Enforce Sharing Rules

In Apex, sharing rules are always enforced by default. Use the with sharing, without sharing, and inherited sharing keywords to control record-level security. If you don't want sharing rules to be enforced, then you must declare a class with the `without sharing` keyword.

:::tip Note
Apex code that is executed with the `executeAnonymous` call and Connect in Apex always execute
        using the sharing rules of the current user. See [Anonymous Blocks](atlas.en-us.apexcode.meta/apexcode/apex_anonymous_block.htm).
:::

Sharing rules are distinct from, and can co-exist with object-level and field-level permissions. While `with sharing` is the default sharing mode, Salesforce recommends that you use keyword declarations on all your classes to make your code easier to maintain. For more information, see [Use the with sharing, without sharing, and inherited sharing Keywords](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm "Use the with sharing or without sharing keywords on a class to specify whether sharing rules are enforced. Use the inherited sharing keyword on a class to run the class in the sharing mode of the calling class. The default sharing mode is with sharing.").

:::tip Note
Using the `with sharing` keyword doesn’t enforce
      the user’s permissions and field-level security.
:::

This example has two classes, the first class (`CWith`) enforces sharing rules while the second class (`CWithout`) doesn’t. The `CWithout` class calls a method from the first, which runs with sharing rules enforced. The `CWithout` class contains an inner class, in which code executes under the same sharing context as the caller. It also contains a class that extends it, which inherits its without sharing setting.

```apex
public with sharing class CWith {
  // All code in this class operates with enforced sharing rules.

  Account a = [SELECT . . . ];

  public static void m() { . . . }
  
  static {
    . . .
  }

  {
    . . .
  }

  public void c() {
    . . .
  } 
}

public without sharing class CWithout {
  // All code in this class ignores sharing rules and operates 
  // as if the context user has the Modify All Data permission.
  Account a = [SELECT . . . ];
  . . .

  public static void m() {  
     . . . 

    // This call into CWith operates with enforced sharing rules
    // for the context user. When the call finishes, the code execution 
    // returns to without sharing mode.
    CWith.m();
  }

  public class CInner {
    // All code in this class executes with the same sharing context
    // as the code that calls it. 
    // Inner classes are separate from outer classes.
    . . .

    // Again, this call into CWith operates with enforced sharing rules
    // for the context user, regardless of the class that initially called this inner class.
    // When the call finishes, the code execution returns to the sharing mode that was used to call this inner class.
    CWith.m();
  }

  public class CInnerWithOut extends CWithout {
    // All code in this class ignores sharing rules because
    // this class extends a parent class that ignores sharing rules.
  }
}
```

 

:::tip Warning
Because a class declared as `with
        sharing` can call a class declared as `without
        sharing`, you may still have to implement class-level security. In addition, all
      SOQL and SOSL queries that use Pricebook2 ignore the `with
        sharing` keyword. All price books are returned, regardless of the applied sharing
      rules.
:::

Enforcing the current user's sharing rules can impact:

-   SOQL and SOSL queries. A query can return fewer rows than it would operating in system context.
-   DML operations. An operation can fail because the current user doesn't have the correct permissions. For example, if the user specifies a foreign key value that exists in the organization, but which the current user doesn’t have access to, then the DML operation fails.

## Versioned Behavior Changes

In API version 67.0 and later, classes without an explicit sharing declaration are run in the current user context. In API version 66.0 and earlier, for classes without an explicit sharing declaration, the current sharing rule remains in effect.

## See Also

- [Use the with sharing, without sharing, and inherited sharing Keywords](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm)

-   [*Salesforce Help*: Sharing Rules](https://help.salesforce.com/s/articleView?id=platform.security_about_sharing_rules.htm&type=5&language=en_US)
