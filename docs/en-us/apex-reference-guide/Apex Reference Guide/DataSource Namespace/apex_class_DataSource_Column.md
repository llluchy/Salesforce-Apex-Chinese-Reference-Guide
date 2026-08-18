---
doc_id: "apex_class_DataSource_Column"
---

# Column Class

Describes a column on a `DataSource.Table`. This class extends the `DataSourceUtil` class and inherits its methods.

## Namespace

[DataSource](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

## Usage

A list of column metadata is provided by the `DataSource.Connection` class when the `sync()` method is invoked. Each column can become a field on an external object.

The metadata is stored in Salesforce. Updating the Apex code to return new or updated values for the column metadata doesn’t automatically update the stored metadata in Salesforce.

## See Also

- [Column Properties](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_properties)
- [Column Methods](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_methods)

## Column Properties

The following are properties for `Column`.

## See Also

- [decimalPlaces](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_decimalPlaces)
- [description](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_description)
- [filterable](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_filterable)
- [isPicklistAlphabeticallySorted](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_isPicklistAlphabeticallySorted)
- [isPicklistRestricted](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_isPicklistRestricted)
- [label](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_label)
- [length](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_length)
- [name](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_name)
- [picklistValues](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_picklistValues)
- [referenceTargetField](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_referenceTargetField)
- [referenceTo](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_referenceTo)
- [sortable](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_sortable)
- [type](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_type)

### decimalPlaces

If the data type is numeric, the number of decimal places to the right of the decimal point.

#### Signature

`public Integer decimalPlaces {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### description

Description of what the column represents.

#### Signature

`public String description {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### filterable

Whether a result set can be filtered based on the values of the column.

#### Signature

`public Boolean filterable {get; set;}`

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isPicklistAlphabeticallySorted

Returns `true` if the picklist is sorted alphabetically, `false` otherwise.

#### Signature

`public Boolean isPicklistAlphabeticallySorted {get; set;}`

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isPicklistRestricted

Returns `true` if the picklist is restricted, `false` otherwise.

#### Signature

`public Boolean isPicklistRestricted {get; set;}`

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### label

User-friendly name for the column that appears in the Salesforce user interface.

#### Signature

`public String label {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### length

If the column is a string data type, the number of characters in the column. If the column is a numeric data type, the total number of digits on both sides of the decimal point, but excluding the decimal point.

#### Signature

`public Integer length {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### name

Name of the column in the external system.

#### Signature

`public String name {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### picklistValues

If the data type is a picklist, the picklist values.

#### Signature

`public List<Map<String,String>> picklistValues {get; set;}`

#### Property Value

Type: List<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>>

### referenceTargetField

API name of the custom field on the parent object whose values are compared against this column’s values. Matching values identify related records in an indirect lookup relationship. Applies only when the column’s data type is `INDIRECT_LOOKUP_TYPE`. For other data types, this value is ignored.

#### Signature

`public String referenceTargetField {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### referenceTo

API name of the parent object in the relationship that’s represented by this column. Applies only when the column’s data type is `LOOKUP_TYPE`, `EXTERNAL_LOOKUP_TYPE`, or `INDIRECT_LOOKUP_TYPE`. For other data types, this value is ignored.

#### Signature

`public String referenceTo {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### sortable

Whether a result set can be sorted based on the values of the column via an `ORDER BY` clause.

#### Signature

`public Boolean sortable {get; set;}`

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### type

Data type of the column.

#### Signature

`public DataSource.DataType type {get; set;}`

#### Property Value

Type: [DataSource.DataType](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_DataType.htm "Specifies the data types that are supported by the Apex Connector Framework.")

## Column Methods

The following are methods for `Column`.

## See Also

- [boolean(name)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_boolean)
- [currency(name, length, decimalPlaces)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_currency)
- [date(name)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_date)
- [datetime(name)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_datetime)
- [email(name)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_email)
- [externalLookup(name, domain)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_externalLookup)
- [get(name, label, description, isSortable, isFilterable, type, length, decimalPlaces, referenceTo, referenceTargetField, picklistValuesObj, isPicklistAlphabeticallySorted, isPicklistRestricted)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_get_4)
- [get(name, label, description, isSortable, isFilterable, type, length, decimalPlaces, referenceTo, referenceTargetField)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_get)
- [get(name, label, description, isSortable, isFilterable, type, length, decimalPlaces)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_get_2)
- [get(name, label, description, isSortable, isFilterable, type, length)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_get_3)
- [indirectLookup(name, domain, targetField)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_indirectLookup)
- [integer(name, length)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_integer)
- [lookup(name, domain)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_lookup)
- [multipicklist(name, picklistValues, isPicklistAlphabeticallySorted, isPicklistRestricted)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_multipicklist)
- [multipicklist(name, picklistValues)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_multipicklist_2)
- [number(name, length, decimalPlaces)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_number)
- [percent(name, length, decimalPlaces)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_percent)
- [phone(name)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_phone)
- [picklist(name, picklistValues, isPicklistAlphabeticallySorted, isPicklistRestricted)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_picklist)
- [picklist(name, picklistValues)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_picklist_2)
- [text(name, label, length)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_text)
- [text(name, length)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_text_2)
- [text(name)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_text_3)
- [textarea(name)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_textarea)
- [time(name)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_time)
- [url(name, length)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_url)
- [url(name)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_DataSource_Column_url_2)

### boolean(name)

Returns a new column of data type `BOOLEAN_TYPE`.

#### Signature

`public static DataSource.Column boolean(String name)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

### currency(name, length, decimalPlaces)

Returns a new column of data type `CURRENCY_TYPE`.

#### Signature

`public static DataSource.Column currency(String name, Integer length, Integer decimalPlaces)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    
-   **length**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    Number of characters allowed in the column.
    
-   **decimalPlaces**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    Number of decimal places to the right of the decimal point.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

### date(name)

Returns a new column of data type `DATE_TYPE`.

#### Signature

`public static DataSource.Column date(String name)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

### datetime(name)

Returns a new column of data type `DATETIME_TYPE`.

#### Signature

`public static DataSource.Column datetime(String name)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

### email(name)

Returns a new column of data type `EMAIL_TYPE`.

#### Signature

`public static DataSource.Column email(String name)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

### externalLookup(name, domain)

Returns a new column of data type `EXTERNAL_LOOKUP_TYPE`.

#### Signature

`public static DataSource.Column externalLookup(String name, String domain)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    
-   **domain**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    API
    
    name of the parent object in the external lookup relationship.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

The returned column has these property values.

| Property | Value |
| --- | --- |
| name | name |
| label | name |
| description | name |
| isSortable | true |
| isFilterable | true |
| type | DataSource.DataType.EXTERNAL\_LOOKUP\_TYPE |
| length | 255 |
| decimalPlaces | 0 |
| referenceTo | domain |
| referenceTargetField | null |

### get(name, label, description, isSortable, isFilterable, type, length, decimalPlaces, referenceTo, referenceTargetField, picklistValuesObj, isPicklistAlphabeticallySorted, isPicklistRestricted)

Returns a new column with the 13 specified `Column` property values.

#### Signature

`public static DataSource.Column get(String name, String label, String description, Boolean isSortable, Boolean isFilterable, DataSource.DataType type, Integer length, Integer decimalPlaces, String referenceTo, String referenceTargetField, Object picklistValuesObj, Boolean isPicklistAlphabeticallySorted, Boolean isPicklistRestricted)`

#### Parameters

See [Column Properties](#apex_DataSource_Column_properties) for information about each parameter.

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **label**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **description**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **isSortable**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
-   **isFilterable**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
-   **type**:
    
    Type: [DataSource.DataType](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_DataType.htm "Specifies the data types that are supported by the Apex Connector Framework.")
    
-   **length**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
-   **decimalPlaces**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
-   **referenceTo**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **referenceTargetField**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **picklistValuesObj**:
    
    Type: Object
    
-   **isPicklistAlphabeticallySorted**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
-   **isPicklistRestricted**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

### get(name, label, description, isSortable, isFilterable, type, length, decimalPlaces, referenceTo, referenceTargetField)

Returns a new column with the ten specified `Column` property values.

#### Signature

`public static DataSource.Column get(String name, String label, String description, Boolean isSortable, Boolean isFilterable, DataSource.DataType type, Integer length, Integer decimalPlaces, String referenceTo, String referenceTargetField)`

#### Parameters

See [Column Properties](#apex_DataSource_Column_properties) for information about each parameter.

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **label**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **description**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **isSortable**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
-   **isFilterable**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
-   **type**:
    
    Type: [DataSource.DataType](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_DataType.htm "Specifies the data types that are supported by the Apex Connector Framework.")
    
-   **length**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
-   **decimalPlaces**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
-   **referenceTo**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **referenceTargetField**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

### get(name, label, description, isSortable, isFilterable, type, length, decimalPlaces)

Returns a new column with the eight specified `Column` property values.

#### Signature

`public static DataSource.Column get(String name, String label, String description, Boolean isSortable, Boolean isFilterable, DataSource.DataType type, Integer length, Integer decimalPlaces)`

#### Parameters

See [Column Properties](#apex_DataSource_Column_properties) for information about each parameter.

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **label**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **description**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **isSortable**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
-   **isFilterable**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
-   **type**:
    
    Type: [DataSource.DataType](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_DataType.htm "Specifies the data types that are supported by the Apex Connector Framework.")
    
-   **length**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
-   **decimalPlaces**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

### get(name, label, description, isSortable, isFilterable, type, length)

Returns a new column with the seven specified `Column` property values.

#### Signature

`public static DataSource.Column get(String name, String label, String description, Boolean isSortable, Boolean isFilterable, DataSource.DataType type, Integer length)`

#### Parameters

See [Column Properties](#apex_DataSource_Column_properties) for information about each parameter.

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **label**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **description**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **isSortable**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
-   **isFilterable**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
-   **type**:
    
    Type: [DataSource.DataType](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_DataType.htm "Specifies the data types that are supported by the Apex Connector Framework.")
    
-   **length**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

### indirectLookup(name, domain, targetField)

Returns a new column of data type `INDIRECT_LOOKUP_TYPE`.

#### Signature

`public static DataSource.Column indirectLookup(String name, String domain, String targetField)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    
-   **domain**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    API
    
    name of the parent object in the indirect lookup relationship.
    
-   **targetField**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    API
    
    name of the custom field on the parent object whose values are compared against this column’s values. Matching values identify related records in an indirect lookup relationship.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

The returned column has these property values.

| Property | Value |
| --- | --- |
| name | name |
| label | name |
| description | name |
| isSortable | true |
| isFilterable | true |
| type | DataSource.DataType.INDIRECT\_LOOKUP\_TYPE |
| length | 255 |
| decimalPlaces | 0 |
| referenceTo | domain |
| referenceTargetField | targetField |

### integer(name, length)

Returns a new numeric column with no decimal places using the specified name and length.

#### Signature

`public static DataSource.Column integer(String name, Integer length)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The column name.
    
-   **length**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The column length.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

### lookup(name, domain)

Returns a new column of data type `LOOKUP_TYPE`.

#### Signature

`public static DataSource.Column lookup(String name, String domain)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    
-   **domain**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    API
    
    name of the parent object in the lookup relationship.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

The returned column has these property values.

| Property | Value |
| --- | --- |
| name | name |
| label | name |
| description | name |
| isSortable | true |
| isFilterable | true |
| type | DataSource.DataType.LOOKUP\_TYPE |
| length | 255 |
| decimalPlaces | 0 |
| referenceTo | domain |
| referenceTargetField | null |

### multipicklist(name, picklistValues, isPicklistAlphabeticallySorted, isPicklistRestricted)

Returns a new column of data type `PICKLIST_MULTISELECT_TYPE` with the specified name and picklist values. You can also specify whether the picklist is sorted alphabetically or if the picklist is restricted.

#### Signature

`public static DataSource.Column multipicklist(String name, List<Map<String,String>> picklistValues, Boolean isPicklistAlphabeticallySorted, Boolean isPicklistRestricted)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    
-   **picklistValues**:
    
    Type: List<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>>
    
-   **isPicklistAlphabeticallySorted**: Indicates whether the picklist is sorted alphabetically.
-   **isPicklistRestricted**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
    Indicates whether the picklist is restricted.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

### multipicklist(name, picklistValues)

Returns a new column of data type `PICKLIST_MULTISELECT_TYPE` with the specified name and picklist values.

#### Signature

`public static DataSource.Column multipicklist(String name, List<Map<String,String>> picklistValues)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    
-   **picklistValues**:
    
    Type: List<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>>
    
    List of picklist values.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

### number(name, length, decimalPlaces)

Returns a new column of data type `NUMBER_TYPE`.

#### Signature

`public static DataSource.Column number(String name, Integer length, Integer decimalPlaces)`

#### Parameters

See [Column Properties](#apex_DataSource_Column_properties) for information about each parameter.

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **length**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
-   **decimalPlaces**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

The returned column has these property values.

| Property | Value |
| --- | --- |
| name | name |
| label | name |
| description | name |
| isSortable | true |
| isFilterable | true |
| type | DataSource.DataType.NUMBER\_TYPE |
| length | length |
| decimalPlaces | decimalPlaces |

### percent(name, length, decimalPlaces)

Returns a new column of data type `PERCENT_TYPE`.

#### Signature

`public static DataSource.Column percent(String name, Integer length, Integer decimalPlaces)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    
-   **length**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    Number of characters allowed in the column.
    
-   **decimalPlaces**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    Number of decimal places to the right of the decimal point.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

### phone(name)

Returns a new column of data type `PHONE_TYPE`.

#### Signature

`public static DataSource.Column phone(String name)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

### picklist(name, picklistValues, isPicklistAlphabeticallySorted, isPicklistRestricted)

Returns a new column of data type `PICKLIST_TYPE` with the specified name and picklist values. You can also specify whether the picklist is sorted alphabetically or if the picklist is restricted.

#### Signature

`public static DataSource.Column picklist(String name, List<Map<String,String>> picklistValues, Boolean isPicklistAlphabeticallySorted, Boolean isPicklistRestricted)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    
-   **picklistValues**:
    
    Type: List<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>>
    
    List of picklist values.
    
-   **isPicklistAlphabeticallySorted**: Indicates whether the picklist is sorted alphabetically.
-   **isPicklistRestricted**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
    Indicates whether the picklist is restricted.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

### picklist(name, picklistValues)

Returns a new column of data type `PICKLIST_TYPE` with the specified name and picklist values.

#### Signature

`public static DataSource.Column picklist(String name, List<Map<String,String>> picklistValues)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    
-   **picklistValues**:
    
    Type: List<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>>
    
    List of picklist values.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

### text(name, label, length)

Returns a new column of data type `STRING_SHORT_TYPE` or `STRING_LONG_TYPE`, with the specified name, label, and length.

#### Signature

`public static DataSource.Column text(String name, String label, Integer length)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    
-   **label**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    User-friendly name
    
    for the column that appears in the Salesforce user interface.
    
-   **length**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    Number of characters allowed in the column.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

The returned column has these property values.

| Property | Value |
| --- | --- |
| name | name |
| label | label |
| description | label |
| isSortable | true |
| isFilterable | true |
| type | DataSource.DataType.STRING\_SHORT\_TYPE if length is 255 or less
DataSource.DataType.STRING\_LONG\_TYPE if length is greater than 255

 |
| length | length |
| decimalPlaces | 0 |

### text(name, length)

Returns a new column of data type `STRING_SHORT_TYPE` or `STRING_LONG_TYPE`, with the specified name and length.

#### Signature

`public static DataSource.Column text(String name, Integer length)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    
-   **length**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    Number of characters allowed in the column.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

The returned column has these property values.

| Property | Value |
| --- | --- |
| name | name |
| label | name |
| description | name |
| isSortable | true |
| isFilterable | true |
| type | DataSource.DataType.STRING\_SHORT\_TYPE if length is 255 or less
DataSource.DataType.STRING\_LONG\_TYPE if length is greater than 255

 |
| length | length |
| decimalPlaces | 0 |

### text(name)

Returns a new column of data type `STRING_SHORT_TYPE` with the specified name and the length of 255 characters.

#### Signature

`public static DataSource.Column text(String name)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

The returned column has these property values.

| Property | Value |
| --- | --- |
| name | name |
| label | name |
| description | name |
| isSortable | true |
| isFilterable | true |
| type | DataSource.DataType.STRING\_SHORT\_TYPE |
| length | 255 |
| decimalPlaces | 0 |

### textarea(name)

Returns a new column of data type `STRING_LONG_TYPE` with the specified name and the length of 32,000 characters.

#### Signature

`public static DataSource.Column textarea(String name)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

The returned column has these property values.

| Property | Value |
| --- | --- |
| name | name |
| label | name |
| description | name |
| isSortable | true |
| isFilterable | true |
| type | DataSource.DataType.STRING\_LONG\_TYPE |
| length | 32000 |
| decimalPlaces | 0 |

### time(name)

Returns a new column of data type `Time` with the specified name.

#### Signature

`public static DataSource.Column time(String name)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

### url(name, length)

Returns a new column of data type `URL_TYPE` with the specified name and length.

#### Signature

`public static DataSource.Column url(String name, Integer length)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    
-   **length**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    Number of characters allowed in the column.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

The returned column has these property values.

| Property | Value |
| --- | --- |
| name | name |
| label | name |
| description | name |
| isSortable | true |
| isFilterable | true |
| type | DataSource.DataType.URL\_TYPE |
| length | length |
| decimalPlaces | 0 |

### url(name)

Returns a new column of data type `URL_TYPE` with the specified name and the length of 1,000 characters.

#### Signature

`public static DataSource.Column url(String name)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column.
    

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

The returned column has these property values.

| Property | Value |
| --- | --- |
| name | name |
| label | name |
| description | name |
| isSortable | true |
| isFilterable | true |
| type | DataSource.DataType.URL\_TYPE |
| length | 1000 |
| decimalPlaces | 0 |
