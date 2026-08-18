---
doc_id: "apex_class_quickaction_describelayoutitem"
---

# DescribeLayoutItem Class

Represents an individual item in a `QuickAction.DescribeLayoutRow`.

## Namespace

[QuickAction](atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm "The QuickAction namespace provides classes and methods for quick actions.")

## Usage

For most fields on a layout, there is only one component per layout item. However, in a display-only view, the `QuickAction.DescribeLayoutItem` might be a composite of the individual fields (for example, an address can consist of street, city, state, country, and postal code data). On the corresponding edit view, each component of the address field would be split up into separate `QuickAction.DescribeLayoutItem`s.

## DescribeLayoutItem Methods

The following are methods for `DescribeLayoutItem`. All are instance methods.

## See Also

- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm#apex_QuickAction_DescribeLayoutItem_getLabel)
- [getLayoutComponents()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm#apex_QuickAction_DescribeLayoutItem_getLayoutComponents)
- [isEditableForNew()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm#apex_QuickAction_DescribeLayoutItem_isEditableForNew)
- [isEditableForUpdate()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm#apex_QuickAction_DescribeLayoutItem_isEditableForUpdate)
- [isPlaceholder()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm#apex_QuickAction_DescribeLayoutItem_isPlaceholder)
- [isRequired()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm#apex_QuickAction_DescribeLayoutItem_isRequired)

### getLabel()

Returns the label text for this item.

#### Signature

`public String getLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLayoutComponents()

Returns a list of `QuickAction.DescribeLayoutComponents` for this item.

#### Signature

`public List<QuickAction.DescribeLayoutComponent> getLayoutComponents()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[QuickAction.DescribeLayoutComponent](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutcomponent.htm#apex_class_quickaction_describelayoutcomponent "Represents the smallest unit in a layout—a field or a separator.")\>

### isEditableForNew()

Indicates whether this item can be edited for new (`true`) or not (`false`).

#### Signature

`public Boolean isEditableForNew()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isEditableForUpdate()

Indicates whether this item can be edited for update(`true`) or not (`false`).

#### Signature

`public Boolean isEditableForUpdate()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isPlaceholder()

Indicates whether this item is a placeholder (`true`) or not (`false`). If `true`, then this item is blank.

#### Signature

`public Boolean isPlaceholder()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isRequired()

Indicates whether this item is required (`true`) or not (`false`).

#### Signature

`public Boolean isRequired()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

This is useful if, for example, you want to render required fields in a contrasting color.
