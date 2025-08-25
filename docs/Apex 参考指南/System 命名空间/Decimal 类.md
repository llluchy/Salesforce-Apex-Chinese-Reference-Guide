# Decimal 类

包含 Decimal 原始数据类型的方法。

## 命名空间

System

## 用法

**注意**
数值相等但精度不同的两个 Decimal 对象（如 1.1 和 1.10）通常不具有相同的哈希码。当此类 Decimal 对象在 Set 中用作 Map 键时，请谨慎使用。

有关 Decimal 的更多信息，请参阅 Decimal 数据类型。

## 舍入模式

舍入模式指定能够丢弃精度的数值操作的舍入行为。

每个舍入模式指示如何计算舍入结果的最低有效返回数字。以下是 roundingMode 的有效值。

| 名称 | 描述 |
|------|------|
| CEILING | 向正无穷大舍入。也就是说，如果结果为正，此模式的行为与 UP 舍入模式相同；如果结果为负，其行为与 DOWN 舍入模式相同。请注意，此舍入模式永远不会减少计算值。例如：<br>输入数字 5.5：CEILING 舍入模式结果：6<br>输入数字 1.1：CEILING 舍入模式结果：2<br>输入数字 -1.1：CEILING 舍入模式结果：-1<br>输入数字 -2.7：CEILING 舍入模式结果：-2 |
| DOWN | 向零舍入。此舍入模式在执行前总是丢弃任何分数（小数点）。请注意，此舍入模式永远不会增加计算值的幅度。例如：<br>输入数字 5.5：DOWN 舍入模式结果：5<br>输入数字 1.1：DOWN 舍入模式结果：1<br>输入数字 -1.1：DOWN 舍入模式结果：-1<br>输入数字 -2.7：DOWN 舍入模式结果：-2 |
| FLOOR | 向负无穷大舍入。也就是说，如果结果为正，此模式的行为与 DOWN 舍入模式相同；如果为负，此模式的行为与 UP 舍入模式相同。请注意，此舍入模式永远不会增加计算值。例如：<br>输入数字 5.5：FLOOR 舍入模式结果：5<br>输入数字 1.1：FLOOR 舍入模式结果：1<br>输入数字 -1.1：FLOOR 舍入模式结果：-2<br>输入数字 -2.7：FLOOR 舍入模式结果：-3 |
| HALF_DOWN | 向"最近邻居"舍入，除非两个邻居等距，在这种情况下此模式向下舍入。如果丢弃的分数（小数点）> 0.5，此舍入模式的行为与 UP 舍入模式相同；否则，其行为与 DOWN 舍入模式相同。例如：<br>输入数字 5.5：HALF_DOWN 舍入模式结果：5<br>输入数字 1.1：HALF_DOWN 舍入模式结果：1<br>输入数字 -1.1：HALF_DOWN 舍入模式结果：-1<br>输入数字 -2.7：HALF_DOWN 舍入模式结果：-3 |
| HALF_EVEN | 向"最近邻居"舍入，除非两个邻居等距，在这种情况下，此模式向偶数邻居舍入。如果丢弃分数（小数点）左侧的数字是奇数，此舍入模式的行为与 HALF_UP 舍入模式相同。如果是偶数，其行为与 HALF_DOWN 舍入方法相同。例如：<br>输入数字 5.5：HALF_EVEN 舍入模式结果：6<br>输入数字 1.1：HALF_EVEN 舍入模式结果：1<br>输入数字 -1.1：HALF_EVEN 舍入模式结果：-1<br>输入数字 -2.7：HALF_EVEN 舍入模式结果：-3<br><br>请注意，当在一系列计算中重复应用时，此舍入模式在统计上最小化累积误差。 |
| HALF_UP | 向"最近邻居"舍入，除非两个邻居等距，在这种情况下，向上舍入。如果丢弃的分数（小数点）>= 0.5，此舍入方法的行为与 UP 舍入方法相同；否则，此舍入方法的行为与 DOWN 舍入方法相同。例如：<br>输入数字 5.5：HALF_UP 舍入模式结果：6<br>输入数字 1.1：HALF_UP 舍入模式结果：1<br>输入数字 -1.1：HALF_UP 舍入模式结果：-1<br>输入数字 -2.7：HALF_UP 舍入模式结果：-3 |
| UNNECESSARY | 断言请求的操作具有精确结果，这意味着不需要舍入。如果在产生不精确结果的操作上指定此舍入模式，则抛出 MathException。例如：<br>输入数字 5.5：UNNECESSARY 舍入模式结果：MathException<br>输入数字 1.1：UNNECESSARY 舍入模式结果：MathException<br>输入数字 1.0：UNNECESSARY 舍入模式结果：1<br>输入数字 -1.0：UNNECESSARY 舍入模式结果：-1<br>输入数字 -2.2：UNNECESSARY 舍入模式结果：MathException |
| UP | 远离零舍入。此舍入模式在执行前总是截断任何分数（小数点）。请注意，此舍入模式永远不会减少计算值的幅度。例如：<br>输入数字 5.5：UP 舍入模式结果：6<br>输入数字 1.1：UP 舍入模式结果：2<br>输入数字 -1.1：UP 舍入模式结果：-2<br>输入数字 -2.7：UP 舍入模式结果：-3 |

