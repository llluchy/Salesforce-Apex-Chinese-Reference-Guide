---
doc_id: "apex_class_Metadata_MetadataValue"
---

# MetadataValue Class

An abstract base class that represents a custom metadata component field.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

You can’t create instances of this abstract class. Instead, create an instance of a specific custom metadata component value class that derives from `Metadata.MetadataValue`, such as [`Metadata.CustomMetadataValue`](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadataValue.htm#apex_class_Metadata_CustomMetadataValue "Represents custom metadata values for a custom metadata component.").

## See Also

- [MetadataValue Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_MetadataValue.htm#apex_Metadata_MetadataValue_methods)

## MetadataValue Methods

The following are methods for `MetadataValue`.

## See Also

- [clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_MetadataValue.htm#apex_Metadata_MetadataValue_clone)

### clone()

Makes a duplicate copy of the `Metadata.MetadataValue`.

#### Signature

`public Object clone()`

#### Return Value

Type: Object
