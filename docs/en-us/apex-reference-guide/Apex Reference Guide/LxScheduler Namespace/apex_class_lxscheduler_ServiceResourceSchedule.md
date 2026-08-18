---
doc_id: "apex_class_lxscheduler_ServiceResourceSchedule"
---

# ServiceResourceSchedule Class

Use this class to pass results from your implemented Apex class to the ServiceResourceScheduleHandler interface methods.

## Namespace

[LxScheduler](atlas.en-us.apexref.meta/apexref/apex_namespace_lxscheduler.htm "The LxScheduler namespace provides an interface and classes for integrating Salesforce Scheduler with external calendars.")

## See Also

- [ServiceResourceSchedule Constructors](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceSchedule.htm#apex_lxscheduler_ServiceResourceSchedule_constructors)
- [ServiceResourceSchedule Properties](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceSchedule.htm#apex_lxscheduler_ServiceResourceSchedule_properties)

## ServiceResourceSchedule Constructors

The following are constructors for `ServiceResourceSchedule`.

## See Also

- [ServiceResourceSchedule(serviceResourceId, unavailableTimeslots)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceSchedule.htm#apex_lxscheduler_ServiceResourceSchedule_ctor)

### ServiceResourceSchedule(serviceResourceId, unavailableTimeslots)

Creates a new instance of lxscheduler.ServiceResourceSchedule class.

#### Signature

`public ServiceResourceSchedule(String serviceResourceId, Set<lxscheduler.UnavailableTimeslot> unavailableTimeslots)`

#### Parameters

-   **serviceResourceId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Record
    
    ID of the service resource.
    
-   **unavailableTimeslots**:
    
    Type: Set<lxscheduler.UnavailableTimeslot>
    
    An instance of lxscheduler.UnavailableTimeslot class.
    

## ServiceResourceSchedule Properties

The following are properties for `ServiceResourceSchedule`.

## See Also

- [serviceResourceId](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceSchedule.htm#apex_lxscheduler_ServiceResourceSchedule_serviceResourceId)
- [unavailableTimeslots](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceSchedule.htm#apex_lxscheduler_ServiceResourceSchedule_unavailableTimeslots)

### serviceResourceId

Record ID of the service resource.

#### Signature

`public String serviceResourceId {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### unavailableTimeslots

An instance of lxscheduler.UnavailableTimeslot class.

#### Signature

`public Set<lxscheduler.UnavailableTimeslot> unavailableTimeslots {get; set;}`

#### Property Value

Type: Set<lxscheduler.UnavailableTimeslot>