### 舍入模式示例

```apex
// CEILING 示例
Decimal[] example = new Decimal[]{5.5, 1.1, -1.1, -2.7};
Long[] expected = new Long[]{6, 2, -1, -2};
for(integer x = 0; x < example.size(); x++){
    System.assertEquals(expected[x], example[x].round(System.RoundingMode.CEILING));
}

// DOWN 示例
Decimal[] example = new Decimal[]{5.5, 1.1, -1.1, -2.7};
Long[] expected = new Long[]{5, 1, -1, -2};
for(integer x = 0; x < example.size(); x++){
    System.assertEquals(expected[x], example[x].round(System.RoundingMode.DOWN));
}

// FLOOR 示例
Decimal[] example = new Decimal[]{5.5, 1.1, -1.1, -2.7};
Long[] expected = new Long[]{5, 1, -2, -3};
for(integer x = 0; x < example.size(); x++){
    System.assertEquals(expected[x], example[x].round(System.RoundingMode.FLOOR));
}

// HALF_DOWN 示例
Decimal[] example = new Decimal[]{5.5, 1.1, -1.1, -2.7};
Long[] expected = new Long[]{5, 1, -1, -3};
for(integer x = 0; x < example.size(); x++){
    System.assertEquals(expected[x], example[x].round(System.RoundingMode.HALF_DOWN));
}

// HALF_EVEN 示例
Decimal[] example = new Decimal[]{5.5, 1.1, -1.1, -2.7};
Long[] expected = new Long[]{6, 1, -1, -3};
for(integer x = 0; x < example.size(); x++){
    System.assertEquals(expected[x], example[x].round(System.RoundingMode.HALF_EVEN));
}

// HALF_UP 示例
Decimal[] example = new Decimal[]{5.5, 1.1, -1.1, -2.7};
Long[] expected = new Long[]{6, 1, -1, -3};
for(integer x = 0; x < example.size(); x++){
    System.assertEquals(expected[x], example[x].round(System.RoundingMode.HALF_UP));
}

// UNNECESSARY 示例
Decimal example1 = 5.5;
Decimal example2 = 1.0;
system.assertEquals(1, example2.round(System.RoundingMode.UNNECESSARY));
try{
    example1.round(System.RoundingMode.UNNECESSARY);
} catch(Exception E) {
    system.assertEquals('System.MathException', E.getTypeName());
}

// UP 示例
Decimal[] example = new Decimal[]{5.5, 1.1, -1.1, -2.7};
Long[] expected = new Long[]{6, 2, -2, -3};
for(integer x = 0; x < example.size(); x++){
    System.assertEquals(expected[x], example[x].round(System.RoundingMode.UP));
}
```

## Decimal 方法

以下是 Decimal 的方法。

### abs()
返回 Decimal 的绝对值。

**签名**
```apex
public Decimal abs()
```

**返回值**
- 类型：Decimal

**示例**
```apex
Decimal myDecimal = -6.02214129;
System.assertEquals(6.02214129, myDecimal.abs());
```

### divide(divisor, scale)
将此 Decimal 除以指定的除数，并使用指定的精度设置结果的精度，即小数位数。

**签名**
```apex
public Decimal divide(Decimal divisor, Integer scale)
```

**参数**
- **divisor** - 类型：Decimal
- **scale** - 类型：Integer

**返回值**
- 类型：Decimal

**示例**
```apex
Decimal decimalNumber = 19;
Decimal result = decimalNumber.divide(100, 3);
System.assertEquals(0.190, result);
```

