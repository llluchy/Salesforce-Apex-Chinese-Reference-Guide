# String 类方法详细说明（第三部分）

## indexOf(substring)

返回指定子字符串第一次出现的索引。如果子字符串不出现，此方法返回-1。

### 签名
```apex
public Integer indexOf(String substring)
```

### 参数
**substring**
- 类型：String

### 返回值
- 类型：Integer

### 示例
```apex
String myString1 = 'abcde';
String myString2 = 'cd';
Integer result = myString1.indexOf(mystring2);
System.assertEquals(2, result);
```

## indexOf(substring, index)

从给定索引点开始返回指定子字符串第一次出现的从零开始的索引。如果子字符串不出现，此方法返回-1。

### 签名
```apex
public Integer indexOf(String substring, Integer index)
```

### 参数
**substring**
- 类型：String

**index**
- 类型：Integer

### 返回值
- 类型：Integer

### 示例
```apex
String myString1 = 'abcdabcd';
String myString2 = 'ab';
Integer result = myString1.indexOf(mystring2, 1);
System.assertEquals(4, result);
```

## indexOfAny(substring)

返回substring中指定的任何字符第一次出现的从零开始的索引。如果没有字符出现，返回-1。

### 签名
```apex
public Integer indexOfAny(String substring)
```

### 参数
**substring**
- 类型：String

### 返回值
- 类型：Integer

### 示例
```apex
String s1 = 'abcd';
String s2 = 'xc';
Integer result = s1.indexOfAny(s2);
System.assertEquals(2, result);
```

## indexOfAnyBut(substring)

返回不在指定substring中的字符第一次出现的从零开始的索引。否则，返回-1。

### 签名
```apex
public Integer indexOfAnyBut(String substring)
```

### 参数
**substring**
- 类型：String

### 返回值
- 类型：Integer

### 示例
```apex
String s1 = 'abcd';
String s2 = 'xc';
Integer result = s1.indexOfAnyBut(s2);
System.assertEquals(0, result);
```

## indexOfChar(character)

返回与指定字符值对应的字符第一次出现的索引。

### 签名
```apex
public Integer indexOfChar(Integer character)
```

### 参数
**character**
- 类型：Integer
- 字符串中字符的整数值。

### 返回值
- 类型：Integer
- 指定字符第一次出现的索引，如果未找到字符，则为-1。

### 用法
此方法返回的索引是Unicode代码单元。

### 示例
```apex
String str = '\u03A9 is Ω (Omega)';
// 返回0，这是第一个字符。
System.debug('indexOfChar(937)=' + str.indexOfChar(937));
// 输出：
// indexOfChar(937)=0
```

## indexOfChar(character, startIndex)

从指定索引开始返回与指定字符值对应的字符第一次出现的索引。

### 签名
```apex
public Integer indexOfChar(Integer character, Integer startIndex)
```

### 参数
**character**
- 类型：Integer
- 要查找的字符的整数值。

**startIndex**
- 类型：Integer
- 开始搜索的索引。

### 返回值
- 类型：Integer
- 从指定起始索引开始的指定字符第一次出现的索引，如果未找到字符，则为-1。

### 用法
此方法返回的索引是Unicode代码单元。

### 示例
此示例显示搜索Omega字符索引的不同方法。第一次调用indexOfChar没有指定起始索引，因此返回的索引是0，这是整个字符串中Omega的第一次出现。后续调用指定起始索引以查找从指定索引开始的子字符串中Omega的出现。

```apex
String str = 'Ω and \u03A9 and Ω';
System.debug('indexOfChar(937)=' + str.indexOfChar(937));
System.debug('indexOfChar(937,1)=' + str.indexOfChar(937,1));
System.debug('indexOfChar(937,10)=' + str.indexOfChar(937,10));
// 输出：
// indexOfChar(937)=0
// indexOfChar(937,1)=6, (对应转义形式\u03A9)
// indexOfChar(937,10)=12
```

## indexOfDifference(stringToCompare)

