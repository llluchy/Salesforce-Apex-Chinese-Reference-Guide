---
doc_id: "connectAPI_exceptions"
---

# ConnectApi Exceptions

The `ConnectApi` namespace contains exception classes.

All exceptions classes support built-in methods for returning the error message and exception type. See [Exception Class and Built-In Exceptions](atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm "An exception denotes an error that disrupts the normal flow of code execution. You can use Apex built-in exceptions or create custom exceptions. All exceptions have common methods.").

The `ConnectApi` namespace contains these exceptions:

| Exception | Description |
| --- | --- |
| `ConnectApi.ConnectApiException` | Any logic error in the way your application is utilizing `ConnectApi` code. This is equivalent to receiving a 400 error from Connect REST API. |
| `ConnectApi.NotFoundException` | Any issues with the specified resource being found. This is equivalent to receiving a 404 error from Connect REST API. |
| `ConnectApi.RateLimitException` | When you exceed the rate limit. This is equivalent to receiving a 503 Service Unavailable error from Connect REST API. |
