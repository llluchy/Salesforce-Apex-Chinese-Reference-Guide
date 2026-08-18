---
doc_id: "apex_methods_system_restrequest"
---

# RestRequest Class

Use the `System.RestRequest` class to access and pass request data in a RESTful Apex method.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

An Apex RESTful Web service method is defined using one of the REST annotations. For more information about Apex RESTful Web service, see [Exposing Apex Classes as REST Web Services](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_rest.htm).

## Example: An Apex Class with REST Annotated Methods

The following example shows you how to implement the Apex REST API in Apex. This class exposes three methods that each handle a different HTTP request: GET, DELETE, and POST. You can call these annotated methods from a client by issuing HTTP requests.

```apex
@RestResource(urlMapping='/Account/*')
global with sharing class MyRestResource {

    @HttpDelete
    global static void doDelete() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String accountId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        Account account = [SELECT Id FROM Account WHERE Id = :accountId WITH USER_MODE];
        delete as user account;
    }
  
    @HttpGet
    global static Account doGet() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String accountId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        Account result = [SELECT Id, Name, Phone, Website FROM Account WHERE Id = :accountId WITH USER_MODE];
        return result;
    }
  
  @HttpPost
    global static String doPost(String name,
        String phone, String website) {
        Account account = new Account();
        account.Name = name;
        account.phone = phone;
        account.website = website;
        insert as user account;
        return account.Id;
    }
}
```

## See Also

- [RestRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_constructors)
- [RestRequest Properties](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_Properties)
- [RestRequest Methods](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_methods)

## RestRequest Constructors

The following are constructors for `RestRequest`.

## See Also

- [RestRequest()](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_ctor)

### RestRequest()

Creates a new instance of the `System.RestRequest` class.

#### Signature

`public RestRequest()`

## RestRequest Properties

The following are properties for `RestRequest`.

:::tip Note
Although the `RestRequest` Map properties are read-only,
                their contents are read-write. To modify a `RestRequest` header or parameter, use the associated `addHeader` and `addParameter` methods instead of modifying the Map values
                directly.
:::

## See Also

- [headers](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_headers)
- [httpMethod](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_httpMethod)
- [params](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_params)
- [remoteAddress](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_remoteAddress)
- [requestBody](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_requestBody)
- [requestURI](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_requestUri)
- [resourcePath](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_resourcePath)

### headers

Returns the headers that are received by the request.

#### Signature

`public Map<String, String> headers {get; set;}`

#### Property Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### httpMethod

Returns one of the supported HTTP request methods.

#### Signature

`public String httpMethod {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Possible values returned:

-   DELETE
-   GET
-   HEAD
-   PATCH
-   POST
-   PUT

### params

Returns the parameters that are received by the request.

#### Signature

`public Map <String, String> params {get; set;}`

#### Property Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### remoteAddress

Returns the IP address of the client making the request.

#### Signature

`public String remoteAddress {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### requestBody

Returns or sets the body of the request.

#### Signature

`public Blob requestBody {get; set;}`

#### Property Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

#### Usage

If the Apex method has no parameters, then Apex REST copies the HTTP request body into the `RestRequest.requestBody` property. If there are parameters, then Apex REST attempts to deserialize the data into those parameters and the data won't be deserialized into the `RestRequest.requestBody` property.

### requestURI

Returns or sets everything after the host in the HTTP request string.

#### Signature

`public String requestURI {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

For example, if the request string is https://instance.salesforce.com/services/apexrest/Account/ then the `requestURI` is /Account/.

### resourcePath

Returns the REST resource path for the request.

#### Signature

`public String resourcePath {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

For example, if the Apex REST class defines a `urlMapping` of /MyResource/\*, the `resourcePath` property returns /services/apexrest/MyResource/\*.

## RestRequest Methods

The following are methods for `RestRequest`. All are instance methods.

:::tip Note
At run time, you typically don't add a header or parameter to the `RestRequest` object manually because they are automatically
    deserialized into the corresponding properties. The `addHeader` and `addParameter` methods are intended for unit testing, so you can add header or
     parameter values to the `RestRequest` object without
     recreating the REST method call. Use these methods instead of calling a Map method
     directly.
:::

## See Also

- [addHeader(name, value)](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_addHeader)
- [addParameter(name, value)](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_addParameter)

### addHeader(name, value)

Adds a header to the request header map in an Apex test.

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

This method is intended for unit testing of Apex REST classes.

The following headers aren't allowed:

-   cookie
-   set-cookie
-   set-cookie2
-   content-length
-   authorization

If any of these headers are used, an Apex exception is thrown.

### addParameter(name, value)

Adds a parameter to the request params map in an Apex test.

#### Signature

`public Void addParameter(String name, String value)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **value**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

#### Usage

This method is intended for unit testing of Apex REST classes.
