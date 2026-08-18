---
doc_id: "apex_class_Messaging_ActionableNotification_Builder"
---

# ActionableNotification.Builder Class

Contains methods to build an instance of the `Messaging.ActionableNotification` class, which is used to configure actionable notifications for mobile devices.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce notifications and email functionality.")

## Example

See the example for the [`Messaging.ActionableNotification` class](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm#apex_class_Messaging_ActionableNotification "Contains information about an actionable custom notification.").

## See Also

- [ActionableNotification.Builder Methods](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification_Builder.htm#apex_Messaging_ActionableNotification_Builder_methods)

## ActionableNotification.Builder Methods

The following are methods for `ActionableNotification.Builder`.

## See Also

- [build()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification_Builder.htm#apex_Messaging_ActionableNotification_Builder_build)
- [withActionIdentifier(actionIdentifier)](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification_Builder.htm#apex_Messaging_ActionableNotification_Builder_withActionIdentifier)
- [withNotificationTypeId(notificationTypeId)](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification_Builder.htm#apex_Messaging_ActionableNotification_Builder_withNotificationTypeId)
- [withRecipientId(recipientId)](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification_Builder.htm#apex_Messaging_ActionableNotification_Builder_withRecipientId)
- [withSenderId(senderId)](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification_Builder.htm#apex_Messaging_ActionableNotification_Builder_withSenderId)
- [withTargetId(targetId)](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification_Builder.htm#apex_Messaging_ActionableNotification_Builder_withTargetId)
- [withTargetPageRef(targetPageRef)](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification_Builder.htm#apex_Messaging_ActionableNotification_Builder_withTargetPageRef)

### build()

Returns an instance of the `Messaging.ActionableNotification` class.

#### Signature

`public Messaging.ActionableNotification build()`

#### Return Value

Type: [Messaging.ActionableNotification](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm#apex_class_Messaging_ActionableNotification "Contains information about an actionable custom notification.")

### withActionIdentifier(actionIdentifier)

Sets the unique action identifier (API name) for the custom notification action.

#### Signature

This `actionIdentifier` must belong to the action group associated with the custom notification.

`public Messaging.ActionableNotification.Builder withActionIdentifier(String actionIdentifier)`

#### Parameters

-   **actionIdentifier**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The API name of the action.
    

#### Return Value

Type: [Messaging.ActionableNotification.Builder](#apex_class_Messaging_ActionableNotification_Builder "Contains methods to build an instance of the Messaging.ActionableNotification class, which is used to configure actionable notifications for mobile devices.")

### withNotificationTypeId(notificationTypeId)

Sets the ID of the custom notification type.

#### Signature

`public Messaging.ActionableNotification.Builder withNotificationTypeId(String notificationTypeId)`

#### Parameters

-   **notificationTypeId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The ID of the custom notification type being used for the notification. A notification type is required to send a custom notification.
    

#### Return Value

Type: [Messaging.ActionableNotification.Builder](#apex_class_Messaging_ActionableNotification_Builder "Contains methods to build an instance of the Messaging.ActionableNotification class, which is used to configure actionable notifications for mobile devices.")

### withRecipientId(recipientId)

Sets the user ID of the custom notification recipient.

#### Signature

`public Messaging.ActionableNotification.Builder withRecipientId(String recipientId)`

#### Parameters

-   **recipientId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The user ID of the notification recipient.
    

#### Return Value

Type: [Messaging.ActionableNotification.Builder](#apex_class_Messaging_ActionableNotification_Builder "Contains methods to build an instance of the Messaging.ActionableNotification class, which is used to configure actionable notifications for mobile devices.")

### withSenderId(senderId)

Sets the sender of the custom notification.

#### Signature

`public Messaging.ActionableNotification.Builder withSenderId(String senderId)`

#### Parameters

-   **senderId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The user ID of the sender of the notification. Setting a sender is optional.
    

#### Return Value

Type: [Messaging.ActionableNotification.Builder](#apex_class_Messaging_ActionableNotification_Builder "Contains methods to build an instance of the Messaging.ActionableNotification class, which is used to configure actionable notifications for mobile devices.")

### withTargetId(targetId)

Sets the record ID for the target record of the notification.

#### Signature

You must specify either a `targetID` or a `targetPageRef`.

`public Messaging.ActionableNotification.Builder withTargetId(String targetId)`

#### Parameters

-   **targetId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The ID of the target record.
    

#### Return Value

Type: [Messaging.ActionableNotification.Builder](#apex_class_Messaging_ActionableNotification_Builder "Contains methods to build an instance of the Messaging.ActionableNotification class, which is used to configure actionable notifications for mobile devices.")

### withTargetPageRef(targetPageRef)

The PageReference for the navigation target of the notification.

#### Signature

You must specify either a `targetID` or a `targetPageRef`.

`public Messaging.ActionableNotification.Builder withTargetPageRef(String targetPageRef)`

#### Parameters

-   **targetPageRef**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The target page reference as a URL string, for example `'/lightning/r/Case/500XXXXXXXXXXXXYAI/view'`. For more examples, see pageReference Types.
    

#### Return Value

Type: [Messaging.ActionableNotification.Builder](#apex_class_Messaging_ActionableNotification_Builder "Contains methods to build an instance of the Messaging.ActionableNotification class, which is used to configure actionable notifications for mobile devices.")
