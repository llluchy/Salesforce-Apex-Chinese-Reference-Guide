---
doc_id: "apex_class_Messaging_ActionableNotification"
---

# ActionableNotification Class

Contains information about an actionable custom notification.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce notifications and email functionality.")

## Example

This example shows how to create an ActionableNotification object by using the [`ActionableNotification.Builder`](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification_Builder.htm#apex_class_Messaging_ActionableNotification_Builder "Contains methods to build an instance of the Messaging.ActionableNotification class, which is used to configure actionable notifications for mobile devices.") class.

```apex
Messaging.ActionableNotification notification =
new Messaging.ActionableNotification.Builder()
.withNotificationTypeId('0MLXXXXXXXXXXXX4AC')
.withActionIdentifier('testAction')
.withRecipientId('005XXXXXXXXXXXX')
.withSenderId('005XXXXXXXXXXXX')
.withTargetId('500XXXXXXXXXXXXYAI')
.withTargetPageRef('/lightning/r/Case/500XXXXXXXXXXXXYAI/view')
.build();
```

## See Also

- [ActionableNotification Methods](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm#apex_Messaging_ActionableNotification_methods)

## ActionableNotification Methods

The following are methods for `ActionableNotification`.

## See Also

- [getActionIdentifier()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm#apex_Messaging_ActionableNotification_getActionIdentifier)
- [getNotificationTypeId()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm#apex_Messaging_ActionableNotification_getNotificationTypeId)
- [getRecipientId()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm#apex_Messaging_ActionableNotification_getRecipientId)
- [getSenderId()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm#apex_Messaging_ActionableNotification_getSenderId)
- [getTargetId()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm#apex_Messaging_ActionableNotification_getTargetId)
- [getTargetPageRef()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm#apex_Messaging_ActionableNotification_getTargetPageRef)

### getActionIdentifier()

Return the unique action identifier (API name) for the custom notification action.

This `actionIdentifier` must belong to the action group associated with the custom notification.

#### Signature

`public String getActionIdentifier()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getNotificationTypeId()

Return the ID of the custom notification type used for the notification.

#### Signature

`public String getNotificationTypeId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getRecipientId()

Return the user ID of the recipient of the notification.

#### Signature

`public String getRecipientId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSenderId()

Return the user ID of the sender of the notification.

#### Signature

`public String getSenderId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getTargetId()

Return the record ID for the target record of the notification.

#### Signature

`public String getTargetId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getTargetPageRef()

Return the `PageReference` for the navigation target of the notification.

#### Signature

`public String getTargetPageRef()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
