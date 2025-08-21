# Assert 类

包含用于在测试方法中断言各种条件的方法，例如两个值是否相同、条件是否为真或变量是否为null。

## 命名空间

System

## Assert 方法

以下是 Assert 的方法。

### areEqual(expected, actual, msg)

断言前两个参数相同。

#### 签名

```apex
public static void areEqual(Object expected, Object actual, String msg)
```

#### 参数

**expected**
- 类型：Object
- 描述：期望值。

**actual**
- 类型：Object
- 描述：实际值。

**msg**
- 类型：String
- 描述：（可选）作为错误消息一部分返回的自定义消息。

#### 返回值

- 类型：void

#### 用法

如果前两个参数不相同，则返回导致代码执行停止的致命错误。

您无法使用 try/catch 块捕获断言失败，即使它被记录为异常。

#### 示例

```apex
String sub = 'abcde'.substring(2);
Assert.areEqual('cde', sub, 'Expected characters after first two'); // 成功
```

### areEqual(expected, actual)

断言两个参数相同。

#### 签名

```apex
public static void areEqual(Object expected, Object actual)
```

#### 参数

**expected**
- 类型：Object
- 描述：期望值。

**actual**
- 类型：Object
- 描述：实际值。

#### 返回值

- 类型：void

#### 用法

如果两个参数不相同，则返回导致代码执行停止的致命错误。

您无法使用 try/catch 块捕获断言失败，即使它被记录为异常。

#### 示例

```apex
String sub = 'abcde'.substring(2);
Assert.areEqual('cde', sub); // 成功
```

### areNotEqual(notExpected, actual, msg)

断言前两个参数不相同。

#### 签名

```apex
public static void areNotEqual(Object notExpected, Object actual, String msg)
```

#### 参数

**notExpected**
- 类型：Object
- 描述：不期望的值。

**actual**
- 类型：Object
- 描述：实际值。

**msg**
- 类型：String
- 描述：（可选）作为错误消息一部分返回的自定义消息。

#### 返回值

- 类型：void

#### 用法

如果前两个参数相同，则返回导致代码执行停止的致命错误。

您无法使用 try/catch 块捕获断言失败，即使它被记录为异常。

#### 示例

```apex
String sub = 'abcde'.substring(2);
Assert.areNotEqual('xyz', sub, 'Characters not expected after first two'); // 成功
```

### areNotEqual(notExpected, actual)

断言两个参数不相同。

#### 签名

```apex
public static void areNotEqual(Object notExpected, Object actual)
```

#### 参数

**notExpected**
- 类型：Object
- 描述：不期望的值。

**actual**
- 类型：Object
- 描述：实际值。

#### 返回值

- 类型：void

#### 用法

如果两个参数相同，则返回导致代码执行停止的致命错误。

您无法使用 try/catch 块捕获断言失败，即使它被记录为异常。

#### 示例

```apex
String sub = 'abcde'.substring(2);
Assert.areNotEqual('xyz', sub); // 成功
```

### fail(msg)

立即返回导致代码执行停止的致命错误。

#### 签名

```apex
public static void fail(String msg)
```

#### 参数

**msg**
- 类型：String
- 描述：（可选）作为错误消息一部分返回的自定义消息。

#### 返回值

- 类型：void

#### 用法

通常用于期望抛出异常的 try/catch 块测试用例中。但是，您无法在 try/catch 块中捕获断言失败，即使它被记录为异常。

#### 示例

```apex
// 期望异常的测试用例
try {
    SomeClass.methodUnderTest();
    Assert.fail('DmlException Expected');
} catch (DmlException ex) {
    // 在此处添加关于预期异常的断言
}
```

### fail()

立即返回导致代码执行停止的致命错误。

#### 签名

```apex
public static void fail()
```

#### 返回值

- 类型：void

#### 用法

通常用于期望抛出异常的 try/catch 块测试用例中。但是，您无法在 try/catch 块中捕获断言失败，即使它被记录为异常。

#### 示例