返回当前String开始与指定String不同的字符的从零开始的索引。

### 签名
```apex
public Integer indexOfDifference(String stringToCompare)
```

### 参数
**stringToCompare**
- 类型：String

### 返回值
- 类型：Integer

### 示例
```apex
String s1 = 'abcd';
String s2 = 'abxc';
Integer result = s1.indexOfDifference(s2);
System.assertEquals(2, result);
```

## indexOfIgnoreCase(substring)

不考虑大小写返回指定子字符串第一次出现的从零开始的索引。如果子字符串不出现，此方法返回-1。

### 签名
```apex
public Integer indexOfIgnoreCase(String substring)
```

### 参数
**substring**
- 类型：String

### 返回值
- 类型：Integer

### 示例
```apex
String s1 = 'abcd';
String s2 = 'BC';
Integer result = s1.indexOfIgnoreCase(s2, 0);
System.assertEquals(1, result);
```

## indexOfIgnoreCase(substring, startPosition)

从索引i点开始不考虑大小写返回指定子字符串第一次出现的从零开始的索引。如果子字符串不出现，此方法返回-1。

### 签名
```apex
public Integer indexOfIgnoreCase(String substring, Integer startPosition)
```

### 参数
**substring**
- 类型：String

**startPosition**
- 类型：Integer

### 返回值
- 类型：Integer

## isAllLowerCase()

如果当前String中的所有字符都是小写，则返回true；否则，返回false。

### 签名
```apex
public Boolean isAllLowerCase()
```

### 返回值
- 类型：Boolean

### 示例
```apex
String allLower = 'abcde';
System.assert(allLower.isAllLowerCase());
```

## isAllUpperCase()

如果当前String中的所有字符都是大写，则返回true；否则，返回false。

### 签名
```apex
public Boolean isAllUpperCase()
```

### 返回值
- 类型：Boolean

### 示例
```apex
String allUpper = 'ABCDE';
System.assert(allUpper.isAllUpperCase());
```

## isAlpha()

如果当前String中的所有字符都只是Unicode字母，则返回true；否则，返回false。

### 签名
```apex
public Boolean isAlpha()
```

### 返回值
- 类型：Boolean

### 示例
```apex
// 仅字母
String s1 = 'abc';
// 返回true
Boolean b1 = 
   s1.isAlpha();
System.assertEquals(
   true, b1);
// 字母和数字
String s2 = 'abc 21';
// 返回false
Boolean b2 = 
   s2.isAlpha();
System.assertEquals(
   false, b2);
```

## isAlphaSpace()

如果当前String中的所有字符都只是Unicode字母或空格，则返回true；否则，返回false。

### 签名
```apex
public Boolean isAlphaSpace()
```

### 返回值
- 类型：Boolean

### 示例
```apex
String alphaSpace = 'aA Bb';
System.assert(alphaSpace.isAlphaSpace());
String notAlphaSpace = 'ab 12';
System.assert(!notAlphaSpace.isAlphaSpace());
notAlphaSpace = 'aA$Bb';
System.assert(!notAlphaSpace.isAlphaSpace());
```

## isAlphanumeric()

如果当前String中的所有字符都只是Unicode字母或数字，则返回true；否则，返回false。

### 签名
```apex
public Boolean isAlphanumeric()
```

### 返回值
- 类型：Boolean

### 用法
Unicode罗马数字被分类为数字形式类型，而不是数字类型。因此，如果对包含罗马数字的String使用isAlphanumeric()方法，将返回false。有关Unicode分类，请参阅Unicode字符代码图表。

### 示例
```apex
// 仅字母
String s1 = 'abc';
// 返回true
Boolean b1 = 
   s1.isAlphanumeric();
System.assertEquals(
   true, b1);
// 字母和数字
String s2 = 'abc021';
// 返回true
Boolean b2 = 
   s2.isAlphanumeric();
System.assertEquals(
   true, b2);
```

## isAlphanumericSpace()

如果当前String中的所有字符都只是Unicode字母、数字或空格，则返回true；否则，返回false。

