---
doc_id: "apex_methods_system_approval"
---

# Approval Class

Contains methods for processing approval requests and setting approval-process locks and unlocks on records.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Salesforce admins can edit locked records. Depending on your approval process configuration settings, an assigned approver can also edit locked records. Locks and unlocks that are set programmatically use the same record editability settings as other approval-process locks and unlocks.

Record locks and unlocks are treated as DML. They’re blocked before a callout, they count toward your DML limits, and if a failure occurs, they’re rolled back along with the rest of your transaction. To change this rollback behavior, use an allOrNone parameter.

Approval is also used as a namespace for the `ProcessRequest` and `ProcessResult` classes.

## See Also

- [Approval Process Considerations](https://help.salesforce.com/HTViewHelpDoc?id=approvals_considerations.htm&amp;language=en_US)

## Approval Methods

The following are methods for `Approval`. All methods are static.

## See Also

- [isLocked(id)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_approval_isLocked)
- [isLocked(ids)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_approval_isLocked_2)
- [isLocked(sobject)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_approval_isLocked_3)
- [isLocked(sobjects)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_approval_isLocked_4)
- [lock(recordId)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_lock)
- [lock(recordIds)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_lock_2)
- [lock(recordToLock)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_lock_3)
- [lock(recordsToLock)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_lock_4)
- [lock(recordId, allOrNothing)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_lock_5)
- [lock(recordIds, allOrNothing)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_lock_6)
- [lock(recordToLock, allOrNothing)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_lock_7)
- [lock(recordsToLock, allOrNothing)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_lock_8)
- [process(approvalRequest)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_process)
- [process(approvalRequest, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_process_2)
- [process(approvalRequests)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_process_3)
- [process(approvalRequests, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_process_4)
- [unlock(recordId)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_unlock)
- [unlock(recordIds)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_unlock_2)
- [unlock(recordToUnlock)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_unlock_3)
- [unlock(recordsToUnlock)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_unlock_4)
- [unlock(recordId, allOrNothing)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_unlock_5)
- [unlock(recordIds, allOrNothing)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_unlock_6)
- [unlock(recordToUnlock, allOrNothing)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_unlock_7)
- [unlock(recordsToUnlock, allOrNothing)](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_System_Approval_unlock_8)

### isLocked(id)

Returns `true` if the record with the ID id is locked, or `false` if it’s not.

#### Signature

`public static Boolean isLocked(Id id)`

#### Parameters

-   **id**: Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.") The ID of the record whose lock or unlock status is in question.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isLocked(ids)

Returns a map of record IDs and their lock statuses. If the record is locked the status is `true`. If the record is not locked the status is `false`.

#### Signature

`public static Map<Id,Boolean> isLocked(List<Id> ids)`

#### Parameters

-   **ids**: Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\> The IDs of the records whose lock or unlock statuses are in question.

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type."),[Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")\>

### isLocked(sobject)

Returns `true` if the sobject record is locked, or `false` if it’s not.

#### Signature

`public static Boolean isLocked(SObject sobject)`

#### Parameters

-   **sobject**: Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.") The record whose lock or unlock status is in question.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isLocked(sobjects)

Returns a map of record IDs to lock statuses. If the record is locked the status is `true`. If the record is not locked the status is `false`.

#### Signature

`public static Map<Id,Boolean> isLocked(List<SObject> sobjects)`

#### Parameters

-   **sobjects**: Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\> The records whose lock or unlock statuses are in question.

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type."),[Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")\>

### lock(recordId)

Locks an object, and returns the lock results.

#### Signature

`public static Approval.LockResult lock(Id recordId)`

#### Parameters

-   **recordId**: Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.") ID of the object to lock.

#### Return Value

Type: [Approval.LockResult](atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm#apex_class_Approval_LockResult "The result of a record lock returned by a System.Approval.lock() method.")

### lock(recordIds)

Locks a set of objects, and returns the lock results, including failures.

#### Signature

`public static List<Approval.LockResult> lock(List<Id> ids)`

#### Parameters

-   **ids**: Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\> IDs of the objects to lock.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Approval.LockResult](atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm#apex_class_Approval_LockResult "The result of a record lock returned by a System.Approval.lock() method.")\>

### lock(recordToLock)

Locks an object, and returns the lock results.

#### Signature

`public static Approval.LockResult lock(SObject recordToLock)`

#### Parameters

-   **recordToLock**: Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

#### Return Value

Type: [Approval.LockResult](atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm#apex_class_Approval_LockResult "The result of a record lock returned by a System.Approval.lock() method.")

### lock(recordsToLock)

Locks a set of objects, and returns the lock results, including failures.

#### Signature

`public static List<Approval.LockResult> lock(List<SObject> recordsToLock)`

#### Parameters

-   **recordsToLock**: Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Approval.LockResult](atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm#apex_class_Approval_LockResult "The result of a record lock returned by a System.Approval.lock() method.")\>

### lock(recordId, allOrNothing)

Locks an object, with the option for partial success, and returns the lock result.

#### Signature

`public static Approval.LockResult lock(Id recordId, Boolean allOrNothing)`

#### Parameters

-   **recordId**: Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.") ID of the object to lock.
-   **allOrNothing**: Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.") Specifies whether this operation allows partial success. If you specify `false` and a record fails, the remainder of the DML operation can still succeed. This method returns a result object that you can use to verify which records succeeded, which failed, and why.

#### Return Value

Type: [Approval.LockResult](atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm#apex_class_Approval_LockResult "The result of a record lock returned by a System.Approval.lock() method.")

### lock(recordIds, allOrNothing)

Locks a set of objects, with the option for partial success. It returns the lock results, including failures.

#### Signature

`public static List<Approval.LockResult> lock(List<Id> recordIds, Boolean allOrNothing)`

#### Parameters

-   **recordIds**: Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\> IDs of the objects to lock.
-   **allOrNothing**: Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.") Specifies whether this operation allows partial success. If you specify `false` and a record fails, the remainder of the DML operation can still succeed. This method returns a result object that you can use to verify which records succeeded, which failed, and why.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Approval.LockResult](atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm#apex_class_Approval_LockResult "The result of a record lock returned by a System.Approval.lock() method.")\>

### lock(recordToLock, allOrNothing)

Locks an object, with the option for partial success, and returns the lock result.

#### Signature

`public static Approval.LockResult lock(SObject recordToLock, Boolean allOrNothing)`

#### Parameters

-   **recordToLock**: Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")
-   **allOrNothing**: Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.") Specifies whether this operation allows partial success. If you specify `false` and a record fails, the remainder of the DML operation can still succeed. This method returns a result object that you can use to verify which records succeeded, which failed, and why.

#### Return Value

Type: [Approval.LockResult](atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm#apex_class_Approval_LockResult "The result of a record lock returned by a System.Approval.lock() method.")

### lock(recordsToLock, allOrNothing)

Locks a set of objects, with the option for partial success. It returns the lock results, including failures.

#### Signature

`public static List<Approval.LockResult> lock(List<SObject> recordsToLock, Boolean allOrNothing)`

#### Parameters

-   **recordsToLock**: Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>
-   **allOrNothing**: Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.") Specifies whether this operation allows partial success. If you specify `false` and a record fails, the remainder of the DML operation can still succeed. This method returns a result object that you can use to verify which records succeeded, which failed, and why.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Approval.LockResult](atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm#apex_class_Approval_LockResult "The result of a record lock returned by a System.Approval.lock() method.")\>

### process(approvalRequest)

Submits a new approval request and approves or rejects existing approval requests.

#### Signature

`public static Approval.ProcessResult process(Approval.ProcessRequest approvalRequest)`

#### Parameters

-   **approvalRequest**: Type: [Approval.ProcessRequest](atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm#apex_ProcessRequest "The ProcessRequest class is the parent class for the ProcessSubmitRequest and ProcessWorkitemRequest classes. Use the ProcessRequest class to write generic Apex that can process objects from either class.")

#### Return Value

Type: [Approval.ProcessResult](atlas.en-us.apexref.meta/apexref/apex_ProcessResult.htm#apex_ProcessResult "After you submit a record for approval, use the ProcessResult class to process the results of an approval process.")

#### Example

```apex
// Insert an account

Account a = new Account(Name='Test',
                     annualRevenue=100.0);

insert a;

// Create an approval request for the account
Approval.ProcessSubmitRequest req1 = 
      new Approval.ProcessSubmitRequest();
req1.setObjectId(a.id);

// Submit the approval request for the account
Approval.ProcessResult result = 
                   Approval.process(req1);
```

### process(approvalRequest, allOrNone)

Submits a new approval request and approves or rejects existing approval requests.

#### Signature

`public static Approval.ProcessResult process(Approval.ProcessRequest approvalRequest, Boolean allOrNone)`

#### Parameters

-   **approvalRequest**: [Approval.ProcessRequest](atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm#apex_ProcessRequest "The ProcessRequest class is the parent class for the ProcessSubmitRequest and ProcessWorkitemRequest classes. Use the ProcessRequest class to write generic Apex that can process objects from either class.")
-   **allOrNone**: Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.") The optional allOrNone parameter specifies whether the operation allows for partial success. If you specify `false` for this parameter and an approval fails, the remainder of the approval processes can still succeed.

#### Return Value

[Approval.ProcessResult](atlas.en-us.apexref.meta/apexref/apex_ProcessResult.htm#apex_ProcessResult "After you submit a record for approval, use the ProcessResult class to process the results of an approval process.")

### process(approvalRequests)

Submits a list of new approval requests, and approves or rejects existing approval requests.

#### Signature

`public static Approval.ProcessResult [] process(Approval.ProcessRequest[] approvalRequests)`

#### Parameters

-   **approvalRequests**: [Approval.ProcessRequest](atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm#apex_ProcessRequest "The ProcessRequest class is the parent class for the ProcessSubmitRequest and ProcessWorkitemRequest classes. Use the ProcessRequest class to write generic Apex that can process objects from either class.") \[\]

#### Return Value

[Approval.ProcessResult](atlas.en-us.apexref.meta/apexref/apex_ProcessResult.htm#apex_ProcessResult "After you submit a record for approval, use the ProcessResult class to process the results of an approval process.") \[\]

### process(approvalRequests, allOrNone)

Submits a list of new approval requests, and approves or rejects existing approval requests.

#### Signature

`public static Approval.ProcessResult [] process(Approval.ProcessRequest[] approvalRequests, Boolean allOrNone)`

#### Parameters

-   **approvalRequests**: [Approval.ProcessRequest](atlas.en-us.apexref.meta/apexref/apex_ProcessRequest.htm#apex_ProcessRequest "The ProcessRequest class is the parent class for the ProcessSubmitRequest and ProcessWorkitemRequest classes. Use the ProcessRequest class to write generic Apex that can process objects from either class.") \[\]
-   **allOrNone**: Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.") The optional allOrNone parameter specifies whether the operation allows for partial success. If you specify `false` for this parameter and an approval fails, the remainder of the approval processes can still succeed.

#### Return Value

[Approval.ProcessResult](atlas.en-us.apexref.meta/apexref/apex_ProcessResult.htm#apex_ProcessResult "After you submit a record for approval, use the ProcessResult class to process the results of an approval process.") \[\]

### unlock(recordId)

Unlocks an object, and returns the unlock results.

#### Signature

`public static Approval.UnlockResult unlock(Id recordId)`

#### Parameters

-   **recordId**: Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.") ID of the object to unlock.

#### Return Value

Type: [Approval.UnlockResult](atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm#apex_class_Approval_UnlockResult "The result of a record unlock, returned by a System.Approval.unlock() method.")

### unlock(recordIds)

Unlocks a set of objects, and returns the unlock results, including failures.

#### Signature

`public static List<Approval.UnlockResult> unlock(List<Id> recordIds)`

#### Parameters

-   **recordIds**: Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\> IDs of the objects to unlock.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Approval.UnlockResult](atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm#apex_class_Approval_UnlockResult "The result of a record unlock, returned by a System.Approval.unlock() method.")\>

### unlock(recordToUnlock)

Unlocks an object, and returns the unlock results.

#### Signature

`public static Approval.UnlockResult unlock(SObject recordToUnlock)`

#### Parameters

-   **recordToUnlock**: Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

#### Return Value

Type: [Approval.UnlockResult](atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm#apex_class_Approval_UnlockResult "The result of a record unlock, returned by a System.Approval.unlock() method.")

### unlock(recordsToUnlock)

Unlocks a set of objects, and returns the unlock results, including failures.

#### Signature

`public static List<Approval.UnlockResult> unlock(List<SObject> recordsToUnlock)`

#### Parameters

-   **recordsToUnlock**: Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Approval.UnlockResult](atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm#apex_class_Approval_UnlockResult "The result of a record unlock, returned by a System.Approval.unlock() method.")\>

### unlock(recordId, allOrNothing)

Unlocks an object, with the option for partial success, and returns the unlock result.

#### Signature

`public static Approval.UnlockResult unlock(Id recordId, Boolean allOrNothing)`

#### Parameters

-   **recordId**: Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.") ID of the object to lock.
-   **allOrNothing**: Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.") Specifies whether this operation allows partial success. If you specify `false` and a record fails, the remainder of the DML operation can still succeed. This method returns a result object that you can use to verify which records succeeded, which failed, and why.

#### Return Value

Type: [Approval.UnlockResult](atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm#apex_class_Approval_UnlockResult "The result of a record unlock, returned by a System.Approval.unlock() method.")

### unlock(recordIds, allOrNothing)

Unlocks a set of objects, with the option for partial success. It returns the unlock results, including failures.

#### Signature

`public static List<Approval.UnlockResult> unlock(List<Id> recordIds, Boolean allOrNothing)`

#### Parameters

-   **recordIds**: Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\> IDs of the objects to unlock.
-   **allOrNothing**: Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.") Specifies whether this operation allows partial success. If you specify `false` and a record fails, the remainder of the DML operation can still succeed. This method returns a result object that you can use to verify which records succeeded, which failed, and why.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Approval.UnlockResult](atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm#apex_class_Approval_UnlockResult "The result of a record unlock, returned by a System.Approval.unlock() method.")\>

### unlock(recordToUnlock, allOrNothing)

Unlocks an object, with the option for partial success, and returns the unlock result.

#### Signature

`public static Approval.UnlockResult unlock(SObject recordToUnlock, Boolean allOrNothing)`

#### Parameters

-   **recordToUnlock**: Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")
-   **allOrNothing**: Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.") Specifies whether this operation allows partial success. If you specify `false` and a record fails, the remainder of the DML operation can still succeed. This method returns a result object that you can use to verify which records succeeded, which failed, and why.

#### Return Value

Type: [Approval.UnlockResult](atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm#apex_class_Approval_UnlockResult "The result of a record unlock, returned by a System.Approval.unlock() method.")

### unlock(recordsToUnlock, allOrNothing)

Unlocks a set of objects, with the option for partial success. It returns the unlock results, including failures.

#### Signature

`public static List<Approval.UnlockResult> unlock(List<SObject> recordsToUnlock, Boolean allOrNothing)`

#### Parameters

-   **recordsToUnlock**: Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>
-   **allOrNothing**: Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.") Specifies whether this operation allows partial success. If you specify `false` and a record fails, the remainder of the DML operation can still succeed. This method returns a result object that you can use to verify which records succeeded, which failed, and why.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Approval.UnlockResult](atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm#apex_class_Approval_UnlockResult "The result of a record unlock, returned by a System.Approval.unlock() method.")\>
