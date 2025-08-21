# System 命名空间

System命名空间提供用于核心Apex功能的类和方法。

以下是System命名空间中的类。

- [**AccessLevel 类**](./AccessLevel%20类.md)  
定义Apex数据库操作执行的不同模式，如系统模式或用户模式。

- [**AccessType 枚举**](./AccessType%20枚举.md)  
指定sObject字段的访问检查类型。

- [**Address 类**](./Address%20类.md)  
包含用于访问地址复合字段组件字段的方法。

- [**Answers 类**](./Answers%20类.md)  
表示区域答案。

- [**ApexPages 类**](./ApexPages%20类.md)  
使用ApexPages添加和检查与当前页面关联的消息，以及引用当前页面。

- [**Approval 类**](./Approval%20类.md)   
包含用于处理审批请求以及在记录上设置和解除审批流程锁定和解锁的方法。

- [**Assert 类**](./Assert%20类.md)  
包含用于在测试方法中断言各种条件的方法，例如两个值是否相同、条件是否为真或变量是否为null。

- [**AsyncInfo 类**](./AsyncInfo%20类.md)  
提供用于获取Queueable事务的当前堆栈深度、最大堆栈深度和最小队列延迟的方法，以及确定是否设置了最大堆栈深度。

- [**AsyncOptions 类**](./AsyncOptions%20类.md)  
包含Queueable事务的最大堆栈深度和最小队列延迟（以分钟为单位）。作为参数传递给System.enqueueJob()方法，用于定义唯一的Queueable作业签名、Queueable事务的最大堆栈深度和最小队列延迟（以分钟为单位）。

- [**Blob 类**]()  
包含Blob原始数据类型的方法。

- [**Boolean 类**]()  
包含Boolean原始数据类型的方法。

- [**BusinessHours 类**]()  
使用BusinessHours方法设置客户支持团队运营的营业时间。

- [**CallbackStatus 枚举**]()  
指定异步请求到外部系统的状态。

- [**Callable 接口**]()  
使开发人员能够使用通用接口在Apex类或触发器之间构建松耦合集成，即使对于单独包中的代码也是如此。同意通用接口使来自不同公司或不同部门的开发人员能够相互构建解决方案。实现此接口以启用更广泛的社区（可能具有与您所想不同的解决方案）来扩展您代码的功能。

- [**Cases 类**]()  
使用Cases类与案例记录交互。

- [**Collator 类**]()  
包含用于获取可用于比较和排序的区域设置特定实例的方法。使用getInstance()方法获取给定区域设置的Collator实例，并将Collator作为Comparator参数传递给list.sort()方法。

- [**Comparable 接口**]()  
为包含非原始类型的List添加排序支持，即用户定义类型的List。您的实现必须在compareTo()方法中显式处理null输入以避免空指针异常。

- [**Comparator 接口**]()  
使用Comparator接口的compare()方法实现不同的排序顺序，并将Comparator作为参数传递给List.sort()。您的实现必须在compare()方法中显式处理null输入以避免空指针异常。

- [**Continuation 类**]()  
使用Continuation类异步调用SOAP或REST Web服务。

- [**Cookie 类**]()  
Cookie类允许您使用Apex访问Salesforce站点的cookie。

- [**Crypto 类**]()  
提供用于创建摘要、消息认证代码和签名的方法，以及加密和解密信息。

- [**Custom Metadata Type Methods**]()  
自定义元数据类型是可自定义、可部署、可打包和可升级的应用程序元数据。所有自定义元数据都在应用程序缓存中公开，这允许访问而无需重复查询数据库。然后元数据可用于公式字段、验证规则、流程、Apex和SOAP API。所有方法都是静态的。

- [**Custom Settings Methods**]()  
自定义设置类似于自定义对象，使应用程序开发人员能够创建自定义数据集，以及为组织、配置文件或特定用户创建和关联自定义数据。所有自定义设置数据都在应用程序缓存中公开，这实现了高效访问而无需重复查询数据库的成本。然后这些数据可用于公式字段、验证规则、流程、Apex和SOAP API。

- [**Database 类**]()  
包含用于创建和操作数据的方法。

- [**Date 类**]()  
包含Date原始数据类型的方法。

- [**Datetime 类**]()  
包含Datetime原始数据类型的方法。

- [**Decimal 类**]()  
包含Decimal原始数据类型的方法。

- [**Domain 类**]()  
表示由Salesforce托管的现有域，为组织或其内容提供服务。包含用于获取有关这些域信息的方法，如域类型、我的域名和沙盒名称。

- [**DomainCreator 类**]()  
使用DomainCreator类返回特定于组织的主机名。例如，获取组织的Visualforce主机名。值作为主机名返回，如MyDomainName.lightning.force.com。

- [**DomainParser 类**]()  
使用DomainParser类解析Salesforce为组织托管的域并提取有关域的信息。

- [**DomainType 枚举**]()  
指定System.Domain的域类型。

- [**Double 类**]()  
包含Double原始数据类型的方法。

- [**EmailMessages 类**]()  
使用EmailMessages类中的方法与电子邮件和电子邮件线程交互。

