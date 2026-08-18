---
doc_id: "apex_connectapi_output_picklist_value"
---

# ConnectApi.PicklistValue

Picklist value.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `attributes` | [`ConnectApi.​AbstractPicklist​ValueAttributes`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_picklist_value_attributes.htm "Picklist value attributes.") | Picklist value attributes. | 66.0 |
| `label` | String | Displayable value of the picklist to use. | 66.0 |
| `validFor` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<Integer> | If the picklist is a dependent picklist, the property contains a list of the controlling value indexes for which this value is valid. If the picklist is an independent picklist, the list is empty. | 66.0 |
| `value` | String | Value of the picklist to use. | 66.0 |

## See Also

- [ConnectApi.PicklistValues](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_picklist_values.htm)
