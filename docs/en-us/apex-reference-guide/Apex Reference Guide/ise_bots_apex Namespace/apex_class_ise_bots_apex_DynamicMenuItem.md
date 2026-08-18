---
doc_id: "apex_class_ise_bots_apex_DynamicMenuItem"
---

# DynamicMenuItem Class

Contains properties to define and hold the details for a single dynamic menu item Each item contains information related to an object, such as identifiers, labels, summaries, and sorting logic. It enables bots to present context-aware and user-relevant choices dynamically during conversations. .

## Namespace

[ise\_bots\_apex](atlas.en-us.apexref.meta/apexref/apex_namespace_ise_bots_apex.htm "The ise_bots_apex namespace provides classes and properties to facilitate dynamic content generation and data handling for menu-driven bot interactions. Create and manage dynamic menu items that adapt to user inputs, context, and underlying object data.")

## See Also

- [DynamicMenuItem Properties](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_properties)

## DynamicMenuItem Properties

Learn more about the properties available with the DynamicMenuItem class.

The `DynamicMenuItem` class includes these properties.

## See Also

- [EntityId](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_EntityId)
- [EntityIdValue](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_EntityIdValue)
- [EntityName](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_EntityName)
- [EntityNameValue](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_EntityNameValue)
- [Label](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_Label)
- [LabelValue](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_LabelValue)
- [SummaryTextWithFormula](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_SummaryTextWithFormula)
- [SummaryTextWithFormulaValue](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_SummaryTextWithFormulaValue)
- [sortByDate](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_sortByDate)
- [sortByDateValue](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_sortByDateValue)

### EntityId

API name representing the ID field of the related Salesforce object.

#### Signature

`public String EntityId {get; set;}`

```apex
ise_bots_apex.DynamicMenuItem, EntityId
```

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### EntityIdValue

The ID value retrieved at run time for the associated object.

#### Signature

`public String EntityIdValue {get; set;}`

```apex
ise_bots_apex.DynamicMenuItem, EntityIdValue
```

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### EntityName

API name or label of the object being referenced, for example Case, Contact, or a custom object such as Service\_\_c.

#### Signature

`public String EntityName {get; set;}`

```apex
ise_bots_apex.DynamicMenuItem, EntityName
```

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### EntityNameValue

The name of the specific object instance.

#### Signature

`public String EntityNameValue {get; set;}`

```apex
ise_bots_apex.DynamicMenuItem, EntityNameValue
```

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### Label

The label used to define how the item must be displayed in the bot menu.

#### Signature

`public String Label {get; set;}`

```apex
ise_bots_apex.DynamicMenuItem, Label
```

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### LabelValue

The value of the label displayed to the user for the menu item at run time.

#### Signature

`public String LabelValue {get; set;}`

```apex
ise_bots_apex.DynamicMenuItem, LabelValue
```

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### SummaryTextWithFormula

A formula or a string of text that defines the structure of the summary text displayed for the item. This formula is used to construct a dynamic summary for the user after they make a selection.

#### Signature

`public String SummaryTextWithFormula {get; set;}`

```apex
ise_bots_apex.DynamicMenuItem, SummaryTextWithFormula
```

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### SummaryTextWithFormulaValue

The summary string based on the formula and object data.

#### Signature

`public String SummaryTextWithFormulaValue {get; set;}`

```apex
ise_bots_apex.DynamicMenuItem, SummaryTextWithFormulaValue
```

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### sortByDate

The API name of a date or date/time field on the object that's used to sort the dynamic menu items.

#### Signature

`public Date sortByDate {get; set;}`

```apex
ise_bots_apex.DynamicMenuItem, sortByDate
```

#### Property Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

### sortByDateValue

The DateTime value used at run time to sort the menu items chronologically.

#### Signature

`public Date sortByDateValue {get; set;}`

```apex
ise_bots_apex.DynamicMenuItem, sortByDateValue
```

#### Property Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")