### 签名
```apex
public Boolean isAlphanumericSpace()
```

### 返回值
- 类型：Boolean

### 用法
Unicode罗马数字被分类为数字形式类型，而不是数字类型。因此，如果对包含罗马数字的String使用isAlphanumericSpace()方法，将返回false。有关Unicode分类，请参阅Unicode字符代码图表。

### 示例
```apex
String alphanumSpace = 'AE 86';
System.assert(alphanumSpace.isAlphanumericSpace());
String notAlphanumSpace = 'aA$12';
System.assert(!notAlphanumSpace.isAlphanumericSpace());
```

## isAsciiPrintable()

如果当前String仅包含ASCII可打印字符，则返回true；否则，返回false。

### 签名
```apex
public Boolean isAsciiPrintable()
```

### 返回值
- 类型：Boolean

### 示例
```apex
String ascii = 'abcd1234!@#$%^&*()`~-_+={[}]|:<,>.?';
System.assert(ascii.isAsciiPrintable());
String notAscii = '√';
System.assert(!notAscii.isAsciiPrintable());
```

## isBlank(inputString)

如果指定的String是空白、空('')或null，则返回true；否则，返回false。

### 签名
```apex
public static Boolean isBlank(String inputString)
```

### 参数
**inputString**
- 类型：String

### 返回值
- 类型：Boolean

### 示例
```apex
String blank = '';
String nullString = null;
String whitespace = '  ';
System.assert(String.isBlank(blank));
System.assert(String.isBlank(nullString));
System.assert(String.isBlank(whitespace));
String alpha = 'Hello';
System.assert(!String.isBlank(alpha));
```

## isEmpty(inputString)

如果指定的String为空('')或null，则返回true；否则，返回false。

### 签名
```apex
public static Boolean isEmpty(String inputString)
```

### 参数
**inputString**
- 类型：String

### 返回值
- 类型：Boolean

### 示例
```apex
String empty = '';
String nullString = null;
System.assert(String.isEmpty(empty));
System.assert(String.isEmpty(nullString));
String whitespace = '  ';
String alpha = 'Hello';
System.assert(!String.isEmpty(whitespace));
System.assert(!String.isEmpty(alpha));
```

## isNotBlank(inputString)

如果指定的String不是空白、不是空('')且不是null，则返回true；否则，返回false。

### 签名
```apex
public static Boolean isNotBlank(String inputString)
```

### 参数
**inputString**
- 类型：String

### 返回值
- 类型：Boolean

### 示例
```apex
String alpha = 'Hello world!';
System.assert(String.isNotBlank(alpha));
String blank = '';
String nullString = null;
String whitespace = '  ';
System.assert(!String.isNotBlank(blank));
System.assert(!String.isNotBlank(nullString));
System.assert(!String.isNotBlank(whitespace));
```

## isNotEmpty(inputString)

如果指定的String不为空('')且不为null，则返回true；否则，返回false。

### 签名
```apex
public static Boolean isNotEmpty(String inputString)
```

### 参数
**inputString**
- 类型：String

### 返回值
- 类型：Boolean

### 示例
```apex
String whitespace = '  ';
String alpha = 'Hello world!';
System.assert(String.isNotEmpty(whitespace));
System.assert(String.isNotEmpty(alpha));
String empty = '';
String nullString = null;
System.assert(!String.isNotEmpty(empty));
System.assert(!String.isNotEmpty(nullString));
```

## isNumeric()

如果当前String仅包含Unicode数字，则返回true；否则，返回false。

### 签名
```apex
public Boolean isNumeric()
```

### 返回值
- 类型：Boolean

### 用法
小数点(1.2)不是Unicode数字。

### 示例
```apex
String numeric = '1234567890';
System.assert(numeric.isNumeric());
String alphanumeric = 'R32';
String decimalPoint = '1.2';
System.assert(!alphanumeric.isNumeric());
System.assert(!decimalpoint.isNumeric());
```

## isNumericSpace()

如果当前String仅包含Unicode数字或空格，则返回true；否则，返回false。

### 签名
```apex
public Boolean isNumericSpace()
```

### 返回值
- 类型：Boolean

### 用法
小数点(1.2)不是Unicode数字。

### 示例
```apex
String numericSpace = '1 2 3';
System.assert(numericSpace.isNumericspace());
String notNumericspace = 'FD3S FC3S';
System.assert(!notNumericspace.isNumericspace());
```

## isWhitespace()

如果当前String仅包含空白字符或为空，则返回true；否则，返回false。

### 签名
```apex
public Boolean isWhitespace()
```

### 返回值
- 类型：Boolean

### 示例
```apex
String whitespace = ' ';
String blank = '';
System.assert(whitespace.isWhitespace());
System.assert(blank.isWhitespace());
String alphanum = 'SIL80';
System.assert(!alphanum.isWhitespace());
```

## join(iterableObj, separator)

将指定可迭代对象（如List）的元素连接成单个String，用指定的分隔符分隔。

### 签名
```apex
public static String join(Object iterableObj, String separator)
```

### 参数
**iterableObj**
- 类型：Object

**separator**
- 类型：String

### 返回值
- 类型：String

### 示例
```apex
List<Integer> li = new 
   List<Integer> 
   {10, 20, 30};
