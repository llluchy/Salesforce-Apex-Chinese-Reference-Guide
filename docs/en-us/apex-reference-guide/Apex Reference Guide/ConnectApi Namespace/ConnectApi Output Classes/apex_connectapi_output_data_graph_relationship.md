---
doc_id: "apex_connectapi_output_data_graph_relationship"
---

# ConnectApi.DataGraphRelationship

Represents the relationship of a field of the object data for the data graph.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `cardinality` | [`RelationshipCardinality`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RelationshipCardinalityEnum) | Cardinality of the relationship of a field for object data of the data graph.
-   `CardinalityUnspecified`
-   `ManyToOne`
-   `OneToMany`
-   `OneToOne`

 | 59.0 |
| `fieldName` | String | Field name of the object data for the data graph. | 59.0 |
| `parentFieldName` | String | Parent field name of the object data for the data graph. | 59.0 |
