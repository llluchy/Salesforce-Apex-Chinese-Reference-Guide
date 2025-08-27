# String 类方法详细说明（第四部分）

## replace(target, replacement)

将字符串中与字面目标序列target匹配的每个子字符串替换为指定的字面替换序列replacement。

### 签名
```apex
public String replace(String target, String replacement)
```

### 参数
**target**
- 类型：String

**replacement**
- 类型：String

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'abcdbca';
String target = 'bc';
String replacement = 'xy';
String s2 = s1.replace(target, replacement);
System.assertEquals('axydxya', s2);
```

## replaceAll(regExp, replacement)

将字符串中与正则表达式regExp匹配的每个子字符串替换为替换序列replacement。

### 签名
```apex
public String replaceAll(String regExp, String replacement)
```

### 参数
**regExp**
- 类型：String

**replacement**
- 类型：String

### 返回值
- 类型：String

### 用法
有关正则表达式的信息，请参阅Java Pattern类。

### 示例
```apex
String s1 = 'a b c 5 xyz';
String regExp = '[a-zA-Z]';
String replacement = '1';
String s2 = s1.replaceAll(regExp, replacement);
System.assertEquals('1 1 1 5 111', s2);
```

## replaceFirst(regExp, replacement)

将字符串中与正则表达式regExp匹配的第一个子字符串替换为替换序列replacement。

### 签名
```apex
public String replaceFirst(String regExp, String replacement)
```

### 参数
**regExp**
- 类型：String

**replacement**
- 类型：String

### 返回值
- 类型：String

### 用法
有关正则表达式的信息，请参阅Java Pattern类。

### 示例
```apex
String s1 = 'a b c 11 xyz';
String regExp = '[a-zA-Z]{2}';
String replacement = '2';
String s2 = s1.replaceFirst(regExp, replacement);
System.assertEquals('a b c 11 2z', s2);
```

## reverse()

返回一个String，所有字符都反转。

### 签名
```apex
public String reverse()
```

### 返回值
- 类型：String

## right(length)

返回当前String最右边的字符，具有指定长度。

### 签名
```apex
public String right(Integer length)
```

### 参数
**length**
- 类型：Integer
- 如果length大于String大小，则返回整个String。

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'Hello Max';
String s2 = 
   s1.right(3);
System.assertEquals(
   'Max', s2);
```

## rightPad(length)

返回当前String，在右侧用空格填充，具有指定长度。

### 签名
```apex
public String rightPad(Integer length)
```

### 参数
**length**
- 类型：Integer
- 如果length小于或等于当前String大小，则返回整个String而不进行空格填充。

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'abc';
String s2 = 
   s1.rightPad(5);
System.assertEquals(
   'abc  ', s2);
