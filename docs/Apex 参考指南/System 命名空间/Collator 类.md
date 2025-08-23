# Collator 类

包含用于获取特定于区域设置的实例的方法，这些实例可用于比较和排序。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Collator类是Salesforce中用于处理国际化排序的工具类。
> 
> 它可以根据用户的语言环境（locale）来正确排序字符串，比如法语、德语等不同语言的排序规则。

## 命名空间

System

## 用法

使用`getInstance()`方法获取给定区域设置的Collator实例，并将Collator作为Comparator参数传递给`list.sort()`方法。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 由于区域敏感排序可能会根据运行代码的用户产生不同的结果，避免在触发器或期望特定排序顺序的代码中使用它。

由于区域敏感排序可能会根据运行代码的用户产生不同的结果，避免在触发器或期望特定排序顺序的代码中使用它。

## 示例

此示例执行默认列表排序，然后使用Collator根据用户区域设置进行排序：

```apex
@IsTest
static void userLocaleSort() {
    
    string userLocale = 'fr_FR';
    
    User u = new User(Alias = 'standt', Email='standarduser@testorg.com',
    EmailEncodingKey='UTF-8', LastName='Testing', LanguageLocaleKey='en_US',
    LocaleSidKey=userLocale, TimeZoneSidKey='America/Los_Angeles',
    ProfileId = [SELECT Id FROM Profile WHERE Name='Standard User'].Id,
    UserName='standarduser' + DateTime.now().getTime() + '@testorg.com');
   
    System.runAs(u) {
       
        List<String> shoppingList = new List<String> {
            'épaule désosé Agneau',
            'Juice',
            'à la mélasse Galette 5 kg',
            'Bread',
            'Grocery'
        };
        
        // 默认排序
        shoppingList.sort();
        Assert.areEqual('Bread', shoppingList[0]);
        
        // 基于用户区域设置的排序
        Collator myCollator = Collator.getInstance();
        shoppingList.sort(myCollator);
        Assert.areEqual('à la mélasse Galette 5 kg', shoppingList[0]);
        Assert.areEqual('Bread', shoppingList[1]);
        Assert.areEqual('épaule désosé Agneau', shoppingList[2]);
        Assert.areEqual('Grocery', shoppingList[3]);
        Assert.areEqual('Juice', shoppingList[4]);
    }
}
```

## Collator 方法

以下是Collator的方法。

### compare(source, target)

对给定区域设置执行字符串比较。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> compare方法用于比较两个字符串，考虑特定语言环境的排序规则。
> 
> 比如在法语中，"à"会排在"a"之前，而在英语中则相反。

#### 签名

```apex
public Integer compare(String source, String target)
```

#### 参数

**source**
- 类型：String
- 描述：要比较的源字符串

**target**
- 类型：String
- 描述：要比较的目标字符串

#### 返回值

- 类型：Integer
- 描述：比较结果。如果source < target返回负数，如果source = target返回0，如果source > target返回正数

#### 示例

```apex
Collator myCollator = Collator.getInstance();
Integer result = myCollator.compare('à', 'a');
// 在法语环境中，result可能是负数，表示'à'排在'a'之前
```

### getInstance()

获取当前用户区域设置的Collator实例。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> getInstance方法是最常用的方法，它返回当前用户语言环境的Collator实例。
> 
> 这个实例会自动应用用户的语言环境设置，比如法语、德语、中文等。

#### 签名

```apex
public static System.Collator getInstance()
```

#### 返回值

- 类型：Collator Class
- 描述：当前用户区域设置的Collator实例

#### 示例

```apex
// 获取当前用户的Collator实例
Collator myCollator = Collator.getInstance();

// 使用Collator进行排序
List<String> names = new List<String> {'à', 'b', 'c', 'a'};
names.sort(myCollator);
// 结果会根据用户的语言环境进行排序
```

## 注意事项

- Collator主要用于国际化应用程序中的字符串排序
- 不同语言环境的排序规则可能不同
- 避免在需要确定性排序的场景中使用（如触发器）
- 建议在用户界面相关的排序功能中使用

## 相关链接

- [国际化文档](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_internationalization.htm)
- [用户区域设置文档](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_user_locale.htm)

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_class_System_Collator.htm*
