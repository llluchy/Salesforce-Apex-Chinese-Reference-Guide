---
doc_id: "apex_class_Schema_FieldSetMember"
---

# FieldSetMember Class

Contains methods for accessing the metadata for field set member fields.

## Namespace

[Schema](atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm "The Schema namespace provides classes and methods for schema metadata information.")

## Usage

Use the methods in the `Schema.FieldSetMember` class to get details about fields contained within a field set, such as the field label, type, a dynamic SOQL-ready field path, and so on. The following example shows how to get a collection of field set member describe result objects for a specific field set on an sObject:

```apex
List fields = 
    Schema.SObjectType.Account.fieldSets.getMap().get('field_set_name').getFields();
```

If you know the name of the field set in advance, you can access its fields more directly using an explicit reference to the field set:

```apex
List fields = 
    Schema.SObjectType.Account.fieldSets.field_set_name.getFields();
```

## See Also

- [FieldSet Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_fieldsets_describe.htm#apex_methods_system_fieldsets_describe)

## FieldSetMember Methods

The following are methods for `FieldSetMember`. All are instance methods.

## See Also

- [getDBRequired()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm#apex_Schema_FieldSetMember_getDBRequired)
- [getFieldPath()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm#apex_Schema_FieldSetMember_getFieldPath)
- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm#apex_Schema_FieldSetMember_getLabel)
- [getRequired()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm#apex_Schema_FieldSetMember_getRequired)
- [getType()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm#apex_Schema_FieldSetMember_getType)
- [getSObjectField()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm#apex_Schema_FieldSetMember_getSObjectField)

### getDBRequired()

Returns `true` if the field is required by the field’s definition in its sObject, otherwise, `false`.

#### Signature

`public Boolean getDBRequired()`

#### Return Value

Type: `Boolean`

### getFieldPath()

Returns a field path string in a format ready to be used in a dynamic SOQL query.

#### Signature

`public String getFieldPath()`

#### Return Value

Type: `String`

#### Example

See [Displaying a Field Set on a Visualforce Page](atlas.en-us.apexref.meta/apexref/apex_methods_system_fieldsets_describe.htm#FieldSetsDescribeExample) for an example of how to use this method.

### getLabel()

Returns the text label that’s displayed next to the field in the Salesforce user interface.

#### Signature

`public String getLabel()`

#### Return Value

Type: `String`

### getRequired()

Returns `true` if the field is required by the field set, otherwise, `false`.

#### Signature

`public Boolean getRequired()`

#### Return Value

Type: `Boolean`

### getType()

Returns the field’s Apex data type.

#### Signature

`public Schema.DisplayType getType()`

#### Return Value

Type: `Schema.DisplayType`

### getSObjectField()

Returns the token for this field.

#### Signature

`public Schema.sObjectField getSObjectField()`

#### Return Value

Type: [Schema.SObjectField](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_class_Schema_SObjectField "A Schema.sObjectField object is returned from the field describe result using the getController and getSObjectField methods.")