String s = String.join(
   li, '/');
System.assertEquals(
   '10/20/30', s);
```

## lastIndexOf(substring)

返回指定子字符串最后一次出现的索引。如果子字符串不出现，此方法返回-1。

### 签名
```apex
public Integer lastIndexOf(String substring)
```

### 参数
**substring**
- 类型：String

### 返回值
- 类型：Integer

### 示例
```apex
String s1 = 'abcdefgc';
Integer i1 = s1.lastIndexOf('c');
System.assertEquals(7, i1);
```

## lastIndexOf(substring, endPosition)

从索引0处的字符开始到指定索引结束，返回指定子字符串最后一次出现的索引。

### 签名
```apex
public Integer lastIndexOf(String substring, Integer endPosition)
```

### 参数
**substring**
- 类型：String

**endPosition**
- 类型：Integer

### 返回值
- 类型：Integer

### 用法
如果子字符串不出现或endPosition为负数，此方法返回-1。如果endPosition大于当前String中的最后一个索引，则搜索整个String。

### 示例
```apex
String s1 = 'abcdaacd';
Integer i1 = s1.lastIndexOf('c', 7);
System.assertEquals(6, i1);
Integer i2 = s1.lastIndexOf('c', 3);
System.assertEquals(2, i2);
```

## lastIndexOfChar(character)

返回与指定字符值对应的字符最后一次出现的索引。

### 签名
```apex
public Integer lastIndexOfChar(Integer character)
```

### 参数
**character**
- 类型：Integer
- 字符串中字符的整数值。

### 返回值
- 类型：Integer
- 指定字符最后一次出现的索引，如果未找到字符，则为-1。

### 用法
此方法返回的索引是Unicode代码单元。

### 示例
```apex
String str = '\u03A9 is Ω (Omega)';
// 获取Omega的最后一次出现。
System.assertEquals(5, str.lastIndexOfChar(937));
```

## lastIndexOfChar(character, endIndex)

从指定索引开始返回与指定字符值对应的字符最后一次出现的索引。

### 签名
```apex
public Integer lastIndexOfChar(Integer character, Integer endIndex)
```

### 参数
**character**
- 类型：Integer
- 要查找的字符的整数值。

**endIndex**
- 类型：Integer
- 结束搜索的索引。

### 返回值
- 类型：Integer
- 从指定起始索引开始的指定字符最后一次出现的索引，如果未找到字符，则为-1。

### 用法
此方法返回的索引是Unicode代码单元。

### 示例
此示例显示搜索Omega字符最后一次出现的不同方法。第一次调用lastIndexOfChar没有指定结束索引，因此返回的索引是12，这是整个字符串中Omega的最后一次出现。后续调用指定结束索引以查找子字符串中Omega的最后一次出现。

```apex
String str = 'Ω and \u03A9 and Ω';
System.assertEquals(12, str.lastIndexOfChar(937));
System.assertEquals(6, str.lastIndexOfChar(937,11));
System.assertEquals(0, str.lastIndexOfChar(937,5));
```

## lastIndexOfIgnoreCase(substring)

不考虑大小写返回指定子字符串最后一次出现的索引。

### 签名
```apex
public Integer lastIndexOfIgnoreCase(String substring)
```

### 参数
**substring**
- 类型：String

### 返回值
- 类型：Integer

### 用法
如果子字符串不出现，此方法返回-1。

### 示例
```apex
String s1 = 'abcdaacd';
Integer i1 = s1.lastIndexOfIgnoreCase('DAAC');
System.assertEquals(3, i1);
```

## lastIndexOfIgnoreCase(substring, endPosition)

不考虑大小写返回指定子字符串最后一次出现的索引，从索引0处的字符开始到指定索引结束。

### 签名
```apex
public Integer lastIndexOfIgnoreCase(String substring, Integer endPosition)
```

### 参数
**substring**
- 类型：String

**endPosition**
- 类型：Integer

### 返回值
- 类型：Integer

### 用法
如果子字符串不出现或endPosition为负数，此方法返回-1。如果endPosition大于当前String中的最后一个索引，则搜索整个String。

### 示例
```apex
String s1 = 'abcdaacd';
Integer i1 = s1.lastIndexOfIgnoreCase('C', 7);
System.assertEquals(6, i1);
```

## left(length)

返回当前String最左边的字符，具有指定长度。

### 签名
```apex
public String left(Integer length)
```

### 参数
**length**
- 类型：Integer

### 返回值
- 类型：String

### 用法
如果length大于String大小，则返回整个String。

### 示例
```apex
String s1 = 'abcdaacd';
String s2 = s1.left(3);
System.assertEquals('abc', s2);
```

## leftPad(length)

返回当前String，在左侧用空格填充，具有指定长度。

### 签名
```apex
public String leftPad(Integer length)
```

### 参数
**length**
- 类型：Integer

### 用法
如果length小于或等于当前String大小，则返回整个String而不进行空格填充。

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'abc';
String s2 = s1.leftPad(5);
System.assertEquals('  abc', s2);
```

