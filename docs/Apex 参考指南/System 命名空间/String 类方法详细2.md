# String 类方法详细说明（第二部分）

## equals(secondString)

已弃用。此方法被equals(stringOrId)替换。如果传入的字符串不为null并表示与当前字符串相同的二进制字符序列，则返回true。使用此方法执行区分大小写的比较。

### 签名
```apex
public Boolean equals(String secondString)
```

### 参数
**secondString**
- 类型：String

### 返回值
- 类型：Boolean

### 用法
当compareTo方法返回0时，此方法返回true。
使用此方法执行区分大小写的比较。相比之下，==运算符执行不区分大小写的字符串比较以匹配Apex语义。

### 示例
```apex
String myString1 = 'abcde';
String myString2 = 'abcd';
Boolean result = myString1.equals(myString2);
System.assertEquals(result, false);
```

## equals(stringOrId)

如果传入的对象不为null并表示与当前字符串相同的二进制字符序列，则返回true。使用此方法将字符串与表示字符串或ID的对象进行比较。

### 签名
```apex
public Boolean equals(Object stringOrId)
```

### 参数
**stringOrId**
- 类型：Object

### 返回值
- 类型：Boolean

### 用法
如果比较ID值，ID的长度不需要相等。例如，如果将15字符ID字符串与表示等效18字符ID值的对象进行比较，此方法返回true。有关15字符和18字符ID的更多信息，请参阅ID数据类型。
使用此方法执行区分大小写的比较。相比之下，==运算符执行不区分大小写的字符串比较以匹配Apex语义。

### 示例
这些示例显示具有相等和不等值的不同类型变量之间的比较。示例还显示Apex如何在比较之前自动转换某些值。

```apex
// 将字符串与包含字符串的对象进行比较
Object obj1 = 'abc';
String str = 'abc';
Boolean result1 = str.equals(obj1);
System.assertEquals(true, result1);

// 将字符串与包含数字的对象进行比较
Integer obj2 = 100;
Boolean result2 = str.equals(obj2);
System.assertEquals(false, result2);

// 将字符串与相同长度的ID进行比较。
// 15字符ID
Id idValue15 = '001D000000Ju1zH';
// 15字符ID字符串值
String stringValue15 = '001D000000Ju1zH';
Boolean result3 = stringValue15.equals(IdValue15);
System.assertEquals(true, result3);

// 比较两个相等ID值的不同长度：
//  15字符ID和18字符ID
Id idValue18 = '001D000000Ju1zHIAR';
Boolean result4 = stringValue15.equals(IdValue18);
System.assertEquals(true, result4);
```

## equalsIgnoreCase(secondString)

如果secondString不为null并表示与调用该方法的String相同的字符序列（忽略大小写），则返回true。

### 签名
```apex
public Boolean equalsIgnoreCase(String secondString)
```

### 参数
**secondString**
- 类型：String

### 返回值
- 类型：Boolean

### 用法
String.equalsIgnoreCase()方法忽略上下文用户的区域设置。如果希望根据区域设置执行字符串比较，请改用==运算符。String.equalsIgnoreCase()方法通常比运算符执行得更快，因为该方法忽略区域设置。

### 示例
```apex
String myString1 = 'abcd';
String myString2 = 'ABCD';
Boolean result = 
myString1.equalsIgnoreCase(myString2);
System.assertEquals(result, true);
```

## escapeCsv()

返回用双引号括起的CSV列的String（如果需要）。

### 签名
```apex
public String escapeCsv()
```

### 返回值
- 类型：String

### 用法
如果String包含逗号、换行符或双引号，返回的String用双引号括起。此外，String中的任何双引号字符都用另一个双引号转义。
如果String不包含逗号、换行符或双引号，则返回不变。

### 示例
```apex
String s1 = 'Max1, "Max2"';
String s2 = s1.escapeCsv();
System.assertEquals('"Max1, ""Max2"""', s2);
```

## escapeEcmaScript()

使用EcmaScript String规则转义String中的字符。

### 签名
```apex
public String escapeEcmaScript()
```

### 返回值
- 类型：String

### 用法
Apex字符串和EcmaScript字符串之间的唯一区别是在EcmaScript中，单引号和正斜杠(/)被转义。

