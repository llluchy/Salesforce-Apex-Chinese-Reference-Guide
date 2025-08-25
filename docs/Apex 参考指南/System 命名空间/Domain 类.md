# Domain 类

表示由 Salesforce 托管的现有域，为组织或其内容提供服务。包含获取有关这些域信息的方法，例如域类型、My Domain 名称和沙盒名称。

## 命名空间

System

## 用法

使用 Domain 类获取有关 Salesforce 为您的组织托管的域的信息。此类仅适用于由 Salesforce 托管的域，不能用于生成新域。

## 示例

此代码使用 System.DomainParser 类解析主机名。然后获取关联的域类型。

```apex
System.Domain d = DomainParser.parse('mycompany.lightning.force.com');
String myDomainName = d.getMyDomainName();
System.DomainType domainType = d.getDomainType();
```

## Domain 方法

以下是 Domain 的方法。

### getDomainType()
返回域的类型，例如 CONTENT_DOMAIN、EXPERIENCE_CLOUD_SITES_DOMAIN 或 LIGHTNING_DOMAIN。

**签名**
```apex
public System.DomainType getDomainType()
```

**返回值**
- 类型：System.DomainType

### getMyDomainName()
返回域的 My Domain 名称。

**签名**
```apex
public String getMyDomainName()
```

**返回值**
- 类型：String

### getPackageName()
对于包含包名称的域，例如 Lightning Component 域或 Visualforce 页面域，返回包名称。对于不包含包名称的域，此方法返回 null。

**签名**
```apex
public String getPackageName()
```

**返回值**
- 类型：String

### getSandboxName()
对于沙盒组织域，返回沙盒名称。对于生产组织域，返回 null。

**签名**
```apex
public String getSandboxName()
```

**返回值**
- 类型：String

### getSitesSubdomainName()
对于系统管理的 Experience Cloud 站点域或 Salesforce Site 域，返回站点子域名。如果启用了增强域，此方法始终返回 null。当启用增强域时，组织的 My Domain 名称是 Experience Cloud 站点和 Salesforce Sites 域的系统管理域的子域名。

**签名**
```apex
public String getSitesSubdomainName()
```

**返回值**
- 类型：String
