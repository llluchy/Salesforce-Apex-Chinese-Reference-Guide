# String 类方法详细说明（第一部分）

## capitalize()

返回当前String，第一个字母更改为标题大小写。

### 签名
```apex
public String capitalize()
```

### 返回值
- 类型：String

### 用法
此方法基于Java方法Character.toTitleCase(char)。

### 示例
```apex
String s = 'hello maximillian';
String s2 = s.capitalize();
System.assertEquals('Hello maximillian', s2);
```

## center(size)

返回当前String的版本，具有指定大小，在左侧和右侧用空格填充，使其出现在中心。如果指定的大小小于当前String大小，则返回整个String而不添加空格。

### 签名
```apex
public String center(Integer size)
```

### 参数
**size**
- 类型：Integer

### 返回值
- 类型：String

### 示例
```apex
String s = 'hello';
String s2 = s.center(9);
System.assertEquals('  hello  ', s2);
```

## center(size, paddingString)

返回当前String的版本，具有指定大小，在左侧和右侧用指定的String填充，使其出现在中心。如果指定的大小小于当前String大小，则返回整个String而不填充。

### 签名
```apex
public String center(Integer size, String paddingString)
```

### 参数
**size**
- 类型：Integer

**paddingString**
- 类型：String

### 返回值
- 类型：String

### 示例
```apex
String s = 'hello';
String s2 = s.center(9, '-');
System.assertEquals('--hello--', s2);
```

## charAt(index)

返回指定索引处字符的值。

### 签名
```apex
public Integer charAt(Integer index)
```

### 参数
**index**
- 类型：Integer
- 要获取值的字符的索引。

### 返回值
- 类型：Integer
- 字符的整数值。

### 用法
charAt方法返回指定索引指向的字符的值。如果索引指向代理对的开头（高代理代码点），此方法只返回高代理代码点。要返回与代理对对应的补充代码点，请调用codePointAt。

### 示例
此示例获取索引0处第一个字符的值。

此示例显示charAt和codePointAt之间的差异。示例调用这些方法处理转义的补充Unicode字符。charAt(0)返回高代理值，对应\uD835。codePointAt(0)返回整个代理对的值。

```apex
String str = 'Ω is Omega.';
System.assertEquals(937, str.charAt(0));

String str = '\uD835\uDD0A';
System.assertEquals(55349, str.charAt(0), 
    'charAt(0) didn\'t return the high surrogate.');
System.assertEquals(120074, str.codePointAt(0),
    'codePointAt(0) didn\'t return the entire two-character supplementary value.');
```

## codePointAt(index)

返回指定索引处的Unicode代码点值。

### 签名
```apex
public Integer codePointAt(Integer index)
```

### 参数
**index**
- 类型：Integer
- 字符串中字符（Unicode代码单元）的索引。索引范围从零到字符串长度减一。

### 返回值
- 类型：Integer
- 指定索引处的Unicode代码点值。

### 用法
如果索引指向代理对的开头（高代理代码点），并且以下索引处的字符值指向低代理代码点，此方法返回与此代理对对应的补充代码点。否则，此方法返回给定索引处的字符值。

有关Unicode和代理对的更多信息，请参阅Unicode Consortium。

### 示例
此示例获取索引0处第一个字符的代码点值，这是转义的Omega字符。此外，示例获取索引20处的代码点，对应转义的补充Unicode字符（一对字符）。最后，它验证Omega的转义和未转义形式具有相同的代码点值。

此示例中的补充字符（\\uD835\\uDD0A）对应数学哥特体大写G：

```apex
String str = '\u03A9 is Ω (Omega), and \uD835\uDD0A ' + 
    ' is Fraktur Capital G.';
System.assertEquals(937, str.codePointAt(0));
System.assertEquals(120074, str.codePointAt(20));

// 转义或未转义形式的相同字符具有相同的代码点
System.assertEquals(str.codePointAt(0), str.codePointAt(5));
```

## codePointBefore(index)

返回指定索引之前出现的Unicode代码点值。

### 签名
```apex
public Integer codePointBefore(Integer index)
```

