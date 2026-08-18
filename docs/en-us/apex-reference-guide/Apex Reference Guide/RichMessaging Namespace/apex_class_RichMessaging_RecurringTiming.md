---
doc_id: "apex_class_RichMessaging_RecurringTiming"
---

# RecurringTiming Class

Represents a payment that occurs on a regular basis.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## See Also

- [RecurringTiming Constructors](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_constructors)
- [RecurringTiming Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_properties)

## RecurringTiming Constructors

The following are constructors for `RecurringTiming`.

## See Also

- [RecurringTiming(startDate, endDate, intervalCount, intervalUnit)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_ctor)
- [RecurringTiming()](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_ctor_2)

### RecurringTiming(startDate, endDate, intervalCount, intervalUnit)

Creates a new instance of the `RichMessaging.RecurringTiming` class.

#### Signature

`public RecurringTiming(Date startDate, Date endDate, Integer intervalCount, RichMessaging.TimingIntervalUnit intervalUnit)`

#### Parameters

-   **startDate**: Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.") The start date. Invocable variable.
-   **endDate**: Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.") The end date. Invocable variable.
-   **intervalCount**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.") The number of interval units that make up the total payment interval. Invocable variable.
-   **intervalUnit**: Type: [RichMessaging.TimingIntervalUnit](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_TimingIntervalUnit.htm "Represents an enumerated type that describes the timing interval.") The amount of time—in calendar units, such as day, month, or year—that represents a fraction of the total payment interval. Invocable variable.

### RecurringTiming()

Creates a new instance of the `RichMessaging.RecurringTiming` class.

#### Signature

`public RecurringTiming()`

## RecurringTiming Properties

The following are properties for `RecurringTiming`.

## See Also

- [endDate](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_endDate)
- [endDateValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_endDateValue)
- [intervalCount](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_intervalCount)
- [intervalCountValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_intervalCountValue)
- [intervalUnit](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_intervalUnit)
- [intervalUnitValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_intervalUnitValue)
- [startDate](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_startDate)
- [startDateValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_startDateValue)
- [timingType](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_timingType)

### endDate

The end date. Invocable variable.

#### Signature

`public Date endDate {get; set;}`

#### Property Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

### endDateValue

The end date. Enabled for Lightning components.

#### Signature

`public Date endDateValue {get; set;}`

#### Property Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

### intervalCount

The number of interval units that make up the total payment interval. Invocable variable.

#### Signature

`public Integer intervalCount {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### intervalCountValue

The number of interval units that make up the total payment interval. Enabled for Lightning components.

#### Signature

`public Integer intervalCountValue {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### intervalUnit

The amount of time—in calendar units, such as day, month, or year—that represents a fraction of the total payment interval. Invocable variable.

#### Signature

`public String intervalUnit {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### intervalUnitValue

The amount of time—in calendar units, such as day, month, or year—that represents a fraction of the total payment interval. Enabled for Lightning components.

#### Signature

`public RichMessaging.TimingIntervalUnit intervalUnitValue {get; set;}`

#### Property Value

Type: [RichMessaging.TimingIntervalUnit](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_TimingIntervalUnit.htm "Represents an enumerated type that describes the timing interval.")

### startDate

The start date. Invocable variable.

#### Signature

`public Date startDate {get; set;}`

#### Property Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

### startDateValue

The start date. Enabled for Lightning components.

#### Signature

`public Date startDateValue {get; set;}`

#### Property Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

### timingType

Always returns “RecurringTiming”.

#### Signature

`public String timingType {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
