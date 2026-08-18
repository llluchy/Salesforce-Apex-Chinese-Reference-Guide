---
doc_id: "apex_class_Wave_Templates"
---

# Templates Class

The Templates class provides methods for retrieving CRM Analytics template collections, individual templates, and template configurations.

## Namespace

[Wave](atlas.en-us.apexref.meta/apexref/apex_namespace_wave.htm "The classes in the Wave namespace are part of the CRM Analytics Analytics SDK, designed to facilitate querying CRM Analytics data from Apex code.")

## Usage

Use Templates and its associated class `Wave.TemplatesSearchOptions` to get CRM Analytics template information.

## Examples

This code sample declares a method that returns a list of the template names.

```apex
@AuraEnabled(cacheable=true)
public static void ListString> getTemplateNames() {
  MapString, Object> o = Wave.Templates.getTemplates(new Wave.TemplatesSearchOptions());
  ListObject> templates = (ListObject>) o.get('templates');
  ListString> names = new ListString>();
  for (Object templateObj : templates) {
    names.add((String) ((MapString, Object>) templateObj.get('name'));
  }
  return names;
}
```

Adding the `@AuraEnabled` annotation allows Lightning Web Components to access Templates methods directly.

For example, in the lwc.js file:

```js
import getTemplates from '@salesforce/apex/Wave.Templates.getTemplates';
export default class Templates extends LightningElement {
  @wire(getTemplates, {
    // specifying 'options' is optional
    options: {
      // values in TemplatesSearchOptions go here; all optional
      type: 'app'
    }
  })
  onTemplates({ data, error }) {
    if (data) {
      console.log('template names=' + data.templates.map(l => l.name).join(', '));
    }
  }
}
```

## See Also

- [Templates Methods](atlas.en-us.apexref.meta/apexref/apex_class_Wave_Templates.htm#apex_Wave_Templates_methods)

## Templates Methods

The following are methods for `Templates`.

## See Also

- [getTemplate(templateIdOrApiName)](atlas.en-us.apexref.meta/apexref/apex_class_Wave_Templates.htm#apex_Wave_Templates_getTemplate_2)
- [getTemplateConfig(templateIdOrApiName)](atlas.en-us.apexref.meta/apexref/apex_class_Wave_Templates.htm#apex_Wave_Templates_getTemplateConfig_2)
- [getTemplates(options)](atlas.en-us.apexref.meta/apexref/apex_class_Wave_Templates.htm#apex_Wave_Templates_getTemplates)
- [getTemplates()](atlas.en-us.apexref.meta/apexref/apex_class_Wave_Templates.htm#apex_Wave_Templates_getTemplates_2)

### getTemplate(templateIdOrApiName)

Gets a CRM Analytics template by the specified ID or API name. The returned template is a map of the template JSON attributes as name/value pairs.

#### Signature

`public static Map<String,Object> getTemplate(String templateIdOrApiName)`

#### Parameters

-   **templateIdOrApiName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The template ID or API name of the template to retrieve.
    

#### Return Value

Type: [Map](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/langCon_apex_collections_maps.htm)<String,Object>

A map of the template JSON attribute name/value pairs, where the name is a string with an object value. For attributes details, see [TemplateRepresentation](https://developer.salesforce.com/docs/atlas.en-us.262.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_id.htm).

#### Example

```apex
String templateName = (String) Wave.Templates.getTemplate(templateId).get('name');
```

### getTemplateConfig(templateIdOrApiName)

Gets the CRM Analytics template configuration by the specified ID or API name. The returned template configuration is a map of the JSON attributes as name/value pairs.

#### Signature

`public static Map<String,Object> getTemplateConfig(String templateIdOrApiName)`

#### Parameters

-   **templateIdOrApiName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The template ID or developer name to retrieve the template configuration for.
    

#### Return Value

Type: [Map](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_dev_guide.htm)<String,Object>

A map of template configuration JSON attribute names and the object values. For attribute details, see [TemplateConfigurationRepresentation](https://developer.salesforce.com/docs/atlas.en-us.262.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_configuration.htm).

#### Example

```apex
MapString, Object> templateVariables = (MapString, Object>) Wave.Templates.getTemplateConfig(templateId).get('variables');
```

### getTemplates(options)

Get a filtered collection of CRM Analytics templates using search options.

#### Signature

`public static Map<String,Object> getTemplates(Wave.TemplatesSearchOptions options)`

#### Parameters

-   **options**:
    
    Type: [Wave.TemplatesSearchOptions](atlas.en-us.apexref.meta/apexref/apex_class_Wave_TemplatesSearchOptions.htm#apex_class_Wave_TemplatesSearchOptions "The TemplatesSearchOptions class provides optional properties to filter the template collection.")
    
    The search options to use for filtering the template collection.
    

#### Return Value

Type: [Map](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_dev_guide.htm)<String,Object>

A map of template names and the template object values. For template collection details, see [TemplateCollectionRepresentation](https://developer.salesforce.com/docs/atlas.en-us.262.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates.htm).

#### Example

```apex
MapString,Object> templatesMap = Wave.Templates.getTemplates(new Wave.TemplatesSearchOptions());
```

### getTemplates()

Gets all CRM Analytics templates.

#### Signature

`public static Map<String,Object> getTemplates()`

#### Return Value

Type: [Map](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_dev_guide.htm)<String,Object>

A map of template names and the template object values. For template collection details, see [TemplateCollectionRepresentation](https://developer.salesforce.com/docs/atlas.en-us.262.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates.htm).

#### Example

```apex
MapString,Object> templatesMap = Wave.Templates.getTemplates();
```
