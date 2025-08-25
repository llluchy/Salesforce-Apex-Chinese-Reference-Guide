# Custom Settings Methods

自定义设置类似于自定义对象，使应用程序开发人员能够创建自定义数据集，以及为组织、配置文件或特定用户创建和关联自定义数据。所有自定义设置数据都暴露在应用程序缓存中，这实现了高效访问，而无需重复查询数据库的成本。然后这些数据可用于公式字段、验证规则、流程、Apex 和 SOAP API。

## 用法

自定义设置方法都是实例方法，也就是说，它们由自定义设置的特定实例调用和操作。有两种类型的自定义设置：层次结构和列表。有两种类型的方法：适用于列表自定义设置的方法和适用于层次结构自定义设置的方法。

## 注意

所有自定义设置数据都暴露在应用程序缓存中，这实现了高效访问，而无需重复查询数据库的成本。但是，使用标准对象查询语言 (SOQL) 查询自定义设置数据不使用应用程序缓存，类似于查询自定义对象。为了从缓存中受益，请使用其他方法访问自定义设置数据，例如 Apex 自定义设置方法。

有关在 Salesforce 用户界面中创建自定义设置的更多信息，请参阅 Salesforce 在线帮助中的"创建自定义设置"。

## 自定义设置示例

以下示例使用名为 Games 的列表自定义设置。Games 设置有一个名为 GameType 的字段。此示例确定第一个数据集的值是否等于字符串 PC。

```apex
List<Games__c> mcs = Games__c.getAll().values();
boolean textField = null;
if (mcs[0].GameType__c == 'PC') {
  textField = true;
}
system.assertEquals(textField, true);
```

以下示例使用名为 Foundation_Countries 的自定义设置。此示例演示 getValues 和 getInstance 方法返回相同的值。

```apex
Foundation_Countries__c myCS1 = Foundation_Countries__c.getValues('United States');
String myCCVal = myCS1.Country_code__c;
Foundation_Countries__c myCS2 = Foundation_Countries__c.getInstance('United States');
String myCCInst = myCS2.Country_code__c;
system.assertEquals(myCCInst, myCCVal);
```

## 层次结构自定义设置示例

在以下示例中，层次结构自定义设置 GamesSupport 有一个名为 Corporate_number 的字段。代码返回为 pid 指定的配置文件的值。

```apex
GamesSupport__c mhc = GamesSupport__c.getInstance(pid);
string mPhone = mhc.Corporate_number__c;
```

如果您选择使用 getValues 方法，示例是相同的。

以下示例显示如何使用层次结构自定义设置方法。对于 getInstance，示例显示如何从层次结构中下一最低级别定义的字段返回未为特定用户或配置文件设置的字段值。示例还显示如何使用 getOrgDefaults。

最后，示例演示 getValues 如何仅返回自定义设置记录中特定用户或配置文件的字段，并且不合并层次结构其他级别的值。相反，getValues 为任何未设置的字段返回 null。此示例使用名为 Hierarchy 的层次结构自定义设置。Hierarchy 有两个字段：OverrideMe 和 DontOverrideMe。此外，名为 Robert 的用户具有系统管理员配置文件。此示例的组织、配置文件和用户设置如下：

**组织设置**
- OverrideMe: Hello
- DontOverrideMe: World

**配置文件设置**
- OverrideMe: Goodbye
- DontOverrideMe 未设置。

**用户设置**
- OverrideMe: Fluffy
- DontOverrideMe 未设置。

以下示例演示当 Robert 在其组织中调用 getInstance 方法时的结果：

```apex
Hierarchy__c CS = Hierarchy__c.getInstance();
System.Assert(CS.OverrideMe__c == 'Fluffy');
System.assert(CS.DontOverrideMe__c == 'World');
```

如果 Robert 将由其 RobertId 指定的用户 ID 传递给 getInstance，结果相同。结果相同是因为自定义设置中的最低级别数据在用户级别指定。

```apex
Hierarchy__c CS = Hierarchy__c.getInstance(RobertId);
System.Assert(CS.OverrideMe__c == 'Fluffy');
System.assert(CS.DontOverrideMe__c == 'World');
```

如果 Robert 将由其 SysAdminID 指定的系统管理员配置文件 ID 传递给 getInstance，结果不同。返回为配置文件指定的数据：

```apex
Hierarchy__c CS = Hierarchy__c.getInstance(SysAdminID);
System.Assert(CS.OverrideMe__c == 'Goodbye');
System.assert(CS.DontOverrideMe__c == 'World');
```

当 Robert 尝试使用 getOrgDefaults 返回组织的数据集时，结果是：

```apex
Hierarchy__c CS = Hierarchy__c.getOrgDefaults();
System.Assert(CS.OverrideMe__c == 'Hello');
System.assert(CS.DontOverrideMe__c == 'World');
```

通过使用 getValues 方法，Robert 可以获取特定于其用户和配置文件设置的层次结构自定义设置值。例如，如果 Robert 将其用户 ID RobertId 传递给 getValues，结果是：

```apex
Hierarchy__c CS = Hierarchy__c.getValues(RobertId);
System.Assert(CS.OverrideMe__c == 'Fluffy');
// 注意此值如何为 null，因为您返回的是特定于用户的数据
System.assert(CS.DontOverrideMe__c == null);
```

如果 Robert 将其系统管理员配置文件 ID SysAdminID 传递给 getValues，结果是：

```apex
Hierarchy__c CS = Hierarchy__c.getValues(SysAdminID);
System.Assert(CS.OverrideMe__c == 'Goodbye');
// 注意此值如何为 null，因为您返回的是特定于配置文件的数据
System.assert(CS.DontOverrideMe__c == null);
```

