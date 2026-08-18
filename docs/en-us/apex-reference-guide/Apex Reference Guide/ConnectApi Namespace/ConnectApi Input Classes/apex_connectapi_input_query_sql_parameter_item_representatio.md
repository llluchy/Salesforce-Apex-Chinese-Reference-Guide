---
doc_id: "apex_connectapi_input_query_sql_parameter_item_representatio"
---

# ConnectApi.QuerySqlParameterItem

Represents the parameter fields for an SQL query input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `name` | String | Name of the SQL parameter. | Required | 62.0 |
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

 | Required | 62.0 |
| `value` | String | Value of the SQL parameter. | Required | 62.0 |
