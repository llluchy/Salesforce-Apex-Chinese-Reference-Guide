---
doc_id: "apex_connectapi_input_attribute_filter"
---

# ConnectApi.AttributeFilterInput

Represents the attribute filter input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `attributeId` | String | ID of the attribute. |  | 60.0 |
| `attributeName` | String | Name of the attribute. |  | 60.0 |
| `dateUnits` | Datetime | Date unit filter. |  | 60.0 |
| `operator` | String | Operator of the attribute. |  | 60.0 |
| `type` | [`FilterOperatorDataTypeEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FilterOperatorDataTypeEnum) | Type of attribute.
-   `FilterOperatorDataTypeBoolean`
-   `FilterOperatorDataTypeDate`
-   `FilterOperatorDataTypeDateOnly`
-   `FilterOperatorDataTypeExactlyRelativeDate`
-   `FilterOperatorDataTypeNumber`
-   `FilterOperatorDataTypeRelateToNowDate`
-   `FilterOperatorDataTypeText`

 |  | 60.0 |
| `value` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`String`\> | Filter values. |  | 60.0 |
