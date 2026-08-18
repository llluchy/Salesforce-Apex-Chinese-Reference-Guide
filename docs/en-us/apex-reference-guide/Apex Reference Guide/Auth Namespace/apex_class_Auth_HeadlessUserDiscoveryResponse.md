---
doc_id: "apex_class_Auth_HeadlessUserDiscoveryResponse"
---

# HeadlessUserDiscoveryResponse Class

Contains methods to describe the result of headless user discovery using a handler that implements the `Auth.HeadlessUserDiscoveryHandler` interface during headless login, passwordless login, and forgot password flows.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

Use this class to return a user ID if headless user discovery was successful, or return custom error messages if not.

## See Also

- [HeadlessUserDiscoveryResponse Constructors](atlas.en-us.apexref.meta/apexref/apex_class_Auth_HeadlessUserDiscoveryResponse.htm#apex_Auth_HeadlessUserDiscoveryResponse_constructors)
- [HeadlessUserDiscoveryResponse Properties](atlas.en-us.apexref.meta/apexref/apex_class_Auth_HeadlessUserDiscoveryResponse.htm#apex_Auth_HeadlessUserDiscoveryResponse_properties)

## HeadlessUserDiscoveryResponse Constructors

The following are constructors for `HeadlessUserDiscoveryResponse`.

## See Also

- [HeadlessUserDiscoveryResponse(userIds, customErrorMessage)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_HeadlessUserDiscoveryResponse.htm#apex_Auth_HeadlessUserDiscoveryResponse_ctor)

### HeadlessUserDiscoveryResponse(userIds, customErrorMessage)

Creates an instance of the `Auth.HeadlessUserDiscoveryResponse` class to describe the result of headless user discovery based on data passed into the `login_hint` during headless login, passwordless login, and forgot password flows.

#### Signature

`public HeadlessUserDiscoveryResponse(Set<Id> userIds, String customErrorMessage)`

#### Parameters

-   **userIds**:
    
    Type: [Set](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_set.htm)<[Id](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_id.htm)\>
    
    The user ID that's associated with the data passed in the `login_hint` parameter. If there are multiple users associated with the data, it can return multiple IDs, but headless user discovery fails.
    
-   **customErrorMessage**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    A custom error message that's returned if headless user discovery fails.
    

## HeadlessUserDiscoveryResponse Properties

The following are properties for `HeadlessUserDiscoveryResponse`.

## See Also

- [customErrorMessage](atlas.en-us.apexref.meta/apexref/apex_class_Auth_HeadlessUserDiscoveryResponse.htm#apex_Auth_HeadlessUserDiscoveryResponse_customErrorMessage)
- [userIds](atlas.en-us.apexref.meta/apexref/apex_class_Auth_HeadlessUserDiscoveryResponse.htm#apex_Auth_HeadlessUserDiscoveryResponse_userIds)

### customErrorMessage

A custom error message that's returned if headless user discovery fails. For example, write custom logic in your headless user discovery handler to see if the user's email address is verified. Then return a custom error message for when it isn't verified.

#### Signature

`public String customErrorMessage {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### userIds

The user ID for the external user that's associated with the data passed into the `login_hint` parameter. If there are multiple users associated with the data, it can return multiple IDs, but headless user discovery fails.

#### Signature

`public Set<Id> userIds {get; set;}`

#### Property Value

Type: [Set](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_set.htm)<[Id](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_id.htm)\>
