---
doc_id: "versioned_behavior_changes"
---

# Apex Versioned Behavior Changes

This document includes major Apex behavior changes across API versions, organized by version number for easy lookup. It isn’t an exhaustive list of all versioned Apex behavior. For example, this compilation excludes versioned changes to Connect in Apex and classes in the ConnectApi namespace.

Keep these guidelines in mind regarding API version usage:

-   Salesforce strongly recommends that you use the latest available API version.
-   If you can't upgrade to the latest version yet, use API versions released in the past three years for improved performance, security, and compatibility.
-   To reduce complexity, consolidate your Apex codebase to use the minimal number of API versions, ideally, just one API version.

## Version 67.0

-   **Database Operations in User Mode by Default**: In API version 67.0 and later, Apex runs in user context by default, meaning that the current user’s permissions and field-level security (FLS) are enforced during code execution. In API version 66.0 and earlier, system mode is the default. See [Set an Access Mode for Database Operations](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm).
-   **Apex Classes Enforce Sharing by Default**: In API version 67.0 and later, classes without an explicit sharing declaration are run in the current user context. In API version 66.0 and earlier, for classes without an explicit sharing declaration, the current sharing rule remains in effect. See [Use the with sharing, without sharing, and inherited sharing Keywords](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm).
-   **WITH\_SECURITY\_ENFORCED Not Supported in SOQL Queries**: With API version 67.0 and later, you cannot use the `WITH SECURITY_ENFORCED` clause in SOQL SELECT queries in Apex code. Instead, to run a SOQL or SOSL query in user mode, use the `WITH USER_MODE` clause.

## Version 65.0

-   **Access Modifiers with Abstract and Override Methods**:
    
    In API version 65.0 and later, an abstract or override method requires a `protected`, `public`, or `global` access modifier. If one of these access modifiers isn't explicitly included in the method declaration, then method access defaults to private. Private access is invalid for these method types because the implementing class can't access the abstract method. Therefore, if you attempt to declare an abstract or override method without an allowed access modifier, you get the compilation error: Abstract methods require at least one of these modifiers: `global`, `public`, `protected`. See [Extending a Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_extending.htm).
    

## Version 63.0

-   **DataWeave Version**:
    
    API version 63.0 and later support DataWeave 2.9 script syntax. API version 62.0 supports DataWeave 2.8, and API version 61.0 and earlier support DataWeave 2.5. See [Implementing DataWeave in Apex](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/DataWeaveInApex_impl.htm).
    
-   **JSON Serialization of Exceptions**:
    
    In API version 63.0 and later, JSON serialization of custom exceptions and most built-in exceptions isn't supported. Attempting to serialize an exception throws an error: Type unsupported in JSON: MyException. See [JSON Support](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_methods_system_json_overview.htm).
    

## Version 62.0

-   **DataWeave Version**:
    
    API version 62.0 supports DataWeave 2.8 script syntax. API version 61.0 and earlier versions support DataWeave 2.5. See [Implementing DataWeave in Apex](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/DataWeaveInApex_impl.htm).
    

## Version 61.0

-   **Private Method Override**:
    
    In API version 61.0 and later, private methods are no longer overridden by an instance method with the same signature in a subclass. In API version 60.0 and earlier, if a subclass declares an instance method with the same signature as a private method in one of its superclasses, the subclass method overrides the private method. See [Interfaces](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_interfaces.htm).
    
-   **DMO Information**: In API version 61.0 and later, you can get information on a specific DMO by using `SObjectType.getDescribe()`. Field-level security isn't enforced because all fields on DMOs that are accessed by field describes and security model checks are read-only. See [Data Cloud In Apex](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/DataCloudInApex.htm).

## Version 60.0

-   **`instanceof` Operator with `List` and `Iterable`**:
    
    In API version 60.0 and later, if a `List` data type implements the Iterable data type, compilation fails. See [Using the instanceof Keyword](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_keywords_instanceof.htm).
    
