# Custom Metadata Type Methods

自定义元数据类型是可自定义、可部署、可打包和可升级的应用程序元数据。所有自定义元数据都暴露在应用程序缓存中，允许访问而无需重复查询数据库。元数据随后可用于公式字段、验证规则、流程、Apex和SOAP API。所有方法都是静态的。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Custom Metadata Type Methods是Salesforce中用于操作自定义元数据的重要工具。
> 
> 它提供了高效的缓存访问方式，避免了重复的数据库查询，提高了应用程序性能。

## 命名空间

System

## 用法

自定义元数据类型方法是实例类型方法，由自定义元数据类型的特定实例调用和操作。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> Custom Metadata Type Methods的主要用途：
> 1. 获取所有自定义元数据记录
> 2. 根据ID获取单个记录
> 3. 根据开发者名称获取单个记录
> 4. 根据限定API名称获取单个记录
> 5. 高效的缓存访问，避免数据库查询

## Custom Metadata Type Methods

以下是Custom Metadata Type的方法。

### getAll()

返回包含特定自定义元数据类型自定义元数据记录的映射。映射键是记录的DeveloperNames，映射值是记录sObjects。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> getAll方法返回所有自定义元数据记录的映射。
> 
> 使用.values()可以获取记录列表，便于遍历和处理。

#### 签名

```apex
public Map<String, CustomMetadataType__mdt> getAll()
```

#### 返回值

- 类型：Map<String, CustomMetadataType__mdt>

#### 用法

如果没有为该类型定义记录，此方法返回空映射。要遍历自定义元数据类型记录sObjects列表，请使用getAll().values()。自定义元数据类型记录中的任何字段只返回前255个字符，因此较长的文本字段会被截断。如果您想要自定义元数据类型记录的所有字段数据，请使用SOQL查询。

#### 示例

此示例返回名为Games__mdt的自定义元数据类型的所有记录的映射：

```apex
Map<String, Games__mdt> mcs = Games__mdt.getAll();
List<Games__mdt> mcs = Games__mdt.getAll().values();
Boolean textField = null;
if (mcs[0].GameType__c == 'PC') {
   textField = true;
}
System.assertEquals(textField, true);
```

### getInstance(recordId)

返回指定记录ID的单个自定义元数据类型记录sObject。如果没有记录匹配参数，则返回null。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> getInstance(recordId)方法根据记录ID获取单个记录。
> 
> 适用于已知记录ID的场景，如从其他对象引用中获取ID。

#### 签名

```apex
public CustomMetadataType__mdt getInstance(recordId)
```

#### 参数

**recordId**
- 类型：String
- 描述：记录ID

#### 返回值

- 类型：CustomMetadataType__mdt

#### 用法

使用此方法在用户级别显式检索自定义元数据类型信息。自定义元数据类型记录中的任何字段只返回前255个字符。因此，长文本字段等字段可能会被截断。如果您想要自定义元数据类型记录的所有字段数据，请使用SOQL查询。

#### 示例

此示例返回名为Games_mdt的自定义元数据类型的单个记录sObject，recordID指定为m00000000000001：

```apex
Games__mdt mc = Games__mdt.getInstance('m00000000000001');
```

### getInstance(developerName)

返回指定自定义元数据类型对象的developerName字段的单个自定义元数据类型记录sObject。如果没有记录匹配参数，则返回null。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> getInstance(developerName)方法根据开发者名称获取单个记录。
> 
> 开发者名称是API中自定义元数据类型对象的唯一名称，通常更容易记忆和使用。

#### 签名

```apex
public CustomMetadataType__mdt getInstance(String developerName)
```

#### 参数

**developerName**
- 类型：String
- 描述：开发者名称

#### 返回值

- 类型：CustomMetadataType__mdt

#### 用法

使用此方法返回指定developerName的单个自定义元数据类型记录。developerName是API中自定义元数据类型对象的唯一名称。自定义元数据类型记录中的任何字段只返回前255个字符。因此，长文本字段等字段可能会被截断。如果您想要自定义元数据类型记录的所有字段数据，请使用SOQL查询。

#### 示例

返回名为Games_mdt的自定义元数据类型的单个记录sObject，developerName指定为FirstRecord：

```apex
Games__mdt mc = Games__mdt.getInstance('FirstRecord');
```

### getInstance(qualifiedApiName)

返回限定API名称的单个自定义元数据类型记录sObject。如果没有记录匹配参数，则返回null。

> [!NOTE] 白话 —— 个人理解，谨慎分析
> getInstance(qualifiedApiName)方法根据限定API名称获取单个记录。
> 
> 限定API名称包含命名空间前缀，适用于跨命名空间的场景。

