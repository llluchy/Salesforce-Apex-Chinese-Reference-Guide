---
doc_id: "apex_class_System_OrgLimits"
---

# OrgLimits Class

Contains methods that provide a list or map of all OrgLimit instances for Salesforce your org, such as SOAP API requests, Bulk API requests, and Streaming API limits.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Use the `System.OrgLimits` `getAll` and `getMap` methods to obtain either a list or a map of all your org limits. To get details on each limit, use instance methods from `System.OrgLimit`.

For comparison, the [Limits Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_limits.htm#apex_methods_system_limits "Contains methods that return limit information for specific resources.") returns Apex governor limits and not Salesforce API limits.

:::tip Note
Limit values are updated asynchronously, in
                near-real-time.
:::

## See Also

- [OrgLimits Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimits.htm#apex_System_OrgLimits_methods)
- [REST API Developer Guide: Limits](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_rest.meta/api_rest/resources_limits.htm)

## OrgLimits Methods

The following are methods for `OrgLimits`.

## See Also

- [getAll()](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimits.htm#apex_System_OrgLimits_getAll)
- [getMap()](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimits.htm#apex_System_OrgLimits_getMap)

### getAll()

Returns a list of OrgLimit instances.

#### Signature

`public static List<System.OrgLimit> getAll()`

#### Return Value

Type: List<[System.OrgLimit](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm#apex_class_System_OrgLimit "Contains methods that provide the name, maximum value, and current value of an org limit.")\>

### getMap()

Returns a map of all OrgLimit instances with the limit name as key.

#### Signature

`public static Map<String,System.OrgLimit> getMap()`

#### Return Value

Type: Map<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[System.OrgLimit](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm#apex_class_System_OrgLimit "Contains methods that provide the name, maximum value, and current value of an org limit.")\>

#### Example

```apex
MapString,System.OrgLimit> limitsMap = OrgLimits.getMap();
System.OrgLimit apiRequestsLimit = limitsMap.get('DailyApiRequests');
System.debug('Limit Name: ' + apiRequestsLimit.getName());
System.debug('Usage Value: ' + apiRequestsLimit.getValue());
System.debug('Maximum Limit: ' + apiRequestsLimit.getLimit());
```
