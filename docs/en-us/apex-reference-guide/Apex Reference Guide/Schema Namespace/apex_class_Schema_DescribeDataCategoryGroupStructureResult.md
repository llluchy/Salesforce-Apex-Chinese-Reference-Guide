---
doc_id: "apex_class_Schema_DescribeDataCategoryGroupStructureResult"
---

# Describe​DataCategoryGroupStructureResult Class

Contains the category groups and categories associated with KnowledgeArticleVersion and Question.

## Namespace

[Schema](atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm "The Schema namespace provides classes and methods for schema metadata information.")

## Usage

The `describeDataCategoryGroupStructures` method returns a list of `Schema.Describe​DataCategoryGroupStructureResult` objects containing the category groups and categories associated with the specified object.

For additional information and code examples, see [Accessing All Data Categories Associated with an sObject](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_dynamic_data_categories.htm).

## Example

The following is an example of how to instantiate a data category group structure describe result object:

```apex
List  pairs = 
      new List();

DataCategoryGroupSobjectTypePair pair1 = 
      new DataCategoryGroupSobjectTypePair();
pair1.setSobject('KnowledgeArticleVersion');
pair1.setDataCategoryGroupName('Regions');

DataCategoryGroupSobjectTypePair pair2 = 
      new DataCategoryGroupSobjectTypePair();
pair2.setSobject('Questions');
pair2.setDataCategoryGroupName('Regions');

pairs.add(pair1);
pairs.add(pair2);

Listresults = 
      Schema.describeDataCategoryGroupStructures(pairs, true);
```

## DescribeDataCategoryGroupStructureResult Methods

The following are methods for `DescribeDataCategoryGroupStructureResult`. All are instance methods.

## See Also

- [getDescription()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupStructureResult.htm#apex_Schema_DescribeDataCategoryGroupStructureResult_getDescription)
- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupStructureResult.htm#apex_Schema_DescribeDataCategoryGroupStructureResult_getLabel)
- [getName()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupStructureResult.htm#apex_Schema_DescribeDataCategoryGroupStructureResult_getName)
- [getSobject()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupStructureResult.htm#apex_Schema_DescribeDataCategoryGroupStructureResult_getSobject)
- [getTopCategories()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupStructureResult.htm#apex_Schema_DescribeDataCategoryGroupStructureResult_getTopCategories)

### getDescription()

Returns the description of the data category group.

#### Signature

`public String getDescription()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLabel()

Returns the label for the data category group used in the Salesforce user interface.

#### Signature

`public String getLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getName()

Returns the unique name used by the API to access to the data category group.

#### Signature

`public String getName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSobject()

Returns the name of object associated with the data category group.

#### Signature

`public String getSobject()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getTopCategories()

Returns a `Schema.DataCategory` object, that contains the top categories visible depending on the user's data category group visibility settings.

#### Signature

`public List<Schema.DataCategory> getTopCategories()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.DataCategory](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategory.htm#apex_class_Schema_DataCategory "Represents the categories within a category group.")\>

#### Usage

For more information on data category group visibility, see “Data Category Visibility” in the Salesforce online help.
