---
doc_id: "apex_connectapi_output_formula_scope"
---

# ConnectApi.FormulaScope

Formula scope for a target.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `contextValues` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, String> | Map of context values for the scope. In version 52.0 and later, use the `contextValuesMap` property. | 50.0–51.0 |
| `contextValuesMap` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, Object> | Map of context values for the scope. | 52.0 |
| `fields` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | List of fields of the scope. | 50.0 |
| `formula` | String | Formula of the scope. | 50.0 |

## See Also

- [ConnectApi.Target](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_target.htm)
