# Map 类

包含 Map 集合类型的方法。

## 命名空间

System

## 用法

Map 方法都是实例方法，即它们对映射的特定实例进行操作。

以下是映射的实例方法。

**注意**
Map 键和值可以是任何数据类型——原始类型、集合、sObject、用户定义类型和内置 Apex 类型。

用户定义类型的映射键的唯一性由 equals 和 hashCode 方法确定，这些方法在您的类中提供。所有其他非原始类型（如 sObject 键）的键的唯一性通过比较对象的字段值来确定。当您使用 sObject 作为映射键时要小心，因为当 sObject 更改时，它不再映射到相同的值。有关信息和示例，请参阅 https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_map_sobject_considerations.htm

String 类型的映射键区分大小写。仅大小写不同的两个键被认为是唯一的，并且具有相应的不同映射条目。随后，Map 方法（包括 put、get、containsKey 和 remove）将这些键视为不同的键。

使用 keySet() 方法时，返回的 keySet 由映射支持，并反映对映射所做的任何更改，反之亦然。

有关映射的更多信息，请参阅映射。

## Map 构造函数

以下是 Map 的构造函数。

### Map<T1,T2>()
创建 Map 类的新实例。T1 是键的数据类型，T2 是值的数据类型。

**签名**
```apex
public Map<T1,T2>()
```

**示例**
```apex
Map<Integer, String> m1 = new Map<Integer, String>();
m1.put(1, 'First item');
m1.put(2, 'Second item');
```

### Map<T1,T2>(mapToCopy)
创建 Map 类的新实例，并通过复制指定映射的条目来初始化它。T1 是键的数据类型，T2 是值的数据类型。

**签名**
```apex
public Map<T1,T2>(Map<T1,T2> mapToCopy)
```

**参数**
- **mapToCopy** - 类型：Map<T1, T2>
  - 用于初始化此映射的映射。T1 是键的数据类型，T2 是值的数据类型。所有映射键和值都复制到此映射。

**示例**
```apex
Map<Integer, String> m1 = new Map<Integer, String>();
m1.put(1, 'First item');
m1.put(2, 'Second item');
Map<Integer, String> m2 = new Map<Integer, String>(m1);
// The map elements of m2 are copied from m1
System.debug(m2);
```

### Map<ID,sObject>(recordList)
创建 Map 类的新实例，并用传入的 sObject 记录列表填充它。键用 sObject ID 填充，值是 sObject。

**签名**
```apex
public Map<ID,sObject>(List<sObject> recordList)
```

**参数**
- **recordList** - 类型：List<sObject>
  - 用于填充映射的 sObject 列表。

**示例**
```apex
List<Account> ls = [select Id,Name from Account];
Map<Id, Account> m = new Map<Id, Account>(ls);
```

## Map 方法

以下是 Map 的方法。所有都是实例方法。

### clear()
从映射中移除所有键值映射。

**签名**
```apex
public Void clear()
```

**返回值**
- 类型：Void

### clone()
制作映射的重复副本。

**签名**
```apex
public Map<Object, Object> clone()
```

**返回值**
- 类型：Map（相同类型）

**用法**
如果这是具有 sObject 记录值的映射，重复映射将只是映射的浅拷贝。也就是说，重复项将对每个 sObject 记录有引用，但记录本身不会被重复。

**示例**
```apex
Account a = new Account(Name='Acme', BillingCity='New York');
Map<Integer, Account> map1 = new Map<Integer, Account> {};
map1.put(1, a);
Map<Integer, Account> map2 = map1.clone();
map1.get(1).BillingCity = 'San Francisco';
System.assertEquals('San Francisco', map1.get(1).BillingCity);
System.assertEquals('San Francisco', map2.get(1).BillingCity);
```

要同时复制 sObject 记录，必须使用 deepClone 方法。

### containsKey(key)
如果映射包含指定键的映射，则返回 true。

**签名**
```apex
public Boolean containsKey(Object key)
```

**参数**
- **key** - 类型：Object

**返回值**
- 类型：Boolean

