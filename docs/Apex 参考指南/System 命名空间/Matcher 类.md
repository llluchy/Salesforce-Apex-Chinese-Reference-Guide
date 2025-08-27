# Matcher 类

Matcher 使用 Pattern 对字符串执行匹配操作。

## 命名空间

System

## Matcher 方法

以下是 Matcher 的方法。

### end()
返回最后一个匹配字符之后的位置。

**签名**
```apex
public Integer end()
```

**返回值**
- 类型：Integer

### end(groupIndex)
返回在前一次匹配操作期间由组索引捕获的子序列的最后一个字符之后的位置。如果匹配成功但组本身没有匹配任何内容，则此方法返回 -1。

**签名**
```apex
public Integer end(Integer groupIndex)
```

**参数**
- **groupIndex** - 类型：Integer

**返回值**
- 类型：Integer

**用法**
捕获的组从左到右索引，从 1 开始。组零表示整个模式，因此表达式 `m.end(0)` 等效于 `m.end()`。

### find()
尝试查找与模式匹配的输入序列的下一个子序列。如果输入序列的子序列与此 Matcher 对象的模式匹配，则此方法返回 true。

**签名**
```apex
public Boolean find()
```

**返回值**
- 类型：Boolean

**用法**
此方法从此 Matcher 对象的区域开始，或者，如果前一次调用成功且 Matcher 对象此后未被重置，则从前一次匹配未匹配的第一个字符开始。

如果匹配成功，可以使用 start、end 和 group 方法获得更多信息。

### find(group)
重置 Matcher 对象，然后尝试查找与模式匹配的输入序列的下一个子序列。如果输入序列的子序列与此 Matcher 对象的模式匹配，则此方法返回 true。

**签名**
```apex
public Boolean find(Integer group)
```

**参数**
- **group** - 类型：Integer

**返回值**
- 类型：Boolean

**用法**
如果匹配成功，可以使用 start、end 和 group 方法获得更多信息。

### group()
返回前一次匹配返回的输入子序列。

**签名**
```apex
public String group()
```

**返回值**
- 类型：String

**用法**
注意，某些组（如 `(a*)`）匹配空字符串。当这样的组成功匹配输入中的空字符串时，此方法返回空字符串。

### group(groupIndex)
返回在前一次匹配操作期间由指定组索引捕获的输入子序列。如果匹配成功但指定组未能匹配输入序列的任何部分，则返回 null。

**签名**
```apex
public String group(Integer groupIndex)
```

**参数**
- **groupIndex** - 类型：Integer

**返回值**
- 类型：String

**用法**
捕获的组从左到右索引，从 1 开始。组零表示整个模式，因此表达式 `m.group(0)` 等效于 `m.group()`。

注意，某些组（如 `(a*)`）匹配空字符串。当这样的组成功匹配输入中的空字符串时，此方法返回空字符串。

### groupCount()
返回此 Matching 对象的模式中捕获组的数量。组零表示整个模式，不包含在此计数中。

**签名**
```apex
public Integer groupCount()
```

**返回值**
- 类型：Integer

### hasAnchoringBounds()
如果 Matcher 对象具有锚定边界，则返回 true；否则返回 false。默认情况下，Matcher 对象使用锚定边界区域。

**签名**
```apex
public Boolean hasAnchoringBounds()
```

**返回值**
- 类型：Boolean

**用法**
如果 Matcher 对象使用锚定边界，则此 Matcher 对象区域的边界匹配行锚点的开始和结束，如 ^ 和 $。

### hasTransparentBounds()
如果 Matcher 对象具有透明边界，则返回 true；如果它使用不透明边界，则返回 false。默认情况下，Matcher 对象使用不透明区域边界。

**签名**
```apex
public Boolean hasTransparentBounds()
```

**返回值**
- 类型：Boolean

### hitEnd()
如果在此 Matcher 对象执行的最后一次匹配操作中搜索引擎找到了输入的结尾，则返回 true。当此方法返回 true 时，更多输入可能会改变最后一次搜索的结果。

**签名**
```apex
public Boolean hitEnd()
```

**返回值**
- 类型：Boolean

### lookingAt()
尝试从区域开始处开始将输入序列与模式进行匹配。

**签名**
```apex
public Boolean lookingAt()
```

**返回值**
- 类型：Boolean

**用法**
与 matches 方法一样，此方法总是从区域开始处开始；与该方法不同，它不要求匹配整个区域。

如果匹配成功，可以使用 start、end 和 group 方法获得更多信息。

### matches()
尝试将整个区域与模式进行匹配。

**签名**
```apex
public Boolean matches()
```

**返回值**
- 类型：Boolean

**用法**
如果匹配成功，可以使用 start、end 和 group 方法获得更多信息。

### pattern()
返回创建此 Matcher 对象的 Pattern 对象。

**签名**
```apex
public Pattern object pattern()
```

**返回值**
- 类型：System.Pattern

### quoteReplacement(inputString)
返回指定字符串 inputString 的字面替换字符串。返回字符串中的字符与 inputString 中的字符序列匹配。

**签名**
```apex
public static String quoteReplacement(String inputString)
```

**参数**
- **inputString** - 类型：String

**返回值**
- 类型：String

**用法**
输入字符串中的元字符（如 $ 或 ^）和转义序列被视为字面字符，没有特殊含义。

### region(start, end)
设置此 Matcher 对象的区域限制。区域是搜索以查找匹配的输入序列的一部分。

**签名**
```apex
public Matcher object region(Integer start, Integer end)
```

**参数**
- **start** - 类型：Integer
- **end** - 类型：Integer

**返回值**
- 类型：Matcher

