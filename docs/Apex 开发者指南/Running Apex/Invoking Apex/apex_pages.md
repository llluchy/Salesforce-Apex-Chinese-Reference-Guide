---
doc_id: "apex_pages"
---

# Visualforce Classes

In addition to giving developers the ability to add business logic to Salesforce system events such as button clicks and related record updates, Apex can also be used to provide custom logic for Visualforce pages through custom Visualforce controllers and controller extensions.

-   A custom controller is a class written in Apex that implements all of a page's logic, without leveraging a standard controller. If you use a custom controller, you can define new navigation elements or behaviors, but you must also reimplement any functionality that was already provided in a standard controller.
    
    Like other Apex classes, both standard and custom controllers execute entirely in user mode, in which the object and field-level permissions of the current user are enforced.
    
-   A controller extension is a class written in Apex that adds to or overrides behavior in a standard or custom controller. Extensions allow you to leverage the functionality of another controller while adding your own custom logic.

You can use these system-supplied Apex classes when building custom Visualforce controllers and controller extensions.

-   Action
-   Dynamic Component
-   IdeaStandardController
-   IdeaStandardSetController
-   KnowledgeArticleVersionStandardController
-   Message
-   PageReference
-   SelectOption
-   StandardController
-   StandardSetController

In addition to these classes, the `transient` keyword can be used when declaring methods in controllers and controller extensions. For more information, see [Using the `transient` Keyword](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_transient.htm).

For more information on Visualforce, see the *[Visualforce Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.262.0.pages.meta/pages/ "html (New Window)")*.

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_email_inbound_using.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_invoking_javascript_remoting.htm)
