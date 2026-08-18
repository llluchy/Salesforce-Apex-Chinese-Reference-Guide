---
doc_id: "apex_connectapi_output_query_sql_metadata_item"
---

# ConnectApi.QuerySqlMetadataItem

Represents the metadata associated with an SQL query output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `innerElement` | [`ConnectApi.QuerySqlMetadataItem`](# "Represents the metadata associated with an SQL query output.") | Description of array fields. | 62.0 |
| `name` | String | Name of the field. | 62.0 |
| `nullable` | Boolean | Indicates if the field is nullable (`true`) or not (`false`). | 62.0 |
| `precision` | Integer | Precision for numeric fields. | 62.0 |
| `scale` | Integer | Scale for numeric fields. | 62.0 |
| `type` | [`TypeEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#TypeEnum) | Type of the SQL parameter.
-   `ArrayOfX`
-   `BigInt`
-   `Bool`
-   `Char`
-   `Date`
-   `Double`
-   `Foat`
-   `Integer`
-   `Numeric`
-   `Oid`
-   `SmallInt`
-   `Time`
-   `Timestamp`
-   `TimestampTZ`
-   `Unspecified`
-   `Varchar`

 | 62.0 |