### 参数
**index**
- 类型：Integer
- Unicode代码点之前的索引，该代码点将被返回。索引范围从一到字符串长度。

### 返回值
- 类型：Integer
- 指定索引之前出现的字符或Unicode代码点值。

### 用法
如果索引-1处的字符值是低代理代码点，并且索引-2不为负数且此索引位置的字符是高代理代码点，此方法返回与此代理对对应的补充代码点。如果索引-1处的字符值是未配对的低代理或高代理代码点，则返回代理值。

有关Unicode和代理对的更多信息，请参阅Unicode Consortium。

### 示例
此示例获取第一个字符（索引1之前）的代码点值，这是转义的Omega字符。此外，示例获取索引20处的代码点，对应转义的补充字符（索引22之前的两个字符）。

```apex
String str = '\u03A9 is Ω (Omega), and \uD835\uDD0A ' + 
    ' is Fraktur Capital G.';
System.assertEquals(937, str.codePointBefore(1));
System.assertEquals(120074, str.codePointBefore(22));
```

## codePointCount(beginIndex, endIndex)

返回指定文本范围内的Unicode代码点数量。

### 签名
```apex
public Integer codePointCount(Integer beginIndex, Integer endIndex)
```

### 参数
**beginIndex**
- 类型：Integer
- 范围内第一个字符的索引。

**endIndex**
- 类型：Integer
- 范围之后最后一个字符的索引。

### 返回值
- 类型：Integer
- 指定范围内的Unicode代码点数量。

### 用法
指定范围从beginIndex开始，到endIndex—1结束。文本范围内未配对的代理算作一个代码点。

### 示例
此示例写入包含转义Unicode字符的子字符串的代码点计数，以及包含Unicode补充字符的另一个子字符串的代码点计数，这些字符算作一个代码点。

```apex
String str = '\u03A9 and \uD835\uDD0A characters.';
System.debug('Count of code points for ' + str.substring(0,1) 
             + ': ' + str.codePointCount(0,1));
System.debug('Count of code points for ' + str.substring(6,8) 
             + ': ' + str.codePointCount(6,8));
// 输出：
// Count of code points for Ω: 1
// Count of code points for 𝔊 : 1
```

## compareTo(secondString)

基于String中每个字符的Unicode值，按字典顺序比较两个字符串。

### 签名
```apex
public Integer compareTo(String secondString)
```

### 参数
**secondString**
- 类型：String

### 返回值
- 类型：Integer

### 用法
结果是：
- 如果调用该方法的String在字典顺序上先于secondString，则为负整数
- 如果调用该方法的String在字典顺序上后于secondString，则为正整数
- 如果String相等，则为零

如果没有索引位置String不同，则较短的String在字典顺序上先于较长的String。

注意，当equals方法返回true时，此方法返回0。

### 示例
```apex
String myString1 = 'abcde';
String myString2 = 'abcd';
Integer result = 
   myString1.compareTo(myString2);
System.assertEquals(result, 1);
```

## contains(substring)

当且仅当调用该方法的String包含substring中指定的字符序列时，返回true。

### 签名
```apex
public Boolean contains(String substring)
```

### 参数
**substring**
- 类型：String

### 返回值
- 类型：Boolean

### 示例
```apex
String myString1 = 'abcde';
String myString2 = 'cd';
Boolean result = 
   myString1.contains(myString2);
System.assertEquals(result, true);
```

## containsAny(inputString)

如果当前String包含指定String中的任何字符，则返回true；否则，返回false。

### 签名
```apex
public Boolean containsAny(String inputString)
```

### 参数
**inputString**
- 类型：String

### 返回值
- 类型：Boolean

### 示例
```apex
String s = 'hello';
Boolean b1 = s.containsAny('hx');
Boolean b2 = s.containsAny('x');
System.assertEquals(true, b1);
System.assertEquals(false, b2);
```

## containsIgnoreCase(substring)

如果当前String包含指定的字符序列而不考虑大小写，则返回true；否则，返回false。

### 签名
```apex
public Boolean containsIgnoreCase(String substring)
```

