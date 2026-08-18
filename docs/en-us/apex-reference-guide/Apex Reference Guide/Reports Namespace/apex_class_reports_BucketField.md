---
doc_id: "apex_class_reports_BucketField"
---

# BucketField Class

Contains methods and constructors to work with information about a bucket field, including bucket type, name, and bucketed values.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## See Also

- [BucketField Constructors](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_constructors)
- [BucketField Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_methods)

## BucketField Constructors

The following are constructors for `BucketField`.

## See Also

- [BucketField(bucketType, devloperName, label, nullTreatedAsZero, otherBucketLabel, sourceColumnName, values)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_ctor)
- [BucketField()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_ctor_2)

### BucketField(bucketType, devloperName, label, nullTreatedAsZero, otherBucketLabel, sourceColumnName, values)

Creates an instance of the `Reports.BucketField` class using the specified parameters.

#### Signature

`public BucketField(Reports.BucketType bucketType, String devloperName, String label, Boolean nullTreatedAsZero, String otherBucketLabel, String sourceColumnName, List<Reports.BucketFieldValue> values)`

#### Parameters

-   **bucketType**:
    
    Type: [Reports.BucketType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_BucketType.htm#apex_enum_reports_BucketType "The types of values included in a bucket.")
    
    The type of bucket.
    
-   **devloperName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    API
    
    name of the bucket.
    
-   **label**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    User-facing
    
    name of the bucket.
    
-   **nullTreatedAsZero**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
    Specifies whether null values are converted to zero (`true`) or not (`false`).
    
-   **otherBucketLabel**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the fields grouped as `Other` (in buckets of `BucketType` `PICKLIST`).
    
-   **sourceColumnName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the bucketed field.
    
-   **values**:
    
    Type: List<[Reports.BucketType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_BucketType.htm#apex_enum_reports_BucketType "The types of values included in a bucket.")\>
    
    Types of the values included in the bucket.
    

### BucketField()

Creates an instance of the `Reports.BucketField` class. You can then set values by using the class’s `set` methods.

#### Signature

`public BucketField()`

## BucketField Methods

The following are methods for `BucketField`.

## See Also

- [getBucketType()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_getBucketType)
- [getDevloperName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_getDevloperName)
- [getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_getLabel)
- [getNullTreatedAsZero()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_getNullTreatedAsZero)
- [getOtherBucketLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_getOtherBucketLabel)
- [getSourceColumnName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_getSourceColumnName)
- [getValues()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_getValues)
- [setBucketType(value)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_setBucketType)
- [setBucketType(bucketType)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_setBucketType_2)
- [setDevloperName(devloperName)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_setDevloperName)
- [setLabel(label)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_setLabel)
- [setNullTreatedAsZero(nullTreatedAsZero)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_setNullTreatedAsZero)
- [setOtherBucketLabel(otherBucketLabel)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_setOtherBucketLabel)
- [setSourceColumnName(sourceColumnName)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_setSourceColumnName)
- [setValues(values)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_setValues)
- [toString()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_toString)

### getBucketType()

Returns the bucket type.

#### Signature

`public Reports.BucketType getBucketType()`

#### Return Value

Type: [Reports.BucketType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_BucketType.htm#apex_enum_reports_BucketType "The types of values included in a bucket.")

### getDevloperName()

Returns the bucket’s API name.

#### Signature

`public String getDevloperName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLabel()

Returns the user-facing name of the bucket.

#### Signature

`public String getLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getNullTreatedAsZero()

Returns `true` if null values are converted to the number zero, otherwise returns `false`.

#### Signature

`public Boolean getNullTreatedAsZero()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getOtherBucketLabel()

Returns the name of fields grouped as `Other` in buckets of type `PICKLIST`.

#### Signature

`public String getOtherBucketLabel()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSourceColumnName()

Returns the API name of the bucketed field.

#### Signature

`public String getSourceColumnName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValues()

Returns the report values grouped by the bucket field.

#### Signature

`public List<Reports.BucketFieldValue> getValues()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.BucketFieldValue](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm#apex_class_reports_BucketFieldValue "Contains information about the report values included in a bucket field.")\>

### setBucketType(value)

Sets the `BucketType` of the bucket.

#### Signature

`public void setBucketType(String value)`

#### Parameters

-   **value**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    See
    
    the [Reports.BucketType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_BucketType.htm#apex_enum_reports_BucketType "The types of values included in a bucket.") enum for valid values.
    

#### Return Value

Type: void

### setBucketType(bucketType)

Sets the `BucketType` of the bucket.

#### Signature

`public void setBucketType(Reports.BucketType bucketType)`

#### Parameters

-   **bucketType**:
    
    Type: [Reports.BucketType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_BucketType.htm#apex_enum_reports_BucketType "The types of values included in a bucket.")
    

#### Return Value

Type: void

### setDevloperName(devloperName)

Sets the API name of the bucket.

#### Signature

`public void setDevloperName(String devloperName)`

#### Parameters

-   **devloperName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The API name to assign to the bucket.
    

#### Return Value

Type: void

### setLabel(label)

Sets the user-facing name of the bucket.

#### Signature

`public void setLabel(String label)`

#### Parameters

-   **label**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void

### setNullTreatedAsZero(nullTreatedAsZero)

Specifies whether null values in the bucket are converted to zero (`true`) or not (`false`).

#### Signature

`public void setNullTreatedAsZero(Boolean nullTreatedAsZero)`

#### Parameters

-   **nullTreatedAsZero**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    

#### Return Value

Type: void

### setOtherBucketLabel(otherBucketLabel)

Sets the name of the fields grouped as `Other` (in buckets of `BucketType` `PICKLIST`).

#### Signature

`public void setOtherBucketLabel(String otherBucketLabel)`

#### Parameters

-   **otherBucketLabel**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void

### setSourceColumnName(sourceColumnName)

Specifies the name of the bucketed field.

#### Signature

`public void setSourceColumnName(String sourceColumnName)`

#### Parameters

-   **sourceColumnName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void

### setValues(values)

Specifies which type of values are included in the bucket.

#### Signature

`public void setValues(List<Reports.BucketFieldValue> values)`

#### Parameters

-   **values**:
    
    Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.BucketFieldValue](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm#apex_class_reports_BucketFieldValue "Contains information about the report values included in a bucket field.")\>
    

#### Return Value

Type: void

### toString()

Returns a string.

#### Signature

`public String toString()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
