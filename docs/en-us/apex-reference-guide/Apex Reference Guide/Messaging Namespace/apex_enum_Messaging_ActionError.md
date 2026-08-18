---
doc_id: "apex_enum_Messaging_ActionError"
---

# ActionError Enum

Specifies the error that occurred during the execution of an actionable notification.

## Enum Values

The following are the values of the `Messaging.ActionError` enum.

| Value | Description |
| --- | --- |
| `ACCESS_DENIED` | Indicates that the user is not authorized to execute the action. |
| `ACTION_NOT_IMPLEMENTED` | Indicates that the action identifier is unsupported. |
| `INTERNAL_ERROR` | Indicates an internal error during execution of the action. |
| `INVALID_ACTION_PARAMETERS` | Indicates that the parameters passed to the methods for `Messaging.ActionableNotification.Builder` are invalid. |
| `INVALID_STATE` | Indicates an invalid state. |
