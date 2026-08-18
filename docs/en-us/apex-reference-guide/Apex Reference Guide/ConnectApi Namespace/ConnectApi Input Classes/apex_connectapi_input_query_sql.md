---
doc_id: "apex_connectapi_input_query_sql"
---

# ConnectApi.QuerySqlInput

Represents the input to create an SQL query.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `adaptiveTimeout` | Integer | Amount of time (in seconds) for the query engine to respond to the request. `0` will return the queryId, status, and metadata, but no data associated with the SQL. The maximum value is `15`. | Optional | 63.0 |
| `querySettings` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, String> | Settings to adjust the query execution behavior:
-   `date_style`—Order of Year, Month, and Day for parsing date strings, for example `MDY` and `DMY`.
-   `lc_time`—Locale for date literals using ISO language and country code, for example `en_US` and `de_AT`.
-   `query_timeout`—Execution limit in milliseconds before the query is terminated, for example `1800000ms`.

 | Optional | 62.0 |
| `rowLimit` | Long | Maximum number of rows to include in the response. Fewer rows may be returned. | Optional | 62.0 |
| `sql` | String | SQL expression. | Required | 62.0 |
| `sqlParameters` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.QuerySqlParameterItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_query_sql_parameter_item_representatio.htm "Represents the parameter fields for an SQL query input.")\> | Value and type information about the SQL parameters. | Optional | 62.0 |

## See Also

- [querySql(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySql_1)

-   [querySql(input, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space.")
    
-   [querySql(input, workloadName, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.")
