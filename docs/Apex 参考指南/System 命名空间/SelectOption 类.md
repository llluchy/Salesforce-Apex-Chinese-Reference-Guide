# SelectOption 类

SelectOption 对象为 Visualforce selectCheckboxes、selectList 或 selectRadio 组件指定可能的值之一。

## 命名空间

System

## 概述

SelectOption 由显示给最终用户的标签和如果选择该选项则返回给控制器的值组成。SelectOption 也可以以禁用状态显示，这样用户无法将其选择为选项，但仍可以查看它。

## 实例化

在自定义控制器或控制器扩展中，您可以通过以下方式之一实例化 SelectOption：

```apex
SelectOption option = new SelectOption(value, label, isDisabled);
```

其中 value 是如果用户选择该选项则返回给控制器的 String，label 是显示给用户作为选项选择的 String，isDisabled 是一个 Boolean，如果为 true，则指定用户无法选择该选项，但仍可以查看它。

```apex
SelectOption option = new SelectOption(value, label);
```

其中 value 是如果用户选择该选项则返回给控制器的 String，label 是显示给用户作为选项选择的 String。由于未指定 isDisabled 的值，用户可以查看和选择该选项。

## 示例

以下示例显示如何使用 SelectOption 对象列表为 Visualforce 页面上的 selectCheckboxes 组件提供可能的值。在以下自定义控制器中，getItems 方法定义并返回可能的 SelectOption 对象列表：

```apex
public class sampleCon {
    String[] countries = new String[]{};
    
    public PageReference test() {
        return null;
    }
    
    public List<SelectOption> getItems() {
        List<SelectOption> options = new List<SelectOption>();
        options.add(new SelectOption('US','US'));
        options.add(new SelectOption('CANADA','Canada'));
        options.add(new SelectOption('MEXICO','Mexico'));
        return options;
    }
    
    public String[] getCountries() {
        return countries;
    }
    
    public void setCountries(String[] countries) {
        this.countries = countries;
    }
}
```

在以下页面标记中，`<apex:selectOptions>` 标签使用上面控制器中的 getItems 方法来检索可能值的列表。因为 `<apex:selectOptions>` 是 `<apex:selectCheckboxes>` 标签的子项，所以选项显示为复选框：

```xml
<apex:page controller="sampleCon">
    <apex:form>
        <apex:selectCheckboxes value="{!countries}">
            <apex:selectOptions value="{!items}"/>
        </apex:selectCheckboxes><br/>
        <apex:commandButton value="Test" action="{!test}" rerender="out" status="status"/>
    </apex:form>
    <apex:outputPanel id="out">
        <apex:actionstatus id="status" startText="testing...">
            <apex:facet name="stop">
                <apex:outputPanel>
                    <p>You have selected:</p>
                    <apex:dataList value="{!countries}" var="c">{!c}</apex:dataList>
                </apex:outputPanel>
            </apex:facet>
        </apex:actionstatus>
    </apex:outputPanel>
</apex:page>
```

## SelectOption 构造函数

以下是 SelectOption 的构造函数。

### SelectOption(value, label)
使用指定的值和标签创建 SelectOption 类的新实例。

**签名**
```apex
public SelectOption(String value, String label)
```

**参数**
- **value** - 类型：String
  - 如果用户选择该选项则返回给 Visualforce 控制器的字符串。
- **label** - 类型：String
  - 显示给用户作为选项选择的字符串。

### SelectOption(value, label, isDisabled)
使用指定的值、标签和禁用设置创建 SelectOption 类的新实例。

**签名**
```apex
public SelectOption(String value, String label, Boolean isDisabled)
```

**参数**
- **value** - 类型：String
  - 如果用户选择该选项则返回给 Visualforce 控制器的字符串。
- **label** - 类型：String
  - 显示给用户作为选项选择的字符串。
- **isDisabled** - 类型：Boolean
  - 如果设置为 true，用户无法选择该选项但仍可以查看它。

## SelectOption 方法

以下是 SelectOption 的方法。所有都是实例方法。

### getDisabled()
返回 SelectOption 对象的 isDisabled 属性的当前值。

**签名**
```apex
public Boolean getDisabled()
```

**返回值**
- 类型：Boolean

**用法**
如果 isDisabled 设置为 true，用户可以查看该选项，但无法选择它。如果 isDisabled 设置为 false，用户可以查看和选择该选项。

### getEscapeItem()
返回 SelectOption 对象的 itemEscaped 属性的当前值。

**签名**
```apex
public Boolean getEscapeItem()
```

**返回值**
- 类型：Boolean

**用法**
如果 itemEscaped 设置为 true，敏感 HTML 和 XML 字符在此组件生成的 HTML 输出中被转义。如果 itemEscaped 设置为 false，项目按原样渲染。

### getLabel()
返回显示给用户的选项标签。

**签名**
```apex
public String getLabel()
```

**返回值**
- 类型：String

### getValue()
返回如果用户选择该选项则返回给控制器的选项值。

**签名**
```apex
public String getValue()
```

**返回值**
- 类型：String

### setDisabled(isDisabled)
设置 SelectOption 对象的 isDisabled 属性的值。

**签名**
```apex
public Void setDisabled(Boolean isDisabled)
```

**参数**
- **isDisabled** - 类型：Boolean

**返回值**
- 类型：Void

**用法**
如果 isDisabled 设置为 true，用户可以查看该选项，但无法选择它。如果 isDisabled 设置为 false，用户可以查看和选择该选项。

### setEscapeItem(itemsEscaped)
设置 SelectOption 对象的 itemEscaped 属性的值。

**签名**
```apex
public Void setEscapeItem(Boolean itemsEscaped)
```

**参数**
- **itemsEscaped** - 类型：Boolean

**返回值**
- 类型：Void

**用法**
如果 itemEscaped 设置为 true，敏感 HTML 和 XML 字符在此组件生成的 HTML 输出中被转义。如果 itemEscaped 设置为 false，项目按原样渲染。

### setLabel(label)
设置显示给用户的选项标签的值。

**签名**
```apex
public Void setLabel(String label)
```

**参数**
- **label** - 类型：String

**返回值**
- 类型：Void

### setValue(value)
设置如果用户选择该选项则返回给控制器的选项值的值。

**签名**
```apex
public Void setValue(String value)
```

**参数**
- **value** - 类型：String

**返回值**
- 类型：Void

