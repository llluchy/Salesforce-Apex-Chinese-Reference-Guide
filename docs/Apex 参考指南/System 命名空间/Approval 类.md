# Approval 类

包含用于处理审批请求以及在记录上设置和解除审批流程锁定和解锁的方法。

## 命名空间

System

## 用法

Salesforce 管理员可以编辑锁定的记录。根据您的审批流程配置设置，指定的审批人也可以编辑锁定的记录。以编程方式设置的锁定和解锁使用与其他审批流程锁定和解锁相同的记录可编辑性设置。

记录锁定和解锁被视为 DML。它们在调用前被阻止，计入您的 DML 限制，如果发生失败，它们会与事务的其余部分一起回滚。要更改此回滚行为，请使用 allOrNone 参数。

Approval 也用作 ProcessRequest 和 ProcessResult 类的命名空间。

## 另请参阅

审批流程注意事项

## Approval 方法

以下是 Approval 的方法。所有方法都是静态的。

### isLocked(id)

如果 ID 为 id 的记录被锁定，则返回 true，否则返回 false。

#### 签名

```apex
public static Boolean isLocked(Id id)
```

#### 参数

**id**
- 类型：Id
- 描述：其锁定或解锁状态有疑问的记录的 ID。

#### 返回值

- 类型：Boolean

### isLocked(ids)

返回记录 ID 及其锁定状态的映射。如果记录被锁定，状态为 true。如果记录未被锁定，状态为 false。

#### 签名

```apex
public static Map&lt;Id,Boolean&gt; isLocked(List&lt;Id&gt; ids)
```

#### 参数

**ids**
- 类型：List&lt;Id&gt;
- 描述：其锁定或解锁状态有疑问的记录的 ID。

#### 返回值

- 类型：Map&lt;Id,Boolean&gt;

### isLocked(sobject)

如果 sobject 记录被锁定，则返回 true，否则返回 false。

#### 签名

```apex
public static Boolean isLocked(SObject sobject)
```

#### 参数

**sobject**
- 类型：SObject
- 描述：其锁定或解锁状态有疑问的记录。

#### 返回值

- 类型：Boolean

### isLocked(sobjects)

返回记录 ID 到锁定状态的映射。如果记录被锁定，状态为 true。如果记录未被锁定，状态为 false。

#### 签名

```apex
public static Map&lt;Id,Boolean&gt; isLocked(List&lt;SObject&gt; sobjects)
```

#### 参数

**sobjects**
- 类型：List&lt;SObject&gt;
- 描述：其锁定或解锁状态有疑问的记录。

#### 返回值

- 类型：Map&lt;Id,Boolean&gt;

### lock(recordId)

锁定对象，并返回锁定结果。

#### 签名

```apex
public static Approval.LockResult lock(Id recordId)
```

#### 参数

**recordId**
- 类型：Id
- 描述：要锁定的对象的 ID。

#### 返回值

- 类型：Approval.LockResult

### lock(recordIds)

锁定一组对象，并返回锁定结果，包括失败。

#### 签名

```apex
public static List&lt;Approval.LockResult&gt; lock(List&lt;Id&gt; ids)
```

#### 参数

**ids**
- 类型：List&lt;Id&gt;
- 描述：要锁定的对象的 ID。

#### 返回值

- 类型：List&lt;Approval.LockResult&gt;

### lock(recordToLock)

锁定对象，并返回锁定结果。

#### 签名

```apex
public static Approval.LockResult lock(SObject recordToLock)
```

#### 参数

**recordToLock**
- 类型：SObject
- 描述：要锁定的记录对象

#### 返回值

- 类型：Approval.LockResult

### lock(recordsToLock)

锁定一组对象，并返回锁定结果，包括失败。

#### 签名

```apex
public static List&lt;Approval.LockResult&gt; lock(List&lt;SObject&gt; recordsToLock)
```

#### 参数

**recordsToLock**
- 类型：List&lt;SObject&gt;
- 描述：要锁定的记录对象列表

#### 返回值

- 类型：List&lt;Approval.LockResult&gt;

### lock(recordId, allOrNothing)

锁定对象，可选择部分成功，并返回锁定结果。

#### 签名

```apex
public static Approval.LockResult lock(Id recordId, Boolean allOrNothing)
```

#### 参数

**recordId**
- 类型：Id
- 描述：要锁定的对象的 ID。

**allOrNothing**
- 类型：Boolean
- 描述：指定此操作是否允许部分成功。如果您指定 false 且记录失败，DML 操作的其余部分仍可能成功。此方法返回一个结果对象，您可以使用它来验证哪些记录成功、哪些失败以及原因。

