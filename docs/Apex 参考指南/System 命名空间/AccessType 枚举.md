# AccessType 枚举

指定sObject字段的访问检查类型。

## 命名空间

System

## 用法

使用这些枚举值作为 `stripInaccessible` 方法的 `accessCheckType` 参数。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> AccessType枚举主要用于Security.stripInaccessible()方法中，用来指定要检查的访问权限类型。
> 
> 比如你想检查用户是否有权限读取某个字段，就使用READABLE；想检查是否有权限创建记录，就使用CREATABLE。

避免在同一个操作中同时使用多种访问类型检查，建议根据具体需求选择合适的访问类型。

## 示例

以下示例展示如何使用AccessType枚举检查字段的读取权限：

```apex
// 检查用户是否有权限读取Account的特定字段
List<Account> accounts = [SELECT Id, Name, Industry FROM Account LIMIT 10];
SObjectAccessDecision decision = Security.stripInaccessible(
    AccessType.READABLE, 
    accounts, 
    new List<String>{'Name', 'Industry'}
);

// 获取可访问的记录
List<Account> accessibleAccounts = decision.getRecords();
```

相比之下，此示例显示如何检查字段的创建权限：

```apex
// 检查用户是否有权限创建包含特定字段的Account记录
List<Account> accounts = new List<Account>{
    new Account(Name='Test Account', Industry='Technology')
};
SObjectAccessDecision decision = Security.stripInaccessible(
    AccessType.CREATABLE, 
    accounts, 
    new List<String>{'Name', 'Industry'}
);
```

## AccessType 枚举值

以下是 AccessType 枚举的所有值。

### CREATABLE

检查sObject字段的创建访问权限。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> CREATABLE用于检查用户是否有权限创建包含指定字段的记录。
> 
> 比如用户想创建一个Account记录，但不确定是否有权限设置Industry字段，就可以用这个检查。

#### 用法

```apex
// 检查创建权限
SObjectAccessDecision decision = Security.stripInaccessible(
    AccessType.CREATABLE, 
    records, 
    fields
);
```

### READABLE

检查sObject字段的读取访问权限。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> READABLE用于检查用户是否有权限读取指定字段的值。
> 
> 这是最常用的访问类型，在显示数据之前检查用户是否有权限查看某些敏感字段。

#### 用法

```apex
// 检查读取权限
SObjectAccessDecision decision = Security.stripInaccessible(
    AccessType.READABLE, 
    records, 
    fields
);
```

### UPDATABLE

检查sObject字段的更新访问权限。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> UPDATABLE用于检查用户是否有权限更新指定字段的值。
> 
> 在允许用户编辑记录之前，先检查他们是否有权限修改特定字段。

#### 用法

```apex
// 检查更新权限
SObjectAccessDecision decision = Security.stripInaccessible(
    AccessType.UPDATABLE, 
    records, 
    fields
);
```

### UPSERTABLE

检查sObject字段的插入和更新访问权限。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> UPSERTABLE用于检查用户是否有权限插入或更新指定字段的值。
> 
> 在upsert操作中，如果记录不存在就创建，存在就更新，这个枚举值可以同时检查这两种权限。

#### 用法

```apex
// 检查upsert权限
SObjectAccessDecision decision = Security.stripInaccessible(
    AccessType.UPSERTABLE, 
    records, 
    fields
);
```

## 注意事项

- 这些枚举值主要用于 `Security.stripInaccessible()` 方法
- 访问检查基于当前用户的权限和字段级安全性设置
- 如果用户没有访问权限，相应的字段值将被设置为 `null`
- 建议在生产环境中使用这些检查来确保数据安全性
<!-- 
## 相关链接

- [Security.stripInaccessible() 方法](../Security.md#stripinaccessible)
- [SObjectAccessDecision 类](../SObjectAccessDecision.md)
- [字段级安全性文档](https://help.salesforce.com/s/articleView?id=sf.security_fls.htm) -->

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_enum_System_AccessType.htm*