```apex
// 期望异常的测试用例
try {
    SomeClass.methodUnderTest();
    Assert.fail(); 
} catch (DmlException ex) {
    // 在此处添加关于预期异常的断言
}
```

### isFalse(condition, msg)

断言指定的条件为假。

#### 签名

```apex
public static void isFalse(Boolean condition, String msg)
```

#### 参数

**condition**
- 类型：Boolean
- 描述：您正在检查以确定是否为假的条件。

**msg**
- 类型：String
- 描述：（可选）作为错误消息一部分返回的自定义消息。

#### 返回值

- 类型：void

#### 用法

如果条件为真，则返回导致代码执行停止的致命错误。

您无法使用 try/catch 块捕获断言失败，即使它被记录为异常。

#### 示例

```apex
Boolean containsCode = 'Salesforce'.contains('code');
Assert.isFalse(containsCode, 'No code'); // 断言成功
```

### isFalse(condition)

断言指定的条件为假。

#### 签名

```apex
public static void isFalse(Boolean condition)
```

#### 参数

**condition**
- 类型：Boolean
- 描述：您正在检查以确定是否为假的条件。

#### 返回值

- 类型：void

#### 用法

如果条件为真，则返回导致代码执行停止的致命错误。

您无法使用 try/catch 块捕获断言失败，即使它被记录为异常。

#### 示例

```apex
Boolean containsCode = 'Salesforce'.contains('code');
Assert.isFalse(containsCode); // 断言成功
```

### isInstanceOfType(instance, expectedType, msg)

断言实例是指定的类型。

#### 签名

```apex
public static void isInstanceOfType(Object instance, System.Type expectedType, String msg)
```

#### 参数

**instance**
- 类型：Object
- 描述：您正在检查其类型的实例。

**expectedType**
- 类型：System.Type
- 描述：期望的类型。

**msg**
- 类型：String
- 描述：（可选）作为错误消息一部分返回的自定义消息。

#### 返回值

- 类型：void

#### 用法

如果实例不是指定类型，则返回导致代码执行停止的致命错误。

您无法使用 try/catch 块捕获断言失败，即使它被记录为异常。

#### 示例

```apex
Account o = new Account();
Assert.isInstanceOfType(o, Account.class, 'Expected type.'); // 成功
```

### isInstanceOfType(instance, expectedType)

断言实例是指定的类型。

#### 签名

```apex
public static void isInstanceOfType(Object instance, System.Type expectedType)
```

#### 参数

**instance**
- 类型：Object
- 描述：您正在检查其类型的实例。

**expectedType**
- 类型：System.Type
- 描述：期望的类型。

#### 返回值

- 类型：void

#### 用法

如果实例不是指定类型，则返回导致代码执行停止的致命错误。

您无法使用 try/catch 块捕获断言失败，即使它被记录为异常。

#### 示例

```apex
Account o = new Account();
Assert.isInstanceOfType(o, Account.class); // 成功
```

### isNotInstanceOfType(instance, notExpectedType, msg)

断言实例不是指定的类型。

#### 签名

```apex
public static void isNotInstanceOfType(Object instance, System.Type notExpectedType, String msg)
```

#### 参数

**instance**
- 类型：Object
- 描述：您正在检查其类型的实例。

**notExpectedType**
- 类型：System.Type
- 描述：不期望的类型。

**msg**
- 类型：String
- 描述：（可选）作为错误消息一部分返回的自定义消息。

#### 返回值

- 类型：void

#### 用法

如果实例是指定类型，则返回导致代码执行停止的致命错误。

您无法使用 try/catch 块捕获断言失败，即使它被记录为异常。

#### 示例

```apex
Contact con = new Contact();
Assert.isNotInstanceOfType(con, Account.class, 'Not expected type'); // 成功
```

### isNotInstanceOfType(instance, notExpectedType)

断言实例不是指定的类型。

#### 签名

```apex
public static void isNotInstanceOfType(Object instance, System.Type notExpectedType)
```

#### 参数

**instance**
- 类型：Object
- 描述：您正在检查其类型的实例。

