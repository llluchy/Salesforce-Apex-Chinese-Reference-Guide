# Boolean 类

包含Boolean原始数据类型的方法。

## 命名空间

System

## 用法

Boolean类提供了将字符串和对象转换为Boolean值的方法。所有方法都是静态的。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Boolean类是Salesforce中处理布尔值（true/false）的工具类。
> 
> 它主要用于将字符串或对象转换为Boolean类型，特别是在处理历史跟踪字段时很有用。

## 示例

以下示例展示如何将字符串转换为Boolean值：

```apex
Boolean b = Boolean.valueOf('true');
System.assertEquals(true, b);
```

## Boolean 方法

以下是Boolean的方法。所有方法都是静态的。

### valueOf(stringToBoolean)

将指定的字符串转换为Boolean值，如果指定的字符串值为true则返回true。否则返回false。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这个方法用于将字符串转换为Boolean值。
> 
> 只有字符串"true"（不区分大小写）才会返回true，其他任何字符串都会返回false。

#### 签名

```apex
public static Boolean valueOf(String stringToBoolean)
```

#### 参数

**stringToBoolean**
- 类型：String
- 描述：要转换为Boolean的字符串

#### 返回值

- 类型：Boolean

#### 用法

如果指定的参数为null，此方法会抛出异常。

#### 示例

```apex
Boolean b1 = Boolean.valueOf('true');    // 返回 true
Boolean b2 = Boolean.valueOf('TRUE');    // 返回 true
Boolean b3 = Boolean.valueOf('false');   // 返回 false
Boolean b4 = Boolean.valueOf('hello');   // 返回 false
```

### valueOf(fieldValue)

将指定的对象转换为Boolean值。使用此方法转换历史跟踪字段值或表示Boolean值的对象。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这个方法主要用于处理历史跟踪字段（如AccountHistory）的OldValue和NewValue字段。
> 
> 当字段类型对应Boolean类型（如复选框字段）时，这个方法特别有用。

#### 签名

```apex
public static Boolean valueOf(Object fieldValue)
```

#### 参数

**fieldValue**
- 类型：Object
- 描述：要转换为Boolean的对象

#### 返回值

- 类型：Boolean

#### 用法

将此方法与历史sObject的OldValue或NewValue字段一起使用，如AccountHistory，当字段类型对应Boolean类型时，如复选框字段。

#### 示例

```apex
List<AccountHistory> ahlist = 
     [SELECT Field, OldValue, NewValue FROM AccountHistory];
for(AccountHistory ah : ahlist) {
   System.debug('Field: ' + ah.Field);
   if (ah.field == 'IsPlatinum__c') {
      Boolean oldValue = Boolean.valueOf(ah.OldValue);
      Boolean newValue = Boolean.valueOf(ah.NewValue);
      System.debug('Old Value: ' + oldValue);
      System.debug('New Value: ' + newValue);
   }
}
```

## 注意事项

- 所有Boolean方法都是静态的
- `valueOf(String)` 方法对null参数会抛出异常
- 字符串转换不区分大小写，"TRUE"、"true"、"True"都会返回true
- 在处理历史跟踪字段时，建议先检查字段类型是否为Boolean

## 相关链接

- [原始数据类型文档](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_primitives.htm)
- [历史跟踪字段文档](https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_objects_accounthistory.htm)

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm*
