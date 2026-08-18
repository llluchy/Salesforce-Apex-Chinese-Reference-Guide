---
doc_id: "apex_class_sfsqlquery_Row"
---

# Row Class

Wraps a single Data 360 SQL query result row and provides typed accessor methods for retrieving column values by name or by 0-based index. `Row` instances are produced by `SqlRowIterator` and `SqlQueueable`; you don't construct `Row` objects directly during normal usage.

## Namespace

[sfsqlquery](atlas.en-us.apexref.meta/apexref/apex_namespace_sfsqlquery.htm "Contains classes for executing SQL queries against Data 360 data spaces from Apex.")

## Usage

Every typed accessor is available in two forms: by column name (`String`) or by 0-based column index (`Integer`). All typed accessors return `null` when the underlying value is null. The accessors throw `IllegalArgumentException` if the column name isn't found or if the column index is out of bounds. Duplicate column names in a result set cause `getColumnIndex()` to throw `IllegalArgumentException`.

## Example

Access column values by name and by index:

```apex
sfsqlquery.SqlRowIterator iterator = sfsqlquery.SqlStatement.create('SELECT Id__c, Name__c, CreatedDate__c FROM accounts__dlm LIMIT 10', 'default')
    .execute();

for (sfsqlquery.Row row : iterator) {
    String id       = row.getString('Id__c');
    String name     = row.getString(1);           // by index
    DateTime created = row.getDateTime('CreatedDate__c');
    System.debug(id + ' ' + name + ' ' + created);
}
```

## Row Constructors

The following are constructors for `Row`.

### Row(rawRow, metadata)

Creates a `Row` from a raw API row and column metadata. In normal usage you don't construct `Row` objects directly — they're produced by `SqlRowIterator` and `SqlQueueable`.

#### Signature

`public Row(ConnectApi.QuerySqlRow rawRow, List<ConnectApi.QuerySqlMetadataItem> metadata)`

#### Parameters

-   **rawRow**:
    
    Type: ConnectApi.QuerySqlRow
    
    Raw API row from a `ConnectApi.QuerySqlPageOutput` result.
    
-   **metadata**:
    
    Type: List<ConnectApi.QuerySqlMetadataItem>
    
    Column metadata for the result set, used to map column names to indexes.
    

## Row Methods

The following are methods for `Row`.

### getBoolean(columnIndex)

Returns the value of the column at the specified 0-based index as a `Boolean`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column index is out of bounds.

#### Signature

`public Boolean getBoolean(Integer columnIndex)`

#### Parameters

-   **columnIndex**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.") 0-based column index.
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

The column value as a `Boolean`, or `null`.

### getBoolean(columnName)

Returns the value of the specified column as a `Boolean`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column name is not found.

#### Signature

`public Boolean getBoolean(String columnName)`

#### Parameters

-   **columnName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Column name.
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

The column value as a `Boolean`, or `null`.

### getColumnIndex(columnName)

Returns the 0-based index of the specified column name in the result set. Use this to look up an index once and then access multiple rows efficiently using index-based getters. Throws `IllegalArgumentException` if the column names are repeated in the table.

#### Signature

`public Integer getColumnIndex(String columnName)`

#### Parameters

-   **columnName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the column to look up.
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The 0-based column index, or `-1` if the column name is not found.

### getDate(columnIndex)

Returns the value of the column at the specified 0-based index as a `Date`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column index is out of bounds.

#### Signature

`public Date getDate(Integer columnIndex)`

#### Parameters

-   **columnIndex**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.") 0-based column index.
    

#### Return Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

The column value as a `Date`, or `null`.

### getDate(columnName)

Returns the value of the specified column as a `Date`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column name is not found.

#### Signature

`public Date getDate(String columnName)`

#### Parameters

-   **columnName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Column name.
    

#### Return Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

The column value as a `Date`, or `null`.

### getDateTime(columnIndex)

Returns the value of the column at the specified 0-based index as a `Datetime`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column index is out of bounds.

#### Signature

`public Datetime getDateTime(Integer columnIndex)`

#### Parameters

-   **columnIndex**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.") 0-based column index.
    

#### Return Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The column value as a `Datetime`, or `null`.

### getDateTime(columnName)

Returns the value of the specified column as a `Datetime`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column name is not found.

#### Signature

`public Datetime getDateTime(String columnName)`

#### Parameters

-   **columnName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Column name.
    

#### Return Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The column value as a `Datetime`, or `null`.

### getDecimal(columnIndex)

Returns the value of the column at the specified 0-based index as a `Decimal`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column index is out of bounds.

#### Signature

`public Decimal getDecimal(Integer columnIndex)`

#### Parameters

-   **columnIndex**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.") 0-based column index.
    

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

The column value as a `Decimal`, or `null`.

### getDecimal(columnName)

Returns the value of the specified column as a `Decimal`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column name is not found.

#### Signature

`public Decimal getDecimal(String columnName)`

#### Parameters

-   **columnName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Column name.
    

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

The column value as a `Decimal`, or `null`.

### getDouble(columnIndex)

