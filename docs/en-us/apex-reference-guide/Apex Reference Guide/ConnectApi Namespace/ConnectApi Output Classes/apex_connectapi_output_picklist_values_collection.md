---
doc_id: "apex_connectapi_output_picklist_values_collection"
---

# ConnectApi.PicklistValuesCollection

Collection of picklist values for all the picklists of a record type.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `picklistField​Values` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [ConnectApi.​PicklistValues](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_picklist_values.htm "Picklist values for a field, scoped to a record type. If a picklist is dependent, this response includes the values of its immediate controlling field and how they map to the picklist.")\> | A map of field names to picklist values. The map contains all the picklist values for all the picklists of a record type, including dependent picklists. If a field isn’t a picklist, it isn’t represented in the map. | 66.0 |

## See Also

- [getPicklistValuesByRecordType(objectApiName, recordTypeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_RecordUi_static_methods.htm#apex_ConnectAPI_RecordUi_getPicklistValuesByRecordType_1)
