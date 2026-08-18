---
doc_id: "apex_methods_system_restresponse"
---

# RestResponse Class

Represents an object used to pass data from an Apex RESTful Web service method to an HTTP response.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Use the `System.RestResponse` class to pass response data from an Apex RESTful web service method that is defined using one of the [REST annotations](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_annotations_rest.htm).

## See Also

- [RestResponse Constructors](atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm#apex_System_RestResponse_constructors)
- [RestResponse Properties](atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm#apex_System_RestResponse_Properties)
- [RestResponse Methods](atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm#apex_System_RestResponse_methods)

## RestResponse Constructors

The following are constructors for `RestResponse`.

## See Also

- [RestResponse()](atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm#apex_System_RestResponse_ctor)

### RestResponse()

Creates a new instance of the `System.RestResponse` class.

#### Signature

`public RestResponse()`

## RestResponse Properties

The following are properties for `RestResponse`.

:::tip Note
Although the `RestResponse` Map
        properties are read-only, their contents are read-write. To modify a `RestResponse` header, use the associated `addHeader` method instead of the modifying the Map values
        directly.
:::

## See Also

- [responseBody](atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm#apex_System_RestRequest_responseBody)
- [headers](atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm#apex_System_RestResponse_headers)
- [statusCode](atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm#apex_System_RestResponse_statusCode)

### responseBody

Returns or sets the body of the response.

#### Signature

`public Blob responseBody {get; set;}`

#### Property Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

#### Usage

The response is either the serialized form of the method return value or it's the value of the `responseBody` property based on the following rules:

-   If the method returns void, then Apex REST returns the response in the `responseBody` property.
-   If the method returns a value, then Apex REST serializes the return value as the response. If the return value contains fields with null value, those fields are not serialized in the response.

### headers

Returns the headers to be sent to the response.

#### Signature

`public Map<String, String> headers {get; set;}`

#### Property Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### statusCode

Returns or sets the response status code.

#### Signature

`public Integer statuscode {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Status Codes

The following are valid response status codes. The status code is returned by the `RestResponse.statusCode` property.

:::tip Note
If you set the `RestResponse.statusCode` property to a value that's not listed in the table, then an HTTP
status of 500 is returned with the error message “Invalid status
code for HTTP response: nnn” where nnn is the invalid status
code value.
:::

| Status Code | Description |
| --- | --- |
| 200 | OK |
| 201 | CREATED |
| 202 | ACCEPTED |
| 204 | NO\_CONTENT |
| 206 | PARTIAL\_CONTENT |
| 300 | MULTIPLE\_CHOICES |
| 301 | MOVED\_PERMANENTLY |
| 302 | FOUND |
| 304 | NOT\_MODIFIED |
| 400 | BAD\_REQUEST |
| 401 | UNAUTHORIZED |
| 403 | FORBIDDEN |
| 404 | NOT\_FOUND |
| 405 | METHOD\_NOT\_ALLOWED |
| 406 | NOT\_ACCEPTABLE |
| 409 | CONFLICT |
| 410 | GONE |
| 412 | PRECONDITION\_FAILED |
| 413 | REQUEST\_ENTITY\_TOO\_LARGE |
| 414 | REQUEST\_URI\_TOO\_LARGE |
| 415 | UNSUPPORTED\_MEDIA\_TYPE |
| 417 | EXPECTATION\_FAILED |
| 500 | INTERNAL\_SERVER\_ERROR |
| 503 | SERVER\_UNAVAILABLE |

## RestResponse Methods

The following are instance methods for `RestResponse`.

## See Also

- [addHeader(name, value)](atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm#apex_System_RestResponse_addHeader)

### addHeader(name, value)

Adds a header to the response header map.

#### Signature

`public Void addHeader(String name, String value)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **value**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

#### Usage

The following headers aren't allowed:

-   cookie
-   set-cookie
-   set-cookie2
-   content-length
-   authorization
-   Header names that aren't RFC 7230 compliant

If any of these headers are used, an Apex exception is thrown.
