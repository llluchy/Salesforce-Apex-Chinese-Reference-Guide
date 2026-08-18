---
doc_id: "apex_class_sfdw_ConsumptionCard"
---

# ConsumptionCard Class

Represents a Digital Wallet consumption card, including its consumption, total entitlement, and related consumption alerts.

## Namespace

[sfdw](atlas.en-us.apexref.meta/apexref/apex_namespace_sfdw.htm "Contains classes that describe Digital Wallet consumption card status and the alerts triggered when consumption crosses a threshold.")

## See Also

- [ConsumptionCard Constructors](atlas.en-us.apexref.meta/apexref/apex_class_sfdw_ConsumptionCard.htm#apex_sfdw_ConsumptionCard_constructors)
- [ConsumptionCard Properties](atlas.en-us.apexref.meta/apexref/apex_class_sfdw_ConsumptionCard.htm#apex_sfdw_ConsumptionCard_properties)

## ConsumptionCard Constructors

The following are constructors for `ConsumptionCard`.

## See Also

- [ConsumptionCard(cardDefinitionDeveloperName, businessEnvType, usageModel, unitsConsumed, totalEntitlement, consumptionAlerts)](atlas.en-us.apexref.meta/apexref/apex_class_sfdw_ConsumptionCard.htm#apex_sfdw_ConsumptionCard_ctor)

### ConsumptionCard(cardDefinitionDeveloperName, businessEnvType, usageModel, unitsConsumed, totalEntitlement, consumptionAlerts)

Creates a new instance of the ConsumptionCard class using the specified card details and alerts.

#### Signature

`public ConsumptionCard(String cardDefinitionDeveloperName, String businessEnvType, String usageModel, Double unitsConsumed, Double totalEntitlement, List<sfdw.ConsumptionAlert> consumptionAlerts)`

#### Parameters

cardDefinitionDeveloperName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The developer name for the consumption card.

businessEnvType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The environment type of the org containing the card’s entitlement.

usageModel

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The buying model for the consumption card.

unitsConsumed

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The number of units consumed for the consumption card.

totalEntitlement

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The total entitlement available for the consumption card.

consumptionAlerts

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_System_List_methods) <sfdw.ConsumptionAlert>

The consumption alerts already triggered for the consumption card.

## ConsumptionCard Properties

The following are properties for `ConsumptionCard`.

## See Also

- [businessEnvType](atlas.en-us.apexref.meta/apexref/apex_class_sfdw_ConsumptionCard.htm#apex_sfdw_ConsumptionCard_businessEnvType)
- [cardDefinitionDeveloperName](atlas.en-us.apexref.meta/apexref/apex_class_sfdw_ConsumptionCard.htm#apex_sfdw_ConsumptionCard_cardDefinitionDeveloperName)
- [consumptionAlerts](atlas.en-us.apexref.meta/apexref/apex_class_sfdw_ConsumptionCard.htm#apex_sfdw_ConsumptionCard_consumptionAlerts)
- [totalEntitlement](atlas.en-us.apexref.meta/apexref/apex_class_sfdw_ConsumptionCard.htm#apex_sfdw_ConsumptionCard_totalEntitlement)
- [unitsConsumed](atlas.en-us.apexref.meta/apexref/apex_class_sfdw_ConsumptionCard.htm#apex_sfdw_ConsumptionCard_unitsConsumed)
- [usageModel](atlas.en-us.apexref.meta/apexref/apex_class_sfdw_ConsumptionCard.htm#apex_sfdw_ConsumptionCard_usageModel)

### businessEnvType

The environment type of the org containing the card’s entitlement.

#### Signature

`public String businessEnvType {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### cardDefinitionDeveloperName

The developer name for the consumption card.

#### Signature

`public String cardDefinitionDeveloperName {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### consumptionAlerts

The consumption alerts already triggered for the consumption card.

#### Signature

`public List<sfdw.ConsumptionAlert> consumptionAlerts {get; set;}`

#### Property Value

Type: List<sfdw.ConsumptionAlert>

### totalEntitlement

The total entitlement available for the consumption card.

#### Signature

`public Double totalEntitlement {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### unitsConsumed

The number of units consumed for the consumption card.

#### Signature

`public Double unitsConsumed {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### usageModel

The buying model of the consumption card.

#### Signature

`public String usageModel {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
