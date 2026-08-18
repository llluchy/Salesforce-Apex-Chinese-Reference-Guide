---
doc_id: "apex_class_sfdw_ConsumptionAlert"
---

# ConsumptionAlert Class

Represents a Digital Wallet consumption alert that's triggered for a consumption card.

## Namespace

[sfdw](atlas.en-us.apexref.meta/apexref/apex_namespace_sfdw.htm "Contains classes that describe Digital Wallet consumption card status and the alerts triggered when consumption crosses a threshold.")

## See Also

- [ConsumptionAlert Constructors](atlas.en-us.apexref.meta/apexref/apex_class_sfdw_ConsumptionAlert.htm#apex_sfdw_ConsumptionAlert_constructors)
- [ConsumptionAlert Properties](atlas.en-us.apexref.meta/apexref/apex_class_sfdw_ConsumptionAlert.htm#apex_sfdw_ConsumptionAlert_properties)

## ConsumptionAlert Constructors

The following are constructors for `ConsumptionAlert`.

## See Also

- [ConsumptionAlert(alertTriggerType, alertTriggerValue, isNotificationSent, createdDate)](atlas.en-us.apexref.meta/apexref/apex_class_sfdw_ConsumptionAlert.htm#apex_sfdw_ConsumptionAlert_ctor)

### ConsumptionAlert(alertTriggerType, alertTriggerValue, isNotificationSent, createdDate)

Creates a new instance of the ConsumptionAlert class using the specified trigger and notification details.

#### Signature

`public ConsumptionAlert(String alertTriggerType, Integer alertTriggerValue, Boolean isNotificationSent, Datetime createdDate)`

#### Parameters

alertTriggerType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unit or measurement type of the value that triggered the alert.

alertTriggerValue

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The numeric threshold that was crossed to trigger the alert, based on the alertTriggerType.

isNotificationSent

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether a notification has been sent for this alert (true) or not (false).

createdDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The date and time the alert was created.

## ConsumptionAlert Properties

The following are properties for `ConsumptionAlert`.

## See Also

- [alertTriggerType](atlas.en-us.apexref.meta/apexref/apex_class_sfdw_ConsumptionAlert.htm#apex_sfdw_ConsumptionAlert_alertTriggerType)
- [alertTriggerValue](atlas.en-us.apexref.meta/apexref/apex_class_sfdw_ConsumptionAlert.htm#apex_sfdw_ConsumptionAlert_alertTriggerValue)
- [createdDate](atlas.en-us.apexref.meta/apexref/apex_class_sfdw_ConsumptionAlert.htm#apex_sfdw_ConsumptionAlert_createdDate)
- [isNotificationSent](atlas.en-us.apexref.meta/apexref/apex_class_sfdw_ConsumptionAlert.htm#apex_sfdw_ConsumptionAlert_isNotificationSent)

### alertTriggerType

The unit or measurement type of the value that triggered the alert.

#### Signature

`public String alertTriggerType {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### alertTriggerValue

The numeric threshold that was crossed to trigger the alert, based on the alertTriggerType.

#### Signature

`public Integer alertTriggerValue {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### createdDate

The date and time the alert was created.

#### Signature

`public Datetime createdDate {get; set;}`

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### isNotificationSent

Indicates whether a notification has been sent for this alert (true) or not (false).

#### Signature

`public Boolean isNotificationSent {get; set;}`

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
