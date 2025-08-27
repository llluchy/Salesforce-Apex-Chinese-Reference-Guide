# List 类

包含 List 集合类型的方法。

## 命名空间

System

## 用法

列表方法都是实例方法，即它们对列表的特定实例进行操作。例如，以下代码从 myList 中移除所有元素：

```apex
myList.clear();
```

即使 clear 方法不包含任何参数，调用它的列表也是其隐式参数。

**注意**
当为列表元素使用自定义类型时，在您的类中提供 equals 方法。Apex 使用此方法来确定对象的相等性和唯一性。有关提供 equals 方法的更多信息，请参阅在映射键和集合中使用自定义类型。

如果列表包含 String 元素，则元素区分大小写。仅大小写不同的两个列表元素被认为是不同的。

有关列表的更多信息，请参阅列表。

## List 构造函数

以下是 List 的构造函数。

### List<T>()
创建 List 类的新实例。列表可以保存任何数据类型 T 的元素。

**签名**
```apex
public List<T>()
```

**示例**
```apex
// Create a list
List<Integer> ls1 = new List<Integer>();
// Add two integers to the list
ls1.add(1);
ls1.add(2);
```

### List<T>(listToCopy)
通过复制指定列表的元素来创建 List 类的新实例。T 是两个列表中元素的数据类型，可以是任何数据类型。

**签名**
```apex
public List<T>(List<T> listToCopy)
```

**参数**
- **listToCopy** - 类型：List<T>
  - 包含用于初始化此列表的元素的列表。T 是列表元素的数据类型。

**示例**
```apex
List<Integer> ls1 = new List<Integer>();
ls1.add(1);
ls1.add(2);
// Create a list based on an existing one
List<Integer> ls2 = new List<Integer>(ls1);
// ls2 elements are copied from ls1
System.debug(ls2);// DEBUG|(1, 2)
```

### List<T>(setToCopy)
通过复制指定集合的元素来创建 List 类的新实例。T 是集合和列表中元素的数据类型，可以是任何数据类型。

**签名**
```apex
public List<T>(Set<T> setToCopy)
```

**参数**
- **setToCopy** - 类型：Set<T>
  - 包含用于初始化此列表的元素的集合。T 是集合元素的数据类型。

**示例**
```apex
Set<Integer> s1 = new Set<Integer>();
s1.add(1);
s1.add(2);
// Create a list based on a set
List<Integer> ls = new List<Integer>(s1);
// ls elements are copied from s1
Assert.isTrue(ls.contains(2));
Assert.isTrue(ls.contains(1));
```

## List 方法

以下是 List 的方法。所有都是实例方法。

### add(listElement)
将元素添加到列表的末尾。

**签名**
```apex
public Void add(Object listElement)
```

**参数**
- **listElement** - 类型：Object

**返回值**
- 类型：Void

**示例**
```apex
List<Integer> myList = new List<Integer>();
myList.add(47);
Integer myNumber = myList.get(0);
system.assertEquals(47, myNumber);
```

### add(index, listElement)
在指定的索引位置将元素插入列表，并将所有后续元素向右移动一个索引位置。

**签名**
```apex
public Void add(Integer index, Object listElement)
```

**参数**
- **index** - 类型：Integer
- **listElement** - 类型：Object

**返回值**
- 类型：Void

**示例**
在此示例中，创建了一个包含六个元素的列表。整数被添加到第一个和第二个索引位置，后续元素向右移动。调用这两个方法后，列表总共有八个元素。

```apex
List<Integer> myList = new Integer[6];
myList.add(0, 47);
myList.add(1, 52);
system.debug(myList); // DEBUG|(47, 52, null, null, null, null, null, null)
system.assertEquals(52, myList.get(1));
```

### addAll(fromList)
将指定列表中的所有元素添加到调用该方法的列表中。两个列表必须是相同类型。

**签名**
```apex
public Void addAll(List fromList)
```

