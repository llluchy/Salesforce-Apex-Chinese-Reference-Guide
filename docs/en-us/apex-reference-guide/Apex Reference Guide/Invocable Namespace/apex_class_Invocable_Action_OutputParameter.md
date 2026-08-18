---
doc_id: "apex_class_Invocable_Action_OutputParameter"
---

# Action.OutputParameter Class

Contains methods about metadata returned by invocable actions.

## Namespace

[Invocable](atlas.en-us.apexref.meta/apexref/apex_namespace_Invocable.htm "The Invocable namespace provides classes for calling invocable actions from Apex.")

## Example

Invocable.Action action = Invocable.Action.createStandardAction('otherActionName'); List<Invocable.Action.DescribeResult> results = action.getDescribe(); for (Invocable.Action.DescribeResult result : results) { for (Invocable.Action.InputParameter input : result.getInputs()) { List<Invocable.Action.AdditionalAttribute> attrs = input.getAdditionalAttributes(); if (attrs != null) { for (Invocable.Action.AdditionalAttribute attr : attrs) { System.debug('Attribute: ' + attr.getName()); System.debug('Data Type: ' + attr.getDataType()); // Handle collection vs single value if (attr.getIsCollection()) { if (attr.getDataType() == 'STRING') { List<String> stringValues = attr.getValueAsStringList(); System.debug('String Values: ' + stringValues); } } else { System.debug('Value: ' + attr.getValue()); } } } } }

## See Also

- [Action.OutputParameter Methods](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_OutputParameter.htm#apex_Invocable_Action_OutputParameter_methods)

## Action.OutputParameter Methods

The following are methods for `Action.OutputParameter`.

## See Also

- [getAdditionalAttributes()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_OutputParameter.htm#apex_Invocable_Action_OutputParameter_getAdditionalAttributes)
- [getApexClass()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_OutputParameter.htm#apex_Invocable_Action_OutputParameter_getApexClass)
- [getDescription()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_OutputParameter.htm#apex_Invocable_Action_OutputParameter_getDescription)
- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_OutputParameter.htm#apex_Invocable_Action_OutputParameter_getLabel)
- [getMaxOccurs()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_OutputParameter.htm#apex_Invocable_Action_OutputParameter_getMaxOccurs)
- [getName()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_OutputParameter.htm#apex_Invocable_Action_OutputParameter_getName)
- [getPicklistValues()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_OutputParameter.htm#apex_Invocable_Action_OutputParameter_getPicklistValues)
- [getSObjectType()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_OutputParameter.htm#apex_Invocable_Action_OutputParameter_getSObjectType)
- [getType()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_OutputParameter.htm#apex_Invocable_Action_OutputParameter_getType)

### getAdditionalAttributes()

Gets a list of additional attributes for an invocable action output parameter.

#### Signature

`public List<Invocable.Action.AdditionalAttribute> getAdditionalAttributes()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Invocable.Action.AdditionalAttribute](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_AdditionalAttribute.htm#apex_class_Invocable_Action_AdditionalAttribute "Contains methods to get metadata about attributes associated with invocable action parameters.")\>

### getApexClass()

Gets the Apex class name of an output parameter for an invocable action.

#### Signature

`public String getApexClass()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Apex class name of the output parameter of the invocable action.

### getDescription()

Gets the description of an output parameter of an invocable action.

#### Signature

`public String getDescription()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Description of the output parameter of the invocable action.

### getLabel()

Gets the label of an output parameter of an invocable action.

#### Signature

`public String getLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Label of the output parameter of the invocable action.

### getMaxOccurs()

Gets the maximum number of occurrences for an output parameter of an invocable action.

#### Signature

`public Integer getMaxOccurs()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of occurrences for the output parameter of the invocable action. If occurrences are unbounded, returns -1.

### getName()

Gets the name of an output parameter of an invocable action.

#### Signature

`public String getName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the output parameter of the invocable action.

### getPicklistValues()

Gets a list of picklist values for an output parameter of an invocable action.

#### Signature

`public List<Invocable.Action.PicklistValue> getPicklistValues()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Invocable.Action.PicklistValue](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_PicklistValue.htm#apex_class_Invocable_Action_PicklistValue "Contains methods to get metadata about a single value in a picklist used by invocable action parameters.")\>

### getSObjectType()

Gets the sObject type of an output parameter of an invocable action.

#### Signature

`public String getSObjectType()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

SObject type of the output parameter of the invocable action.

### getType()

Gets the data type of an output parameter of an invocable action.

#### Signature

`public String getType()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Data type of the output parameter of the invocable action.
