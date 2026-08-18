---
doc_id: "apex_class_QuickAction_DescribeQuickActionParameter"
---

# DescribeQuickActionParameter Class

Represents the parameters corresponding to a quick action.

## Namespace

[QuickAction](atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm "The QuickAction namespace provides classes and methods for quick actions.")

## See Also

- [DescribeQuickActionParameter Properties](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm#apex_QuickAction_DescribeQuickActionParameter_properties)
- [DescribeQuickActionParameter Methods](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm#apex_QuickAction_DescribeQuickActionParameter_methods)

## DescribeQuickActionParameter Properties

Learn more about the available properties with the `CalculateTaxRequest` class.

The following are properties for `DescribeQuickActionParameter`.The following are properties for `DescribeQuickActionParameter`.

## See Also

- [parametername](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm#apex_QuickAction_DescribeQuickActionParameter_parametername)
- [parametertype](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm#apex_QuickAction_DescribeQuickActionParameter_parametertype)
- [parametervalue](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm#apex_QuickAction_DescribeQuickActionParameter_parametervalue)

### parametername

Describes the name of the parameter that can be associated with a specific quick action type. For example, User Utterance is a parameter that is associated with agent quick actions.

#### Signature

`public String parametername {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### parametertype

Describes the type of quick action. The type can either be Input or Output.

#### Signature

`public String parametertype {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### parametervalue

Describes the value of the parameter associated with the quick action.

#### Signature

`public String parametervalue {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## DescribeQuickActionParameter Methods

The following are methods for `DescribeQuickActionParameter`.

## See Also

- [getParameterName()](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm#apex_QuickAction_DescribeQuickActionParameter_getParameterName)
- [getParameterType()](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm#apex_QuickAction_DescribeQuickActionParameter_getParameterType)
- [getParameterValue()](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm#apex_QuickAction_DescribeQuickActionParameter_getParameterValue)

### getParameterName()

Returns the name of the parameter associated with the quick action.

#### Signature

`public String getParameterName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getParameterType()

Returns the type of the parameter associated with the quick action. This can either be Input or Output.

#### Signature

`public String getParameterType()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getParameterValue()

Returns the value of the parameter associated with the quick action.

#### Signature

`public String getParameterValue()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
