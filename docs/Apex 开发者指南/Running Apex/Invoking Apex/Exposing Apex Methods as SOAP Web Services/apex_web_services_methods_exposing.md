---
doc_id: "apex_web_services_methods_exposing"
---

# Exposing Data with Webservice Methods

Invoking a custom `webservice` method always uses system context. Consequently, the current user's credentials are not used, and any user who has access to these methods can use their full power, regardless of permissions, field-level security, or sharing rules. Developers who expose methods with the `webservice` keyword should therefore take care that they are not inadvertently exposing any sensitive data.

:::tip Warning
Apex class methods that are exposed through the API with the `webservice` keyword don't enforce object permissions and
   field-level security by default. We recommend that you make use of the appropriate object or
   field describe result methods to check the current user’s access level on the objects and fields
   that the webservice method is accessing. See [DescribeSObjectResult Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_sobject_describe.htm) and [DescribeFieldResult Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_fields_describe.htm). Also, sharing rules (record-level access)
    are enforced only when declaring a class with the `with
     sharing` keyword. This requirement applies to all Apex classes, including to classes
    that contain webservice methods. To enforce sharing rules for webservice methods, declare the
    class that contains these methods with the `with sharing`
    keyword. See [Use the with sharing, without sharing, and inherited sharing Keywords](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm).
:::