Returns the value of the column at the specified 0-based index as a `Double`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column index is out of bounds.

#### Signature

`public Double getDouble(Integer columnIndex)`

#### Parameters

-   **columnIndex**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.") 0-based column index.
    

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The column value as a `Double`, or `null`.

### getDouble(columnName)

Returns the value of the specified column as a `Double`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column name is not found.

#### Signature

`public Double getDouble(String columnName)`

#### Parameters

-   **columnName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Column name.
    

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The column value as a `Double`, or `null`.

### getInteger(columnIndex)

Returns the value of the column at the specified 0-based index as an `Integer`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column index is out of bounds.

#### Signature

`public Integer getInteger(Integer columnIndex)`

#### Parameters

-   **columnIndex**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.") 0-based column index.
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The column value as an `Integer`, or `null`.

### getInteger(columnName)

Returns the value of the specified column as an `Integer`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column name is not found.

#### Signature

`public Integer getInteger(String columnName)`

#### Parameters

-   **columnName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Column name.
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The column value as an `Integer`, or `null`.

### getList(columnIndex)

Returns the value of the column at the specified 0-based index as a `List<Object>`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column index is out of bounds.

#### Signature

`public List<Object> getList(Integer columnIndex)`

#### Parameters

-   **columnIndex**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.") 0-based column index.
    

#### Return Value

Type: [List<Object>](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")

The column value as a `List<Object>`, or `null`.

### getList(columnName)

Returns the value of the specified column as a `List<Object>`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column name is not found.

#### Signature

`public List<Object> getList(String columnName)`

#### Parameters

-   **columnName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Column name.
    

#### Return Value

Type: [List<Object>](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")

The column value as a `List<Object>`, or `null`.

### getLong(columnIndex)

Returns the value of the column at the specified 0-based index as a `Long`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column index is out of bounds.

#### Signature

`public Long getLong(Integer columnIndex)`

#### Parameters

-   **columnIndex**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.") 0-based column index.
    

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

The column value as a `Long`, or `null`.

### getLong(columnName)

Returns the value of the specified column as a `Long`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column name is not found.

#### Signature

`public Long getLong(String columnName)`

#### Parameters

-   **columnName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Column name.
    

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

The column value as a `Long`, or `null`.

### getObject(columnIndex)

Returns the value of the column at the specified 0-based index as an `Object`. Use this when the column type is unknown or when you need the raw untyped value. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column index is out of bounds.

#### Signature

`public Object getObject(Integer columnIndex)`

#### Parameters

-   **columnIndex**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.") 0-based column index.
    

#### Return Value

Type: [Object](atlas.en-us.apexref.meta/apexref/apex_class_System_Object.htm#apex_class_System_Object "Contains methods that are implemented by all Apex types.")

The column value as an `Object`, or `null`.

### getObject(columnName)

Returns the value of the specified column as an `Object`. Use this when the column type is unknown or when you need the raw untyped value. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column name is not found.

#### Signature

`public Object getObject(String columnName)`

#### Parameters

-   **columnName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Column name.
    

#### Return Value

Type: [Object](atlas.en-us.apexref.meta/apexref/apex_class_System_Object.htm#apex_class_System_Object "Contains methods that are implemented by all Apex types.")

The column value as an `Object`, or `null`.

### getRawRow()

Returns the underlying `ConnectApi.QuerySqlRow` object. Use this for direct access to the raw API response when the typed accessor methods don't meet your needs.

#### Signature

`public ConnectApi.QuerySqlRow getRawRow()`

#### Return Value

Type: [ConnectApi.QuerySqlRow](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_row.htm "Represents data associated with the an SQL query output.")

The underlying `ConnectApi.QuerySqlRow` for this row.

### getString(columnIndex)

Returns the value of the column at the specified 0-based index as a `String`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column index is out of bounds.

#### Signature

`public String getString(Integer columnIndex)`

#### Parameters

-   **columnIndex**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.") 0-based column index.
    

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The column value as a `String`, or `null`.

### getString(columnName)

Returns the value of the specified column as a `String`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column name is not found.

#### Signature

`public String getString(String columnName)`

#### Parameters

-   **columnName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Column name.
    

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The column value as a `String`, or `null`.

### getTime(columnIndex)

Returns the value of the column at the specified 0-based index as a `Time`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column index is out of bounds.

#### Signature

`public Time getTime(Integer columnIndex)`

#### Parameters

-   **columnIndex**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.") 0-based column index.
    

#### Return Value

Type: [Time](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_methods_system_time "Contains methods for the Time primitive data type.")

The column value as a `Time`, or `null`.

### getTime(columnName)

Returns the value of the specified column as a `Time`. Returns `null` if the column value is null. Throws `IllegalArgumentException` if the column name is not found.

#### Signature

`public Time getTime(String columnName)`

#### Parameters

-   **columnName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Column name.
    

#### Return Value

Type: [Time](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_methods_system_time "Contains methods for the Time primitive data type.")

The column value as a `Time`, or `null`.

### toString()

Returns a string representation of this `Row`.

#### Signature

`public String toString()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A string representation of this `Row`.
