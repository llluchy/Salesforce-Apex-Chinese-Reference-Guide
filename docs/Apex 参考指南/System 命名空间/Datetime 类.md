# Datetime 类

包含Datetime原始数据类型的方法。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Datetime类是Salesforce中用于处理日期时间数据的重要工具。
> 
> 它提供了丰富的日期时间操作方法，包括时间计算、格式化、时区转换等功能。

## 命名空间

System

## 用法

Apex支持Date值到Datetime的隐式和显式转换，结果Datetime值中的时间组件被清零。有关Datetime的更多信息，请参阅Datetime数据类型。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Datetime类的主要用途：
> 1. 日期时间计算（加减天数、小时、分钟、秒等）
> 2. 时区转换（本地时区和GMT时区）
> 3. 日期时间格式化和解析
> 4. 获取日期时间的各个组成部分

## Datetime 方法

以下是Datetime的方法。

### addDays(additionalDays)

将指定的天数添加到Datetime。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> addDays方法用于日期时间计算，可以向前或向后计算日期时间。
> 
> 正数表示向后计算，负数表示向前计算。

#### 签名

```apex
public Datetime addDays(Integer additionalDays)
```

#### 参数

**additionalDays**
- 类型：Integer
- 描述：要添加的天数

#### 返回值

- 类型：Datetime

#### 示例

```apex
Datetime myDateTime = Datetime.newInstance(1960, 2, 17);
Datetime newDateTime = myDateTime.addDays(2);
Datetime expected = Datetime.newInstance(1960, 2, 19);
System.assertEquals(expected, newDateTime);
```

### addHours(additionalHours)

将指定的小时数添加到Datetime。

#### 签名

```apex
public Datetime addHours(Integer additionalHours)
```

#### 参数

**additionalHours**
- 类型：Integer
- 描述：要添加的小时数

#### 返回值

- 类型：Datetime

#### 示例

```apex
DateTime myDateTime = DateTime.newInstance(1997, 1, 31, 7, 8, 16);
DateTime newDateTime = myDateTime.addHours(3);
DateTime expected = DateTime.newInstance(1997, 1, 31, 10, 8, 16);
System.assertEquals(expected, newDateTime);
```

### addMinutes(additionalMinutes)

将指定的分钟数添加到Datetime。

#### 签名

```apex
public Datetime addMinutes(Integer additionalMinutes)
```

#### 参数

**additionalMinutes**
- 类型：Integer
- 描述：要添加的分钟数

#### 返回值

- 类型：Datetime

#### 示例

```apex
DateTime myDateTime = DateTime.newInstance(1999, 2, 11, 8, 6, 16);
DateTime newDateTime = myDateTime.addMinutes(7);
DateTime expected = DateTime.newInstance(1999, 2, 11, 8, 13, 16);
System.assertEquals(expected, newDateTime);
```

### addMonths(additionalMonths)

将指定的月数添加到Datetime。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> addMonths方法会智能处理月末日期，自动调整到下一个月的正确日期。
> 
> 例如：1月31日加1个月会变成2月28日（或闰年的2月29日）。

#### 签名

```apex
public Datetime addMonths(Integer additionalMonths)
```

#### 参数

**additionalMonths**
- 类型：Integer
- 描述：要添加的月数

#### 返回值

- 类型：Datetime

#### 示例

```apex
DateTime myDateTime = DateTime.newInstance(2000, 7, 7, 7, 8, 12);
DateTime newDateTime = myDateTime.addMonths(1);
DateTime expected = DateTime.newInstance(2000, 8, 7, 7, 8, 12);
System.assertEquals(expected, newDateTime);
```

### addSeconds(additionalSeconds)

将指定的秒数添加到Datetime。

#### 签名

```apex
public Datetime addSeconds(Integer additionalSeconds)
```

#### 参数

**additionalSeconds**
- 类型：Integer
- 描述：要添加的秒数

#### 返回值

- 类型：Datetime

#### 示例

```apex
DateTime myDateTime = DateTime.newInstance(2001, 7, 19, 10, 7, 12);
DateTime newDateTime = myDateTime.addSeconds(4);
DateTime expected = DateTime.newInstance(2001, 7, 19, 10, 7, 16);
System.assertEquals(expected, newDateTime);
```

### addYears(additionalYears)

将指定的年数添加到Datetime。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> addYears方法会正确处理闰年，特别是2月29日的情况。
> 
> 在非闰年中，2月29日会被调整为2月28日。

