---
doc_id: "apex_connectapi_output_cdp_query_output_v2"
---

# ConnectApi.CdpQueryOutputV2

Query output for the V2 API.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `data` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​CdpQueryV2Row`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_v2_row.htm "Row in the query output for the V2 API.")\> (in version 55.0 and later)
[List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<Object> (version 54.0 only)

 | Result data set. | 54.0 |
| `done` | Boolean | Specifies whether the query is done (`true`) or not (`false`). | 54.0 |
| `endTime` | String | Query end time. | 54.0 |
| `metadata` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.​CdpQuery​MetadataItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_metadata_item.htm "Metadata item.")\> (version 55.0 and later)

[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, Object> (version 54.0 only)

 | Result metadata set. | 54.0 |
| `nextBatchId` | String | Next batch ID.

Use this property as the nextBatchId parameter in the `nextBatchAnsiSqlV2(nextBatchId)` method to get the next batch of data.

 | 54.0 |
| `queryId` | String | Query ID. | 54.0 |
| `rowCount` | Integer | Number of rows in the result data set. | 54.0 |
| `startTime` | String | Query start time. | 54.0 |

## See Also

- [queryAnsiSqlV2(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryAnsiSqlV2_2)

-   [queryAnsiSqlV2(input, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryAnsiSqlV2_3 "Query data across data model, lake, unified, and linked objects. Also, specify the data space.")
    
-   [nextBatchAnsiSqlV2(nextBatchId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_nextBatchAnsiSqlV2_1 "Get the next batch of data across data model, lake, unified, and linked objects.")
    
-   [nextBatchAnsiSqlV2(nextBatchId, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_nextBatchAnsiSqlV2_2 "Get the next batch of data across data model, lake, unified, and linked objects. Also, specify the data space.")