### 参数
**substring**
- 类型：String

### 返回值
- 类型：Boolean

### 示例
```apex
String s = 'hello';
Boolean b = s.containsIgnoreCase('HE');
System.assertEquals(
   true,
   b);
```

## containsNone(inputString)

如果当前String不包含指定String中的任何字符，则返回true；否则，返回false。

### 签名
```apex
public Boolean containsNone(String inputString)
```

### 参数
**inputString**
- 类型：String
- 如果inputString是空字符串或当前String为空，此方法返回true。如果inputString为null，此方法会抛出运行时异常。

### 返回值
- 类型：Boolean

### 示例
```apex
String s1 = 'abcde';
System.assert(s1.containsNone('fg'));
```

## containsOnly(inputString)

如果当前String仅包含来自指定字符序列的字符而不包含任何其他字符，则返回true；否则，返回false。

### 签名
```apex
public Boolean containsOnly(String inputString)
```

### 参数
**inputString**
- 类型：String

### 返回值
- 类型：Boolean

### 示例
```apex
String s1 = 'abba';
String s2 = 'abba xyz';
Boolean b1 = 
   s1.containsOnly('abcd');
System.assertEquals(
   true,
   b1);
Boolean b2 = 
   s2.containsOnly('abcd');
System.assertEquals(
   false,
   b2);
```

## containsWhitespace()

如果当前String包含任何空白字符，则返回true；否则，返回false。

### 签名
```apex
public Boolean containsWhitespace()
```

### 返回值
- 类型：Boolean

### 示例
```apex
String s = 'Hello Jane';
System.assert(s.containsWhitespace()); //true
s = 'HelloJane ';
System.assert(s.containsWhitespace()); //true
s = ' HelloJane';
System.assert(s.containsWhitespace()); //true
s = 'HelloJane';
System.assert(!s.containsWhitespace()); //false
```

## countMatches(substring)

返回指定子字符串在当前String中出现的次数。

### 签名
```apex
public Integer countMatches(String substring)
```

### 参数
**substring**
- 类型：String

### 返回值
- 类型：Integer

### 示例
```apex
String s = 'Hello Jane';
System.assertEquals(1, s.countMatches('Hello'));
s = 'Hello Hello';
System.assertEquals(2, s.countMatches('Hello'));
s = 'Hello hello';
System.assertEquals(1, s.countMatches('Hello'));
```

## deleteWhitespace()

返回当前String的版本，删除了所有空白字符。

### 签名
```apex
public String deleteWhitespace()
```

### 返回值
- 类型：String

### 示例
```apex
String s1 = ' Hello Jane ';
String s2 = 'HelloJane';
System.assertEquals(s2, s1.deleteWhitespace());
```

## difference(secondString)

返回当前String与指定String之间的差异。

### 签名
```apex
public String difference(String secondString)
```

### 参数
**secondString**
- 类型：String
- 如果secondString是空字符串，此方法返回空字符串。如果secondString为null，此方法会抛出运行时异常。

### 返回值
- 类型：String

### 示例
```apex
String s = 'Hello Jane';
String d1 = 
   s.difference('Hello Max');
System.assertEquals(
   'Max',
   d1);
String d2 = 
   s.difference('Goodbye');
System.assertEquals(
   'Goodbye',
   d2);
```

## endsWith(suffix)

如果调用该方法的String以指定的后缀结尾，则返回true。

### 签名
```apex
public Boolean endsWith(String suffix)
```

### 参数
**suffix**
- 类型：String

### 返回值
- 类型：Boolean

### 示例
```apex
String s = 'Hello Jason';
System.assert(s.endsWith('Jason'));
```

## endsWithIgnoreCase(suffix)

如果当前String以指定的后缀结尾，则返回true；否则，返回false。

### 签名
```apex
public Boolean endsWithIgnoreCase(String suffix)
```

### 参数
**suffix**
- 类型：String

### 返回值
- 类型：Boolean

### 示例
```apex
String s = 'Hello Jason';
System.assert(s.endsWithIgnoreCase('jason'));
```

