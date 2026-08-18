---
doc_id: "apex_triggers_syntax"
---

# Trigger Syntax

To define a trigger, use the following syntax:

```apex
trigger TriggerName on ObjectName (trigger_events) {
                     code_block
                     }
```

where trigger\_events can be a comma-separated list of one or more of the following events:

For example, the following code defines a trigger for the `before insert` and `before update` events on the Account object:

```apex
trigger myAccountTrigger on Account (before insert, before update) {
    // Your code here
}
```

The code block of a trigger cannot contain the `static` keyword. Triggers can only contain keywords applicable to an inner class. In addition, you do not have to manually commit any database changes made by a trigger. If your Apex trigger completes successfully, any database changes are automatically committed. If your Apex trigger does not complete successfully, any changes made to the database are rolled back.

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_triggers_bulk.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_triggers_context_variables.htm)
