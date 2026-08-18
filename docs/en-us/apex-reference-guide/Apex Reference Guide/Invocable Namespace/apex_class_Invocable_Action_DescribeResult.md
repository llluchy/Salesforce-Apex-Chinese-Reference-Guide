---
doc_id: "apex_class_Invocable_Action_DescribeResult"
---

# Action.DescribeResult Class

Contains methods to get metadata about invocable actions.

## Namespace

[Invocable](atlas.en-us.apexref.meta/apexref/apex_namespace_Invocable.htm "The Invocable namespace provides classes for calling invocable actions from Apex.")

## Example

Invocable.Action action = Invocable.Action.createStandardAction('otherActionName'); List<Invocable.Action.DescribeResult> results = action.getDescribe(); for (Invocable.Action.DescribeResult result : results) { for (Invocable.Action.InputParameter input : result.getInputs()) { List<Invocable.Action.AdditionalAttribute> attrs = input.getAdditionalAttributes(); if (attrs != null) { for (Invocable.Action.AdditionalAttribute attr : attrs) { System.debug('Attribute: ' + attr.getName()); System.debug('Data Type: ' + attr.getDataType()); // Handle collection vs single value if (attr.getIsCollection()) { if (attr.getDataType() == 'STRING') { List<String> stringValues = attr.getValueAsStringList(); System.debug('String Values: ' + stringValues); } } else { System.debug('Value: ' + attr.getValue()); } } } } }

## See Also

- [Action.DescribeResult Methods](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_methods)

## Action.DescribeResult Methods

The following are methods for `Action.DescribeResult`.

## See Also

- [getAction()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getAction)
- [getAllowsTransactionControl()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getAllowsTransactionControl)
- [getCapabilityTypes()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getCapabilityTypes)
- [getCategory()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getCategory)
- [getConfigurationEditor()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getConfigurationEditor)
- [getDescription()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getDescription)
- [getGenericTypes()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getGenericTypes)
- [getHasCallout()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getHasCallout)
- [getHasSystemGeneratedOutput()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getHasSystemGeneratedOutput)
- [getIconId()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getIconId)
- [getIconName()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getIconName)
- [getInputs()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getInputs)
- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getLabel)
- [getMethodDescription()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getMethodDescription)
- [getMethodLabel()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getMethodLabel)
- [getMethodName()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getMethodName)
- [getName()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getName)
- [getOutputs()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getOutputs)
- [getTargetEntityName()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getTargetEntityName)
- [getType()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_Invocable_Action_DescribeResult_getType)

### getAction()

Gets the invocable action that was invoked and caused a result to be returned.

#### Signature

`public Invocable.Action getAction()`

#### Return Value

Type: [Invocable.Action](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")

### getAllowsTransactionControl()

Indicates whether the invocable action allows transaction control.

#### Signature

`public Boolean getAllowsTransactionControl()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

This method returns `true` if the invocable action allows transaction control.

### getCapabilityTypes()

Gets the capability types supported by an invocable action.

#### Signature

`public List<String> getCapabilityTypes()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of capability type identifiers of the invocable action.

### getCategory()

Gets the category of an invocable action.

#### Signature

`public String getCategory()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Category of the invocable action.

### getConfigurationEditor()

Gets the type of an invocable action.

#### Signature

`public String getConfigurationEditor()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Configuration editor identifier of the invocable action.

### getDescription()

Gets the description of an invocable action.

#### Signature

`public String getDescription()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Description of the invocable action.

### getGenericTypes()

Gets a list of the generic types defined for an invocable action.

#### Signature

`public List<Invocable.Action.GenericType> getGenericTypes()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Invocable.Action.GenericType](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_GenericType.htm#apex_class_Invocable_Action_GenericType "Contains methods to get metadata about generic type parameters for invocable actions.")\>

### getHasCallout()

Indicates whether an invocable action makes external callouts.

#### Signature

`public Boolean getHasCallout()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

This method returns `true` if the invocable action makes external callouts.

### getHasSystemGeneratedOutput()

Indicates whether an invocable action is a standard invocable action.

#### Signature

`public Boolean getHasSystemGeneratedOutput()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

This method returns `true` if the invocable action has system-generated output.

### getIconId()

Gets the icon ID for an invocable action.

#### Signature

`public String getIconId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Icon ID of the invocable action.

### getIconName()

Gets the icon name for an invocable action.

#### Signature

`public String getIconName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Icon name for the invocable action.

### getInputs()

Gets a list of input parameters for an invocable action.

#### Signature

`public List<Invocable.Action.InputParameter> getInputs()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Invocable.Action.InputParameter](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_InputParameter.htm#apex_class_Invocable_Action_InputParameter "Contains methods to get metadata about input parameters for invocable actions.")\>

### getLabel()

Gets the type of an invocable action.

#### Signature

`public String getLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Label of the invocable action.

### getMethodDescription()

Gets the description of an invocable action method.

#### Signature

`public String getMethodDescription()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Describe of the invocable action method.

### getMethodLabel()

Gets the label of an invocable action method.

#### Signature

`public String getMethodLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Label of the invocable action method.

### getMethodName()

Gets the name of an invocable action method.

#### Signature

`public String getMethodName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the invocable action method.

### getName()

Gets the name of an invocable action.

#### Signature

`public String getName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the invocable action.

### getOutputs()

Gets a list of output parameters for an invocable action.

#### Signature

`public List<Invocable.Action.OutputParameter> getOutputs()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Invocable.Action.OutputParameter](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_OutputParameter.htm#apex_class_Invocable_Action_OutputParameter "Contains methods about metadata returned by invocable actions.")\>

### getTargetEntityName()

Gets the target entity name for an invocable action.

#### Signature

`public String getTargetEntityName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Target entity name of the invocable action.

### getType()

Gets the type of an invocable action.

#### Signature

`public String getType()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Type of the invocable action.
