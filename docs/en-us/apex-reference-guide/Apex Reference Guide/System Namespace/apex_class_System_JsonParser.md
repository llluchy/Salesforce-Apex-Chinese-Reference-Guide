---
doc_id: "apex_class_System_JsonParser"
---

# JSONParser Class

Represents a parser for JSON-encoded content.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Use the `System.JSONParser` methods to parse a response that's returned from a call to an external service that is in JSON format, such as a JSON-encoded response of a Web service callout.

## See Also

- [Apex Developer Guide: JSON Parsing](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_json_jsonparser.htm)

## JSONParser Methods

The following are methods for `JSONParser`. All are instance methods.

## See Also

- [clearCurrentToken()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_clearCurrentToken)
- [getBlobValue()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_getBlobValue)
- [getBooleanValue()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_getBooleanValue)
- [getCurrentName()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_getCurrentName)
- [getCurrentToken()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_getCurrentToken)
- [getDatetimeValue()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_getDatetimeValue)
- [getDateValue()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_getDateValue)
- [getDecimalValue()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_getDecimalValue)
- [getDoubleValue()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_getDoubleValue)
- [getIdValue()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_getIdValue)
- [getIntegerValue()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_getIntegerValue)
- [getLastClearedToken()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_getLastClearedToken)
- [getLongValue()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_getLongValue)
- [getText()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_getText)
- [getTimeValue()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_getTimeValue)
- [hasCurrentToken()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_hasCurrentToken)
- [nextToken()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_nextToken)
- [nextValue()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_nextValue)
- [readValueAs(apexType)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_readValueAs)
- [readValueAsStrict(apexType)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_readValueAsStrict)
- [skipChildren()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_skipChildren)

### clearCurrentToken()

Removes the current token.

#### Signature

`public Void clearCurrentToken()`

#### Return Value

Type: Void

#### Usage

After this method is called, a call to `hasCurrentToken` returns `false` and a call to `getCurrentToken` returns `null`. You can retrieve the cleared token by calling `getLastClearedToken`.

### getBlobValue()

Returns the current token as a BLOB value.

#### Signature

`public Blob getBlobValue()`

#### Return Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

#### Usage

The current token must be of type `JSONToken.VALUE_STRING` and must be Base64-encoded.

### getBooleanValue()

Returns the current token as a Boolean value.

#### Signature

`public Boolean getBooleanValue()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

The current token must be of type `JSONToken.VALUE_TRUE` or `JSONToken.VALUE_FALSE`.

The following example parses a sample JSON string and retrieves a Boolean value.

```apex
String JSONContent =
    '{"isActive":true}';
JSONParser parser = 
   JSON.createParser(JSONContent);
// Advance to the start object marker.
parser.nextToken();
// Advance to the next value.
parser.nextValue();
// Get the Boolean value.
Boolean isActive = parser.getBooleanValue();
```

### getCurrentName()

Returns the name associated with the current token.

#### Signature

`public String getCurrentName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

If the current token is of type `JSONToken.FIELD_NAME`, this method returns the same value as `getText`. If the current token is a value, this method returns the field name that precedes this token. For other values such as array values or root-level values, this method returns `null`.

The following example parses a sample JSON string. It advances to the field value and retrieves its corresponding field name.

#### Example

```apex
String JSONContent = '{"firstName":"John"}';
JSONParser parser = 
   JSON.createParser(JSONContent);
// Advance to the start object marker.
parser.nextToken();
// Advance to the next value.
parser.nextValue();
// Get the field name for the current value.
String fieldName = parser.getCurrentName();
// Get the textual representation 
// of the value.
String fieldValue = parser.getText();
```

### getCurrentToken()

Returns the token that the parser currently points to or `null` if there's no current token.

#### Signature

`public System.JSONToken getCurrentToken()`

#### Return Value

Type: [System.JSONToken](atlas.en-us.apexref.meta/apexref/apex_enum_System_JsonToken.htm "Contains all token values used for parsing JSON content.")

#### Usage

The following example iterates through all the tokens in a sample JSON string.

```apex
String JSONContent = '{"firstName":"John"}';
JSONParser parser = 
   JSON.createParser(JSONContent);
// Advance to the next token.
while (parser.nextToken() != null) {
    System.debug('Current token: ' +
        parser.getCurrentToken());
}
```

### getDatetimeValue()

Returns the current token as a date and time value.

#### Signature

`public Datetime getDatetimeValue()`

#### Return Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Usage

The current token must be of type `JSONToken.VALUE_STRING` and must represent a `Datetime` value in the ISO-8601 format.

The following example parses a sample JSON string and retrieves a Datetime value.

```apex
String JSONContent =
'{"transactionDate":"2011-03-22T13:01:23"}';
JSONParser parser = 
   JSON.createParser(JSONContent);
// Advance to the start object marker.
parser.nextToken();
// Advance to the next value.
parser.nextValue();
// Get the transaction date.
Datetime transactionDate = 
   parser.getDatetimeValue();
```

