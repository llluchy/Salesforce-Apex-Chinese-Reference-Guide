# ApexPages 类

使用 ApexPages 来添加和检查与当前页面关联的消息，以及引用当前页面。

## 命名空间

System

## 用法

此外，ApexPages 用作 PageReference 类和 Message 类的命名空间。

## ApexPages 方法

以下是 ApexPages 的方法。所有都是实例方法。

### addMessage(message)

向当前页面上下文添加消息。

#### 签名

```apex
public Void addMessage(ApexPages.Message message)
```

#### 参数

**message**
- 类型：ApexPages.Message
- 描述：要添加的消息对象

#### 返回值

- 类型：Void

### addMessages(exceptionThrown)

基于抛出的异常向当前页面上下文添加消息列表。

#### 签名

```apex
public Void addMessages(Exception exceptionThrown)
```

#### 参数

**exceptionThrown**
- 类型：Exception
- 描述：抛出的异常对象

#### 返回值

- 类型：Void

### currentPage()

返回当前页面的 PageReference。

#### 签名

```apex
public System.PageReference currentPage()
```

#### 返回值

- 类型：System.PageReference

#### 示例

此代码段返回当前页面的 id 参数。

```apex
public MyController() {
    account = [
        SELECT Id, Name, Site 
        FROM Account 
        WHERE Id =
            :ApexPages.currentPage().
             getParameters().
             get('id')
    ];
}
```

### getMessages()

返回与当前上下文关联的消息列表。

#### 签名

```apex
public ApexPages.Message[] getMessages()
```

#### 返回值

- 类型：ApexPages.Message[]

### hasMessages()

如果当前上下文有关联的消息，则返回 true，否则返回 false。

#### 签名

```apex
public Boolean hasMessages()
```

#### 返回值

- 类型：Boolean

### hasMessages(severity)

如果存在指定严重性的消息，则返回 true，否则返回 false。

#### 签名

```apex
public Boolean hasMessages(ApexPages.Severity severity)
```

#### 参数

**severity**
- 类型：ApexPages.Severity
- 描述：消息的严重性级别

#### 返回值

- 类型：Boolean

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_apexpages.htm*
