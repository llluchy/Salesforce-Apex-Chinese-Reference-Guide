# Set 类

表示具有无重复值的唯一元素集合。

## 命名空间

System

## 用法

Set 方法对集合进行操作，即使用 set 关键字初始化的无序元素集合。Set 元素可以是任何数据类型——原始类型、集合、sObject、用户定义类型和内置 Apex 类型。Set 方法都是实例方法，即它们都对 Set 的特定实例进行操作。以下是集合的实例方法。

**注意**
用户定义类型的集合元素的唯一性由 equals 和 hashCode 方法确定，这些方法在您的类中提供。所有其他非原始类型的唯一性通过比较对象的字段来确定。

如果集合包含 String 元素，则元素区分大小写。仅大小写不同的两个集合元素被认为是不同的。

有关集合的更多信息，请参阅集合。

## Set 构造函数

以下是 Set 的构造函数。

### Set<T>()
创建 Set 类的新实例。集合可以保存任何数据类型 T 的元素。

**签名**
```apex
public Set<T>()
```

**示例**
```apex
// Create a set of strings
Set<String> s1 = new Set<String>();
// Add two strings to it
s1.add('item1');
s1.add('item2');
```

### Set<T>(setToCopy)
通过复制指定集合的元素来创建 Set 类的新实例。T 是两个集合中元素的数据类型，可以是任何数据类型。

**签名**
```apex
public Set<T>(Set<T> setToCopy)
```

**参数**
- **setToCopy** - 类型：Set<T>
  - 用于初始化此集合的集合。

**示例**
```apex
Set<String> s1 = new Set<String>();
s1.add('item1');
s1.add('item2');
Set<String> s2 = new Set<String>(s1);
// The set elements in s2 are copied from s1
System.debug(s2);
```

### Set<T>(listToCopy)
通过复制列表元素来创建 Set 类的新实例。T 是集合和列表中元素的数据类型，可以是任何数据类型。

**签名**
```apex
public Set<T>(List<T> listToCopy)
```

**参数**
- **listToCopy** - 类型：Integer
  - 要将其元素复制到此集合中的列表。

**示例**
```apex
List<Integer> ls = new List<Integer>();
ls.add(1);
ls.add(2);
// Create a set based on a list
Set<Integer> s1 = new Set<Integer>(ls);
// Elements are copied from the list to this set
System.debug(s1);// DEBUG|{1, 2}
```

## Set 方法

以下是 Set 的方法。所有都是实例方法。

### add(setElement)
如果元素不存在，则将其添加到集合中。

**签名**
```apex
public Boolean add(Object setElement)
```

**参数**
- **setElement** - 类型：Object

**返回值**
- 类型：Boolean

**用法**
如果原始集合因调用而更改，则此方法返回 true。

**示例**
```apex
Set<String> myString = new Set<String>{'a', 'b', 'c'};
Boolean result = myString.add('d');
System.assertEquals(true, result);
```

### addAll(fromList)
如果指定列表中的元素不存在，则将它们全部添加到集合中。

**签名**
```apex
public Boolean addAll(List<Object> fromList)
```

**参数**
- **fromList** - 类型：List

**返回值**
- 类型：Boolean
  - 如果原始集合因调用而更改，则返回 true。

**用法**
此方法产生列表和集合的并集。列表必须与调用该方法的集合具有相同类型。

### addAll(fromSet)
如果指定集合中的元素不存在，则将它们全部添加到调用该方法的集合中。

**签名**
```apex
public Boolean addAll(Set<Object> fromSet)
```

**参数**
- **fromSet** - 类型：Set<Object>

**返回值**
- 类型：Boolean
  - 如果原始集合因调用而更改，则此方法返回 true。

**用法**
此方法产生两个集合的并集。指定的集合必须与调用该方法的原始集合具有相同类型。

**示例**
```apex
Set<String> myString = new Set<String>{'a', 'b'};
Set<String> sString = new Set<String>{'c'};
Boolean result1 = myString.addAll(sString);
System.assertEquals(true, result1);
```

### clear()
从集合中移除所有元素。

**签名**
```apex
public Void clear()
```

**返回值**
- 类型：Void

### clone()
制作集合的重复副本。

**签名**
```apex
public Set<Object> clone()
```

**返回值**
- 类型：Set（相同类型）

### contains(setElement)
如果集合包含指定元素，则返回 true。

**签名**
```apex
public Boolean contains(Object setElement)
```

**参数**
- **setElement** - 类型：Object

**返回值**
- 类型：Boolean

**示例**
```apex
Set<String> myString = new Set<String>{'a', 'b'};
Boolean result = myString.contains('z');
System.assertEquals(false, result);
```

### containsAll(listToCompare)
如果集合包含指定列表中的所有元素，则返回 true。列表必须与调用该方法的集合具有相同类型。

**签名**
```apex
public Boolean containsAll(List<Object> listToCompare)
```

**参数**
- **listToCompare** - 类型：List<Object>

**返回值**
- 类型：Boolean

