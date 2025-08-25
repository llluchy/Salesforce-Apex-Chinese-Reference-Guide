# Double 类

包含 Double 原始数据类型的方法。

## 命名空间

System

## 用法

有关 Double 的更多信息，请参阅 Double 数据类型。

## Double 方法

以下是 Double 的方法。

### format()
使用上下文用户的区域设置返回此 Double 的 String 值。

**签名**
```apex
public String format()
```

**返回值**
- 类型：String

**示例**
```apex
Double myDouble = 1261992;
system.assertEquals('1,261,992', myDouble.format());
```

### intValue()
通过将此 Double 转换为 Integer 来返回其 Integer 值。

**签名**
```apex
public Integer intValue()
```

**返回值**
- 类型：Integer

**示例**
```apex
Double DD1 = double.valueOf('3.14159');
Integer value = DD1.intValue();
system.assertEquals(value, 3);
```

### longValue()
返回此 Double 的 Long 值。

**签名**
```apex
public Long longValue()
```

**返回值**
- 类型：Long

**示例**
```apex
Double myDouble = 421994;
Long value = myDouble.longValue();
System.assertEquals(421994, value);
```

### round()
返回最接近此 Double 值的 Long。

**签名**
```apex
public Long round()
```

**返回值**
- 类型：Long

**示例**
```apex
Double D1 = 4.5;
Long L1 = D1.round();
System.assertEquals(5, L1);
Double D2 = 4.2;
Long L2 = D2.round();
System.assertEquals(4, L2);
Double D3 = -4.7;
Long L3 = D3.round();
System.assertEquals(-5, L3);
```

### valueOf(stringToDouble)
返回包含指定 String 值的 Double。与 Java 中一样，String 被解释为表示有符号十进制。

**签名**
```apex
public static Double valueOf(String stringToDouble)
```

**参数**
- **stringToDouble** - 类型：String

**返回值**
- 类型：Double

**示例**
```apex
Double DD1 = double.valueOf('3.14159');
```

### valueOf(fieldValue)
将指定的对象转换为 Double 值。使用此方法转换历史跟踪字段值或表示 Double 值的对象。

**签名**
```apex
public static Double valueOf(Object fieldValue)
```

**参数**
- **fieldValue** - 类型：Object

**返回值**
- 类型：Double

**用法**
当字段类型对应于 Double 类型（如数字字段）时，将此方法与历史 sObject（如 AccountHistory）的 OldValue 或 NewValue 字段一起使用。

**示例**
```apex
Double DD1 = double.valueOf('3.14159');
List<AccountHistory> ahlist = [SELECT Field, OldValue, NewValue FROM AccountHistory];
for(AccountHistory ah : ahlist) {
    System.debug('Field: ' + ah.Field);
    if (ah.field == 'NumberOfEmployees') {
        Double oldValue = Double.valueOf(ah.OldValue);
        Double newValue = Double.valueOf(ah.NewValue);
    }
}
```
