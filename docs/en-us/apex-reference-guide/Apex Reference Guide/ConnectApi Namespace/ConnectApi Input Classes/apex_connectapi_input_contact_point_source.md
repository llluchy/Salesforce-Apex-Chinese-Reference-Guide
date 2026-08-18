---
doc_id: "apex_connectapi_input_contact_point_source"
---

# ConnectApi.ContactPointSourceInput

Represents the configuration input for contact point sources.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `dataSourceId` | String | Record ID of the data source. |  | 60.0 |
| `dataSourcePreference` | [`ContactPointPrefEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ContactPointPrefEnum) | Type of contact point.
-   `ContactPointPrefAny`
-   `ContactPointPrefBusiness`
-   `ContactPointPrefPersonal`
-   `ContactPointPrefPrimary`

 |  | 60.0 |
| `dataSourcePriority` | Integer | Priority of the data source. |  | 60.0 |
| `id` | String | ID of the data source. |  | 60.0 |
| `name` | String | Name of the data source. |  | 60.0 |