-   **Transaction Control: Savepoints**:
    
    In API version 60.0 and later, all Apex test savepoints are released when `Test.startTest()` and `Test.stopTest()` are called. If any savepoints are reset, a SAVEPOINT\_RESET event is logged. In API version 59.0 and earlier, making a callout after creating savepoints throws a CalloutException regardless of whether there was uncommitted DML or the changes were rolled back to a savepoint. In API version 60.0 and later, `Database.rollback(databaseSavepoint)` and `Database.setSavepoint()` calls don't increment the DML row usage limit. In API version 59.0 and earlier, these methods increment the DML row usage limit. See [Transaction Control](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/langCon_apex_transaction_control.htm).
    

## API Reference Changes

| Namespace | Class | Behavior Change |
| --- | --- | --- |
| System | Database | API version 60.0 and later: `Database.rollback(databaseSavepoint)` and `Database.setSavepoint()` calls don't increment the DML row usage limit. In API version 59.0 and earlier, these methods increment the DML row usage limit. See [Database.rollBack()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_rollback). |
| System | Test | API version 60.0 and later: Apex test savepoints are released when `Test.startTest()` and `Test.stopTest()` are called. If any savepoints are reset, a SAVEPOINT\_RESET event is logged. In API version 59.0 and earlier, making a callout after creating savepoints throws a CalloutException regardless of whether there was uncommitted DML or the changes were rolled back to a savepoint. See [Database.rollBack()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_rollback). |
| System | Type | API version 60.0 and later: Using an invalid namespace while calling this method returns null. Previously, Apex allowed you to specify an invalid namespace such as `Type.forName('InvalidNamespace', 'OuterClass.InnerClass')` or use an outer class as a namespace such as `Type.forName('OuterClass', 'InnerClass')` with indeterminate results. See [Type.forName()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_type.htm#apex_System_Type_forName_2). |

## Version 57.0

## API Reference Changes

| Namespace | Class | Behavior Change |
| --- | --- | --- |
| System | Object | API version 57.0 and later: The `toString()` method only includes member variables of Apex objects that are visible in the current namespace. Non-global properties are suppressed from output when you invoke `toString()` on managed Apex types. To keep the non-global state of the object visible in debug output, you can explicitly override the `toString()` method. See [Object.toString()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_System_Object.htm#apex_System_Object_toString). |

## Version 55.0

-   **@AuraEnabled Annotation**:
    
    In API version 55.0 and later, overloads aren't allowed on methods annotated with @AuraEnabled. See [AuraEnabled Annotation](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_annotation_AuraEnabled.htm).
    

## Version 54.0

## API Reference Changes

| Namespace | Class | Behavior Change |
| --- | --- | --- |
| System | Date | API version 54.0 and later: If you call `Date.valueOf` with a Datetime object, the method converts the object to a valid Date without the time information. See [Date.valueOf()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_date.htm#apex_System_Date_valueOf). |
| System | Id | API version 54.0 and later: Assignment of an invalid 15 or 18 character ID to a variable results in a System.StringException exception. See [Id.valueOf()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_id.htm#apex_System_Id_valueOf). |
| Schema | DescribeSObjectResult | API version 54.0 and later: For custom settings and custom metadata type objects, `DescribeSObjectResult.isAccessible()` returns false if the user doesn't have permissions to access the queried objects. In API version 53.0 and earlier, the method returns true even if the user doesn't have the required permissions. See [DescribeSObjectResult.isAccessible()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_isAccessible). |
| System | Messaging | API version 54.0 and later: A null `emailMessageIds` parameter results in a System.IllegalArgumentException exception. In API version 53.0 and earlier, a null `emailMessageIds` parameter results in an error. See [Messaging.sendEmailMessage()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm#apex_System_Messaging_sendEmailMessage). |

## Version 53.0

-   **DataWeave Integration**: Apex classes must be at API version 53.0 or later to access DataWeave integration methods. See [Implementing DataWeave in Apex](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/DataWeaveInApex_impl.htm).
-   **JSON DateTime Format**:
    
    In API version 53.0 and later, DateTime format and processing has been updated. The API correctly handles DateTime values in JSON requests that use more than 3 digits after the decimal point. Requests that use an unsupported DateTime format (such as 123456000) result in an error. Salesforce recommends that you strictly adhere to DateTime formats specified in Valid Date and DateTime Formats. See [Valid Date and DateTime Formats](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_rest.meta/api_rest/intro_valid_date_formats.htm).
    
-   **Trigger Order of Execution**: In API version 53.0 and earlier, after-save record-triggered flows run after entitlements are executed. See [Triggers and Order of Execution](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm).

## API Reference Changes

| Namespace | Class | Behavior Change |
| --- | --- | --- |
| Database | SaveResult | API version 53.0 and later: The `getId()` method returns the sObject ID. However, if record locking fails during the update operation, the method returns a null value. In API version 52.0 and earlier, the `getId()` method returns a null value if the record isn't updated successfully. See [SaveResult.getId()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_Database_SaveResult_getId). |
| Database | UpsertResult | API version 53.0 and later: The `getId()` method returns the sObject ID. However, if record locking fails during the update operation, the method returns a null value. In API version 52.0 and earlier, the `getId()` method returns a null value if the record isn't updated successfully. See [UpsertResult.getId()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database_upsertresult.htm#apex_Database_UpsertResult_getId). |

## Version 52.0

-   **CardPaymentMethods and DigitalWallets**:
    
    In API version 52.0 and later, CardPaymentMethods and DigitalWallets can’t store values for GatewayTokenEncryption and GatewayToken at the same time on the same record. If you try to assign one while the other exists, Salesforce throws an error. See [Tokenization Service Apex Class Implementation](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_commercepayments_tokenization_service_apex_imp.htm).
    

## API Reference Changes

| Namespace | Class | Behavior Change |
| --- | --- | --- |
| System | Database | API version 52.0 and later: If the `executeBatch` call fails to acquire an Apex flex queue lock, the call throws a System.AsyncException. In API version 51.0 and earlier, if the executeBatch call fails to acquire an Apex flex queue lock, the call returns an empty ID, "000000000000000", instead of throwing an exception. See [Database.executeBatch()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_executeBatch). |

## Version 51.0

## API Reference Changes

| Namespace | Class | Behavior Change |
| --- | --- | --- |
| Schema | DescribeFieldResult | API version 51.0 and later: The `getReferenceTo()` method returns referenced objects that aren't accessible to the context user. If the context user has access to an object's field that references another object, irrespective of the context user's access to the cross-referenced object, the method returns references. In API version 50.0 and earlier, if the context user doesn't have access to the cross-referenced object, the method returns an empty list. See [DescribeFieldResult.getReferenceTo()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getReferenceTo). |
| System | String | API version 51.0 and later: The `format()` method supports single quotes in the stringToFormat parameter and returns a formatted string using the formattingArguments parameter. In version 50.0 and earlier, single quotes aren't supported. See [String.format()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_format). |
| System | System | API version 51.0 and later: The `hashCode()` method returns the same hashCode for identical Id values. In API version 50.0 and earlier, identical Id values don't always generate the same hashCode value. See [System.hashCode()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_system.htm#apex_system_system_hashcode). |

## Version 50.0

-   **@NamespaceAccessible Annotation**:
    
    In API version 50.0 and later, scope and accessibility rules are enforced on Apex variables, methods, inner classes, and interfaces that are annotated with @NamespaceAccessible. See [NamespaceAccessible Annotation](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm) and [Class Variables](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_declaring_variables.htm).
    

## Version 49.0

-   **@JsonAccess Annotation**:
    
    In API version 49.0 and later, the default access for both serialization and deserialization is `sameNamespace`. In API version 48.0 and earlier, the default access for deserialization is `always` and the default access for serialization is `sameNamespace` to preserve the existing behavior. See [JsonAccess Annotation](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_annotation_JsonAccess.htm).
    
-   **@ReadOnly Annotation on REST Methods**:
    
    In API version 49.0 and later, you can annotate Apex REST methods with just @ReadOnly. In API version 49.0 and earlier, Apex REST methods with the @ReadOnly annotation also require the @RemoteAction annotation. See [ReadOnly Annotation](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_annotation_ReadOnly.htm).
    

## Version 47.0

-   **@NamespaceAccessible Annotation**:
    
    In API version 47.0 and later, @NamespaceAccessible isn't allowed on an entity marked with @AuraEnabled. Therefore, an Aura or Lightning web component installed from a package can't call an Apex method from another package, even if both packages are in the same namespace. However, an @AuraEnabled public method from one package can call a @NamespaceAccessible public method from another package in the same namespace. See [NamespaceAccessible Annotation](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm).
    

## API Reference Changes

`changedfields` Properties in `EventBus.ChangeEventHeader`: A list of the fields that were changed in an update operation, including the LastModifiedDate system field. This field is empty for other operations, including record creation. This property is available in Apex saved using API version 47.0 or later. See [ChangeEventHeader Properties](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_eventbus_ChangeEventHeader.htm#apex_eventbus_ChangeEventHeader_properties).

## Version 45.0

-   **WITH SECURITY\_ENFORCED Clause in SOQL**:
    
    The WITH SECURITY\_ENFORCED clause is only available in Apex. We don’t recommend using WITH SECURITY\_ENFORCED in Apex classes or triggers with an API version earlier than 45.0. See [Filter SOQL Queries Using WITH SECURITY\_ENFORCED](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_with_security_enforced.htm).
    

## API Reference Changes

| Namespace | Class | Behavior Change |
| --- | --- | --- |
| System | TimeZone | API version 45.0 and later: `getDisplayName()` displays Daylight Savings Time appropriately when daylight savings is in effect. For example, British Summer Time is displayed for Europe/London and Pacific Daylight Time for America/Los\_Angeles. See [TimeZone.getdisplayName()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_timezone.htm#apex_System_TimeZone_getDisplayName). |

## Version 44.0

-   **BatchApexErrorEvent**: The BatchApexErrorEvent object represents a platform event associated with a batch Apex class. This object is available in API version 44.0 and later. If the `start`, `execute`, or `finish` method of a batch Apex job encounters an unhandled exception, a `BatchApexErrorEvent` platform event is fired. For more details, see [BatchApexErrorEvent](https://developer.salesforce.com/docs/atlas.en-us.262.0.platform_events.meta/platform_events/sforce_api_objects_batchapexerrorevent.htm "HTML (New Window)")
-   **AuraEnabled Annotation**: In API version 44.0 and later, you can improve runtime performance by caching method results on the client by using the annotation `@AuraEnabled(cacheable=true)`. You can cache method results only for methods that retrieve data but don’t modify it. Using this annotation eliminates the need to call `setStorable()` in JavaScript code on every action that calls the Apex method. See [AuraEnabled Annotation](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_annotation_AuraEnabled.htm).

## Version 42.0

-   **Hierarchy Custom Settings**: In API version 42.0 and later, if a hierarchy custom setting is inserted in a `testSetup` method, inserting a hierarchy custom setting record with the same SetupOwnerId in a test method throws a DUPLICATE\_VALUE exception. In API version 41.0 and earlier, each method in an Apex test class, including `testSetup` methods, is able to insert hierarchy custom setting values. This behavior is true even when the methods have the same SetupOwnerId value as a hierarchy custom setting record inserted in a different test method. See [Hierarchy Custom Setting Methods](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_custom_settings.htm#apex_System_HierarchyCustomSetting_instance_methods).
-   **Apex Properties**: In API version 42.0 and later, unless a variable value is set in a set accessor, you can’t update its value in a get accessor. See [Apex Properties](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_properties.htm).

## Version 41.0

-   **Exception Handling**:
    
    In API version 41.0 and later, unreachable statements in your code cause compilation errors. See [Exception Statements](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_exception_statements.htm).
    

## API Reference Changes

| Namespace | Class | Behavior Change |
| --- | --- | --- |
| System | URL | API version 41.0 and later: Apex URL objects are represented by the java.net.URI type, not the java.net.URL type. The API version in which the URL object was instantiated determines the behavior of subsequent method calls to the specific instance. Salesforce strongly encourages you to use API version 41.0 and later for fully RFC-compliant URL parsing that includes proper handling of edge cases of complex URL structures. In API version 41.0 and later, inputs must be valid, RFC-compliant URL or URI strings. See [URL Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_url.htm). |

## Version 39.0

## API Reference Changes

| Namespace | Class | Behavior Change |
| --- | --- | --- |
| System | SObject | API version 39.0 and later: `getPopulatedFieldsAsMap()` returns all values set on the SObject, even if values were set after the record was queried. This behavior is dependent on the version of the Apex class calling this method and not on the version of the class that generated the SObject. If you query an SObject at API version 20.0, and then call this method in a class with API version 40.0, you will get the full set of fields. See [SObject.getPopulatedFieldsAsMap()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_getPopulatedFieldsAsMap). |

## Version 35.0

-   **Serialization of IDs**: In API version 35.0 and later, ID comparison using `==` does not fail for IDs that have been through roundtrip JSON serialization and deserialization. See [Roundtrip Serialization and Deserialization](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_json_json.htm).

## API Reference Changes

| Namespace | Class | Behavior Change |
| --- | --- | --- |
| System | JSON | When deserializing JSON content into an Apex class in any API version, or into an object in API version 35.0 or later, no exception is thrown. When deserializing JSON content into a custom object or an sObject using Salesforce API version 34.0 or earlier, the `deserialize(jsonString, apexType)` and `readValueAs(apexType)` methods throw a runtime exception when passed extraneous attributes. See [JSON.deserialize(jsonString, apexType)](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_System_Json.htm#apex_System_Json_deserialize) and [JSONParser.readValueAs()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_System_JsonParser_readValueAs). |
| System | PageReference | In API version 34.0 and later, `getContent()` and `getContentAsPDF()` are treated as callouts. If you use `getContent()` or `getContentAsPDF()` in a test method, the test method fails. See [PageReference.getContent()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_System_PageReference_getContent.htm). |
| System | Pattern | In API version 35.0 and later, the `split()` method works correctly if you use a zero-width regExp parameter. In API version 34.0 and earlier, a zero-width regExp value produces an empty list item at the beginning of the `split()` method output. See [Pattern.split()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm#apex_System_Pattern_split). |

## Version 34.0

-   **Schema Namespace Prefixes**:
    
    In API version 34.0 and later, `Schema.DescribeSObjectResult` on a custom SObjectType includes map keys prefixed with the namespace, even if the namespace is that of currently executing code. If you work with multiple namespaces and generate run-time describe data, make sure that your code accesses keys correctly by using the namespace prefix. See [Namespace Prefix](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_namespace_prefix.htm).
    

## API Reference Changes

| Namespace | Class | Behavior Change |
| --- | --- | --- |
| System | Date | API version 34.0 to 53.0: If you call `Date.valueOf` with a `Datetime` object, the method converts `Datetime` to a valid `Date` without the time information, but the result depends on the manner in which the `Datetime` object was initialized. For example, if the `Datetime` object was initialized using `Datetime.valueOf(stringDate)`, the returned `Date` value contains time (hours) information. If the `Datetime` object is initialized by using `Datetime.newInstance(year, month, day, hour, minute, second)`, the returned Date value doesn't contain time information. See [Date.valueOf()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_date.htm#apex_System_Date_valueOf). |
| System | SObject | In API version 34.0 and later, you must include the namespace name to retrieve a field from a field Map using the `get(fieldName)` method. For example, to get the account\_\_c field in the MyNamespace namespace from field Map called "fields", use: `fields.get('MyNamespace__account__c')`. See [SObject.get(fieldName)](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_get). |

## Version 33.0

## API Reference Changes

| Namespace | Class | Behavior Change |
| --- | --- | --- |
| System | Date | In API version 33.0 and earlier, if you call `Date.valueOf` with a Datetime object, the method returns a Date value that contains the hours, minutes, seconds, and milliseconds set. See [Date.valueOf()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_date.htm#apex_System_Date_valueOf). |

## Version 32.0

-   **`instanceof` Operator**:
    
    In API version 32.0 and later, `instanceof` returns `false` if the left operand is a null object. In API version 31.0 and earlier, `instanceof` returns `true` in this case. See [Using the Instance of Keyword](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_keywords_instanceof.htm).
    

## Version 28.0

-   **Null Fields in JSON Serialization**:
    
    In API version 28.0 and later, null fields aren’t serialized and aren’t included in the JSON string, unlike in earlier versions. This change doesn’t affect deserializing JSON strings with JSON methods, such as [Json.deserialize()](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_System_Json.htm#apex_System_Json_deserialize). This change is noticeable when you inspect the JSON string.
    
-   **VLOOKUP Validation Rule Function**: In API version 28.0 and later, the VLOOKUP validation rule function no longer accesses organization data from a running Apex test. The function looks up only data created by the test, unless the test class or method is annotated with `IsTest(SeeAllData=true)`. In API version 27.0 and earlier, the VLOOKUP validation rule function always looks up org data in addition to test data when fired by a running Apex test. See [Isolation of Test Data from Organization Data in Unit Tests](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_testing_data_access.htm).

## Version 26.0

-   **Chaining Batch Jobs**:
    
    In API version 26.0 and later, you can start another batch job from an existing batch job to chain jobs together, enforcing strict sequential execution. See [Use Batch Apex](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_batch_interface.htm).
    
-   **Calling `Database.executeBatch` and `System.scheduleBatch` Methods**:
    
    In API version 26.0 and later, you can call `Database.executeBatch` and `System.scheduleBatch` from any batch Apex method. See [Use Batch Apex](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_batch_interface.htm).
    

## Version 24.0

-   **Apex Test Methods**: In API version 24.0 and later, Apex test methods can’t access pre-existing org data by default, such as standard objects, custom objects, and custom settings data. They can only access data that they create. However, objects that are used to manage your organization or metadata objects can still be accessed in your tests. In API version 23.0 and earlier, test code continues to have access to all data in the organization and its data access is unchanged. See [Isolation of Test Data from Organization Data in Unit Tests](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_testing_data_access.htm).

## Version 22.0

-   **Batch Apex Exceptions with Test Methods**:
    
    In API version 22.0 and later, exceptions that occur during the execution of a batch Apex job invoked by a test method are passed to the calling test method. As a result, these exceptions cause the test method to fail. See [Use Batch Apex](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_batch_interface.htm).
    

## Version 21.0

-   **Bulk API Requests**: In API version 21.0 and later, if a Bulk API request causes a trigger to fire, each chunk of 200 records for the trigger to process is no longer split into smaller chunks. If a Bulk API request causes a trigger to fire multiple times for chunks of 200 records, governor limits are reset between these trigger invocations for the same HTTP request. Static variables aren’t reset within the multiple trigger invocations for the same Bulk API request. In API version 20.0 and earlier, if a Bulk API request causes a trigger to fire, each chunk of 200 records for the trigger to process is split into chunks of 100 records.
-   **`FeedPost` Objects**: In API version 21.0, insert and delete triggers on FeedPost objects are supported. In API version 20.0 and earlier, these trigger operations on FeedPost aren't supported. See [Triggers for Chatter Objects](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_triggers_fields_not_updated_chatter.htm).

:::tip Note
The `FeedPost` object is
              discontinued in API version 22.0 and later. Use `FeedItem` instead. See [FeedItem](https://developer.salesforce.com/docs/atlas.en-us.262.0.object_reference.meta/object_reference/sforce_api_objects_feeditem.htm)
:::

## Version 17.0

-   **HTTP Response Decoding**: In API version 17.0 and later, HTTP responses are decoded using the encoding specified in the Content-Type header. In API versions 16.0 and earlier, HTTP responses for callouts are always decoded using UTF-8, regardless of the Content-Type header. See [SOAP Services: Defining a Class from a WSDL Document](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_callouts_wsdl2apex.htm).

## Version 16.0

-   **Decimal Data Type**:
    
    In API version 16.0 and later, Apex uses the higher-precision `Decimal` data type in certain types such as currency. See [Primitive Data Types](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/langCon_apex_primitives.htm).
    

## Version 15.0

-   **`anyType` datatype**: The Salesforce datatype `anyType` is not supported in WSDLs used to generate Apex code that is saved by using API version 15.0 and later. In API version 14.0 and earlier, `anyType` is mapped to String. See [SOAP Services: Defining a Class from a WSDL Document](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_callouts_wsdl2apex.htm).
-   **DMLOptions Settings**: DMLOptions settings are only available for Apex saved against API versions 15.0 and higher. DMLOptions settings take effect only for record operations performed by using Apex DML and not through the Salesforce user interface. In API version 15.0 and later, the Database.DMLOptions `emailHeader` property enables you to specify information about the email sent when an event occurs because of Apex DML code execution. See [Setting DML Options](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/langCon_apex_dml_database_dmloptions.htm).
-   **String values**: In API version 15.0 and higher, assigning a `String` value that is too long for the field produces a run-time error.