#### 签名

```apex
public Datetime addYears(Integer additionalYears)
```

#### 参数

**additionalYears**
- 类型：Integer
- 描述：要添加的年数

#### 返回值

- 类型：Datetime

#### 示例

```apex
DateTime myDateTime = DateTime.newInstance(2009, 12, 17, 13, 6, 6);
DateTime newDateTime = myDateTime.addYears(1);
DateTime expected = DateTime.newInstance(2010, 12, 17, 13, 6, 6);
System.assertEquals(expected, newDateTime);
```

### date()

返回Datetime在上下文用户本地时区的Date组件。

#### 签名

```apex
public Date date()
```

#### 返回值

- 类型：Date

#### 示例

```apex
DateTime myDateTime = DateTime.newInstance(2006, 3, 16, 12, 6, 13);
Date myDate = myDateTime.date();
Date expected = Date.newInstance(2006, 3, 16);
System.assertEquals(expected, myDate);
```

### dateGMT()

返回Datetime在GMT时区的Date组件。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> dateGMT方法返回GMT时区的日期，与本地时区可能不同。
> 
> 例如：在PST时区的23:00，在GMT时区可能是第二天的日期。

#### 签名

```apex
public Date dateGMT()
```

#### 返回值

- 类型：Date

#### 示例

```apex
// 加利福尼亚本地时间，PST
DateTime myDateTime = DateTime.newInstance(2006, 3, 16, 23, 0, 0);
Date myDate = myDateTime.dateGMT();
Date expected = Date.newInstance(2006, 3, 17);
System.assertEquals(expected, myDate);
```

### day()

返回Datetime在上下文用户本地时区的月份中的日期组件。

#### 签名

```apex
public Integer day()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
DateTime myDateTime = DateTime.newInstance(1986, 2, 21, 23, 0, 0);
System.assertEquals(21, myDateTime.day());
```

### dayGmt()

返回Datetime在GMT时区的月份中的日期组件。

#### 签名

```apex
public Integer dayGmt()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
// 加利福尼亚本地时间，PST
DateTime myDateTime = DateTime.newInstance(1987, 1, 14, 23, 0, 3);
System.assertEquals(15, myDateTime.dayGMT());
```

### dayOfYear()

返回Datetime在上下文用户本地时区的年中的日期组件。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> dayOfYear返回一年中的第几天，1月1日是第1天，12月31日是第365天（或闰年的第366天）。

#### 签名

```apex
public Integer dayOfYear()
```

#### 返回值

- 类型：Integer

#### 示例

例如，2008年2月5日08:30:12将是第36天：

```apex
Datetime myDate = Datetime.newInstance(2008, 2, 5, 8, 30, 12);
System.assertEquals(myDate.dayOfYear(), 36);
```

### dayOfYearGmt()

返回Datetime在GMT时区的年中的日期组件。

#### 签名

```apex
public Integer dayOfYearGmt()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
// 此示例假设我们在PST时区
DateTime myDateTime = DateTime.newInstance(1999, 2, 5, 23, 0, 3);
// 1月有31天 + 2月的5天 = 36天
// dayOfYearGmt()将时区从当前时区调整为GMT
// 通过向PST时区添加8小时，所以是37天而不是36天
System.assertEquals(37, myDateTime.dayOfYearGmt());
```

### format()

将日期转换为本地时区，并使用上下文用户的区域设置将转换后的日期作为格式化字符串返回。如果无法确定时区，则使用GMT。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> format方法会根据用户的区域设置返回不同格式的日期时间字符串。
> 
> 例如：美国英语区域设置返回"6/6/1993, 3:03 AM"。

#### 签名

```apex
public String format()
```

#### 返回值

- 类型：String

#### 示例

```apex
DateTime myDateTime = DateTime.newInstance(1993, 6, 6, 3, 3, 3);
System.assertEquals('6/6/1993, 3:03 AM', myDateTime.format());
```

### format(dateFormatString)

将日期转换为本地时区，并使用提供的Java简单日期格式将转换后的日期作为字符串返回。如果无法确定时区，则使用GMT。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这个方法使用Java SimpleDateFormat格式字符串。
> 
> 可以自定义日期时间的显示格式。

#### 签名

```apex
public String format(String dateFormatString)
```

#### 参数

**dateFormatString**
- 类型：String
- 描述：Java简单日期格式字符串

#### 返回值

- 类型：String

#### 用法

有关Java简单日期格式的更多信息，请参阅Java SimpleDateFormat。

