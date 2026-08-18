---
doc_id: "apex_class_reports_CrossFilter"
---

# CrossFilter Class

Contains methods and constructors used to work with information about a cross filter.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## See Also

- [CrossFilter Constructors](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_constructors)
- [CrossFilter Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_methods)

## CrossFilter Constructors

The following are constructors for `CrossFilter`.

## See Also

- [CrossFilter(criteria, includesObject, primaryEntityField, relatedEntity, relatedEntityJoinField)](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_ctor)
- [CrossFilter()](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_ctor_2)

### CrossFilter(criteria, includesObject, primaryEntityField, relatedEntity, relatedEntityJoinField)

Creates an instance of the `Reports.CrossFilter` class using the specified parameters.

#### Signature

`public CrossFilter(List<Reports.ReportFilter> criteria, Boolean includesObject, String primaryEntityField, String relatedEntity, String relatedEntityJoinField)`

#### Parameters

-   **criteria**:
    
    Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.ReportFilter](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_class_reports_reportfilter "Contains information about a report filter, including column, operator, and value.")\>
    
    Information about how to filter the `relatedEntity`. Relates the primary entity with a subset of the `relatedEntity`.
    
-   **includesObject**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
    Specifies whether objects returned have a relationship with the `relatedEntity` (`true) or not (false).`
    
-   **primaryEntityField**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The name of the object on which the cross filter is evaluated.
    
-   **relatedEntity**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The name of the object that the `primaryEntityField` is evaluated against—the right-hand side of the cross filter.
    
-   **relatedEntityJoinField**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The name of the field used to join the `primaryEntityField` and `relatedEntity`.
    

### CrossFilter()

Creates an instance of the `Reports.CrossFilter` class. You can then set values by using the class’s `set` methods.

#### Signature

`public CrossFilter()`

## CrossFilter Methods

The following are methods for `CrossFilter`.

## See Also

- [getCriteria()](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_getCriteria)
- [getIncludesObject()](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_getIncludesObject)
- [getPrimaryEntityField()](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_getPrimaryEntityField)
- [getRelatedEntity()](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_getRelatedEntity)
- [getRelatedEntityJoinField()](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_getRelatedEntityJoinField)
- [setCriteria(criteria)](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_setCriteria)
- [setIncludesObject(includesObject)](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_setIncludesObject)
- [setPrimaryEntityField(primaryEntityField)](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_setPrimaryEntityField)
- [setRelatedEntity(relatedEntity)](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_setRelatedEntity)
- [setRelatedEntityJoinField(relatedEntityJoinField)](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_setRelatedEntityJoinField)
- [toString()](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_reports_CrossFilter_toString)

### getCriteria()

Returns information about how to filter the `relatedEntity`. Describes the subset of the `relatedEntity` which the primary entity is evaluated against.

#### Signature

`public List<Reports.ReportFilter> getCriteria()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.ReportFilter](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_class_reports_reportfilter "Contains information about a report filter, including column, operator, and value.")\>

### getIncludesObject()

Returns `true` if primary object has a relationship with the `relatedEntity`, otherwise returns `false`.

#### Signature

`public Boolean getIncludesObject()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getPrimaryEntityField()

Returns the name of the object on which the cross filter is evaluated.

#### Signature

`public String getPrimaryEntityField()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getRelatedEntity()

Returns name of the object that the `primaryEntityField` is evaluated against—the right-hand side of the cross filter.

#### Signature

`public String getRelatedEntity()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getRelatedEntityJoinField()

Returns the name of the field used to join the `primaryEntityField` and `relatedEntity`.

#### Signature

`public String getRelatedEntityJoinField()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### setCriteria(criteria)

Specifis how to filter the `relatedEntity`. Relates the primary entity with a subset of the `relatedEntity`.

#### Signature

`public void setCriteria(List<Reports.ReportFilter> criteria)`

#### Parameters

-   **criteria**:
    
    Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.ReportFilter](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_class_reports_reportfilter "Contains information about a report filter, including column, operator, and value.")\>
    

#### Return Value

Type: void

### setIncludesObject(includesObject)

Specifies whether objects returned have a relationship with the `relatedEntity` (`true`) or not (`false`).

#### Signature

`public void setIncludesObject(Boolean includesObject)`

#### Parameters

-   **includesObject**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    

#### Return Value

Type: void

### setPrimaryEntityField(primaryEntityField)

Specifies the name of the object on which the cross filter is evaluated.

#### Signature

`public void setPrimaryEntityField(String primaryEntityField)`

#### Parameters

-   **primaryEntityField**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void

### setRelatedEntity(relatedEntity)

Specifies the name of the object that the `primaryEntityField` is evaluated against—the right-hand side of the cross filter.

#### Signature

`public void setRelatedEntity(String relatedEntity)`

#### Parameters

-   **relatedEntity**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void

### setRelatedEntityJoinField(relatedEntityJoinField)

Specifies the name of the field used to join the `primaryEntityField` and `relatedEntity`.

#### Signature

`public void setRelatedEntityJoinField(String relatedEntityJoinField)`

#### Parameters

-   **relatedEntityJoinField**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void

### toString()

Returns a string.

#### Signature

`public String toString()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