- [**EncodingUtil 类**]()  
使用EncodingUtil类中的方法编码和解码URL字符串，并将字符串转换为十六进制格式。

- [**Enum Methods**]()  
枚举是具有值的抽象数据类型，每个值都采用您指定的有限标识符集合中的一个。Apex提供内置枚举，如LoggingLevel，您可以定义自己的枚举。

- [**EventBus 类**]()  
包含用于发布平台事件的方法。

- [**Exception Class and Built-In Exceptions**]()  
异常表示中断代码正常执行流程的错误。您可以使用Apex内置异常或创建自定义异常。所有异常都有通用方法。

- [**ExternalServiceTest 类**]()  
提供测试外部服务异步调用的方法，启用发送模拟请求，断言预期的请求负载，然后触发模拟外部服务的异步回调响应。

- [**FlexQueue 类**]()  
包含重新排序Apex灵活队列中批处理作业的方法。

- [**FeatureManagement 类**]()  
使用System.FeatureManagement类中的方法检查和修改功能参数的值，并在订阅者组织中显示或隐藏自定义对象和自定义权限。

- [**Formula 类**]()  
包含获取用于创建公式实例的构建器的方法，并更新输入SObject上的所有公式字段。

- [**FormulaRecalcFieldError 类**]()  
FormulaRecalcResult.getErrors方法的返回类型。

- [**FormulaRecalcResult 类**]()  
Formula.recalculateFormulas方法的返回类型。

- [**Http 类**]()  
使用Http类发起HTTP请求和响应。

- [**HttpCalloutMock 接口**]()  
在测试HTTP调用时启用发送虚假响应。

- [**HttpRequest 类**]()  
使用HttpRequest类以编程方式创建HTTP请求，如GET、POST、PATCH、PUT和DELETE。

- [**HttpResponse 类**]()  
使用HttpResponse类处理Http类返回的HTTP响应。

- [**Id 类**]()  
包含ID原始数据类型的方法。

- [**Ideas 类**]()  
表示区域想法。

- [**InstallHandler 接口**]()  
在托管包安装或升级后启用自定义代码运行。

- [**Integer 类**]()  
包含Integer原始数据类型的方法。

- [**JSON 类**]()  
包含用于将Apex对象序列化为JSON格式的方法，以及反序列化使用此类中的serialize方法序列化的JSON内容。

- [**JSONGenerator 类**]()  
包含用于使用标准JSON编码将对象序列化为JSON内容的方法。

- [**JSONParser 类**]()  
表示JSON编码内容的解析器。

- [**JSONToken 枚举**]()  
包含用于解析JSON内容的所有令牌值。

- [**Label 类**]()  
提供用于检索自定义标签或检查特定语言和命名空间中标签翻译是否存在的方法。标签名称在运行时动态解析，如果存在请求语言的翻译，则覆盖用户的当前语言。您无法访问在不同命名空间中受保护的标签。

- [**Limits 类**]()  
包含返回特定资源限制信息的方法。

- [**List 类**]()  
包含List集合类型的方法。

- [**Location 类**]()  
包含用于访问地理位置复合字段组件字段的方法。

- [**LoggingLevel 枚举**]()  
指定System.debug方法的日志记录级别。

- [**Long 类**]()  
包含Long原始数据类型的方法。

- [**Map 类**]()  
包含Map集合类型的方法。

- [**Matcher 类**]()  
匹配器使用Pattern对字符串执行匹配操作。

- [**Math 类**]()  
包含数学运算的方法。

- [**Messaging 类**]()  
包含发送单个或批量电子邮件时使用的消息传递方法。

- [**MultiStaticResourceCalloutMock 类**]()  
用于使用多个资源指定虚假响应的实用程序类，用于测试HTTP调用。

- [**Network 类**]()  
管理Experience Cloud站点。

- [**Object 类**]()  
包含由所有Apex类型实现的方法。

- [**OrgLimit 类**]()  
包含提供组织限制的名称、最大值和当前值的方法。

- [**OrgLimits 类**]()  
包含提供Salesforce组织所有OrgLimit实例列表或映射的方法，如SOAP API请求、Bulk API请求和Streaming API限制。

- [**PageReference 类**]()  
PageReference是对页面实例化的引用。除其他属性外，PageReference由URL和查询参数名称和值集合组成。

- [**Packaging 类**]()  
包含用于获取托管和解锁包信息的方法。

- [**Pattern 类**]()  
表示正则表达式的编译表示。

- [**Queueable 接口**]()  
启用可以监控的Apex作业的异步执行。

- [**QueueableContext 接口**]()  
表示实现Queueable接口的类中execute()方法的参数类型，并包含作业ID。此接口由Apex内部实现。

- [**QueueableDuplicateSignature 类**]()  
在AsyncOptions类中用于在DuplicateSignature属性中存储队列作业签名。

- [**QueueableDuplicateSignature.Builder 类**]()  
使用此内部构建器类为您的队列作业构建唯一签名。build()类方法构建QueueableDuplicateSignature对象，输入来自addId()、addInteger()和addString()方法。使用AsyncOptions类中的DuplicateSignature属性存储队列作业签名。通过使用带有AsyncOptions参数的System.enqueueJob()来排队您的作业。