#### 示例

```apex
Datetime myDT = DateTime.newInstance(2022, 5, 4, 19, 37, 55);
String myDate = myDT.format('yyyy-MM-dd h:mm a');
String expected = '2022-05-04 7:37 PM';
System.assertEquals(expected, myDate);
```

### format(dateFormatString, timezone)

将日期转换为指定时区，并使用提供的Java简单日期格式将转换后的日期作为字符串返回。如果提供的时区格式不正确，则使用GMT。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这个方法可以指定目标时区进行转换。
> 
> 会自动处理夏令时调整。

#### 签名

```apex
public String format(String dateFormatString, String timezone)
```

#### 参数

**dateFormatString**
- 类型：String
- 描述：Java简单日期格式字符串

**timezone**
- 类型：String
- 描述：目标时区

#### 返回值

- 类型：String

#### 用法

timezone参数的有效时区值是Java TimeZone类中与时区对应的时区，这些时区由Java中的TimeZone.getAvailableIDs方法返回。我们建议您使用完整的时区名称，而不是三字母缩写。

#### 示例

此示例使用format将GMT日期转换为America/New_York时区，并使用指定的日期格式格式化日期：

```apex
Datetime GMTDate = Datetime.newInstanceGmt(2011, 6, 1, 12, 1, 5);
String strConvertedDate = GMTDate.format('MM/dd/yyyy HH:mm:ss', 'America/New_York');
// 日期被转换为新时区并调整为夏令时
System.assertEquals('06/01/2011 08:01:05', strConvertedDate);
```

### formatGmt(dateFormatString)

使用提供的Java简单日期格式和GMT时区将Datetime作为字符串返回。

#### 签名

```apex
public String formatGmt(String dateFormatString)
```

#### 参数

**dateFormatString**
- 类型：String
- 描述：Java简单日期格式字符串

#### 返回值

- 类型：String

#### 示例

```apex
DateTime myDateTime = DateTime.newInstance(1993, 6, 6, 3, 3, 3);
String formatted = myDateTime.formatGMT('EEE, MMM d yyyy HH:mm:ss');
String expected = 'Sun, Jun 6 1993 10:03:03';
System.assertEquals(expected, formatted);
```

### formatLong()

将日期转换为本地时区，并以长日期格式返回转换后的日期。

#### 签名

```apex
public String formatLong()
```

#### 返回值

- 类型：String

#### 示例

```apex
// 传递基于PST时区的本地日期
Datetime dt = DateTime.newInstance(2012, 12, 28, 10, 0, 0);
// 输出 12/28/2012 10:00:00 AM PST
System.debug('dt.formatLong()=' + dt.formatLong());
```

### getTime()

返回此DateTime对象表示的从1970年1月1日00:00:00 GMT开始的毫秒数。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这个方法返回Unix时间戳，常用于时间计算和比较。
> 
> 返回的是Long类型，表示毫秒数。

#### 签名

```apex
public Long getTime()
```

#### 返回值

- 类型：Long

#### 示例

```apex
DateTime dt = DateTime.newInstanceGMT(2007, 6, 23, 3, 3, 3);
Long getTime = dt.getTime();
Long expected = 1182567783000L;
System.assertEquals(expected, getTime);
```

### hour()

返回Datetime在上下文用户本地时区的小时组件。

#### 签名

```apex
public Integer hour()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
DateTime myDateTime = DateTime.newInstance(1998, 11, 21, 3, 3, 3);
System.assertEquals(3, myDateTime.hour());
```

### hourGmt()

返回Datetime在GMT时区的小时组件。

#### 签名

```apex
public Integer hourGmt()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
// 加利福尼亚本地时间
DateTime myDateTime = DateTime.newInstance(2000, 4, 27, 3, 3, 3);
System.assertEquals(10, myDateTime.hourGMT());
```

### isSameDay(dateToCompare)

如果调用方法的Datetime在上下文用户本地时区与指定的Datetime相同，则返回true。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这个方法只比较日期部分，不比较时间部分。
> 
> 即使时间不同，只要日期相同就返回true。

#### 签名

```apex
public Boolean isSameDay(Datetime dateToCompare)
```

#### 参数

**dateToCompare**
- 类型：Datetime
- 描述：要比较的日期时间

#### 返回值

- 类型：Boolean

#### 示例

```apex
Datetime myDate = Datetime.now();
Datetime dueDate = Datetime.newInstance(2008, 1, 30);
Boolean dueNow = myDate.isSameDay(dueDate);
```

