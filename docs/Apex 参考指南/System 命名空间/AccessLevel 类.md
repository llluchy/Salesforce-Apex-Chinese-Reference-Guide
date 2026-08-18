# AccessLevel 类

> **英文原文**: [AccessLevel Class](https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_class_system_AccessLevel.htm)

## 说明

`AccessLevel` 类用于在 Apex 中指定字段的访问级别。它与 `Security` 类一起使用,用于实现字段级安全(FLS)检查。

## 方法

### newInstance(mode)

创建一个新的 AccessLevel 实例。

```apex
public static AccessLevel newInstance(String mode)
```

**参数**

| 参数名 | 类型 | 说明 |
|--------|------|------|
| mode | String | 访问模式,可选值为 `'editable'` 或 `'readable'` |

**返回值**

| 类型 | 说明 |
|------|------|
| AccessLevel | 返回指定模式的 AccessLevel 实例 |

## 示例

```apex
// 检查用户是否可编辑 Account 的 Name 字段
AccessLevel level = AccessLevel.newInstance('editable');
Boolean hasAccess = Security.stripInaccessible(
  AccessLevel.newInstance('editable'),
  [SELECT Name FROM Account LIMIT 1]
).getRecords().size() > 0;
```
