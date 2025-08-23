# Callable 接口

使开发人员能够使用通用接口在Apex类或触发器之间构建松耦合的集成，即使对于不同包中的代码也是如此。同意通用接口使来自不同公司或不同部门的开发人员能够基于彼此的解决方案进行构建。实现此接口以启用更广泛的社区，他们可能拥有与您所想不同的解决方案，来扩展您代码的功能。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Callable接口是Salesforce中用于实现松耦合集成的重要工具。
> 
> 它提供了一种通用的调用方式，允许不同包、不同开发团队之间的代码进行交互。

## 命名空间

System

## 用法

要实现Callable接口，您只需要编写一个方法：`call(String action, Map<String, Object> args)`。

在使用或测试Callable实现的代码中，将您的类型实例转换为Callable。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Callable接口的主要用途：
> 1. 提供通用接口，实现松耦合集成
> 2. 允许不同包之间的代码交互
> 3. 支持动态方法调用
> 4. 便于扩展和维护

## 重要说明

此接口不是Java Callable接口的类似物，Java Callable接口用于异步调用。不要混淆两者。

此接口不是为了替代定义更具体的接口。相反，Callable接口允许集成，其中来自不同类或包的代码可以使用通用基类型。

## Callable 方法

以下是Callable的方法。

### call(action, args)

提供其他类或包可以利用和构建的功能。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> call方法是Callable接口的核心方法，用于动态调用具体的业务逻辑。
> 
> 通过action参数指定要执行的操作，通过args参数传递参数。

#### 签名

```apex
public Object call(String action, Map<String, Object> args)
```

#### 参数

**action**
- 类型：String
- 描述：方法要表现的行为

**args**
- 类型：Map<String, Object>
- 描述：指定操作要使用的参数

#### 返回值

- 类型：Object
- 描述：方法调用的结果

## Callable 示例实现

此类是System.Callable接口的示例实现。

以下测试代码说明了调用代码如何使用接口来调用方法：

```apex
public class Extension implements Callable {
   // 实际方法
   String concatStrings(String stringValue) {
     return stringValue + stringValue;
   }
   
   // 实际方法
   Decimal multiplyNumbers(Decimal decimalValue) {
     return decimalValue * decimalValue;
   }
   
   // 分发实际方法
   public Object call(String action, Map<String, Object> args) {
     switch on action {
       when 'concatStrings' {
         return this.concatStrings((String)args.get('stringValue'));
       }
       when 'multiplyNumbers' {
         return this.multiplyNumbers((Decimal)args.get('decimalValue'));
       }
       when else {
        throw new ExtensionMalformedCallException('Method not implemented');
       }
     }
   }
   
   public class ExtensionMalformedCallException extends Exception {}
}
```

### 测试代码示例

```apex
@IsTest
private with sharing class ExtensionCaller {
   @IsTest
   private static void givenConfiguredExtensionWhenCalledThenValidResult() {
      // Given
      String extensionClass = 'Extension'; // 通常通过配置设置
      Decimal decimalTestValue = 10;
      
      // When
      Callable extension = 
         (Callable) Type.forName(extensionClass).newInstance();
      Decimal result = (Decimal) 
         extension.call('multiplyNumbers', new Map<String, Object> { 
            'decimalValue' => decimalTestValue
         });
      
      // Then
      System.assertEquals(100, result);
   }
}
```

## 实现要点

### 1. 接口实现

- 类必须实现`Callable`接口
- 必须实现`call(String action, Map<String, Object> args)`方法
- 使用switch语句根据action参数分发到具体方法

### 2. 动态调用

- 使用`Type.forName(className).newInstance()`创建实例
- 将实例转换为`Callable`类型
- 通过`call`方法传递action和参数

### 3. 参数处理

- 参数通过`Map<String, Object>`传递
- 需要根据参数名获取对应的值
- 进行适当的类型转换

### 4. 错误处理

- 对于未实现的方法，抛出自定义异常
- 提供清晰的错误信息

## 使用场景

### 1. 包间集成

```apex
// 包A中的实现
public class PackageAExtension implements Callable {
    public Object call(String action, Map<String, Object> args) {
        // 包A的具体实现
    }
}

// 包B中的调用
Callable extension = (Callable) Type.forName('PackageAExtension').newInstance();
Object result = extension.call('someAction', args);
```

### 2. 动态配置

```apex
// 从配置中获取类名
String className = CustomSetting__c.getInstance().ExtensionClass__c;
Callable extension = (Callable) Type.forName(className).newInstance();
```

### 3. 插件架构

```apex
// 主程序
public class PluginManager {
    public Object executePlugin(String pluginName, String action, Map<String, Object> args) {
        Callable plugin = (Callable) Type.forName(pluginName).newInstance();
        return plugin.call(action, args);
    }
}
```

## 注意事项

- Callable接口不是Java Callable接口的类似物
- 此接口用于同步调用，不是异步调用
- 实现类需要处理所有可能的action参数
- 参数类型转换需要谨慎处理
- 建议为未实现的方法提供明确的错误信息
- 动态调用可能影响性能，需要合理使用

## 最佳实践

### 1. 命名约定

```apex
// 使用清晰的action名称
public Object call(String action, Map<String, Object> args) {
    switch on action {
        when 'processAccount' {
            return processAccount((Id)args.get('accountId'));
        }
        when 'calculateRevenue' {
            return calculateRevenue((Decimal)args.get('amount'));
        }
        when else {
            throw new UnsupportedActionException('Action not supported: ' + action);
        }
    }
}
```

### 2. 参数验证

```apex
public Object call(String action, Map<String, Object> args) {
    // 验证必需参数
    if (args == null || !args.containsKey('requiredParam')) {
        throw new IllegalArgumentException('Required parameter missing');
    }
    
    switch on action {
        // 具体实现
    }
}
```

### 3. 错误处理

```apex
public class CustomCallableException extends Exception {
    public CustomCallableException(String message) {
        super(message);
    }
}

public Object call(String action, Map<String, Object> args) {
    try {
        switch on action {
            // 具体实现
        }
    } catch (Exception e) {
        throw new CustomCallableException('Error in action: ' + action + ' - ' + e.getMessage());
    }
}
```

## 相关链接

- [Apex开发者指南：类和转换](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes.htm)
- [接口和抽象类](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_interfaces.htm)
- [动态类型](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_dynamic_types.htm)

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_interface_System_Callable.htm*
