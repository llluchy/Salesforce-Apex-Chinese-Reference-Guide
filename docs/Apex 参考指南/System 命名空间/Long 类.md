# Long 类

包含 Long 原始数据类型的方法。

## 命名空间

System

## 用法

有关 Long 的更多信息，请参阅 Long 数据类型。

## Long 方法

以下是 Long 的方法。

### format()
使用上下文用户的区域设置返回此 Long 的 String 格式。

**签名**
```apex
public String format()
```

**返回值**
- 类型：String

**示例**
```apex
Long myLong = 4271990;
system.assertEquals('4,271,990', myLong.format());
```

### intValue()
返回此 Long 的 Integer 值。

**签名**
```apex
public Integer intValue()
```

**返回值**
- 类型：Integer

**示例**
```apex
Long myLong = 7191991;    
Integer value = myLong.intValue();
system.assertEquals(7191991, myLong.intValue());
```

### valueOf(stringToLong)
返回包含指定 String 值的 Long。与 Java 中一样，字符串被解释为表示有符号十进制 Long。

**签名**
```apex
public static Long valueOf(String stringToLong)
```

**参数**
- **stringToLong** - 类型：String

**返回值**
- 类型：Long

**示例**
```apex
Long L1 = long.valueOf('123456789');
```

