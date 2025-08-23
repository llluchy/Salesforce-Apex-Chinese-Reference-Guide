# Cookie 类

Cookie类允许您使用Apex访问Salesforce站点的cookie。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Cookie类是Salesforce中用于管理网站cookie的重要工具。
> 
> 它允许你在Salesforce Sites中创建、读取和管理cookie，用于存储用户会话信息、偏好设置等。

## 命名空间

System

## 用法

使用PageReference类的setCookies方法将cookie附加到页面。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Cookie的主要用途：
> 1. 存储用户会话信息
> 2. 保存用户偏好设置
> 3. 跟踪用户访问次数
> 4. 实现个性化功能

## 重要注意事项

- 在Apex中设置的Cookie名称和值会进行URL编码，即@等字符会被替换为百分号和十六进制表示
- setCookies方法会在cookie名称前添加"apex__"前缀
- 将cookie的值设置为null会发送一个空字符串值的cookie，而不是设置过期的属性
- 创建cookie后，cookie的属性无法更改
- 在cookie中存储敏感信息时要小心。页面会被缓存，无论cookie值如何。如果使用cookie值生成动态内容，应该禁用页面缓存

## 限制

使用Cookie类时请考虑以下限制：

- Cookie类只能使用Salesforce API版本19及以上保存的Apex访问
- 每个Salesforce Sites域可以设置的cookie最大数量取决于浏览器。较新的浏览器比旧浏览器有更高的限制
- Cookie必须小于4K，包括名称和属性
- Visualforce页面的最大头部大小（包括cookie）为8,192字节

## 示例

以下示例创建了一个类CookieController，它与Visualforce页面一起使用（见下面的标记），每次用户显示页面时更新计数器。用户访问页面的次数存储在cookie中。

```apex
// 一个Visualforce控制器类，创建一个cookie
// 用于跟踪用户显示页面的频率
public class CookieController {
    public CookieController() {
        Cookie counter = ApexPages.currentPage().getCookies().get('counter');
        
        // 如果这是用户第一次访问页面，
        // 创建一个名为'counter'的新cookie，初始值为'1'，
        // 路径为'null'，maxAge为'-1'，isSecure为'true'。
        if (counter == null) {
            counter = new Cookie('counter','1',null,-1,true);
        } else {
            // 如果这不是用户第一次访问页面
            // 创建一个新的cookie，将原始计数加1
            Integer count = Integer.valueOf(counter.getValue());
            counter = new Cookie('counter', String.valueOf(count+1),null,-1,true);
        }
        
        // 为页面设置新的cookie
        ApexPages.currentPage().setCookies(new Cookie[]{counter});
    }
    
    // 此方法由Visualforce action {!count}使用，用于显示
    // 用户显示页面次数的当前值。此值存储在cookie中。
    public String getCount() {
        Cookie counter = ApexPages.currentPage().getCookies().get('counter');
        if(counter == null) {
            return '0';
        }
        return counter.getValue();
    }
}

// Visualforce控制器的测试类
@isTest
private class CookieControllerTest {
    // 验证正面测试用例的测试方法
    static testMethod void testCounter() {
        // 第一次页面查看
        CookieController controller = new CookieController();
        System.assert(controller.getCount() == '1');
        // 第二次页面查看       
        controller = new CookieController();
        System.assert(controller.getCount() == '2');
    }
}
```

以下是使用上述CookieController Apex控制器的Visualforce页面。action {!count}调用上面控制器中的getCount方法。

```xml
<apex:page controller="CookieController">
    您已经看过这个页面 {!count} 次
</apex:page>
```

## Cookie 构造函数

以下是Cookie的构造函数。

### Cookie(name, value, path, maxAge, isSecure)

使用指定的名称、值、路径、年龄和安全设置创建Cookie类的新实例。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这是最常用的Cookie构造函数，提供了基本的cookie创建功能。
> 
> 通过这个构造函数可以设置cookie的名称、值、路径、过期时间和安全属性。

#### 签名

```apex
public Cookie(String name, String value, String path, Integer maxAge, Boolean isSecure)
```

#### 参数

**name**
- 类型：String
- 描述：cookie名称。不能为null

**value**
- 类型：String
- 描述：cookie数据，如会话ID

**path**
- 类型：String
- 描述：可以从中检索cookie的路径

**maxAge**
- 类型：Integer
- 描述：表示cookie有效期的秒数。如果设置为小于零，则发出会话cookie。如果设置为零，则删除cookie

**isSecure**
- 类型：Boolean
- 描述：指示cookie是否只能通过HTTPS访问的值（true）或不是（false）

#### 示例

```apex
// 创建一个安全的会话cookie
Cookie sessionCookie = new Cookie('sessionId', 'abc123', '/', -1, true);
```

### Cookie(name, value, path, maxAge, isSecure, SameSite)

使用指定的名称、值、路径和年龄，以及安全和跨域行为设置创建Cookie类的新实例。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这个构造函数增加了SameSite属性，用于控制cookie的跨域行为。
> 
> SameSite属性对于防止CSRF攻击和确保cookie安全非常重要。

