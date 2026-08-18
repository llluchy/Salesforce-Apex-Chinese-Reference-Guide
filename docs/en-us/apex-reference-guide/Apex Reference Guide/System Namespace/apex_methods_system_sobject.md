---
doc_id: "apex_methods_system_sobject"
---

# SObject Class

Contains methods for the sObject data type.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

SObject methods are all instance methods: they are called by and operate on an sObject instance such as an account or contact. The following are the instance methods for sObjects.

For more information on sObjects, see [Working with sObjects](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/langCon_apex_SObjects.htm).

## SObject Methods

The following are methods for `SObject`. All are instance methods.

## See Also

- [addError(errorMsg)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_addError)
- [addError(errorMsg, escape)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_addError_2)
- [addError(exceptionError)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_addError_3)
- [addError(exceptionError, escape)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_addError_4)
- [addError(fieldName, errorMsg)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#unique_249273839)
- [addError(fieldToken, errorMsg)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#unique_1107273234)
- [addError(fieldName, errorMsg, escape)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#unique_1788673960)
- [addError(fieldToken, errorMsg, escape)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#unique_784070666)
- [clear()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_clear)
- [clone(preserveId)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_clone)
- [clone(preserveId, isDeepClone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#unique_433526335)
- [clone(preserveId, isDeepClone, preserveReadonlyTimestamps)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#unique_1504533282)
- [clone(preserveId, isDeepClone, preserveReadonlyTimestamps, preserveAutonumber)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#unique_536656163)
- [get(fieldName)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_get)
- [get(field)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_get_2)
- [getCloneSourceId()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_getCloneSourceId)
- [getErrors()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_getErrors)
- [getOptions()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_getOptions)
- [getPopulatedFieldsAsMap()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_getPopulatedFieldsAsMap)
- [getSObject(fieldName)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_getSObject)
- [getSObject(field)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_getSObject_2)
- [getSObjects(fieldName)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_getSObjects)
- [getSObjects(fieldName)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_getSObjects_2)
- [getSObjectType()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_getSObjectType)
- [getQuickActionName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_getQuickActionName)
- [hasErrors()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_hasErrors)
- [isClone()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_isClone)
- [isSet(fieldName)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_isSet)
- [isSet(field)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_isSet_2)
- [put(fieldName, value)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_put)
- [put(field, value)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_put_2)
- [putSObject(fieldName, value)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_putSObject)
- [putSObject(fieldName, value)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_putSObject_2)
- [recalculateFormulas()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_recalculateFormulas)
- [setOptions(DMLOptions)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_setOptions)

### addError(errorMsg)

Marks a trigger record with a custom error message and prevents any DML operation from occurring.

#### Signature

`public Void addError(String errorMsg)`

#### Parameters

-   **errorMsg**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The error message to mark the record with.
    

#### Return Value

Type: Void

#### Usage

When used on `Trigger.new` in `insert` and `update` triggers, and on `Trigger.old` in `delete` triggers, the error message is displayed in the application interface.

See [Triggers](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_triggers.htm) and [Trigger Exceptions](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_triggers_exceptions.htm).

:::tip Note
This method escapes any HTML markup in the specified error message. The escaped characters
    are: `\n`, `<`, `>`, `&`, `"`, `\`, `\u2028`, `\u2029`, and `\u00a9`. As a result, HTML markup is not rendered; instead, it is
    displayed as text in the Salesforce user interface.
:::

When used in Visualforce controllers, the generated message is added to the collection of errors for the page. For more information, see [Validation Rules and Standard Controllers](https://developer.salesforce.com/docs/atlas.en-us.262.0.pages.meta/pages/pages_controller_std.htm "HTML (New Window)") in the *Visualforce Developer's Guide*.

#### Example

```apex
Trigger.new[0].addError('bad');
```

### addError(errorMsg, escape)

Marks a trigger record with a custom error message, specifies if the error message should be escaped, and prevents any DML operation from occurring.

#### Signature

`public Void addError(String errorMsg, Boolean escape)`

#### Parameters

-   **errorMsg**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The error message to mark the record with.
    
-   **escape**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
    Indicates whether any HTML markup in the custom error message should be escaped (`true`) or not (`false`). This parameter is ignored in both Lightning Experience and the Salesforce mobile app, and the HTML is always escaped. The escape parameter only applies in Salesforce Classic.
    

#### Return Value

Type: Void

#### Usage

The escaped characters are: `\n`, `<`, `>`, `&`, `"`, `\`, `\u2028`, `\u2029`, and `\u00a9`. As a result, HTML markup is not rendered; instead, it is displayed as text in the Salesforce user interface.

:::tip Warning
Be cautious if you specify `false`
        for the escape argument. Unescaped strings displayed in the Salesforce
        user interface can represent a vulnerability in the system because these strings might
        contain harmful code. If you want to include HTML markup in the error message, call this
        method with a `false` escape
        argument. Make sure that you escape any dynamic content, such as input field values.
        Otherwise, specify `true` for the
          escape argument or call [`addError(String
          errorMsg)`](#apex_System_SObject_addError) instead.
:::

#### Example

```apex
Trigger.new[0].addError('Fix & resubmit', false);
```

### addError(exceptionError)

Marks a trigger record with a custom error message and prevents any DML operation from occurring.

#### Signature

`public Void addError(Exception exceptionError)`

#### Parameters

-   **exceptionError**:
    
    Type: [System.Exception](atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm "An exception denotes an error that disrupts the normal flow of code execution. You can use Apex built-in exceptions or create custom exceptions. All exceptions have common methods.")
    
    An Exception object or a custom exception object that contains the error message to mark the record with.
    

#### Return Value

Type: Void

#### Usage

When used on `Trigger.new` in `insert` and `update` triggers, and on `Trigger.old` in `delete` triggers, the error message is displayed in the application interface.

See [Triggers](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_triggers.htm) and [Trigger Exceptions](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_triggers_exceptions.htm).

:::tip Note
This method escapes any HTML markup in the specified error message. The escaped
        characters are: `\n`, `<`, `>`, `&`, `"`, `\`, `\u2028`, `\u2029`, and `\u00a9`. As a result, HTML
        markup is not rendered; instead, it is displayed as text in the Salesforce user
        interface.
:::

When used in Visualforce controllers, the generated message is added to the collection of errors for the page. For more information, see [Validation Rules and Standard Controllers](https://developer.salesforce.com/docs/atlas.en-us.262.0.pages.meta/pages/pages_controller_std.htm "HTML (New Window)") in the *Visualforce Developer's Guide*.

#### Example

```apex
public class MyException extends Exception {}
Trigger.new[0].addError(new myException('Invalid Id'));
```

### addError(exceptionError, escape)

Marks a trigger record with a custom exception error message, specifies whether or not the exception error message should be escaped, and prevents any DML operation from occurring.

#### Signature

`public Void addError(Exception exceptionError, Boolean escape)`

#### Parameters

-   **exceptionError**:
    
    Type: [System.Exception](atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm "An exception denotes an error that disrupts the normal flow of code execution. You can use Apex built-in exceptions or create custom exceptions. All exceptions have common methods.")
    
    An Exception object or a custom exception object that contains the error message to mark the record with.
    
-   **escape**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
    Indicates whether any HTML markup in the custom error message should be escaped (`true`) or not (`false`). This parameter is ignored in both Lightning Experience and the Salesforce mobile app, and the HTML is always escaped. The escape parameter only applies in Salesforce Classic.
    

#### Return Value

Type: Void

#### Usage

The escaped characters are: `\n`, `<`, `>`, `&`, `"`, `\`, `\u2028`, `\u2029`, and `\u00a9`. As a result, HTML markup is not rendered; instead, it is displayed as text in the Salesforce user interface.

:::tip Warning
Be cautious if you
        specify `false` for the escape
        argument. Unescaped strings displayed in the Salesforce user interface can represent a
        vulnerability in the system because these strings might contain harmful code. If you want to
        include HTML markup in the error message, call this method with a `false` escape argument. Make sure that
        you escape any dynamic content, such as input field values. Otherwise, specify `true` for the escape argument or call
          [`addError(Exception
          e)`](#apex_System_SObject_addError_3) instead.
:::

#### Example

```apex
public class MyException extends Exception {}
Trigger.new[0].addError(new myException('Invalid Id & other issues', false));
```

### addError(fieldName, errorMsg)

Dynamically add errors to fields of an SObject associated with the specified field name.

#### Signature

`public void addError(String fieldName, String errorMsg)`

#### Parameters

-   **fieldName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The field name of the SObject .
    
-   **errorMsg**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The error message to be added. HTML special characters in the error message string are always escaped.
    

#### Return Value

Type: void

#### Usage

If the field name is an empty string or null, the error is associated with the SObject and not with a specific field.

#### Example

```apex
// Add an error to an SObject field using the addError() method.
Account acct = new Account(name = 'TestAccount');
acct.addError('name', 'error in name field');
// Use the hasErrors() method to verify that the error is added, and then the getErrors() method to validate the error.
System.Assert(acct.hasErrors());
List errors = acct.getErrors();
System.AssertEquals(1, errors.size());
```

### addError(fieldToken, errorMsg)

Dynamically add errors to an SObject instance associated with the specified field.

#### Signature

`public void addError(Schema.SObjectField fieldToken, String errorMsg`

#### Parameters

-   **fieldToken**:
    
    Type: [Schema.SObjectField](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_class_Schema_SObjectField "A Schema.sObjectField object is returned from the field describe result using the getController and getSObjectField methods.")
    
    The field of the SObject instance.
    
-   **errorMsg**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The error message to be added. HTML special characters in the error message string are always escaped.
    

#### Return Value

Type: void

#### Usage

Use this method to add errors to the specified field token of a standard or custom object. If `fieldToken`is null, the error is associated with the SObject and not with a specific field.

#### Example

```apex
// Add an error to a field of an SObject instance using the addError() method.
Account acct = new Account(name = 'TestAccount');
Schema.DescribeFieldResult nameDesc = Account.name.getDescribe();
Schema.sObjectField nameField = nameDesc.getSObjectField();
acct.addError(nameField, 'error is name field');
// Use the hasErrors() method to verify that the error is added, and then the getErrors() method to validate the error.
System.Assert(acct.hasErrors());
List errors = acct.getErrors();
System.AssertEquals(1, errors.size());
```

### addError(fieldName, errorMsg, escape)

Dynamically add errors to fields of an SObject associated with the specified field name.

#### Signature

`public void addError(String fieldName, String errorMsg, Boolean escape)`

#### Parameters

-   **fieldName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The field name of the SObject .
    
-   **errorMsg**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The error message to be added.
    
-   **escape**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
    Indicates whether any HTML markup in the custom error message should be escaped (`true`) or not (`false`). This parameter is ignored in both Lightning Experience and the Salesforce mobile app, and the HTML is always escaped. The escape parameter only applies in Salesforce Classic.
    

#### Return Value

Type: void

#### Usage

If the field name is an empty string or null, the error is associated with the SObject and not with a specific field.

The escaped characters are: `\n`, `<`, `>`, `&`, `"`, `\`, `\u2028`, `\u2029`, and `\u00a9`. As a result, HTML markup is not rendered; instead, it is displayed as text in the Salesforce user interface.

:::tip Warning
- The escape parameter cannot be disabled in Lightning Experience and
            in the Salesforce mobile app, and will be ignored.

          - Be cautious if you specify `false` for the
              escape argument. Unescaped strings displayed in the Salesforce user
            interface can represent a vulnerability in the system because these strings might
            contain harmful code. If you want to include HTML markup in the error message, call this
            method with a `false` escape
            argument. Make sure that you escape any dynamic content, such as input field values.
            Otherwise, specify `true` for the
              escape argument or call [`addError(String fieldName, String
                errorMsg)`](#unique_249273839) instead.
:::

#### Example

```apex
// Add an error to an SObject field using the addError() method.
Account acct = new Account(name = 'TestAccount');
acct.addError('name', 'error in name field', false);
// Use the hasErrors() method to verify that the error is added, and then the getErrors() method to validate the error.
System.Assert(acct.hasErrors());
List errors = acct.getErrors();
System.AssertEquals(1, errors.size());
```

### addError(fieldToken, errorMsg, escape)

Dynamically add errors to an SObject instance associated with the specified field.

#### Signature

`public void addError(Schema.SObjectField fieldToken, String errorMsg, Boolean escape)`

#### Parameters

-   **fieldToken**:
    
    Type: [Schema.SObjectField](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_class_Schema_SObjectField "A Schema.sObjectField object is returned from the field describe result using the getController and getSObjectField methods.")
    
    The field of the SObject instance.
    
-   **errorMsg**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The error message to be added.
    
-   **escape**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
    Indicates whether any HTML markup in the custom error message should be escaped (`true`) or not (`false`). This parameter is ignored in both Lightning Experience and the Salesforce mobile app, and the HTML is always escaped. The escape parameter only applies in Salesforce Classic.
    

#### Return Value

Type: void

#### Usage

Use this method to add errors to the specified field token of a standard or custom object. If `fieldToken`is null, the error is associated with the SObject and not with a specific field.

The escaped characters are: `\n`, `<`, `>`, `&`, `"`, `\`, `\u2028`, `\u2029`, and `\u00a9`. As a result, HTML markup is not rendered; instead, it is displayed as text in the Salesforce user interface.

:::tip Warning
- The escape parameter cannot be disabled in Lightning Experience and
            in the Salesforce mobile app, and will be ignored.

          - Be cautious if you specify `false` for the
              escape argument. Unescaped strings displayed in the Salesforce user
            interface can represent a vulnerability in the system because these strings might
            contain harmful code. If you want to include HTML markup in the error message, call this
            method with a `false` escape
            argument. Make sure that you escape any dynamic content, such as input field values.
            Otherwise, specify `true` for the
              escape argument or call [`addError(Schema.SObjectField fieldToken,
                String errorMsg)`](#unique_1107273234) instead.
:::

#### Example

```apex
// Add an error to a field of an SObject instance using the addError() method. 
Account acct = new Account(name = 'TestAccount');
Schema.DescribeFieldResult nameDesc = Account.name.getDescribe();
Schema.sObjectField nameField = nameDesc.getSObjectField();
acct.addError(nameField, 'error is name field', false);
// Use the hasErrors() method to verify that the error is added, and then the getErrors() method to validate the error.
System.Assert(acct.hasErrors());
List errors = acct.getErrors();
System.AssertEquals(1, errors.size());
```

### clear()

Clears all field values

#### Signature

`public Void clear()`

#### Return Value

Type: Void

#### Example

```apex
Account acc = new account(Name = 'Acme');
acc.clear();
Account expected = new Account();
system.assertEquals(expected, acc);
```

### clone(preserveId)

Creates a copy of the SObject record.

#### Signature

`public SObject clone(Boolean preserveId)`

#### Parameters

-   **preserveId**: Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.") Determines whether the ID of the original object is preserved or cleared in the duplicate. If set to `true`, the ID is copied to the duplicate. The default is `false`, that is, the ID is cleared.

#### Return Value

Type: [SObject](#apex_methods_system_sobject "Contains methods for the sObject data type.") (of the same type)

#### Usage

:::tip Note
For Apex saved using Salesforce API version 22.0 or earlier, the default value for the
          preserveId argument is `true`,
        that is, the ID is preserved.
:::

### clone(preserveId, isDeepClone)

Creates a copy of the SObject record.

#### Signature

`public SObject clone(Boolean preserveId, Boolean isDeepClone)`

#### Parameters

-   **preserveId**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
    Determines whether the ID of the original object is preserved or cleared in the duplicate. If set to `true`, the ID is copied to the duplicate. The default is `false`, that is, the ID is cleared.
    
-   **isDeepClone**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
    Determines whether the method creates a full copy of the SObject field or just a reference:
    
    -   If set to `true`, the method creates a full copy of the SObject. All fields on the SObject are duplicated in memory, including relationship fields. Consequently, if you change a field on the cloned SObject, the original SObject isn’t affected.
    -   If set to `false`, the method performs a shallow copy of the SObject fields. All copied relationship fields reference the original SObjects. Consequently, if you change a relationship field on the cloned SObject, the corresponding field on the original SObject is also affected, and vice versa. The default is `false`.

#### Return Value

Type: [SObject](#apex_methods_system_sobject "Contains methods for the sObject data type.") (of the same type)

#### Usage

:::tip Note
For Apex saved using Salesforce API version 22.0 or earlier, the default value for the
          preserveId argument is `true`,
        that is, the ID is preserved.
:::

### clone(preserveId, isDeepClone, preserveReadonlyTimestamps)

Creates a copy of the SObject record.

#### Signature

`public SObject clone(Boolean preserveId, Boolean isDeepClone, Boolean preserveReadonlyTimestamps)`

#### Parameters

-   **preserveId**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
    Determines whether the ID of the original object is preserved or cleared in the duplicate. If set to `true`, the ID is copied to the duplicate. The default is `false`, that is, the ID is cleared.
    
-   **isDeepClone**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
    Determines whether the method creates a full copy of the SObject field or just a reference:
    
    -   If set to `true`, the method creates a full copy of the SObject. All fields on the SObject are duplicated in memory, including relationship fields. Consequently, if you change a field on the cloned SObject, the original SObject isn’t affected.
    -   If set to `false`, the method performs a shallow copy of the SObject fields. All copied relationship fields reference the original SObjects. Consequently, if you change a relationship field on the cloned SObject, the corresponding field on the original SObject is also affected, and vice versa. The default is `false`.
-   **preserveReadonlyTimestamps**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
    Determines whether the read-only timestamp fields are preserved or cleared in the duplicate. If set to `true`, the read-only fields CreatedById, CreatedDate, LastModifiedById, and LastModifiedDate are copied to the duplicate. The default is `false`, that is, the values are cleared.
    
    

:::tip Note
Audit field values won’t be persisted to the
            database via DML on the cloned SObject instance.
:::

#### Return Value

Type: [SObject](#apex_methods_system_sobject "Contains methods for the sObject data type.") (of the same type)

#### Usage

:::tip Note
For Apex saved using Salesforce API version 22.0 or earlier, the default value for the
          preserveId argument is `true`,
        that is, the ID is preserved.
:::

### clone(preserveId, isDeepClone, preserveReadonlyTimestamps, preserveAutonumber)

Creates a copy of the SObject record.

#### Signature

`public SObject clone(Boolean preserveId, Boolean isDeepClone, Boolean preserveReadonlyTimestamps, Boolean preserveAutonumber)`

#### Parameters

-   **preserveId**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
    Determines whether the ID of the original object is preserved or cleared in the duplicate.
    
    If set to `true`, the ID is copied to the duplicate. The default is `false`, that is, the ID is cleared.
    
-   **isDeepClone**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
    Determines whether the method creates a full copy of the SObject field or just a reference:
    
    -   If set to `true`, the method creates a full copy of the SObject. All fields on the SObject are duplicated in memory, including relationship fields. Consequently, if you change a field on the cloned SObject, the original SObject isn’t affected.
    -   If set to `false`, the method performs a shallow copy of the SObject fields. All copied relationship fields reference the original SObjects. Consequently, if you change a relationship field on the cloned SObject, the corresponding field on the original SObject is also affected, and vice versa. The default is `false`.
-   **preserveReadonlyTimestamps**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
    Determines whether the read-only timestamp fields are preserved or cleared in the duplicate. If set to `true`, the read-only fields CreatedById, CreatedDate, LastModifiedById, and LastModifiedDate are copied to the duplicate. The default is `false`, that is, the values are cleared.
    
    

:::tip Note
Audit field values won’t be persisted to the
            database via DML on the cloned SObject instance.
:::

-   **preserveAutonumber**: Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    
    Determines whether auto number fields of the original object are preserved or cleared in the duplicate. If set to `true`, auto number fields are copied to the cloned object. The default is `false`, that is, auto number fields are cleared.
    

#### Return Value

Type: [SObject](#apex_methods_system_sobject "Contains methods for the sObject data type.") (of the same type)

#### Usage

:::tip Note
For Apex saved using Salesforce API version 22.0 or earlier, the default value for the
          preserveId argument is `true`,
        that is, the ID is preserved.
:::

#### Example

```apex
Account acc = new account(Name = 'Acme', Description = 'Acme Account');
Account clonedAcc = acc.clone(false, false, false, false);
System.assertEquals(acc, clonedAcc);
```

### get(fieldName)

Returns the value for the field specified by fieldName, such as `AccountNumber`.

#### Signature

`public Object get(String fieldName)`

#### Parameters

-   **fieldName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Object

#### Usage

For more information, see [Dynamic SOQL](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_dynamic_soql.htm).

#### Example

```apex
Account acc = new account(Name = 'Acme', Description = 'Acme Account');
String description = (String)acc.get('Description');
System.assertEquals('Acme Account', description);
```

#### Versioned Behavior Changes

In API version 34.0 and later, you must include the namespace name to retrieve a field from a field Map using this method. For example, to get the account\_\_c field in the MyNamespace namespace from a fields field Map, use: `fields.get(‘MyNamespace__account__c’)`.

### get(field)

Returns the value for the field specified by the field token `Schema.sObjectField`, such as, `Schema.Account.AccountNumber`.

#### Signature

`public Object get(Schema.sObjectField field)`

#### Parameters

-   **field**:
    
    Type: [Schema.SObjectField](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_class_Schema_SObjectField "A Schema.sObjectField object is returned from the field describe result using the getController and getSObjectField methods.")
    

#### Return Value

Type: Object

#### Usage

For more information, see [Dynamic SOQL](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_dynamic_soql.htm).

:::tip Note
Field tokens aren't available for person accounts. If you access `Schema.Account.fieldname`,
                    you get an exception error. Instead, specify the field name as a string.
:::

#### Example

```apex
Account acc = new account(Name = 'Acme', Description = 'Acme Account');
String description = (String)acc.get(Schema.Account.Description);
System.assertEquals('Acme Account', description);
```

### getCloneSourceId()

Returns the ID of the entity from which an object was cloned. You can use it for objects cloned through the Salesforce user interface. You can also use it for objects created using the `System.SObject.clone(preserveId, isDeepClone, preserveReadonlyTimestamps, preserveAutonumber)` method, provided that the preserveId parameter wasn’t used or was set to `false`. The `getCloneSourceId()` method can only be used within the transaction where the entity is cloned, as clone information doesn’t persist in subsequent transactions.

#### Signature

`public Id getCloneSourceId()`

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Usage

If A is cloned to B, B is cloned to C, and C is cloned to D, then B, C, and D all point back to A as their clone source.

#### Example

```apex
Account acc0 = new Account(Name = 'Acme');
insert acc0;
Account acc1 = acc0.clone();
Account acc2 = acc1.clone();
Account acc3 = acc2.clone();
Account acc4 = acc3.clone();
System.assert(acc0.Id != null);
System.assertEquals(acc0.Id, acc1.getCloneSourceId());
System.assertEquals(acc0.Id, acc2.getCloneSourceId());
System.assertEquals(acc0.Id, acc3.getCloneSourceId());
System.assertEquals(acc0.Id, acc4.getCloneSourceId());
System.assertEquals(null, acc0.getCloneSourceId());
```

### getErrors()

Returns a list of `Database.Error` objects for an SObject instance. If the SObject has no errors, an empty list is returned.

#### Signature

`public List<Database.Error> getErrors()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Database.Error](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_methods_system_database_error "Represents information about an error that occurred during a DML operation when using a Database method.")\>

### getOptions()

Returns the database.DMLOptions object for the SObject.

#### Signature

`public Database.DMLOptions getOptions()`

#### Return Value

Type: [Database.DMLOptions](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.")

#### Example

```apex
Database.DMLOptions dmo = new Database.dmlOptions();
dmo.assignmentRuleHeader.useDefaultRule = true;

Account acc = new Account(Name = 'Acme');
acc.setOptions(dmo);
Database.DMLOptions accDmo = acc.getOptions();
```

### getPopulatedFieldsAsMap()

Returns a map of populated field names and their corresponding values. The map contains only the fields that have been populated in memory for the SObject instance.

#### Signature

`public Map<String,Object> getPopulatedFieldsAsMap()`

#### Return Value

Type: Map<String,Object>

A map of field names and their corresponding values.

#### Usage

The returned map contains only the fields that have been populated in memory for the SObject instance, which makes it easy to iterate over those fields. A field is **populated** in memory in these cases.

-   The field has been queried by a SOQL statement, and the field is not null.
-   The field has been explicitly set before the call to the `getPopulatedFieldsAsMap()` method.

Fields on related objects that are queried or set are also returned in the map.

The following example iterates over the map returned by the `getPopulatedFieldsAsMap()` method after a SOQL query.

```apex
Account a = new Account();
a.name = 'TestMapAccount1';
insert a;
a = [select Id,Name from Account where id=:a.Id];
MapString, Object> fieldsToValue = a.getPopulatedFieldsAsMap();

for (String fieldName : fieldsToValue.keySet()){
    System.debug('field name is ' + fieldName + ', value is ' + 
        fieldsToValue.get(fieldName));
}

// Example debug statement output:
// DEBUG|field name is Id, value is 001R0000003EPPkIAO
// DEBUG|field name is Name, value is TestMapAccount1
```

This example iterates over the map returned by the `getPopulatedFieldsAsMap()` method after fields on the SObject are explicitly set.

```apex
Account a = new Account();
a.name = 'TestMapAccount2';
a.phone = '123-4567';
insert a;
MapString, Object> fieldsToValue = a.getPopulatedFieldsAsMap();

for (String fieldName : fieldsToValue.keySet()) {
    System.debug('field name is ' + fieldName + ', value is ' + 
        fieldsToValue.get(fieldName));
}

// Example debug statement output:
// DEBUG|field name is Name, value is TestMapAccount2
// DEBUG|field name is Phone, value is 123-4567
// DEBUG|field name is Id, value is 001R0000003EPPpIAO
```

The following example shows how to use the `getPopulatedFieldsAsMap()` method with related objects.

```apex
Account a = new Account();
a.name='TestMapAccount3';
insert a;
Contact c = new Contact();
c.firstname='TestContactFirstName';
c.lastName ='TestContactLastName';
c.accountid = a.id;
insert c;

c = [SELECT id, Contact.Firstname, Contact.Account.Name FROM Contact 
        where id=:c.id limit 1];
MapString, Object> fieldsToValue = c.getPopulatedFieldsAsMap();

// To get the fields on Account, get the Account object 
// and call getMapPopulatedFieldsAsMap() on that object.

a = (Account)fieldsToValue.get('Account');
fieldsToValue = a.getPopulatedFieldsAsMap();

for (String fieldName : fieldsToValue.keySet()) {
    System.debug('field name is ' + fieldName + ', value is ' + 
        fieldsToValue.get(fieldName));
}

// Example debug statement output:
// DEBUG|field name is Id, value is 001R0000003EPPuIAO
// DEBUG|field name is Name, value is TestMapAccount3
```

#### Versioned Behavior Changes

In API version 39.0 and later, getPopulatedFieldsAsMap returns all values set on the SObject, even if values were set after the record was queried. This behavior is dependent on the version of the apex class calling this method and not on the version of the class that generated the SObject. If you query an SObject at API version 20.0, and then call this method in a class with API version 40.0, you will get the full set of fields.

### getSObject(fieldName)

Returns the value for the specified field. This method is primarily used with dynamic DML to access values for external IDs.

#### Signature

`public SObject getSObject(String fieldName)`

#### Parameters

-   **fieldName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [SObject](#apex_methods_system_sobject "Contains methods for the sObject data type.")

#### Example

```apex
Account acc = new account(Name = 'Acme', Description = 'Acme Account');
insert acc;
Contact con = new Contact(Lastname = 'AcmeCon', AccountId = acc.id);
insert con;

SObject contactDB = 
    [SELECT Id, AccountId, Account.Name FROM Contact WHERE id = :con.id LIMIT 1];
Account a = (Account)contactDB.getSObject('Account');
System.assertEquals('Acme', a.name);
```

### getSObject(field)

Returns the value for the field specified by the field token `Schema.sObjectField`, such as, `Schema.MyObj.MyExternalId`. This method is primarily used with dynamic DML to access values for external IDs.

#### Signature

`public SObject getSObject(Schema.SObjectField field)`

#### Parameters

-   **field**:
    
    Type: [Schema.SObjectField](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_class_Schema_SObjectField "A Schema.sObjectField object is returned from the field describe result using the getController and getSObjectField methods.")
    

#### Return Value

Type: [SObject](#apex_methods_system_sobject "Contains methods for the sObject data type.")

#### Usage

If the method references polymorphic fields, a [Name object](https://developer.salesforce.com/docs/atlas.en-us.262.0.object_reference.meta/object_reference/sforce_api_objects_name.htm) is returned. Use the `TYPEOF` clause in the SOQL SELECT statement to directly get results that depend on the runtime object type referenced by the polymorphic field. See [Working with Polymorphic Relationships in SOQL Queries](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/langCon_apex_SOQL_polymorphic_relationships.htm).

#### Example

```apex
Account acc = new account(name = 'Acme', description = 'Acme Account');
insert acc;
Contact con = new contact(lastname = 'AcmeCon', accountid = acc.id);
insert con;

Schema.DescribeFieldResult fieldResult = Contact.AccountId.getDescribe();
Schema.SObjectField field = fieldResult.getSObjectField();

SObject contactDB = 
    [SELECT Id, AccountId, Account.Name FROM Contact WHERE id = :con.id LIMIT 1];
Account a = (Account)contactDB.getSObject(field);
System.assertEquals('Acme', a.name);
```

### getSObjects(fieldName)

Returns the values for the specified field. This method is primarily used with dynamic DML to access values for associated objects, such as child relationships.

#### Signature

`public SObject[] getSObjects(String fieldName)`

#### Parameters

-   **fieldName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [SObject](#apex_methods_system_sobject "Contains methods for the sObject data type.")\[\]

#### Usage

For more information, see [Dynamic DML](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_dynamic_dml.htm).

#### Example

```apex
Account acc = new account(name = 'Acme', description = 'Acme Account');
insert acc;
Contact con = new contact(lastname = 'AcmeCon', accountid = acc.id);
insert con;

SObject[] a = [SELECT id, (SELECT Name FROM Contacts LIMIT 1) FROM Account WHERE id = :acc.id];
SObject[] contactsDB = a.get(0).getSObjects('Contacts');
String fieldValue = (String)contactsDB.get(0).get('Name');
System.assertEquals('AcmeCon', fieldValue);
```

### getSObjects(fieldName)

Returns the value for the field specified by the field token `Schema.fieldName`, such as, `Schema.Account.Contact`. This method is primarily used with dynamic DML to access values for associated objects, such as child relationships.

#### Signature

`public SObject[] getSObjects(Schema.SObjectType fieldName)`

#### Parameters

-   **fieldName**:
    
    Type: [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")
    

#### Return Value

Type: [SObject](#apex_methods_system_sobject "Contains methods for the sObject data type.")\[\]

### getSObjectType()

Returns the token for this SObject. This method is primarily used with describe information.

#### Signature

`public Schema.SObjectType getSObjectType()`

#### Return Value

Type: [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")

#### Usage

For more information, see apex\_dynamic\_describe\_objects\_understanding.

#### Example

```apex
Account acc = new Account(name = 'Acme', description = 'Acme Account');
Schema.SObjectType expected = Schema.Account.getSObjectType();
System.assertEquals(expected, acc.getSObjectType());
```

### getQuickActionName()

Retrieves the name of a quick action associated with this SObject. Typically used in triggers.

#### Signature

`public String getQuickActionName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
trigger accTrig2 on Contact (before insert) {
    for (Contact c : Trigger.new) {
        if (c.getQuickActionName() == QuickAction.CreateContact) {
            c.WhereFrom__c = 'GlobaActionl';
        } else if (c.getQuickActionName() == Schema.Account.QuickAction.CreateContact) {
            c.WhereFrom__c = 'AccountAction';
        } else if (c.getQuickActionName() == null) {
            c.WhereFrom__c = 'NoAction';
        } else {
            System.assert(false);
        }
    }
}
```

### hasErrors()

Returns true if an SObject instance has associated errors. The error message can be associated to the SObject instance by using `SObject.addError()`, validation rules, or by other means.

#### Signature

`public Boolean hasErrors()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isClone()

Returns `true` if an entity is cloned from something, even if the entity hasn’t been saved. The method can only be used within the transaction where the entity is cloned, as clone information doesn’t persist in subsequent transactions.

#### Signature

`public Boolean isClone()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
Account acc = new Account(Name = 'Acme');
insert acc;
Account acc2 = acc.clone();
// Test before saving
System.assertEquals(true, acc2.isClone());
insert acc2;
// Test after saving
System.assertEquals(true, acc2.isClone());
```

### isSet(fieldName)

Returns information about the queried sObject field. Returns `true` if the sObject field is populated, either by direct assignment or by inclusion in a SOQL query. Returns `false` if the sObject field isn’t set. If an invalid field is specified, an SObjectException is thrown.

#### Signature

`public Boolean isSet(String fieldName)`

#### Parameters

-   **fieldName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

The `isSet` method doesn’t check if a field is accessible to a specific user via org permissions or other specialized access permissions.

#### Example

```apex
Contact  c = new Contact(LastName = 'Joyce');
System.assertEquals(true, c.isSet('LastName'));
System.assertEquals(false, c.isSet('FirstName')); // FirstName field is not written to
c.firstName = null;
System.assertEquals(true, c.isSet('FirstName')); //FirstName field is written to
```

### isSet(field)

Returns information about the queried sObject field. Returns `true` if the sObject field is populated, either by direct assignment or by inclusion in a SOQL query. Returns `false` if the sObject field isn’t set. If an invalid field is specified, an SObjectException is thrown.

#### Signature

`public Boolean isSet(Schema.SObjectField field)`

#### Parameters

-   **field**:
    
    Type:[SObjectField Class](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_class_Schema_SObjectField "A Schema.sObjectField object is returned from the field describe result using the getController and getSObjectField methods.")
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

The `isSet` method doesn’t check if a field is accessible to a specific user via org permissions or other specialized access permissions.

#### Example

```apex
Contact  newContact = new Contact(LastName = 'Joyce');
insert(newContact); //Insert a new contact with last name Joyce
Contact c = [SELECT FirstName FROM Contact WHERE Id = :newContact.Id];
System.assertEquals(true, c.isSet(Contact.FirstName)); //FirstName field in query
System.assertEquals(false, c.isSet(Contact.LastName)); //LastName field not in query
```

### put(fieldName, value)

Sets the value for the specified field and returns the previous value for the field.

#### Signature

`public Object put(String fieldName, Object value)`

#### Parameters

-   **fieldName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **value**:
    
    Type: Object
    

#### Return Value

Type: Object

#### Example

```apex
Account acc = new Account(name = 'test', description = 'old desc');
String oldDesc = (String)acc.put('description', 'new desc');
System.assertEquals('old desc', oldDesc);
System.assertEquals('new desc', acc.description);
```

### put(field, value)

Sets the value for the field specified by the field token `Schema.sObjectField`, such as, `Schema.Account.AccountNumber` and returns the previous value for the field.

#### Signature

`public Object put(Schema.SObjectField field, Object value)`

#### Parameters

-   **field**:
    
    Type: [Schema.SObjectField](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_class_Schema_SObjectField "A Schema.sObjectField object is returned from the field describe result using the getController and getSObjectField methods.")
    
-   **value**:
    
    Type: Object
    

#### Return Value

Type: Object

#### Example

```apex
Account acc = new Account(name = 'test', description = 'old desc');
String oldDesc = (String)acc.put(Schema.Account.Description, 'new desc');
System.assertEquals('old desc', oldDesc);
System.assertEquals('new desc', acc.description);
```

:::tip Note
Field tokens aren't available for person accounts. If you access `Schema.Account.fieldname`, you get an
          exception error. Instead, specify the field name as a string.
:::

### putSObject(fieldName, value)

Sets the value for the specified field. This method is primarily used with dynamic DML for setting external IDs. The method returns the previous value of the field.

#### Signature

`public SObject putSObject(String fieldName, SObject value)`

#### Parameters

-   **fieldName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **value**:
    
    Type: [SObject](#apex_methods_system_sobject "Contains methods for the sObject data type.")
    

#### Return Value

Type: [SObject](#apex_methods_system_sobject "Contains methods for the sObject data type.")

#### Example

```apex
Account acc = new Account(name = 'Acme', description = 'Acme Account');
insert acc;
Contact con = new contact(lastname = 'AcmeCon', accountid = acc.id);
insert con;
Account acc2 = new account(name = 'Not Acme');

Contact contactDB = 
    (Contact)[SELECT Id, AccountId, Account.Name FROM Contact WHERE id = :con.id LIMIT 1];
Account a = (Account)contactDB.putSObject('Account', acc2);
System.assertEquals('Acme', a.name);
System.assertEquals('Not Acme', contactDB.Account.name);
```

### putSObject(fieldName, value)

Sets the value for the field specified by the token `Schema.SObjectType`. This method is primarily used with dynamic DML for setting external IDs. The method returns the previous value of the field.

#### Signature

`public SObject putSObject(Schema.SObjectType fieldName, SObject value)`

#### Parameters

-   **fieldName**:
    
    Type: [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")
    
-   **value**:
    
    Type: [SObject](#apex_methods_system_sobject "Contains methods for the sObject data type.")
    

#### Return Value

Type: [SObject](#apex_methods_system_sobject "Contains methods for the sObject data type.")

### recalculateFormulas()

**Deprecated as of API version 57.0. Use the `recalculateFormulas()` method in the `System.Formula` class instead.**

#### Signature

`public Void recalculateFormulas()`

#### Return Value

Type: Void

#### Usage

This method doesn’t recalculate cross-object formulas. If you call this method on objects that have both cross-object and non-cross-object formula fields, only the non-cross-object formula fields are recalculated.

Each `recalculateFormulas` call counts against the SOQL query limits. See [Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_gov_limits.htm).

## See Also

- [recalculateFormulas(sobjects)](atlas.en-us.apexref.meta/apexref/apex_class_System_Formula.htm#apex_System_Formula_recalculateFormulas)

-   [What Is a Cross-Object Formula?](https://help.salesforce.com/HTViewHelpDoc?id=customize_cross_object.htm&language=en_US "What Is a Cross-Object Formula? - HTML (New Window)")
    

### setOptions(DMLOptions)

Sets the DMLOptions object for the SObject.

#### Signature

`public Void setOptions(database.DMLOptions DMLOptions)`

#### Parameters

-   **DMLOptions**:
    
    Type: [Database.DMLOptions](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.")
    

#### Return Value

Type: Void

#### Example

```apex
Database.DMLOptions dmo = new Database.dmlOptions();
dmo.assignmentRuleHeader.useDefaultRule = true;

Account acc = new Account(Name = 'Acme');
acc.setOptions(dmo);
```
