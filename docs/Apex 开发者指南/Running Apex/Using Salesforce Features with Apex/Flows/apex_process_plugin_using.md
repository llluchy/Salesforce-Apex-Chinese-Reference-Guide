---
doc_id: "apex_process_plugin_using"
---

# Passing Data to a Flow Using the Process.Plugin Interface

`Process.Plugin` is a built-in interface that lets you process data within your org and pass it to a specified flow. The interface exposes Apex as a service, which accepts input values and returns output back to the flow.

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

When you define an Apex class that implements the `Process.Plugin` interface in your org, it's available in Flow Builder as a legacy Apex action.

`Process.Plugin` has these top-level classes.

-   [`Process.PluginRequest`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_Process_PluginRequest.htm) passes input parameters from the class that implements the interface to the flow.
-   [`Process.PluginResult`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_Process_PluginResult.htm) returns output parameters from the class that implements the interface to the flow.
-   [`Process.PluginDescribeResult`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm) passes input parameters from a flow to the class that implements the interface. This class determines the input parameters and output parameters needed by the `Process.PluginResult` plug-in.

When you write Apex unit tests, instantiate a class and pass it into the interface `invoke` method. To pass in the parameters that the system needs, create a map and use it in the constructor. For more information, see [Using the Process.PluginRequest Class](atlas.en-us.apexcode.meta/apexcode/apex_plugin_request.htm "The Process.PluginRequest class passes input parameters from the class that implements the interface to the flow.").

## See Also

- [Implementing the Process.Plugin Interface](atlas.en-us.apexcode.meta/apexcode/apex_process_plugin.htm)
- [Using the Process.PluginRequest Class](atlas.en-us.apexcode.meta/apexcode/apex_plugin_request.htm)
- [Using the Process.PluginResult Class](atlas.en-us.apexcode.meta/apexcode/apex_plugin_result.htm)
- [Using the Process.PluginDescribeResult Class](atlas.en-us.apexcode.meta/apexcode/apex_plugin_describe_result.htm)
- [Process.Plugin Data Type Conversions](atlas.en-us.apexcode.meta/apexcode/apex_plugin_datatype_conversions.htm)
- [Sample Process.Plugin Implementation for Lead Conversion](atlas.en-us.apexcode.meta/apexcode/apex_process_plugin_example_lead_convert.htm)
