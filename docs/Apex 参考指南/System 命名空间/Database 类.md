# Database 类

包含用于创建和操作数据的方法。

## 命名空间

System

## 用法

某些Database方法也作为DML语句存在。

避免在同一个查询中指定`accessLevel`参数和`WITH SECURITY_ENFORCED`子句
Salesforce建议您指定系统模式或用户模式，并删除任何冗余的`WITH SECURITY_ENFORCED`子句

## 另请参阅
- [Apex DML 操作]()

## Database 方法

以下是 Database 的方法。所有方法均为静态方法。

- **[convertLead(leadToConvert , allOrNone)](#convertlead-leadtoconvert-allornone)**  
将潜在客户转换为客户和联系人，并可选择性地转换为商机。

- **[convertLead(leadsToConvert, allOrNone)](#convertlead-leadstoconvert-allornone)**  
将潜在客户转换对象列表转换为客户和联系人列表，并可选择性地转换为商机列表。

---

### convertLead(leadToConvert, allOrNone)
将潜在客户转换为客户和联系人，并可（可选）转换为商机。

#### 签名
public static Database.LeadConvertResult convertLead(Database.LeadConvert leadToConvert, Boolean allOrNone)

#### 参数
**leadToConvert**  
类型：Database.LeadConvert  

**allOrNone**  
类型：布尔值  
（可选）allOrNone 参数指定操作是否允许部分成功。若 allOrNone 设为 false 且某条记录失败，DML 操作的剩余部分仍可成功执行。您必须遍历返回结果以识别成功或失败的记录。若 allOrNone 设为 true 且方法未成功执行，将抛出异常。该参数的默认值为 true 。

#### 返回值
类型：Database.LeadConvertResult

#### 用法
建议向 convertLead 方法最多传递 100 个 LeadConvert 对象。单次调用包含超过 100 个对象可能导致 Apex 调控器限制错误。

每个执行的 convertLead 方法都会计入 DML 语句的调控器限制。

---

### convertLead(leadsToConvert, allOrNone)
将一组 LeadConvert 对象转换为客户和联系人，并可（可选）转换为商机。
#### 签名
public static Database.LeadConvertResult[] convertLead(Database.LeadConvert[] leadsToConvert, Boolean allOrNone)

#### 参数
leadsToConvert
Type: Database.LeadConvert[]
类型：Database.LeadConvert[]
allOrNone
Type: Boolean  类型：布尔值
（可选）allOrNone 参数指定操作是否允许部分成功。如果 allOrNone 设置为 false 且某条记录失败，DML 操作的其余部分仍可成功。您必须遍历返回结果以确定哪些记录成功或失败。如果 allOrNone 设置为 true 且方法未成功，则会抛出异常。该参数的默认值为 true 。
#### 返回值
类型：Database.LeadConvertResult[]

#### 用法
我们建议每次最多向 convertLead 方法传递 100 个 LeadConvert 对象。每次调用包含超过 100 个对象可能导致 Apex 调控器限制错误。

每个执行的 convertLead 方法都会计入 DML 语句的调控器限制。