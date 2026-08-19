---
doc_id: "apex_continuation_chained_callouts"
---

# Chaining Asynchronous Callouts

If the order of the callouts matters, or when a callout is conditional on the response of another callout, you can chain callout requests. Chaining callouts means that the next callout is made only after the response of the previous callout returns. For example, you might need to chain a callout to get warranty extension information after the warranty service response indicates that the warranty expired. You can chain up to three callouts.

The following Visualforce and Apex examples show how to chain one callout to another. The Visualforce page is shown first. The Visualforce page contains a button that invokes the action method `invokeInitialRequest` in the controller. The Visualforce process is suspended each time a continuation is returned. The Visualforce process resumes after each response is returned and renders each response in the outputPanel component.

```apex
"ChainedContinuationController" showChat="false" showHeader="false">
   
      this button. -->
      "{!invokeInitialRequest}" value="Start Request" reRender="panel"/>  
   

   "panel">
       callout. -->   
       "{!result1}" />
       
       
       callout. -->
       "{!result2}" />
```

This example show the controller class for the Visualforce page. The `invokeInitialRequest` method creates the first continuation. The callback method (`processInitialResponse`) processes the response of the first callout. If this response meets a certain condition, the method chains another callout by returning a second continuation. After the response of the chained continuation is returned, the second callback method (`processChainedResponse`) is invoked and processes the second response.

```apex
public with sharing class ChainedContinuationController {

    // Unique label for the initial callout request
    public String requestLabel1;
    // Unique label for the chained callout request
    public String requestLabel2;
    // Result of initial callout
    public String result1 {get;set;}
    // Result of chained callout
    public String result2 {get;set;}
    // Endpoint of long-running service
    private static final String LONG_RUNNING_SERVICE_URL1 = 
        '';
    private static final String LONG_RUNNING_SERVICE_URL2 = 
        '';
           
    // Action method
    public Object invokeInitialRequest() {
      // Create continuation with a timeout
      Continuation con = new Continuation(60);
      // Set callback method
      con.continuationMethod='processInitialResponse';
      
      // Create first callout request
      HttpRequest req = new HttpRequest();
      req.setMethod('GET');
      req.setEndpoint(LONG_RUNNING_SERVICE_URL1);
      
      // Add initial callout request to continuation
      this.requestLabel1 = con.addHttpRequest(req);              
      
      // Return the continuation
      return con;  
    }
    
    // Callback method for initial request
    public Object processInitialResponse() {   
      // Get the response by using the unique label
      HttpResponse response = Continuation.getResponse(this.requestLabel1);
      // Set the result variable that is displayed on the Visualforce page
      this.result1 = response.getBody();
           
      Continuation chainedContinuation = null;
      // Chain continuation if some condition is met
      if (response.getBody().toLowerCase().contains('expired')) {
          // Create a second continuation 
          chainedContinuation = new Continuation(60);
          // Set callback method
          chainedContinuation.continuationMethod='processChainedResponse';
          
          // Create callout request
          HttpRequest req = new HttpRequest();
          req.setMethod('GET');
          req.setEndpoint(LONG_RUNNING_SERVICE_URL2);
          
          // Add callout request to continuation
          this.requestLabel2 = chainedContinuation.addHttpRequest(req); 
      }
      
      // Start another continuation 
      return chainedContinuation;  
    }    
    
    // Callback method for chained request
    public Object processChainedResponse() {   
      // Get the response for the chained request
      HttpResponse response = Continuation.getResponse(this.requestLabel2);
      // Set the result variable that is displayed on the Visualforce page
      this.result2 = response.getBody();
           
      // Return null to re-render the original Visualforce page
      return null;
    }
}
```

 

:::tip Note
The response of a continuation must be retrieved before you create a new continuation
            and before the Visualforce request is suspended again. You can’t retrieve an old
            response from an earlier continuation in the chain of continuations.
:::
