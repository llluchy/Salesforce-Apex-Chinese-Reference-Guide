---
doc_id: "apex_methods_system_json_overview"
---

# JSON Support

JavaScript Object Notation (JSON) support in Apex enables the serialization of Apex objects into JSON format and the deserialization of serialized JSON content.

Apex provides a set of classes that expose methods for JSON serialization and deserialization. The following table describes the classes available.

| Class | Description |
| --- | --- |
| [`System.JSON`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_System_Json.htm) | Contains methods for serializing Apex objects into JSON format and deserializing JSON content that was serialized using the `serialize` method in this class. |
| [`System.JSONGenerator`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_System_JsonGenerator.htm) | Contains methods used to serialize objects into JSON content using the standard JSON encoding. |
| [`System.JSONParser`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_System_JsonParser.htm) | Represents a parser for JSON-encoded content. |

The `System.JSONToken` enumeration contains the tokens used for JSON parsing.

Methods in these classes throw a `JSONException` if an issue is encountered during execution.

## JSON Support Considerations

-   JSON serialization and deserialization support is available for sObjects (standard objects and custom objects), Apex primitive and collection types, return types of Database methods (such as SaveResult and DeleteResult), and instances of your Apex classes.
-   Only custom objects, which are `sObject` types of managed packages can be serialized from code that is external to the managed package. Objects that are instances of Apex classes defined in the managed package can’t be serialized.
-   A Map object is serializable into JSON only if it uses one of the following data types as a key.
    -   [Boolean](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_boolean.htm)
    -   [Date](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_date.htm)
    -   [DateTime](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_datetime.htm)
    -   [Decimal](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_decimal.htm)
    -   [Double](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_double.htm)
    -   [Enum](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_enum.htm)
    -   [Id](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_id.htm)
    -   [Integer](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_integer.htm)
    -   [Long](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_long.htm)
    -   [String](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_string.htm)
    -   [Time](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_time.htm)
-   When an object is declared as the parent type but is set to an instance of the subtype, some data can be lost. The object gets serialized and deserialized as the parent type and any fields that are specific to the subtype are lost.
-   An object that has a reference to itself won’t get serialized and causes a `JSONException` to be thrown.
-   Reference graphs that reference the same object twice are deserialized and cause multiple copies of the referenced object to be generated.
-   The `System.JSONParser` data type isn’t serializable. If you try to create an instance of a serializable class, such as a Visualforce controller, that has a member variable of type `System.JSONParser`, you receive an exception. To use `JSONParser` in a serializable class, use a local variable instead in your method.

## Versioned Behavior Changes

In API version 63.0 and later, JSON serialization of custom exceptions and most built-in exceptions isn't supported. Attempting to serialize an exception throws an error: `Type unsupported in JSON: MyException`.

In API version 53.0 and later, DateTime format and processing has been updated. The API correctly handles DateTime values in JSON requests that use more than 3 digits after the decimal point. Requests that use an unsupported DateTime format (such as `123456000`) result in an error. Salesforce recommends that you strictly adhere to DateTime formats specified in [Valid Date and DateTime Formats](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_rest.meta/api_rest/intro_valid_date_formats.htm).

## See Also

- [Roundtrip Serialization and Deserialization](atlas.en-us.apexcode.meta/apexcode/apex_json_json.htm)
- [JSON Generator](atlas.en-us.apexcode.meta/apexcode/apex_json_jsongenerator.htm)
- [JSON Parsing](atlas.en-us.apexcode.meta/apexcode/apex_json_jsonparser.htm)
