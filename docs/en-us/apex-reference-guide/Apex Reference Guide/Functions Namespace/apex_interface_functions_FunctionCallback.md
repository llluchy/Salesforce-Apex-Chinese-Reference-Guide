---
doc_id: "apex_interface_functions_FunctionCallback"
---

# FunctionCallback Interface

Represents the callback Salesforce calls when an asynchronous, queued Function invocation has completed.

## Namespace

[functions](atlas.en-us.apexref.meta/apexref/apex_namespace_functions.htm "The Functions namespace provides classes and methods used to invoke and manage Salesforce Functions.")

## Usage

When invoking Functions asynchronously via `Function.invoke(payload, callback)`, you provide your own class that implements FunctionCallback.

## See Also

- [FunctionCallback Methods](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionCallback.htm#apex_functions_FunctionCallback_methods)
- [FunctionCallback Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionCallback.htm#apex_interface_functions_FunctionCallback_Example)

## FunctionCallback Methods

The following are methods for `FunctionCallback`.

## See Also

- [handleResponse(var1)](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionCallback.htm#apex_functions_FunctionCallback_handleResponse)

### handleResponse(var1)

Called when an asynchronous Function invocation has completed.

#### Signature

`public void handleResponse(functions.FunctionInvocation var1)`

#### Parameters

-   **var1**: Type: [functions.FunctionInvocation](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm#apex_interface_functions_FunctionInvocation "Use FunctionInvocation to get the status and results of a synchronous or asynchronous Function invocation.") The result parameter contains JSON response information and error information.

#### Return Value

Type: void

## FunctionCallback Example Implementation

This is an example implementation of the `functions.FunctionCallback` interface.

```apex
public class MyCallback
  implements functions.FunctionCallback {
    public void handleResponse(functions.FunctionInvocation result) {
      // Handle result of function invocation
      String jsonResponse = result.getResponse();
      System.debug('Got response ' + jsonResponse);
      JSONParser parser = JSON.createParser(jsonResponse);
      // Process JSON using your own data class...
    }
}
```

The following example uses this implementation when invoking a Function asynchronously:

```apex
myFunction.invoke('{ "accountName" : "Acct", "contactName" : "MyContact", "opportunityName" : "Oppty" }', new MyCallback());
```
