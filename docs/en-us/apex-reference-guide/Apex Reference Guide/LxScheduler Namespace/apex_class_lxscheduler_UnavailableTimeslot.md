---
doc_id: "apex_class_lxscheduler_UnavailableTimeslot"
---

# UnavailableTimeslot Class

Use this class to pass the unavailable time slots to the lxscheduler.ServiceResourceSchedule class. Timezones that differ across operating hours are handled and results are always returned in UTC.

## Namespace

[LxScheduler](atlas.en-us.apexref.meta/apexref/apex_namespace_lxscheduler.htm "The LxScheduler namespace provides an interface and classes for integrating Salesforce Scheduler with external calendars.")

## See Also

- [UnavailableTimeslot Constructors](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_UnavailableTimeslot.htm#apex_lxscheduler_UnavailableTimeslot_constructors)
- [UnavailableTimeslot Properties](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_UnavailableTimeslot.htm#apex_lxscheduler_UnavailableTimeslot_properties)

## UnavailableTimeslot Constructors

The following are constructors for `UnavailableTimeslot`.

## See Also

- [UnavailableTimeslot(timeMin, timeMax)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_UnavailableTimeslot.htm#apex_lxscheduler_UnavailableTimeslot_ctor)

### UnavailableTimeslot(timeMin, timeMax)

Creates an instance of lxscheduler.UnavailableTimeslot class.

#### Signature

`public UnavailableTimeslot(Datetime timeMin, Datetime timeMax)`

#### Parameters

-   **timeMin**:
    
    Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")
    
    Start time of an unavailable time slot.
    
-   **timeMax**:
    
    Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")
    
    End time of an unavailable time slot.
    

## UnavailableTimeslot Properties

The following are properties for `UnavailableTimeslot`.

## See Also

- [timeMax](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_UnavailableTimeslot.htm#apex_lxscheduler_UnavailableTimeslot_timeMax)
- [timeMin](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_UnavailableTimeslot.htm#apex_lxscheduler_UnavailableTimeslot_timeMin)

### timeMax

End time of an unavailable time slot.

#### Signature

`public Datetime timeMax {get; set;}`

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### timeMin

Start time of an unavailable time slot.

#### Signature

`public Datetime timeMin {get; set;}`

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")