**notExpectedType**
- 类型：System.Type
- 描述：不期望的类型。

#### 返回值

- 类型：void

#### 用法

如果实例是指定类型，则返回导致代码执行停止的致命错误。

您无法使用 try/catch 块捕获断言失败，即使它被记录为异常。

#### 示例

```apex
Contact con = new Contact();
Assert.isNotInstanceOfType(con, Account.class); // 成功
```

### isNotNull(value, msg)

断言值不为null。

#### 签名

```apex
public static void isNotNull(Object value, String msg)
```

#### 参数

**value**
- 类型：Object
- 描述：您正在检查以确定是否不为null的值。

**msg**
- 类型：String
- 描述：（可选）作为错误消息一部分返回的自定义消息。

#### 返回值

- 类型：void

#### 用法

如果值为null，则返回导致代码执行停止的致命错误。

您无法使用 try/catch 块捕获断言失败，即使它被记录为异常。

#### 示例

```apex
String myString = 'value'; 
Assert.isNotNull(myString, 'myString should not be null'); // 成功
```

### isNotNull(value)

断言值不为null。

#### 签名

```apex
public static void isNotNull(Object value)
```

#### 参数

**value**
- 类型：Object
- 描述：您正在检查以确定是否不为null的值。

#### 返回值

- 类型：void

#### 用法

如果值为null，则返回导致代码执行停止的致命错误。

您无法使用 try/catch 块捕获断言失败，即使它被记录为异常。

#### 示例

```apex
String myString = 'value'; 
Assert.isNotNull(myString); // 成功
```

### isNull(value, msg)

断言值为null。

#### 签名

```apex
public static void isNull(Object value, String msg)
```

#### 参数

**value**
- 类型：Object
- 描述：您正在检查以确定是否为null的值。

**msg**
- 类型：String
- 描述：（可选）作为错误消息一部分返回的自定义消息。

#### 返回值

- 类型：void

#### 用法

如果值不为null，则返回导致代码执行停止的致命错误。

您无法使用 try/catch 块捕获断言失败，即使它被记录为异常。

#### 示例

```apex
String myString = null; 
Assert.isNull(myString, 'String should be null'); // 成功
```

### isNull(value)

断言值为null。

#### 签名

```apex
public static void isNull(Object value)
```

#### 参数

**value**
- 类型：Object
- 描述：您正在检查以确定是否为null的值。

#### 返回值

- 类型：void

#### 用法

如果值不为null，则返回导致代码执行停止的致命错误。

您无法使用 try/catch 块捕获断言失败，即使它被记录为异常。

#### 示例

```apex
String myString = null; 
Assert.isNull(myString); // 成功
```

### isTrue(condition, msg)

断言指定的条件为真。

#### 签名

```apex
public static void isTrue(Boolean condition, String msg)
```

#### 参数

**condition**
- 类型：Boolean
- 描述：您正在检查以确定是否为真的条件。

**msg**
- 类型：String
- 描述：（可选）作为错误消息一部分返回的自定义消息。

#### 返回值

- 类型：void

#### 用法

如果指定的条件为假，则返回导致代码执行停止的致命错误。

您无法使用 try/catch 块捕获断言失败，即使它被记录为异常。

#### 示例

```apex
Boolean containsForce = 'Salesforce'.contains('force');
Assert.isTrue(containsForce, 'Contains force'); // 断言成功
```

### isTrue(condition)

断言指定的条件为真。

#### 签名

```apex
public static void isTrue(Boolean condition)
```

#### 参数

**condition**
- 类型：Boolean
- 描述：您正在检查以确定是否为真的条件。

#### 返回值

- 类型：void

#### 用法

如果指定的条件为假，则返回导致代码执行停止的致命错误。

您无法使用 try/catch 块捕获断言失败，即使它被记录为异常。

#### 示例

```apex
Boolean containsForce = 'Salesforce'.contains('force');
Assert.isTrue(containsForce); // 断言成功
```

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_class_System_Assert.htm*
