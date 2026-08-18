---
doc_id: "apex_class_QuickAction_QuickActionDefaults"
---

# QuickActionDefaults Class

Represents an abstract Apex class that provides the context for running the standard Email Action on Case Feed and the container of the Email Message fields for the action payload. You can override the target fields before the standard Email Action is rendered.

## Namespace

[QuickAction](atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm "The QuickAction namespace provides classes and methods for quick actions.")

## Usage

:::tip Note
You cannot extend this abstract class. You can use the getter methods when using it in
        the context of QuickAction.QuickActionDefaultsHandler. Salesforce provides a class that
        extends this class (See
        QuickAction.SendEmailQuickActionDefaults.)
:::

## See Also

- [QuickActionDefaults Methods](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm#apex_QuickAction_QuickActionDefaults_methods)

## QuickActionDefaults Methods

The following are methods for `QuickActionDefaults`.

## See Also

- [getActionName()](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm#apex_QuickAction_QuickActionDefaults_getActionName)
- [getActionType()](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm#apex_QuickAction_QuickActionDefaults_getActionType)
- [getContextId()](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm#apex_QuickAction_QuickActionDefaults_getContextId)
- [getTargetSObject()](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm#apex_QuickAction_QuickActionDefaults_getTargetSObject)

### getActionName()

Returns the name of the standard Email Action on Case Feed (Case.Email).

#### Signature

`public String getActionName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getActionType()

Returns the type of the standard Email Action on Case Feed (Email).

#### Signature

`public String getActionType()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getContextId()

The ID of the context related to the standard Email Action on Case Feed (Case ID).

#### Signature

`public Id getContextId()`

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getTargetSObject()

The target object of the standard Email Action on Case Feed (EmailMessage).

#### Signature

`public SObject getTargetSObject()`

#### Return Value

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")
