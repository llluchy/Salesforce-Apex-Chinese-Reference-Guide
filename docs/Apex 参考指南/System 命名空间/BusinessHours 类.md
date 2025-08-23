# BusinessHours 类

使用BusinessHours方法来设置客户支持团队运营的营业时间。

## 命名空间

System

## 用法

BusinessHours类提供了一系列静态方法，用于处理营业时间相关的计算和判断。

## BusinessHours 方法

以下是BusinessHours的方法。所有方法都是静态的。

### add(businessHoursId, startDate, intervalMilliseconds)

从开始Datetime开始，仅在营业时间内添加时间间隔。返回本地时区中的结果Datetime。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> add方法会在营业时间内添加指定的时间间隔，跳过非营业时间。
> 
> 例如：如果从周五下午5点开始添加8小时，会跳过周末，到下周一上午9点。

#### 签名

```apex
public static Datetime add(String businessHoursId, Datetime startDate, Long intervalMilliseconds)
```

#### 参数

**businessHoursId**
- 类型：String
- 描述：营业时间ID

**startDate**
- 类型：Datetime
- 描述：开始日期时间

**intervalMilliseconds**
- 类型：Long
- 描述：时间间隔（毫秒）

#### 返回值

- 类型：Datetime

#### 用法

间隔值应以毫秒为单位提供，但小于一分钟的时间精度会被忽略。

### addGmt(businessHoursId, startDate, intervalMilliseconds)

从开始Datetime开始，仅在营业时间内添加毫秒间隔。返回GMT中的结果Datetime。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> addGmt方法与add方法类似，但返回GMT时区的时间。
> 
> 适用于需要统一时区处理的场景。

#### 签名

```apex
public static Datetime addGmt(String businessHoursId, Datetime startDate, Long intervalMilliseconds)
```

#### 参数

**businessHoursId**
- 类型：String
- 描述：营业时间ID

**startDate**
- 类型：Datetime
- 描述：开始日期时间

**intervalMilliseconds**
- 类型：Long
- 描述：时间间隔（毫秒）

#### 返回值

- 类型：Datetime

### diff(businessHoursId, startDate, endDate)

返回基于特定营业时间的开始和结束Datetime之间的毫秒差异。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> diff方法计算两个时间在营业时间内的实际差异。
> 
> 只计算营业时间内的时长，非营业时间会被排除。

#### 签名

```apex
public static Long diff(String businessHoursId, Datetime startDate, Datetime endDate)
```

#### 参数

**businessHoursId**
- 类型：String
- 描述：营业时间ID

**startDate**
- 类型：Datetime
- 描述：开始日期时间

**endDate**
- 类型：Datetime
- 描述：结束日期时间

#### 返回值

- 类型：Long

### isWithin(businessHoursId, targetDate)

如果指定的目标日期在营业时间内，则返回true。假期包含在计算中。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> isWithin方法用于判断某个时间是否在营业时间内。
> 
> 会自动考虑节假日，如果目标日期是节假日，会返回false。

#### 签名

```apex
public static Boolean isWithin(String businessHoursId, Datetime targetDate)
```

#### 参数

**businessHoursId**
- 类型：String
- 描述：营业时间ID

**targetDate**
- 类型：Datetime
- 描述：要验证的日期

#### 返回值

- 类型：Boolean

#### 示例

以下示例查找给定时间是否在默认营业时间内：

```apex
// 获取默认营业时间
BusinessHours bh = [SELECT Id FROM BusinessHours WHERE IsDefault=true];
// 在本地时区创建2013年5月28日凌晨1:06:08的Datetime
Datetime targetTime = Datetime.newInstance(2013, 5, 28, 1, 6, 8);
// 查找时间是否在默认营业时间内
Boolean isWithin = BusinessHours.isWithin(bh.Id, targetTime);
```

### nextStartDate(businessHoursId, targetDate)

从指定的目标日期开始，返回营业时间重新开放的下一个日期。如果指定的目标日期在营业时间内，则返回此目标日期。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> nextStartDate方法用于查找下一个营业开始时间。
> 
> 如果目标时间已经在营业时间内，直接返回目标时间；否则返回下一个营业开始时间。

#### 签名

```apex
public static Datetime nextStartDate(String businessHoursId, Datetime targetDate)
```

#### 参数

**businessHoursId**
- 类型：String
- 描述：营业时间ID

**targetDate**
- 类型：Datetime
- 描述：用作开始日期以获取下一个日期的日期

#### 返回值

- 类型：Datetime

#### 示例

以下示例从目标日期开始查找营业时间重新开放的下一个日期。如果目标日期在给定营业时间内，则返回目标日期。返回的时间在本地时区中：

```apex
// 获取默认营业时间
BusinessHours bh = [SELECT Id FROM BusinessHours WHERE IsDefault=true];
// 在本地时区创建2013年5月28日凌晨1:06:08的Datetime
Datetime targetTime = Datetime.newInstance(2013, 5, 28, 1, 6, 8);
// 从targetTime开始，查找营业时间重新开放的下一个日期。如果在营业时间内则返回该时间。
// 返回的时间将在本地时区中
Datetime nextStart = BusinessHours.nextStartDate(bh.Id, targetTime);
```

## 注意事项

- BusinessHours类的所有方法都是静态方法
- 时间间隔以毫秒为单位，但小于一分钟的精度会被忽略
- 营业时间计算会自动排除非营业时间和节假日
- add方法返回本地时区时间，addGmt方法返回GMT时区时间
- isWithin方法会考虑节假日设置
- nextStartDate方法如果目标时间已在营业时间内，会直接返回目标时间

## 相关链接

- [BusinessHours对象](https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_objects_businesshours.htm)
- [营业时间设置](https://help.salesforce.com/s/articleView?id=sf.admin_business_hours.htm)
- [时间计算](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_date_time_methods.htm)

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_classes_businesshours.htm*