```

## rightPad(length, padStr)

返回当前String，在右侧用String padStr填充，具有指定长度。

### 签名
```apex
public String rightPad(Integer length, String padStr)
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
String s3 = s1.rightPad(7, s2);
System.assertEquals('abcxyxy', s3);
```

## split(regExp)

返回一个列表，包含String的每个子字符串，这些子字符串由正则表达式regExp或String的结尾终止。

### 签名
```apex
public String[] split(String regExp)
```

### 参数
**regExp**
- 类型：String

### 返回值
- 类型：String[]

### 注意
在API版本34.0及更早版本中，零宽度regExp值在方法输出的开头产生空列表项。

### 用法
有关正则表达式的信息，请参阅Java Pattern类。
子字符串按它们在String中出现的顺序放置在列表中。如果regExp不匹配String的任何部分，结果列表只有一个包含原始String的元素。

### 示例
在以下示例中，使用反斜杠作为分隔符分割字符串。

```apex
public String splitPath(String filename) {
    if (filename == null)
        return null;
    List<String> parts = filename.split('\\\\');
    filename = parts[parts.size()-1];
    return filename;
}
// 例如，如果文件路径是 e:\\processed\\PPDSF100111.csv
// 此方法分割路径并返回最后一部分。
// 返回的文件名是 PPDSF100111.csv
```

## split(regExp, limit)

返回一个列表，包含String的每个子字符串，这些子字符串由正则表达式regExp或String的结尾终止。

### 签名
```apex
public String[] split(String regExp, Integer limit)
```

### 参数
**regExp**
- 类型：String
- 正则表达式。

**limit**
- 类型：Integer

### 返回值
- 类型：String[]

### 注意
在API版本34.0及更早版本中，零宽度regExp值在方法输出的开头产生空列表项。

### 用法
可选的limit参数控制模式应用的次数，因此影响列表的长度。
如果limit大于零：
- 模式最多应用(limit – 1)次。
- 列表的长度不大于limit。
- 列表的最后一个条目包含最后一个匹配分隔符之外的所有输入。
如果limit为非正数，模式应用尽可能多次，列表可以有任何长度。
如果limit为零，模式应用尽可能多次，列表可以有任何长度，并丢弃尾随空字符串。

### 示例
例如，对于String s = 'boo:and:moo'：
- s.split(':', 2) 结果为 {'boo', 'and:moo'}
- s.split(':', 5) 结果为 {'boo', 'and', 'moo'}
- s.split(':', -2) 结果为 {'boo', 'and', 'moo'}
- s.split('o', 5) 结果为 {'b', '', ':and:m', '', ''}
- s.split('o', -2) 结果为 {'b', '', ':and:m', '', ''}
- s.split('o', 0) 结果为 {'b', '', ':and:m'}

## splitByCharacterType()

按字符类型分割当前String，并返回相同类型的连续字符组作为完整标记的列表。

### 签名
```apex
public List<String> splitByCharacterType()
```

### 返回值
- 类型：List<String>

### 用法
有关使用的字符类型的更多信息，请参阅java.lang.Character.getType(char)。

### 示例
```apex
String s1 = 'Lightning.platform';
List<String> ls = 
   s1.splitByCharacterType();
System.debug(ls);
// 写入此输出：
// (L, ightning, ., platform)
```

## splitByCharacterTypeCamelCase()

按字符类型分割当前String，并返回相同类型的连续字符组作为完整标记的列表，但有以下例外：紧接在小写字符标记之前的任何大写字符属于以下字符标记而不是前面的字符标记。

### 签名
```apex
public List<String> splitByCharacterTypeCamelCase()
```

### 返回值
- 类型：List<String>

### 用法
有关使用的字符类型的更多信息，请参阅java.lang.Character.getType(char)。

### 示例
```apex
String s1 = 'Lightning.platform';
List<String> ls = 
   s1.splitByCharacterTypeCamelCase();
System.debug(ls);
// 写入此输出：
// (Lightning, ., platform)
```

## startsWith(prefix)

如果调用该方法的String以指定的前缀开头，则返回true。

### 签名
```apex
public Boolean startsWith(String prefix)
```

### 参数
**prefix**
- 类型：String

### 返回值
- 类型：Boolean

### 示例
```apex
String s1 = 'AE86 vs EK9';
System.assert(s1.startsWith('AE86'));
```

## startsWithIgnoreCase(prefix)

如果当前String以指定的前缀开头，则返回true，不考虑前缀大小写。

### 签名
```apex
public Boolean startsWithIgnoreCase(String prefix)
```

### 参数
**prefix**
- 类型：String

### 返回值
- 类型：Boolean

### 示例
```apex
String s1 = 'AE86 vs EK9';
System.assert(s1.startsWithIgnoreCase('ae86'));
```

## stripHtmlTags()

删除HTML标记并返回纯文本。

### 签名
```apex
public String stripHtmlTags()
```

### 返回值
- 类型：String

### 用法
**警告**
stripHtmlTags函数不会递归地删除标记；因此，标记仍可能存在于返回的字符串中。不要使用stripHtmlTags函数来清理输入以包含在原始HTML页面中。未转义的输出不被认为可以安全地包含在HTML文档中。该函数将在未来版本中弃用。

### 示例
```apex
String s1 = '<b>hello world</b>';
String s2 = s1.stripHtmlTags();
System.assertEquals(
   'hello world', s2);
```

## substring(startIndex)

返回一个新的String，从指定的从零开始的startIndex处的字符开始，延伸到String的末尾。

### 签名
```apex
public String substring(Integer startIndex)
```

### 参数
**startIndex**
- 类型：Integer

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'hamburger';
System.assertEquals('burger', s1.substring(3));
```

## substring(startIndex, endIndex)

