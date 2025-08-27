# Math 类

包含数学运算的方法。

## 命名空间

System

## Math 字段

以下是 Math 的字段。

### E
返回数学常数 e，它是自然对数的底数。

**签名**
```apex
public static final Double E
```

**属性值**
- 类型：Double

### PI
返回数学常数 pi，它是圆的周长与其直径的比值。

**签名**
```apex
public static final Double PI
```

**属性值**
- 类型：Double

## Math 方法

以下是 Math 的方法。所有方法都是静态的。

### abs(decimalValue)
返回指定 Decimal 的绝对值。

**签名**
```apex
public static Decimal abs(Decimal decimalValue)
```

**参数**
- **decimalValue** - 类型：Decimal

**返回值**
- 类型：Decimal

### abs(doubleValue)
返回指定 Double 的绝对值。

**签名**
```apex
public static Double abs(Double doubleValue)
```

**参数**
- **doubleValue** - 类型：Double

**返回值**
- 类型：Double

### abs(integerValue)
返回指定 Integer 的绝对值。

**签名**
```apex
public static Integer abs(Integer integerValue)
```

**参数**
- **integerValue** - 类型：Integer

**返回值**
- 类型：Integer

**示例**
```apex
Integer i = -42;
Integer i2 = math.abs(i);
system.assertEquals(i2, 42);
```

### abs(longValue)
返回指定 Long 的绝对值。

**签名**
```apex
public static Long abs(Long longValue)
```

**参数**
- **longValue** - 类型：Long

**返回值**
- 类型：Long

### acos(decimalAngle)
返回角度的反余弦，范围在 0.0 到 pi 之间。

**签名**
```apex
public static Decimal acos(Decimal decimalAngle)
```

**参数**
- **decimalAngle** - 类型：Decimal

**返回值**
- 类型：Decimal

### acos(doubleAngle)
返回角度的反余弦，范围在 0.0 到 pi 之间。

**签名**
```apex
public static Double acos(Double doubleAngle)
```

**参数**
- **doubleAngle** - 类型：Double

**返回值**
- 类型：Double

### asin(decimalAngle)
返回角度的反正弦，范围在 -pi/2 到 pi/2 之间。

**签名**
```apex
public static Decimal asin(Decimal decimalAngle)
```

**参数**
- **decimalAngle** - 类型：Decimal

**返回值**
- 类型：Decimal

### asin(doubleAngle)
返回角度的反正弦，范围在 -pi/2 到 pi/2 之间。

**签名**
```apex
public static Double asin(Double doubleAngle)
```

**参数**
- **doubleAngle** - 类型：Double

**返回值**
- 类型：Double

### atan(decimalAngle)
返回角度的反正切，范围在 -pi/2 到 pi/2 之间。

**签名**
```apex
public static Decimal atan(Decimal decimalAngle)
```

**参数**
- **decimalAngle** - 类型：Decimal

**返回值**
- 类型：Decimal

### atan(doubleAngle)
返回角度的反正切，范围在 -pi/2 到 pi/2 之间。

**签名**
```apex
public static Double atan(Double doubleAngle)
```

**参数**
- **doubleAngle** - 类型：Double

**返回值**
- 类型：Double

### atan2(xCoordinate, yCoordinate)
将直角坐标（xCoordinate 和 yCoordinate）转换为极坐标（r 和 theta）。此方法通过在 -pi 到 pi 范围内计算 xCoordinate/yCoordinate 的反正切来计算相位 theta。

**签名**
```apex
public static Decimal atan2(Decimal xCoordinate, Decimal yCoordinate)
```

**参数**
- **xCoordinate** - 类型：Decimal
- **yCoordinate** - 类型：Decimal

**返回值**
- 类型：Decimal

### atan2(xCoordinate, yCoordinate)
将直角坐标（xCoordinate 和 yCoordinate）转换为极坐标（r 和 theta）。此方法通过在 -pi 到 pi 范围内计算 xCoordinate/yCoordinate 的反正切来计算相位 theta。

