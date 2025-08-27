# JSON 类

包含将 Apex 对象序列化为 JSON 格式以及反序列化使用此类中的 serialize 方法序列化的 JSON 内容的方法。

## 命名空间

System

## 用法

使用 System.JSON 类中的方法对 Apex 对象执行往返 JSON 序列化和反序列化。

## 另请参阅

Apex 开发者指南：往返序列化和反序列化

## JSON 方法

以下是 JSON 的方法。所有方法都是静态的。

### createGenerator(prettyPrint)
返回一个新的 JSON 生成器。

**签名**
```apex
public static System.JSONGenerator createGenerator(Boolean prettyPrint)
```

**参数**
- **prettyPrint** - 类型：Boolean
  - 确定 JSON 生成器是否以 pretty-print 格式创建 JSON 内容并缩进内容。设置为 true 以创建缩进内容。

**返回值**
- 类型：System.JSONGenerator

### createParser(jsonString)
返回一个新的 JSON 解析器。

**签名**
```apex
public static System.JSONParser createParser(String jsonString)
```

**参数**
- **jsonString** - 类型：String
  - 要解析的 JSON 内容。

**返回值**
- 类型：System.JSONParser

### deserialize(jsonString, apexType)
将指定的 JSON 字符串反序列化为指定类型的 Apex 对象。

**签名**
```apex
public static Object deserialize(String jsonString, System.Type apexType)
```

**参数**
- **jsonString** - 类型：String
  - 要反序列化的 JSON 内容。
- **apexType** - 类型：System.Type
  - 此方法在反序列化 JSON 内容后创建的对象的 Apex 类型。

**返回值**
- 类型：Object

**用法**
如果 JSON 内容包含 System.Type 参数中不存在的属性，例如缺失的字段或对象，在某些情况下反序列化会失败。当使用 Salesforce API 版本 34.0 或更早版本将 JSON 内容反序列化为自定义对象或 sObject 时，此方法在传递多余属性时会抛出运行时异常。当在任何 API 版本中将 JSON 内容反序列化为 Apex 类，或在 API 版本 35.0 或更高版本中反序列化为对象时，不会抛出异常。当不抛出异常时，此方法会忽略多余属性并解析 JSON 内容的其余部分。

**示例**
以下示例反序列化一个 Decimal 值。
```apex
Decimal n = (Decimal)JSON.deserialize('100.1', Decimal.class);
System.assertEquals(n, 100.1);
```

### deserializeStrict(jsonString, apexType)
将指定的 JSON 字符串反序列化为指定类型的 Apex 对象。

**签名**
```apex
public static Object deserializeStrict(String jsonString, System.Type apexType)
```

**参数**
- **jsonString** - 类型：String
  - 要反序列化的 JSON 内容。
- **apexType** - 类型：System.Type
  - 此方法在反序列化 JSON 内容后创建的对象的 Apex 类型。

**返回值**
- 类型：Object

**用法**
JSON 字符串中的所有属性都必须存在于指定类型中。如果 JSON 内容包含 System.Type 参数中不存在的属性，例如缺失的字段或对象，在某些情况下反序列化会失败。当将包含多余属性的 JSON 内容反序列化为 Apex 类时，此方法在所有 API 版本中都会抛出异常。但是，当您使用此方法将 JSON 内容反序列化为自定义对象或 sObject 时，不会抛出异常。

**示例**
以下示例将 JSON 字符串反序列化为由 Car 类表示的用户定义类型的对象，此示例也定义了 Car 类。
```apex
public class Car {
    public String make;
    public String year;
}
public void parse() {        
    Car c = (Car)JSON.deserializeStrict('{"make":"SFDC","year":"2020"}', Car.class);
    System.assertEquals(c.make, 'SFDC');
    System.assertEquals(c.year, '2020');
}
```

### deserializeUntyped(jsonString)
将指定的 JSON 字符串反序列化为原始数据类型的集合。

**签名**
```apex
public static Object deserializeUntyped(String jsonString)
```

**参数**
- **jsonString** - 类型：String
  - 要反序列化的 JSON 内容。

**返回值**
- 类型：Object

