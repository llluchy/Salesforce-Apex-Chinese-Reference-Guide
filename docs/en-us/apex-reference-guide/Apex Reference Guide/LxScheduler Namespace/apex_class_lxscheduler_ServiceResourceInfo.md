---
doc_id: "apex_class_lxscheduler_ServiceResourceInfo"
---

# ServiceResourceInfo Class

Contains information about a service resource.

## Namespace

[LxScheduler](atlas.en-us.apexref.meta/apexref/apex_namespace_lxscheduler.htm "The LxScheduler namespace provides an interface and classes for integrating Salesforce Scheduler with external calendars.")

## See Also

- [ServiceResourceInfo Constructors](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_constructors)
- [ServiceResourceInfo Methods](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_methods)

## ServiceResourceInfo Constructors

The following are constructors for `ServiceResourceInfo`.

## See Also

- [ServiceResourceInfo(userId, userName, email, serviceResourceId, territoryIds, resourceType)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_ctor)

### ServiceResourceInfo(userId, userName, email, serviceResourceId, territoryIds, resourceType)

Creates a new instance of the `lxscheduler.ServiceResourceInfo` class using the specified service resource details.

#### Signature

`public ServiceResourceInfo(String userId, String userName, String email, String serviceResourceId, List<String> territoryIds, String resourceType)`

#### Parameters

-   **userId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The user ID of the service resource.
    
-   **userName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The user name of the service resource.
    
-   **email**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The email ID of the service resource.
    
-   **serviceResourceId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The ID of the service resource.
    
-   **territoryIds**:
    
    Type: List<String>
    
    A list of requested service territories for the service resource.
    
-   **resourceType**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The type of the service resource such as Technician or Asset.
    

## ServiceResourceInfo Methods

The following are methods for `ServiceResourceInfo`.

## See Also

- [getEmail()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_getEmail)
- [getResourceType()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_getResourceType)
- [getServiceResourceId()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_getServiceResourceId)
- [getTerritoryIds()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_getTerritoryIds)
- [getUserId()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_getUserId)
- [getUserName()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_getUserName)

### getEmail()

Returns the email ID of the service resource.

#### Signature

`public String getEmail()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getResourceType()

Returns the type of the service resource such as Technician or Asset.

#### Signature

`public String getResourceType()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getServiceResourceId()

Returns the ID of the service resource.

#### Signature

`public String getServiceResourceId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getTerritoryIds()

Returns a list of requested service territories for the service resource.

#### Signature

`public List<String> getTerritoryIds()`

#### Return Value

Type: List<String>

### getUserId()

Returns the user ID of the service resource.

#### Signature

`public String getUserId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getUserName()

Returns the user name of the service resource.

#### Signature

`public String getUserName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
