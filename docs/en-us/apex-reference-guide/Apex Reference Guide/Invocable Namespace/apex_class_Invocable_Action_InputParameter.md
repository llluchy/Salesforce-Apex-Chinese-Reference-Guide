---
doc_id: "apex_class_Invocable_Action_InputParameter"
---

# Action.InputParameter Class

Contains methods to get metadata about input parameters for invocable actions.

## Namespace

[Invocable](atlas.en-us.apexref.meta/apexref/apex_namespace_Invocable.htm "The Invocable namespace provides classes for calling invocable actions from Apex.")

## Example

Invocable.Action action = Invocable.Action.createStandardAction('otherActionName'); List<Invocable.Action.DescribeResult> results = action.getDescribe(); for (Invocable.Action.DescribeResult result : results) { for (Invocable.Action.InputParameter input : result.getInputs()) { List<Invocable.Action.AdditionalAttribute> attrs = input.getAdditionalAttributes(); if (attrs != null) { for (Invocable.Action.AdditionalAttribute attr : attrs) { System.debug('Attribute: ' + attr.getName()); System.debug('Data Type: ' + attr.getDataType()); // Handle collection vs single value if (attr.getIsCollection()) { if (attr.getDataType() == 'STRING') { List<String> stringValues = attr.getValueAsStringList(); System.debug('String Values: ' + stringValues); } } else { System.debug('Value: ' + attr.getValue()); } } } } }

## See Also

- [Action.InputParameter Methods](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_InputParameter.htm#apex_Invocable_Action_InputParameter_methods)

## Action.InputParameter Methods

The following are methods for `Action.InputParameter`.

## See Also

- [getAdditionalAttributes()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_InputParameter.htm#apex_Invocable_Action_InputParameter_getAdditionalAttributes)
- [getApexClass()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_InputParameter.htm#apex_Invocable_Action_InputParameter_getApexClass)
- [getByteLength()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_InputParameter.htm#apex_Invocable_Action_InputParameter_getByteLength)
- [getConfiguration()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_InputParameter.htm#apex_Invocable_Action_InputParameter_getConfiguration)
- [getDefaultValue()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_InputParameter.htm#apex_Invocable_Action_InputParameter_getDefaultValue)
- [getDescription()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_InputParameter.htm#apex_Invocable_Action_InputParameter_getDescription)
- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_InputParameter.htm#apex_Invocable_Action_InputParameter_getLabel)
- [getMaxOccurs()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_InputParameter.htm#apex_Invocable_Action_InputParameter_getMaxOccurs)
- [getName()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_InputParameter.htm#apex_Invocable_Action_InputParameter_getName)
- [getPicklistValues()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_InputParameter.htm#apex_Invocable_Action_InputParameter_getPicklistValues)
- [getPlaceholderText()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_InputParameter.htm#apex_Invocable_Action_InputParameter_getPlaceholderText)
- [getRequired()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_InputParameter.htm#apex_Invocable_Action_InputParameter_getRequired)
- [getSObjectType()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_InputParameter.htm#apex_Invocable_Action_InputParameter_getSObjectType)
- [getSetupReferenceType()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_InputParameter.htm#apex_Invocable_Action_InputParameter_getSetupReferenceType)
- [getToolingType()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_InputParameter.htm#apex_Invocable_Action_InputParameter_getToolingType)
- [getType()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_InputParameter.htm#apex_Invocable_Action_InputParameter_getType)

### getAdditionalAttributes()

Gets a list of additional attributes for an invocable action input parameter.

#### Signature

`public List<Invocable.Action.AdditionalAttribute> getAdditionalAttributes()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Invocable.Action.AdditionalAttribute](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_AdditionalAttribute.htm#apex_class_Invocable_Action_AdditionalAttribute "Contains methods to get metadata about attributes associated with invocable action parameters.")\>

### getApexClass()

Gets the Apex class name of an input parameter for an invocable action.

#### Signature

`public String getApexClass()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Apex class name of the input parameter of the invocable action.

### getByteLength()

Gets the maximum byte length of an input parameter of an invocable action.

#### Signature

`public Integer getByteLength()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum byte length of the input parameter of the invocable action.

### getConfiguration()

Indicates whether an input parameter of an invocable action is a configuration parameter.

#### Signature

`public Boolean getConfiguration()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

This method returns `true` if the input parameter of the invocable action is a configuration parameter.

### getDefaultValue()

Gets the default value for an input parameter of an invocable action.

#### Signature

`public Object getDefaultValue()`

#### Return Value

Type: Object

The default value, or null if no default is defined.

### getDescription()

\>Gets the description of an input parameter of an invocable action.

#### Signature

`public String getDescription()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Description of the input parameter of the invocable action.

### getLabel()

Gets the label of an input parameter of an invocable action.

#### Signature

`public String getLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Label of the input parameter of the invocable action.

### getMaxOccurs()

Gets the maximum number of occurrences for an input parameter of an invocable action.

#### Signature

`public Integer getMaxOccurs()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of occurrences for the input parameter of the invocable action. If occurrences are unbounded, returns -1.

### getName()

Gets the name of an input parameter of an invocable action.

#### Signature

`public String getName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the input parameter of the invocable action.

### getPicklistValues()

Gets a list of picklist values for an input parameter of an invocable action.

#### Signature

`public List<Invocable.Action.PicklistValue> getPicklistValues()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Invocable.Action.PicklistValue](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_PicklistValue.htm#apex_class_Invocable_Action_PicklistValue "Contains methods to get metadata about a single value in a picklist used by invocable action parameters.")\>

### getPlaceholderText()

Gets the placeholder text of an input parameter of an invocable action.

#### Signature

`public String getPlaceholderText()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Placeholder text of the input parameter of the invocable action.

### getRequired()

Indicates whether an input parameter of an invocable action is required.

#### Signature

`public Boolean getRequired()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

This method returns `true` if the input parameter of the invocable action is required.

### getSObjectType()

Gets the sObject type of an input parameter of an invocable action.

#### Signature

`public String getSObjectType()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

SObject type of the input parameter of the invocable action.

### getSetupReferenceType()

Gets the setup reference types of an input parameter of an invocable action.

#### Signature

`public List<String> getSetupReferenceType()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of setup reference type identifiers of the input parameter of the invocable action.

### getToolingType()

Gets the tooling type of and input parameter of an invocable action.

#### Signature

`public String getToolingType()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Tooling type of the input parameter of the invocable action.

### getType()

Gets the data type of an input parameter of an invocable action.

#### Signature

`public String getType()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Data type of the input parameter of the invocable action.
