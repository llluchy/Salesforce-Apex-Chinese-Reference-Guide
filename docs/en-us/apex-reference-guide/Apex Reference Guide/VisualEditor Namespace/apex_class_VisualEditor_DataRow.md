---
doc_id: "apex_class_VisualEditor_DataRow"
---

# DataRow Class

Contains information about one item in a picklist used in a Lightning component on a Lightning page.

## Namespace

[VisualEditor](atlas.en-us.apexref.meta/apexref/apex_namespace_VisualEditor.htm#apex_namespace_VisualEditor "The VisualEditor namespace provides classes and methods for interacting with the Lightning App Builder. The classes and methods in this namespace operate on Lightning components, which include Lightning web components and Aura components.")

## See Also

- [DataRow Constructors](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_VisualEditor_DataRow_constructors)
- [DataRow Methods](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_VisualEditor_DataRow_methods)

## DataRow Constructors

The following are constructors for `DataRow`.

## See Also

- [DataRow(label, value, selected)](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_VisualEditor_DataRow_ctor)
- [DataRow(label, value)](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_VisualEditor_DataRow_ctor_2)

### DataRow(label, value, selected)

Creates an instance of the `VisualEditor.DataRow` class using the specified label, value, and selected option.

#### Signature

`public DataRow(String label, Object value, Boolean selected)`

#### Parameters

-   **label**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") User-facing label for the picklist item.
-   **value**: Type: Object The value of the picklist item.
-   **selected**: Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.") Specifies whether the picklist item is selected (`true`) or not (`false`).

### DataRow(label, value)

Creates an instance of the `VisualEditor.DataRow` class using the specified label and value.

#### Signature

`public DataRow(String label, Object value)`

#### Parameters

-   **label**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") User-facing label for the picklist item.
-   **value**: Type: Object The value of the picklist item.

## DataRow Methods

The following are methods for `DataRow`.

## See Also

- [clone()](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_VisualEditor_DataRow_clone)
- [compareTo(o)](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_VisualEditor_DataRow_compareTo)
- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_VisualEditor_DataRow_getLabel)
- [getValue()](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_VisualEditor_DataRow_getValue)
- [isSelected()](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_VisualEditor_DataRow_isSelected)

### clone()

Makes a duplicate copy of the `VisualEditor.DataRow` object.

#### Signature

`public Object clone()`

#### Return Value

Type: Object

### compareTo(o)

Compares the current `VisualEditor.DataRow` object to the specified one. Returns an integer value that is the result of the comparison.

#### Signature

`public Integer compareTo(VisualEditor.DataRow o)`

#### Parameters

-   **o**: Type: [VisualEditor.DataRow](#apex_class_VisualEditor_DataRow "Contains information about one item in a picklist used in a Lightning component on a Lightning page.") A single item in a picklist.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Returns one of the following values:

-   Zero if the current package version is equal to the specified package version
-   An integer value greater than zero if the current package version is greater than the specified package version
-   An integer value less than zero if the current package version is less than the specified package version

### getLabel()

Returns the user-facing label of the picklist item.

#### Signature

`public String getLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValue()

Returns the value of the picklist item.

#### Signature

`public Object getValue()`

#### Return Value

Type: Object

### isSelected()

Returns the state of the picklist item, indicating whether it’s selected or not.

#### Signature

`public Boolean isSelected()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
