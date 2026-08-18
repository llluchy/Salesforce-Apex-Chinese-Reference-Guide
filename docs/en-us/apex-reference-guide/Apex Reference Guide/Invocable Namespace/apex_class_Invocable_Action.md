---
doc_id: "apex_class_Invocable_Action"
---

# Action Class

Contains methods to create, update, and retrieve information about invocable actions.

## Namespace

[Invocable](atlas.en-us.apexref.meta/apexref/apex_namespace_Invocable.htm "The Invocable namespace provides classes for calling invocable actions from Apex.")

## Usage

The `getDescribe()` method returns detailed metadata about an invocable action, including its inputs, outputs, and configuration. Because this method retrieves comprehensive describe information, it can have performance implications. Use `getDescribe()` judiciously, especially in performance-sensitive contexts such as loops or frequently executed code paths.

When calling `createStandardAction()` or `createCustomAction()`, the version parameter is optional. If you don't specify a version, the base version of the action is used.

## Example

// Create an action and get its metadata Invocable.Action action = Invocable.Action.createStandardAction('someActionName'); List<Invocable.Action.DescribeResult> describeResults = action.getDescribe(); for (Invocable.Action.DescribeResult dr : describeResults) { System.debug('Action Name: ' + dr.getName()); System.debug('Action Label: ' + dr.getLabel()); System.debug('Description: ' + dr.getDescription()); System.debug('Has Callout: ' + dr.getHasCallout()); // Access input parameters if (dr.getInputs() != null) { for (Invocable.Action.InputParameter input : dr.getInputs()) { System.debug('Input: ' + input.getName() + ' (' + input.getType() + ')'); System.debug('Required: ' + input.getRequired()); System.debug('Description: ' + input.getDescription()); } } // Access output parameters if (dr.getOutputs() != null) { for (Invocable.Action.OutputParameter output : dr.getOutputs()) { System.debug('Output: ' + output.getName() + ' (' + output.getType() + ')'); } } }

## See Also

- [Action Methods](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_methods)
- [Apex Developer Guide: InvocableMethod Annotation](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm)

-   [*Salesforce Help*: Launch a Flow from Apex](https://help.salesforce.com/s/articleView?id=platform.flow_distribute_system_apex_invoke_a_flow_from_apex.htm&language=en_US "Salesforce Help: Launch a Flow from Apex - HTML (New Window)")
    

## Action Methods

These methods are for `Action`.

## See Also

- [addInvocation()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_addInvocation)
- [clearInvocations()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_clearInvocations)
- [clone()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_clone)
- [createCustomAction(type, namespace, name, version)](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_createCustomAction)
- [createCustomAction(type, namespace, name)](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#unique_1709682451)
- [createCustomAction(type, name)](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_createCustomAction_2)
- [createStandardAction(type, version)](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_createStandardAction_2)
- [createStandardAction(type)](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_createStandardAction)
- [getDescribe()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_getDescribe)
- [getName()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_getName)
- [getNamespace()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_getNamespace)
- [getType()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_getType)
- [getVersion()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_getVersion)
- [invoke()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_invoke)
- [isStandard()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_isStandard)
- [setInvocationParameter(parameterName, parameterValue)](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_setInvocationParameter)
- [setInvocations(invocations)](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_setInvocations)

### addInvocation()

Creates an empty invocation in preparation for calling an invocable action. After you create the invocation, you can add parameters to the invocation.

#### Signature

`public Invocable.Action addInvocation()`

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")

### clearInvocations()

Clears the existing invocations from the action.

#### Signature

`public Invocable.Action clearInvocations()`

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")

### clone()

Creates a copy of the `Invocable.Action`.

#### Signature

`public Object clone()`

#### Return Value

Type: Object

### createCustomAction(type, namespace, name, version)

Creates a wrapper for the specified version of a custom invocable action in a specified package namespace.

#### Signature

`public static Invocable.Action createCustomAction(String type, String namespace, String name, String version)`

#### Parameters

-   **type**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Type of invocable action.
    
-   **namespace**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Namespace where the invocable action is located.
    
-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name for the custom invocable action.
    
-   **version**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Version of the invocable action.
    

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")

### createCustomAction(type, namespace, name)

Creates a wrapper for a custom invocable action in a specified package namespace.

#### Signature

`public static Invocable.Action createCustomAction(String type, String namespace, String name)`

#### Parameters

-   **type**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Type of invocable action.
    
-   **namespace**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Namespace where the invocable action is located.
    
-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name
    
    for the custom invocable action.
    

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")

### createCustomAction(type, name)

Creates a wrapper for a custom invocable action.

#### Signature

`public static Invocable.Action createCustomAction(String type, String name)`

#### Parameters

-   **type**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Type of invocable action.
    
-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name
    
    for the custom invocable action.
    

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")

### createStandardAction(type, version)

Creates a wrapper for a standard invocable action.

#### Signature

`public static Invocable.Action createStandardAction(String type, String version)`

#### Parameters

-   **type**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Type of invocable action.
    
-   **version**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Version of the invocable action.
    

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")

### createStandardAction(type)

Creates a wrapper for a standard invocable action.

#### Signature

`public static Invocable.Action createStandardAction(String type)`

#### Parameters

-   **type**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Type of invocable action.
    

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")

### getDescribe()

Gets metadata related to an invocable action.

#### Signature

`public List<Invocable.Action.DescribeResult> getDescribe()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Invocable.Action.DescribeResult](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_DescribeResult.htm#apex_class_Invocable_Action_DescribeResult "Contains methods to get metadata about invocable actions.")\>

### getName()

Gets the name of an invocable action.

#### Signature

`public String getName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the invocable action.

### getNamespace()

Gets the namespace of a custom invocable action.

#### Signature

`public String getNamespace()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Namespace of the custom invocable action.

### getType()

Gets the type of an invocable action.

#### Signature

`public String getType()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Type of invocable action.

### getVersion()

Gets the version of an invocable action.

#### Signature

`public String getVersion()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Version of the invocable action.

### invoke()

Invokes an invocable action from Apex code.

#### Signature

`public List<Invocable.Action.Result> invoke()`

#### Return Value

Type: List<[Invocable.Action.Result](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_Result.htm#apex_class_Invocable_Action_Result "Contains methods to retrieve results from invocable actions called from Apex code.")\>

### isStandard()

Determines whether an invocable action is a standard invocable action.

#### Signature

`public Boolean isStandard()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

This method returns `true` if the invocable action is a standard invocable action.

### setInvocationParameter(parameterName, parameterValue)

Sets a value for an invocable action parameter.

#### Signature

`public Invocable.Action setInvocationParameter(String parameterName, Object parameterValue)`

#### Parameters

-   **parameterName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Name of the invocable action parameter to set.
    
-   **parameterValue**:
    
    Type: Object
    
    Value to set the invocable action parameter to.
    

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")

### setInvocations(invocations)

Initializes the invocations for an action from a pre-existing list of invocations.

#### Signature

`public Invocable.Action setInvocations(List<Map<String,ANY>> invocations)`

#### Parameters

-   **invocations**:
    
    Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),ANY>>
    
    List of invocations for the invocable action.
    

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")