#### 签名

```apex
public CustomMetadataType__mdt getInstance(String qualifiedApiName)
```

#### 参数

**qualifiedApiName**
- 类型：String
- 描述：限定API名称

#### 返回值

- 类型：CustomMetadataType__mdt

#### 用法

使用此方法返回指定qualifiedApiName的单个自定义元数据类型记录。qualifiedApiName是命名空间前缀和developerName的连接，格式为：namespacePrefix__developerName。developerName是API中自定义元数据类型对象的唯一名称。自定义元数据类型记录中的任何字段只返回前255个字符。因此，长文本字段等字段可能会被截断。如果您想要自定义元数据类型记录的所有字段数据，请使用SOQL查询。

#### 示例

此示例返回名为Games_mdt的自定义元数据类型的单个记录sObject，qualifiedApiName指定为MyNamespace__FirstRecord：

```apex
Games__mdt mc = Games__mdt.getInstance('MyNamespace__FirstRecord');
```

## Custom Metadata Types 示例

以下示例使用getAll()方法。名为Games的自定义元数据类型有一个名为GameType__c的字段。此示例确定第一个记录的字段值是否等于字符串PC：

```apex
List<Games__mdt> mcs = Games__mdt.getAll().values();
Boolean textField = null;
if (mcs[0].GameType__c == 'PC') {
   textField = true;
}
System.assertEquals(textField, true);
```

## 使用场景

### 1. 配置管理

```apex
// 获取所有配置记录
Map<String, AppConfig__mdt> configs = AppConfig__mdt.getAll();
for (AppConfig__mdt config : configs.values()) {
    if (config.IsActive__c) {
        // 处理活动配置
        System.debug('Active config: ' + config.DeveloperName);
    }
}
```

### 2. 单记录访问

```apex
// 根据开发者名称获取特定配置
AppConfig__mdt config = AppConfig__mdt.getInstance('DefaultConfig');
if (config != null) {
    String apiEndpoint = config.ApiEndpoint__c;
    Integer timeout = config.Timeout__c;
}
```

### 3. 跨命名空间访问

```apex
// 访问其他命名空间的自定义元数据
ExternalConfig__mdt externalConfig = ExternalConfig__mdt.getInstance('MyNamespace__ExternalAPI');
if (externalConfig != null) {
    // 使用外部配置
}
```

## 注意事项

- 所有方法都是静态方法
- 自定义元数据存储在应用程序缓存中，访问速度快
- 任何字段只返回前255个字符，长文本字段会被截断
- 如果需要完整的字段数据，应使用SOQL查询
- 如果没有匹配的记录，getInstance方法返回null
- 限定API名称格式为：namespacePrefix__developerName

## 性能考虑

### 缓存优势

```apex
// 高效：使用缓存访问
Map<String, Config__mdt> configs = Config__mdt.getAll();

// 低效：使用SOQL查询
List<Config__mdt> configs = [SELECT Id, DeveloperName, Value__c FROM Config__mdt];
```

### 字段长度限制

```apex
// 注意：长文本字段会被截断
Config__mdt config = Config__mdt.getInstance('MyConfig');
String description = config.Description__c; // 只返回前255个字符

// 解决方案：使用SOQL查询获取完整数据
Config__mdt fullConfig = [SELECT Id, Description__c FROM Config__mdt WHERE DeveloperName = 'MyConfig' LIMIT 1];
```

## 最佳实践

### 1. 错误处理

```apex
public static Config__mdt getConfig(String developerName) {
    Config__mdt config = Config__mdt.getInstance(developerName);
    if (config == null) {
        throw new ConfigNotFoundException('Configuration not found: ' + developerName);
    }
    return config;
}

public class ConfigNotFoundException extends Exception {}
```

### 2. 批量处理

```apex
public static void processAllConfigs() {
    Map<String, Config__mdt> configs = Config__mdt.getAll();
    for (String developerName : configs.keySet()) {
        Config__mdt config = configs.get(developerName);
        // 处理每个配置
        processConfig(config);
    }
}
```

### 3. 类型安全

```apex
// 使用强类型访问
public static String getApiEndpoint() {
    AppConfig__mdt config = AppConfig__mdt.getInstance('DefaultConfig');
    return config != null ? config.ApiEndpoint__c : null;
}
```

## 相关链接

- [自定义元数据类型](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_custom_metadata_types.htm)
- [元数据API](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/)
- [应用程序缓存](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_cache.htm)

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_custom_metadata_types.htm*