**签名**
```apex
public static Double atan2(Double xCoordinate, Double yCoordinate)
```

**参数**
- **xCoordinate** - 类型：Double
- **yCoordinate** - 类型：Double

**返回值**
- 类型：Double

### cbrt(decimalValue)
返回指定 Decimal 的立方根。负值的立方根是该值幅度的立方根的负值。

**签名**
```apex
public static Decimal cbrt(Decimal decimalValue)
```

**参数**
- **decimalValue** - 类型：Decimal

**返回值**
- 类型：Decimal

### cbrt(doubleValue)
返回指定 Double 的立方根。负值的立方根是该值幅度的立方根的负值。

**签名**
```apex
public static Double cbrt(Double doubleValue)
```

**参数**
- **doubleValue** - 类型：Double

**返回值**
- 类型：Double

### ceil(decimalValue)
返回不小于参数且等于数学整数的最小（最接近负无穷大）Decimal。

**签名**
```apex
public static Decimal ceil(Decimal decimalValue)
```

**参数**
- **decimalValue** - 类型：Decimal

**返回值**
- 类型：Decimal

### ceil(doubleValue)
返回不小于参数且等于数学整数的最小（最接近负无穷大）Double。

**签名**
```apex
public static Double ceil(Double doubleValue)
```

**参数**
- **doubleValue** - 类型：Double

**返回值**
- 类型：Double

### cos(decimalAngle)
返回由 decimalAngle 指定的角度的三角余弦。

**签名**
```apex
public static Decimal cos(Decimal decimalAngle)
```

**参数**
- **decimalAngle** - 类型：Decimal

**返回值**
- 类型：Decimal

### cos(doubleAngle)
返回由 doubleAngle 指定的角度的三角余弦。

**签名**
```apex
public static Double cos(Double doubleAngle)
```

**参数**
- **doubleAngle** - 类型：Double

**返回值**
- 类型：Double

### cosh(decimalAngle)
返回 decimalAngle 的双曲余弦。d 的双曲余弦定义为 (e^x + e^(-x))/2，其中 e 是欧拉数。

**签名**
```apex
public static Decimal cosh(Decimal decimalAngle)
```

**参数**
- **decimalAngle** - 类型：Decimal

**返回值**
- 类型：Decimal

### cosh(doubleAngle)
返回 doubleAngle 的双曲余弦。d 的双曲余弦定义为 (e^x + e^(-x))/2，其中 e 是欧拉数。

**签名**
```apex
public static Double cosh(Double doubleAngle)
```

**参数**
- **doubleAngle** - 类型：Double

**返回值**
- 类型：Double

### exp(exponentDecimal)
返回欧拉数 e 的指定 Decimal 次幂。

**签名**
```apex
public static Decimal exp(Decimal exponentDecimal)
```

**参数**
- **exponentDecimal** - 类型：Decimal

**返回值**
- 类型：Decimal

### exp(exponentDouble)
返回欧拉数 e 的指定 Double 次幂。

**签名**
```apex
public static Double exp(Double exponentDouble)
```

**参数**
- **exponentDouble** - 类型：Double

**返回值**
- 类型：Double

### floor(decimalValue)
返回不大于参数且等于数学整数的最大（最接近正无穷大）Decimal。

**签名**
```apex
public static Decimal floor(Decimal decimalValue)
```

**参数**
- **decimalValue** - 类型：Decimal

**返回值**
- 类型：Decimal

### floor(doubleValue)
返回不大于参数且等于数学整数的最大（最接近正无穷大）Double。

**签名**
```apex
public static Double floor(Double doubleValue)
```

**参数**
- **doubleValue** - 类型：Double

**返回值**
- 类型：Double

### log(decimalValue)
返回指定 Decimal 的自然对数（底数 e）。

**签名**
```apex
public static Decimal log(Decimal decimalValue)
```