### containsAll(setToCompare)
如果集合包含指定集合中的所有元素，则返回 true。指定的集合必须与调用该方法的原始集合具有相同类型。

**签名**
```apex
public Boolean containsAll(Set<Object> setToCompare)
```

**参数**
- **setToCompare** - 类型：Set<Object>

**返回值**
- 类型：Boolean

**示例**
```apex
Set<String> myString = new Set<String>{'a', 'b'};
Set<String> sString = new Set<String>{'c'};
Set<String> rString = new Set<String>{'a', 'b', 'c'};
Boolean result1, result2;
result1 = myString.addAll(sString);
system.assertEquals(true, result1);
result2 = myString.containsAll(rString);
System.assertEquals(true, result2);
```

### equals(set2)
将此集合与指定集合进行比较，如果两个集合相等则返回 true；否则返回 false。

**签名**
```apex
public Boolean equals(Set<Object> set2)
```

**参数**
- **set2** - 类型：Set<Object>
  - set2 参数是要与此集合进行比较的集合。

**返回值**
- 类型：Boolean

**用法**
如果两个集合的元素相等，则它们相等，无论顺序如何。== 运算符用于比较集合的元素。

== 运算符等效于调用 equals 方法，因此您可以调用 set1.equals(set2); 而不是 set1 == set2;。

### hashCode()
返回与此集合及其内容对应的哈希码。

**签名**
```apex
public Integer hashCode()
```

**返回值**
- 类型：Integer

### isEmpty()
如果集合有零个元素，则返回 true。

**签名**
```apex
public Boolean isEmpty()
```

**返回值**
- 类型：Boolean

**示例**
```apex
Set<Integer> mySet = new Set<Integer>();
Boolean result = mySet.isEmpty();
System.assertEquals(true, result);
```

### remove(setElement)
如果存在，则从集合中移除指定元素。

**签名**
```apex
public Boolean remove(Object setElement)
```

**参数**
- **setElement** - 类型：Object

**返回值**
- 类型：Boolean
  - 如果原始集合因调用而更改，则返回 true。

### removeAll(listOfElementsToRemove)
如果存在，则从集合中移除指定列表中的元素。

**签名**
```apex
public Boolean removeAll(List<Object> listOfElementsToRemove)
```

**参数**
- **listOfElementsToRemove** - 类型：List<Object>

**返回值**
- 类型：Boolean
  - 如果原始集合因调用而更改，则返回 true。

**用法**
此方法产生两个集合的相对补集。列表必须与调用该方法的集合具有相同类型。

**示例**
```apex
Set<integer> mySet = new Set<integer>{1, 2, 3};
List<integer> myList = new List<integer>{1, 3};
Boolean result = mySet.removeAll(myList);
System.assertEquals(true, result);
Integer result2 = mySet.size();
System.assertEquals(1, result2);
```

### removeAll(setOfElementsToRemove)
如果存在，则从原始集合中移除指定集合中的元素。

**签名**
```apex
public Boolean removeAll(Set<Object> setOfElementsToRemove)
```

**参数**
- **setOfElementsToRemove** - 类型：Set<Object>

**返回值**
- 类型：Boolean
  - 如果原始集合因调用而更改，则此方法返回 true。

**用法**
此方法产生两个集合的相对补集。指定的集合必须与调用该方法的原始集合具有相同类型。

### retainAll(listOfElementsToRetain)
仅保留此集合中包含在指定列表中的元素。

**签名**
```apex
public Boolean retainAll(List<Object> listOfElementsToRetain)
```

**参数**
- **listOfElementsToRetain** - 类型：List<Object>

**返回值**
- 类型：Boolean
  - 如果原始集合因调用而更改，则此方法返回 true。

**用法**
此方法产生列表和集合的交集。列表必须与调用该方法的集合具有相同类型。

**示例**
```apex
Set<integer> mySet = new Set<integer>{1, 2, 3};
List<integer> myList = new List<integer>{1, 3};
Boolean result = mySet.retainAll(myList);
System.assertEquals(true, result);
```

### retainAll(setOfElementsToRetain)
仅保留原始集合中包含在指定集合中的元素。

**签名**
```apex
public Boolean retainAll(Set setOfElementsToRetain)
```

**参数**
- **setOfElementsToRetain** - 类型：Set

**返回值**
- 类型：Boolean
  - 如果原始集合因调用而更改，则返回 true。

**用法**
此方法产生两个集合的交集。指定的集合必须与调用该方法的原始集合具有相同类型。

**示例**
```apex
Set<Integer> mySet = new Set<Integer>{1, 2, 3};
Set<Integer> retainSet = new Set<Integer>{1, 3};
Boolean result = mySet.retainAll(retainSet);
Assert.isTrue(result, 'Expected to have changed mySet');
Integer retainedSetSize = mySet.size();
Assert.areEqual(2, retainedSetSize);
```

### size()
返回集合中的元素数量（其基数）。

**签名**
```apex
public Integer size()
```

**返回值**
- 类型：Integer

### toString()
返回集合的字符串表示。

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

