# Database 类

包含用于创建和操作数据的方法。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Database类是Salesforce中最重要的数据操作类之一。
> 
> 它提供了完整的CRUD操作（创建、读取、更新、删除）以及事务管理、批量处理等功能。

## 命名空间

System

## 用法

某些Database方法也作为DML语句存在。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Database类的主要用途：
> 1. 执行CRUD操作（insert、update、delete、undelete）
> 2. 查询数据（query、countQuery）
> 3. 事务管理（setSavepoint、rollback）
> 4. 批量处理（executeBatch）
> 5. 数据转换（convertLead、merge）

## 重要注意事项

- 避免在同一个查询中指定accessLevel参数和WITH SECURITY_ENFORCED子句
- Salesforce建议您指定系统模式或用户模式，并删除任何冗余的WITH SECURITY_ENFORCED子句

## Database 方法概述

Database类包含以下主要方法类别：

### 数据操作方法
- **insert()** - 插入记录
- **update()** - 更新记录  
- **delete()** - 删除记录
- **undelete()** - 恢复已删除记录
- **merge()** - 合并记录

### 查询方法
- **query()** - 动态SOQL查询
- **countQuery()** - 计数查询
- **getQueryLocator()** - 创建查询定位器

### 事务管理方法
- **setSavepoint()** - 设置保存点
- **rollback()** - 回滚事务
- **releaseSavepoint()** - 释放保存点

### 批量处理方法
- **executeBatch()** - 执行批量作业

### 数据转换方法
- **convertLead()** - 转换潜在客户

### 外部对象方法
- **insertAsync()** - 异步插入外部对象
- **updateAsync()** - 异步更新外部对象
- **deleteAsync()** - 异步删除外部对象

### 回收站方法
- **emptyRecycleBin()** - 清空回收站
- **getDeleted()** - 获取已删除记录
- **getUpdated()** - 获取已更新记录

## 详细方法文档

由于Database类的方法非常多，详细的方法文档已分别创建：

- [Database 插入方法](./Database%20插入方法.md)
- [Database 更新方法](./Database%20更新方法.md)
- [Database 删除方法](./Database%20删除方法.md)
- [Database 查询方法](./Database%20查询方法.md)
- [Database 事务管理方法](./Database%20事务管理方法.md)
- [Database 批量处理方法](./Database%20批量处理方法.md)
- [Database 数据转换方法](./Database%20数据转换方法.md)
- [Database 外部对象方法](./Database%20外部对象方法.md)
- [Database 回收站方法](./Database%20回收站方法.md)

## 示例

### 基本CRUD操作示例

```apex
// 插入记录
Account acc = new Account(Name = 'Test Account');
Database.SaveResult result = Database.insert(acc, false);

// 查询记录
List<Account> accounts = Database.query('SELECT Id, Name FROM Account LIMIT 10');

// 更新记录
acc.Name = 'Updated Account';
Database.SaveResult updateResult = Database.update(acc, false);

// 删除记录
Database.DeleteResult deleteResult = Database.delete(acc.Id, false);
```

### 事务管理示例

```apex
// 设置保存点
Savepoint sp = Database.setSavepoint();

try {
    // 执行一些操作
    Account acc = new Account(Name = 'Test Account');
    insert acc;
    
    // 如果成功，提交事务
    // 如果失败，回滚到保存点
} catch (Exception e) {
    Database.rollback(sp);
    System.debug('操作失败，已回滚: ' + e.getMessage());
}
```

### 批量处理示例

```apex
// 执行批量作业
Database.executeBatch(new MyBatchClass(), 200);
```

## 注意事项

- Database方法提供了比DML语句更细粒度的控制
- 可以使用allOrNone参数控制部分失败的处理
- 支持访问级别控制（accessLevel参数）
- 异步方法适用于外部对象操作
- 事务管理方法用于复杂的数据操作场景

## 相关链接

- [Apex DML Operations](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_dml.htm)
- [Database Methods](https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm)
- [Batch Apex](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch.htm)

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm*
