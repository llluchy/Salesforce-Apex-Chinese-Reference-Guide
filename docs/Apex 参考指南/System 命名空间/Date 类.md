# Date 类

包含Date原始数据类型的方法。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Date类是Salesforce中用于处理日期数据的重要工具。
> 
> 它提供了丰富的日期操作方法，包括日期计算、格式化、比较等功能。

## 命名空间

System

## 用法

有关日期的更多信息，请参阅Date数据类型。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Date类的主要用途：
> 1. 日期计算（加减天数、月数、年数）
> 2. 日期比较和格式化
> 3. 获取日期的各个组成部分
> 4. 处理日期字符串转换

## Date 方法

以下是Date的方法。

### addDays(additionalDays)

将指定的额外天数添加到Date。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> addDays方法用于日期计算，可以向前或向后计算日期。
> 
> 正数表示向后计算，负数表示向前计算。

#### 签名

```apex
public Date addDays(Integer additionalDays)
```

#### 参数

**additionalDays**
- 类型：Integer
- 描述：要添加的天数

#### 返回值

- 类型：Date

#### 示例

```apex
Date myDate = Date.newInstance(1960, 2, 17);
Date newDate = myDate.addDays(2);
```

### addMonths(additionalMonths)

将指定的额外月数添加到Date。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> addMonths方法会智能处理月末日期，自动调整到下一个月的正确日期。
> 
> 例如：1月31日加1个月会变成2月28日（或闰年的2月29日）。

#### 签名

```apex
public Date addMonths(Integer additionalMonths)
```

#### 参数

**additionalMonths**
- 类型：Integer
- 描述：要添加的月数

#### 返回值

- 类型：Date

#### 示例

```apex
Date myDate = Date.newInstance(1990, 11, 21);
Date newDate = myDate.addMonths(3);
Date expectedDate = Date.newInstance(1991, 2, 21);
System.assertEquals(expectedDate, newDate);
```

### addYears(additionalYears)

将指定的额外年数添加到Date。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> addYears方法会正确处理闰年，特别是2月29日的情况。
> 
> 在非闰年中，2月29日会被调整为2月28日。

#### 签名

```apex
public Date addYears(Integer additionalYears)
```

#### 参数

**additionalYears**
- 类型：Integer
- 描述：要添加的年数

#### 返回值

- 类型：Date

#### 示例

```apex
Date myDate = Date.newInstance(1983, 7, 15);
Date newDate = myDate.addYears(2);
Date expectedDate = Date.newInstance(1985, 7, 15);
System.assertEquals(expectedDate, newDate);
```

### day()

返回Date的月份中的日期组件。

#### 签名

```apex
public Integer day()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
Date myDate = Date.newInstance(1989, 4, 21);
Integer day = myDate.day();
System.assertEquals(21, day);
```

### dayOfYear()

返回Date的年中的日期组件。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> dayOfYear返回一年中的第几天，1月1日是第1天，12月31日是第365天（或闰年的第366天）。

#### 签名

```apex
public Integer dayOfYear()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
Date myDate = Date.newInstance(1998, 10, 21);
Integer day = myDate.dayOfYear();
System.assertEquals(294, day);
```

### daysBetween(secondDate)

返回调用方法的Date与指定日期之间的天数。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 如果调用方法的Date在secondDate之后，返回值为负数。
> 
> 这个方法计算的是完整的天数，不包括时间部分。

#### 签名

```apex
public Integer daysBetween(Date secondDate)
```

#### 参数

**secondDate**
- 类型：Date
- 描述：要比较的第二个日期

#### 返回值

- 类型：Integer

#### 用法

如果调用方法的Date在secondDate之后，返回值为负数。

#### 示例

```apex
Date startDate = Date.newInstance(2008, 1, 1);
Date dueDate = Date.newInstance(2008, 1, 30);
Integer numberDaysDue = startDate.daysBetween(dueDate);
```

### daysInMonth(year, month)

返回指定年份和月份的天数（1=一月）。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这是一个静态方法，用于获取指定月份的天数。
> 
> 会自动处理闰年的2月份。

#### 签名

```apex
public static Integer daysInMonth(Integer year, Integer month)
```