## 国家和州代码自定义设置示例

此示例说明使用两个自定义设置对象存储相关信息，以及一个 Visualforce 页面在相关选择列表中显示数据。

在以下示例中，国家和州代码存储在两个不同的自定义设置中：Foundation_Countries 和 Foundation_States。

Foundation_Countries 自定义设置是列表类型自定义设置，有一个字段 Country_Code。

Foundation_States 自定义设置也是列表类型的自定义设置，具有以下字段：
- Country Code
- State Code
- State Name

Visualforce 页面显示两个选择列表：一个用于国家，一个用于州。

```xml
<apex:page controller="CountryStatePicker">
   <apex:form>
      <apex:actionFunction name="rerenderStates" rerender="statesSelectList">
          <apex:param name="firstParam" assignTo="{!country}" value="" />
      </apex:actionFunction>
   <table><tbody>
      <tr>
        <th>Country</th>
          <td>
             <apex:selectList id="country" styleclass="std" size="1" 
                value="{!country}" onChange="rerenderStates(this.value)">
                    <apex:selectOptions value="{!countriesSelectList}"/>
             </apex:selectList>
          </td>
      </tr>
      <tr id="state_input">
        <th>State/Province</th>
          <td>
            <apex:selectList id="statesSelectList" styleclass="std" size="1" 
                 value="{!state}">
                   <apex:selectOptions value="{!statesSelectList}"/>
            </apex:selectList>
          </td>
      </tr>
   </tbody></table>
   </apex:form>
</apex:page>
```

Apex 控制器 CountryStatePicker 查找输入到自定义设置中的值，然后将它们返回给 Visualforce 页面。

```apex
public with sharing class CountryStatePicker {
    // 存储用户选择的国家和州的变量
    public String state { get; set; }
    public String country {get; set;}   
    
    // 从国家设置生成国家下拉列表
    public List<SelectOption> getCountriesSelectList() {
        List<SelectOption> options = new List<SelectOption>();
        options.add(new SelectOption('', '-- Select One --'));        
        
        // 在自定义设置中查找所有国家
        Map<String, Foundation_Countries__c> countries = Foundation_Countries__c.getAll();
        
        // 按名称排序
        List<String> countryNames = new List<String>();
        countryNames.addAll(countries.keySet());
        countryNames.sort();
        
        // 创建选择选项
        for (String countryName : countryNames) {
            Foundation_Countries__c country = countries.get(countryName);
            options.add(new SelectOption(country.country_code__c, country.Name));
        }
        return options;
    }
    
    // 根据用户选择的国家生成州选择列表
    public List<SelectOption> getStatesSelectList() {
        List<SelectOption> options = new List<SelectOption>();
        // 查找我们在自定义设置中拥有的所有州
        Map<String, Foundation_States__c> allstates = Foundation_States__c.getAll();
        // 过滤属于所选国家的州
        Map<String, Foundation_States__c> states = new Map<String, Foundation_States__c>();
        for(Foundation_States__c state : allstates.values()) {
            if (state.country_code__c == this.country) {
                states.put(state.name, state);
            }
        }
        
        // 根据州名称排序
        List<String> stateNames = new List<String>();
        stateNames.addAll(states.keySet());
        stateNames.sort();
        
        // 根据最终排序列表生成选择选项
        for (String stateName : stateNames) {
            Foundation_States__c state = states.get(stateName);
            options.add(new SelectOption(state.state_code__c, state.state_name__c));
        }
        
        // 如果未找到州，在下拉列表中只说不需要
        if (options.size() > 0) {
            options.add(0, new SelectOption('', '-- Select One --'));
        } else {
            options.add(new SelectOption('', 'Not Required'));
        }
        return options;
    }
}
```

## 列表自定义设置方法

以下是列表自定义设置的实例方法。

- **getAll()** - 返回为自定义设置定义的数据集的映射。
- **getInstance(dataSetName)** - 返回指定数据集名称的自定义设置数据集记录。此方法返回与 getValues(dataSetName) 完全相同的对象。
- **getValues(dataSetName)** - 返回指定数据集名称的自定义设置数据集记录。此方法返回与 getInstance(dataSetName) 完全相同的对象。

## 层次结构自定义设置方法

以下是层次结构自定义设置的实例方法。

**注意**
在 API 版本 41.0 及以下版本中，Apex 测试类中的每个方法，包括 testSetup 方法，都能够插入层次结构自定义设置值。即使方法与在不同测试方法中插入的层次结构自定义设置记录具有相同的 SetupOwnerId 值，此行为也是正确的。

在 API 版本 42.0 及更高版本中，如果在 testSetup 方法中插入了层次结构自定义设置，则在测试方法中插入具有相同 SetupOwnerId 的层次结构自定义设置记录会抛出 DUPLICATE_VALUE 异常。

- **getInstance()** - 返回当前用户的自定义设置数据集记录。返回的自定义设置记录中的字段基于层次结构中定义的最低级别字段进行合并。
- **getInstance(userId)** - 返回指定用户 ID 的自定义设置数据集记录。返回最低级别的自定义设置记录和字段。当您想要显式检索用户级别的自定义设置数据时使用此方法。
- **getInstance(profileId)** - 返回指定配置文件 ID 的自定义设置数据集记录。返回最低级别的自定义设置记录和字段。当您想要显式检索配置文件级别的自定义设置数据时使用此方法。
- **getOrgDefaults()** - 返回组织的自定义设置数据集记录。
- **getValues(userId)** - 返回指定用户 ID 的自定义设置数据集记录。
- **getValues(profileId)** - 返回指定配置文件 ID 的自定义设置数据集。

## 另请参阅

- Apex 开发人员指南：自定义设置