### getDateValue()

Returns the current token as a date value.

#### Signature

`public Date getDateValue()`

#### Return Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

#### Usage

The current token must be of type `JSONToken.VALUE_STRING` and must represent a `Date` value in the ISO-8601 format.

The following example parses a sample JSON string and retrieves a Date value.

```apex
String JSONContent =
   '{"dateOfBirth":"2011-03-22"}';
JSONParser parser = 
   JSON.createParser(JSONContent);
// Advance to the start object marker.
parser.nextToken();
// Advance to the next value.
parser.nextValue();
// Get the date of birth.
Date dob = parser.getDateValue();
```

### getDecimalValue()

Returns the current token as a decimal value.

#### Signature

`public Decimal getDecimalValue()`

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Usage

The current token must be of type `JSONToken.VALUE_NUMBER_FLOAT` or `JSONToken.VALUE_NUMBER_INT` and is a numerical value that can be converted to a value of type `Decimal`.

The following example parses a sample JSON string and retrieves a Decimal value.

```apex
String JSONContent =
   '{"GPA":3.8}';
JSONParser parser = 
   JSON.createParser(JSONContent);
// Advance to the start object marker.
parser.nextToken();
// Advance to the next value.
parser.nextValue();
// Get the GPA score.
Decimal gpa = parser.getDecimalValue();
```

### getDoubleValue()

Returns the current token as a double value.

#### Signature

`public Double getDoubleValue()`

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Usage

The current token must be of type `JSONToken.VALUE_NUMBER_FLOAT` and is a numerical value that can be converted to a value of type `Double`.

The following example parses a sample JSON string and retrieves a Double value.

```apex
String JSONContent =
   '{"GPA":3.8}';
JSONParser parser = 
   JSON.createParser(JSONContent);
// Advance to the start object marker.
parser.nextToken();
// Advance to the next value.
parser.nextValue();
// Get the GPA score.
Double gpa = parser.getDoubleValue();
```

### getIdValue()

Returns the current token as an ID value.

#### Signature

`public ID getIdValue()`

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Usage

The current token must be of type `JSONToken.VALUE_STRING` and must be a valid `ID`.

The following example parses a sample JSON string and retrieves an ID value.

```apex
String JSONContent =
   '{"recordId":"001R0000002nO6H"}';
JSONParser parser = 
   JSON.createParser(JSONContent);
// Advance to the start object marker.
parser.nextToken();
// Advance to the next value.
parser.nextValue();
// Get the record ID.
ID recordID = parser.getIdValue();
```

### getIntegerValue()

Returns the current token as an integer value.

#### Signature

`public Integer getIntegerValue()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

The current token must be of type `JSONToken.VALUE_NUMBER_INT` and must represent an `Integer`.

The following example parses a sample JSON string and retrieves an Integer value.

```apex
String JSONContent =
   '{"recordCount":10}';
JSONParser parser = 
   JSON.createParser(JSONContent);
// Advance to the start object marker.
parser.nextToken();
// Advance to the next value.
parser.nextValue();
// Get the record count.
Integer count = parser.getIntegerValue();
```

### getLastClearedToken()

Returns the last token that was cleared by the `clearCurrentToken` method.

#### Signature

`public System.JSONToken getLastClearedToken()`

#### Return Value

Type: [System.JSONToken](atlas.en-us.apexref.meta/apexref/apex_enum_System_JsonToken.htm "Contains all token values used for parsing JSON content.")

### getLongValue()

Returns the current token as a long value.

#### Signature

`public Long getLongValue()`

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Usage

The current token must be of type `JSONToken.VALUE_NUMBER_INT` and is a numerical value that can be converted to a value of type `Long` .

The following example parses a sample JSON string and retrieves a Long value.

```apex
String JSONContent =
   '{"recordCount":2097531021}';
JSONParser parser = 
   JSON.createParser(JSONContent);
// Advance to the start object marker.
parser.nextToken();
// Advance to the next value.
parser.nextValue();
// Get the record count.
Long count = parser.getLongValue();
```

### getText()

Returns the textual representation of the current token or `null` if there's no current token.

#### Signature

`public String getText()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

No current token exists, and therefore this method returns `null`, if `nextToken` has not been called yet for the first time or if the parser has reached the end of the input stream.

### getTimeValue()

Returns the current token as a time value.

#### Signature

`public Time getTimeValue()`

#### Return Value