返回一个新的String，从指定的从零开始的startIndex处的字符开始，延伸到endIndex - 1处的字符。

### 签名
```apex
public String substring(Integer startIndex, Integer endIndex)
```

### 参数
**startIndex**
- 类型：Integer

**endIndex**
- 类型：Integer

### 返回值
- 类型：String

### 示例
```apex
'hamburger'.substring(4, 8); 
// 返回 "urge"
'smiles'.substring(1, 5);
// 返回 "mile"
```

## substringAfter(separator)

返回在指定分隔符第一次出现之后出现的子字符串。

### 签名
```apex
public String substringAfter(String separator)
```

### 参数
**separator**
- 类型：String

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'Salesforce.Lightning.platform';
String s2 = 
   s1.substringAfter('.');
System.assertEquals(
   'Lightning.platform', s2);
```

## substringAfterLast(separator)

返回在指定分隔符最后一次出现之后出现的子字符串。

### 签名
```apex
public String substringAfterLast(String separator)
```

### 参数
**separator**
- 类型：String

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'Salesforce.Lightning.platform';
String s2 = 
   s1.substringAfterLast('.');
System.assertEquals(
   'platform', s2);
```

## substringBefore(separator)

返回在指定分隔符第一次出现之前出现的子字符串。

### 签名
```apex
public String substringBefore(String separator)
```

### 参数
**separator**
- 类型：String

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'Salesforce.Lightning.platform';
String s2 = 
   s1.substringBefore('.');
System.assertEquals(
   'Salesforce', s2);
```

## substringBeforeLast(separator)

返回在指定分隔符最后一次出现之前出现的子字符串。

### 签名
```apex
public String substringBeforeLast(String separator)
```

### 参数
**separator**
- 类型：String

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'Salesforce.Lightning.platform';
String s2 = 
   s1.substringBeforeLast('.');
System.assertEquals(
   'Salesforce.Lightning', s2);
```

## substringBetween(tag)

返回在两个指定标记String实例之间出现的子字符串。

### 签名
```apex
public String substringBetween(String tag)
```

### 参数
**tag**
- 类型：String

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'tagYellowtag';
String s2 = s1.substringBetween('tag');
System.assertEquals('Yellow', s2);
```

## substringBetween(open, close)

返回在两个指定String之间出现的子字符串。

### 签名
```apex
public String substringBetween(String open, String close)
```

### 参数
**open**
- 类型：String

**close**
- 类型：String

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'xYellowy';
String s2 = 
   s1.substringBetween('x','y');
System.assertEquals(
   'Yellow', s2);
```

## swapCase()

使用默认（英语美国）区域设置交换所有字符的大小写并返回结果String。

### 签名
```apex
public String swapCase()
```

### 返回值
- 类型：String

### 用法
大写和标题大小写转换为小写，小写转换为大写。

### 示例
```apex
String s1 = 'Force.com';
String s2 = s1.swapCase();
System.assertEquals('fORCE.COM', s2);
```

## toLowerCase()

使用默认（英语美国）区域设置的规则将String中的所有字符转换为小写。

### 签名
```apex
public String toLowerCase()
```

### 返回值
- 类型：String

### 示例
```apex
String s1 = 'ThIs iS hArD tO rEaD';
System.assertEquals('this is hard to read',
   s1.toLowerCase());
```

## toLowerCase(locale)

使用指定区域设置的规则将String中的所有字符转换为小写。

### 签名
```apex
public String toLowerCase(String locale)
```

### 参数
**locale**
- 类型：String

### 返回值
- 类型：String

### 示例
```apex
// 土耳其语示例
// 大写点状"i"，\u0304，即İ
// 注意这包含İ和I
String s1 = 'KIYMETLİ';
String s1Lower = s1.toLowerCase('tr');
// 无点小写"i"，\u0131，即ı
// 注意这有i和ı
String expected = 'kıymetli';
System.assertEquals(expected, s1Lower);
// 注意如果这在toLowerCase('en')中完成，将输出'kiymetli'
```

## toUpperCase()

使用默认（英语美国）区域设置的规则将String中的所有字符转换为大写。

### 签名
```apex
public String toUpperCase()
```

### 返回值
- 类型：String

### 示例
```apex
String myString1 = 'abcd';
String myString2 = 'ABCD';
myString1 = 
   myString1.toUpperCase();
Boolean result = 
   myString1.equals(myString2);
System.assertEquals(result, true);
```

