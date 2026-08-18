---
doc_id: "apex_plugin_result"
---

# Using the Process.PluginResult Class

The `Process.PluginResult` class returns output parameters from the class that implements the interface to the flow.

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

You can instantiate the `Process.PluginResult` class using one of the following formats:

-   `Process.PluginResult (Map<String,Object>)`
-   `Process.PluginResult (String, Object)`

Use the map when you have more than one result or when you don't know how many results are returned.

The following is an example of instantiating a `Process.PluginResult` class.

```apex
string url = 'https://docs.google.com/document/edit?id=abc';
                String status = 'Success';
                MapString,Object> result = new MapString,Object>();
                result.put('url', url);
                result.put('status',status);
                new Process.PluginResult(result);
```