Type: [Time](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Usage

The current token must be of type `JSONToken.VALUE_STRING` and must represent a `Time` value in the ISO-8601 format.

The following example parses a sample JSON string and retrieves a Datetime value.

```apex
String JSONContent =
   '{"arrivalTime":"18:05"}';
JSONParser parser = 
   JSON.createParser(JSONContent);
// Advance to the start object marker.
parser.nextToken();
// Advance to the next value.
parser.nextValue();
// Get the arrival time.
Time arrivalTime = parser.getTimeValue();
```

### hasCurrentToken()

Returns `true` if the parser currently points to a token; otherwise, returns `false`.

#### Signature

`public Boolean hasCurrentToken()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### nextToken()

Returns the next token or `null` if the parser has reached the end of the input stream.

#### Signature

`public System.JSONToken nextToken()`

#### Return Value

Type: [System.JSONToken](atlas.en-us.apexref.meta/apexref/apex_enum_System_JsonToken.htm "Contains all token values used for parsing JSON content.")

#### Usage

Advances the stream enough to determine the type of the next token, if any.

### nextValue()

Returns the next token that is a value type or `null` if the parser has reached the end of the input stream.

#### Signature

`public System.JSONToken nextValue()`

#### Return Value

Type: [System.JSONToken](atlas.en-us.apexref.meta/apexref/apex_enum_System_JsonToken.htm "Contains all token values used for parsing JSON content.")

#### Usage

Advances the stream enough to determine the type of the next token that is of a value type, if any, including a JSON array and object start and end markers.

### readValueAs(apexType)

Deserializes JSON content into an object of the specified Apex type and returns the deserialized object.

#### Signature

`public Object readValueAs(System.Type apexType)`

#### Parameters

-   **apexType**:
    
    Type: [System.Type](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#apex_methods_system_type "Contains methods for getting the Apex type that corresponds to an Apex class and for instantiating new types.")
    
    The apexType argument specifies the type of the object that this method returns after deserializing the current value.
    

#### Return Value

Type: Object

#### Usage

If the JSON content contains attributes not present in the `System.Type` argument, such as a missing field or object, deserialization fails in some circumstances. When deserializing JSON content into a custom object or an sObject using Salesforce API version 34.0 or earlier, this method throws a runtime exception when passed extraneous attributes. When deserializing JSON content into an Apex class in any API version, or into an object in API version 35.0 or later, no exception is thrown. When no exception is thrown, this method ignores extraneous attributes and parses the rest of the JSON content.

#### Example

The following example parses a sample JSON string and retrieves a Datetime value. Before being able to run this sample, you must create a new Apex class as follows:

```apex
public class Person {
    public String name;
    public String phone;
}
```

 Next, insert the following sample in a class method:

```apex
// JSON string that contains a Person object.
String JSONContent =
    '{"person":{' + 
        '"name":"John Smith",' +
        '"phone":"555-1212"}}';
JSONParser parser = 
   JSON.createParser(JSONContent);
// Make calls to nextToken() 
// to point to the second
// start object marker.
parser.nextToken();
parser.nextToken();
parser.nextToken();
// Retrieve the Person object
// from the JSON string.
Person obj = 
   (Person)parser.readValueAs(
      Person.class);
System.assertEquals(
   obj.name, 'John Smith');
System.assertEquals(
   obj.phone, '555-1212');
```

### readValueAsStrict(apexType)

Deserializes JSON content into an object of the specified Apex type and returns the deserialized object. All attributes in the JSON content must be present in the specified type.

#### Signature

`public Object readValueAsStrict(System.Type apexType)`

#### Parameters

-   **apexType**:
    
    Type: [System.Type](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#apex_methods_system_type "Contains methods for getting the Apex type that corresponds to an Apex class and for instantiating new types.")
    
    The apexType argument specifies the type of the object that this method returns after deserializing the current value.
    

#### Return Value

Type: Object

#### Usage

If the JSON content contains attributes not present in the `System.Type` argument, such as a missing field or object, deserialization fails in some circumstances. When deserializing JSON content with extraneous attributes into an Apex class, this method throws an exception in all API versions. However, no exception is thrown when you use this method to deserialize JSON content into a custom object or an sObject.

The following example parses a sample JSON string and retrieves a Datetime value. Before being able to run this sample, you must create a new Apex class as follows:

```apex
public class Person {
    public String name;
    public String phone;
}
```

 Next, insert the following sample in a class method:

```apex
// JSON string that contains a Person object.
String JSONContent =
    '{"person":{' + 
        '"name":"John Smith",' +
        '"phone":"555-1212"}}';
JSONParser parser = 
   JSON.createParser(JSONContent);
// Make calls to nextToken() 
// to point to the second
// start object marker.
parser.nextToken();
parser.nextToken();
parser.nextToken();
// Retrieve the Person object
// from the JSON string.
Person obj = 
   (Person)parser.readValueAsStrict(
      Person.class);
System.assertEquals(
   obj.name, 'John Smith');
System.assertEquals(
   obj.phone, '555-1212');
```

### skipChildren()

Skips all child tokens of type `JSONToken.START_ARRAY` and `JSONToken.START_OBJECT` that the parser currently points to.

#### Signature

`public Void skipChildren()`

#### Return Value

Type: Void