**示例**
以下示例将设备对象的 JSON 表示反序列化为包含原始数据类型和进一步原始类型集合的映射。然后验证反序列化的值。
```apex
String jsonInput = '{\n' +
    ' "description" :"An appliance",\n' +
    ' "accessories" : [ "powerCord", ' + 
      '{ "right":"door handle1", ' + 
        '"left":"door handle2" } ],\n' +
    ' "dimensions" : ' + 
      '{ "height" : 5.5 , ' + 
        '"width" : 3.0 , ' + 
        '"depth" : 2.2 },\n' +
    ' "type" : null,\n' +
    ' "inventory" : 2000,\n' +
    ' "price" : 1023.45,\n' +
    ' "isShipped" : true,\n' +
    ' "modelNumber" : "123"\n' +
    '}';
    
Map<String, Object> m = (Map<String, Object>)JSON.deserializeUntyped(jsonInput);
System.assertEquals('An appliance', m.get('description'));
        
List<Object> a = (List<Object>)m.get('accessories');
System.assertEquals('powerCord', a[0]);        
Map<String, Object> a2 = (Map<String, Object>)a[1];
System.assertEquals('door handle1', a2.get('right'));
System.assertEquals('door handle2', a2.get('left'));
Map<String, Object> dim = (Map<String, Object>)m.get('dimensions');
System.assertEquals(5.5, dim.get('height'));
System.assertEquals(3.0, dim.get('width'));
System.assertEquals(2.2, dim.get('depth'));
        
System.assertEquals(null, m.get('type'));
System.assertEquals(2000, m.get('inventory'));
System.assertEquals(1023.45, m.get('price'));
System.assertEquals(true, m.get('isShipped'));
System.assertEquals('123', m.get('modelNumber'));
```

### serialize(objectToSerialize)
将 Apex 对象序列化为 JSON 内容。

**签名**
```apex
public static String serialize(Object objectToSerialize)
```

**参数**
- **objectToSerialize** - 类型：Object
  - 要序列化的 Apex 对象。

**返回值**
- 类型：String

**示例**
以下示例序列化一个新的 Datetime 值。
```apex
Datetime dt = Datetime.newInstance(Date.newInstance(2011, 3, 22), Time.newInstance(1, 15, 18, 0)); 
String str = JSON.serialize(dt); 
System.assertEquals('"2011-03-22T08:15:18.000Z"', str);
```

### serialize(objectToSerialize, suppressApexObjectNulls)
在将 Apex 对象序列化为 JSON 内容时抑制 null 值。

**签名**
```apex
public static String serialize(Object objectToSerialize, Boolean suppressApexObjectNulls)
```

**参数**
- **objectToSerialize** - 类型：Object
  - 要序列化的 Apex 对象。
- **suppressApexObjectNulls** - 类型：Boolean
  - 如果为 true，在序列化 JSON 对象之前移除 null 值。

**注意**
此参数不适用于通过 SOQL 检索的 sObject。

**返回值**
- 类型：String

**用法**
此方法允许您指定在将 Apex 对象序列化为 JSON 内容时是否抑制 null 值。

### serializePretty(objectToSerialize)
将 Apex 对象序列化为 JSON 内容，并使用 pretty-print 格式生成缩进内容。

**签名**
```apex
public static String serializePretty(Object objectToSerialize)
```

**参数**
- **objectToSerialize** - 类型：Object
  - 要序列化的 Apex 对象。

**返回值**
- 类型：String

### serializePretty(objectToSerialize, suppressApexObjectNulls)
在将 Apex 对象序列化为 JSON 内容时抑制 null 值，并使用 pretty-print 格式生成缩进内容。

**签名**
```apex
public static String serializePretty(Object objectToSerialize, Boolean suppressApexObjectNulls)
```

**参数**
- **objectToSerialize** - 类型：Object
  - 要序列化的 Apex 对象。
- **suppressApexObjectNulls** - 类型：Boolean
  - 如果为 true，在序列化 JSON 对象之前移除 null 值。

**注意**
此参数不适用于通过 SOQL 检索的 sObject。

**返回值**
- 类型：String

