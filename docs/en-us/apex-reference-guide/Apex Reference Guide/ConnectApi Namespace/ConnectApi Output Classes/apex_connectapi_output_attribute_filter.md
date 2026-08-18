---
doc_id: "apex_connectapi_output_attribute_filter"
---

# ConnectApi.AttributeFilter

Represents the attribute filter output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `attributeId` | String | ID of the attribute. | 60.0 |
| `attributeName` | String | Name of the attribute. | 60.0 |
| `dateUnits` | Datetime | Date units for the attribute. | 60.0 |
| `operator` | String | Operator for the attribute. | 60.0 |
| `type` | [`FilterOperatorDataTypeEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FilterOperatorDataTypeEnum) | Type of attribute.
-   `FilterOperatorDataTypeBoolean`
-   `FilterOperatorDataTypeDate`
-   `FilterOperatorDataTypeDateOnly`
-   `FilterOperatorDataTypeExactlyRelativeDate`
-   `FilterOperatorDataTypeNumber`
-   `FilterOperatorDataTypeRelateToNowDate`
-   `FilterOperatorDataTypeText`

 | 60.0 |
| `values` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | Values for the attribute. | 60.0 |
