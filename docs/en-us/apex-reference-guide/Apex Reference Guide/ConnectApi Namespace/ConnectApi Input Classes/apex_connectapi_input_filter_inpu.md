---
doc_id: "apex_connectapi_input_filter_inpu"
---

# ConnectApi.SearchFilter

Filter input for object search.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `field` | String | Field to use in the filter. | Optional | 63.0 |
| `operator` | [`ConnectApi.​FilterOperator`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FilterOperatorEnum) | Filter operator. Values are:
-   `EqOp`—Equal
-   `ExcludesOp`—Excludes
-   `GtOp`—Greater than
-   `GteOp`—Greater than or equal
-   `InOp`—In
-   `IncludesOp`—Includes
-   `LikeOp`—Like
-   `LtOp`—Less than
-   `LteOp`—Less than or equal
-   `NeOp`—Not equal
-   `NinOp`—Not in

 | Optional | 63.0 |
| `values` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​AbstractList`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_abstract_list_inpu.htm "Primitive list input.")\> | Values of the filter, it can be a List of String, Boolean, Long, or Double. Do not mix data types for filter values, for example, `["A", "B", "C"]` is valid, but `["A", -7, false]` isn't. | Optional | 63.0 |

## See Also

- [ConnectApi.SearchRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_search_reques.htm)