#### 参数

**year**
- 类型：Integer
- 描述：年份

**month**
- 类型：Integer
- 描述：月份（1=一月）

#### 返回值

- 类型：Integer

#### 示例

以下示例查找1960年2月的天数：

```apex
Integer numberDays = Date.daysInMonth(1960, 2);
```

### format()

使用上下文用户的区域设置将Date作为字符串返回。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> format方法会根据用户的区域设置返回不同格式的日期字符串。
> 
> 例如：美国英语区域设置返回"3/21/2001"，而其他区域设置可能返回"21/3/2001"。

#### 签名

```apex
public String format()
```

#### 返回值

- 类型：String

#### 示例

```apex
// 在美国英语区域设置中
Date myDate = Date.newInstance(2001, 3, 21);
String dayString = myDate.format();
System.assertEquals('3/21/2001', dayString);
```

### isLeapYear(year)

如果指定年份是闰年，则返回true。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这是一个静态方法，用于判断指定年份是否为闰年。
> 
> 闰年规则：能被4整除但不能被100整除，或者能被400整除。

#### 签名

```apex
public static Boolean isLeapYear(Integer year)
```

#### 参数

**year**
- 类型：Integer
- 描述：要检查的年份

#### 返回值

- 类型：Boolean

#### 示例

```apex
System.assert(Date.isLeapYear(2004));
```

### isSameDay(dateToCompare)

如果调用方法的Date与指定日期相同，则返回true。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这个方法只比较日期部分，不比较时间部分。
> 
> 即使时间不同，只要日期相同就返回true。

#### 签名

```apex
public Boolean isSameDay(Date dateToCompare)
```

#### 参数

**dateToCompare**
- 类型：Date
- 描述：要比较的日期

#### 返回值

- 类型：Boolean

#### 示例

```apex
Date myDate = Date.today();
Date dueDate = Date.newInstance(2008, 1, 30);
Boolean dueNow = myDate.isSameDay(dueDate);
```

### month()

返回Date的月份组件（1=一月）。

#### 签名

```apex
public Integer month()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
Date myDate = Date.newInstance(2004, 11, 21);
Integer month = myDate.month();
System.assertEquals(11, month);
```

### monthsBetween(secondDate)

返回调用方法的Date与指定日期之间的月数，忽略天数的差异。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这个方法只计算月份差异，不考虑具体的天数。
> 
> 例如：1月31日到2月1日只算1个月，而不是按天数计算。

#### 签名

```apex
public Integer monthsBetween(Date secondDate)
```

#### 参数

**secondDate**
- 类型：Date
- 描述：要比较的第二个日期

#### 返回值

- 类型：Integer

#### 示例

```apex
Date firstDate = Date.newInstance(2006, 12, 2);
Date secondDate = Date.newInstance(2012, 12, 8);
Integer monthsBetween = firstDate.monthsBetween(secondDate);
System.assertEquals(72, monthsBetween);
```

### newInstance(year, month, day)

从年份、月份（1=一月）和日期的整数表示构造Date。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这是一个静态方法，用于创建Date实例。
> 
> 月份参数使用1-12表示，其中1代表一月。

#### 签名

