# Blob 类

包含Blob原始数据类型的方法。

## 命名空间

System

## 用法

Salesforce仅支持通过Salesforce提供的Apex类方法进行Blob操作。有关Blob的更多信息，请参阅原始数据类型。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Blob是Salesforce中用于处理二进制数据的原始数据类型，比如文件、图片等。
> 
> 在Apex中，你不能直接操作Blob的字节，只能通过Salesforce提供的方法来处理Blob数据。

## 示例

以下示例展示如何创建Blob并获取其大小：

```apex
String myString = 'StringToBlob';
Blob myBlob = Blob.valueOf(myString);
Integer size = myBlob.size();
System.debug('Blob size: ' + size);
```

## Blob 方法

以下是Blob的方法。

### size()

返回Blob中的字节数。

#### 签名

```apex
public Integer size()
```

#### 返回值

- 类型：Integer

#### 示例

```apex
String myString = 'StringToBlob';
Blob myBlob = Blob.valueOf(myString);
Integer size = myBlob.size();
System.assertEquals(12, size); // 'StringToBlob' 有12个字符
```

### toPdf(stringToConvert)

从给定字符串创建二进制对象，将其编码为PDF文件。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> toPdf方法可以将字符串转换为PDF格式的Blob对象。
> 
> 这个方法常用于生成PDF附件，比如将文本内容转换为PDF文件并保存为Attachment。

#### 签名

```apex
public static Blob toPdf(String stringToConvert)
```

#### 参数

**stringToConvert**
- 类型：String
- 描述：要转换为PDF的字符串内容

#### 返回值

- 类型：Blob

#### 用法

`Blob.toPDF(stringToConvert)` 不支持网络字体，因此无法为字符串指定字体。

`Blob.toPDF(stringToConvert)` 也不支持多字节字符，如日语和带重音的国际字符。要在PDF文件中渲染多字节字符，请考虑将字符串添加到Visualforce页面，然后将页面渲染为PDF文件。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这个方法有一些限制：
> - 不能使用自定义字体
> - 不支持中文、日文等多字节字符
> - 如果需要支持这些功能，建议使用Visualforce页面来生成PDF

#### 示例

```apex
String pdfContent = 'This is a test string';
Account a = new Account(name = 'test');
insert a;

Attachment attachmentPDF = new Attachment();
attachmentPDF.parentId = a.id;
attachmentPDF.name = a.name + '.pdf';
attachmentPDF.body = Blob.toPDF(pdfContent);
insert attachmentPDF;
```

### toString()

将Blob转换为String。

#### 签名

```apex
public String toString()
```

#### 返回值

- 类型：String

#### 示例

```apex
String myString = 'StringToBlob';
Blob myBlob = Blob.valueOf(myString);
System.assertEquals('StringToBlob', myBlob.toString());
```

### valueOf(stringToBlob)

将指定的String转换为Blob。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> valueOf方法是最常用的Blob创建方法，可以将字符串转换为Blob对象。
> 
> 这个方法常用于处理文本数据，比如从字符串创建Blob用于文件操作。

#### 签名

```apex
public static Blob valueOf(String stringToBlob)
```

#### 参数

**stringToBlob**
- 类型：String
- 描述：要转换为Blob的字符串

#### 返回值

- 类型：Blob

#### 示例

```apex
String myString = 'StringToBlob';
Blob myBlob = Blob.valueOf(myString);
System.debug('Blob created: ' + myBlob);
```

## 注意事项

- Blob操作只能通过Salesforce提供的Apex类方法进行
- `toPdf()` 方法不支持网络字体和多字节字符
- 引用静态资源会抛出 `InvalidParameterValue` 异常
- 对于复杂的PDF生成需求，建议使用Visualforce页面

## 相关链接

- [原始数据类型文档](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_primitives.htm)
- [将Visualforce页面渲染为PDF文件](https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_output_pdf.htm)

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm*