#### 返回值

- 类型：Approval.LockResult

### lock(recordIds, allOrNothing)

锁定一组对象，可选择部分成功。它返回锁定结果，包括失败。

#### 签名

```apex
public static List&lt;Approval.LockResult&gt; lock(List&lt;Id&gt; recordIds, Boolean allOrNothing)
```

#### 参数

**recordIds**
- 类型：List&lt;Id&gt;
- 描述：要锁定的对象的 ID。

**allOrNothing**
- 类型：Boolean
- 描述：指定此操作是否允许部分成功。如果您指定 false 且记录失败，DML 操作的其余部分仍可能成功。此方法返回一个结果对象，您可以使用它来验证哪些记录成功、哪些失败以及原因。

#### 返回值

- 类型：List&lt;Approval.LockResult&gt;

### lock(recordToLock, allOrNothing)

锁定对象，可选择部分成功，并返回锁定结果。

#### 签名

```apex
public static Approval.LockResult lock(SObject recordToLock, Boolean allOrNothing)
```

#### 参数

**recordToLock**
- 类型：SObject
- 描述：要锁定的记录对象

**allOrNothing**
- 类型：Boolean
- 描述：指定此操作是否允许部分成功。如果您指定 false 且记录失败，DML 操作的其余部分仍可能成功。此方法返回一个结果对象，您可以使用它来验证哪些记录成功、哪些失败以及原因。

#### 返回值

- 类型：Approval.LockResult

### lock(recordsToLock, allOrNothing)

锁定一组对象，可选择部分成功。它返回锁定结果，包括失败。

#### 签名

```apex
public static List&lt;Approval.LockResult&gt; lock(List&lt;SObject&gt; recordsToLock, Boolean allOrNothing)
```

#### 参数

**recordsToLock**
- 类型：List&lt;SObject&gt;
- 描述：要锁定的记录对象列表

**allOrNothing**
- 类型：Boolean
- 描述：指定此操作是否允许部分成功。如果您指定 false 且记录失败，DML 操作的其余部分仍可能成功。此方法返回一个结果对象，您可以使用它来验证哪些记录成功、哪些失败以及原因。

#### 返回值

- 类型：List&lt;Approval.LockResult&gt;

### process(approvalRequest)

提交新的审批请求并批准或拒绝现有的审批请求。

#### 签名

```apex
public static Approval.ProcessResult process(Approval.ProcessRequest approvalRequest)
```

#### 参数

**approvalRequest**
- 类型：Approval.ProcessRequest
- 描述：审批请求对象

#### 返回值

- 类型：Approval.ProcessResult

#### 示例

```apex
// 插入一个账户
Account a = new Account(Name='Test',
                     annualRevenue=100.0);
insert a;
// 为账户创建审批请求
Approval.ProcessSubmitRequest req1 = 
      new Approval.ProcessSubmitRequest();
req1.setObjectId(a.id);
// 提交账户的审批请求
Approval.ProcessResult result = 
                   Approval.process(req1);
```

### process(approvalRequest, allOrNone)

提交新的审批请求并批准或拒绝现有的审批请求。

#### 签名

```apex
public static Approval.ProcessResult process(Approval.ProcessRequest approvalRequest, Boolean allOrNone)
```

#### 参数

**approvalRequest**
- 类型：Approval.ProcessRequest
- 描述：审批请求对象

**allOrNone**
- 类型：Boolean
- 描述：可选的 allOrNone 参数指定操作是否允许部分成功。如果您为此参数指定 false 且审批失败，其余审批流程仍可能成功。

#### 返回值

- 类型：Approval.ProcessResult

### process(approvalRequests)

提交新的审批请求列表，并批准或拒绝现有的审批请求。

#### 签名

```apex
public static Approval.ProcessResult[] process(Approval.ProcessRequest[] approvalRequests)
```

#### 参数

**approvalRequests**
- 类型：Approval.ProcessRequest[]
- 描述：审批请求对象数组

#### 返回值

- 类型：Approval.ProcessResult[]

### process(approvalRequests, allOrNone)

提交新的审批请求列表，并批准或拒绝现有的审批请求。

#### 签名

```apex
public static Approval.ProcessResult[] process(Approval.ProcessRequest[] approvalRequests, Boolean allOrNone)
```

#### 参数

**approvalRequests**
- 类型：Approval.ProcessRequest[]
- 描述：审批请求对象数组

**allOrNone**
- 类型：Boolean
- 描述：可选的 allOrNone 参数指定操作是否允许部分成功。如果您为此参数指定 false 且审批失败，其余审批流程仍可能成功。

