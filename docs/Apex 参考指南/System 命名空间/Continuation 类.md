# Continuation 类

使用Continuation类异步调用SOAP或REST Web服务。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Continuation类是Salesforce中用于处理长时间运行的异步调用的重要工具。
> 
> 它允许你在Visualforce页面中进行异步的Web服务调用，而不会阻塞用户界面。

## 命名空间

System

## 用法

Continuation类主要用于在Visualforce页面中进行异步的Web服务调用，特别适用于长时间运行的操作。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Continuation的优势：
> 1. 支持异步调用，不会阻塞用户界面
> 2. 可以设置超时时间（最大120秒）
> 3. 可以保存状态信息
> 4. 支持多个HTTP请求

## 示例

有关代码示例，请参阅从Visualforce页面进行长时间运行的调用。

## Continuation 构造函数

以下是Continuation的构造函数。

### Continuation(timeout)

使用指定的超时时间（以秒为单位）创建Continuation类的实例。超时最大值为120秒。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 构造函数用于创建Continuation实例，并设置超时时间。
> 
> 超时时间决定了异步调用的最大等待时间，超过这个时间会自动超时。

#### 签名

```apex
public Continuation(Integer timeout)
```

#### 参数

**timeout**
- 类型：Integer
- 描述：此延续的超时时间（以秒为单位）

#### 示例

```apex
// 创建一个超时时间为60秒的Continuation实例
Continuation cont = new Continuation(60);
```

## Continuation 属性

以下是Continuation的属性。

### continuationMethod

在调用响应返回后调用的回调方法的名称。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> continuationMethod指定了异步调用完成后要执行的方法。
> 
> 如果没有设置这个属性，会再次调用发起异步调用的同一个action方法。

#### 签名

```apex
public String continuationMethod {get; set;}
```

#### 属性值

- 类型：String

#### 用法

如果未为Continuation设置continuationMethod属性，当调用响应返回时，会再次调用进行异步调用的同一个action方法。

### timeout

延续的超时时间（以秒为单位）。最大值：120秒。

#### 签名

```apex
public Integer timeout {get; set;}
```

#### 属性值

- 类型：Integer

### state

存储在此延续中的数据，可以在调用完成并调用回调方法后检索。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> state属性用于保存状态信息，在异步调用完成后可以恢复这些信息。
> 
> 这对于在异步调用过程中保持数据状态非常有用。

#### 签名

```apex
public Object state {get; set;}
```

#### 属性值

- 类型：Object

#### 示例

此示例显示如何在控制器中保存延续的状态信息：

```apex
// 声明内部类来保存状态信息
private class StateInfo {
    String msg { get; set; }
    List<String> urls  { get; set; }
    StateInfo(String msg, List<String> urls) {
        this.msg = msg;
        this.urls = urls;
    }
}

// 然后在action方法中，为延续设置状态
continuationInstance.state = new StateInfo('Some state data', urls);
```

## Continuation 方法

以下是Continuation的方法。

### addHttpRequest(request)

添加与此延续关联的调用的HTTP请求。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> addHttpRequest方法用于向Continuation添加HTTP请求。
> 
> 每个Continuation最多可以添加三个请求，每个请求都会获得一个唯一的标签。

#### 签名

```apex
public String addHttpRequest(System.HttpRequest request)
```

#### 参数

**request**
- 类型：HttpRequest
- 描述：要由此延续发送到外部服务的HTTP请求

#### 返回值

- 类型：String
- 描述：标识与此延续关联的HTTP请求的唯一标签。此标签用于getRequests()返回的映射中，以标识延续中的各个请求

#### 用法

您最多可以向延续添加三个请求。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 传入的每个请求中设置的超时时间会被忽略。只有延续的全局超时最大值120秒适用。

### getRequests()

返回与此延续关联的所有标签和请求作为键值对。

#### 签名

```apex
public Map<String,System.HttpRequest> getRequests()
```

#### 返回值

- 类型：Map<String,HttpRequest>
- 描述：与此延续关联的所有请求的映射。映射键是请求标签，映射值是对应的HTTP请求

### getResponse(requestLabel)

返回与指定标签对应的请求的响应。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> getResponse方法用于获取异步调用的响应结果。
> 
> 通过状态码可以判断调用是否成功，以及可能遇到的问题。

#### 签名

```apex
public static HttpResponse getResponse(String requestLabel)
```

#### 参数

**requestLabel**
- 类型：String
- 描述：要获取响应的请求标签

#### 返回值

- 类型：HttpResponse

#### 用法

状态码在HttpResponse对象中返回，可以通过在响应上调用getStatusCode()获得。状态码200表示请求成功。其他状态码值表示遇到的问题类型。

#### 错误状态码示例

当响应出现问题时，一些可能的状态码值包括：

- **2000**：达到超时，服务器没有机会响应
- **2001**：连接失败
- **2002**：发生异常
- **2003**：响应尚未到达（这也意味着Apex异步调用框架尚未恢复）
- **2004**：响应大小过大（大于1 MB）

## 注意事项

- Continuation主要用于Visualforce页面中的异步调用
- 超时时间最大为120秒
- 每个Continuation最多支持三个HTTP请求
- 建议使用state属性保存重要的状态信息
- 注意处理各种错误状态码

## 相关链接

- [从Visualforce页面进行长时间运行的调用](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_continuation.htm)
- [异步调用文档](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_async_overview.htm)

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_class_System_Continuation.htm*
