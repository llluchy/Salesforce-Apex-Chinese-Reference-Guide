---
doc_id: "apex_class_Metadata_ConsoleComponent"
---

# ConsoleComponent Class

Represents a custom console component on a section of a page layout.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [`Metadata.Layout`](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “ConsoleComponent” in the *[Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_intro.htm)*.

## See Also

- [ConsoleComponent Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ConsoleComponent.htm#apex_Metadata_ConsoleComponent_properties)
- [ConsoleComponent Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ConsoleComponent.htm#apex_Metadata_ConsoleComponent_methods)

## ConsoleComponent Properties

The following are properties for `ConsoleComponent`.

## See Also

- [height](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ConsoleComponent.htm#apex_Metadata_ConsoleComponent_height)
- [location](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ConsoleComponent.htm#apex_Metadata_ConsoleComponent_location)
- [visualforcePage](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ConsoleComponent.htm#apex_Metadata_ConsoleComponent_visualforcePage)
- [width](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ConsoleComponent.htm#apex_Metadata_ConsoleComponent_width)

### height

The height of the custom console component in pixels.

#### Signature

`public Integer height {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### location

The location of the custom console component on the page layout. Valid values are right, left, top, and bottom.

#### Signature

`public String location {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### visualforcePage

The unique name of the custom console component.

#### Signature

`public String visualforcePage {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### width

The width of the custom console component in pixels.

#### Signature

`public Integer width {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

## ConsoleComponent Methods

The following are methods for `ConsoleComponent`.

## See Also

- [clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ConsoleComponent.htm#apex_Metadata_ConsoleComponent_clone)

### clone()

Makes a duplicate copy of the `Metadata.ConsoleComponent`.

#### Signature

`public Object clone()`

#### Return Value

Type: Object
