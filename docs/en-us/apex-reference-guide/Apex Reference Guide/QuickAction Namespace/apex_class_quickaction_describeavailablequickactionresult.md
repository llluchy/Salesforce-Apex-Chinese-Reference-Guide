---
doc_id: "apex_class_quickaction_describeavailablequickactionresult"
---

# DescribeAvailableQuickActionResult Class

Contains describe metadata information for a quick action that is available for a specified parent.

## Namespace

[QuickAction](atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm "The QuickAction namespace provides classes and methods for quick actions.")

## Usage

The QuickAction `describeAvailableQuickActions` method returns an array of available quick action describe result objects (`QuickAction.DescribeAvailableQuickActionResult`).

## DescribeAvailableQuickActionResult Methods

The following are methods for `DescribeAvailableQuickActionResult`. All are instance methods.

## See Also

- [getActionEnumOrId()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describeavailablequickactionresult.htm#apex_QuickAction_DescribeAvailableQuickActionResult_getActionEnumOrId)
- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describeavailablequickactionresult.htm#apex_QuickAction_DescribeAvailableQuickActionResult_getLabel)
- [getName()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describeavailablequickactionresult.htm#apex_QuickAction_DescribeAvailableQuickActionResult_getName)
- [getType()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describeavailablequickactionresult.htm#apex_QuickAction_DescribeAvailableQuickActionResult_getType)

### getActionEnumOrId()

Returns the unique ID for the action. If the action doesn’t have an ID, its API name is used.

#### Signature

`public String getActionEnumOrId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLabel()

The quick action label.

#### Signature

`public String getLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getName()

The quick action name.

#### Signature

`public String getName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getType()

The quick action type.

#### Signature

`public String getType()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