## toUpperCase(locale)

使用指定区域设置的规则将String中的所有字符转换为大写。

### 签名
```apex
public String toUpperCase(String locale)
```

### 参数
**locale**
- 类型：String

### 返回值
- 类型：String

### 示例
```apex
// 土耳其语示例
// 无点小写"i"，\u0131，即ı
// 注意这有i和ı
String s1 = 'imkansız';
String s1Upper = s1.toUpperCase('tr');
// 大写点状"i"，\u0304，即İ
// 注意这包含İ和I
String expected = 'İMKANSIZ';
System.assertEquals(expected, s1Upper);
```

## trim()

返回不再包含任何前导或尾随空白字符的字符串副本。

### 签名
```apex
public String trim()
```

### 返回值
- 类型：String

### 用法
前导和尾随ASCII控制字符（如制表符和换行符）也会被删除。不在句子开头或结尾的空白字符和控制字符不会被删除。

### 示例
```apex
String s1 = '   Hello!   ';
String trimmed = s1.trim();
system.assertEquals('Hello!', trimmed);
```

## uncapitalize()

返回当前String，第一个字母为小写。

### 签名
```apex
public String uncapitalize()
```

### 返回值
- 类型：String

### 示例
```apex
String s1 = 
   'Hello max';
String s2 = 
   s1.uncapitalize();
System.assertEquals(
   'hello max', 
    s2);
```

## unescapeCsv()

返回表示未转义CSV列的String。

### 签名
```apex
public String unescapeCsv()
```

### 返回值
- 类型：String

### 用法
如果String用双引号括起并包含逗号、换行符或双引号，则删除引号。此外，任何双引号转义字符（一对双引号）都被转义为只是一个双引号。
如果String不用双引号括起，或者用双引号括起但不包含逗号、换行符或双引号，则返回不变。

### 示例
```apex
String s1 = 
   '"Max1, ""Max2"""';
String s2 = 
   s1.unescapeCsv();
System.assertEquals(
   'Max1, "Max2"', 
    s2);
```

## unescapeEcmaScript()

转义String中找到的任何EcmaScript字面量。

### 签名
```apex
public String unescapeEcmaScript()
```

### 返回值
- 类型：String

### 示例
```apex
String s1 = 
   '\"3.8\",\"3.9\"';
String s2 = 
   s1.unescapeEcmaScript();
System.assertEquals(
   '"3.8","3.9"',
   s2);
```

## unescapeHtml3()

使用HTML 3.0实体转义String中的字符。

### 签名
```apex
public String unescapeHtml3()
```

### 返回值
- 类型：String

### 示例
```apex
String s1 = 
   '&quot;&lt;Black&amp;White&gt;&quot;';
String s2 = 
   s1.unescapeHtml3();
System.assertEquals(
   '"<Black&White>"',
   s2);
```

## unescapeHtml4()

使用HTML 4.0实体转义String中的字符。

### 签名
```apex
public String unescapeHtml4()
```

### 返回值
- 类型：String

### 用法
如果不识别实体，则在返回的字符串中保持不变。

### 示例
```apex
String s1 = 
   '&quot;&lt;Black&amp;White&gt;&quot;';
String s2 = 
   s1.unescapeHtml4();
System.assertEquals(
   '"<Black&White>"',
   s2);
```

## unescapeJava()

