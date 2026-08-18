---
doc_id: "apex_ConnectAPI_RecordUi_static_methods"
---

# RecordUi Class

Get picklist values by record type.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Usage

Apex methods in the `RecordUi` class can’t be used in packages that use push upgrades.

## RecordUi Methods

These methods are for `RecordUi`. All methods are static.

## See Also

- [getPicklistValuesByRecordType(objectApiName, recordTypeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_RecordUi_static_methods.htm#apex_ConnectAPI_RecordUi_getPicklistValuesByRecordType_1)

### getPicklistValuesByRecordType(objectApiName, recordTypeId)

Get the values for all the picklist fields of a specific record type.

#### API Version

66.0

#### Available to Guest Users

66.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.PicklistValuesCollection getPicklistValuesByRecordType(String objectApiName, String recordTypeId)`

#### Parameters

objectApiName

Type: String

API name of a [User Interface API supported object](https://developer.salesforce.com/docs/atlas.en-us.262.0.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects).

recordTypeId

Type: String

ID of a record type.

#### Return Value

Type: [`ConnectApi.PicklistValuesCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_picklist_values_collection.htm "Collection of picklist values for all the picklists of a record type.")

#### Usage

This method is especially useful for getting dependent picklist values. For example, if an object has a tree of dependent picklists (Continents\_\_c, Countries\_\_c, Cities\_\_c), use this method to get all the values for each picklist in one request.

:::tip Important
This Apex method can’t be used in packages that use push
        upgrades.
:::
