---
doc_id: "apex_connectapi_output_attribute_filter_expression"
---

# ConnectApi.AttributeFilterExpression

Represents the activation attribute filter expression.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `conjunction` | [`FilterConjunctionEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FilterConjunctionEnum) | Conjunction for the activation attribute filter expression.
-   `FilterConjunctionAnd`
-   `FilterConjunctionOr`

 | 60.0 |
| `filters` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.AttributeFilter`\>](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_attribute_filter.htm "Represents the attribute filter output.") | List of attribute filters. | 60.0 |