## leftPad(length, padStr)

返回当前String，在左侧用String padStr填充，具有指定长度。

### 签名
```apex
public String leftPad(Integer length, String padStr)
```

### 参数
**length**
- 类型：Integer

**padStr**
- 类型：String
- 用于填充的字符串；如果为null或空，则视为单个空格。

### 用法
如果length小于或等于当前String大小，则返回整个String而不进行空格填充。

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'abc';
String s2 = 'xy';
String s3 = s1.leftPad(7,s2);
System.assertEquals('xyxyabc', s3);
```

## length()

返回String中包含的16位Unicode字符的数量。

### 签名
```apex
public Integer length()
```

### 返回值
- 类型：Integer

### 示例
```apex
String myString = 'abcd';
Integer result = myString.length();
System.assertEquals(result, 4);
```

## mid(startIndex, length)

返回一个新的String，从指定的从零开始的startIndex处的字符开始，具有length指定的字符数。

### 签名
```apex
public String mid(Integer startIndex, Integer length)
```

### 参数
**startIndex**
- 类型：Integer
- 如果startIndex为负数，则视为零。

**length**
- 类型：Integer
- 如果length为负数或零，则返回空String。如果length大于剩余字符，则返回String的其余部分。

### 返回值
- 类型：String

### 用法
此方法类似于substring(startIndex)和substring(startIndex, endIndex)方法，但第二个参数是要返回的字符数。

### 示例
```apex
String s = 'abcde';
String s2 = s.mid(2, 3);
System.assertEquals(
   'cde', s2);
