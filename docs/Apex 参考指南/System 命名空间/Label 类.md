# Label 类

提供检索自定义标签或检查特定语言和命名空间中标签翻译是否存在的方法。标签名称在运行时动态解析，如果请求的语言存在翻译，则覆盖用户的当前语言。您无法访问在不同命名空间中受保护的标签。

## 命名空间

System

## 用法

自定义标签使开发人员能够通过自动以用户的本机语言呈现信息（例如，帮助文本或错误消息）来创建多语言应用程序。自定义标签有 1000 个字符的限制，可以从 Apex 类、Visualforce 页面、Lightning 页面或 Lightning 组件访问。有关自定义标签的更多信息，请参阅 Salesforce 帮助中的自定义标签。

标签值可以翻译成 Salesforce 支持的任何语言。有关支持的语言，请参阅 Salesforce 帮助中的支持语言。

要定义自定义标签，从设置中，在快速查找框中输入自定义标签，然后选择自定义标签。

要分配翻译值，请打开翻译工作台并添加翻译映射。

要检索默认语言设置或语言和命名空间的标签，请使用 System.Label.get(namespace, label, language)。

要检查命名空间中标签和语言的翻译是否存在，请使用 Label.translationExists(namespace, label, language)。

在 Apex 代码中，您可以像这样引用或实例化 Label：

```apex
System.Label.myLabelName
```

有关将标签传递到 Aura 组件的信息，请参阅 Lightning Aura 组件开发者指南中的在 Apex 中获取标签。

## 示例

此示例如果 MyNamespace 命名空间中存在名为 MyLabel 的英文标签，则返回 True。

```apex
boolean exists = Label.translationExists('MyNamespace', 'MyLabel', 'en')
```

此示例检索 MyLabel 在法语中的自定义标签翻译文本。

```apex
String value = Label.get('MyNamespace', 'MyLabel', 'fr')
```

## Label 方法

以下是 Label 的方法。

### get(namespace, label)
检索指定命名空间和默认语言设置的自定义标签。

**签名**
```apex
public static String get(String namespace, String label)
```

**参数**
- **namespace** - 类型：String
  - 如果命名空间名称为 null，则默认为包命名空间。如果命名空间名称为空字符串，则表示组织命名空间。
- **label** - 类型：String
  - 标签名称不能为 null 或空字符串。

**返回值**
- 类型：String

### get(namespace, label, language)
检索指定命名空间和语言的自定义标签。

**签名**
```apex
public static String get(String namespace, String label, String language)
```

**参数**
- **namespace** - 类型：String
  - 如果命名空间名称为 null，则默认为包命名空间。如果命名空间名称为空字符串，则表示组织命名空间。
- **label** - 类型：String
  - 标签名称不能为 null 或空字符串。
- **language** - 类型：String
  - 此参数必须是有效的语言 ISO 代码。请参阅 Salesforce 帮助中支持语言的仅平台语言部分。

**返回值**
- 类型：String

### translationExists(namespace, label, language)
检查命名空间中标签和语言的翻译是否存在。

**签名**
```apex
public static Boolean translationExists(string namespace, string label, string language)
```

**参数**
- **namespace** - 类型：String
  - 如果命名空间名称为 null，则默认为包命名空间。如果命名空间名称为空字符串，则表示组织命名空间。
- **label** - 类型：String
  - 标签名称不能为 null 或空字符串。
- **language** - 类型：String
  - 此参数必须是有效的语言 ISO 代码。请参阅 Salesforce 帮助中支持语言的仅平台语言部分。

**返回值**
- 类型：Boolean

