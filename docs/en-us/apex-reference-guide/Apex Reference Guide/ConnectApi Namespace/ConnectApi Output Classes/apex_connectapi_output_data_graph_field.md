---
doc_id: "apex_connectapi_output_data_graph_field"
---

# ConnectApi.DataGraphField

Represents a field of a data graph.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `ciFieldType` | [`DaoObjectFieldTypeQueryEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#DaoObjectFieldTypeQueryEnum) | Type of the calculated insight field.
-   `Dimension`
-   `Measure`
-   `ObjectTypeUnspecified`

 | 59.0 |
| `dataGraphFieldDevName` | String | Developer name of the field. | 61.0 |
| `dataType` | String | Data type of the field. | 59.0 |
| `developerName` | String | Developer name of the data graph. | 59.0 |
| `isProjected` | String | Indicates whether the field needs to be projected in output JSON (`true`) or not (`false`). | 59.0 |
| `keyCol` | String | Indicates whether the field is a primary key (`true`) or not (`false`). | 59.0 |
| `keyQualifierName` | String | Qualifier name of the key for the field. | 59.0 |
| `length` | String | Length of the field. | 59.0 |
| `lookupCol` | String | Lookup column for the field. | 59.0 |
| `usageTag` | String | Indicates whether the field represents a key qualifier field (`KEY_QUALIFIER`) or not (`NONE`). | 59.0 |