返回一个String，其Java字面量被转义。转义的字面量包括引号的转义序列(\\")和控制字符，如制表符(\\t)和回车(\\n)。

### 签名
```apex
public String unescapeJava()
```

### 返回值
- 类型：String
- 未转义的字符串。

### 示例
```apex
String s = 'Company: \\"Salesforce.com\\"';
String unescapedStr = s.unescapeJava();
System.assertEquals('Company: "Salesforce.com"', unescapedStr);
```

## unescapeUnicode()

返回一个String，其转义的Unicode字符被转义。

### 签名
```apex
public String unescapeUnicode()
```

### 返回值
- 类型：String
- 未转义的字符串。

### 示例
```apex
String s = 'De onde voc\u00EA \u00E9?';
String unescapedStr = s.unescapeUnicode();
System.assertEquals('De onde você é?', unescapedStr);
```

## unescapeXml()

使用XML实体转义String中的字符。

### 签名
```apex
public String unescapeXml()
```

### 返回值
- 类型：String

### 用法
仅支持五个基本XML实体（gt, lt, quot, amp, apos）。不支持DTD或外部实体。

### 示例
```apex
String s1 = 
   '&quot;&lt;Black&amp;White&gt;&quot;';
String s2 = 
   s1.unescapeXml();
System.assertEquals(
   '"<Black&White>"',
   s2);
```

## valueOf(dateToConvert)

返回表示指定Date的String，格式为标准"yyyy-MM-dd"。

### 签名
```apex
public static String valueOf(Date dateToConvert)
```

### 参数
**dateToConvert**
- 类型：Date

### 返回值
- 类型：String

### 示例
```apex
Date myDate = Date.Today();
String sDate = String.valueOf(myDate);
```

## valueOf(datetimeToConvert)

返回表示指定Datetime的String，格式为标准"yyyy-MM-dd HH:mm:ss"，用于本地时区。

### 签名
```apex
public static String valueOf(Datetime datetimeToConvert)
```

### 参数
**datetimeToConvert**
- 类型：Datetime

### 返回值
- 类型：String

### 示例
```apex
DateTime dt = datetime.newInstance(1996, 6, 23);
String sDateTime = String.valueOf(dt);
System.assertEquals('1996-06-23 00:00:00', sDateTime);
```

## valueOf(decimalToConvert)

返回表示指定Decimal的String。

### 签名
```apex
public static String valueOf(Decimal decimalToConvert)
```

### 参数
**decimalToConvert**
- 类型：Decimal

### 返回值
- 类型：String

### 示例
```apex
Decimal dec = 3.14159265;
String sDecimal = String.valueOf(dec);
System.assertEquals('3.14159265', sDecimal);
```

## valueOf(doubleToConvert)

返回表示指定Double的String。

### 签名
```apex
public static String valueOf(Double doubleToConvert)
```

### 参数
**doubleToConvert**
- 类型：Double

### 返回值
- 类型：String

### 示例
```apex
Double myDouble = 12.34;
String myString = 
   String.valueOf(myDouble);
System.assertEquals(
  '12.34', myString);
```

## valueOf(integerToConvert)

返回表示指定Integer的String。

### 签名
```apex
public static String valueOf(Integer integerToConvert)
```

### 参数
**integerToConvert**
- 类型：Integer

### 返回值
- 类型：String

### 示例
```apex
Integer myInteger = 22;
String sInteger = String.valueOf(myInteger);
System.assertEquals('22', sInteger);
```

## valueOf(longToConvert)

返回表示指定Long的String。

### 签名
```apex
public static String valueOf(Long longToConvert)
```

### 参数
**longToConvert**
- 类型：Long

### 返回值
- 类型：String

### 示例
```apex
Long myLong = 123456789;
String sLong = String.valueOf(myLong);
System.assertEquals('123456789', sLong);
```

## valueOf(toConvert)

返回指定对象参数的字符串表示。

### 签名
```apex
public static String valueOf(Object toConvert)
```

### 参数
**toConvert**
- 类型：Object

### 返回值
- 类型：String

### 用法
如果参数不是String，valueOf方法通过调用参数上的toString方法（如果可用）或任何重写的toString方法（如果参数是用户定义类型）将其转换为String。否则，如果没有可用的toString方法，它返回参数的字符串表示。

### 示例
```apex
List<Integer> ls = 
  new List<Integer>();
ls.add(10);
ls.add(20);
String strList = 
   String.valueOf(ls);
System.assertEquals(
  '(10, 20)', strList);
```

## valueOfGmt(datetimeToConvert)

返回表示指定Datetime的String，格式为标准"yyyy-MM-dd HH:mm:ss"，用于GMT时区。

### 签名
```apex
public static String valueOfGmt(Datetime datetimeToConvert)
```

### 参数
**datetimeToConvert**
- 类型：Datetime

### 返回值
- 类型：String

### 示例
```apex
// 对于PST时区：
DateTime dt = datetime.newInstance(2001, 9, 14);
String sDateTime = String.valueOfGmt(dt);
System.assertEquals('2001-09-14 07:00:00', sDateTime);
```
