---
doc_id: "apex_class_Schema_ChildRelationship"
---

# ChildRelationship Class

Contains methods for accessing the child relationship as well as the child sObject for a parent sObject.

## Namespace

[Schema](atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm "The Schema namespace provides classes and methods for schema metadata information.")

## Example

A ChildRelationship object is returned from the sObject describe result using the `getChildRelationship` method. For example:

```apex
Schema.DescribeSObjectResult R = Account.SObjectType.getDescribe();
List C = R.getChildRelationships();
```

## ChildRelationship Methods

The following are methods for `ChildRelationship`. All are instance methods.

## See Also

- [getChildSObject()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm#apex_Schema_ChildRelationship_getChildSObject)
- [getField()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm#apex_Schema_ChildRelationship_getField)
- [getRelationshipName()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm#apex_Schema_ChildRelationship_getRelationshipName)
- [isCascadeDelete()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm#apex_Schema_ChildRelationship_isCascadeDelete)
- [isDeprecatedAndHidden()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm#apex_Schema_ChildRelationship_isDeprecatedAndHidden)
- [isRestrictedDelete()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm#apex_Schema_ChildRelationship_isRestrictedDelete)

### getChildSObject()

Returns the token of the child sObject on which there is a foreign key back to the parent sObject.

#### Signature

`public Schema.SObjectType getChildSObject()`

#### Return Value

Type: [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")

### getField()

Returns the token of the field that has a foreign key back to the parent sObject.

#### Signature

`public Schema.SObjectField getField()`

#### Return Value

Type: [Schema.SObjectField](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_class_Schema_SObjectField "A Schema.sObjectField object is returned from the field describe result using the getController and getSObjectField methods.")

### getRelationshipName()

Returns the name of the relationship.

#### Signature

`public String getRelationshipName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### isCascadeDelete()

Returns `true` if the child object is deleted when the parent object is deleted, `false` otherwise.

#### Signature

`public Boolean isCascadeDelete()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isDeprecatedAndHidden()

Reserved for future use.

#### Signature

`public Boolean isDeprecatedAndHidden()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isRestrictedDelete()

Returns `true` if the parent object can't be deleted because it is referenced by a child object, `false` otherwise.

#### Signature

`public Boolean isRestrictedDelete()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