### divide(divisor, scale, roundingMode)
将此 Decimal 除以指定的除数，使用指定的精度设置结果的精度，即小数位数，并在必要时使用舍入模式舍入值。

**签名**
```apex
public Decimal divide(Decimal divisor, Integer scale, System.RoundingMode roundingMode)
```

**参数**
- **divisor** - 类型：Decimal
- **scale** - 类型：Integer
- **roundingMode** - 类型：System.RoundingMode

**返回值**
- 类型：Decimal

**示例**
```apex
Decimal myDecimal = 12.4567;
Decimal divDec = myDecimal.divide(7, 2, System.RoundingMode.UP);
System.assertEquals(divDec, 1.78);
```

### doubleValue()
返回此 Decimal 的 Double 值。

**签名**
```apex
public Double doubleValue()
```

**返回值**
- 类型：Double

**示例**
```apex
Decimal myDecimal = 6.62606957;
Double value = myDecimal.doubleValue();
System.assertEquals(6.62606957, value);
```

### format()
使用上下文用户的区域设置返回此 Decimal 的 String 值。

**签名**
```apex
public String format()
```

**返回值**
- 类型：String

**用法**
如果需要指数，将使用科学记数法。

**示例**
```apex
// 美国区域设置
Decimal myDecimal = 12345.6789;
system.assertEquals('12,345.679', myDecimal.format());
```

### intValue()
返回此 Decimal 的 Integer 值。

**签名**
```apex
public Integer intValue()
```

**返回值**
- 类型：Integer

**示例**
```apex
Decimal myDecimal = 1.602176565;
system.assertEquals(1, myDecimal.intValue());
```

### longValue()
返回此 Decimal 的 Long 值。

**签名**
```apex
public Long longValue()
```

**返回值**
- 类型：Long

**示例**
```apex
Decimal myDecimal = 376.730313461;
system.assertEquals(376, myDecimal.longValue());
```

### pow(exponent)
返回此小数指定幂的值。

**签名**
```apex
public Decimal pow(Integer exponent)
```

**参数**
- **exponent** - 类型：Integer
  - exponent 的值必须在 0 和 32,767 之间。

**返回值**
- 类型：Decimal

**用法**
如果使用 MyDecimal.pow(0)，返回 1。
Math.pow 方法确实接受负值。

**示例**
```apex
Decimal myDecimal = 4.12;
Decimal powDec = myDecimal.pow(2);
System.assertEquals(powDec, 16.9744);
```

### precision()
返回 Decimal 的总位数。

**签名**
```apex
public Integer precision()
```

**返回值**
- 类型：Integer

**示例**
例如，如果 Decimal 值为 123.45，precision 返回 5。如果 Decimal 值为 123.123，precision 返回 6。

```apex
Decimal D1 = 123.45;
Integer precision1 = D1.precision();
system.assertEquals(precision1, 5);
Decimal D2 = 123.123;
Integer precision2 = D2.precision();
system.assertEquals(precision2, 6);
```

### round()
返回此 Decimal 的舍入近似值。使用半偶舍入模式将数字舍入到零小数位，即向"最近邻居"舍入，除非两个邻居等距，在这种情况下，此模式向偶数邻居舍入。

**签名**
```apex
public Long round()
```

**返回值**
- 类型：Long

**用法**
请注意，当在一系列计算中重复应用时，此舍入模式在统计上最小化累积误差。

**示例**
```apex
Decimal D = 4.5;
Long L = D.round();
System.assertEquals(4, L);
Decimal D1 = 5.5;
Long L1 = D1.round();
System.assertEquals(6, L1);
Decimal D2 = 5.2;
Long L2 = D2.round();
System.assertEquals(5, L2);
Decimal D3 = -5.7;
Long L3 = D3.round();
System.assertEquals(-6, L3);
```

### round(roundingMode)
返回此 Decimal 的舍入近似值。使用舍入模式指定的舍入模式将数字舍入到零小数位。

**签名**
```apex
public Long round(System.RoundingMode roundingMode)
```

**参数**
- **roundingMode** - 类型：System.RoundingMode

**返回值**
- 类型：Long

### scale()
返回 Decimal 的精度，即小数位数。

**签名**
```apex
public Integer scale()
```

**返回值**
- 类型：Integer

