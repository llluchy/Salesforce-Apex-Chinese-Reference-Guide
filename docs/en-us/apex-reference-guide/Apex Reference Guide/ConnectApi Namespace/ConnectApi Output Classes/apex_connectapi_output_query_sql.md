---
doc_id: "apex_connectapi_output_query_sql"
---

# ConnectApi.QuerySqlOutput

Represents the SQL query output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `dataRows` | [`ConnectApi.QuerySqlRowRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_row.htm "Represents data associated with the an SQL query output.") | Data associated with the SQL. | 62.0 |
| `metadata` | [`ConnectApi.QuerySqlMetadataItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_metadata_item.htm "Represents the metadata associated with an SQL query output.") | Metadata associated with the SQL. | 62.0 |
| `returnedRows` | Long | Number of rows returned by the query. | 62.0 |
| `status` | [`ConnectApi.QuerySqlStatus`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_status.htm "Represents the status of an SQL query.") | Metadata related to the status of an SQL query. | 62.0 |

## See Also

- [querySql(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySql_1)

-   [querySql(input, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space.")
    
-   [querySql(input, workloadName, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.")