### millisecond()

返回Datetime在上下文用户本地时区的毫秒组件。

#### 签名

```apex
public Integer millisecond()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
DateTime myDateTime = DateTime.now();
System.debug(myDateTime.millisecond());
```

### millisecondGmt()

返回Datetime在GMT时区的毫秒组件。

#### 签名

```apex
public Integer millisecondGmt()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
DateTime myDateTime = DateTime.now();
System.debug(myDateTime.millisecondGMT());
```

### minute()

返回Datetime在上下文用户本地时区的分钟组件。

#### 签名

```apex
public Integer minute()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
DateTime myDateTime = DateTime.newInstance(2001, 2, 27, 3, 3, 3);
System.assertEquals(3, myDateTime.minute());
```

### minuteGmt()

返回Datetime在GMT时区的分钟组件。

#### 签名

```apex
public Integer minuteGmt()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
DateTime myDateTime = DateTime.newInstance(2002, 12, 3, 3, 3, 3);
System.assertEquals(3, myDateTime.minuteGMT());
```

### month()

返回Datetime在上下文用户本地时区的月份组件（1=一月）。

#### 签名

```apex
public Integer month()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
DateTime myDateTime = DateTime.newInstance(2004, 11, 4, 3, 3, 3);
System.assertEquals(11, myDateTime.month());
```

### monthGmt()

返回Datetime在GMT时区的月份组件（1=一月）。

#### 签名

```apex
public Integer monthGmt()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
DateTime myDateTime = DateTime.newInstance(2006, 11, 19, 3, 3, 3);
System.assertEquals(11, myDateTime.monthGMT());
```

### newInstance(milliseconds)

构造Datetime并将其初始化为表示从1970年1月1日00:00:00 GMT开始的指定毫秒数。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这个方法从Unix时间戳创建Datetime对象。
> 
> 返回的日期在GMT时区。

#### 签名

```apex
public static Datetime newInstance(Long milliseconds)
```

#### 参数

**milliseconds**
- 类型：Long
- 描述：从1970年1月1日00:00:00 GMT开始的毫秒数

#### 返回值

- 类型：Datetime

#### 示例

```apex
Long longTime = 1341828183000L;
DateTime dt = DateTime.newInstance(longTime);
DateTime expected = DateTime.newInstance(2012, 7, 9, 3, 3, 3);
System.assertEquals(expected, dt);
```

### newInstance(date, time)

从本地时区中的指定日期和时间构造DateTime。

#### 签名

```apex
public static Datetime newInstance(Date date, Time time)
```

#### 参数

**date**
- 类型：Date
- 描述：日期

**time**
- 类型：Time
- 描述：时间

#### 返回值

- 类型：Datetime

#### 示例

```apex
Date myDate = Date.newInstance(2011, 11, 18);
Time myTime = Time.newInstance(3, 3, 3, 0);
DateTime dt = DateTime.newInstance(myDate, myTime);
DateTime expected = DateTime.newInstance(2011, 11, 18, 3, 3, 3);
System.assertEquals(expected, dt);
```

### newInstance(year, month, day)

从指定年份、月份（1=一月）和日期的整数表示在本地时区的午夜构造Datetime。

#### 签名

```apex
public static Datetime newInstance(Integer year, Integer month, Integer day)
```

#### 参数

**year**
- 类型：Integer
- 描述：年份

**month**
- 类型：Integer
- 描述：月份（1=一月）

**day**
- 类型：Integer
- 描述：日期

#### 返回值

- 类型：Datetime

#### 示例

```apex
Datetime myDate = Datetime.newInstance(2008, 12, 1);
```

### newInstance(year, month, day, hour, minute, second)

从指定年份、月份（1=一月）、日期、小时、分钟和秒的整数表示在本地时区构造Datetime。

#### 签名

```apex
public static Datetime newInstance(Integer year, Integer month, Integer day, Integer hour, Integer minute, Integer second)
```

#### 参数

**year**
- 类型：Integer
- 描述：年份

**month**
- 类型：Integer
- 描述：月份（1=一月）

**day**
- 类型：Integer
- 描述：日期

**hour**
- 类型：Integer
- 描述：小时

**minute**
- 类型：Integer
- 描述：分钟

**second**
- 类型：Integer
- 描述：秒

#### 返回值

- 类型：Datetime

#### 示例

```apex
Datetime myDate = Datetime.newInstance(2008, 12, 1, 12, 30, 2);
```

