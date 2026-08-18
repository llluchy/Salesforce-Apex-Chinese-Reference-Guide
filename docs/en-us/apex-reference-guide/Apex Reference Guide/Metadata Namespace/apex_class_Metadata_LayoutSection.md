---
doc_id: "apex_class_Metadata_LayoutSection"
---

# LayoutSection Class

Represents a section of a page layout, such as the Custom Links section.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [`Metadata.Layout`](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “LayoutSection” in the *[Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_intro.htm)*.

## See Also

- [LayoutSection Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutSection.htm#apex_Metadata_LayoutSection_properties)
- [LayoutSection Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutSection.htm#apex_Metadata_LayoutSection_methods)

## LayoutSection Properties

The following are properties for `LayoutSection`.

## See Also

- [customLabel](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutSection.htm#apex_Metadata_LayoutSection_customLabel)
- [detailHeading](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutSection.htm#apex_Metadata_LayoutSection_detailHeading)
- [editHeading](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutSection.htm#apex_Metadata_LayoutSection_editHeading)
- [label](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutSection.htm#apex_Metadata_LayoutSection_label)
- [layoutColumns](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutSection.htm#apex_Metadata_LayoutSection_layoutColumns)
- [style](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutSection.htm#apex_Metadata_LayoutSection_style)

### customLabel

Indicates if this section's label is custom or standard (built-in).

#### Signature

`public Boolean customLabel {get; set;}`

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### detailHeading

Controls whether this heading appears on the detail page.

#### Signature

`public Boolean detailHeading {get; set;}`

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### editHeading

Controls whether this heading appears on the edit page.

#### Signature

`public Boolean editHeading {get; set;}`

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### label

The label; either standard or custom, based on the customLabel property.

#### Signature

`public String label {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### layoutColumns

Lists the layout columns. You can have one, two, or three columns, ordered left to right, are possible.

#### Signature

`public List<Metadata.LayoutColumn> layoutColumns {get; set;}`

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.LayoutColumn](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutColumn.htm#apex_class_Metadata_LayoutColumn "Represents the items in a column within a layout section.")\>

### style

The style of the layout for this section.

#### Signature

`public Metadata.LayoutSectionStyle style {get; set;}`

#### Property Value

Type: [Metadata.LayoutSectionStyle](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_LayoutSectionStyle.htm#apex_enum_Metadata_LayoutSectionStyle "Describes the possible styles for a layout section.")

## LayoutSection Methods

The following are methods for `LayoutSection`.

## See Also

- [clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutSection.htm#apex_Metadata_LayoutSection_clone)

### clone()

Makes a duplicate copy of the `Metadata.LayoutSection`.

#### Signature

`public Object clone()`

#### Return Value

Type: Object
