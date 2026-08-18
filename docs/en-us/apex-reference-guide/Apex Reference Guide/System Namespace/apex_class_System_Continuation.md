---
doc_id: "apex_class_System_Continuation"
---

# Continuation Class

Use the `Continuation` class to make callouts asynchronously to a SOAP or REST Web service.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Example

For a code example, see [Make Long-Running Callouts from a Visualforce Page](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_continuation_overview.htm).

## See Also

- [Continuation Constructors](atlas.en-us.apexref.meta/apexref/apex_class_System_Continuation.htm#apex_System_Continuation_constructors)
- [Continuation Properties](atlas.en-us.apexref.meta/apexref/apex_class_System_Continuation.htm#apex_System_Continuation_properties)
- [Continuation Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_Continuation.htm#apex_System_Continuation_methods)

## Continuation Constructors

The following are constructors for `Continuation`.

## See Also

- [Continuation(timeout)](atlas.en-us.apexref.meta/apexref/apex_class_System_Continuation.htm#apex_System_Continuation_ctor)

### Continuation(timeout)

Creates an instance of the `Continuation` class by using the specified timeout in seconds. The timeout maximum is 120 seconds.

#### Signature

`public Continuation(Integer timeout)`

#### Parameters

-   **timeout**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The timeout for this continuation in seconds.
    

## Continuation Properties

The following are properties for `Continuation`.

## See Also

- [continuationMethod](atlas.en-us.apexref.meta/apexref/apex_class_System_Continuation.htm#apex_System_Continuation_ContinuationMethod)
- [timeout](atlas.en-us.apexref.meta/apexref/apex_class_System_Continuation.htm#apex_System_Continuation_Timeout)
- [state](atlas.en-us.apexref.meta/apexref/apex_class_System_Continuation.htm#apex_System_Continuation_state)

### continuationMethod

The name of the callback method that is called after the callout response returns.

#### Signature

`public String continuationMethod {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

:::tip Note
If the `continuationMethod` property is not set for a Continuation, the same action
        method that made the asynchronous callout is called again when the callout response
        returns.
:::

### timeout

The timeout of the continuation in seconds. Maximum: 120 seconds.

#### Signature

`public Integer timeout {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### state

Data that is stored in this continuation and that can be retrieved after the callout is finished and the callback method is invoked.

#### Signature

`public Object state {get; set;}`

#### Property Value

Type: Object

#### Example

This example shows how to save state information for a continuation in a controller.

```apex
// Declare inner class to hold state info
private class StateInfo {
    String msg { get; set; }
    ListString> urls  { get; set; }
    StateInfo(String msg, ListString> urls) {
        this.msg = msg;
        this.urls = urls;
    }
}

// Then in the action method, set state for the continuation
continuationInstance.state = new StateInfo('Some state data', urls);
```

## Continuation Methods

The following are methods for `Continuation`.

## See Also

- [addHttpRequest(request)](atlas.en-us.apexref.meta/apexref/apex_class_System_Continuation.htm#apex_System_Continuation_addHttpRequest)
- [getRequests()](atlas.en-us.apexref.meta/apexref/apex_class_System_Continuation.htm#apex_System_Continuation_getRequests)
- [getResponse(requestLabel)](atlas.en-us.apexref.meta/apexref/apex_class_System_Continuation.htm#apex_System_Continuation_getResponse)

### addHttpRequest(request)

Adds the HTTP request for the callout that is associated with this continuation.

#### Signature

`public String addHttpRequest(System.HttpRequest request)`

#### Parameters

-   **request**:
    
    Type: [HttpRequest](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_classes_restful_http_httprequest "Use the HttpRequest class to programmatically create HTTP requests like GET, POST, PATCH, PUT, and DELETE.")
    
    The HTTP request to be sent to the external service by this continuation.
    

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A unique label that identifies the HTTP request that is associated with this continuation. This label is used in the map that [getRequests()](#apex_System_Continuation_getRequests "Returns all labels and requests that are associated with this continuation as key-value pairs.") returns to identify individual requests in a continuation.

#### Usage

You can add up tothree requests to a continuation.

:::tip Note
The timeout that is set in each passed-in request is ignored. Only the global timeout
        maximum of 120 seconds applies for a continuation.
:::

### getRequests()

Returns all labels and requests that are associated with this continuation as key-value pairs.

#### Signature

`public Map<String,System.HttpRequest> getRequests()`

#### Return Value

Type: Map<String,HttpRequest>

A map of all requests that are associated with this continuation. The map key is the request label, and the map value is the corresponding HTTP request.

### getResponse(requestLabel)

Returns the response for the request that corresponds to the specified label.

#### Signature

`public static HttpResponse getResponse(String requestLabel)`

#### Parameters

-   **requestLabel**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The request label to get the response for.
    

#### Return Value

Type: [HttpResponse](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_classes_restful_http_httpresponse "Use the HttpResponse class to handle the HTTP response returned by the Http class.")

#### Usage

The status code is returned in the HttpResponse object and can be obtained by calling `getStatusCode()` on the response. A status code of 200 indicates that the request was successful. Other status code values indicate the type of problem that was encountered.

**Sample of Error Status Codes**

When a problem occurs with the response, some possible status code values are:

-   2000: The timeout was reached, and the server didn’t get a chance to respond.
-   2001: There was a connection failure.
-   2002: Exceptions occurred.
-   2003: The response hasn’t arrived (which also means that the Apex asynchronous callout framework hasn’t resumed).
-   2004: The response size is too large (greater than 1 MB).
