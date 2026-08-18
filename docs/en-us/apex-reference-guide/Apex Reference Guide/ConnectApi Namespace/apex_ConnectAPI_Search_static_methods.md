---
doc_id: "apex_ConnectAPI_Search_static_methods"
---

# Search Class

Search objects using keywords or a natural language query.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Search Methods

These methods are for `Search`. All methods are static.

## See Also

- [answer(q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_answer_objects_1)
- [answer(q, objectApiName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_answer_object_1)
- [answer(q, objectApiName, displayFields)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_answer_object_2)
- [findAndGroup(q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_find_objects_1)
- [findAndGroup(q, configurationName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_find_objects_2)
- [findAndGroup(q, configurationName, highlights)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_find_objects_3)
- [find(objectApiName, request)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_find_object_1)

### answer(q)

Search objects using a natural language query and return an answer.

#### API Version

63.0

#### Available to Guest Users

63.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.SearchAnswer answer(String q)`

#### Parameters

q

Type: String

Natural language query to search for in the org.

#### Return Value

Type: [`ConnectApi.SearchAnswer`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_answe.htm "Results of searching objects using a natural language query.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

### answer(q, objectApiName)

Search an object using a natural language query and return an answer.

#### API Version

63.0

#### Available to Guest Users

63.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.SearchAnswer answer(String q, String objectApiName)`

#### Parameters

q

Type: String

Natural language query to search for in the org.

objectApiName

Type: String

API name of the object.

#### Return Value

Type: [`ConnectApi.SearchAnswer`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_answe.htm "Results of searching objects using a natural language query.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

### answer(q, objectApiName, displayFields)

Search an object using a natural language query and display fields.

#### API Version

63.0

#### Available to Guest Users

63.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.SearchAnswer answer(String q, String objectApiName, List<String> displayFields)`

#### Parameters

q

Type: String

Natural language query to search for in the org.

objectApiName

Type: String

API name of the object.

displayFields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

List of fields to display and return in the search answer. The default is the citation field.

#### Return Value

Type: [`ConnectApi.SearchAnswer`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_answe.htm "Results of searching objects using a natural language query.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

### findAndGroup(q)

Search objects using keyword search and return result groups.

#### API Version

63.0

#### Available to Guest Users

63.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.SearchResultGroups findAndGroup(String q)`

#### Parameters

q

Type: String

One or more keywords to search for in the org.

#### Return Value

Type: [`ConnectApi.SearchResultGroups`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_result.htm "Results of searching objects using keywords.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

### findAndGroup(q, configurationName)

Search objects using keyword search and a configuration. The search returns result groups.

#### API Version

63.0

#### Available to Guest Users

63.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.SearchResultGroups findAndGroup(String q, String configurationName)`

#### Parameters

q

Type: String

One or more keywords to search for in the org.

configurationName

Type: String

Search configuration to apply.

#### Return Value

Type: [`ConnectApi.SearchResultGroups`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_result.htm "Results of searching objects using keywords.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

### findAndGroup(q, configurationName, highlights)

Search objects using keyword search, a configuration, and highlights. The search returns result groups.

#### API Version

63.0

#### Available to Guest Users

63.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.SearchResultGroups findAndGroup(String q, String configurationName, Boolean highlights)`

#### Parameters

q

Type: String

One or more keywords to search for in the org.

configurationName

Type: String

Search configuration to apply.

highlights

Type: Boolean

Specifies whether search generates a text highlight (`true`) or not (`false`).

#### Return Value

Type: [`ConnectApi.SearchResultGroups`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_result.htm "Results of searching objects using keywords.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

### find(objectApiName, request)

Search an object using keywords and return results.

#### API Version

63.0

#### Available to Guest Users

63.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ScopedSearchResults find(String objectApiName, ConnectApi.SearchRequest request)`

#### Parameters

objectApiName

Type: String

API name of the object to search.

request

Type: [`ConnectApi.SearchRequest`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_search_reques.htm "Search request input for searching an object.")

`ConnectApi.SearchRequest` input class with more information about what and how to search.

#### Return Value

Type: [`ConnectApi.ScopedSearchResults`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scoped_search_result.htm "Keyword search results for an object.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## Search Test Methods

These test methods are for `Search`. All methods are static.

For information about using these methods to test your `ConnectApi` code, see [Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm).

### setTestAnswer(q, result)

Registers a `ConnectApi.SearchAnswer` object to be returned when the matching `answer(q)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

63.0

#### Signature

`public static Void setTestAnswer(String q, ConnectApi.SearchAnswer result)`

#### Parameters

q

Type: String

Natural language query to search for in the org.

result

Type: [`ConnectApi.SearchAnswer`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_answe.htm "Results of searching objects using a natural language query.")

Object containing test data.

#### Return Value

Type: Void

### setTestAnswer(q, objectApiName, result)

Registers a `ConnectApi.SearchAnswer` object to be returned when the matching `answer(q, objectApiName)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

63.0

#### Signature

`public static Void setTestAnswer(String q, String objectApiName, ConnectApi.SearchAnswer result)`

#### Parameters

q

Type: String

Natural language query to search for in the org.

objectApiName

Type: String

API name of the object.

result

Type: [`ConnectApi.SearchAnswer`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_answe.htm "Results of searching objects using a natural language query.")

Object containing test data.

#### Return Value

Type: Void

### setTestAnswer(q, objectApiName, displayFields, result)

Registers a `ConnectApi.SearchAnswer` object to be returned when the matching `answer(q, objectApiName, displayFields)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

62.0

#### Signature

`public static Void setTestAnswer(String q, String objectApiName, List<String> displayFields, ConnectApi.SearchAnswer result)`

#### Parameters

q

Type: String

Natural language query to search for in the org.

objectApiName

Type: String

API name of the object.

displayFields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

List of fields to display and return in the search results. By default, the fields displayed are defined by the search layout.

result

Type: [`ConnectApi.SearchAnswer`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_answe.htm "Results of searching objects using a natural language query.")

Object containing test data.

#### Return Value

Type: Void

### setTestFindAndGroup(q, result)

Registers a `ConnectApi.SearchResultGroups` object to be returned when the matching `findAndGroup(q)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

63.0

#### Signature

`public static Void setTestFindAndGroup(String q, ConnectApi.SearchResultGroups result)`

#### Parameters

q

Type: String

One or more keywords to search for in the org.

result

Type: [`ConnectApi.SearchResultGroups`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_result.htm "Results of searching objects using keywords.")

Object containing test data.

#### Return Value

Type: Void

### setTestFindAndGroup(q, configurationName, result)

Registers a `ConnectApi.SearchResultGroups` object to be returned when the matching `findAndGroup(q, configurationName)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

63.0

#### Signature

`public static Void setTestFindAndGroup(String q, String configurationName, ConnectApi.SearchResultGroups result)`

#### Parameters

q

Type: String

One or more keywords to search for in the org.

configurationName

Type: String

Search configuration to apply.

result

Type: [`ConnectApi.SearchResultGroups`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_result.htm "Results of searching objects using keywords.")

Object containing test data.

#### Return Value

Type: Void

### setTestFindAndGroup(q, configurationName, highlights, result)

Registers a `ConnectApi.SearchResultGroups` object to be returned when the matching `findAndGroup(q, configurationName, highlights)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

63.0

#### Signature

`public static Void setTestFindAndGroup(String q, String configurationName, Boolean highlights, ConnectApi.SearchResultGroups result)`

#### Parameters

q

Type: String

One or more keywords to search for in the org.

configurationName

Type: String

Search configuration to apply.

highlights

Type: Boolean

Specifies whether search generates a text highlight (`true`) or not (`false`).

result

Type: [`ConnectApi.SearchResultGroups`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_result.htm "Results of searching objects using keywords.")

Object containing test data.

#### Return Value

Type: Void

### setTestFind(objectApiName, request, result)

Registers a `ConnectApi.ScopedSearchResults` object to be returned when the matching `find(objectApiName, request)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

63.0

#### Signature

`public static Void setTestFind(String objectApiName, ConnectApi.SearchRequest request, ConnectApi.ScopedSearchResults result)`

#### Parameters

objectApiName

Type: String

API name of the object to search.

request

Type: [`ConnectApi.SearchRequest`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_search_reques.htm "Search request input for searching an object.")

`ConnectApi.SearchRequest` input class with more information about what and how to search.

result

Type: [`ConnectApi.ScopedSearchResults`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scoped_search_result.htm "Keyword search results for an object.")

Object containing test data.

#### Return Value

Type: Void
