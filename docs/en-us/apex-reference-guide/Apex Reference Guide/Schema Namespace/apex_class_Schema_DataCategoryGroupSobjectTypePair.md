---
doc_id: "apex_class_Schema_DataCategoryGroupSobjectTypePair"
---

# DataCategoryGroupSobjectTypePair Class

Specifies a category group and an associated object.

## Namespace

[Schema](atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm "The Schema namespace provides classes and methods for schema metadata information.")

## Usage

Schema.DataCategoryGroupSobjectTypePair is used by the `describeDataCategory GroupStructures` method to return the categories available to this object.

## See Also

- [DataCategoryGroupSobjectTypePair Constructors](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategoryGroupSobjectTypePair.htm#apex_Schema_DataCategoryGroupSobjectTypePair_constructors)
- [DataCategoryGroupSobjectTypePair Methods](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategoryGroupSobjectTypePair.htm#apex_Schema_DataCategoryGroupSobjectTypePair_methods)

## DataCategoryGroupSobjectTypePair Constructors

The following are constructors for `DataCategoryGroupSobjectTypePair`.

## See Also

- [DataCategoryGroupSobjectTypePair()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategoryGroupSobjectTypePair.htm#apex_Schema_DataCategoryGroupSobjectTypePair_ctor)

### DataCategoryGroupSobjectTypePair()

Creates a new instance of the `Schema.DataCategoryGroupSobjectTypePair` class.

#### Signature

`public DataCategoryGroupSobjectTypePair()`

## DataCategoryGroupSobjectTypePair Methods

The following are methods for `DataCategoryGroupSobjectTypePair`. All are instance methods.

## See Also

- [getDataCategoryGroupName()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategoryGroupSobjectTypePair.htm#apex_Schema_DataCategoryGroupSobjectTypePair_getDataCategoryGroupName)
- [getSobject()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategoryGroupSobjectTypePair.htm#apex_System_DataCategoryGroupSobjectTypePair_getSobject)
- [setDataCategoryGroupName(name)](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategoryGroupSobjectTypePair.htm#apex_Schema_DataCategoryGroupSobjectTypePair_setDataCategoryGroupName)
- [setSobject(sObjectName)](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategoryGroupSobjectTypePair.htm#apex_Schema_DataCategoryGroupSobjectTypePair_setSobject)

### getDataCategoryGroupName()

Returns the unique name used by the API to access the data category group.

#### Signature

`public String getDataCategoryGroupName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSobject()

Returns the object name associated with the data category group.

#### Signature

`public String getSobject()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### setDataCategoryGroupName(name)

Specifies the unique name used by the API to access the data category group.

#### Signature

`public String setDataCategoryGroupName(String name)`

#### Parameters

-   **name**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setSobject(sObjectName)

Sets the sObject associated with the data category group.

#### Signature

`public Void setSobject(String sObjectName)`

#### Parameters

-   **sObjectName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The sObjectName is the object name associated with the data category group. Valid values are:
    
    -   `KnowledgeArticleVersion`—for article types.
    -   `Question`—for questions from Answers.

#### Return Value

Type: Void