**参数**
- **fromList** - 类型：List

**返回值**
- 类型：Void

### addAll(fromSet)
将指定集合中的所有元素添加到调用该方法的列表中。集合和列表必须是相同类型。

**签名**
```apex
public Void addAll(Set fromSet)
```

**参数**
- **fromSet** - 类型：Set

**返回值**
- 类型：Void

### clear()
从列表中移除所有元素，从而将列表的长度设置为零。

**签名**
```apex
public Void clear()
```

**返回值**
- 类型：Void

### clone()
制作列表的重复副本。

**签名**
```apex
public List<Object> clone()
```

**返回值**
- 类型：List<Object>

**用法**
克隆的列表与当前列表具有相同的类型。

请注意，如果这是 sObject 记录列表，重复列表将只是列表的浅拷贝。也就是说，重复项将对每个对象有引用，但 sObject 记录本身不会被重复。

**示例**
```apex
Account a = new Account(Name='Acme', BillingCity='New York');
Account b = new Account();
Account[] q1 = new Account[]{a,b};
Account[] q2 = q1.clone();
q1[0].BillingCity = 'San Francisco';
System.assertEquals('San Francisco', q1[0].BillingCity);
System.assertEquals('San Francisco', q2[0].BillingCity);
```

要同时复制 sObject 记录，必须使用 deepClone 方法。

### contains(listElement)
如果列表包含指定元素，则返回 true。

**签名**
```apex
public Boolean contains(Object listElement)
```

**参数**
- **listElement** - 类型：Object

**返回值**
- 类型：Boolean

**示例**
```apex
List<String> myStrings = new List<String>{'a', 'b'};
Boolean result = myStrings.contains('z');
System.assertEquals(false, result);
```

### deepClone(preserveId, preserveReadonlyTimestamps, preserveAutonumber)
制作 sObject 记录列表的重复副本，包括 sObject 记录本身。

**签名**
```apex
public List<Object> deepClone(Boolean preserveId, Boolean preserveReadonlyTimestamps, Boolean preserveAutonumber)
```

**参数**
- **preserveId** - 类型：Boolean
  - 可选的 preserveId 参数确定原始对象的 ID 在重复项中是保留还是清除。如果设置为 true，ID 将复制到克隆对象。默认为 false，即 ID 被清除。
- **preserveReadonlyTimestamps** - 类型：Boolean
  - 可选的 preserveReadonlyTimestamps 参数确定只读时间戳和用户 ID 字段在重复项中是保留还是清除。如果设置为 true，只读字段 CreatedById、CreatedDate、LastModifiedById 和 LastModifiedDate 将复制到克隆对象。默认为 false，即值被清除。
- **preserveAutonumber** - 类型：Boolean
  - 可选的 preserveAutonumber 参数确定原始对象的自动编号字段在重复项中是保留还是清除。如果设置为 true，自动编号字段将复制到克隆对象。默认为 false，即自动编号字段被清除。

**返回值**
- 类型：List<Object>

**用法**
返回的列表与当前列表具有相同的类型。

**注意**
deepClone 仅适用于 sObject 列表，不适用于原始类型列表。

对于使用 Salesforce API 版本 22.0 或更早版本保存的 Apex，preserve_id 参数的默认值为 true，即 ID 被保留。

要制作列表的浅拷贝而不复制它包含的 sObject 记录，请使用 clone 方法。

**示例**
此示例对包含两个账户的列表执行深度克隆。

```apex
Account a = new Account(Name='Acme', BillingCity='New York');
Account b = new Account(Name='Salesforce');
Account[] q1 = new Account[]{a,b};
Account[] q2 = q1.deepClone();
q1[0].BillingCity = 'San Francisco';
System.assertEquals('San Francisco', q1[0].BillingCity);
System.assertEquals('New York', q2[0].BillingCity);
```

此示例基于前面的示例，显示如何克隆保留只读时间戳和用户 ID 字段的列表。

