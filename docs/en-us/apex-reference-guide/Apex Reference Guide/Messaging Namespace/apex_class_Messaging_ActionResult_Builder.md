---
doc_id: "apex_class_Messaging_ActionResult_Builder"
---

# ActionResult.Builder Class

Contains methods to build and validate an instance of the `Messaging.ActionResult` class.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce notifications and email functionality.")

## Usage

See the example for the [NotificationActionHandler Interface](atlas.en-us.apexref.meta/apexref/apex_interface_Messaging_NotificationActionHandler.htm#apex_interface_Messaging_NotificationActionHandler "Implement this interface to execute an action on a custom notification.").

## See Also

- [ActionResult.Builder Methods](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionResult_Builder.htm#apex_Messaging_ActionResult_Builder_methods)

## ActionResult.Builder Methods

The following are methods for `ActionResult.Builder`.

## See Also

- [build()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionResult_Builder.htm#apex_Messaging_ActionResult_Builder_build)
- [withErrorCode(errorCode)](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionResult_Builder.htm#apex_Messaging_ActionResult_Builder_withErrorCode)
- [withMessage(message)](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionResult_Builder.htm#apex_Messaging_ActionResult_Builder_withMessage)
- [withSuccess(success)](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionResult_Builder.htm#apex_Messaging_ActionResult_Builder_withSuccess)

### build()

Validates and returns the action result instance created by using the `ActionResult.Builder` methods.

#### Signature

`public Messaging.ActionResult build()`

#### Return Value

Type: [Messaging.ActionResult](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionResult.htm#apex_class_Messaging_ActionResult "Contains information about the execution of an actionable notification.")

### withErrorCode(errorCode)

Sets the error message associated with the action error.

#### Signature

`public Messaging.ActionResult.Builder withErrorCode(Messaging.ActionError errorCode)`

#### Parameters

-   **errorCode**:
    
    Type: [Messaging.ActionError](atlas.en-us.apexref.meta/apexref/apex_enum_Messaging_ActionError.htm "Specifies the error that occurred during the execution of an actionable notification.")
    
    The error message.
    

#### Return Value

Type: [Messaging.ActionResult.Builder](#apex_class_Messaging_ActionResult_Builder "Contains methods to build and validate an instance of the Messaging.ActionResult class.")

### withMessage(message)

Sets the success or error message associated with the execution of the action.

#### Signature

`public Messaging.ActionResult.Builder withMessage(String message)`

#### Parameters

-   **message**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The notification message.
    

#### Return Value

Type: [Messaging.ActionResult.Builder](#apex_class_Messaging_ActionResult_Builder "Contains methods to build and validate an instance of the Messaging.ActionResult class.")

### withSuccess(success)

Sets a Boolean that informs the user whether the execution of the action was successful (`true`) or not (`false`).

#### Signature

`public Messaging.ActionResult.Builder withSuccess(Boolean success)`

#### Parameters

-   **success**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    

#### Return Value

Type: [Messaging.ActionResult.Builder](#apex_class_Messaging_ActionResult_Builder "Contains methods to build and validate an instance of the Messaging.ActionResult class.")
