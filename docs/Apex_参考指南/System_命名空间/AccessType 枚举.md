# AccessType 枚举

> **指定sObject字段的访问检查类型。**

## 📋 概述

`AccessType` 枚举用于指定在调用 `stripInaccessible` 方法时对sObject字段进行访问检查的类型。

## 🎯 用法

使用这些枚举值作为 `stripInaccessible` 方法的 `accessCheckType` 参数：

```apex
// 示例用法
SObjectAccessDecision decision = Security.stripInaccessible(
    AccessType.READABLE, 
    records, 
    fields
);
```

## 📊 枚举值

以下是 `System.AccessType` 枚举的所有值：

| 枚举值 | 描述 | 用途 |
|--------|------|------|
| **`CREATABLE`** | 检查sObject字段的创建访问权限 | 验证用户是否有权限创建包含指定字段的记录 |
| **`READABLE`** | 检查sObject字段的读取访问权限 | 验证用户是否有权限读取指定字段的值 |
| **`UPDATABLE`** | 检查sObject字段的更新访问权限 | 验证用户是否有权限更新指定字段的值 |
| **`UPSERTABLE`** | 检查sObject字段的插入和更新访问权限 | 验证用户是否有权限插入或更新指定字段的值 |

## 🔍 详细说明

### `CREATABLE`
- **功能**: 检查字段的创建访问权限
- **使用场景**: 在创建新记录之前验证字段访问权限
- **示例**:
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

### `READABLE`
- **功能**: 检查字段的读取访问权限
- **使用场景**: 在显示或处理数据之前验证字段读取权限
- **示例**:
  ```apex
  // 检查用户是否有权限读取Account的特定字段
  List<Account> accounts = [SELECT Id, Name, Industry FROM Account LIMIT 10];
  SObjectAccessDecision decision = Security.stripInaccessible(
      AccessType.READABLE, 
      accounts, 
      new List<String>{'Name', 'Industry'}
  );
  ```

### `UPDATABLE`
- **功能**: 检查字段的更新访问权限
- **使用场景**: 在更新现有记录之前验证字段访问权限
- **示例**:
  ```apex
  // 检查用户是否有权限更新Account的特定字段
  List<Account> accounts = [SELECT Id, Name, Industry FROM Account LIMIT 10];
  SObjectAccessDecision decision = Security.stripInaccessible(
      AccessType.UPDATABLE, 
      accounts, 
      new List<String>{'Industry'}
  );
  ```

### `UPSERTABLE`
- **功能**: 检查字段的插入和更新访问权限
- **使用场景**: 在upsert操作之前验证字段访问权限
- **示例**:
  ```apex
  // 检查用户是否有权限插入或更新Account的特定字段
  List<Account> accounts = new List<Account>{
      new Account(Name='Test Account', Industry='Technology')
  };
  SObjectAccessDecision decision = Security.stripInaccessible(
      AccessType.UPSERTABLE, 
      accounts, 
      new List<String>{'Name', 'Industry'}
  );
  ```

## ⚠️ 注意事项

- 这些枚举值主要用于 `Security.stripInaccessible()` 方法
- 访问检查基于当前用户的权限和字段级安全性设置
- 如果用户没有访问权限，相应的字段值将被设置为 `null`

## 🔗 相关链接

<!-- - [Security.stripInaccessible() 方法](../Security.md#stripinaccessible)
- [SObjectAccessDecision 类](../SObjectAccessDecision.md) -->
- [字段级安全性文档](https://help.salesforce.com/s/articleView?id=sf.security_fls.htm)

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_enum_System_AccessType.htm*
