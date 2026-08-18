---
doc_id: "apex_class_quickaction_quickactionrequest"
---

# QuickActionRequest Class

Use the `QuickAction.QuickActionRequest` class for providing action information for quick actions to be performed by `QuickAction` class methods. Action information includes the action name, context record ID, and record.

## Namespace

[QuickAction](atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm "The QuickAction namespace provides classes and methods for quick actions.")

## Usage

For Apex saved using Salesforce API version 28.0, a parent ID is associated with the QuickActionRequest instead of the context ID.

The constructor of this class takes no arguments: 

```apex
QuickAction.QuickActionRequest qar = new QuickAction.QuickActionRequest();
```

## Example

In this sample, a new quick action is created to create a contact and assign a record to it.

```apex
QuickAction.QuickActionRequest req = new QuickAction.QuickActionRequest();
// Some quick action name
req.quickActionName = Schema.Account.QuickAction.AccountCreateContact; 

// Define a record for the quick action to create
Contact c = new Contact(); 
c.lastname = 'last name';
req.record = c; 

// Provide the context ID (or parent ID). In this case, it is an Account record.
req.contextid = '001xx000003DGcO'; 

QuickAction.QuickActionResult res = QuickAction.performQuickAction(req);
```

## See Also

- [QuickActionRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_QuickAction_QuickActionRequest_constructors)
- [QuickActionRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_QuickAction_QuickActionRequest_methods)
- [QuickAction Class](atlas.en-us.apexref.meta/apexref/apex_class_system_quickaction.htm#apex_class_system_quickaction)

## QuickActionRequest Constructors

The following are constructors for `QuickActionRequest`.

## See Also

- [QuickActionRequest()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_QuickAction_QuickActionRequest_ctor)

### QuickActionRequest()

Creates a new instance of the `QuickAction.QuickActionRequest` class.

#### Signature

`public QuickActionRequest()`

## QuickActionRequest Methods

The following are methods for `QuickActionRequest`. All are instance methods.

## See Also

- [getContextId()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_QuickAction_QuickActionRequest_getContextId)
- [getQuickActionName()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_QuickAction_QuickActionRequest_getQuickActionName)
- [getRecord()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_QuickAction_QuickActionRequest_getRecord)
- [setContextId(contextId)](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_QuickAction_QuickActionRequest_setContextId)
- [setQuickActionName(name)](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_QuickAction_QuickActionRequest_setQuickActionName)
- [setRecord(record)](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_QuickAction_QuickActionRequest_setRecord)

### getContextId()

Returns this QuickAction’s context record ID.

#### Signature

`public Id getContextId()`

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getQuickActionName()

Returns this QuickAction’s name.

#### Signature

`public String getQuickActionName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getRecord()

Returns the QuickAction’s associated record.

#### Signature

`public SObject getRecord()`

#### Return Value

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

### setContextId(contextId)

Sets this QuickAction’s context ID. Returned by `getContextId`.

#### Signature

`public Void setContextId(Id contextId)`

#### Parameters

-   **contextId**:
    
    Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")
    

#### Return Value

Type: Void

#### Usage

For Apex saved using Salesforce API version 28.0, sets this QuickAction’s parent ID and is returned by `getParentId`.

### setQuickActionName(name)

Sets this QuickAction’s name. Returned by `getQuickActionName`.

#### Signature

`public Void setQuickActionName(String name)`

#### Parameters

-   **name**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

### setRecord(record)

Sets a record for this QuickAction. Returned by `getRecord`.

#### Signature

`public Void setRecord(SObject record)`

#### Parameters

-   **record**:
    
    Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")
    

#### Return Value

Type: Void