#### 返回值

- 类型：Approval.ProcessResult[]

### unlock(recordId)

解锁对象，并返回解锁结果。

#### 签名

```apex
public static Approval.UnlockResult unlock(Id recordId)
```

#### 参数

**recordId**
- 类型：Id
- 描述：要解锁的对象的 ID。

#### 返回值

- 类型：Approval.UnlockResult

### unlock(recordIds)

解锁一组对象，并返回解锁结果，包括失败。

#### 签名

```apex
public static List&lt;Approval.UnlockResult&gt; unlock(List&lt;Id&gt; recordIds)
```

#### 参数

**recordIds**
- 类型：List&lt;Id&gt;
- 描述：要解锁的对象的 ID。

#### 返回值

- 类型：List&lt;Approval.UnlockResult&gt;

### unlock(recordToUnlock)

解锁对象，并返回解锁结果。

#### 签名

```apex
public static Approval.UnlockResult unlock(SObject recordToUnlock)
```

#### 参数

**recordToUnlock**
- 类型：SObject
- 描述：要解锁的记录对象

#### 返回值

- 类型：Approval.UnlockResult

### unlock(recordsToUnlock)

解锁一组对象，并返回解锁结果，包括失败。

#### 签名

```apex
public static List&lt;Approval.UnlockResult&gt; unlock(List&lt;SObject&gt; recordsToUnlock)
```

#### 参数

**recordsToUnlock**
- 类型：List&lt;SObject&gt;
- 描述：要解锁的记录对象列表

#### 返回值

- 类型：List&lt;Approval.UnlockResult&gt;

### unlock(recordId, allOrNothing)

解锁对象，可选择部分成功，并返回解锁结果。

#### 签名

```apex
public static Approval.UnlockResult unlock(Id recordId, Boolean allOrNothing)
```

#### 参数

**recordId**
- 类型：Id
- 描述：要解锁的对象的 ID。

**allOrNothing**
- 类型：Boolean
- 描述：指定此操作是否允许部分成功。如果您指定 false 且记录失败，DML 操作的其余部分仍可能成功。此方法返回一个结果对象，您可以使用它来验证哪些记录成功、哪些失败以及原因。

#### 返回值

- 类型：Approval.UnlockResult

### unlock(recordIds, allOrNothing)

解锁一组对象，可选择部分成功。它返回解锁结果，包括失败。

#### 签名

```apex
public static List&lt;Approval.UnlockResult&gt; unlock(List&lt;Id&gt; recordIds, Boolean allOrNothing)
```

#### 参数

**recordIds**
- 类型：List&lt;Id&gt;
- 描述：要解锁的对象的 ID。

**allOrNothing**
- 类型：Boolean
- 描述：指定此操作是否允许部分成功。如果您指定 false 且记录失败，DML 操作的其余部分仍可能成功。此方法返回一个结果对象，您可以使用它来验证哪些记录成功、哪些失败以及原因。

#### 返回值

- 类型：List&lt;Approval.UnlockResult&gt;

### unlock(recordToUnlock, allOrNothing)

解锁对象，可选择部分成功，并返回解锁结果。

#### 签名

```apex
public static Approval.UnlockResult unlock(SObject recordToUnlock, Boolean allOrNothing)
```

#### 参数

**recordToUnlock**
- 类型：SObject
- 描述：要解锁的记录对象

**allOrNothing**
- 类型：Boolean
- 描述：指定此操作是否允许部分成功。如果您指定 false 且记录失败，DML 操作的其余部分仍可能成功。此方法返回一个结果对象，您可以使用它来验证哪些记录成功、哪些失败以及原因。

#### 返回值

- 类型：Approval.UnlockResult

### unlock(recordsToUnlock, allOrNothing)

解锁一组对象，可选择部分成功。它返回解锁结果，包括失败。

#### 签名

```apex
public static List&lt;Approval.UnlockResult&gt; unlock(List&lt;SObject&gt; recordsToUnlock, Boolean allOrNothing)
```

#### 参数

**recordsToUnlock**
- 类型：List&lt;SObject&gt;
- 描述：要解锁的记录对象列表

**allOrNothing**
- 类型：Boolean
- 描述：指定此操作是否允许部分成功。如果您指定 false 且记录失败，DML 操作的其余部分仍可能成功。此方法返回一个结果对象，您可以使用它来验证哪些记录成功、哪些失败以及原因。

#### 返回值

- 类型：List&lt;Approval.UnlockResult&gt;

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm*