**用法**
如果键是字符串，键值区分大小写。

**示例**
```apex
Map<String, String> colorCodes = new Map<String, String>();
colorCodes.put('Red', 'FF0000');
colorCodes.put('Blue', '0000A0');
Boolean contains = colorCodes.containsKey('Blue');
System.assertEquals(true, contains);
```

### deepClone()
制作映射的重复副本，包括 sObject 记录（如果这是具有 sObject 记录值的映射）。

**签名**
```apex
public Map<Object, Object> deepClone()
```

**返回值**
- 类型：Map（相同类型）

**用法**
要制作映射的浅拷贝而不复制它包含的 sObject 记录，请使用 clone() 方法。

**示例**
```apex
Account a = new Account(Name='Acme', BillingCity='New York');
Map<Integer, Account> map1 = new Map<Integer, Account> {};
map1.put(1, a);
Map<Integer, Account> map2 = map1.deepClone();
// Update the first entry of map1
map1.get(1).BillingCity = 'San Francisco';
// Verify that the BillingCity is updated in map1 but not in map2
System.assertEquals('San Francisco', map1.get(1).BillingCity);
System.assertEquals('New York', map2.get(1).BillingCity);
```

### equals(map2)
将此映射与指定映射进行比较，如果两个映射相等则返回 true；否则返回 false。

**签名**
```apex
public Boolean equals(Map map2)
```

**参数**
- **map2** - 类型：Map
  - map2 参数是要与此映射进行比较的映射。

**返回值**
- 类型：Boolean

**用法**
如果两个映射的键/值对相同，则它们相等，无论这些对的顺序如何。== 运算符用于比较映射键和值。

== 运算符等效于调用 equals 方法，因此您可以调用 map1.equals(map2); 而不是 map1 == map2;。

### get(key)
返回指定键映射到的值，如果映射不包含此键的值，则返回 null。

**签名**
```apex
public Object get(Object key)
```

**参数**
- **key** - 类型：Object

**返回值**
- 类型：Object

**用法**
如果键是字符串，键值区分大小写。

**示例**
```apex
Map<String, String> colorCodes = new Map<String, String>();
colorCodes.put('Red', 'FF0000');
colorCodes.put('Blue', '0000A0');
String code = colorCodes.get('Blue');
System.assertEquals('0000A0', code);
// The following is not a color in the map 
String code2 = colorCodes.get('Magenta');
System.assertEquals(null, code2);
```

### getSObjectType()
返回构成映射值的 sObject 类型的令牌。

**签名**
```apex
public Schema.SObjectType getSObjectType()
```

**返回值**
- 类型：Schema.SObjectType

**用法**
将此方法与描述信息一起使用，以确定映射是否包含特定类型的 sObject。

请注意，此方法只能用于具有 sObject 值的映射。

有关更多信息，请参阅了解 Apex 描述信息。

**示例**
```apex
// Create a generic sObject variable.
SObject sObj = Database.query('SELECT Id FROM Account LIMIT 1');
// Verify if that sObject variable is an Account token.
System.assertEquals(Account.sObjectType, sObj.getSObjectType());
// Create a map of generic sObjects
Map<Integer, Account> m = new Map<Integer, Account>();
// Verify if the map contains Account tokens.
System.assertEquals(Account.sObjectType, m.getSObjectType());
```

### hashCode()
返回与此映射对应的哈希码。

**签名**
```apex
public Integer hashCode()
```

**返回值**
- 类型：Integer

### isEmpty()
如果映射有零个键值对，则返回 true。

**签名**
```apex
public Boolean isEmpty()
```

**返回值**
- 类型：Boolean

**示例**
```apex
Map<String, String> colorCodes = new Map<String, String>();
Boolean empty = colorCodes.isEmpty();
System.assertEquals(true, empty);
```

### keySet()
返回包含映射中所有键的集合。

**签名**
```apex
public Set<Object> keySet()
```

**返回值**
- 类型：Set（键类型）
  - 返回的 keySet 由映射支持，因此 keySet 反映对映射所做的任何更改，反之亦然。

