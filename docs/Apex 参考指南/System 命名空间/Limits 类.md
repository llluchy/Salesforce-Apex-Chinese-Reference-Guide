# Limits 类

包含返回特定资源限制信息的方法。

## 命名空间

System

## 用法

Limits 方法返回特定治理器的具体限制，例如方法的调用次数或剩余的堆大小。

由于 Apex 在多租户环境中运行，Apex 运行时引擎严格执行许多限制，以确保失控的 Apex 不会垄断共享资源。

所有 Limits 方法都不需要参数。限制方法的格式如下：

每个方法都有两个版本：第一个返回已使用的资源量，第二个版本包含单词 limit 并返回可用的资源总量。

请参阅执行治理器和限制。

## Limits 方法

以下是 Limits 的方法。所有方法都是静态的。

### getAggregateQueries()
返回已通过任何 SOQL 查询语句处理的聚合查询数量。

**签名**
```apex
public static Integer getAggregateQueries()
```

**返回值**
- 类型：Integer

### getLimitAggregateQueries()
返回可以通过 SOQL 查询语句处理的聚合查询总数。

**签名**
```apex
public static Integer getLimitAggregateQueries()
```

**返回值**
- 类型：Integer

### getApexCursorRows()
获取 Apex 游标返回的行数。

**签名**
```apex
public static Integer getApexCursorRows()
```

**返回值**
- 类型：Integer

### getLimitApexCursorRows()
获取 Apex 游标可以返回的最大行数。

**签名**
```apex
public static Integer getLimitApexCursorRows()
```

**返回值**
- 类型：Integer

### getFetchCallsOnApexCursor()
获取 Apex 游标上的获取调用次数。

**签名**
```apex
public static Integer getFetchCallsOnApexCursor()
```

**返回值**
- 类型：Integer

### getLimitFetchCallsOnApexCursor()
获取可以在 Apex 游标上进行的最大获取调用次数。

**签名**
```apex
public static Integer getLimitFetchCallsOnApexCursor()
```

**返回值**
- 类型：Integer

### getAsyncCalls()
保留供将来使用。

**签名**
```apex
public static Integer getAsyncCalls()
```

**返回值**
- 类型：Integer

### getLimitAsyncCalls()
保留供将来使用。

**签名**
```apex
public static Integer getLimitAsyncCalls()
```

**返回值**
- 类型：Integer

### getCallouts()
返回已处理的 Web 服务语句数量。

**签名**
```apex
public static Integer getCallouts()
```

**返回值**
- 类型：Integer

### getLimitCallouts()
返回可以处理的 Web 服务语句总数。

**签名**
```apex
public static Integer getLimitCallouts()
```

**返回值**
- 类型：Integer

### getCpuTime()
返回当前事务中已使用的 CPU 时间（以毫秒为单位）。

**签名**
```apex
public static Integer getCpuTime()
```

**返回值**
- 类型：Integer

### getLimitCpuTime()
返回事务中可以使用的最大 CPU 时间（以毫秒为单位）。

**签名**
```apex
public static Integer getLimitCpuTime()
```

**返回值**
- 类型：Integer

### getDMLRows()
返回已通过任何计入 DML 限制的语句处理的记录数量，例如 DML 语句、Database.emptyRecycleBin 方法和其他方法。

**签名**
```apex
public static Integer getDMLRows()
```

**返回值**
- 类型：Integer

### getLimitDMLRows()
返回可以通过任何计入 DML 限制的语句处理的记录总数，例如 DML 语句、database.EmptyRecycleBin 方法和其他方法。

**签名**
```apex
public static Integer getLimitDMLRows()
```

**返回值**
- 类型：Integer

### getDMLStatements()
返回已调用的 DML 语句数量（例如 insert、update 或 database.EmptyRecycleBin 方法）。

**签名**
```apex
public static Integer getDMLStatements()
```

**返回值**
- 类型：Integer

### getLimitDMLStatements()
返回可以调用的 DML 语句或 database.EmptyRecycleBin 方法总数。

**签名**
```apex
public static Integer getLimitDMLStatements()
```

**返回值**
- 类型：Integer

### getEmailInvocations()
返回已调用的电子邮件调用数量（例如 sendEmail）。

**签名**
```apex
public static Integer getEmailInvocations()
```

**返回值**
- 类型：Integer

### getLimitEmailInvocations()
返回可以调用的电子邮件调用总数（例如 sendEmail）。

**签名**
```apex
public static Integer getLimitEmailInvocations()
```

**返回值**
- 类型：Integer

### getFindSimilarCalls()
已弃用。返回与 getSoslQueries 相同的值。findSimilar 方法的数量不再是单独的限制，而是作为发出的 SOSL 查询数量进行跟踪。

**签名**
```apex
public static Integer getFindSimilarCalls()
```

**返回值**
- 类型：Integer

### getLimitFindSimilarCalls()
已弃用。返回与 getLimitSoslQueries 相同的值。findSimilar 方法的数量不再是单独的限制，而是作为发出的 SOSL 查询数量进行跟踪。

**签名**
```apex
public static Integer getLimitFindSimilarCalls()
```

**返回值**
- 类型：Integer

### getFutureCalls()
返回已执行（不一定完成）的带有 future 注释的方法数量。

**签名**
```apex
public static Integer getFutureCalls()
```

**返回值**
- 类型：Integer

### getLimitFutureCalls()
返回可以执行（不一定完成）的带有 future 注释的方法总数。

