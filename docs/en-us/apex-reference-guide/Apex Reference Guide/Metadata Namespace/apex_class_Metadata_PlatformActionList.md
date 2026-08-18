---
doc_id: "apex_class_Metadata_PlatformActionList"
---

# PlatformActionList Class

Represents the list of actions, and their order, that display in the Salesforce mobile action bar for the layout.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [`Metadata.Layout`](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “PlatformActionList” in the *[Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_intro.htm)*.

## See Also

- [PlatformActionList Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionList.htm#apex_Metadata_PlatformActionList_properties)
- [PlatformActionList Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionList.htm#apex_Metadata_PlatformActionList_methods)

## PlatformActionList Properties

The following are properties for `PlatformActionList`.

## See Also

- [actionListContext](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionList.htm#apex_Metadata_PlatformActionList_actionListContext)
- [platformActionListItems](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionList.htm#apex_Metadata_PlatformActionList_platformActionListItems)
- [relatedSourceEntity](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionList.htm#apex_Metadata_PlatformActionList_relatedSourceEntity)

### actionListContext

The context of the action list.

#### Signature

`public Metadata.PlatformActionListContextEnum actionListContext {get; set;}`

#### Property Value

Type: [Metadata.PlatformActionListContextEnum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_PlatformActionListContextEnum.htm#apex_enum_Metadata_PlatformActionListContextEnum "Describes the different contexts of action lists.")

### platformActionListItems

The actions in the platform action list.

#### Signature

`public List<Metadata.PlatformActionListItem> platformActionListItems {get; set;}`

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.PlatformActionListItem](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionListItem.htm#apex_class_Metadata_PlatformActionListItem "Represents an action in the platform action list for a layout.")\>

### relatedSourceEntity

When the `actionListContext` property is “RelatedList” or” “RelatedListRecord”, this field represents the API name of the related list to which the action belongs.

#### Signature

`public String relatedSourceEntity {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## PlatformActionList Methods

The following are methods for `PlatformActionList`.

## See Also

- [clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionList.htm#apex_Metadata_PlatformActionList_clone)

### clone()

Makes a duplicate copy of the `Metadata.PlatformActionList`.

#### Signature

`public Object clone()`

#### Return Value

Type: Object