**参数**
- **decimalValue** - 类型：Decimal

**返回值**
- 类型：Decimal

### log(doubleValue)
返回指定 Double 的自然对数（底数 e）。

**签名**
```apex
public static Double log(Double doubleValue)
```

**参数**
- **doubleValue** - 类型：Double

**返回值**
- 类型：Double

### log10(decimalValue)
返回指定 Decimal 的对数（底数 10）。

**签名**
```apex
public static Decimal log10(Decimal decimalValue)
```

**参数**
- **decimalValue** - 类型：Decimal

**返回值**
- 类型：Decimal

### log10(doubleValue)
返回指定 Double 的对数（底数 10）。

**签名**
```apex
public static Double log10(Double doubleValue)
```

**参数**
- **doubleValue** - 类型：Double

**返回值**
- 类型：Double

### max(decimalValue1, decimalValue2)
返回两个指定 Decimal 中较大的一个。

**签名**
```apex
public static Decimal max(Decimal decimalValue1, Decimal decimalValue2)
```

**参数**
- **decimalValue1** - 类型：Decimal
- **decimalValue2** - 类型：Decimal

**返回值**
- 类型：Decimal

**示例**
```apex
Decimal larger = math.max(12.3, 156.6);
system.assertEquals(larger, 156.6);
```

### max(doubleValue1, doubleValue2)
返回两个指定 Double 中较大的一个。

**签名**
```apex
public static Double max(Double doubleValue1, Double doubleValue2)
```

**参数**
- **doubleValue1** - 类型：Double
- **doubleValue2** - 类型：Double

**返回值**
- 类型：Double

### max(integerValue1, integerValue2)
返回两个指定 Integer 中较大的一个。

**签名**
```apex
public static Integer max(Integer integerValue1, Integer integerValue2)
```

**参数**
- **integerValue1** - 类型：Integer
- **integerValue2** - 类型：Integer

**返回值**
- 类型：Integer

### max(longValue1, longValue2)
返回两个指定 Long 中较大的一个。

**签名**
```apex
public static Long max(Long longValue1, Long longValue2)
```

**参数**
- **longValue1** - 类型：Long
- **longValue2** - 类型：Long

**返回值**
- 类型：Long

### min(decimalValue1, decimalValue2)
返回两个指定 Decimal 中较小的一个。

**签名**
```apex
public static Decimal min(Decimal decimalValue1, Decimal decimalValue2)
```

**参数**
- **decimalValue1** - 类型：Decimal
- **decimalValue2** - 类型：Decimal

**返回值**
- 类型：Decimal

**示例**
```apex
Decimal smaller = math.min(12.3, 156.6);
system.assertEquals(smaller, 12.3);
```

### min(doubleValue1, doubleValue2)
返回两个指定 Double 中较小的一个。

**签名**
```apex
public static Double min(Double doubleValue1, Double doubleValue2)
```

**参数**
- **doubleValue1** - 类型：Double
- **doubleValue2** - 类型：Double

**返回值**
- 类型：Double

### min(integerValue1, integerValue2)
返回两个指定 Integer 中较小的一个。

**签名**
```apex
public static Integer min(Integer integerValue1, Integer integerValue2)
```

**参数**
- **integerValue1** - 类型：Integer
- **integerValue2** - 类型：Integer

**返回值**
- 类型：Integer

### min(longValue1, longValue2)
返回两个指定 Long 中较小的一个。

**签名**
```apex
public static Long min(Long longValue1, Long longValue2)
```

**参数**
- **longValue1** - 类型：Long
- **longValue2** - 类型：Long

**返回值**
- 类型：Long

### mod(integerValue1, integerValue2)
返回 integerValue1 除以 integerValue2 的余数。

**签名**
```apex
public static Integer mod(Integer integerValue1, Integer integerValue2)
```

**参数**
- **integerValue1** - 类型：Integer
- **integerValue2** - 类型：Integer

**返回值**
- 类型：Integer

