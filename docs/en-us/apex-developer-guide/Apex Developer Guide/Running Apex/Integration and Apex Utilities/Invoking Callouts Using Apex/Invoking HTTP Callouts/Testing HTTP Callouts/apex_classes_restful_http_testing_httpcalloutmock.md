---
doc_id: "apex_classes_restful_http_testing_httpcalloutmock"
---

# Testing HTTP Callouts by Implementing the HttpCalloutMock Interface

Provide an implementation for the `HttpCalloutMock` interface to specify the response sent in the `respond` method, which the Apex runtime calls to send a response for a callout.

```apex
public with sharing class YourHttpCalloutMockImpl implements HttpCalloutMock {
    public HTTPResponse respond(HTTPRequest req) {
        // Create a fake response.
        // Set response values, and 
        // return response.
    }
}
```

 

:::tip Note
- The class that implements the `HttpCalloutMock` interface can be either global or public.

                    - You can annotate this class with [`@IsTest`](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_isTest.htm) since it will be used only in test context.
                        In this way, you can exclude it from your organization’s code size limit of
                        6 MB.
:::

Now that you have specified the values of the fake response, instruct the Apex runtime to send this fake response by calling `Test.setMock` in your test method. For the first argument, pass `HttpCalloutMock.class`, and for the second argument, pass a new instance of your interface implementation of `HttpCalloutMock`, as follows:

```apex
Test.setMock(HttpCalloutMock.class, new YourHttpCalloutMockImpl());
```

After this point, if an HTTP callout is invoked in test context, the callout is not made and you receive the mock response you specified in the respond method implementation.

:::tip Note
To mock a callout if the code that performs the callout is in a managed package,
                call `Test.setMock` from a test method in the
                same package with the same namespace.
:::

This is a full example that shows how to test an HTTP callout. The interface implementation (`MockHttpResponseGenerator`) is listed first. It is followed by a class containing the test method and another containing the method that the test calls. The `testCallout` test method sets the mock callout mode by calling `Test.setMock` before calling `getInfoFromExternalService`. It then verifies that the response returned is what the implemented `respond` method sent. Save each class separately and run the test in `CalloutClassTest`.

```apex
public with sharing class MockHttpResponseGenerator implements HttpCalloutMock {
    // Implement this interface method
    public HTTPResponse respond(HTTPRequest req) {
        // Optionally, only send a mock response for a specific endpoint
        // and method.
        Assert.areEqual('https://example.com/example/test', req.getEndpoint());
        Assert.areEqual('GET', req.getMethod());
        
        // Create a fake response
        HttpResponse res = new HttpResponse();
        res.setHeader('Content-Type', 'application/json');
        res.setBody('{"example":"test"}');
        res.setStatusCode(200);
        return res;
    }
}
```

 

```apex
public with sharing class CalloutClass {
    public static HttpResponse getInfoFromExternalService() {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://example.com/example/test');
        req.setMethod('GET');
        Http h = new Http();
        HttpResponse res = h.send(req);
        return res;
    }
}
```

 

```apex
@IsTest
private with sharing class CalloutClassTest {
     @IsTest static void testCallout() {
        // Set mock callout class 
        Test.setMock(HttpCalloutMock.class, new MockHttpResponseGenerator());
        
        // Call method to test.
        // This causes a fake response to be sent
        // from the class that implements HttpCalloutMock. 
        HttpResponse res = CalloutClass.getInfoFromExternalService();
        
        // Verify response received contains fake values
        Assert.areEqual('application/json', res.getHeader('Content-Type'));
        Assert.areEqual('{"example":"test"}', res.getBody());
        Assert.areEqual(200, res.getStatusCode());
    }
}
```

 

## See Also

- [Apex Reference Guide: HttpCalloutMock Interface](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_interface_httpcalloutmock.htm)

-   [*Apex Reference Guide*: Test Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_test.htm "Apex Reference Guide: Test Class - HTML (New Window)")
