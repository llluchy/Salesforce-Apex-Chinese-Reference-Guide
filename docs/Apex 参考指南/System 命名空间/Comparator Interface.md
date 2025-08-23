# Comparator 接口

使用Comparator接口的compare()方法实现不同的排序顺序，并将Comparator作为参数传递给List.sort()。您的实现必须在compare()方法中明确处理null输入，以避免空指针异常。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Comparator接口是Salesforce中用于实现多种排序策略的重要接口。
> 
> 与Comparable接口不同，Comparator允许你为同一个类定义多种不同的排序方式，而不需要修改原始类。

## 命名空间

System

## 用法

使用Comparator接口来实施不同类型的排序。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Comparator接口的优势在于：
> 1. 可以为同一个类定义多种排序方式
> 2. 不需要修改原始类
> 3. 可以动态选择排序策略

## 示例

此示例实现了两种不同的员工排序方式。

```apex
public class Employee {
    private Long id;
    private String name;
    private Integer yearJoined;
    
    // 构造函数
    public Employee(Long i, String n, Integer y) {
        id = i;
        name = n;
        yearJoined = y;
    }
    
    public String getName() { return name; }
    public Integer getYear() { return yearJoined; }
}

// 按姓名比较员工的类
public class NameCompare implements Comparator<Employee> {
    public Integer compare(Employee e1, Employee e2) {
        if(e1?.getName() == null && e2?.getName() == null) {
            return 0;
        } else if(e1?.getName() == null) { 
            return -1; 
        } else if(e2?.getName() == null) {
            return 1;
        }        
        return e1.getName().compareTo(e2.getName());
    }
}

// 按入职年份比较员工的类
public class YearCompare implements Comparator<Employee> {
    public Integer compare(Employee e1, Employee e2) {
        // 防止null操作数用于'<'或'>'运算符，因为它们总是返回false并产生不一致的排序
        Integer result;
        if(e1?.getYear() == null && e2?.getYear() == null) {
            result = 0;
        } else if(e1?.getYear() == null) { 
              result = -1; 
        } else if(e2?.getYear() == null) {
              result = 1;
        } else if (e1.getYear() < e2.getYear()) {
              result = -1;
        } else if (e1.getYear() > e2.getYear()) {
              result = 1;
        } else {
              result = 0;  
        } 
        return result;
    }
}
```

以下示例测试实现：

```apex
@isTest
private class EmployeeSortingTest {
    @isTest
    static void sortWithComparators() {        
        List<Employee> empList = new List<Employee>();
        empList.add(new Employee(101,'Joe Smith', 2020));
        empList.add(new Employee(102,'J. Smith', 2020));
        empList.add(new Employee(25,'Caragh Smith', 2021));
        empList.add(new Employee(105,'Mario Ruiz', 2019));
        
        // 按姓名排序
        NameCompare nameCompare = new NameCompare();
        empList.sort(nameCompare);
        // 预期顺序：Caragh Smith, J. Smith, Joe Smith, Mario Ruiz
        Assert.areEqual('Caragh Smith', empList.get(0).getName());
        
        // 按入职年份排序
        YearCompare yearCompare = new YearCompare();
        empList.sort(yearCompare);
        // 预期顺序：Mario Ruiz, J. Smith, Joe Smith, Caragh Smith
        Assert.areEqual('Mario Ruiz', empList.get(0).getName());
    }
}
```

## Comparator 方法

以下是Comparator的方法。

### compare(var1, var2)

比较两个参数，并根据第一个参数是否小于、等于或大于第二个参数返回负整数、零或正整数。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> compare方法是Comparator接口的核心方法，它定义了如何比较两个对象。
> 
> 与Comparable的compareTo方法类似，但Comparator的compare方法接收两个参数进行比较。

#### 签名

```apex
public Integer compare(T var1, T var2)
```

#### 参数

**var1**
- 类型：T
- 描述：T - 由Comparator的参数化类型确定的类型。例如，如果类实现Comparator<Account>，则var1和var2的类型为Account。

**var2**
- 类型：T
- 描述：T - 由Comparator的参数化类型确定的类型。例如，如果类实现Comparator<Account>，则var1和var2的类型为Account。

#### 返回值

- 类型：Integer
- 描述：比较结果。如果var1 < var2返回负数，如果var1 = var2返回0，如果var1 > var2返回正数

#### 示例

```apex
// 按姓名排序的Comparator实现
public class NameComparator implements Comparator<Employee> {
    public Integer compare(Employee e1, Employee e2) {
        if(e1?.getName() == null && e2?.getName() == null) {
            return 0;
        } else if(e1?.getName() == null) { 
            return -1; 
        } else if(e2?.getName() == null) {
            return 1;
        }        
        return e1.getName().compareTo(e2.getName());
    }
}

// 按薪资排序的Comparator实现
public class SalaryComparator implements Comparator<Employee> {
    public Integer compare(Employee e1, Employee e2) {
        if(e1?.getSalary() == null && e2?.getSalary() == null) {
            return 0;
        } else if(e1?.getSalary() == null) { 
            return -1; 
        } else if(e2?.getSalary() == null) {
            return 1;
        }        
        return e1.getSalary().compareTo(e2.getSalary());
    }
}
```

## 注意事项

- 您的实现必须在compare()方法中明确处理null输入，以避免空指针异常
- 防止null操作数用于'<'或'>'运算符，因为它们总是返回false并产生不一致的排序
- Comparator接口允许为同一个类定义多种排序策略
- 建议在compare方法中实现一致的排序逻辑

## 相关链接

- [Comparable 接口](./Comparable%20Interface.md)
- [List 类](../List%20Class.md)
- [排序和比较文档](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_collections_lists.htm)

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_interface_System_Comparator.htm*
