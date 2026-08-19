---
doc_id: "apex_forcecom_flow_invocable_action_callout"
---

# Making Callouts to External Systems from Invocable Actions

When you define a method that runs as an invocable action in a screen flow and makes a callout to an external system, use the `callout` modifier.

When the method is executed as an invocable action, screen flows use this modifier to determine whether the action can be executed safely in the current transaction. Flow admins can configure the action to let the flow decide whether to execute the action in a new transaction or the current one.

When all of these conditions are met, the flow commits the current transaction, starts a new transaction, and makes the call to an external system safely.

-   The method's callout modifier is `true`.
-   The action's Transaction Control setting in a screen flow is configured to let the flow decide.
-   The current transaction has uncommitted work.

If any of these conditions are true, the flow executes the action in the current transaction.

-   The callout modifier is `false`.
-   The action is executed by a non-screen flow.
-   The current transaction doesn’t have uncommitted work.

## See Also

- [InvocableMethod Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm)
