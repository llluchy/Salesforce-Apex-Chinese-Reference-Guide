# Apex 参考指南

Apex 是一种强类型、面向对象的编程语言，允许开发者在 Salesforce 平台服务器上执行流和事务控制语句，并结合 API 调用。本参考指南包含内置的 Apex 类、接口、枚举和异常，按命名空间分组。它还包括用于在 Salesforce 中插入、更新、合并、删除和恢复数据的 Apex DML 语句。

有关 Apex 开发过程的信息，请参阅 Apex 开发人员指南。

> **注意**
>
> 在 API 版本 51.0 及更早版本中，Apex 参考信息包含在 Apex 开发人员指南的 **Apex 语言参考**部分。

- [**Apex 版本说明**](/en/guide/same-page.md)  
  使用 Salesforce 版本说明了解 Apex 的最新更新和更改。

- [**Apex DML 操作**](/en/guide/same-page.md)  
  您可以使用 Apex DML 语句或 Database 类的方法执行 DML 操作。对于潜在客户转换，请使用 Database 类的 convertLead 方法。没有与之对应的 DML 语句。

- [**ApexPages 命名空间**](/en/guide/same-page.md)  
  ApexPages 命名空间提供了在 Visualforce 控制器中使用的类。

- [**AppLauncher 命名空间**](/en/guide/same-page.md)  
  AppLauncher 命名空间提供了用于管理应用程序启动器（App Launcher）中应用程序外观的方法，包括其可见性和排序。

- [**Approval 命名空间**](/en/guide/same-page.md)  
  Approval 命名空间提供了用于审批流程的类和方法。

- [**Auth 命名空间**](/en/guide/same-page.md)  
  Auth 命名空间提供了用于单点登录到 Salesforce 和会话安全管理的接口和类。

- [**Cache 命名空间**](/en/guide/same-page.md)  
  Cache 命名空间包含用于管理平台缓存的方法。

- [**Canvas 命名空间**](/en/guide/same-page.md)  
  Canvas 命名空间提供了用于 Salesforce 中 Canvas 应用程序的接口和类。

- [**ChatterAnswers 命名空间**](/en/guide/same-page.md)  
  ChatterAnswers 命名空间提供了一个用于创建客户（Account）记录的接口。

- [**CommerceBuyGrip 命名空间**](/en/guide/same-page.md)  
  CommerceBuyGrip 命名空间提供了用于检索与用户关联的买家组信息的类和方法。

- [**CommerceExtension 命名空间**](/en/guide/same-page.md)  
  使用 CommerceExtension 命名空间为已注册的 Commerce 扩展定义解析策略。

- [**CommerceOrders 命名空间**](/en/guide/same-page.md)  
  CommerceOrders 命名空间提供了用于下订单的类和方法，这些订单集成了定价、配置和验证功能。

- [**CommercePayments 命名空间**](/en/guide/same-page.md)  
  使用 CommercePayments 命名空间为管理客户付款和退款提供一个安全且可定制的平台。

- [**CommerceTax 命名空间**](/en/guide/same-page.md)  
  管理 Salesforce 与外部税务引擎之间的通信。

- [**ComplianceMgmt 命名空间**](/en/guide/same-page.md)  
  The ComplianceMgmt namespace provides classes and methods to implement rule processors for compliance control.

- [**Compression 命名空间**](/en/guide/same-page.md)  
  提供了用于创建和解压缩 API 文件的类和方法。

- [**ConnectApi 命名空间**](/en/guide/same-page.md)  
  ConnectApi 命名空间（在 Apex 中也称为 Connect）提供了用于访问 Connect REST API 中可用相同数据的类。使用 Apex 中的 Connect 在 Salesforce 中创建自定义体验。

- [**Context 命名空间**](/en/guide/same-page.md)  
  Context 命名空间提供了通过使用上下文服务（Context Service）来管理和消费业务应用程序数据的类和方法。

- [**Database 命名空间**](/en/guide/same-page.md)  
  Database 命名空间提供了用于 DML 操作的类。

- [**Datacloud 命名空间**](/en/guide/same-page.md)  
  Datacloud 命名空间提供了用于检索有关重复规则信息的类和方法。重复规则让您可以控制用户是否以及何时可以在 Salesforce 内保存重复记录。

- [**DataRetrieval 命名空间**](/en/guide/same-page.md)  
  DataRetrieval 命名空间提供了用于记录客户-座席互动细节以及他们会话转录的类和方法。

