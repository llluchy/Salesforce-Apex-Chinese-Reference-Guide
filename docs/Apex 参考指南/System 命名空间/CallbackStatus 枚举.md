# CallbackStatus 枚举

指定异步请求到外部系统的状态。

## 命名空间

System

## 用法

CallbackStatus枚举用于表示异步操作的不同状态，特别是在与外部系统进行异步通信时。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> CallbackStatus枚举用于跟踪异步操作的状态。
> 
> 当你向外部系统发送异步请求时，这个枚举可以帮助你了解请求的当前状态，比如是否完成、是否超时等。

## 示例

以下示例展示如何使用CallbackStatus枚举检查异步操作状态：

```apex
// 检查异步操作状态
CallbackStatus status = CallbackStatus.COMPLETED;
if (status == CallbackStatus.COMPLETED) {
    System.debug('异步操作已完成');
} else if (status == CallbackStatus.PENDING) {
    System.debug('异步操作正在进行中');
}
```

## CallbackStatus 枚举值

以下是System.CallbackStatus枚举的所有值。

### CANCELLED

异步操作已被取消。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> CANCELLED状态表示异步操作被主动取消了。
> 
> 这通常发生在用户或系统决定不再需要等待这个异步操作的结果时。

#### 用法

```apex
CallbackStatus status = CallbackStatus.CANCELLED;
if (status == CallbackStatus.CANCELLED) {
    // 处理取消状态
    System.debug('操作已被取消');
}
```

### COMPLETED

异步操作已完成。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> COMPLETED状态表示异步操作成功完成了。
> 
> 这是最理想的状态，表示外部系统已经处理了请求并返回了结果。

#### 用法

```apex
CallbackStatus status = CallbackStatus.COMPLETED;
if (status == CallbackStatus.COMPLETED) {
    // 处理完成状态
    System.debug('操作已完成');
    // 处理返回结果
}
```

### PENDING

异步操作正在进行中。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> PENDING状态表示异步操作还在等待外部系统的响应。
> 
> 在这个状态下，你需要继续等待或者定期检查状态更新。

#### 用法

```apex
CallbackStatus status = CallbackStatus.PENDING;
if (status == CallbackStatus.PENDING) {
    // 处理等待状态
    System.debug('操作正在进行中，请稍候...');
    // 可能需要继续轮询状态
}
```

### TIMED_OUT

异步操作已超时。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> TIMED_OUT状态表示异步操作超过了预定的时间限制。
> 
> 这通常表示外部系统没有在预期时间内响应，可能需要重试或采取其他措施。

#### 用法

```apex
CallbackStatus status = CallbackStatus.TIMED_OUT;
if (status == CallbackStatus.TIMED_OUT) {
    // 处理超时状态
    System.debug('操作已超时');
    // 可能需要重试或通知用户
}
```

## 完整示例

以下是一个完整的示例，展示如何处理不同的回调状态：

```apex
public class AsyncOperationHandler {
    
    public void handleCallbackStatus(CallbackStatus status) {
        switch on status {
            when CallbackStatus.COMPLETED {
                System.debug('异步操作成功完成');
                processCompletedOperation();
            }
            when CallbackStatus.PENDING {
                System.debug('异步操作正在进行中');
                scheduleStatusCheck();
            }
            when CallbackStatus.CANCELLED {
                System.debug('异步操作已被取消');
                handleCancellation();
            }
            when CallbackStatus.TIMED_OUT {
                System.debug('异步操作已超时');
                handleTimeout();
            }
        }
    }
    
    private void processCompletedOperation() {
        // 处理完成的操作
    }
    
    private void scheduleStatusCheck() {
        // 安排状态检查
    }
    
    private void handleCancellation() {
        // 处理取消情况
    }
    
    private void handleTimeout() {
        // 处理超时情况
    }
}
```

## 注意事项

- CallbackStatus枚举主要用于异步操作的状态跟踪
- 不同的状态需要不同的处理策略
- 建议实现适当的重试机制来处理超时情况
- 在长时间运行的操作中，定期检查状态是很重要的

## 相关链接

- [异步处理文档](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_async_overview.htm)
- [外部服务集成文档](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_integrate_overview.htm)

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_enum_System_CallbackStatus.htm*