### newInstanceGmt(date, time)

从GMT时区中的指定日期和时间构造DateTime。

#### 签名

```apex
public static Datetime newInstanceGmt(Date date, Time time)
```

#### 参数

**date**
- 类型：Date
- 描述：日期

**time**
- 类型：Time
- 描述：时间

#### 返回值

- 类型：Datetime

#### 示例

```apex
Date myDate = Date.newInstance(2013, 11, 12);
Time myTime = Time.newInstance(3, 3, 3, 0);
DateTime dt = DateTime.newInstanceGMT(myDate, myTime);
DateTime expected = DateTime.newInstanceGMT(2013, 11, 12, 3, 3, 3);
System.assertEquals(expected, dt);
```

### newInstanceGmt(year, month, date)

从指定年份、月份（1=一月）和日期的整数表示在GMT时区的午夜构造Datetime。

#### 签名

```apex
public static Datetime newInstanceGmt(Integer year, Integer month, Integer date)
```

#### 参数

**year**
- 类型：Integer
- 描述：年份

**month**
- 类型：Integer
- 描述：月份（1=一月）

**date**
- 类型：Integer
- 描述：日期

#### 返回值

- 类型：Datetime

#### 示例

```apex
DateTime dt = DateTime.newInstanceGMT(1996, 3, 22);
```

### newInstanceGmt(year, month, date, hour, minute, second)

从指定年份、月份（1=一月）、日期、小时、分钟和秒的整数表示在GMT时区构造Datetime。

#### 签名

```apex
public static Datetime newInstanceGmt(Integer year, Integer month, Integer date, Integer hour, Integer minute, Integer second)
```

#### 参数

**year**
- 类型：Integer
- 描述：年份

**month**
- 类型：Integer
- 描述：月份（1=一月）

**date**
- 类型：Integer
- 描述：日期

**hour**
- 类型：Integer
- 描述：小时

**minute**
- 类型：Integer
- 描述：分钟

**second**
- 类型：Integer
- 描述：秒

#### 返回值

- 类型：Datetime

#### 示例

```apex
// 加利福尼亚本地时间
DateTime dt = DateTime.newInstanceGMT(1998, 1, 29, 2, 2, 3);
DateTime expected = DateTime.newInstance(1998, 1, 28, 18, 2, 3);
System.assertEquals(expected, dt);
```

### now()

基于GMT日历返回当前Datetime。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这是一个静态方法，返回当前的GMT时间。
> 
> 返回的日期时间格式为：'MM/DD/YYYY HH:MM PERIOD'

#### 签名

```apex
public static Datetime now()
```

#### 返回值

- 类型：Datetime

#### 示例

```apex
Datetime myDateTime = Datetime.now();
```

### parse(datetimeString)

从本地时区中给定字符串构造Datetime，格式为用户区域设置。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> parse方法会根据用户的区域设置解析日期时间字符串。
> 
> 不同区域设置的日期时间格式可能不同。

#### 签名

```apex
public static Datetime parse(String datetimeString)
```

#### 参数

**datetimeString**
- 类型：String
- 描述：要解析的日期时间字符串

#### 返回值

- 类型：Datetime

#### 示例

此示例使用parse从作为字符串传递的日期创建Datetime，该日期格式为英语（美国）区域设置。如果您有不同的区域设置，可能需要更改日期字符串的格式：

```apex
Datetime dt = DateTime.parse('10/14/2011, 11:46 AM');
String myDtString = dt.format();
System.assertEquals(myDtString, '10/14/2011, 11:46 AM');
```

### second()

返回Datetime在上下文用户本地时区的秒组件。

#### 签名

```apex
public Integer second()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
DateTime dt = DateTime.newInstanceGMT(1999, 9, 22, 3, 1, 2);
System.assertEquals(2, dt.second());
```

### secondGmt()

返回Datetime在GMT时区的秒组件。

#### 签名

```apex
public Integer secondGmt()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
DateTime dt = DateTime.newInstance(2000, 2, 3, 3, 1, 5);
System.assertEquals(5, dt.secondGMT());
```

### time()

返回Datetime在上下文用户本地时区的时间组件。

#### 签名

```apex
public Time time()
```

#### 返回值

- 类型：Time

#### 示例

```apex
DateTime dt = DateTime.newInstance(2002, 11, 21, 0, 2, 2);
Time expected = Time.newInstance(0, 2, 2, 0);
System.assertEquals(expected, dt.time());
```