```apex
insert q1;
List<Account> accts = [SELECT CreatedById, CreatedDate, LastModifiedById, 
                       LastModifiedDate, BillingCity 
                       FROM Account 
                       WHERE Name='Acme' OR Name='Salesforce'];
// Clone list while preserving timestamp and user ID fields.
Account[] q3 = accts.deepClone(false,true,false);
// Verify timestamp fields are preserved for the first list element. 
System.assertEquals(accts[0].CreatedById, q3[0].CreatedById);
System.assertEquals(accts[0].CreatedDate, q3[0].CreatedDate);
System.assertEquals(accts[0].LastModifiedById, q3[0].LastModifiedById);
System.assertEquals(accts[0].LastModifiedDate, q3[0].LastModifiedDate);
```

### equals(list2)
将此列表与指定列表进行比较，如果两个列表相等则返回 true；否则返回 false。

**签名**
```apex
public Boolean equals(List list2)
```

**参数**
- **list2** - 类型：List
  - 要与此列表进行比较的列表。

**返回值**
- 类型：Boolean

**用法**
如果两个列表的元素相等且顺序相同，则它们相等。== 运算符用于比较列表的元素。

== 运算符等效于调用 equals 方法，因此您可以调用 list1.equals(list2); 而不是 list1 == list2;。

### get(index)
返回存储在指定索引处的列表元素。

**签名**
```apex
public Object get(Integer index)
```

**参数**
- **index** - 类型：Integer

**返回值**
- 类型：Object

**用法**
要引用原始类型或 sObject 的一维列表的元素，您也可以在列表名称后跟方括号中元素的索引位置，如示例所示。

**示例**
```apex
List<Integer> myList = new List<Integer>();
myList.add(47);
Integer myNumber = myList.get(0);
system.assertEquals(47, myNumber);

List<String> colors = new String[3];
colors[0] = 'Red';
colors[1] = 'Blue';
colors[2] = 'Green';
```

### getSObjectType()
返回构成 sObject 列表的 sObject 类型的令牌。

**签名**
```apex
public Schema.SObjectType getSObjectType()
```

**返回值**
- 类型：Schema.SObjectType

**用法**
将此方法与描述信息一起使用，以确定列表是否包含特定类型的 sObject。

请注意，此方法只能用于由 sObject 组成的列表。

有关更多信息，请参阅了解 Apex 描述信息。

**示例**
```apex
// Create a generic sObject variable.
SObject sObj = Database.query('SELECT Id FROM Account LIMIT 1');
// Verify if that sObject variable is an Account token.
System.assertEquals(Account.sObjectType, sObj.getSObjectType());
// Create a list of generic sObjects.
List<sObject> q = new Account[]{};
// Verify if the list of sObjects contains Account tokens.
System.assertEquals(Account.sObjectType, q.getSObjectType());
```

### hashCode()
返回与此列表及其内容对应的哈希码。

**签名**
```apex
public Integer hashCode()
```

**返回值**
- 类型：Integer

### indexOf(listElement)
返回此列表中指定元素第一次出现的索引。如果此列表不包含该元素，则返回 -1。

**签名**
```apex
public Integer indexOf(Object listElement)
```

**参数**
- **listElement** - 类型：Object

**返回值**
- 类型：Integer

**示例**
```apex
List<String> myStrings = new List<String>{'a', 'b', 'a'};
Integer result = myStrings.indexOf('a');
System.assertEquals(0, result);
```

### isEmpty()
如果列表有零个元素，则返回 true。

**签名**
```apex
public Boolean isEmpty()
```

**返回值**
- 类型：Boolean

### iterator()
返回此列表的迭代器实例。

**签名**
```apex
public Iterator iterator()
```

**返回值**
- 类型：Iterator

**用法**
从返回的迭代器中，您可以使用可迭代方法 hasNext 和 next 来遍历列表。

**注意**
您不必实现可迭代接口即可对列表使用可迭代方法。

