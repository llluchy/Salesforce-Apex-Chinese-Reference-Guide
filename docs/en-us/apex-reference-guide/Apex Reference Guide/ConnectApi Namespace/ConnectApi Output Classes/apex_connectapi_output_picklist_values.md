---
doc_id: "apex_connectapi_output_picklist_values"
---

# ConnectApi.PicklistValues

Picklist values for a field, scoped to a record type. If a picklist is dependent, this response includes the values of its immediate controlling field and how they map to the picklist.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `controllerValues` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, Integer> | If the picklist is dependent, this property is a map of its immediate controlling field’s picklist values to their indexes.
-   If the controlling field is a picklist, the string is the picklist value and the integer is the value’s index.
-   If the controlling field is a checkbox, the values in the map are `"false": 0` and `"true": 1`.

If the picklist is independent, the map is empty. | 66.0 |
| `defaultValue` | [`ConnectApi.​PicklistValue`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_picklist_value.htm "Picklist value.") | Default value for the picklist, or `null` if there isn’t one. | 66.0 |
| `url` | String | User Interface API resource that represents this payload. | 66.0 |
| `values` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​PicklistValue`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_picklist_value.htm "Picklist value.")\> | List of values for this object, record type, field combination. | 66.0 |

## See Also

- [ConnectApi.PicklistValuesCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_picklist_values_collection.htm)