### 示例
```apex
String s1 = '"grade": 3.9/4.0';
String s2 = s1.escapeEcmaScript();
System.debug(s2);
// 输出是：
// \"grade\": 3.9\/4.0
System.assertEquals(
   '\\"grade\\": 3.9\\/4.0', 
    s2);
```

## escapeHtml3()

使用HTML 3.0实体转义String中的字符。

### 签名
```apex
public String escapeHtml3()
```

### 返回值
- 类型：String

### 示例
```apex
String s1 = 
   '"<Black&White>"';
String s2 = 
   s1.escapeHtml3();
System.debug(s2);
// 输出：
// &quot;&lt;Black&amp;
// White&gt;&quot;
```

## escapeHtml4()

使用HTML 4.0实体转义String中的字符。

### 签名
```apex
public String escapeHtml4()
```

### 返回值
- 类型：String

### 示例
```apex
String s1 = 
   '"<Black&White>"';
String s2 = 
   s1.escapeHtml4();
System.debug(s2);
// 输出：
// &quot;&lt;Black&amp;
// White&gt;&quot;
```

## escapeJava()

返回一个String，其字符使用Java String规则进行转义。转义的字符包括引号和控制字符，如制表符、反斜杠和回车字符。

### 签名
```apex
public String escapeJava()
```

### 返回值
- 类型：String
- 转义的字符串。

### 示例
```apex
// 输入字符串包含引号
String s = 'Company: "Salesforce.com"';
String escapedStr = s.escapeJava();
// 输出字符串的引号被转义
System.assertEquals('Company: \\"Salesforce.com\\"', escapedStr);
```

## escapeSingleQuotes(stringToEscape)