```apex
public static Date newInstance(Integer year, Integer month, Integer day)
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

- 类型：Date

#### 示例

以下示例创建1960年2月17日的日期：

```apex
Date myDate = Date.newInstance(1960, 2, 17);
```

### parse(stringDate)

从字符串构造Date。字符串的格式取决于本地日期格式。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> parse方法会根据用户的区域设置解析日期字符串。
> 
> 不同区域设置的日期格式可能不同，例如"MM/DD/YYYY"或"DD/MM/YYYY"。

#### 签名

```apex
public static Date parse(String stringDate)
```

#### 参数

**stringDate**
- 类型：String
- 描述：要解析的日期字符串

#### 返回值

- 类型：Date

#### 示例

以下示例在某些区域设置中有效：

```apex
Date myDate = Date.parse('12/27/2009');
```

### today()

返回当前用户时区的当前日期。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这是一个静态方法，返回当前日期，不包含时间信息。
> 
> 返回的日期基于当前用户的时区设置。

#### 签名

```apex
public static Date today()
```

#### 返回值

- 类型：Date

### toStartOfMonth()

返回调用方法的Date所在月份的第一天。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这个方法会返回当月1号的日期，无论原日期是几号。

#### 签名

```apex
public Date toStartOfMonth()
```

#### 返回值

- 类型：Date

#### 示例

```apex
Date myDate = Date.newInstance(1987, 12, 17);
Date firstDate = myDate.toStartOfMonth();
Date expectedDate = Date.newInstance(1987, 12, 1);
System.assertEquals(expectedDate, firstDate);
```

### toStartOfWeek()

根据上下文用户的区域设置返回调用方法的Date所在周的开始。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 周的开始日期因区域设置而异。
> 
> 例如：在美国区域设置中，一周的开始是周日；在欧洲区域设置中，一周的开始是周一。

#### 签名

```apex
public Date toStartOfWeek()
```

#### 返回值

- 类型：Date

#### 示例

例如，在美国区域设置中，一周的开始是周日，而在欧洲区域设置中，一周的开始是周一。例如：

```apex
Date myDate = Date.today();
Date weekStart = myDate.toStartOfWeek();
```

### valueOf(stringDate)

返回包含指定字符串值的Date。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这个方法使用标准的日期时间格式"yyyy-MM-dd HH:mm:ss"。
> 
> 与parse方法不同，valueOf使用固定的格式，不受区域设置影响。

#### 签名

```apex
public static Date valueOf(String stringDate)
```

#### 参数

**stringDate**
- 类型：String
- 描述：要转换的日期字符串

#### 返回值

- 类型：Date

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
Date myDate = Date.valueOf(stringDate);
```

### valueOf(fieldValue)

将指定的对象转换为Date。使用此方法转换历史跟踪字段值或表示Date值的对象。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这个方法主要用于处理历史跟踪字段的OldValue和NewValue。
> 
> 可以处理各种类型的对象，包括Datetime、String等。

#### 签名

```apex
public static Date valueOf(Object fieldValue)
```

#### 参数

**fieldValue**
- 类型：Object
- 描述：要转换的对象

#### 返回值

- 类型：Date

#### 用法

将此方法与历史sObject（如AccountHistory）的OldValue或NewValue字段一起使用，当字段是Date字段时。

#### 示例

此示例将历史跟踪字段转换为Date值：

```apex
List<AccountHistory> ahList = [SELECT Field, OldValue, NewValue FROM AccountHistory];
for(AccountHistory ah : ahList) {
    System.debug('Field: ' + ah.Field);
    if (ah.Field == 'MyDate__c') {
        Date oldValue = Date.valueOf(ah.OldValue);
        Date newValue = Date.valueOf(ah.NewValue);
    }
}
```

### year()

返回Date的年份组件。

#### 签名

```apex
public Integer year()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
Date myDate = Date.newInstance(1988, 12, 17);
System.assertEquals(1988, myDate.year());
```

## 版本行为变更

Date.valueOf在这些版本中已经版本化。

### API版本33.0或更早

如果使用Datetime对象调用Date.valueOf，该方法返回包含小时、分钟、秒和毫秒的Date值。

### API版本34.0到API版本53.0

如果使用Datetime对象调用Date.valueOf，该方法将Datetime转换为不包含时间信息的有效Date，但结果取决于Datetime对象的初始化方式。例如，如果Datetime对象使用Datetime.valueOf(stringDate)初始化，返回的Date值包含时间（小时）信息。如果Datetime对象使用Datetime.newInstance(year, month, day, hour, minute, second)初始化，返回的Date值不包含时间信息。

### API版本54.0及更高版本

如果使用Datetime对象调用Date.valueOf，该方法将对象转换为不包含时间信息的有效Date。

## 注意事项

- Date类只处理日期，不包含时间信息
- 所有日期计算都会自动处理闰年
- 月份参数使用1-12表示，其中1代表一月
- 日期字符串解析受用户区域设置影响
- valueOf方法的行为在不同API版本中有所不同

## 相关链接

- [Date数据类型](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_date_time.htm)
- [日期时间处理](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_date_time_methods.htm)

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm*
