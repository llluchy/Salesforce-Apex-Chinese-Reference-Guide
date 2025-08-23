# AsyncOptions 类

包含Queueable事务的最大堆栈深度和最小队列延迟（以分钟为单位）。作为参数传递给System.enqueueJob()方法，用于定义唯一的Queueable作业签名、Queueable事务的最大堆栈深度和最小队列延迟（以分钟为单位）。

## 命名空间

System

## 另请参阅

- Apex Developer Guide: Queueable Apex
- Apex Developer Guide: Detecting Duplicate Queueable Jobs

## AsyncOptions 属性

以下是 AsyncOptions 的属性。

### DuplicateSignature

Queueable作业的唯一签名。

#### 签名

```apex
public System.QueueableDuplicateSignature DuplicateSignature {get; set;}
```

#### 属性值

- 类型：QueueableDuplicateSignature 类

### MaximumQueueableStackDepth

Queueable事务的最大堆栈深度。

#### 签名

```apex
public Integer MaximumQueueableStackDepth {get; set;}
```

#### 属性值

- 类型：Integer

### MinimumQueueableDelayInMinutes

Queueable事务的最小队列延迟。

#### 签名

```apex
public Integer MinimumQueueableDelayInMinutes {get; set;}
```

#### 属性值

- 类型：Integer

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncOptions.htm*
