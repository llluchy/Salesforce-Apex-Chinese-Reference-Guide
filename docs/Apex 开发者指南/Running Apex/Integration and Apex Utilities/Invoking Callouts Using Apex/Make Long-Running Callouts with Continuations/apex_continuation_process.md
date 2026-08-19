---
doc_id: "apex_continuation_process"
---

# Process for Using Asynchronous Callouts

To use asynchronous callouts, create a `Continuation` object in an action method of a controller, and implement a callback method.

## Invoking an Asynchronous Callout in an Action Method

To invoke an asynchronous callout, call the external service by using a `Continuation` instance in your Visualforce action method. When you create a continuation, you can specify a timeout value and the name of the callback method. For example, the following creates a continuation with a 60-second timeout and a callback method name of processResponse.

```apex
Continuation cont = new Continuation(60);
cont.continuationMethod = 'processResponse';
```

Next, associate the `Continuation` object to an external callout. To do so, create the HTTP request, and then add this request to the continuation as follows:

```apex
String requestLabel = cont.addHttpRequest(request);
```

 

:::tip Note
This process is based on making callouts with the HttpRequest class. For an example that
        uses a WSDL-based class, see [Making an Asynchronous Callout from an Imported WSDL](atlas.en-us.apexcode.meta/apexcode/apex_continuation_callout_soap.htm).
:::

The method that invokes the callout (the action method) must return the `Continuation` object to instruct Visualforce to suspend the current request after the system sends the callout and waits for the callout response. The `Continuation` object holds the details of the callout to be executed.

This is the signature of the method that invokes the callout. The Object return type represents a `Continuation`.

```apex
public Object calloutActionMethodName()
```

## Defining a Callback Method

The response is returned after the external service finishes processing the callout. You can specify a callback method for asynchronous execution after the callout returns. This callback method must be defined in the controller class where the callout invocation method is defined. You can define a callback method to process the returned response, such as retrieving the response for display on a Visualforce page.

The callback method doesn’t take any arguments and has this signature.

```apex
public Object callbackMethodName()
```

The Object return type represents a `Continuation`, a `PageReference`, or `null`. To render the original Visualforce page and finish the Visualforce request, return `null` in the callback method.

If the action method uses JavaScript remoting (is annotated with `@RemoteAction`), the callback method must be static and has the following supported signatures.

```apex
public static Object callbackMethodName(ListString> labels, Object state)
```

Or:

```apex
public static Object callbackMethodName(Object state)
```

The labels parameter is supplied by the system when it invokes the callback method and holds the labels associated with the callout requests made. The state parameter is supplied by setting the [Continuation.state](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_System_Continuation.htm#apex_System_Continuation_state) property in the controller.

This table lists the return values for the callback method. Each return value corresponds to a different behavior.

Table 1. Possible Return Values for the Callback Method
| Callback Method Return Value | Request Lifecycle and Outcome |
| --- | --- |
| `null` | The system finishes the Visualforce page request and renders the original Visualforce page (or a portion of it). |
| `PageReference` | The system finishes the Visualforce page request and redirects to a new Visualforce page.
(Use query parameters in the `PageReference` to pass the results of the `Continuation` to the new page.)

 |
| `Continuation` | The system suspends the Visualforce request again and waits for the response of a new callout. Return a new `Continuation` in the callback method to chain asynchronous callouts. |

:::tip Note
If the `continuationMethod` property isn’t set for a continuation, the same action method
        that made the callout is called again when the callout response returns.
:::

## See Also

- [Apex Reference Guide: Continuation Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_System_Continuation.htm)
