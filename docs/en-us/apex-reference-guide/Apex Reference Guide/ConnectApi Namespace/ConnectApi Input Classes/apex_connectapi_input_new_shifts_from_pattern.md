---
doc_id: "apex_connectapi_input_new_shifts_from_pattern"
---

# ConnectApi.ShiftsFromPatternInput

Shifts from a pattern.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `schedulingEnd​Date` | String | Scheduling end date in YYYY-MM-DD format.
Provide `schedulingEndDate` or `schedulingOccurrences`. Don’t provide both.

 | Required if `scheduling​Occurrences` isn’t provided | 51.0 |
| `scheduling​Occurrences` | Integer | Number of scheduling occurrences.

Provide `schedulingEndDate` or `schedulingOccurrences`. Don’t provide both.

 | Required if `schedulingEnd​Date` isn’t provided | 51.0 |
| `schedulingStart​Date` | String | Scheduling start date in YYYY-MM-DD format. | Required | 51.0 |
| `serviceResourceId` | String | ID of the service resource to assign shifts to.

In version 53.0 and later, use `serviceResourceIdList`.

 | Optional | 51.0–52.0 |
| `serviceResourceId​List` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | List of service resource IDs to assign shifts to. | Optional | 53.0 |
| `serviceTerritoryId` | String | ID of the service territory to assign shifts to. | Optional | 51.0 |
| `shiftStatus` | String | Status of the shifts. Default values are:

-   `Confirmed`
-   `Published`
-   `Tentative`

Additional status values can be created. | Optional | 52.0 |
