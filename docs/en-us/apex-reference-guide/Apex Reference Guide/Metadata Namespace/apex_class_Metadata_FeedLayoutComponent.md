---
doc_id: "apex_class_Metadata_FeedLayoutComponent"
---

# FeedLayoutComponent Class

Represents a component in the feed view of a feed-based page layout.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [`Metadata.Layout`](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “FeedLayoutComponent” in the *[Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_intro.htm)*.

## See Also

- [FeedLayoutComponent Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayoutComponent.htm#apex_Metadata_FeedLayoutComponent_properties)
- [FeedLayoutComponent Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayoutComponent.htm#apex_Metadata_FeedLayoutComponent_methods)

## FeedLayoutComponent Properties

The following are properties for `FeedLayoutComponent`.

See `FeedLayoutComponent` in the *[Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_intro.htm)*

## See Also

- [componentType](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayoutComponent.htm#apex_Metadata_FeedLayoutComponent_componentType)
- [height](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayoutComponent.htm#apex_Metadata_FeedLayoutComponent_height)
- [page_x](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayoutComponent.htm#apex_Metadata_FeedLayoutComponent_page_x)

### componentType

Represents a component in the feed view of a feed-based page layout. The type of component is required.

#### Signature

`public Metadata.FeedLayoutComponentType componentType {get; set;}`

#### Property Value

Type: [Metadata.FeedLayoutComponentType](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_FeedLayoutComponentType.htm#apex_enum_Metadata_FeedLayoutComponentType "Indicates the type of feed layout component.")

### height

The height, in pixels, of the component. Doesn’t apply to `standardComponents`

#### Signature

`public Integer height {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### page\_x

The name of the Visualforce page used as a custom component.

#### Signature

`public String page_x {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## FeedLayoutComponent Methods

The following are methods for `FeedLayoutComponent`.

## See Also

- [clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_FeedLayoutComponent.htm#apex_Metadata_FeedLayoutComponent_clone)

### clone()

Makes a duplicate copy of the `Metadata.FeedLayoutComponent`.

#### Signature

`public Object clone()`

#### Return Value

Type: Object
