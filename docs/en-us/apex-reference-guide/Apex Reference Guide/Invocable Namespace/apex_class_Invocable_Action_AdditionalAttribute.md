---
doc_id: "apex_class_Invocable_Action_AdditionalAttribute"
---

# Action.AdditionalAttribute Class

Contains methods to get metadata about attributes associated with invocable action parameters.

## Namespace

[Invocable](atlas.en-us.apexref.meta/apexref/apex_namespace_Invocable.htm "The Invocable namespace provides classes for calling invocable actions from Apex.")

## Usage

Additional attributes extend invocable action parameters with custom metadata beyond the standard parameter properties. Use the `AdditionalAttribute` class to access this extensibility metadata when working with invocable actions.

For type-safe access to collection values, use the typed getter methods such as `getValueAsStringList()`, `getValueAsIntegerList()`, `getValueAsDoubleList()`, or `getValueAsBooleanList()`. These methods return `null` when the requested data type doesn't match the attribute's actual data type. Check `getDataType()` and `getIsCollection()` before calling typed getters to ensure you use the appropriate method.

## Example

Invocable.Action action = Invocable.Action.createStandardAction('otherActionName'); List<Invocable.Action.DescribeResult> results = action.getDescribe(); for (Invocable.Action.DescribeResult result : results) { for (Invocable.Action.InputParameter input : result.getInputs()) { List<Invocable.Action.AdditionalAttribute> attrs = input.getAdditionalAttributes(); if (attrs != null) { for (Invocable.Action.AdditionalAttribute attr : attrs) { System.debug('Attribute: ' + attr.getName()); System.debug('Data Type: ' + attr.getDataType()); // Handle collection vs single value if (attr.getIsCollection()) { if (attr.getDataType() == 'STRING') { List<String> stringValues = attr.getValueAsStringList(); System.debug('String Values: ' + stringValues); } } else { System.debug('Value: ' + attr.getValue()); } } } } }

## See Also

- [Action.AdditionalAttribute Methods](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_AdditionalAttribute.htm#apex_Invocable_Action_AdditionalAttribute_methods)

## Action.AdditionalAttribute Methods

The following are methods for `Action.AdditionalAttribute`.

## See Also

- [getApexClass()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_AdditionalAttribute.htm#apex_Invocable_Action_AdditionalAttribute_getApexClass)
- [getDataType()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_AdditionalAttribute.htm#apex_Invocable_Action_AdditionalAttribute_getDataType)
- [getIsCollection()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_AdditionalAttribute.htm#apex_Invocable_Action_AdditionalAttribute_getIsCollection)
- [getName()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_AdditionalAttribute.htm#apex_Invocable_Action_AdditionalAttribute_getName)
- [getValue()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_AdditionalAttribute.htm#apex_Invocable_Action_AdditionalAttribute_getValue)
- [getValueAsBooleanList()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_AdditionalAttribute.htm#apex_Invocable_Action_AdditionalAttribute_getValueAsBooleanList)
- [getValueAsDateList()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_AdditionalAttribute.htm#apex_Invocable_Action_AdditionalAttribute_getValueAsDateList)
- [getValueAsDoubleList()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_AdditionalAttribute.htm#apex_Invocable_Action_AdditionalAttribute_getValueAsDoubleList)
- [getValueAsIntegerList()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_AdditionalAttribute.htm#apex_Invocable_Action_AdditionalAttribute_getValueAsIntegerList)
- [getValueAsList()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_AdditionalAttribute.htm#apex_Invocable_Action_AdditionalAttribute_getValueAsList)
- [getValueAsLongList()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_AdditionalAttribute.htm#apex_Invocable_Action_AdditionalAttribute_getValueAsLongList)
- [getValueAsStringList()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_AdditionalAttribute.htm#apex_Invocable_Action_AdditionalAttribute_getValueAsStringList)

### getApexClass()

Gets the Apex class name of an additional attribute for an invocable action parameter.

#### Signature

`public String getApexClass()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Apex class name of the additional attribute for the invocable action parameter.

### getDataType()

Gets the data type of an additional attribute for an invocable action parameter.

#### Signature

`public String getDataType()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Data type of the additional attribute for the invocable action parameter. For example: STRING, INTEGER, BOOLEAN, DOUBLE, LONG, DATE.

### getIsCollection()

Indicates whether an additional attribute for an invocable action parameter contains a collection of values.

#### Signature

`public Boolean getIsCollection()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

This method returns `true` if the additional attribute for the invocable action parameter is a collection.

### getName()

Gets the name of an additional attribute for an invocable action parameter.

#### Signature

`public String getName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the additional attribute for the invocable action parameter.

### getValue()

Gets the value for an additional attribute for an invocable action parameter.

#### Signature

`public Object getValue()`

#### Return Value

Type: Object

Value of the additional attribute for the invocable action parameter. Cast to the appropriate type based on the `dataType` and `isCollection`.

### getValueAsBooleanList()

Returns a value as a list of Booleans when `isCollection` is `true` and `dataType` is BOOLEAN.

#### Signature

`public List<Boolean> getValueAsBooleanList()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")\>

List of Boolean values, or null if not a Boolean collection.

### getValueAsDateList()

Returns a value as a list of dates when `isCollection` is `true` and `dataType` is DATE.

#### Signature

`public List<Date> getValueAsDateList()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")\>

List of date values, or null if not a date collection.

### getValueAsDoubleList()

Returns a value as a list of doubles when `isCollection` is `true` and `dataType` is DOUBLE.

#### Signature

`public List<Double> getValueAsDoubleList()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")\>

List of double values, or null if not a double collection.

### getValueAsIntegerList()

Returns a value as a list of integers when `isCollection` is `true` and `dataType` is INTEGER.

#### Signature

`public List<Integer> getValueAsIntegerList()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")\>

List of integer values, or null if not an integer collection.

### getValueAsList()

Returns a value as a list when `isCollection` is `true`. The list elements have the type specified by the `dataType` property.

#### Signature

`public List<ANY> getValueAsList()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<Object>

List of values type according to `dataType`, or null if not a collection.

### getValueAsLongList()

Returns a value as a list of longs when `isCollection` is `true` and `dataType` is LONG.

#### Signature

`public List<Long> getValueAsLongList()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")\>

List of long values, or null if not a long collection.

### getValueAsStringList()

Returns a value as a list of strings when `isCollection` is `true` and `dataType` is STRING.

#### Signature

`public List<String> getValueAsStringList()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of string values, or null if not a string collection.
