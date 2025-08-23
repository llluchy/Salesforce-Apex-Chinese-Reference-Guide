# Comparable 接口

为包含非原始类型的List添加排序支持，即用户定义类型的List。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Comparable接口是Salesforce中用于自定义对象排序的重要接口。
> 
> 当你有一个自定义类的List时，如果想要使用sort()方法排序，就需要实现这个接口。

## 命名空间

System

## 用法

要为您的Apex类添加List排序支持，您必须在类中实现Comparable接口及其compareTo方法。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> 实现Comparable接口需要两个步骤：
> 1. 在类声明中使用implements关键字
> 2. 实现compareTo方法

要实现Comparable接口，您必须首先使用implements关键字声明一个类，如下所示：

```apex
public class Employee implements Comparable {
    // 类成员和方法
}
```

接下来，您的类必须为以下方法提供实现：

```apex
public Integer compareTo(Object compareTo) {
    // 您的代码在这里
}
```

实现的方法必须声明为global或public。

## 示例

以下示例实现了Comparable接口。此示例中的compareTo方法比较此类实例的员工与参数中传递的员工。该方法基于员工ID的比较返回一个Integer值。

```apex
public class Employee implements Comparable {
    public Long id;
    public String name;
    public String phone;
    
    // 构造函数
    public Employee(Long i, String n, String p) {
        id = i;
        name = n;
        phone = p;
    }
    
    // 实现compareTo()方法
    public Integer compareTo(Object compareTo) {
        Employee compareToEmp = (Employee)compareTo;
        if (id == compareToEmp.id) return 0;
        if (id > compareToEmp.id) return 1;
        return -1;        
    }
}
```

此示例测试Employee对象列表的排序顺序：

```apex
@isTest
private class EmployeeSortingTest {
    @isTest
    static void test1() {
        List<Employee> empList = new List<Employee>();
        empList.add(new Employee(101,'Joe Smith', '4155551212'));
        empList.add(new Employee(101,'J. Smith', '4155551212'));
        empList.add(new Employee(25,'Caragh Smith', '4155551000'));
        empList.add(new Employee(105,'Mario Ruiz', '4155551099'));
        
        // 使用自定义compareTo()方法排序
        empList.sort();
        
        // 将列表内容写入调试日志
        System.debug(empList);
        
        // 验证列表排序顺序
        Assert.areEqual('Caragh Smith', empList[0].Name);
        Assert.areEqual('Joe Smith', empList[1].Name); 
        Assert.areEqual('J. Smith', empList[2].Name);
        Assert.areEqual('Mario Ruiz', empList[3].Name);
    }
}
```

## Comparable 方法

以下是Comparable的方法。

### compareTo(objectToCompareTo)

返回比较结果的Integer值。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> compareTo方法是Comparable接口的核心方法，它定义了如何比较两个对象。
> 
> 返回值决定了排序的顺序：负数表示当前对象排在前面，正数表示排在后面，0表示相等。

#### 签名

```apex
public Integer compareTo(Object objectToCompareTo)
```

#### 参数

**objectToCompareTo**
- 类型：Object
- 描述：要与此实例比较的对象

#### 返回值

- 类型：Integer
- 描述：比较结果

#### 用法

此方法的实现返回以下值：
- 0：如果此实例和objectToCompareTo相等
- > 0：如果此实例大于objectToCompareTo
- < 0：如果此实例小于objectToCompareTo

如果此对象实例和objectToCompareTo不兼容，则抛出System.TypeException。

#### 示例

```apex
// 按姓名排序的compareTo实现
public Integer compareTo(Object compareTo) {
    Employee compareToEmp = (Employee)compareTo;
    if (this.name == compareToEmp.name) return 0;
    if (this.name > compareToEmp.name) return 1;
    return -1;
}

// 按多个字段排序的compareTo实现
public Integer compareTo(Object compareTo) {
    Employee compareToEmp = (Employee)compareTo;
    
    // 首先按部门排序
    if (this.department != compareToEmp.department) {
        return this.department.compareTo(compareToEmp.department);
    }
    
    // 如果部门相同，按姓名排序
    return this.name.compareTo(compareToEmp.name);
}
```

## 注意事项

- 您的实现必须在compareTo()方法中明确处理null输入，以避免空指针异常
- 实现的方法必须声明为global或public
- 如果对象不兼容，会抛出TypeException
- 建议在compareTo方法中实现一致的排序逻辑

## 相关链接

- [List 类](../List%20Class.md)
- [排序和比较文档](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_collections_lists.htm)

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_comparable.htm*
