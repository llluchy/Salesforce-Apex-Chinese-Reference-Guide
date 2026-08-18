---
doc_id: "apex_connectapi_output_new_shifts_from_pattern"
---

# ConnectApi.ShiftsFromPattern

Shifts created from a pattern.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `count` | Integer | Total count of created shifts. | 51.0 |
| `error` | [`ConnectApi.Shifts​FromPatternError`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_shift_pattern_error.htm "Shifts from pattern error response.") | Error details for shifts from a pattern. | 53.0 |
| `isSuccess` | Boolean | Indicates if the request is successful (`true`) or not (`false`). | 53.0 |
| `recordIds` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | Collection of created shift IDs. | 51.0 |
