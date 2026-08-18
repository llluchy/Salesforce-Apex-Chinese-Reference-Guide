---
doc_id: "apex_class_quickaction_describelayoutcomponent"
---

# DescribeLayoutComponent Class

Represents the smallest unit in a layout—a field or a separator.

## Namespace

[QuickAction](atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm "The QuickAction namespace provides classes and methods for quick actions.")

## DescribeLayoutComponent Methods

The following are methods for `DescribeLayoutComponent`. All are instance methods.

## See Also

- [getDisplayLines()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutcomponent.htm#apex_QuickAction_DescribeLayoutComponent_getDisplayLines)
- [getTabOrder()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutcomponent.htm#apex_QuickAction_DescribeLayoutComponent_getTabOrder)
- [getType()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutcomponent.htm#apex_QuickAction_DescribeLayoutComponent_getType)
- [getValue()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutcomponent.htm#apex_QuickAction_DescribeLayoutComponent_getValue)

### getDisplayLines()

Returns the vertical lines displayed for a field. Applies to textarea and multi-select picklist fields.

#### Signature

`public Integer getDisplayLines()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getTabOrder()

Returns the tab order for the item in the row.

#### Signature

`public Integer getTabOrder()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getType()

Returns the name of the `QuickAction.DescribeLayoutComponent` type for this component.

#### Signature

`public String getType()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValue()

Returns the name of the field if the type for `QuickAction.DescribeLayoutComponent` is textarea.

#### Signature

`public String getValue()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
