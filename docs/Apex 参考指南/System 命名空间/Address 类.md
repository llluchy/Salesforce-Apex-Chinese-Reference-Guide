# Address 类

包含用于访问地址复合字段组件字段的方法。

## 命名空间

System

## 用法

这些方法中的每一个都等同于只读属性。对于每个getter方法，您可以使用点表示法访问属性。例如，`myAddress.getCity()` 等同于 `myAddress.city`。

您不能使用点表示法直接在父字段上访问复合字段的子字段。相反，将父字段分配给Address类型的变量，然后访问其组件。例如，要访问 `myAccount.BillingAddress` 中的City字段，请执行以下操作：

```apex
Address addr = myAccount.BillingAddress;
String acctCity = addr.City;
```

> **重要**
>
> Salesforce中的"Address"也可以指Address标准对象。在Apex代码中引用Address对象时，始终使用 `Schema.Address` 而不是 `Address`，以避免与标准Address复合字段混淆。如果在同一代码片段中同时引用Address对象和Address标准字段，可以通过使用 `System.Address` 表示字段，使用 `Schema.Address` 表示对象来区分两者。

## 示例

```apex
Address addr = myAccount.BillingAddress;
String acctCity = addr.City;

// 选择和访问Address字段
// 以不同方式调用getDistance()方法
Account[] records = [SELECT id, BillingAddress FROM Account LIMIT 10];
for(Account acct : records) {
   Address addr = acct.BillingAddress;
   Double lat = addr.latitude;
   Double lon = addr.longitude;
   Location loc1 = Location.newInstance(30.1944,-97.6682);
   Double apexDist1 = addr.getDistance(loc1, 'mi');
   Double apexDist2 = loc1.getDistance(addr, 'mi');
   System.assertEquals(apexDist1, apexDist2);
   Double apexDist3 = Location.getDistance(addr, loc1, 'mi');
   System.assertEquals(apexDist2, apexDist3);
}
```

## Address 方法

### getCity()

返回此地址的城市字段。

#### 签名

```apex
public String getCity()
```

#### 返回值

- 类型：String

### getCountry()

返回此地址的仅文本国家/地区名称组件。

#### 签名

```apex
public String getCountry()
```

#### 返回值

- 类型：String

### getCountryCode()

如果您的组织中启用了州和国家/地区选择列表，则返回此地址的国家/地区代码。否则返回null。

#### 签名

```apex
public String getCountryCode()
```

#### 返回值

- 类型：String

### getDistance(toLocation, unit)

使用指定的单位返回从此位置到指定位置的距离。

#### 签名

```apex
public Double getDistance(Location toLocation, String unit)
```

#### 参数

**toLocation**
- 类型：Location
- 描述：您想要计算距离的目标位置。

**unit**
- 类型：String
- 描述：您想要使用的距离单位：mi 或 km。

#### 返回值

- 类型：Double

### getGeocodeAccuracy()

当使用给定地址的地理位置数据时，此方法基于纬度和经度值提供相对位置信息。例如，您可以了解纬度和经度值是否指向街道中间，而不是确切地址。

#### 签名

```apex
public String getGeocodeAccuracy()
```

#### 返回值

- 类型：String

`getGeocodeAccuracy()` 返回值告诉您更多关于给定地址在特定纬度和经度位置的信息。例如，Zip表示纬度和经度指向邮政编码区域的中心，以防找不到确切街道地址的匹配项。

#### 精度值

| 精度值 | 描述 |
|--------|------|
| Address | 在同一建筑物内 |
| NearAddress | 靠近地址 |
| Block | 街区的中间点 |
| Street | 街道的中间点 |
| ExtendedZip | 扩展邮政编码区域的中心 |
| Zip | 邮政编码区域的中心 |
| Neighborhood | 社区的中心 |
| City | 城市的中心 |
| County | 县的中心 |
| State | 州的中心 |
| Unknown | 未找到地址匹配项 |

地理编码仅添加到某些标准地址：
- 账户上的账单地址
- 账户上的发货地址
- 联系人上的邮寄地址
- 潜在客户上的地址

不支持个人账户。

> **注意**
>
> 要使 `getGeocodeAccuracy()` 工作，请为相关地址字段设置并激活地理编码数据集成规则。

### getLatitude()

返回此地址的纬度字段。

#### 签名

```apex
public Double getLatitude()
```

#### 返回值

- 类型：Double

### getLongitude()

返回此地址的经度字段。

#### 签名

```apex
public Double getLongitude()
```

#### 返回值

- 类型：Double

### getPostalCode()

返回此地址的邮政编码。

#### 签名

```apex
public String getPostalCode()
```

#### 返回值

- 类型：String

### getState()

返回此地址的仅文本州名称组件。

#### 签名

```apex
public String getState()
```

#### 返回值

- 类型：String

### getStateCode()

如果您的组织中启用了州和国家/地区选择列表，则返回此地址的州代码。否则返回null。

#### 签名

```apex
public String getStateCode()
```

#### 返回值

- 类型：String

### getStreet()

返回此地址的街道字段。

#### 签名

```apex
public String getStreet()
```

#### 返回值

- 类型：String

---

*文档来源：https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm*
