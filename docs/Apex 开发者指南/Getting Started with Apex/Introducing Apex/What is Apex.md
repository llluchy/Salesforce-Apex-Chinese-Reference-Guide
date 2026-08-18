# 什么是 Apex?

> **英文原文**: [What is Apex?](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_intro_what_is_apex.htm)

Apex 是一种强类型、面向对象的编程语言,允许开发者在 Salesforce 服务器上执行流程控制和事务控制语句,并结合 API 调用使用。Apex 使用类似 Java 的语法,其行为类似数据库存储过程,使开发者能够为大多数系统事件添加业务逻辑,包括按钮点击、相关记录更新和 Visualforce 页面。Apex 代码可以通过 Web 服务请求和对象触发器来启动。

:::tip 说明
您可以在大多数系统事件中添加 Apex 代码。
:::

作为一种编程语言,Apex 具有以下特点:

## 集成性

Apex 提供了对 Lightning Platform 常用编程模式的内置支持,包括:

- 数据操作语言(DML)调用,如 `INSERT`、`UPDATE` 和 `DELETE`,内置 `DmlException` 异常处理
- 内联 Salesforce 对象查询语言(SOQL)和 Salesforce 对象搜索语言(SOSL)查询,返回 sObject 记录列表
- 支持批量处理多条记录的循环
- 防止记录更新冲突的锁定语法
- 可从存储的 Apex 方法构建的自定义公共 API 调用
- 当用户尝试编辑或删除被 Apex 引用的自定义对象或字段时发出警告和错误

## 易用性

Apex 基于熟悉的 Java 编程模式,如变量和表达式语法、代码块和条件语句语法、循环语法、对象和数组表示法。在 Apex 引入新元素的地方,它使用易于理解并鼓励高效使用 Lightning Platform 的语法和语义。因此,Apex 生成的代码既简洁又易于编写。

## 数据导向

Apex 旨在将多个查询和 DML 语句串联成 Salesforce 服务器上的单个工作单元。开发者使用数据库存储过程以类似方式在数据库服务器上串联多个事务语句。与其他数据库存储过程一样,Apex 不试图提供在用户界面中渲染元素的一般支持。

## 严谨性

Apex 是一种强类型语言,使用对模式对象(如对象和字段名称)的直接引用。如果任何引用无效,它会在编译时快速失败。它将所有自定义字段、对象和类依赖项存储在元数据中,确保它们在被活跃 Apex 代码需要时不会被删除。

## 托管性

Apex 完全由 Lightning Platform 解释、执行和控制。

## 多租户感知

与 Lightning Platform 的其他部分一样,Apex 在多租户环境中运行。因此,Apex 运行时引擎被设计为严格防范失控代码,防止其独占共享资源。任何违反限制的代码都会以易于理解的错误消息失败。

## 易于测试

Apex 提供了对单元测试创建和执行的内置支持。它包括测试结果,指示代码覆盖了多少,以及代码的哪些部分可以更高效。Salesforce 通过在任何平台升级之前执行所有单元测试来确保所有自定义 Apex 代码按预期工作。

## 版本化

您可以将 Apex 代码保存为不同版本的 API。这使您能够维护行为。

---

Apex 包含在 Performance Edition、Unlimited Edition、Developer Edition、Enterprise Edition 和 Database.com 中。