- [**QuickAction 类**]()  
使用Apex请求和处理允许自定义字段的对象上的操作，出现在Chatter提要中的对象，或全局可用的对象。

- [**Quiddity 枚举**]()  
指定System.Request类中的方法使用的Quiddity值。

- [**RemoteObjectController**]()  
使用RemoteObjectController在您的Remote Objects覆盖方法中访问标准Visualforce Remote Objects操作。

- [**Request 类**]()  
包含用于获取当前Salesforce请求的请求ID和Quiddity值的方法。

- [**ResetPasswordResult 类**]()  
表示密码重置的结果。

- [**RestContext 类**]()  
包含RestRequest和RestResponse对象。

- [**RestRequest 类**]()  
使用System.RestRequest类访问和传递RESTful Apex方法中的请求数据。

- [**RestResponse 类**]()  
表示用于将数据从Apex RESTful Web服务方法传递到HTTP响应的对象。

- [**SandboxPostCopy 接口**]()  
要使您的沙盒环境业务就绪，自动化数据操作或业务逻辑任务。扩展此接口并添加执行复制后任务的方法，然后在沙盒创建期间指定类。

- [**Schedulable 接口**]()  
实现此接口的类可以安排在不同的时间间隔运行。

- [**SchedulableContext 接口**]()  
表示实现Schedulable接口的类中方法的参数类型，并包含计划的作业ID。此接口由Apex内部实现。

- [**Schema 类**]()  
包含用于获取模式描述信息的方法。

- [**Search 类**]()  
使用Search类的方法执行动态SOSL查询。

- [**Security 类**]()  
包含用于安全实现Apex应用程序的方法。

- [**SelectOption 类**]()  
SelectOption对象指定Visualforce selectCheckboxes、selectList或selectRadio组件的可能值之一。

- [**Set 类**]()  
表示具有无重复值的唯一元素集合。

- [**Site 类**]()  
使用Site类管理您的站点。更改、重置、验证和检查密码的过期时间。创建站点用户、个人账户和门户用户。获取管理员电子邮件和ID。获取各种URL、路径前缀、ID、模板和站点类型。登录到站点。

- [**SObject 类**]()  
包含sObject数据类型的方法。

- [**SObjectAccessDecision 类**]()  
包含对Security.stripInaccessible方法的调用结果和检索这些结果的方法。

- [**SoqlStubProvider 类**]()  
包含创建用于处理Data Cloud数据模型对象(DMO)的SOQL查询响应的模拟测试类的方法。

- [**StaticResourceCalloutMock 类**]()  
用于指定虚假响应的实用程序类，用于测试HTTP调用。

- [**String 类**]()  
包含String原始数据类型的方法。

- [**StubProvider 接口**]()  
StubProvider是一个回调接口，您可以使用它作为Apex存根API的一部分来实现模拟框架。使用此接口与Test.createStub()方法创建用于测试的存根Apex对象。

- [**System 类**]()  
包含系统操作的方法，如写入调试消息和调度作业。

- [**Test 类**]()  
包含与Apex测试相关的方法。

- [**Time 类**]()  
包含Time原始数据类型的方法。

- [**TimeZone 类**]()  
表示时区。包含用于创建新时区和获取时区属性的方法，如时区ID、偏移量和显示名称。

- [**Trigger 类**]()  
使用Trigger类访问触发器中的运行时上下文信息，如触发器类型或触发器操作的sObject记录列表。

- [**TriggerOperation 枚举**]()  
System.TriggerOperation枚举值与触发器事件关联。

- [**Type 类**]()  
包含用于获取与Apex类对应的Apex类型和实例化新类型的方法。

- [**UninstallHandler 接口**]()  
在托管包卸载后启用自定义代码运行。

- [**URL 类**]()  
表示统一资源定位符(URL)并提供对URL部分的访问。启用对用于访问您的Salesforce组织的基础URL的访问。

- [**UserInfo 类**]()  
包含用于获取上下文用户信息的方法。

- [**UserManagement 类**]()  
包含管理最终用户的方法，例如，注册他们的验证方法、验证他们的身份或删除他们的个人信息。

- [**UUID 类**]()  
包含随机生成版本4通用唯一标识符(UUID)、比较UUID和将UUID实例转换为字符串的方法。

- [**Version 类**]()  
使用Version方法获取第一代托管包的版本，并比较包版本。

- [**WebServiceCallout 类**]()  
启用对外部Web服务上的SOAP操作进行调用。此类用于从WSDL自动生成的Apex存根类中。

- [**WebServiceMock 接口**]()  
在测试从WSDL自动生成的类的Web服务调用时启用发送虚假响应。

- [**XmlStreamReader 类**]()  
XmlStreamReader类提供用于对XML数据进行前向、只读访问的方法。您可以从XML中提取数据或跳过不需要的事件。您可以解析深度达50个节点的嵌套XML内容。

- [**XmlStreamWriter 类**]()  
XmlStreamWriter类提供用于写入XML数据的方法。

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm*
