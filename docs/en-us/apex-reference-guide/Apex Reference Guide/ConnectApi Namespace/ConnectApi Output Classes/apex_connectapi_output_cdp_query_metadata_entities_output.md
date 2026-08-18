---
doc_id: "apex_connectapi_output_cdp_query_metadata_entities_output"
---

# ConnectApi.CdpQueryMetadataEntitiesOutput

Represents a list of metadata entities.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `done` | Boolean | Indicates whether all metadata entities have been retrieved (`true`) or not (`false`). | 66.0 |
| `metadata` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​QueryMetadataEntityOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_metadata_entity_output.htm "Represents a metadata entity.")\> | List of metadata entities. | 66.0 |
| `nextBatchId` | String | ID for the next batch of metadata entities. Present only when done is `false`. When done is `true`, this field is omitted from the response. | 66.0 |

## See Also

- [getMetadataEntities()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getMetadataEntities_1)

-   [getMetadataEntities(entityCategory, entityType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getMetadataEntities_2 "Get a list of metadata entities and retrieve only essential fields to optimize performance at scale. Specify the entity category and type.")
    
-   [getMetadataEntities(entityCategory, entityType, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getMetadataEntities_3 "Get a list of metadata entities and retrieve only essential fields to optimize performance at scale. Specify the entity category, type, and data space.")
