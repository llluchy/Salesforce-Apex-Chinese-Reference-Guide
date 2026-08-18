---
doc_id: "apex_class_Schema_DescribeDataCategoryGroupResult"
---

# Describe​DataCategoryGroupResult Class

Contains the list of the category groups associated with KnowledgeArticleVersion and Question.

## Namespace

[Schema](atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm "The Schema namespace provides classes and methods for schema metadata information.")

## Usage

The `describeDataCategoryGroups` method returns a `Schema.DescribeDataCategoryGroupResult` object containing the list of the category groups associated with the specified object.

For additional information and code examples using `describeDataCategoryGroups`, see [Accessing All Data Categories Associated with an sObject](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_dynamic_data_categories.htm).

## Example

The following is an example of how to instantiate a data category group describe result object:

```apex
List String> objType = new ListString>();
objType.add('KnowledgeArticleVersion');
objType.add('Question');

List describeCategoryResult = 
   Schema.describeDataCategoryGroups(objType);
```

## DescribeDataCategoryGroupResult Methods

The following are methods for `DescribeDataCategoryGroupResult`. All are instance methods.

## See Also

- [getCategoryCount()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupResult.htm#apex_Schema_DescribeDataCategoryGroupResult_getCategoryCount)
- [getDescription()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupResult.htm#apex_Schema_DescribeDataCategoryGroupResult_getDescription)
- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupResult.htm#apex_Schema_DescribeDataCategoryGroupResult_getLabel)
- [getName()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupResult.htm#apex_Schema_DescribeDataCategoryGroupResult_getName)
- [getSobject()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupResult.htm#apex_Schema_DescribeDataCategoryGroupResult_getSobject)

### getCategoryCount()

Returns the number of visible data categories in the data category group.

#### Signature

`public Integer getCategoryCount()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

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

Returns the object name associated with the data category group.

#### Signature

`public String getSobject()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