**示例**
```apex
Decimal myDecimal = 9.27400968;
system.assertEquals(8, myDecimal.scale());
```

### setScale(scale)
返回缩放到指定小数位数的 Decimal，必要时使用半偶舍入。半偶舍入模式向"最近邻居"舍入。如果两个邻居等距，数字向偶数邻居舍入。

**签名**
```apex
public Decimal setScale(Integer scale)
```

**参数**
- **scale** - 类型：Integer
  - scale 的值必须在 –33 和 33 之间。如果 scale 的值为负，您的未缩放值乘以 10 的 scale 否定幂。例如，在此操作之后，d 的值为 4*10^3。

**返回值**
- 类型：Decimal

**用法**
如果您没有为 Decimal 显式设置精度，创建 Decimal 的项目将确定精度。
- 如果 Decimal 作为查询的一部分创建，精度基于查询返回字段的精度。
- 如果 Decimal 从 String 创建，精度是 String 小数点后的字符数。
- 如果 Decimal 从非十进制数字创建，数字首先转换为 String。然后使用小数点后的字符数设置精度。

**示例**
```apex
Decimal myDecimal = 8.987551787;
Decimal setScaled = myDecimal.setScale(3);
System.assertEquals(8.988, setScaled);
Decimal d = 4000;
d = d.setScale(-3);
```

### setScale(scale, roundingMode)
返回缩放到指定小数位数的 Decimal，必要时使用指定的舍入模式。

**签名**
```apex
public Decimal setScale(Integer scale, System.RoundingMode roundingMode)
```

**参数**
- **scale** - 类型：Integer
  - scale 的值必须在 –33 和 33 之间。如果 scale 的值为负，您的未缩放值乘以 10 的 scale 否定幂。例如，在此操作之后，d 的值为 4*10^3。
- **roundingMode** - 类型：System.RoundingMode

**返回值**
- 类型：Decimal

**用法**
如果您没有为 Decimal 显式设置精度，创建 Decimal 的项目将确定精度。
- 如果 Decimal 作为查询的一部分创建，精度基于查询返回字段的精度。
- 如果 Decimal 从 String 创建，精度是 String 小数点后的字符数。
- 如果 Decimal 从非十进制数字创建，数字首先转换为 String。然后使用小数点后的字符数设置精度。

**示例**
```apex
Decimal d = 4000;
d = d.setScale(-3);
```

### stripTrailingZeros()
返回移除任何尾随零的 Decimal。

**签名**
```apex
public Decimal stripTrailingZeros()
```

**返回值**
- 类型：Decimal

**示例**
```apex
Decimal myDecimal = 1.10000;
Decimal stripped = myDecimal.stripTrailingZeros();
System.assertEquals(stripped, 1.1);
```

### toPlainString()
返回此 Decimal 的 String 值，不使用科学记数法。

**签名**
```apex
public String toPlainString()
```

**返回值**
- 类型：String

**示例**
```apex
Decimal myDecimal = 12345.6789;
System.assertEquals('12345.6789', myDecimal.toPlainString());
```

### valueOf(doubleToDecimal)
返回包含指定 Double 值的 Decimal。

**签名**
```apex
public static Decimal valueOf(Double doubleToDecimal)
```

**参数**
- **doubleToDecimal** - 类型：Double

**返回值**
- 类型：Decimal

**示例**
```apex
Double myDouble = 2.718281828459045;
Decimal myDecimal = Decimal.valueOf(myDouble);
System.assertEquals(2.718281828459045, myDecimal);
```

### valueOf(longToDecimal)
返回包含指定 Long 值的 Decimal。

**签名**
```apex
public static Decimal valueOf(Long longToDecimal)
```

**参数**
- **longToDecimal** - 类型：Long

**返回值**
- 类型：Decimal

**示例**
```apex
Long myLong = 299792458;
Decimal myDecimal = Decimal.valueOf(myLong);
System.assertEquals(299792458, myDecimal);
```

### valueOf(stringToDecimal)
返回包含指定 String 值的 Decimal。与 Java 中一样，字符串被解释为表示有符号 Decimal。

**签名**
```apex
public static Decimal valueOf(String stringToDecimal)
```

**参数**
- **stringToDecimal** - 类型：String

**返回值**
- 类型：Decimal

**示例**
```apex
String temp = '12.4567';
Decimal myDecimal = Decimal.valueOf(temp);
```
