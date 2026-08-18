---
doc_id: "apex_class_System_OrgLimit"
---

# OrgLimit Class

Contains methods that provide the name, maximum value, and current value of an org limit.

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

- [OrgLimit Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm#apex_System_OrgLimit_methods)

## OrgLimit Methods

The following are methods for `OrgLimit`.

## See Also

- [getLimit()](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm#apex_System_OrgLimit_getLimit)
- [getName()](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm#apex_System_OrgLimit_getName)
- [getValue()](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm#apex_System_OrgLimit_getValue)
- [toString()](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm#apex_System_OrgLimit_toString)

### getLimit()

Returns the maximum allowed limit value.

#### Signature

`public Integer getLimit()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
List limits = OrgLimits.getAll();
for (System.OrgLimit aLimit: limits) {
    System.debug('Limit: ' + aLimit.getName());
    System.debug('Max Limit is: ' + aLimit.getLimit());
}
```

### getName()

Returns the limit’s name.

#### Signature

`public String getName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
List limits = OrgLimits.getAll();
for (System.OrgLimit aLimit: limits) {
    System.debug('Limit: ' + aLimit.getName());
    System.debug('Max Limit is: ' + aLimit.getLimit());
}
```

### getValue()

Returns the limit usage value.

#### Signature

`public Integer getValue()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
List limits = OrgLimits.getAll();
for (System.OrgLimit aLimit: limits) {
    System.debug('Limit: ' + aLimit.getName());
    System.debug('Usage Value is: ' + aLimit.getValue());
}
```

### toString()

Returns the string representation of the org limit.

#### Signature

`public String toString()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

String denoting the name, current consumption, and maximum value of the org limit. For example:

OrgLimit\[DailyBulkApiBatches: consumed 25 of 15000\]
