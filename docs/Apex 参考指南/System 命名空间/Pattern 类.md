# Pattern 类

表示正则表达式的编译表示。

## 命名空间

System

## Pattern 方法

以下是 Pattern 的方法。

### compile(regExp)
将正则表达式编译为 Pattern 对象。

**签名**
```apex
public static Pattern compile(String regExp)
```

**参数**
- **regExp** - 类型：String

**返回值**
- 类型：System.Pattern

### matcher(stringtoMatch)
创建一个 Matcher 对象，将输入字符串 stringtoMatch 与此 Pattern 对象进行匹配。

**签名**
```apex
public Matcher matcher(String stringtoMatch)
```

**参数**
- **stringtoMatch** - 类型：String

**返回值**
- 类型：Matcher

### matches(regExp, stringtoMatch)
编译正则表达式 regExp 并尝试将其与指定字符串进行匹配。如果指定字符串匹配正则表达式，则此方法返回 true；否则返回 false。

**签名**
```apex
public static Boolean matches(String regExp, String stringtoMatch)
```

**参数**
- **regExp** - 类型：String
- **stringtoMatch** - 类型：String

**返回值**
- 类型：Boolean

**用法**
如果要多次使用模式，编译一次并重用它比每次都调用此方法更有效。

**示例**
注意以下代码示例：
```apex
Pattern.matches(regExp, input);
```

产生与此代码示例相同的结果：
```apex
Pattern.compile(regex).matcher(input).matches();
```

### pattern()
返回编译此 Pattern 对象所依据的正则表达式。

**签名**
```apex
public String pattern()
```

**返回值**
- 类型：String

### quote(yourString)
返回一个字符串，可用于创建一个模式，该模式将字符串 yourString 作为字面模式进行匹配。

**签名**
```apex
public static String quote(String yourString)
```

**参数**
- **yourString** - 类型：String

**返回值**
- 类型：String

**用法**
输入字符串中的元字符（如 $ 或 ^）和转义序列被视为字面字符，没有特殊含义。

### split(regExp)
返回一个列表，其中包含与此模式匹配的 String 的每个子字符串。

**签名**
```apex
public String[] split(String regExp)
```

**参数**
- **regExp** - 类型：String

**返回值**
- 类型：String[]

**注意**
在 API 版本 34.0 及更早版本中，零宽度 regExp 值会在方法输出的开头产生一个空列表项。

**用法**
子字符串按它们在 String 中出现的顺序放置在列表中。如果 regExp 不匹配模式，结果列表只有一个包含原始 String 的元素。

### split(regExp, limit)
返回一个列表，其中包含由与此模式匹配的正则表达式 regExp 或 String 的结尾终止的 String 的每个子字符串。

**签名**
```apex
public String[] split(String regExp, Integer limit)
```

**参数**
- **regExp** - 类型：String
- **limit** - 类型：Integer
  - （可选）控制模式应用的次数，因此影响列表的长度。

**返回值**
- 类型：String[]

**用法**
如果 limit 大于零：
- 模式最多应用 (limit – 1) 次。
- 列表的长度不大于 limit。
- 列表的最后一个条目包含最后一个匹配分隔符之后的所有输入。

如果 limit 为非正数，模式应用尽可能多的次数，列表可以有任意长度。

如果 limit 为零，模式应用尽可能多的次数，列表可以有任意长度，并且丢弃尾随空字符串。

**注意**
在 API 版本 34.0 及更早版本中，零宽度 regExp 值会在方法输出的开头产生一个空列表项。
