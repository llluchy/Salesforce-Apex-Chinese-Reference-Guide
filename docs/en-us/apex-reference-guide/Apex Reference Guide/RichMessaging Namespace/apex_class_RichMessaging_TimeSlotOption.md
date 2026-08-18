---
doc_id: "apex_class_RichMessaging_TimeSlotOption"
---

# TimeSlotOption Class

Represents a complex time slot option type. This class is used to provide time option payloads that can be translated to structured content payloads in rich content messages.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## See Also

- [TimeSlotOption Constructors](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_constructors)
- [TimeSlotOption Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_properties)

## TimeSlotOption Constructors

The following are constructors for `TimeSlotOption`.

## See Also

- [TimeSlotOption(startTime, endTime)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_ctor)
- [TimeSlotOption(startTime, duration)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_ctor_2)
- [TimeSlotOption()](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_ctor_3)

### TimeSlotOption(startTime, endTime)

Creates a `TimeSlotOption` object with a start and end time.

#### Signature

`public TimeSlotOption(Datetime startTime, Datetime endTime)`

#### Parameters

-   **startTime**: Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.") Start time.
-   **endTime**: Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.") End time.

### TimeSlotOption(startTime, duration)

Creates a `TimeSlotOption` object with a start time and a duration.

#### Signature

`public TimeSlotOption(Datetime startTime, Integer duration)`

#### Parameters

-   **startTime**: Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.") Start time.
-   **duration**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.") Duration in seconds.

### TimeSlotOption()

Creates a `TimeSlotOption` object.

#### Signature

`public TimeSlotOption()`

## TimeSlotOption Properties

The following are properties for `TimeSlotOption`.

## See Also

- [duration](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_duration)
- [durationValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_durationValue)
- [endTimeValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_endTimeValue)
- [startTime](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_startTime)
- [startTimeValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_startTimeValue)

### duration

The duration in seconds.

#### Signature

`public Integer duration {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### durationValue

The duration in seconds. Enabled for Lightning components.

#### Signature

`public Integer durationValue {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### endTimeValue

The end time. Enabled for Lightning components.

#### Signature

`public Datetime endTimeValue {get; set;}`

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### startTime

The start time.

#### Signature

`public Datetime startTime {get; set;}`

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### startTimeValue

The start time. Enabled for Lightning components.

#### Signature

`public Datetime startTimeValue {get; set;}`

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")
