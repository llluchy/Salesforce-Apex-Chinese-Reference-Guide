---
doc_id: "apex_plugin_describe_result"
---

# Using the Process.PluginDescribeResult Class

Use the `Process.Plugin` interface `describe` method to dynamically provide both input and output parameters for the flow. This method returns the `Process.PluginDescribeResult` class.

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

The `Process.PluginDescribeResult` class doesn’t support the following functions.

-   Queries
-   Data modification
-   Email
-   Apex nested callouts

## Process.PluginDescribeResult Class and Subclass Properties

Here’s the constructor for the `Process.PluginDescribeResult` class.

```apex
Process.PluginDescribeResult classname = new Process.PluginDescribeResult();
```

-   [PluginDescribeResult Class Properties](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm)
-   [PluginDescribeResult.InputParameter Class Properties](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_InputParameter.htm)
-   [PluginDescribeResult.OutputParameter Class Properties](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm)

Here’s the constructor for the `Process.PluginDescribeResult.InputParameter` class.

```apex
Process.PluginDescribeResult.InputParameter ip = new 
    Process.PluginDescribeResult.InputParameter(Name,Optional_description_string, 
      Process.PluginDescribeResult.ParameterType.Enum, Boolean_required);
```

Here’s the constructor for the `Process.PluginDescribeResult.OutputParameter` class.

```apex
Process.PluginDescribeResult.OutputParameter op = new 
    new Process.PluginDescribeResult.OutputParameter(Name,Optional description string, 
       Process.PluginDescribeResult.ParameterType.Enum);
```

To use the `Process.PluginDescribeResult` class, create instances of these subclasses.

-   `Process.PluginDescribeResult.InputParameter`
-   `Process.PluginDescribeResult.OutputParameter`

`Process.PluginDescribeResult.InputParameter` is a list of input parameters and has the following format.

```apex
Process.PluginDescribeResult.inputParameters = 
      new List{ 
         new Process.PluginDescribeResult.InputParameter(Name,Optional_description_string, 
      Process.PluginDescribeResult.ParameterType.Enum, Boolean_required)
```

For example:

```apex
Process.PluginDescribeResult result = new Process.PluginDescribeResult(); 
result.setDescription('this plugin gets the name of a user');
result.setTag ('userinfo');
result.inputParameters = new List{ 
    new Process.PluginDescribeResult.InputParameter('FullName', 
       Process.PluginDescribeResult.ParameterType.STRING, true),
    new Process.PluginDescribeResult.InputParameter('DOB', 
       Process.PluginDescribeResult.ParameterType.DATE, true),
    };
```

`Process.PluginDescribeResult.OutputParameter` is a list of output parameters and has the following format.

```apex
Process.PluginDescribeResult.outputParameters = new List{ 
    new Process.PluginDescribeResult.OutputParameter(Name,Optional description string, 
       Process.PluginDescribeResult.ParameterType.Enum)
```

For example:

```apex
Process.PluginDescribeResult result = new Process.PluginDescribeResult(); 
result.setDescription('this plugin gets the name of a user');
result.setTag ('userinfo');
result.outputParameters = new List{
    new Process.PluginDescribeResult.OutputParameter('URL', 
        Process.PluginDescribeResult.ParameterType.STRING),
```

Both classes take the `Process.PluginDescribeResult.ParameterType` Enum. Valid values are:

-   BOOLEAN
-   DATE
-   DATETIME
-   DECIMAL
-   DOUBLE
-   FLOAT
-   ID
-   INTEGER
-   LONG
-   STRING
-   TIME

For example:

```apex
Process.PluginDescribeResult result = new Process.PluginDescribeResult(); 
        result.outputParameters = new List{
            new Process.PluginDescribeResult.OutputParameter('URL', 
            Process.PluginDescribeResult.ParameterType.STRING, true),
            new Process.PluginDescribeResult.OutputParameter('STATUS', 
            Process.PluginDescribeResult.ParameterType.STRING),
            };
```