**签名**
```apex
public static Integer getLimitFutureCalls()
```

**返回值**
- 类型：Integer

### getHeapSize()
返回已用于堆的近似内存量（以字节为单位）。

**签名**
```apex
public static Integer getHeapSize()
```

**返回值**
- 类型：Integer

### getLimitHeapSize()
返回可以用于堆的内存总量（以字节为单位）。

**签名**
```apex
public static Integer getLimitHeapSize()
```

**返回值**
- 类型：Integer

### getMobilePushApexCalls()
返回当前计量间隔期间移动推送通知已使用的 Apex 调用数量。

**签名**
```apex
public static Integer getMobilePushApexCalls()
```

**返回值**
- 类型：Integer

### getLimitMobilePushApexCalls()
返回每个事务允许移动推送通知的 Apex 调用总数。

**签名**
```apex
public static Integer getLimitMobilePushApexCalls()
```

**返回值**
- 类型：Integer

### getPublishImmediateDML()
返回已为配置为立即发布的平台事件进行的 EventBus.publish 调用数量。

**签名**
```apex
public static Integer getPublishImmediateDML()
```

**返回值**
- 类型：Integer

### getLimitPublishImmediateDML()
返回可以为配置为立即发布的平台事件调用的 EventBus.publish 语句总数。

**签名**
```apex
public static Integer getLimitPublishImmediateDML()
```

**返回值**
- 类型：Integer

### getQueries()
返回已发出的 SOQL 查询数量。

**签名**
```apex
public static Integer getQueries()
```

**返回值**
- 类型：Integer

### getLimitQueries()
返回可以发出的 SOQL 查询总数。

**签名**
```apex
public static Integer getLimitQueries()
```

**返回值**
- 类型：Integer

### getQueryLocatorRows()
返回 Database.getQueryLocator 方法返回的记录数量。

**签名**
```apex
public static Integer getQueryLocatorRows()
```

**返回值**
- 类型：Integer

### getLimitQueryLocatorRows()
返回 Database.getQueryLocator 方法可以返回的记录总数。

**签名**
```apex
public static Integer getLimitQueryLocatorRows()
```

**返回值**
- 类型：Integer

### getQueryRows()
返回通过发出 SOQL 查询返回的记录数量。

**签名**
```apex
public static Integer getQueryRows()
```

**返回值**
- 类型：Integer

### getLimitQueryRows()
返回通过发出 SOQL 查询可以返回的记录总数。

**签名**
```apex
public static Integer getLimitQueryRows()
```

**返回值**
- 类型：Integer

### getQueueableJobs()
返回每个事务已添加到队列的可排队作业数量。可排队作业对应于实现 Queueable 接口的类。

**签名**
```apex
public static Integer getQueueableJobs()
```

**返回值**
- 类型：Integer

### getLimitQueueableJobs()
返回每个事务可以添加到队列的可排队作业最大数量。可排队作业对应于实现 Queueable 接口的类。

**签名**
```apex
public static Integer getLimitQueueableJobs()
```

**返回值**
- 类型：Integer

### getRunAs()
已弃用。返回与 getDMLStatements 相同的值。

**签名**
```apex
public static Integer getRunAs()
```

**返回值**
- 类型：Integer

**用法**
RunAs 方法的数量不再是单独的限制，而是作为发出的 DML 语句数量进行跟踪。

### getLimitRunAs()
已弃用。返回与 getLimitDMLStatements 相同的值。

**签名**
```apex
public static Integer getLimitRunAs()
```

**返回值**
- 类型：Integer

**用法**
RunAs 方法的数量不再是单独的限制，而是作为发出的 DML 语句数量进行跟踪。

### getSavepointRollbacks()
已弃用。返回与 getDMLStatements 相同的值。

**签名**
```apex
public static Integer getSavepointRollbacks()
```

**返回值**
- 类型：Integer

**用法**
Rollback 方法的数量不再是单独的限制，而是作为发出的 DML 语句数量进行跟踪。

### getLimitSavepointRollbacks()
已弃用。返回与 getLimitDMLStatements 相同的值。

**签名**
```apex
public static Integer getLimitSavepointRollbacks()
```

**返回值**
- 类型：Integer

**用法**
Rollback 方法的数量不再是单独的限制，而是作为发出的 DML 语句数量进行跟踪。

### getSavepoints()
已弃用。返回与 getDMLStatements 相同的值。

**签名**
```apex
public static Integer getSavepoints()
```

**返回值**
- 类型：Integer

**用法**
setSavepoint 方法的数量不再是单独的限制，而是作为发出的 DML 语句数量进行跟踪。

### getLimitSavepoints()
已弃用。返回与 getLimitDMLStatements 相同的值。

**签名**
```apex
public static Integer getLimitSavepoints()
```

**返回值**
- 类型：Integer

**用法**
setSavepoint 方法的数量不再是单独的限制，而是作为发出的 DML 语句数量进行跟踪。

### getSoslQueries()
返回已发出的 SOSL 查询数量。

**签名**
```apex
public static Integer getSoslQueries()
```

**返回值**
- 类型：Integer

### getLimitSoslQueries()
返回可以发出的 SOSL 查询总数。

**签名**
```apex
public static Integer getLimitSoslQueries()
```

**返回值**
- 类型：Integer

## 示例

```apex
myDMLLimit = Limits.getDMLStatements();
```

