---
doc_id: "apex_class_Metadata_RelatedListItem"
---

# RelatedListItem Class

Represents an item in the related list in a page layout.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [`Metadata.Layout`](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “RelatedListItem” in the *[Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_intro.htm)*.

## See Also

- [RelatedListItem Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedListItem.htm#apex_Metadata_RelatedListItem_properties)
- [RelatedListItem Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedListItem.htm#apex_Metadata_RelatedListItem_methods)

## RelatedListItem Properties

The following are properties for `RelatedListItem`.

## See Also

- [customButtons](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedListItem.htm#apex_Metadata_RelatedListItem_customButtons)
- [excludeButtons](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedListItem.htm#apex_Metadata_RelatedListItem_excludeButtons)
- [fields](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedListItem.htm#apex_Metadata_RelatedListItem_fields)
- [quickActions](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedListItem.htm#apex_Metadata_RelatedListItem_quickActions)
- [relatedList](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedListItem.htm#apex_Metadata_RelatedListItem_relatedList)
- [sortField](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedListItem.htm#apex_Metadata_RelatedListItem_sortField)
- [sortOrder](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedListItem.htm#apex_Metadata_RelatedListItem_sortOrder)

### customButtons

A list of custom buttons used in the related list.

#### Signature

`public List<String> customButtons {get; set;}`

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

For more information, see “Define Custom Buttons and Links” in the Salesforce online help.

### excludeButtons

A list of excluded related-list buttons.

#### Signature

`public List<String> excludeButtons {get; set;}`

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### fields

A list of fields displayed in the related list. Uses aliases instead of field or API names.

#### Signature

`public List<String> fields {get; set;}`

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### quickActions

A list of quick actions used on the related list.

#### Signature

`public List<String> quickActions {get; set;}`

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### relatedList

The name of the related list.

#### Signature

`public String relatedList {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### sortField

The name of the field used for sorting.

#### Signature

`public String sortField {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### sortOrder

When `sortField` is set, the `sortOrder` property determines the sort order.

#### Signature

`public Metadata.SortOrder sortOrder {get; set;}`

#### Property Value

Type: [Metadata.SortOrder](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_SortOrder.htm#apex_enum_Metadata_SortOrder "Describes the sort order of a related list.")

## RelatedListItem Methods

The following are methods for `RelatedListItem`.

## See Also

- [clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedListItem.htm#apex_Metadata_RelatedListItem_clone)

### clone()

Makes a duplicate copy of the `Metadata.RelatedListItem`.

#### Signature

`public Object clone()`

#### Return Value

Type: Object
