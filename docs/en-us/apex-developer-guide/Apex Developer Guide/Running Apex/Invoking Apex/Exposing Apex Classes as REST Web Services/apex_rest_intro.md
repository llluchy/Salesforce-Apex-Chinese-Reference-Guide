---
doc_id: "apex_rest_intro"
---

# Introduction to Apex REST

You can expose your Apex class and methods so that external applications can access your code and your application through the REST architecture. This is done by defining your Apex class with the `@RestResource` annotation to expose it as a REST resource. Similarly, add annotations to your methods to expose them through REST. For example, you can add the `@HttpGet` annotation to your method to expose it as a REST resource that can be called by an HTTP `GET` request. For more information, see [Apex REST Annotations](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotations_rest.htm)

These are the classes containing methods and properties you can use with Apex REST.

| Class | Description |
| --- | --- |
| [RestContext Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_restcontext.htm) | Contains the `RestRequest` and `RestResponse` objects. |
| [`request`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_restcontext.htm) | Use the `System.RestRequest` class to access and pass request data in a RESTful Apex method. |
| [`response`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_restcontext.htm) | Represents an object used to pass data from an Apex RESTful Web service method to an HTTP response. |

## Governor Limits

Calls to Apex REST classes count against the organization's API governor limits. All standard Apex governor limits apply to Apex REST classes. For example, the maximum request or response size is 6 MB for synchronous Apex or 12 MB for asynchronous Apex. For more information, see [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.").

## Authentication

Apex REST supports these authentication mechanisms:

-   OAuth 2.0
-   Session ID

See *[Step Two: Set Up Authorization](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_rest.meta/api_rest/quickstart_oauth.htm "HTML (New Window)")* in the *REST API Developer Guide*.