### timeGmt()

返回Datetime在GMT时区的时间组件。

#### 签名

```apex
public Time timeGmt()
```

#### 返回值

- 类型：Time

#### 示例

```apex
// 此示例基于PST时区
DateTime dt = DateTime.newInstance(2004, 1, 27, 4, 1, 2);
Time expected = Time.newInstance(12, 1, 2, 0);
// 向时间添加8小时以将其从PST转换为GMT
System.assertEquals(expected, dt.timeGMT());
```

### valueOf(dateTimeString)

返回包含指定字符串值的Datetime。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这个方法使用标准的日期时间格式"yyyy-MM-dd HH:mm:ss"。
> 
> 指定的字符串应使用本地时区的标准日期格式。

#### 签名

```apex
public static Datetime valueOf(String dateTimeString)
```

#### 参数

**dateTimeString**
- 类型：String
- 描述：要转换的日期时间字符串

#### 返回值

- 类型：Datetime

#### 用法

指定的字符串应使用本地时区的标准日期格式"yyyy-MM-dd HH:mm:ss"。

#### 示例

```apex
String year = '2008';
String month = '10';
String day = '5';
String hour = '12';
String minute = '20';
String second = '20';
String stringDate = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
Datetime myDate = Datetime.valueOf(stringDate);
```

### valueOf(fieldValue)

将指定的对象转换为Datetime。使用此方法转换历史跟踪字段值或表示Datetime值的对象。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这个方法主要用于处理历史跟踪字段的OldValue和NewValue。
> 
> 可以处理各种类型的对象，包括String等。

#### 签名

```apex
public static Datetime valueOf(Object fieldValue)
```

#### 参数

**fieldValue**
- 类型：Object
- 描述：要转换的对象

#### 返回值

- 类型：Datetime

#### 用法

将此方法与历史sObject（如AccountHistory）的OldValue或NewValue字段一起使用，当字段是Date/Time字段时。

#### 示例

```apex
List<AccountHistory> ahList = [SELECT Field, OldValue, NewValue FROM AccountHistory];
for(AccountHistory ah : ahList) {
    System.debug('Field: ' + ah.Field);
    if (ah.Field == 'MyDatetime__c') {
        Datetime oldValue = Datetime.valueOf(ah.OldValue);
        Datetime newValue = Datetime.valueOf(ah.NewValue);
    }
}
```

### valueOfGmt(dateTimeString)

返回包含指定字符串值的Datetime。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这个方法使用GMT时区的标准日期时间格式"yyyy-MM-dd HH:mm:ss"。
> 
> 与valueOf不同，这个方法专门处理GMT时区的字符串。

#### 签名

```apex
public static Datetime valueOfGmt(String dateTimeString)
```

#### 参数

**dateTimeString**
- 类型：String
- 描述：要转换的日期时间字符串

#### 返回值

- 类型：Datetime

#### 用法

指定的字符串应使用GMT时区的标准日期格式"yyyy-MM-dd HH:mm:ss"。

#### 示例

```apex
// 加利福尼亚区域时间
String year = '2009';
String month = '3';
String day = '5';
String hour = '5';
String minute = '2';
String second = '2';
String stringDate = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
Datetime myDate = Datetime.valueOfGMT(stringDate);
DateTime expected = DateTime.newInstance(2009, 3, 4, 21, 2, 2);
System.assertEquals(expected, myDate);
```

### year()

返回Datetime在上下文用户本地时区的年份组件。

#### 签名

```apex
public Integer year()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
DateTime dt = DateTime.newInstance(2012, 1, 26, 5, 2, 4);
System.assertEquals(2012, dt.year());
```

### yearGmt()

返回Datetime在GMT时区的年份组件。

#### 签名

```apex
public Integer yearGmt()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
DateTime dt = DateTime.newInstance(2012, 10, 4, 6, 4, 6);
System.assertEquals(2012, dt.yearGMT());
```

## 注意事项

- Datetime类处理日期和时间，包含时区信息
- 所有时间计算都会自动处理时区转换
- 月份参数使用1-12表示，其中1代表一月
- 日期时间字符串解析受用户区域设置影响
- GMT方法返回GMT时区的值，本地方法返回用户时区的值
- 时区转换会自动处理夏令时调整

## 相关链接

- [Datetime数据类型](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_date_time.htm)
- [日期时间处理](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_date_time_methods.htm)
- [Java SimpleDateFormat](https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html)

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm*
