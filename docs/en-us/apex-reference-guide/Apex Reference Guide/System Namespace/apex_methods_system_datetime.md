---
doc_id: "apex_methods_system_datetime"
---

# Datetime Class

Contains methods for the Datetime primitive data type.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Apex supports both implicit and explicit casting of Date values to Datetime, with the time component being zeroed out in the resulting Datetime value. For more information about the Datetime, see [Datetime Data Type](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/langCon_apex_primitives.htm).

## Datetime Methods

The following are methods for `Datetime`.

## See Also

- [addDays(additionalDays)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_addDays)
- [addHours(additionalHours)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_addHours)
- [addMinutes(additionalMinutes)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_addMinutes)
- [addMonths(additionalMonths)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_addMonths)
- [addSeconds(additionalSeconds)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_addSeconds)
- [addYears(additionalYears)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_addYears)
- [date()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_date)
- [dateGMT()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_dateGMT)
- [day()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_day)
- [dayGmt()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_dayGmt)
- [dayOfYear()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_dayOfYear)
- [dayOfYearGmt()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_dayOfYearGmt)
- [format()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_format)
- [format(dateFormatString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_format_2)
- [format(dateFormatString, timezone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_format_3)
- [formatGmt(dateFormatString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_formatGmt)
- [formatLong()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_formatLong)
- [getTime()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_getTime)
- [hour()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_hour)
- [hourGmt()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_hourGmt)
- [isSameDay(dateToCompare)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_isSameDay)
- [millisecond()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_millisecond)
- [millisecondGmt()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_millisecondGmt)
- [minute()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_minute)
- [minuteGmt()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_minuteGmt)
- [month()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_month)
- [monthGmt()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_monthGmt)
- [newInstance(milliseconds)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_newInstance)
- [newInstance(date, time)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_newInstance_2)
- [newInstance(year, month, day)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_newInstance_3)
- [newInstance(year, month, day, hour, minute, second)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_newInstance_4)
- [newInstanceGmt(date, time)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_newInstanceGmt)
- [newInstanceGmt(year, month, date)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_newInstanceGmt_2)
- [newInstanceGmt(year, month, date, hour, minute, second)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_newInstanceGmt_3)
- [now()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_now)
- [parse(datetimeString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_parse)
- [second()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_second)
- [secondGmt()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_secondGmt)
- [time()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_time)
- [timeGmt()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_timeGmt)
- [valueOf(dateTimeString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_valueOf)
- [valueOf(fieldValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_valueOf_2)
- [valueOfGmt(dateTimeString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_valueOfGmt)
- [year()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_year)
- [yearGmt()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_yearGmt)

### addDays(additionalDays)

Adds the specified number of days to a Datetime.

#### Signature

`public Datetime addDays(Integer additionalDays)`

#### Parameters

-   **additionalDays**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Example

```apex
Datetime myDateTime = Datetime.newInstance(1960, 2, 17);
Datetime newDateTime = myDateTime.addDays(2);
Datetime expected = Datetime.newInstance(1960, 2, 19);
System.assertEquals(expected, newDateTime);
```

### addHours(additionalHours)

Adds the specified number of hours to a Datetime.

#### Signature

`public Datetime addHours(Integer additionalHours)`

#### Parameters

-   **additionalHours**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Example

```apex
DateTime myDateTime = DateTime.newInstance(1997, 1, 31, 7, 8, 16);
DateTime newDateTime = myDateTime.addHours(3);
DateTime expected = DateTime.newInstance(1997, 1, 31, 10, 8, 16);
System.assertEquals(expected, newDateTime);
```

### addMinutes(additionalMinutes)

Adds the specified number of minutes to a Datetime.

#### Signature

`public Datetime addMinutes(Integer additionalMinutes)`

#### Parameters

-   **additionalMinutes**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Example

```apex
DateTime myDateTime = DateTime.newInstance(1999, 2, 11, 8, 6, 16);
DateTime newDateTime = myDateTime.addMinutes(7);
DateTime expected = DateTime.newInstance(1999, 2, 11, 8, 13, 16);
System.assertEquals(expected, newDateTime);
```

### addMonths(additionalMonths)

Adds the specified number of months to a Datetime.

#### Signature

`public Datetime addMonths(Integer additionalMonths)`

#### Parameters

-   **additionalMonths**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Example

```apex
DateTime myDateTime = DateTime.newInstance(2000, 7, 7, 7, 8, 12);
DateTime newDateTime = myDateTime.addMonths(1);
DateTime expected = DateTime.newInstance(2000, 8, 7, 7, 8, 12);
System.assertEquals(expected, newDateTime);
```

### addSeconds(additionalSeconds)

Adds the specified number of seconds to a Datetime.

#### Signature

`public Datetime addSeconds(Integer additionalSeconds)`

#### Parameters

-   **additionalSeconds**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Example

```apex
DateTime myDateTime = DateTime.newInstance(2001, 7, 19, 10, 7, 12);
DateTime newDateTime = myDateTime.addSeconds(4);
DateTime expected = DateTime.newInstance(2001, 7, 19, 10, 7, 16);
System.assertEquals(expected, newDateTime);
```

### addYears(additionalYears)

Adds the specified number of years to a Datetime.

#### Signature

`public Datetime addYears(Integer additionalYears)`

#### Parameters

-   **additionalYears**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Example

```apex
DateTime myDateTime = DateTime.newInstance(2009, 12, 17, 13, 6, 6);
DateTime newDateTime = myDateTime.addYears(1);
DateTime expected = DateTime.newInstance(2010, 12, 17, 13, 6, 6);
System.assertEquals(expected, newDateTime);
```

### date()

Returns the Date component of a Datetime in the local time zone of the context user.

#### Signature

`public Date date()`

#### Return Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

#### Example

```apex
DateTime myDateTime = DateTime.newInstance(2006, 3, 16, 12, 6, 13);
Date myDate = myDateTime.date();
Date expected = Date.newInstance(2006, 3, 16);
System.assertEquals(expected, myDate);
```

### dateGMT()

Return the Date component of a Datetime in the GMT time zone.

#### Signature

`public Date dateGMT()`

#### Return Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

#### Example

```apex
// California local time, PST
DateTime myDateTime = DateTime.newInstance(2006, 3, 16, 23, 0, 0);
Date myDate = myDateTime.dateGMT();
Date expected = Date.newInstance(2006, 3, 17);
System.assertEquals(expected, myDate);
```

### day()

Returns the day-of-month component of a Datetime in the local time zone of the context user.

#### Signature

`public Integer day()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
DateTime myDateTime = DateTime.newInstance(1986, 2, 21, 23, 0, 0);
System.assertEquals(21, myDateTime.day());
```

### dayGmt()

Returns the day-of-month component of a Datetime in the GMT time zone.

#### Signature

`public Integer dayGmt()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
// California local time, PST
DateTime myDateTime = DateTime.newInstance(1987, 1, 14, 23, 0, 3);
System.assertEquals(15, myDateTime.dayGMT());
```

### dayOfYear()

Returns the day-of-year component of a Datetime in the local time zone of the context user.

#### Signature

`public Integer dayOfYear()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

For example, February 5, 2008 08:30:12 would be day 36.

```apex
Datetime myDate = Datetime.newInstance(2008, 2, 5, 8, 30, 12);
system.assertEquals(myDate.dayOfYear(), 36);
```

### dayOfYearGmt()

Returns the day-of-year component of a Datetime in the GMT time zone.

#### Signature

`public Integer dayOfYearGmt()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
// This sample assumes we are in the PST timezone
DateTime myDateTime = DateTime.newInstance(1999, 2, 5, 23, 0, 3);
// January has 31 days + 5 days in February = 36 days
// dayOfYearGmt() adjusts the time zone from the current time zone to GMT
// by adding 8 hours to the PST time zone, so it's 37 days and not 36 days 
System.assertEquals(37, myDateTime.dayOfYearGmt());
```

### format()

Converts the date to the local time zone and returns the converted date as a formatted string using the locale of the context user. If the time zone cannot be determined, GMT is used.

#### Signature

`public String format()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

:::tip Note
The sample is executed in an org where the “Enable ICU Locale
                                Formats” crucial update is enabled. See [https://releasenotes.docs.salesforce.com/en-us/spring20/release-notes/rn_forcecom_globalization_enable_icu_cruc.htm](https://releasenotes.docs.salesforce.com/en-us/spring20/release-notes/rn_forcecom_globalization_enable_icu_cruc.htm).
:::

```apex
DateTime.myDateTime = DateTime.newInstance(1993, 6, 6, 3, 3, 3);
system.assertEquals('6/6/1993, 3:03 AM', mydatetime.format());
```

### format(dateFormatString)

Converts the date to the local time zone and returns the converted date as a string using the supplied Java simple date format. If the time zone cannot be determined, GMT is used.

#### Signature

`public String format(String dateFormatString)`

#### Parameters

-   **dateFormatString**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

For more information on the Java simple date format, see [Java SimpleDateFormat](http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html "html (New Window)").

#### Example

```apex
Datetime myDT = DateTime.newInstance(2022, 5, 4, 19, 37, 55);
String myDate = myDT.format('yyyy-MM-dd h:mm a');
String expected = '2022-05-04 7:37 PM';
System.assertEquals(expected, myDate);
```

### format(dateFormatString, timezone)

Converts the date to the specified time zone and returns the converted date as a string using the supplied Java simple date format. If the supplied time zone is not in the correct format, GMT is used.

#### Signature

`public String format(String dateFormatString, String timezone)`

#### Parameters

-   **dateFormatString**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
-   **timezone**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") Valid time zone values for the timezone argument are the time zones of the Java TimeZone class that correspond to the time zones returned by the [TimeZone.getAvailableIDs](http://docs.oracle.com/javase/6/docs/api/java/util/TimeZone.html#getAvailableIDs\(\) "HTML (New Window)") method in Java. We recommend you use full time zone names, not the three-letter abbreviations.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

For more information on the Java simple date format, see [Java SimpleDateFormat](http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html "html (New Window)").

#### Example

This example uses `format` to convert a GMT date to the America/New\_York time zone and formats the date using the specified date format.

```apex
Datetime GMTDate = 
  Datetime.newInstanceGmt(2011,6,1,12,1,5);
String strConvertedDate = 
  GMTDate.format('MM/dd/yyyy HH:mm:ss', 
                 'America/New_York');
// Date is converted to 
// the new time zone and is adjusted
// for daylight saving time.
System.assertEquals(
  '06/01/2011 08:01:05', strConvertedDate);
```

### formatGmt(dateFormatString)

Returns a Datetime as a string using the supplied Java simple date format and the GMT time zone.

#### Signature

`public String formatGmt(String dateFormatString)`

#### Parameters

-   **dateFormatString**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

For more information on the Java simple date format, see [Java SimpleDateFormat](http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html "html (New Window)").

#### Example

```apex
DateTime myDateTime = DateTime.newInstance(1993, 6, 6, 3, 3, 3);
String formatted = myDateTime.formatGMT('EEE, MMM d yyyy HH:mm:ss');
String expected = 'Sun, Jun 6 1993 10:03:03';
System.assertEquals(expected, formatted);
```

### formatLong()

Converts the date to the local time zone and returns the converted date in long date format.

#### Signature

`public String formatLong()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
// Passing local date based on the PST time zone
Datetime dt = DateTime.newInstance(2012,12,28,10,0,0);
// Writes 12/28/2012 10:00:00 AM PST
System.debug('dt.formatLong()=' + dt.formatLong());
```

### getTime()

Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this DateTime object.

#### Signature

`public Long getTime()`

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Example

```apex
DateTime dt = DateTime.newInstanceGMT(2007, 6, 23, 3, 3, 3);
Long gettime = dt.getTime();
Long expected = 1182567783000L;
System.assertEquals(expected, gettime);
```

### hour()

Returns the hour component of a Datetime in the local time zone of the context user.

#### Signature

`public Integer hour()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
DateTime myDateTime = DateTime.newInstance(1998, 11, 21, 3, 3, 3);
System.assertEquals(3 , myDateTime.hour());
```

### hourGmt()

Returns the hour component of a Datetime in the GMT time zone.

#### Signature

`public Integer hourGmt()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
// California local time
DateTime myDateTime = DateTime.newInstance(2000, 4, 27, 3, 3, 3);
System.assertEquals(10 , myDateTime.hourGMT());
```

### isSameDay(dateToCompare)

Returns true if the Datetime that called the method is the same as the specified Datetime in the local time zone of the context user.

#### Signature

`public Boolean isSameDay(Datetime dateToCompare)`

#### Parameters

-   **dateToCompare**: Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
datetime myDate = datetime.now();
datetime dueDate = 
     datetime.newInstance(2008, 1, 30);
boolean dueNow = myDate.isSameDay(dueDate);
```

### millisecond()

Return the millisecond component of a Datetime in the local time zone of the context user.

#### Signature

`public Integer millisecond()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
DateTime myDateTime = DateTime.now();
system.debug(myDateTime.millisecond());
```

### millisecondGmt()

Return the millisecond component of a Datetime in the GMT time zone.

#### Signature

`public Integer millisecondGmt()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
DateTime myDateTime = DateTime.now();
system.debug(myDateTime.millisecondGMT());
```

### minute()

Returns the minute component of a Datetime in the local time zone of the context user.

#### Signature

`public Integer minute()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
DateTime myDateTime = DateTime.newInstance(2001, 2, 27, 3, 3, 3);
system.assertEquals(3, myDateTime.minute());
```

### minuteGmt()

Returns the minute component of a Datetime in the GMT time zone.

#### Signature

`public Integer minuteGmt()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
DateTime myDateTime = DateTime.newInstance(2002, 12, 3, 3, 3, 3);
system.assertEquals(3, myDateTime.minuteGMT());
```

### month()

Returns the month component of a Datetime in the local time zone of the context user (1=Jan).

#### Signature

`public Integer month()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
DateTime myDateTime = DateTime.newInstance(2004, 11, 4, 3, 3, 3);
system.assertEquals(11, myDateTime.month());
```

### monthGmt()

Returns the month component of a Datetime in the GMT time zone (1=Jan).

#### Signature

`public Integer monthGmt()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
DateTime myDateTime = DateTime.newInstance(2006, 11, 19, 3, 3, 3);
system.assertEquals(11, myDateTime.monthGMT());
```

### newInstance(milliseconds)

Constructs a Datetime and initializes it to represent the specified number of milliseconds since January 1, 1970, 00:00:00 GMT.

#### Signature

`public static Datetime newInstance(Long milliseconds)`

#### Parameters

-   **milliseconds**: Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The returned date is in the GMT time zone.

#### Example

```apex
Long longtime = 1341828183000L;
DateTime dt = DateTime.newInstance(longtime);
DateTime expected = DateTime.newInstance(2012, 7, 09, 3, 3, 3);
System.assertEquals(expected, dt);
```

### newInstance(date, time)

Constructs a DateTime from the specified date and time in the local time zone.

#### Signature

`public static Datetime newInstance(Date date, Time time)`

#### Parameters

-   **date**: Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")
-   **time**: Type: [Time](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The returned date is in the GMT time zone.

#### Example

```apex
Date myDate = Date.newInstance(2011, 11, 18);
Time myTime = Time.newInstance(3, 3, 3, 0);
DateTime dt = DateTime.newInstance(myDate, myTime);
DateTime expected = DateTime.newInstance(2011, 11, 18, 3, 3, 3);
System.assertEquals(expected, dt);
```

### newInstance(year, month, day)

Constructs a Datetime from Integer representations of the specified year, month (1=Jan), and day at midnight in the local time zone.

#### Signature

`public static Datetime newInstance(Integer year, Integer month, Integer day)`

#### Parameters

-   **year**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
-   **month**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
-   **day**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The returned date is in the GMT time zone.

#### Example

```apex
datetime myDate = datetime.newInstance(2008, 12, 1);
```

### newInstance(year, month, day, hour, minute, second)

Constructs a Datetime from Integer representations of the specified year, month (1=Jan), day, hour, minute, and second in the local time zone.

#### Signature

`public static Datetime newInstance(Integer year, Integer month, Integer day, Integer hour, Integer minute, Integer second)`

#### Parameters

-   **year**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
-   **month**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
-   **day**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
-   **hour**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
-   **minute**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
-   **second**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The returned date is in the GMT time zone.

#### Example

```apex
Datetime myDate = Datetime.newInstance(2008, 12, 1, 12, 30, 2);
```

### newInstanceGmt(date, time)

Constructs a DateTime from the specified date and time in the GMT time zone.

#### Signature

`public static Datetime newInstanceGmt(Date date, Time time)`

#### Parameters

-   **date**: Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")
-   **time**: Type: [Time](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Example

```apex
Date myDate = Date.newInstance(2013, 11, 12);
Time myTime = Time.newInstance(3, 3, 3, 0);
DateTime dt = DateTime.newInstanceGMT(myDate, myTime);
DateTime expected = DateTime.newInstanceGMT(2013, 11, 12, 3, 3, 3);
System.assertEquals(expected, dt);
```

### newInstanceGmt(year, month, date)

Constructs a Datetime from Integer representations of the specified year, month (1=Jan), and day at midnight in the GMT time zone

#### Signature

`public static Datetime newInstanceGmt(Integer year, Integer month, Integer date)`

#### Parameters

-   **year**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
-   **month**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
-   **date**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Example

```apex
DateTime dt = DateTime.newInstanceGMT(1996, 3, 22);
```

### newInstanceGmt(year, month, date, hour, minute, second)

Constructs a Datetime from Integer representations of the specified year, month (1=Jan), day, hour, minute, and second in the GMT time zone

#### Signature

`public static Datetime newInstanceGmt(Integer year, Integer month, Integer date, Integer hour, Integer minute, Integer second)`

#### Parameters

-   **year**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
-   **month**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
-   **date**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
-   **hour**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
-   **minute**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
-   **second**: Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Example

```apex
//California local time
DateTime dt = DateTime.newInstanceGMT(1998, 1, 29, 2, 2, 3);
DateTime expected = DateTime.newInstance(1998, 1, 28, 18, 2, 3);
System.assertEquals(expected, dt);
```

### now()

Returns the current Datetime based on a GMT calendar.

#### Signature

`public static Datetime now()`

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The format of the returned datetime is: `'MM/DD/YYYY HH:MM PERIOD'`

#### Example

```apex
datetime myDateTime = datetime.now();
```

### parse(datetimeString)

Constructs a Datetime from the given String in the local time zone and in the format of the user locale.

#### Signature

`public static Datetime parse(String datetimeString)`

#### Parameters

-   **datetimeString**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The returned date is in the GMT time zone.

#### Example

This example uses `parse` to create a Datetime from a date passed in as a string and that is formatted for the English (United States) locale. You may need to change the format of the date string if you have a different locale. 

:::tip Note
This sample is executed in an org where the “Enable ICU
                    Locale Formats” crucial update is enabled. See [https://releasenotes.docs.salesforce.com/en-us/spring20/release-notes/rn_forcecom_globalization_enable_icu_cruc.htm](https://releasenotes.docs.salesforce.com/en-us/spring20/release-notes/rn_forcecom_globalization_enable_icu_cruc.htm).
:::

```apex
Datetime dt = DateTime.parse('10/14/2011, 11:46 AM');
String myDtString = dt.format();
system.assertEquals(myDtString, '10/14/2011, 11:46 AM');
```

### second()

Returns the second component of a Datetime in the local time zone of the context user.

#### Signature

`public Integer second()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
DateTime dt = DateTime.newInstanceGMT(1999, 9, 22, 3, 1, 2);
System.assertEquals(2, dt.second());
```

### secondGmt()

Returns the second component of a Datetime in the GMT time zone.

#### Signature

`public Integer secondGmt()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
DateTime dt = DateTime.newInstance(2000, 2, 3, 3, 1, 5);
System.assertEquals(5, dt.secondGMT());
```

### time()

Returns the time component of a Datetime in the local time zone of the context user.

#### Signature

`public Time time()`

#### Return Value

Type: [Time](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Example

```apex
DateTime dt = DateTime.newInstance(2002, 11, 21, 0, 2, 2);
Time expected = Time.newInstance(0, 2, 2, 0);
System.assertEquals(expected, dt.time());
```

### timeGmt()

Returns the time component of a Datetime in the GMT time zone.

#### Signature

`public Time timeGmt()`

#### Return Value

Type: [Time](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Example

```apex
// This sample is based on the PST time zone
DateTime dt = DateTime.newInstance(2004, 1, 27, 4, 1, 2);
Time expected = Time.newInstance(12, 1, 2, 0);
// 8 hours are added to the time to convert it from
// PST to GMT
System.assertEquals(expected, dt.timeGMT());
```

### valueOf(dateTimeString)

Returns a Datetime that contains the value of the specified string.

#### Signature

`public static Datetime valueOf(String dateTimeString)`

#### Parameters

-   **dateTimeString**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The returned date is in the GMT time zone.

#### Usage

The specified string should use the standard date format “yyyy-MM-dd HH:mm:ss” in the local time zone.

#### Example

```apex
string year = '2008';
string month = '10';
string day = '5';
string hour = '12';
string minute = '20';
string second = '20';
string stringDate = year + '-' + month + '-' + day + ' ' + hour + ':' 
    + minute +  ':' + second;

Datetime myDate = Datetime.valueOf(stringDate);
```

### valueOf(fieldValue)

Converts the specified object to a Datetime. Use this method to convert a history tracking field value or an object that represents a Datetime value.

#### Signature

`public static Datetime valueOf(Object fieldValue)`

#### Parameters

-   **fieldValue**: Type: Object

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Usage

Use this method with the `OldValue` or `NewValue` fields of history sObjects, such as `AccountHistory`, when the field is a Date/Time field.

#### Example

```apex
List ahlist = [SELECT Field,OldValue,NewValue FROM AccountHistory];
for(AccountHistory ah : ahlist) {
  System.debug('Field: ' + ah.Field);
  if (ah.field == 'MyDatetime__c') {
    Datetime oldValue = Datetime.valueOf(ah.OldValue);
    Datetime newValue = Datetime.valueOf(ah.NewValue);
  }
}
```

### valueOfGmt(dateTimeString)

Returns a Datetime that contains the value of the specified String.

#### Signature

`public static Datetime valueOfGmt(String dateTimeString)`

#### Parameters

-   **dateTimeString**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Usage

The specified string should use the standard date format “yyyy-MM-dd HH:mm:ss” in the GMT time zone.

#### Example

```apex
// California locale time
string year = '2009';
string month = '3';
string day = '5';
string hour = '5';
string minute = '2';
string second = '2';
string stringDate = year + '-' + month + '-' + day + ' ' + hour + ':' 
    + minute +  ':' + second;

Datetime myDate = Datetime.valueOfGMT(stringDate);

DateTime expected = DateTime.newInstance(2009, 3, 4, 21, 2, 2);
System.assertEquals(expected, myDate);
```

### year()

Returns the year component of a Datetime in the local time zone of the context user.

#### Signature

`public Integer year()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
DateTime dt = DateTime.newInstance(2012, 1, 26, 5, 2, 4);
System.assertEquals(2012, dt.year());
```

### yearGmt()

Returns the year component of a Datetime in the GMT time zone.

#### Signature

`public Integer yearGmt()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
DateTime dt = DateTime.newInstance(2012, 10, 4, 6, 4, 6);
System.assertEquals(2012, dt.yearGMT());
```