**示例**
```apex
Integer remainder = math.mod(12, 2);
system.assertEquals(remainder, 0);
Integer remainder2 = math.mod(8, 3);
system.assertEquals(remainder2, 2);
```

### mod(longValue1, longValue2)
返回 longValue1 除以 longValue2 的余数。

**签名**
```apex
public static Long mod(Long longValue1, Long longValue2)
```

**参数**
- **longValue1** - 类型：Long
- **longValue2** - 类型：Long

**返回值**
- 类型：Long

### pow(doubleValue, exponent)
返回第一个 Double 的 exponent 次幂的值。

**签名**
```apex
public static Double pow(Double doubleValue, Double exponent)
```

**参数**
- **doubleValue** - 类型：Double
- **exponent** - 类型：Double

**返回值**
- 类型：Double

### random()
返回一个大于等于 0.0 且小于 1.0 的正 Double。

**签名**
```apex
public static Double random()
```

**返回值**
- 类型：Double

### rint(decimalValue)
返回在值上最接近 decimalValue 且等于数学整数的值。

**签名**
```apex
public static Decimal rint(Decimal decimalValue)
```

**参数**
- **decimalValue** - 类型：Decimal

**返回值**
- 类型：Decimal

### rint(doubleValue)
返回在值上最接近 doubleValue 且等于数学整数的值。

**签名**
```apex
public static Double rint(Double doubleValue)
```

**参数**
- **doubleValue** - 类型：Double

**返回值**
- 类型：Double

### round(doubleValue)
请勿使用。此方法自 Winter '08 版本起已弃用。请改用 Math.roundToLong。返回最接近指定 Double 的 Integer。如果结果小于 -2,147,483,648 或大于 2,147,483,647，Apex 会生成错误。

**签名**
```apex
public static Integer round(Double doubleValue)
```

**参数**
- **doubleValue** - 类型：Double

**返回值**
- 类型：Integer

### round(decimalValue)
返回此 Decimal 的舍入近似值。数字使用半偶舍入模式舍入到零位小数，即它向"最近邻"舍入，除非两个邻点等距，在这种情况下，此模式向偶数邻点舍入。如果结果小于 -2,147,483,648 或大于 2,147,483,647，Apex 会生成错误。

**签名**
```apex
public static Integer round(Decimal decimalValue)
```

**参数**
- **decimalValue** - 类型：Decimal

**返回值**
- 类型：Integer

**用法**
注意，当在一系列计算中重复应用时，此舍入模式在统计上最小化累积误差。

**示例**
```apex
Decimal d1 = 4.5;
Integer i1 = Math.round(d1);
System.assertEquals(4, i1);
Decimal d2 = 5.5;
Integer i2 = Math.round(d2);
System.assertEquals(6, i2);
```

### roundToLong(decimalValue)
返回此 Decimal 的舍入近似值。数字使用半偶舍入模式舍入到零位小数，即它向"最近邻"舍入，除非两个邻点等距，在这种情况下，此模式向偶数邻点舍入。

**签名**
```apex
public static Long roundToLong(Decimal decimalValue)
```

**参数**
- **decimalValue** - 类型：Decimal

**返回值**
- 类型：Long

**用法**
注意，当在一系列计算中重复应用时，此舍入模式在统计上最小化累积误差。

**示例**
```apex
Decimal d1 = 4.5;
Long i1 = Math.roundToLong(d1);
System.assertEquals(4, i1);
Decimal d2 = 5.5;
Long i2 = Math.roundToLong(d2);
System.assertEquals(6, i2);
```

### roundToLong(doubleValue)
返回最接近指定 Double 的 Long。

**签名**
```apex
public static Long roundToLong(Double doubleValue)
```

**参数**
- **doubleValue** - 类型：Double

**返回值**
- 类型：Long

### signum(decimalValue)
返回指定 Decimal 的符号函数，如果 decimalValue 为 0 则为 0，如果 decimalValue 大于 0 则为 1.0，如果 decimalValue 小于 0 则为 -1.0。

