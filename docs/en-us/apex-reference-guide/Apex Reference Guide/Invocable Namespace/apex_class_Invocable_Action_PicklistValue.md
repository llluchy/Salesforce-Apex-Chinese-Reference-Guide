---
doc_id: "apex_class_Invocable_Action_PicklistValue"
---

# Action.PicklistValue Class

Contains methods to get metadata about a single value in a picklist used by invocable action parameters.

## Namespace

[Invocable](atlas.en-us.apexref.meta/apexref/apex_namespace_Invocable.htm "The Invocable namespace provides classes for calling invocable actions from Apex.")

## Example

Invocable.Action action = Invocable.Action.createStandardAction('anotherActionName'); List<Invocable.Action.DescribeResult> describeResults = action.getDescribe(); for (Invocable.Action.DescribeResult dr : describeResults) { for (Invocable.Action.InputParameter input : dr.getInputs()) { List<Invocable.Action.PicklistValue> picklistValues = input.getPicklistValues(); if (picklistValues != null) { for (Invocable.Action.PicklistValue plv : picklistValues) { System.debug('Label: ' + plv.getLabel()); System.debug('Value: ' + plv.getValue()); System.debug('Is Default: ' + plv.getDefaultValue()); System.debug('Is Active: ' + plv.getActive()); } } } }

## See Also

- [Action.PicklistValue Methods](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_PicklistValue.htm#apex_Invocable_Action_PicklistValue_methods)

## Action.PicklistValue Methods

The following are methods for `Action.PicklistValue`.

## See Also

- [getActive()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_PicklistValue.htm#apex_Invocable_Action_PicklistValue_getActive)
- [getDefaultValue()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_PicklistValue.htm#apex_Invocable_Action_PicklistValue_getDefaultValue)
- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_PicklistValue.htm#apex_Invocable_Action_PicklistValue_getLabel)
- [getValidFor()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_PicklistValue.htm#apex_Invocable_Action_PicklistValue_getValidFor)
- [getValue()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_PicklistValue.htm#apex_Invocable_Action_PicklistValue_getValue)

### getActive()

Indicates whether a picklist value used by an invocable action parameter is active.

#### Signature

`public Boolean getActive()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

This method returns `true` if the picklist value for the invocable action parameter is active.

### getDefaultValue()

Indicates whether a picklist value used by an invocable action parameter is the default value.

#### Signature

`public Boolean getDefaultValue()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

This method returns `true` if the picklist value used by the invocable action parameter is the default value.

### getLabel()

Gets the label of a picklist value used by an invocable action parameter.

#### Signature

`public String getLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Label of the picklist value used by the invocable action parameter.

### getValidFor()

Gets the valid-for dependency information for a picklist value used by an invocable action parameter.

#### Signature

`public String getValidFor()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Valid-for dependency string of the picklist value used by the invocable action parameter, or null if no dependencies exist.

### getValue()

Gets the API value of a picklist option used by an invocable action parameter.

#### Signature

`public String getValue()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API value of the picklist option used by the invocable action parameter.
