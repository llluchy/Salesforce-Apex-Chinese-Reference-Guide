---
doc_id: "apex_plugin_request"
---

# Using the Process.PluginRequest Class

The `Process.PluginRequest` class passes input parameters from the class that implements the interface to the flow.

:::tip Tip
We recommend using the `@InvocableMethod` annotation instead of the `Process.Plugin` interface.
          - The interface doesn’t support Blob, Collection, and sObject, data types, and it
            doesn’t support bulk operations. After you implement the interface on a class, the class
            can be referenced only from flows.

          -  The annotation supports all data types and bulk operations. After you implement the
            annotation on a class, the class can be referenced from flows, processes, and the Custom
            Invocable Actions REST API endpoint.

          - Legacy Apex actions aren’t supported in auto-layout in Flow Builder. Legacy Apex
            actions are only available to be added in free-form in Flow Builder. Existing actions
            can be edited in both auto-layout and free-form mode.

          - You can customize how invocable actions created with `@InvocableMethod` appear in Flow Builder by using the
            InvocableActionExtension metadata file. Control parameter order, add picklists, create
            custom headers, and build partial custom property editors.
:::

This class has no methods.

Constructor signature:

```apex
Process.PluginRequest (MapString,Object>)
```

Here’s an example of instantiating the `Process.PluginRequest` class with one input parameter.

```apex
MapString,Object> inputParams = new MapString,Object>();
            string feedSubject = 'Flow is alive';
            InputParams.put('subject', feedSubject);
            Process.PluginRequest request = new Process.PluginRequest(inputParams);
```

## Code Example

In this example, the code returns the subject of a Chatter post from a flow and posts it to the current user's feed.

```apex
global Process.PluginResult invoke(Process.PluginRequest request) { 
        // Get the subject of the Chatter post from the flow
        String subject = (String) request.inputParameters.get('subject');
        
        // Use the Chatter APIs to post it to the current user's feed
        FeedPost fpost = new FeedPost(); 
        fpost.ParentId = UserInfo.getUserId(); 
        fpost.Body = 'Flow Update: ' + subject; 
        insert fpost; 

        // return to Flow
        MapString,Object> result = new MapString,Object>(); 
        return new Process.PluginResult(result); 
    } 

    // describes the interface 
    global Process.PluginDescribeResult describe() { 
        Process.PluginDescribeResult result = new Process.PluginDescribeResult(); 
        result.inputParameters = new List{ 
            new Process.PluginDescribeResult.InputParameter('subject', 
            Process.PluginDescribeResult.ParameterType.STRING, true) 
            }; 
        result.outputParameters = new List{ }; 
        return result; 
    }
}
```