#### 签名

```apex
public Cookie(String name, String value, String path, Integer maxAge, Boolean isSecure, String SameSite)
```

#### 参数

**name**
- 类型：String
- 描述：cookie名称。不能为null

**value**
- 类型：String
- 描述：cookie数据，如会话ID

**path**
- 类型：String
- 描述：可以从中检索cookie的路径

**maxAge**
- 类型：Integer
- 描述：表示cookie有效期的秒数。如果设置为小于零，则发出会话cookie。如果设置为零，则删除cookie

**isSecure**
- 类型：Boolean
- 描述：指示cookie是否只能通过HTTPS访问的值（true）或不是（false）

**SameSite**
- 类型：String
- 描述：cookie上的SameSite属性控制其跨域行为。有效值为None、Lax和Strict。Chrome 80发布后，SameSite值为None的cookie还必须通过设置None; Secure值来标记为安全

#### 示例

```apex
// 创建一个具有SameSite属性的安全cookie
Cookie secureCookie = new Cookie('userPref', 'darkMode', '/', 3600, true, 'Strict');
```

### Cookie(name, value, path, maxAge, isSecure, SameSite, isHttpOnly)

使用指定的名称、值、路径和年龄，以及安全、跨域行为和JavaScript访问设置创建Cookie类的新实例。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 这个构造函数增加了HttpOnly属性，用于防止客户端JavaScript访问cookie。
> 
> HttpOnly属性对于防止XSS攻击和保护敏感cookie数据非常重要。

#### 签名

```apex
public Cookie(String name, String value, String path, Integer maxAge, Boolean isSecure, String SameSite, Boolean isHttpOnly)
```

#### 参数

**name**
- 类型：String
- 描述：cookie名称。不能为null

**value**
- 类型：String
- 描述：cookie数据，如会话ID

**path**
- 类型：String
- 描述：可以从中检索cookie的路径

**maxAge**
- 类型：Integer
- 描述：表示cookie有效期的秒数。如果设置为小于零，则发出会话cookie。如果设置为零，则删除cookie

**isSecure**
- 类型：Boolean
- 描述：指示cookie是否只能通过HTTPS访问的值（true）或不是（false）

**SameSite**
- 类型：String
- 描述：cookie上的SameSite属性控制其跨域行为。有效值为None、Lax和Strict。Chrome 80发布后，SameSite值为None的cookie还必须通过设置None; Secure值来标记为安全

**isHttpOnly**
- 类型：Boolean
- 描述：指示是否设置cookie的HttpOnly属性（true）或不是（false）。如果为true，客户端JavaScript无法访问cookie

#### 示例

```apex
// 创建一个具有HttpOnly属性的安全cookie
Cookie httpOnlyCookie = new Cookie('authToken', 'xyz789', '/', 7200, true, 'Strict', true);
```

## Cookie 方法

以下是Cookie的方法。所有都是实例方法。

### getDomain()

返回发出请求的服务器名称。

#### 签名

```apex
public String getDomain()
```

#### 返回值

- 类型：String

### getMaxAge()

返回表示cookie有效期的秒数。如果设置为 < 0，则发出会话cookie。如果设置为0，则删除cookie。

#### 签名

```apex
public Integer getMaxAge()
```

#### 返回值

- 类型：Integer

### getName()

返回cookie的名称。不能为null。

#### 签名

```apex
public String getName()
```

#### 返回值

- 类型：String

### getPath()

返回可以从中检索cookie的路径。如果为null或空白，位置设置为根或"/"。

#### 签名

```apex
public String getPath()
```

#### 返回值

- 类型：String

### getSameSite()

返回cookie的SameSite属性值。

#### 签名

```apex
public String getSameSite()
```

#### 返回值

- 类型：String

### getValue()

返回cookie中捕获的数据，如会话ID。

#### 签名

```apex
public String getValue()
```

#### 返回值

- 类型：String

### isSecure()

如果cookie只能通过HTTPS访问，则返回true，否则返回false。

#### 签名

```apex
public Boolean isSecure()
```

#### 返回值

- 类型：Boolean

### isHttpOnly()

如果禁止客户端JavaScript访问cookie，则返回true；否则返回false。

#### 签名

```apex
public Boolean isHttpOnly()
```

#### 返回值

- 类型：Boolean

## 注意事项

- Cookie类只能使用Salesforce API版本19及以上访问
- 每个cookie必须小于4K
- 页面头部大小（包括cookie）不能超过8,192字节
- 创建cookie后无法修改其属性
- 在cookie中存储敏感信息时要小心
- 注意SameSite属性的设置，特别是对于跨域场景

## 相关链接

- [Salesforce Sites文档](https://developer.salesforce.com/docs/atlas.en-us.sites.meta/sites/sites_overview.htm)
- [SameSite Cookies Explained](https://web.dev/samesite-cookies-explained/)
- [Set-Cookie HTTP Response Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_classes_sites_cookie.htm*
