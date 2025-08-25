# AccessLevel 类

定义 Apex 数据库操作执行的不同模式，如系统模式或用户模式。

## 命名空间

System

## 用法

默认情况下，Apex 代码在系统模式下运行，这意味着它比运行代码的用户拥有更高的权限。在系统模式下，当前用户的对象和字段级权限被忽略，记录共享规则由类共享关键字控制。在用户模式下，强制执行当前用户的对象权限、字段级安全性和共享规则。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 默认，也就是不指定权限的情况下，APEX是以【系统模式】权限运行的，这个权限比任何一个用户的权限都高。
> 
> -【系统模式】对所有的对象和字段都有访问权限，限制也没用。
> 
> -【用户模式】根据指定的用户的权限，对 对象和字段进行访问

[System.Database](./Database%20类.md) 和System.Search类的许多 DML 方法都包含 accessLevel 参数来指定执行模式。
<!-- 
[System.Database](./Database%20类.md) 和 [System.Search](./Search%20类.md) 类的许多 DML 方法都包含 accessLevel 参数来指定执行模式。 -->

避免在同一个查询中同时指定 accessLevel 参数和 WITH SECURITY_ENFORCED 子句。

Salesforce 建议您指定系统模式或用户模式，并删除任何冗余的 WITH SECURITY_ENFORCED 子句。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> WITH SECURITY_ENFORCED 是SOQL查询的一段话
> 
> 类似于这样：
> ```apex
> SELECT Id,name FROM Account WITH SECURITY_ENFORCED;
> ``` 
>
> 这两种方式别同时用，官方推荐你用AccessLevel的方式，具体参考下边的示例

## 示例

如果运行此 Apex 代码的用户没有对 Account 对象的写入权限，Database.insert() 方法将返回错误。

```apex
List<Account> toInsert = new List<Account>{new Account(Name = 'Exciting New Account')};
List<Database.SaveResult> sr = Database.insert(toInsert, AccessLevel.USER_MODE);
```

相比之下，此示例显示方法在系统模式下运行。插入的成功不取决于运行 Apex 代码的用户是否对 Account 对象有创建权限。

```apex
List<Account> toInsert = new List<Account>{new Account(Name = 'Exciting New Account')};
List<Database.SaveResult> sr = Database.insert(toInsert, AccessLevel.SYSTEM_MODE);
```

## AccessLevel 方法

### withPermissionSetId(permissionSetId) (开发者预览)

支持使用权限集中指定的权限运行数据库和搜索操作。Apex 根据指定的权限集强制执行字段级安全性 (FLS) 和对象权限，此外还包括运行用户的权限。

> **注意**
>
> 此功能作为开发者预览版提供。除非 Salesforce 在文档、新闻稿或公开声明中宣布其正式可用性，否则该功能不会正式可用。所有命令、参数和其他功能可能会随时更改或弃用，恕不另行通知。不要在生产环境中实现使用这些命令或工具开发的功能。您可以在 Trailblazer Community 中为"用户模式权限集"功能提供反馈和建议。

此功能在启用了 ApexUserModeWithPermset 功能的临时组织中可用。如果未启用该功能，包含此功能的 Apex 代码可以编译但无法执行。

#### 签名

```apex
public System.AccessLevel withPermissionSetId(String permissionSetId)
```

#### 参数

**permissionSetId**
- 类型：String
- 描述：在运行用户模式 DML 操作时，除了运行用户的权限外，还会强制执行指定权限集中的权限。

#### 返回值

- 类型：AccessLevel 类

#### 示例

此示例使用指定的权限集运行 AccessLevel.withPermissionSetId() 方法并插入自定义对象。

```apex
@isTest
public with sharing class ElevateUserModeOperations_Test {
    @isTest
    static void objectCreatePermViaPermissionSet() {
        Profile p = [SELECT Id FROM Profile WHERE Name='Minimum Access - Salesforce'];
        User u = new User(Alias = 'standt', Email='standarduser@testorg.com',
            EmailEncodingKey='UTF-8', LastName='Testing', LanguageLocaleKey='en_US',
            LocaleSidKey='en_US', ProfileId = p.Id,
            TimeZoneSidKey='America/Los_Angeles',
            UserName='standarduser' + DateTime.now().getTime() + '@testorg.com');
        System.runAs(u) {
            try { 
                Database.insert(new Account(name='foo'), AccessLevel.User_mode); 
                Assert.fail(); 
            } catch (SecurityException ex) { 
                Assert.isTrue(ex.getMessage().contains('Account'));
            }
            //获取之前创建的名为 'AllowCreateToAccount' 的权限集的 ID
            Id permissionSetId = [Select Id from PermissionSet 
                where Name = 'AllowCreateToAccount' limit 1].Id;
            
            Database.insert(new Account(name='foo'), AccessLevel.User_mode.withPermissionSetId(permissionSetId));
            //提升的访问级别不会持续到后续操作
            try { 
                Database.insert(new Account(name='foo2'), AccessLevel.User_mode); 
                Assert.fail(); 
            } catch (SecurityException ex) { 
                Assert.isTrue(ex.getMessage().contains('Account')); 
            } 
        } 
    } 
}
```

## AccessLevel 属性

### SYSTEM_MODE

执行模式，其中忽略当前用户的对象和字段级权限，记录共享规则由类共享关键字控制。

#### 签名

```apex
public System.AccessLevel SYSTEM_MODE {get;}
```

#### 属性值

- 类型：System.AccessLevel

### USER_MODE

执行模式，其中强制执行当前用户的对象权限、字段级安全性和共享规则。

#### 签名

```apex
public System.AccessLevel USER_MODE {get;}
```

#### 属性值

- 类型：System.AccessLevel

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm*
