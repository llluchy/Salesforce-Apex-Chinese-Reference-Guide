---
doc_id: "apex_class_Messaging_ActionResult"
---

# ActionResult Class

Contains information about the execution of an actionable notification.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce notifications and email functionality.")

## Usage

This `ActionResult` instance represents the successful execution of an actionable notification.

```plain
Messaging.ActionResult result = 
new Messaging.ActionResult.Builder()
.withSuccess(true)
.withMessage('Action is executed successfully')
.build();
```

This `ActionResult` instance represents the unsuccessful execution of an actionable notification.

```apex
Messaging.ActionResult result = 
new Messaging.ActionResult.Builder()
.withSuccess(false) 
.withMessage('Error updating case')
.withErrorCode(Messaging.ActionError.INTERNAL_ERROR)
.build();
```

## See Also

- [ActionResult Methods](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionResult.htm#apex_Messaging_ActionResult_methods)

## ActionResult Methods

The following are methods for `ActionResult`.

## See Also

- [getErrorCode()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionResult.htm#apex_Messaging_ActionResult_getErrorCode)
- [getMessage()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionResult.htm#apex_Messaging_ActionResult_getMessage)
- [isSuccess()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionResult.htm#apex_Messaging_ActionResult_isSuccess)

### getErrorCode()

If an error occurred, returns an object that provides the error code and a description.

#### Signature

`public Messaging.ActionError getErrorCode()`

#### Return Value

Type: [Messaging.ActionError](atlas.en-us.apexref.meta/apexref/apex_enum_Messaging_ActionError.htm "Specifies the error that occurred during the execution of an actionable notification.")

### getMessage()

Returns the success or error message that displays for the user.

#### Signature

`public String getMessage()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### isSuccess()

Returns `true` if the action executed successfully; otherwise returns `false`.

#### Signature

`public Boolean isSuccess()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