返回一个String，在String s中的任何单引号(')或反斜杠(\)之前添加转义字符(\)。

### 签名
```apex
public static String escapeSingleQuotes(String stringToEscape)
```

### 参数
**stringToEscape**
- 类型：String

### 返回值
- 类型：String

### 用法
此方法在创建动态SOQL语句时很有用，有助于防止SOQL注入。请参阅动态SOQL。

### 示例
```apex
String s = '\'Hello Jason\'';
system.debug(s); // 输出 'Hello Jason'
String escapedStr = String.escapeSingleQuotes(s);
system.debug(escapedStr); // 输出 \'Hello Jason\'
// 在此assertEquals方法中，第一个字符串未转义，
// 所以每个在'和\字符之前的\都被移除。
// 因此，字符串等于escapedStr的值，或\'Hello Jason\'。
system.assertEquals('\\\'Hello Jason\\\'', escapedStr);
```

## escapeUnicode()

返回一个String，其Unicode字符被转义为Unicode转义序列。

### 签名
```apex
public String escapeUnicode()
```

### 返回值
- 类型：String
- 转义的字符串。

### 示例
```apex
String s = 'De onde você é?';
String escapedStr = s.escapeUnicode();
System.assertEquals('De onde voc\\u00EA \\u00E9?', escapedStr);
```

## escapeXml()

使用XML实体转义String中的字符。

### 签名
```apex
public String escapeXml()
```

### 返回值
- 类型：String

### 用法
仅支持五个基本XML实体（gt, lt, quot, amp, apos）。不支持DTD或外部实体。大于0x7f的Unicode字符不被转义。

### 示例
```apex
String s1 = 
   '"<Black&White>"';
String s2 = 
   s1.escapeXml();
System.debug(s2);
// 输出：
// &quot;&lt;Black&amp;
// White&gt;&quot;
```

## format(stringToFormat, formattingArguments)

将第一个参数视为模式，并使用第二个参数进行替换和格式化返回字符串。替换和格式化与apex:outputText和Java MessageFormat类相同。第二个参数的List中的非字符串类型隐式转换为字符串，尊重类型上存在的toString()方法重写。

### 签名
```apex
public static String format(String stringToFormat, List<Object> formattingArguments)
```

### 参数
**stringToFormat**
- 类型：String

**formattingArguments**
- 类型：List<Object>

### 返回值
- 类型：String

### 版本化行为更改
从版本51.0开始，format()方法支持stringToFormat参数中的单引号，并使用formattingArguments参数返回格式化的字符串。在版本50.0及更早版本中，不支持单引号。

### 示例
```apex
String template = '{0} was last updated {1}';
List<Object> parameters = new List<Object> {'Universal Containers', DateTime.newInstance(2023, 1, 1)};
String formatted = String.format(template, parameters);
System.debug('Newly formatted string is:' + formatted);
```

## fromCharArray(charArray)

从整数列表的值返回String。

### 签名
```apex
public static String fromCharArray(List<Integer> charArray)
```

### 参数
**charArray**
- 类型：List<Integer>

### 返回值
- 类型：String

### 示例
```apex
List<Integer> charArr = new Integer[]{74};
String convertedChar = String.fromCharArray(charArr);
System.assertEquals('J', convertedChar);
```

## getChars()

返回表示此字符串中字符的字符值数组。

### 签名
```apex
public List<Integer> getChars()
```

### 返回值
- 类型：List<Integer>
- 整数列表，每个对应字符串中的字符值。

### 示例
此示例将字符串转换为字符数组，然后获取第一个数组元素，对应'J'的值。

### 用法
如果字符串中存在"/"（斜杠）字符，String.getChars()在返回的字符数组中取消转义它。此示例使用String.escapeJava()方法在返回的字符串中生成"\\"的所需值。

```apex
String str = 'Jane goes fishing.';
Integer[] chars = str.getChars();
// 获取'J'的值
System.assertEquals(74, chars[0]);

String doubleSlash = '\\' + '\\'; //doubleSlash设置为"\\"
System.debug(String.fromCharArray(doubleSlash.getChars()));  //返回"\"
System.debug(String.fromCharArray(doubleSlash.escapeJava().getChars())); //返回"\\"
```

## getCommonPrefix(strings)

返回作为String的初始字符序列，该序列是所有指定String共有的。

### 签名
```apex
public static String getCommonPrefix(List<String> strings)
```

### 参数
**strings**
- 类型：List<String>

### 返回值
- 类型：String

### 示例
```apex
List<String> ls = new List<String>{'SFDCApex', 'SFDCVisualforce'};
String prefix = String.getCommonPrefix(ls);
System.assertEquals('SFDC', prefix);
```

## getLevenshteinDistance(stringToCompare)

返回当前String与指定String之间的Levenshtein距离。

### 签名
```apex
public Integer getLevenshteinDistance(String stringToCompare)
```

### 参数
**stringToCompare**
- 类型：String

### 返回值
- 类型：Integer

### 用法
Levenshtein距离是将一个String更改为另一个String所需的更改数量。每次更改都是单个字符修改（删除、插入或替换）。

### 示例
```apex
String s = 'Hello Joe';
Integer i = s.getLevenshteinDistance('Hello Max');
System.assertEquals(3, i);
```

## getLevenshteinDistance(stringToCompare, threshold)

如果当前String与指定String之间的Levenshtein距离小于或等于给定阈值，则返回该距离；否则，返回-1。

### 签名
```apex
public Integer getLevenshteinDistance(String stringToCompare, Integer threshold)
```

### 参数
**stringToCompare**
- 类型：String

**threshold**
- 类型：Integer

### 返回值
- 类型：Integer

### 用法
Levenshtein距离是将一个String更改为另一个String所需的更改数量。每次更改都是单个字符修改（删除、插入或替换）。

### 示例
在此示例中，Levenshtein距离是3，但threshold参数是2，小于距离，所以此方法返回-1。

```apex
String s = 'Hello Jane';
Integer i = s.getLevenshteinDistance('Hello Max', 2);
System.assertEquals(-1, i);
```

## hashCode()

返回此字符串的哈希码值。

### 签名
```apex
public Integer hashCode()
```

### 返回值
- 类型：Integer

### 用法
此值基于Java String.hashCode对应方法计算的哈希码。
可以使用此方法简化包含String成员变量的自定义类型的哈希码计算。可以基于每个String变量的哈希码计算类型的哈希码值。例如：

有关在Map键和Set中使用哈希码方法的更多详细信息，请参阅在Map键和Set中使用自定义类型。

### 示例
```apex
public class MyCustomClass {
   String x,y;
   // 提供自定义哈希码
   public Integer hashCode() {
    return 
    (31*x.hashCode())^(y.hashCode());
   }
}
```

