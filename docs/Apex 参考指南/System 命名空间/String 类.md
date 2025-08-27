# String 类

包含String原始数据类型的方法。

## 命名空间

System

## 用法

所有字符串方法定义都遵循Unicode标准。例如，Unicode罗马数字被分类为数字形式类型，而不是数字类型。因此，如果对包含罗马数字的String使用`isAlphanumeric()`等字符串方法，将返回false。有关Unicode分类，请参阅Unicode字符代码图表。

有关String的更多信息，请参阅String数据类型。

## String 方法

以下是String的方法。

- ### [abbreviate(maxWidth)](#abbreviate-maxwidth-1)
返回String的缩写版本，具有指定长度，如果当前String长于指定长度，则附加省略号；否则，返回不带省略号的原始String。

- ### [abbreviate(maxWidth, offset)](#abbreviate-maxwidth-offset-1)
返回String的缩写版本，从指定的字符偏移量开始，具有指定长度。如果在这些位置删除了字符，返回的String在开头和结尾附加省略号。

- ### capitalize()
返回当前String，第一个字母更改为标题大小写。

- ### center(size)
返回当前String的版本，具有指定大小，在左侧和右侧用空格填充，使其出现在中心。如果指定的大小小于当前String大小，则返回整个String而不添加空格。

- ### center(size, paddingString)
返回当前String的版本，具有指定大小，在左侧和右侧用指定的String填充，使其出现在中心。如果指定的大小小于当前String大小，则返回整个String而不填充。

- ### charAt(index)
返回指定索引处字符的值。

- ### codePointAt(index)
返回指定索引处的Unicode代码点值。

- ### codePointBefore(index)
返回指定索引之前出现的Unicode代码点值。

- ### codePointCount(beginIndex, endIndex)
返回指定文本范围内的Unicode代码点数量。

- ### compareTo(secondString)
基于String中每个字符的Unicode值，按字典顺序比较两个字符串。

- ### contains(substring)
当且仅当调用该方法的String包含substring中指定的字符序列时，返回true。

- ### containsAny(inputString)
如果当前String包含指定String中的任何字符，则返回true；否则，返回false。

- ### containsIgnoreCase(substring)
如果当前String包含指定的字符序列而不考虑大小写，则返回true；否则，返回false。

- ### containsNone(inputString)
如果当前String不包含指定String中的任何字符，则返回true；否则，返回false。

- ### containsOnly(inputString)
如果当前String仅包含来自指定字符序列的字符而不包含任何其他字符，则返回true；否则，返回false。

- ### containsWhitespace()
如果当前String包含任何空白字符，则返回true；否则，返回false。

- ### countMatches(substring)
返回指定子字符串在当前String中出现的次数。

- ### deleteWhitespace()
返回当前String的版本，删除了所有空白字符。

- ### difference(secondString)
返回当前String与指定String之间的差异。

- ### endsWith(suffix)
如果调用该方法的String以指定的后缀结尾，则返回true。

- ### endsWithIgnoreCase(suffix)
如果当前String以指定的后缀结尾，则返回true；否则，返回false。

- ### equals(secondString)
已弃用。此方法被equals(stringOrId)替换。如果传入的字符串不为null并表示与当前字符串相同的二进制字符序列，则返回true。使用此方法执行区分大小写的比较。

- ### equals(stringOrId)
如果传入的对象不为null并表示与当前字符串相同的二进制字符序列，则返回true。使用此方法将字符串与表示字符串或ID的对象进行比较。

- ### equalsIgnoreCase(secondString)
如果secondString不为null并表示与调用该方法的String相同的字符序列（忽略大小写），则返回true。

- ### escapeCsv()
返回用双引号括起的CSV列的String（如果需要）。

- ### escapeEcmaScript()
使用EcmaScript String规则转义String中的字符。

- ### escapeHtml3()
使用HTML 3.0实体转义String中的字符。

- ### escapeHtml4()
使用HTML 4.0实体转义String中的字符。

- ### escapeJava()
返回一个String，其字符使用Java String规则进行转义。转义的字符包括引号和控制字符，如制表符、反斜杠和回车字符。