- [**DataSource 命名空间**](/en/guide/same-page.md)  
  DataSource 命名空间提供了 Apex 连接器框架（Apex Connector Framework）的类。使用 Apex 连接器框架为 Salesforce Connect 开发自定义适配器。然后通过 Salesforce Connect 自定义适配器将您的 Salesforce 组织连接到任何地方的数据。

- [**DataWeave 命名空间**](/en/guide/same-page.md)  
  DataWeave 命名空间提供了支持从 Apex 调用 DataWeave 脚本的类和方法。

- [**Dom 命名空间**](/en/guide/same-page.md)  
  Dom 命名空间提供了用于解析和创建 XML 内容的类和方法。

- [**embeddedai 命名空间**](/en/guide/same-page.md)  
  embeddedai 命名空间提供了用于在 Apex 中管理和表示记录与数据以支持嵌入式 AI 功能的类和方法。

- [**EventBus 命名空间**](/en/guide/same-page.md)  
  EventBus 命名空间提供了用于平台事件和更改数据捕获（Change Data Capture）事件的类和方法。

- [**ExternalService 命名空间**](/en/guide/same-page.md)  
  ExternalService 命名空间为复杂对象数据类型提供了动态生成的 Apex 服务接口和 Apex 类。

- [**Flow 命名空间**](/en/guide/same-page.md)  
  Flow 命名空间提供了一个用于从 Apex（例如从 Visualforce 控制器和异步 Apex）高级访问流（Flow）的类。

- [**Flowtesting 命名空间**](/en/guide/same-page.md)  
  Flowtesting 命名空间为在 Flow Builder 中创建的流测试提供了动态生成的 Apex 类。

- [**FormulaEval 命名空间**](/en/guide/same-page.md)  
  FormulaEval 命名空间提供了用于评估 SObject 和 Apex 对象的动态公式的类和方法。使用这些方法可以避免不必要的 DML 语句来重新计算公式字段值或评估动态公式表达式。

- [**fsccashflow 命名空间**](/en/guide/same-page.md)  
  fsccashflow 命名空间提供了在 FSCCashFlow Flexcards 及其子 Flexcards 中使用的类。

- [**Functions 命名空间**](/en/guide/same-page.md)  
  Functions 命名空间提供了用于调用和管理 Salesforce 函数的类和方法。

- [**ise_bots_apex 命名空间**](/en/guide/same-page.md)  
  ise_bots_apex 命名空间提供了促进菜单驱动型机器人交互的动态内容生成和数据处理的类和属性。创建和管理可根据用户输入、上下文和底层对象数据适应的动态菜单项。

- [**industriesNlpSvc**](/en/guide/same-page.md)  
  Stores the objects used in Industries Einstein Natural Language Processing (NLP) services.
- [**IndustriesDigitalLending Namespace**](/en/guide/same-page.md)  
  The industriesDigitalLending namespace provides classes used in the Digital Lending OmniScripts and Integration Procedures.

- [**Invocable 命名空间**](/en/guide/same-page.md)  
  Invocable 命名空间提供了用于从 Apex 调用可调用操作的类。

- [**InvoiceWriteOff 命名空间**](/en/guide/same-page.md)  
  InvoiceWriteOff 命名空间提供了用于创建贷项通知单（credit memo）的类，其中发票上的总费用金额作为冲销金额。

- [**IsvPartners 命名空间**](/en/guide/same-page.md)  
  IsvPartners 命名空间提供了一个与 Salesforce ISV 合作伙伴用例相关的类，例如优化代码、提供出色的客户试用体验和推动功能采用。

- [**KbManagement 命名空间**](/en/guide/same-page.md)  
  KbManagement 命名空间提供了一个用于管理知识文章（knowledge articles）的类。

- [**LxScheduler 命名空间**](/en/guide/same-page.md)  
  LxScheduler 命名空间提供了用于将 Salesforce Scheduler 与外部日历集成的接口和类。

- [**Messaging 命名空间**](/en/guide/same-page.md)  
  Messaging 命名空间提供了用于 Salesforce 出站和入站电子邮件功能的类和方法。

- [**Metadata 命名空间**](/en/guide/same-page.md)  
  Metadata 命名空间提供了用于在 Salesforce 中使用自定义元数据的类和方法。