请参阅自定义迭代器。

**示例**
```apex
public class CustomIterator implements Iterator<Account>{ 

   private List<Account> accounts;
   private Integer currentIndex;

   public CustomIterator(List<Account> accounts){
       this.accounts = accounts;
       this.currentIndex = 0;
   }

   public Boolean hasNext(){ 
       return currentIndex < accounts.size();
   }    

   public Account next(){
       if(hasNext()) {
           return accounts[currentIndex++];
       } else {
           throw new NoSuchElementException('Iterator has no more elements.');
       }
   } 
}
```

### remove(index)
移除存储在指定索引处的列表元素，返回被移除的元素。

**签名**
```apex
public Object remove(Integer index)
```

**参数**
- **index** - 类型：Integer

**返回值**
- 类型：Object

**示例**
```apex
List<String> colors = new String[3];
colors[0] = 'Red';
colors[1] = 'Blue';
colors[2] = 'Green';
String s1 = colors.remove(2);
system.assertEquals('Green', s1);
```

### set(index, listElement)
为给定索引处的元素设置指定值。

**签名**
```apex
public Void set(Integer index, Object listElement)
```

**参数**
- **index** - 类型：Integer
  - 要设置的列表元素的索引。
- **listElement** - 类型：Object
  - 要设置的列表元素的值。

**返回值**
- 类型：Void

**用法**
要设置原始类型或 sObject 的一维列表的元素，您也可以在列表名称后跟方括号中元素的索引位置。

**示例**
```apex
List<Integer> myList = new Integer[6];
myList.set(0, 47);
myList.set(1, 52);
system.assertEquals(52, myList.get(1));
```

### size()
返回列表中的元素数量。

**签名**
```apex
public Integer size()
```

**返回值**
- 类型：Integer

**示例**
```apex
List<String> colors = new String[3];
colors[0] = 'Red';
colors[1] = 'Blue';
colors[2] = 'Green';

List<Integer> myList = new List<Integer>();
Integer size = myList.size();
system.assertEquals(0, size);

List<Integer> myList2 = new Integer[6];
Integer size2 = myList2.size();
system.assertEquals(6, size2);
```

### sort()
按升序对列表中的项目进行排序。

**签名**
```apex
public Void sort()
```

**返回值**
- 类型：Void

**用法**
使用此方法，您可以对原始类型、SelectOption 元素和 sObject（标准对象和自定义对象）进行排序。有关 sObject 使用的排序顺序的更多信息，请参阅对 sObject 列表进行排序。如果自定义类型（您的 Apex 类）实现 Comparable 接口，您可以对它们进行排序。或者，实现 Comparator 接口的类可以作为参数传递给 List.sort 方法。

当您在包含 15 字符和 18 字符 ID 的 List<Id> 上使用 sort() 方法时，同一记录的 ID 在 API 版本 35.0 及更高版本中会一起排序。

**示例**
在以下示例中，列表有三个元素。当列表排序时，第一个元素为 null，因为它没有分配值。第二个元素和第三个元素的值分别为 5 和 10。

```apex
List<Integer> q1 = new Integer[3];

// Assign values to the first two elements.
q1[0] = 10;
q1[1] = 5;

q1.sort();
// Verify sorted list. Elements are sorted in nulls-first order: null, 5, and 10
system.assertEquals(null, q1.get(0));
system.assertEquals(5, q1.get(1));
system.assertEquals(10, q1.get(2));
```

### toString()
返回列表的字符串表示。

**签名**
```apex
public String toString()
```

**返回值**
- 类型：String

**用法**
当用于循环引用时，输出会被截断以防止无限递归。当用于大型集合时，输出会被截断以避免超过总堆大小和最大 CPU 时间。

输出中最多包含每个集合的 10 个项目，后跟省略号（…）。

如果同一对象在集合中包含多次，它只在输出中显示一次；后续引用显示为（已输出）。