- ### escapeSingleQuotes(stringToEscape)
返回一个String，在String s中的任何单引号(')或反斜杠(\)之前添加转义字符(\)。

- ### escapeUnicode()
返回一个String，其Unicode字符被转义为Unicode转义序列。

- ### escapeXml()
使用XML实体转义String中的字符。

- ### format(stringToFormat, formattingArguments)
将第一个参数视为模式，并使用第二个参数进行替换和格式化返回字符串。替换和格式化与apex:outputText和Java MessageFormat类相同。第二个参数的List中的非字符串类型隐式转换为字符串，尊重类型上存在的toString()方法重写。

- ### fromCharArray(charArray)
从整数列表的值返回String。

- ### getChars()
返回表示此字符串中字符的字符值数组。

- ### getCommonPrefix(strings)
返回作为String的初始字符序列，该序列是所有指定String共有的。

- ### getLevenshteinDistance(stringToCompare)
返回当前String与指定String之间的Levenshtein距离。

- ### getLevenshteinDistance(stringToCompare, threshold)
如果当前String与指定String之间的Levenshtein距离小于或等于给定阈值，则返回该距离；否则，返回-1。

- ### hashCode()
返回此字符串的哈希码值。

- ### indexOf(substring)
返回指定子字符串第一次出现的索引。如果子字符串不出现，此方法返回-1。

- ### indexOf(substring, index)
从给定索引点开始返回指定子字符串第一次出现的从零开始的索引。如果子字符串不出现，此方法返回-1。

- ### indexOfAny(substring)
返回substring中指定的任何字符第一次出现的从零开始的索引。如果没有字符出现，返回-1。

- ### indexOfAnyBut(substring)
返回不在指定substring中的字符第一次出现的从零开始的索引。否则，返回-1。

- ### indexOfChar(character)
返回与指定字符值对应的字符第一次出现的索引。

- ### indexOfChar(character, startIndex)
从指定索引开始返回与指定字符值对应的字符第一次出现的索引。

- ### indexOfDifference(stringToCompare)
返回当前String开始与指定String不同的字符的从零开始的索引。

- ### indexOfIgnoreCase(substring)
不考虑大小写返回指定子字符串第一次出现的从零开始的索引。如果子字符串不出现，此方法返回-1。

- ### indexOfIgnoreCase(substring, startPosition)
从索引i点开始不考虑大小写返回指定子字符串第一次出现的从零开始的索引。如果子字符串不出现，此方法返回-1。

- ### isAllLowerCase()
如果当前String中的所有字符都是小写，则返回true；否则，返回false。

- ### isAllUpperCase()
如果当前String中的所有字符都是大写，则返回true；否则，返回false。

- ### isAlpha()
如果当前String中的所有字符都只是Unicode字母，则返回true；否则，返回false。

- ### isAlphaSpace()
如果当前String中的所有字符都只是Unicode字母或空格，则返回true；否则，返回false。

- ### isAlphanumeric()
如果当前String中的所有字符都只是Unicode字母或数字，则返回true；否则，返回false。

- ### isAlphanumericSpace()
如果当前String中的所有字符都只是Unicode字母、数字或空格，则返回true；否则，返回false。

- ### isAsciiPrintable()
如果当前String仅包含ASCII可打印字符，则返回true；否则，返回false。

- ### isBlank(inputString)
如果指定的String是空白、空('')或null，则返回true；否则，返回false。

- ### isEmpty(inputString)
如果指定的String为空('')或null，则返回true；否则，返回false。

- ### isNotBlank(inputString)
如果指定的String不是空白、不是空('')且不是null，则返回true；否则，返回false。

- ### isNotEmpty(inputString)
如果指定的String不为空('')且不为null，则返回true；否则，返回false。

- ### isNumeric()
如果当前String仅包含Unicode数字，则返回true；否则，返回false。

- ### isNumericSpace()
如果当前String仅包含Unicode数字或空格，则返回true；否则，返回false。

- ### isWhitespace()
如果当前String仅包含空白字符或为空，则返回true；否则，返回false。

- ### join(iterableObj, separator)
将指定可迭代对象（如List）的元素连接成单个String，用指定的分隔符分隔。

- ### lastIndexOf(substring)
返回指定子字符串最后一次出现的索引。如果子字符串不出现，此方法返回-1。

- ### lastIndexOf(substring, endPosition)
从索引0处的字符开始到指定索引结束，返回指定子字符串最后一次出现的索引。

- ### lastIndexOfChar(character)
返回与指定字符值对应的字符最后一次出现的索引。

- ### lastIndexOfChar(character, endIndex)
从指定索引开始返回与指定字符值对应的字符最后一次出现的索引。

- ### lastIndexOfIgnoreCase(substring)
不考虑大小写返回指定子字符串最后一次出现的索引。

- ### lastIndexOfIgnoreCase(substring, endPosition)
不考虑大小写返回指定子字符串最后一次出现的索引，从索引0处的字符开始到指定索引结束。

- ### left(length)
返回当前String最左边的字符，具有指定长度。

- ### leftPad(length)
返回当前String，在左侧用空格填充，具有指定长度。

- ### leftPad(length, padStr)
返回当前String，在左侧用String padStr填充，具有指定长度。

- ### length()
返回String中包含的16位Unicode字符的数量。

- ### mid(startIndex, length)
返回一个新的String，从指定的从零开始的startIndex处的字符开始，具有length指定的字符数。

- ### normalizeSpace()
返回当前String，删除了前导、尾随和重复的空白字符。

- ### offsetByCodePoints(index, codePointOffset)
返回Unicode代码点的索引，该代码点从给定索引开始偏移指定的代码点数。

- ### remove(substring)
删除指定子字符串的所有出现并返回String结果。

- ### removeEnd(substring)
仅当指定子字符串出现在String末尾时才删除它。

- ### removeEndIgnoreCase(substring)
仅当指定子字符串出现在String末尾时才删除它，使用不区分大小写的匹配。

- ### removeStart(substring)
仅当指定子字符串出现在String开头时才删除它。

- ### removeStartIgnoreCase(substring)
仅当指定子字符串出现在String开头时才删除它，使用不区分大小写的匹配。

- ### repeat(numberOfTimes)
返回当前String重复指定次数的结果。

- ### repeat(separator, numberOfTimes)
返回当前String重复指定次数的结果，使用指定的分隔符分隔重复的String。

- ### replace(target, replacement)
将字符串中与字面目标序列target匹配的每个子字符串替换为指定的字面替换序列replacement。

- ### replaceAll(regExp, replacement)
将字符串中与正则表达式regExp匹配的每个子字符串替换为替换序列replacement。

- ### replaceFirst(regExp, replacement)
将字符串中与正则表达式regExp匹配的第一个子字符串替换为替换序列replacement。

- ### reverse()
返回一个String，所有字符都反转。

- ### right(length)
返回当前String最右边的字符，具有指定长度。

- ### rightPad(length)
返回当前String，在右侧用空格填充，具有指定长度。

- ### rightPad(length, padStr)
返回当前String，在右侧用String padStr填充，具有指定长度。

- ### split(regExp)
返回一个列表，包含String的每个子字符串，这些子字符串由正则表达式regExp或String的结尾终止。

- ### split(regExp, limit)
返回一个列表，包含String的每个子字符串，这些子字符串由正则表达式regExp或String的结尾终止。

- ### splitByCharacterType()
按字符类型分割当前String，并返回相同类型的连续字符组作为完整标记的列表。

- ### splitByCharacterTypeCamelCase()
按字符类型分割当前String，并返回相同类型的连续字符组作为完整标记的列表，但有以下例外：紧接在小写字符标记之前的任何大写字符属于以下字符标记而不是前面的字符标记。

- ### startsWith(prefix)
如果调用该方法的String以指定的前缀开头，则返回true。

- ### startsWithIgnoreCase(prefix)
如果当前String以指定的前缀开头，则返回true，不考虑前缀大小写。

- ### stripHtmlTags()
删除HTML标记并返回纯文本。

- ### substring(startIndex)
返回一个新的String，从指定的从零开始的startIndex处的字符开始，延伸到String的末尾。

- ### substring(startIndex, endIndex)
返回一个新的String，从指定的从零开始的startIndex处的字符开始，延伸到endIndex - 1处的字符。

- ### substringAfter(separator)
返回在指定分隔符第一次出现之后出现的子字符串。

- ### substringAfterLast(separator)
返回在指定分隔符最后一次出现之后出现的子字符串。

- ### substringBefore(separator)
返回在指定分隔符第一次出现之前出现的子字符串。

- ### substringBeforeLast(separator)
返回在指定分隔符最后一次出现之前出现的子字符串。

- ### substringBetween(tag)
返回在两个指定标记String实例之间出现的子字符串。

- ### substringBetween(open, close)
返回在两个指定String之间出现的子字符串。

- ### swapCase()
使用默认（英语美国）区域设置交换所有字符的大小写并返回结果String。

- ### toLowerCase()
使用默认（英语美国）区域设置的规则将String中的所有字符转换为小写。

- ### toLowerCase(locale)
使用指定区域设置的规则将String中的所有字符转换为小写。

- ### toUpperCase()
使用默认（英语美国）区域设置的规则将String中的所有字符转换为大写。

- ### toUpperCase(locale)
使用指定区域设置的规则将String中的所有字符转换为大写。

- ### trim()
返回不再包含任何前导或尾随空白字符的字符串副本。

- ### uncapitalize()
返回当前String，第一个字母为小写。

- ### unescapeCsv()
返回表示未转义CSV列的String。

- ### unescapeEcmaScript()
转义String中找到的任何EcmaScript字面量。

- ### unescapeHtml3()
使用HTML 3.0实体转义String中的字符。

- ### unescapeHtml4()
使用HTML 4.0实体转义String中的字符。

- ### unescapeJava()
返回一个String，其Java字面量被转义。转义的字面量包括引号的转义序列(\\")和控制字符，如制表符(\\t)和回车(\\n)。

- ### unescapeUnicode()
返回一个String，其转义的Unicode字符被转义。

- ### unescapeXml()
使用XML实体转义String中的字符。

- ### valueOf(dateToConvert)
返回表示指定Date的String，格式为标准"yyyy-MM-dd"。

- ### valueOf(datetimeToConvert)
返回表示指定Datetime的String，格式为标准"yyyy-MM-dd HH:mm:ss"，用于本地时区。

- ### valueOf(decimalToConvert)
返回表示指定Decimal的String。

- ### valueOf(doubleToConvert)
返回表示指定Double的String。

- ### valueOf(integerToConvert)
返回表示指定Integer的String。

- ### valueOf(longToConvert)
返回表示指定Long的String。

- ### valueOf(toConvert)
返回指定对象参数的字符串表示。

- ### valueOfGmt(datetimeToConvert)
返回表示指定Datetime的String，格式为标准"yyyy-MM-dd HH:mm:ss"，用于GMT时区。

## abbreviate(maxWidth)

返回String的缩写版本，具有指定长度，如果当前String长于指定长度，则附加省略号；否则，返回不带省略号的原始String。

#### 签名
```apex
public String abbreviate(Integer maxWidth)
```

#### 参数
**maxWidth**
- 类型：Integer
- 如果maxWidth小于四，此方法会抛出运行时异常。

#### 返回值
- 类型：String

#### 示例
```apex
String s = 'Hello Maximillian';
String s2 = s.abbreviate(8);
System.assertEquals('Hello...', s2);
System.assertEquals(8, s2.length());
```

## abbreviate(maxWidth, offset)

返回String的缩写版本，从指定的字符偏移量开始，具有指定长度。如果在这些位置删除了字符，返回的String在开头和结尾附加省略号。

#### 签名
```apex
public String abbreviate(Integer maxWidth, Integer offset)
```

#### 参数
**maxWidth**
- 类型：Integer
- 注意，偏移量不一定是返回String中最左边的字符或省略号后面的第一个字符，但它会出现在结果中的某个地方。无论如何，abbreviate不会返回长度大于maxWidth的String。如果maxWidth太小，此方法会抛出运行时异常。

**offset**
- 类型：Integer

#### 返回值
- 类型：String

#### 示例
```apex
String s = 'Hello Maximillian';
// 从M开始
String s2 = s.abbreviate(9, 6);
System.assertEquals('...Max...', s2);
System.assertEquals(9, s2.length());
```