**用法**
此方法首先重置 Matcher 对象，然后将区域设置为从 start 指定的索引开始，到 end 指定的索引结束。

根据使用的透明度边界，某些构造（如锚点）在区域边界处或周围可能表现不同。

### regionEnd()
返回此 Matcher 对象区域的结束索引（独占）。

**签名**
```apex
public Integer regionEnd()
```

**返回值**
- 类型：Integer

### regionStart()
返回此 Matcher 对象区域的开始索引（包含）。

**签名**
```apex
public Integer regionStart()
```

**返回值**
- 类型：Integer

### replaceAll(replacementString)
用替换字符串替换与模式匹配的输入序列的每个子序列。

**签名**
```apex
public String replaceAll(String replacementString)
```

**参数**
- **replacementString** - 类型：String

**返回值**
- 类型：String

**用法**
此方法首先重置 Matcher 对象，然后扫描输入序列以查找模式的匹配项。不是任何匹配项一部分的字符直接附加到结果字符串；每个匹配项在结果中被替换字符串替换。替换字符串可能包含对捕获子序列的引用。

注意，替换字符串中的反斜杠 (\) 和美元符号 ($) 可能导致结果与将字符串视为字面替换字符串时的结果不同。美元符号可能被视为对捕获子序列的引用，反斜杠用于转义替换字符串中的字面字符。

调用此方法会更改此 Matcher 对象的状态。如果 Matcher 对象要在进一步的匹配操作中使用，应该首先重置它。

给定正则表达式 `a*b`、输入 `"aabxyzaabxyzabxyzb"` 和替换字符串 `"-"`，对该表达式的 Matcher 对象调用此方法将产生字符串 `"-xyz-xyz-xyz-"`。

### replaceFirst(replacementString)
用替换字符串替换与模式匹配的输入序列的第一个子序列。

**签名**
```apex
public String replaceFirst(String replacementString)
```

**参数**
- **replacementString** - 类型：String

**返回值**
- 类型：String

**用法**
注意，替换字符串中的反斜杠 (\) 和美元符号 ($) 可能导致结果与将字符串视为字面替换字符串时的结果不同。美元符号可能被视为对捕获子序列的引用，反斜杠用于转义替换字符串中的字面字符。

调用此方法会更改此 Matcher 对象的状态。如果 Matcher 对象要在进一步的匹配操作中使用，应该首先重置它。

给定正则表达式 `dog`、输入 `"zzzdogzzzdogzzz"` 和替换字符串 `"cat"`，对该表达式的 Matcher 对象调用此方法将返回字符串 `"zzzcatzzzdogzzz"`。

### requireEnd()
如果更多输入可能将正匹配变为负匹配，则返回 true。

**签名**
```apex
public Boolean requireEnd()
```

**返回值**
- 类型：Boolean

**用法**
如果此方法返回 true 且找到了匹配项，则更多输入可能导致匹配项丢失。

如果此方法返回 false 且找到了匹配项，则更多输入可能会改变匹配项但匹配项不会丢失。

如果没有找到匹配项，则 requireEnd 没有意义。

### reset()
重置此 Matcher 对象。重置 Matcher 对象会丢弃其所有显式状态信息。

**签名**
```apex
public Matcher object reset()
```

**返回值**
- 类型：Matcher

**用法**
此方法不会更改 Matcher 对象是否使用锚定边界。您必须显式使用 useAnchoringBounds 方法来更改锚定边界。

### reset(inputSequence)
使用新的输入序列重置此 Matcher 对象。重置 Matcher 对象会丢弃其所有显式状态信息。

**签名**
```apex
public Matcher reset(String inputSequence)
```

**参数**
- **inputSequence** - 类型：String

**返回值**
- 类型：Matcher

### start()
返回前一次匹配的第一个字符的开始索引。

**签名**
```apex
public Integer start()
```

**返回值**
- 类型：Integer

### start(groupIndex)
返回在前一次匹配操作期间由组索引指定的组捕获的子序列的开始索引。捕获的组从左到右索引，从 1 开始。组零表示整个模式，因此表达式 `m.start(0)` 等效于 `m.start()`。

**签名**
```apex
public Integer start(Integer groupIndex)
```

**参数**
- **groupIndex** - 类型：Integer

**返回值**
- 类型：Integer

### useAnchoringBounds(anchoringBounds)
设置 Matcher 对象的区域锚定边界。默认情况下，Matcher 对象使用锚定边界区域。

**签名**
```apex
public Matcher object useAnchoringBounds(Boolean anchoringBounds)
```

**参数**
- **anchoringBounds** - 类型：Boolean
  - 如果指定 true，Matcher 对象使用锚定边界。如果指定 false，则使用非锚定边界。

**返回值**
- 类型：Matcher

**用法**
如果 Matcher 对象使用锚定边界，则此 Matcher 对象区域的边界匹配行锚点的开始和结束，如 ^ 和 $。

### usePattern(pattern)
更改 Matcher 对象用于查找匹配项的 Pattern 对象。此方法导致 Matcher 对象丢失关于上次发生的匹配的组的信息。Matcher 对象在输入中的位置保持不变。

**签名**
```apex
public Matcher object usePattern(Pattern pattern)
```

**参数**
- **pattern** - 类型：System.Pattern

**返回值**
- 类型：Matcher

### useTransparentBounds(transparentBounds)
设置此 Matcher 对象的透明度边界。默认情况下，Matcher 对象使用锚定边界区域。

**签名**
```apex
public Matcher object useTransparentBounds(Boolean transparentBounds)
```

**参数**
- **transparentBounds** - 类型：Boolean
  - 如果指定 true，Matcher 对象使用透明边界。如果指定 false，则使用不透明边界。

**返回值**
- 类型：Matcher