**示例**
```apex
Map<String, String> colorCodes = new Map<String, String>();
colorCodes.put('Red', 'FF0000');
colorCodes.put('Blue', '0000A0');
Set<String> colorSet = new Set<String>();
colorSet = colorCodes.keySet();
```

### put(key, value)
将指定值与映射中的指定键关联。

**签名**
```apex
public Object put(Object key, Object value)
```

**参数**
- **key** - 类型：Object
- **value** - 类型：Object

**返回值**
- 类型：Object

**用法**
如果映射之前包含此键的映射，则方法返回旧值，然后替换它。

如果键是字符串，键值区分大小写。

**示例**
```apex
Map<String, String> colorCodes = new Map<String, String>();
colorCodes.put('Red', 'ff0000');
colorCodes.put('Red', '#FF0000');
// Red is now #FF0000
```

### putAll(fromMap)
将指定映射中的所有映射复制到原始映射。

**签名**
```apex
public Void putAll(Map fromMap)
```

**参数**
- **fromMap** - 类型：Map

**返回值**
- 类型：Void

**用法**
fromMap 中的新映射与原始映射中存在的任何映射合并。如果任何键匹配，原始映射值将被新映射中的相应值替换。

**示例**
```apex
Map<String, String> map1 = new Map<String, String>();
map1.put('Red','FF0000');
Map<String, String> map2 = new Map<String, String>();
map2.put('Blue','0000FF');
// Add map1 entries to map2
map2.putAll(map1);
System.assertEquals(2, map2.size());
```

### putAll(sobjectArray)
将 sObject 记录列表添加到声明为 Map<ID, sObject> 或 Map<String, sObject> 的映射。

**签名**
```apex
public Void putAll(sObject[] sobjectArray)
```

**参数**
- **sobjectArray** - 类型：sObject[]

**返回值**
- 类型：Void

**用法**
此方法类似于使用相同输入调用 Map 构造函数。

**示例**
```apex
List<Account> accts = new List<Account>();
accts.add(new Account(Name='Account1'));
accts.add(new Account(Name='Account2'));
// Insert accounts so their IDs are populated.
insert accts;
Map<Id, Account> m = new Map<Id, Account>();
// Add all the records to the map.
m.putAll(accts);
System.assertEquals(2, m.size());
```

### remove(key)
从映射中移除指定键的映射（如果存在），并返回相应的值。

**签名**
```apex
public Object remove(Key key)
```

**参数**
- **key** - 类型：Key

**返回值**
- 类型：Object

**用法**
如果键是字符串，键值区分大小写。

**示例**
```apex
Map<String, String> colorCodes = new Map<String, String>();
colorCodes.put('Red', 'FF0000');
colorCodes.put('Blue', '0000A0');
String myColor = colorCodes.remove('Blue');
String code2 = colorCodes.get('Blue');
System.assertEquals(null, code2);
```

### size()
返回映射中键值对的数量。

**签名**
```apex
public Integer size()
```

**返回值**
- 类型：Integer

**示例**
```apex
Map<String, String> colorCodes = new Map<String, String>();
colorCodes.put('Red', 'FF0000');
colorCodes.put('Blue', '0000A0');
Integer mSize = colorCodes.size();
system.assertEquals(2, mSize);
```

### toString()
返回映射的字符串表示。

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

### values()
返回包含映射中所有值的列表。

**签名**
```apex
public List<Object> values()
```

**返回值**
- 类型：List<Object>

**用法**
映射元素的顺序是确定性的。您可以依赖顺序在相同代码的每次后续执行中都是相同的。例如，假设 values() 方法返回一个包含索引 0 处的 value1 和索引 1 处的 value2 的列表。相同代码的后续运行导致这些值以相同顺序返回。

**示例**
```apex
Map<String, String> colorCodes = new Map<String, String>();
colorCodes.put('Red', 'FF0000');
colorCodes.put('Blue', '0000A0');
List<String> colors = new List<String>();
colors = colorCodes.values();
```

