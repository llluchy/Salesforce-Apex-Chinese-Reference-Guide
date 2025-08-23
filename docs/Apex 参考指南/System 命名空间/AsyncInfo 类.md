# AsyncInfo 类

提供用于获取当前堆栈深度、最大堆栈深度和Queueable事务的最小队列延迟的方法，以及确定是否设置了最大堆栈深度。

## 命名空间

System

## AsyncInfo 方法

以下是 AsyncInfo 的方法。

### getCurrentQueueableStackDepth()

获取Queueable事务的当前队列堆栈深度。

#### 签名

```apex
public static Integer getCurrentQueueableStackDepth()
```

#### 返回值

- 类型：Integer

### getMaximumQueueableStackDepth()

获取Queueable事务的最大队列堆栈深度。

#### 签名

```apex
public static Integer getMaximumQueueableStackDepth()
```

#### 返回值

- 类型：Integer

### getMinimumQueueableDelayInMinutes()

获取Queueable事务的最小队列延迟（以分钟为单位）。

#### 签名

```apex
public static Integer getMinimumQueueableDelayInMinutes()
```

#### 返回值

- 类型：Integer
- 描述：如果没有定义延迟，则返回null。

### hasMaxStackDepth()

确定是否为您的Queueable请求设置了最大堆栈深度。

#### 签名

```apex
public static Boolean hasMaxStackDepth()
```

#### 返回值

- 类型：Boolean

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncInfo.htm*
