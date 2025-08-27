# Integer 类

包含 Integer 原始数据类型的方法。

## 命名空间

System

## 用法

有关整数的更多信息，请参阅 Integer 数据类型。

## Integer 方法

以下是 Integer 的方法。

### format()
使用上下文用户的区域设置将整数作为字符串返回。

**签名**
```apex
public String format()
```

**返回值**
- 类型：String

**示例**
```apex
integer myInt = 22;
system.assertEquals('22', myInt.format());
```

### valueOf(stringToInteger)
返回包含指定 String 值的 Integer。与 Java 中一样，String 被解释为表示有符号十进制整数。

**签名**
```apex
public static Integer valueOf(String stringToInteger)
```

**参数**
- **stringToInteger** - 类型：String

**返回值**
- 类型：Integer

**示例**
```apex
Integer myInt = Integer.valueOf('123');
```

### valueOf(fieldValue)
将指定的对象转换为 Integer。使用此方法转换历史跟踪字段值或表示 Integer 值的对象。

**签名**
```apex
public static Integer valueOf(Object fieldValue)
```

**参数**
- **fieldValue** - 类型：Object

**返回值**
- 类型：Integer

**用法**
当字段类型对应于 Integer 类型（如数字字段）时，将此方法与历史 sObject（如 AccountHistory）的 OldValue 或 NewValue 字段一起使用。

**示例**
```apex
Integer myInt = Integer.valueOf('123');
List<AccountHistory> ahlist = [SELECT Field, OldValue, NewValue FROM AccountHistory];
for(AccountHistory ah : ahlist) {
    System.debug('Field: ' + ah.Field);
    if (ah.field == 'NumberOfEmployees') {
        Integer oldValue = Integer.valueOf(ah.OldValue);
        Integer newValue = Integer.valueOf(ah.NewValue);
    }
}
```

