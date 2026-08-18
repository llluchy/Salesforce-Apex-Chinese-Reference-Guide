---
doc_id: "apex_class_System_JsonGenerator"
---

# JSONGenerator Class

Contains methods used to serialize objects into JSON content using the standard JSON encoding.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

The `System.JSONGenerator` class is provided to enable the generation of standard JSON-encoded content and gives you more control on the structure of the JSON output.

## See Also

- [Apex Developer Guide: JSON Generator](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_json_jsongenerator.htm)

## JSONGenerator Methods

The following are methods for `JSONGenerator`. All are instance methods.

## See Also

- [close()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_close)
- [getAsString()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_getAsString)
- [isClosed()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_isClosed)
- [writeBlob(blobValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeBlob)
- [writeBlobField(fieldName, blobValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeBlobField)
- [writeBoolean(blobValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeBoolean)
- [writeBooleanField(fieldName, booleanValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeBooleanField)
- [writeDate(dateValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeDate)
- [writeDateField(fieldName, dateValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeDateField)
- [writeDateTime(datetimeValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeDateTime)
- [writeDateTimeField(fieldName, datetimeValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeDateTimeField)
- [writeEndArray()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeEndArray)
- [writeEndObject()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeEndObject)
- [writeFieldName(fieldName)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeFieldName)
- [writeId(identifier)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeId)
- [writeIdField(fieldName, identifier)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeIdField)
- [writeNull()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNull)
- [writeNullField(fieldName)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNullField)
- [writeNumber(number)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNumber)
- [writeNumber(number)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNumber_2)
- [writeNumber(number)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNumber_3)
- [writeNumber(number)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNumber_4)
- [writeNumberField(fieldName, number)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNumberField)
- [writeNumberField(fieldName, number)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNumberField_2)
- [writeNumberField(fieldName, number)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNumberField_3)
- [writeNumberField(fieldName, number)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNumberField_4)
- [writeObject(anyObject)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeObject)
- [writeObjectField(fieldName, value)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeObjectField)
- [writeStartArray()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeStartArray)
- [writeStartObject()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeStartObject)
- [writeString(stringValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeString)
- [writeStringField(fieldName, stringValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeStringField)
- [writeTime(timeValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeTime)
- [writeTimeField(fieldName, timeValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeTimeField)

### close()

Closes the JSON generator.

#### Signature

`public Void close()`

#### Return Value

Type: Void

#### Usage

No more content can be written after the JSON generator is closed.

### getAsString()

Returns the generated JSON content.

#### Signature

`public String getAsString()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This method closes the JSON generator if it isn't closed already.

### isClosed()

Returns `true` if the JSON generator is closed; otherwise, returns `false`.

#### Signature

`public Boolean isClosed()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### writeBlob(blobValue)

Writes the specified `Blob` value as a base64-encoded string.

#### Signature

`public Void writeBlob(Blob blobValue)`

#### Parameters

-   **blobValue**: Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

#### Return Value

Type: Void

### writeBlobField(fieldName, blobValue)

Writes a field name and value pair using the specified field name and BLOB value.

#### Signature

`public Void writeBlobField(String fieldName, Blob blobValue)`

#### Parameters

-   **fieldName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
-   **blobValue**: Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

#### Return Value

Type: Void

### writeBoolean(blobValue)

Writes the specified Boolean value.

#### Signature

`public Void writeBoolean(Boolean blobValue)`

#### Parameters

-   **blobValue**: Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: Void

### writeBooleanField(fieldName, booleanValue)

Writes a field name and value pair using the specified field name and Boolean value.

#### Signature

`public Void writeBooleanField(String fieldName, Boolean booleanValue)`

#### Parameters

-   **fieldName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
-   **booleanValue**: Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: Void

### writeDate(dateValue)

Writes the specified date value in the ISO-8601 format.

#### Signature

`public Void writeDate(Date dateValue)`

#### Parameters

-   **dateValue**: Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

#### Return Value

Type: Void

### writeDateField(fieldName, dateValue)

Writes a field name and value pair using the specified field name and date value. The date value is written in the ISO-8601 format.

#### Signature

`public Void writeDateField(String fieldName, Date dateValue)`

#### Parameters

-   **fieldName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
-   **dateValue**: Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

#### Return Value

Type: Void

### writeDateTime(datetimeValue)

Writes the specified date and time value in the ISO-8601 format.

#### Signature

`public Void writeDateTime(Datetime datetimeValue)`

#### Parameters

-   **datetimeValue**: Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Return Value

Type: Void

### writeDateTimeField(fieldName, datetimeValue)

Writes a field name and value pair using the specified field name and date and time value. The date and time value is written in the ISO-8601 format.

#### Signature

`public Void writeDateTimeField(String fieldName, Datetime datetimeValue)`

#### Parameters

-   **fieldName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
-   **datetimeValue**: Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Return Value

Type: Void

### writeEndArray()

Writes the ending marker of a JSON array ('\]').

#### Signature

`public Void writeEndArray()`

#### Return Value

Type: Void

### writeEndObject()

Writes the ending marker of a JSON object ('}').

#### Signature

`public Void writeEndObject()`

#### Return Value

Type: Void

### writeFieldName(fieldName)

Writes a field name.

#### Signature

`public Void writeFieldName(String fieldName)`

#### Parameters

-   **fieldName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### writeId(identifier)

Writes the specified ID value.

#### Signature

`public Void writeId(ID identifier)`

#### Parameters

-   **identifier**: Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: Void

### writeIdField(fieldName, identifier)

Writes a field name and value pair using the specified field name and identifier value.

#### Signature

`public Void writeIdField(String fieldName, Id identifier)`

#### Parameters

-   **fieldName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
-   **identifier**: Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: Void

### writeNull()

Writes the JSON null literal value.

#### Signature

`public Void writeNull()`

#### Return Value

Type: Void

### writeNullField(fieldName)

Writes a field name and value pair using the specified field name and the JSON null literal value.

#### Signature

`public Void writeNullField(String fieldName)`

#### Parameters

-   **fieldName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### writeNumber(number)

Writes the specified decimal value.

#### Signature

`public Void writeNumber(Decimal number)`

#### Parameters

-   **number**: Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: Void

### writeNumber(number)

Writes the specified double value.

#### Signature

`public Void writeNumber(Double number)`

#### Parameters

-   **number**: Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: Void

### writeNumber(number)

Writes the specified integer value.

#### Signature

`public Void writeNumber(Integer number)`

#### Parameters

-   **number**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: Void

### writeNumber(number)

Writes the specified long value.

#### Signature

`public Void writeNumber(Long number)`

#### Parameters

-   **number**: Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Return Value

Type: Void

### writeNumberField(fieldName, number)

Writes a field name and value pair using the specified field name and decimal value.

#### Signature

`public Void writeNumberField(String fieldName, Decimal number)`

#### Parameters

-   **fieldName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
-   **number**: Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: Void

### writeNumberField(fieldName, number)

Writes a field name and value pair using the specified field name and double value.

#### Signature

`public Void writeNumberField(String fieldName, Double number)`

#### Parameters

-   **fieldName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
-   **number**: Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: Void

### writeNumberField(fieldName, number)

Writes a field name and value pair using the specified field name and integer value.

#### Signature

`public Void writeNumberField(String fieldName, Integer number)`

#### Parameters

-   **fieldName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
-   **number**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: Void

### writeNumberField(fieldName, number)

Writes a field name and value pair using the specified field name and long value.

#### Signature

`public Void writeNumberField(String fieldName, Long number)`

#### Parameters

-   **fieldName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
-   **number**: Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Return Value

Type: Void

### writeObject(anyObject)

Writes the specified Apex object in JSON format.

#### Signature

`public Void writeObject(Object anyObject)`

#### Parameters

-   **anyObject**: Type: Object

#### Return Value

Type: Void

### writeObjectField(fieldName, value)

Writes a field name and value pair using the specified field name and Apex object.

#### Signature

`public Void writeObjectField(String fieldName, Object value)`

#### Parameters

-   **fieldName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
-   **value**: Type: Object

#### Return Value

Type: Void

### writeStartArray()

Writes the starting marker of a JSON array ('\[').

#### Signature

`public Void writeStartArray()`

#### Return Value

Type: Void

### writeStartObject()

Writes the starting marker of a JSON object ('{').

#### Signature

`public Void writeStartObject()`

#### Return Value

Type: Void

### writeString(stringValue)

Writes the specified string value.

#### Signature

`public Void writeString(String stringValue)`

#### Parameters

-   **stringValue**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### writeStringField(fieldName, stringValue)

Writes a field name and value pair using the specified field name and string value.

#### Signature

`public Void writeStringField(String fieldName, String stringValue)`

#### Parameters

-   **fieldName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
-   **stringValue**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### writeTime(timeValue)

Writes the specified time value in the ISO-8601 format.

#### Signature

`public Void writeTime(Time timeValue)`

#### Parameters

-   **timeValue**: Type: [Time](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Return Value

Type: Void

### writeTimeField(fieldName, timeValue)

Writes a field name and value pair using the specified field name and time value in the ISO-8601 format.

#### Signature

`public Void writeTimeField(String fieldName, Time timeValue)`

#### Parameters

-   **fieldName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
-   **timeValue**: Type: [Time](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Return Value

Type: Void
