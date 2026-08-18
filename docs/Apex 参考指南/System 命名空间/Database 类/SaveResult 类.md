# Database.SaveResult 类

> **英文原文**: [Database.SaveResult Class](https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_class_database_saveResult.htm)

## 说明

`Database.SaveResult` 类包含数据库插入和更新操作的结果信息。

## 方法

### getId()

返回已成功插入或更新的记录的 ID。

```apex
public String getId()
```

### isSuccess()

返回操作是否成功。

```apex
public Boolean isSuccess()
```

### getErrors()

返回操作中产生的错误信息数组。

```apex
public Database.Error[] getErrors()
```

## 示例

```apex
Database.SaveResult[] results = Database.insert(
  [SELECT Id FROM Account LIMIT 1],
  false
);

for (Database.SaveResult sr : results) {
  if (sr.isSuccess()) {
    System.debug('成功插入记录: ' + sr.getId());
  } else {
    for (Database.Error err : sr.getErrors()) {
      System.debug('错误: ' + err.getMessage());
    }
  }
}
```

::: tip 三层嵌套演示
你正在查看的页面位于第三层嵌套:
`Apex 参考指南` > `System 命名空间` > `Database 类` > `SaveResult 类`
每一层都是可点击的页面,同时可以展开查看子节点。这就是无限嵌套的效果。
:::