```

## normalizeSpace()

返回当前String，删除了前导、尾随和重复的空白字符。

### 签名
```apex
public String normalizeSpace()
```

### 返回值
- 类型：String

### 用法
此方法规范化以下空白字符：空格、制表符(\t)、换行符(\n)、回车符(\r)和换页符(\f)。

### 示例
```apex
String s1 = 
   'Salesforce \t     force.com';
String s2 = 
   s1.normalizeSpace();
System.assertEquals(
   'Salesforce force.com', s2);
```

## offsetByCodePoints(index, codePointOffset)

返回Unicode代码点的索引，该代码点从给定索引开始偏移指定的代码点数。

### 签名
```apex
public Integer offsetByCodePoints(Integer index, Integer codePointOffset)
```

### 参数
**index**
- 类型：Integer
- 字符串中的起始索引。

**codePointOffset**
- 类型：Integer
- 要偏移的代码点数。

### 返回值
- 类型：Integer
- 对应于添加到偏移量的起始索引的索引。

### 用法
由index和codePointOffset指定的文本范围内的未配对代理算作一个代码点。

### 示例
此示例在具有起始索引0（从第一个字符开始）和三个代码点偏移量的字符串上调用offsetByCodePoints。字符串包含一个转义形式的补充字符序列（一对字符）。从字符串开头开始偏移三个代码点时，返回的代码点索引是四。

```apex
String str = 'A \uD835\uDD0A BC';
System.assertEquals(4, str.offsetByCodePoints(0,3));
```

## remove(substring)

删除指定子字符串的所有出现并返回String结果。

### 签名
```apex
public String remove(String substring)
```

### 参数
**substring**
- 类型：String

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'Salesforce and force.com';
String s2 = 
   s1.remove('force');
System.assertEquals(
   'Sales and .com', s2);
```

## removeEnd(substring)

仅当指定子字符串出现在String末尾时才删除它。

### 签名
```apex
public String removeEnd(String substring)
```

### 参数
**substring**
- 类型：String

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'Salesforce and force.com';
String s2 = 
   s1.removeEnd('.com');
System.assertEquals(
   'Salesforce and force', s2);
```

## removeEndIgnoreCase(substring)

仅当指定子字符串出现在String末尾时才删除它，使用不区分大小写的匹配。

### 签名
```apex
public String removeEndIgnoreCase(String substring)
```

### 参数
**substring**
- 类型：String

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'Salesforce and force.com';
String s2 = s1.removeEndIgnoreCase('.COM');
System.assertEquals('Salesforce and force', s2);
```

## removeStart(substring)

仅当指定子字符串出现在String开头时才删除它。

### 签名
```apex
public String removeStart(String substring)
```

### 参数
**substring**
- 类型：String

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'Salesforce and force.com';
String s2 = 
   s1.removeStart('Sales');
System.assertEquals(
   'force and force.com', s2);
```

## removeStartIgnoreCase(substring)

仅当指定子字符串出现在String开头时才删除它，使用不区分大小写的匹配。

### 签名
```apex
public String removeStartIgnoreCase(String substring)
```

### 参数
**substring**
- 类型：String

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'Salesforce and force.com';
String s2 = 
   s1.removeStartIgnoreCase('SALES');
System.assertEquals(
   'force and force.com', s2);
```

## repeat(numberOfTimes)

返回当前String重复指定次数的结果。

### 签名
```apex
public String repeat(Integer numberOfTimes)
```

### 参数
**numberOfTimes**
- 类型：Integer

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'SFDC';
String s2 = s1.repeat(2);
System.assertEquals('SFDCSFDC', s2);
```

## repeat(separator, numberOfTimes)

返回当前String重复指定次数的结果，使用指定的分隔符分隔重复的String。

### 签名
```apex
public String repeat(String separator, Integer numberOfTimes)
```

### 参数
**separator**
- 类型：String

**numberOfTimes**
- 类型：Integer

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'SFDC';
String s2 = 
   s1.repeat('-', 2);
System.assertEquals(
   'SFDC-SFDC', s2);
```

