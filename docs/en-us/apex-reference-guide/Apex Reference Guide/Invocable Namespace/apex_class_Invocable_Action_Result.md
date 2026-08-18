---
doc_id: "apex_class_Invocable_Action_Result"
---

# Action.Result Class

Contains methods to retrieve results from invocable actions called from Apex code.

## Namespace

[Invocable](atlas.en-us.apexref.meta/apexref/apex_namespace_Invocable.htm "The Invocable namespace provides classes for calling invocable actions from Apex.")

## See Also

- [Action.Result Methods](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_Result.htm#apex_Invocable_Action_Result_methods)

## Action.Result Methods

The methods are for `Action.Result`.

## See Also

- [clone()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_Result.htm#apex_Invocable_Action_Result_clone)
- [getAction()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_Result.htm#apex_Invocable_Action_Result_getAction)
- [getErrors()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_Result.htm#apex_Invocable_Action_Result_getErrors)
- [getInvocationParameters()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_Result.htm#apex_Invocable_Action_Result_getInvocationParameters)
- [getOutputParameters()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_Result.htm#apex_Invocable_Action_Result_getOutputParameters)
- [isSuccess()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_Result.htm#apex_Invocable_Action_Result_isSuccess)

### clone()

Creates a copy of the `Invocable.Action.Result`.

#### Signature

`public Object clone()`

#### Return Value

Type: Object

### getAction()

Gets the invocable action that was invoked and caused a result to be returned.

#### Signature

`public Invocable.Action getAction()`

#### Return Value

Type: [Invocable.Action](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")

### getErrors()

Gets a list of errors that were returned by an invocable action.

#### Signature

`public List<Invocable.Action.Error> getErrors()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")<[Invocable.Action.Error](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_Error.htm#apex_class_Invocable_Action_Error "Contains methods to retrieve errors returned by invocable actions.")\>

### getInvocationParameters()

Gets a list of the parameter values set for an invocable action. This method returns a list that contains the input parameter values for each invocation of an action. Each map in the list contains a key for the name of each input parameter.

#### Signature

`public Map<String,Object> getInvocationParameters()`

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),Object>

### getOutputParameters()

Gets a list of the parameter values returned by an invocable action. This method returns a list that contains the result for each invocation of an action. Each map in the list contains a key for the name of each output parameter.

#### Signature

`public Map<String,Object> getOutputParameters()`

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),Object>

### isSuccess()

Determines if an invocable action ran without errors.

#### Signature

`public Boolean isSuccess()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

This method returns `true` if the invocable action ran successfully.
