---
doc_id: "apex_class_Wave_TemplatesSearchOptions"
---

# TemplatesSearchOptions Class

The TemplatesSearchOptions class provides optional properties to filter the template collection.

## Namespace

[Wave](atlas.en-us.apexref.meta/apexref/apex_namespace_wave.htm "The classes in the Wave namespace are part of the CRM Analytics Analytics SDK, designed to facilitate querying CRM Analytics data from Apex code.")

## Usage

Use TemplatesSearchOptions with `Wave.Templates` class to filter the CRM Analytics template collection returned. For example:

```apex
public static void ListString> getAppTemplates() {
  Wave.TemplateSearchOptions tsOptions = new Wave.TemplatesSearchOptions();
  tsOptions.type = 'app';
  
  MapString, Object> o = Wave.Templates.getTemplates(tsOptions);
  ListObject> appTemplates = (ListObject>) o.get('templates');
  ListString> names = new ListString>();
  for (Object templateObj : appTemplates) {
    names.add((String) ((MapString, Object>) templateObj.get('name'));
  }
  return names;
}
```

## See Also

- [TemplatesSearchOptions Properties](atlas.en-us.apexref.meta/apexref/apex_class_Wave_TemplatesSearchOptions.htm#apex_Wave_TemplatesSearchOptions_properties)

## TemplatesSearchOptions Properties

The following are properties for `TemplatesSearchOptions`.

## See Also

- [filterGroup](atlas.en-us.apexref.meta/apexref/apex_class_Wave_TemplatesSearchOptions.htm#apex_Wave_TemplatesSearchOptions_filterGroup)
- [options](atlas.en-us.apexref.meta/apexref/apex_class_Wave_TemplatesSearchOptions.htm#apex_Wave_TemplatesSearchOptions_options)
- [type](atlas.en-us.apexref.meta/apexref/apex_class_Wave_TemplatesSearchOptions.htm#apex_Wave_TemplatesSearchOptions_type)

### filterGroup

Specifies the Connect API filter group for CRM Analytics template search options.

#### Signature

`public String filterGroup {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Uses the [ConnectFilterGroupEnum](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_filter_groups.htm) values.

#### Example

```apex
Wave.TemplateSearchOptions tsOptions = new Wave.TemplatesSearchOptions();
tsOptions.filterGroup = 'small';
```

### options

Specifies the template visibility option to filter the CRM Analytics template collection by.

#### Signature

`public String options {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Uses the `ConnectWaveTemplateVisibilityOptionsEnum` values. Valid values are `CreateApp`, `ViewOnly`, and `ManageableOnly`.

#### Example

```apex
Wave.TemplateSearchOptions tsOptions = new Wave.TemplatesSearchOptions();
tsOptions.options = 'ViewOnly';
```

### type

Sets the template type to filter the CRM Analytics template collection by.

#### Signature

`public String type {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Uses the `ConnectWaveTemplateTypeEnum` values. Valid values are `app`, `dashboard`, `embedded`, and `lens`.

#### Example

```apex
Wave.TemplateSearchOptions tsOptions = new Wave.TemplatesSearchOptions();
tsOptions.type = 'app';
```
