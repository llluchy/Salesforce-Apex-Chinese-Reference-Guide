---
doc_id: "apex_process_plugin"
---

# Implementing the Process.Plugin Interface

`Process.Plugin` is a built-in interface that allows you to pass data between your organization and a specified flow.

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

The class that implements the `Process.Plugin` interface must call these methods.

| Name | Arguments | Return Type | Description |
| --- | --- | --- | --- |
| `describe` |  | [`Process.PluginDescribeResult`](atlas.en-us.apexcode.meta/apexcode/apex_plugin_describe_result.htm#apex_plugin_describe_result "Use the Process.Plugin interface describe method to dynamically provide both input and output parameters for the flow. This method returns the Process.PluginDescribeResult class.") | Returns a `Process.PluginDescribeResult` object that describes this method call. |
| `invoke` | [`Process.PluginRequest`](atlas.en-us.apexcode.meta/apexcode/apex_plugin_request.htm#apex_plugin_request "The Process.PluginRequest class passes input parameters from the class that implements the interface to the flow.") | [`Process.PluginResult`](atlas.en-us.apexcode.meta/apexcode/apex_plugin_result.htm#apex_plugin_result "The Process.PluginResult class returns output parameters from the class that implements the interface to the flow.") | Primary method that the system invokes when the class that implements the interface is instantiated. |

## Example Implementation

```apex
global class flowChat implements Process.Plugin { 

// The main method to be implemented. The Flow calls this at runtime.
global Process.PluginResult invoke(Process.PluginRequest request) { 
        // Get the subject of the Chatter post from the flow
        String subject = (String) request.inputParameters.get('subject');
        
        // Use the Chatter APIs to post it to the current user's feed
        FeedItem fItem = new FeedItem(); 
        fItem.ParentId = UserInfo.getUserId(); 
        fItem.Body = 'Flow Update: ' + subject; 
        insert fItem; 

        // return to Flow
        MapString,Object> result = new MapString,Object>(); 
        return new Process.PluginResult(result); 
    } 

    // Returns the describe information for the interface
    global Process.PluginDescribeResult describe() { 
        Process.PluginDescribeResult result = new Process.PluginDescribeResult(); 
        result.Name = 'flowchatplugin';
        result.Tag = 'chat';
        result.inputParameters = new 
           List{ 
               new Process.PluginDescribeResult.InputParameter('subject', 
               Process.PluginDescribeResult.ParameterType.STRING, true) 
            }; 
        result.outputParameters = new 
           List{ }; 
        return result; 
    }
}
```

## Test Class

The following is a test class for the preceding class.

```apex
@isTest
private class flowChatTest {

    static testmethod void flowChatTests() {
      
        flowChat plugin = new flowChat();
        MapString,Object> inputParams = new MapString,Object>();

        string feedSubject = 'Flow is alive';
        InputParams.put('subject', feedSubject);

        Process.PluginRequest request = new Process.PluginRequest(inputParams);           
        
        plugin.invoke(request);
    } 
}
```