- [**PlaceQuote 命名空间**](/en/guide/same-page.md)  
  PlaceQuote 命名空间提供了用于根据定价偏好和配置选项创建或更新报价（Quote）的类和方法。

- [**Pref_center 命名空间**](/en/guide/same-page.md)  
  Pref_center 命名空间提供了一个接口、类和方法，用于在偏好管理器（Preference Manager）中创建和检索表单数据。偏好管理器（之前称为偏好中心，Preference Center）是隐私中心（Privacy Center）应用程序中的一项功能。

- [**Process 命名空间**](/en/guide/same-page.md)  
  Process 命名空间提供了用于在您的组织和流（Flow）之间传递数据的接口和类。

- [**QuickAction 命名空间**](/en/guide/same-page.md)  
  QuickAction 命名空间提供了用于快速操作（Quick Actions）的类和方法。

- [**Reports 命名空间**](/en/guide/same-page.md)  
  Reports 命名空间提供了用于访问与 Salesforce 报告和仪表板 REST API 中相同数据的类。

- [**RevSignaling 命名空间**](/en/guide/same-page.md)  
  RevSignaling 命名空间提供了通过自定义逻辑扩展标准流程计划实现的类。流程计划可帮助您根据需求在一个集中位置设置流程、配置流程执行设置并将其与上下文定义相关联。

- [**RevSalesTrxn 命名空间**](/en/guide/same-page.md)  
  RevSalesTrxn 命名空间提供了用于创建销售交易（例如报价或订单）的类和方法，这些交易集成了定价和配置功能。

- [**RichMessaging 命名空间**](/en/guide/same-page.md)  
  提供用于在增强的消息传递通道中处理内容的对象和方法。

- [**Salesforce_Backup 命名空间**](/en/guide/same-page.md)  
  Salesforce_Backup 命名空间提供了用于 Salesforce 备份的类和方法。

- [**Schema 命名空间**](/en/guide/same-page.md)  
  Schema 命名空间提供了用于获取架构元数据信息的类和方法。

- [**Search 命名空间**](/en/guide/same-page.md)  
  Search 命名空间提供了用于获取搜索结果和建议结果的类。

- [**Sfc 命名空间**](/en/guide/same-page.md)  
  Sfc 命名空间包含在 Salesforce 文件（Salesforce Files）中使用的类。

- [**$fde_Enablement 命名空间**](/en/guide/same-page.md)  
  提供了用于创建自定义学习项以在赋能（Enablement）程序中实现自定义练习类型的类。Lightning Web 组件用于在程序生成器（Program Builder）上呈现自定义练习。

- [**$fde_surveys 命名空间**](/en/guide/same-page.md)  
  $fde_surveys 命名空间提供了一个用于缩短调查邀请的接口。

- [**Site 命名空间**](/en/guide/same-page.md)  
  Site 命名空间提供了一个用于重写站点（Sites）URL 的接口。

- [**Slack 命名空间**](/en/guide/same-page.md)  
  Slack 命名空间提供了旨在加速和简化在 Salesforce 平台上开发 Slack 应用程序过程的工具。

- [**Support 命名空间**](/en/guide/same-page.md)  
  Support 命名空间提供了一个用于案例反馈（Case Feed）的接口。

- [**System 命名空间**](/en/guide/same-page.md)  
  System 命名空间提供了用于核心 Apex 功能的类和方法。

- [**TerritoryMgmt 命名空间**](/en/guide/same-page.md)  
  TerritoryMgmt 命名空间提供了一个用于区域管理（Territory Management）的接口。

- [**TxnSecurity 命名空间**](/en/guide/same-page.md)  
  TxnSecurity 命名空间提供了一个用于交易安全（Transaction Security）的接口。

- [**UserProvisioning 命名空间**](/en/guide/same-page.md)  
  UserProvisioning 命名空间提供了用于监控出站用户配置请求的方法。

- [**VisualEditor 命名空间**](/en/guide/same-page.md)  
  VisualEditor 命名空间提供了用于与 Lightning App Builder 交互的类和方法。此命名空间中的类和方法对 Lightning 组件（包括 Lightning Web 组件和 Aura 组件）进行操作。

- [**Wave 命名空间**](/en/guide/same-page.md)  
  Wave 命名空间中的类是 CRM Analytics Analytics SDK 的一部分，旨在促进从 Apex 代码查询 CRM Analytics 数据。

---
*文档网址：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_ref_guide.htm*