**签名**
```apex
public static Decimal signum(Decimal decimalValue)
```

**参数**
- **decimalValue** - 类型：Decimal

**返回值**
- 类型：Decimal

### signum(doubleValue)
返回指定 Double 的符号函数，如果 doubleValue 为 0 则为 0，如果 doubleValue 大于 0 则为 1.0，如果 doubleValue 小于 0 则为 -1.0。

**签名**
```apex
public static Double signum(Double doubleValue)
```

**参数**
- **doubleValue** - 类型：Double

**返回值**
- 类型：Double

### sin(decimalAngle)
返回由 decimalAngle 指定的角度的三角正弦。

**签名**
```apex
public static Decimal sin(Decimal decimalAngle)
```

**参数**
- **decimalAngle** - 类型：Decimal

**返回值**
- 类型：Decimal

### sin(doubleAngle)
返回由 doubleAngle 指定的角度的三角正弦。

**签名**
```apex
public static Double sin(Double doubleAngle)
```

**参数**
- **doubleAngle** - 类型：Double

**返回值**
- 类型：Double

### sinh(decimalAngle)
返回 decimalAngle 的双曲正弦。decimalAngle 的双曲正弦定义为 (e^x - e^(-x))/2，其中 e 是欧拉数。

**签名**
```apex
public static Decimal sinh(Decimal decimalAngle)
```

**参数**
- **decimalAngle** - 类型：Decimal

**返回值**
- 类型：Decimal

### sinh(doubleAngle)
返回 doubleAngle 的双曲正弦。doubleAngle 的双曲正弦定义为 (e^x - e^(-x))/2，其中 e 是欧拉数。

**签名**
```apex
public static Double sinh(Double doubleAngle)
```

**参数**
- **doubleAngle** - 类型：Double

**返回值**
- 类型：Double

### sqrt(decimalValue)
返回 decimalValue 的正确舍入正平方根。

**签名**
```apex
public static Decimal sqrt(Decimal decimalValue)
```

**参数**
- **decimalValue** - 类型：Decimal

**返回值**
- 类型：Decimal

### sqrt(doubleValue)
返回 doubleValue 的正确舍入正平方根。

**签名**
```apex
public static Double sqrt(Double doubleValue)
```

**参数**
- **doubleValue** - 类型：Double

**返回值**
- 类型：Double

### tan(decimalAngle)
返回由 decimalAngle 指定的角度的三角正切。

**签名**
```apex
public static Decimal tan(Decimal decimalAngle)
```

**参数**
- **decimalAngle** - 类型：Decimal

**返回值**
- 类型：Decimal

### tan(doubleAngle)
返回由 doubleAngle 指定的角度的三角正切。

**签名**
```apex
public static Double tan(Double doubleAngle)
```

**参数**
- **doubleAngle** - 类型：Double

**返回值**
- 类型：Double

### tanh(decimalAngle)
返回 decimalAngle 的双曲正切。decimalAngle 的双曲正切定义为 (e^x - e^(-x))/(e^x + e^(-x))，其中 e 是欧拉数。换句话说，它等效于 sinh(x)/cosh(x)。精确 tanh 的绝对值始终小于 1。

**签名**
```apex
public static Decimal tanh(Decimal decimalAngle)
```

**参数**
- **decimalAngle** - 类型：Decimal

**返回值**
- 类型：Decimal

### tanh(doubleAngle)
返回 doubleAngle 的双曲正切。doubleAngle 的双曲正切定义为 (e^x - e^(-x))/(e^x + e^(-x))，其中 e 是欧拉数。换句话说，它等效于 sinh(x)/cosh(x)。精确 tanh 的绝对值始终小于 1。

**签名**
```apex
public static Double tanh(Double doubleAngle)
```

**参数**
- **doubleAngle** - 类型：Double

**返回值**
- 类型：Double
