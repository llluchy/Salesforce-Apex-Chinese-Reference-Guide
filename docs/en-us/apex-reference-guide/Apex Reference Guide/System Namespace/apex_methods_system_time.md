---
doc_id: "apex_methods_system_time"
---

# Time Class

Contains methods for the Time primitive data type.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

For more information on time, see [Time Data Type](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/langCon_apex_primitives.htm).

## Time Methods

The following are methods for `Time`.

## See Also

- [addHours(additionalHours)](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_System_Time_addHours)
- [addMilliseconds(additionalMilliseconds)](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_System_Time_addMilliseconds)
- [addMinutes(additionalMinutes)](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_System_Time_addMinutes)
- [addSeconds(additionalSeconds)](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_System_Time_addSeconds)
- [hour()](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_System_Time_hour)
- [millisecond()](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_System_Time_millisecond)
- [minute()](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_System_Time_minute)
- [newInstance(hour, minutes, seconds, milliseconds)](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_System_Time_newInstance)
- [second()](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_System_Time_second)

### addHours(additionalHours)

Adds the specified number of hours to a Time.

#### Signature

`public Time addHours(Integer additionalHours)`

#### Parameters

-   **additionalHours**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Time](#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Example

```apex
Time myTime = Time.newInstance(1, 2, 3, 4);
Time expected = Time.newInstance(4, 2, 3, 4);
System.assertEquals(expected, myTime.addHours(3));
```

### addMilliseconds(additionalMilliseconds)

Adds the specified number of milliseconds to a Time.

#### Signature

`public Time addMilliseconds(Integer additionalMilliseconds)`

#### Parameters

-   **additionalMilliseconds**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Time](#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Example

```apex
Time myTime = Time.newInstance(1, 2, 3, 0);
Time expected = Time.newInstance(1, 2, 4, 400);
System.assertEquals(expected, myTime.addMilliseconds(1400));
```

### addMinutes(additionalMinutes)

Adds the specified number of minutes to a Time.

#### Signature

`public Time addMinutes(Integer additionalMinutes)`

#### Parameters

-   **additionalMinutes**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Time](#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Example

```apex
Time myTime = Time.newInstance(18, 30, 2, 20);
Integer myMinutes = myTime.minute();
myMinutes = myMinutes + 5;
System.assertEquals(myMinutes, 35);
```

### addSeconds(additionalSeconds)

Adds the specified number of seconds to a Time.

#### Signature

`public Time addSeconds(Integer additionalSeconds)`

#### Parameters

-   **additionalSeconds**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Time](#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Example

```apex
Time myTime = Time.newInstance(1, 2, 55, 0);
Time expected = Time.newInstance(1, 3, 5, 0);
System.assertEquals(expected, myTime.addSeconds(10));
```

### hour()

Returns the hour component of a Time.

#### Signature

`public Integer hour()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
Time myTime = Time.newInstance(18, 30, 2, 20);
myTime = myTime.addHours(2);
Integer myHour = myTime.hour();
System.assertEquals(myHour, 20);
```

### millisecond()

Returns the millisecond component of a Time.

#### Signature

`public Integer millisecond()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
Time myTime = Time.newInstance(3, 14, 15, 926);
System.assertEquals(926, myTime.millisecond());
```

### minute()

Returns the minute component of a Time.

#### Signature

`public Integer minute()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
Time myTime = Time.newInstance(3, 14, 15, 926);
System.assertEquals(14, myTime.minute());
```

### newInstance(hour, minutes, seconds, milliseconds)

Constructs a Time from Integer representations of the specified hour, minutes, seconds, and milliseconds. (UTC is assumed.)

#### Signature

`public static Time newInstance(Integer hour, Integer minutes, Integer seconds, Integer milliseconds)`

#### Parameters

-   **hour**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
-   **minutes**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
-   **seconds**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
-   **milliseconds**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Time](#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Example

The following example creates a time of 18:30:2:20 (UTC).

```apex
Time myTime = 
Time.newInstance(18, 30, 2, 20);
```

### second()

Returns the second component of a Time.

#### Signature

`public Integer second()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
Time myTime = Time.newInstance(3, 14, 15, 926);
System.assertEquals(15, myTime.second());
```
