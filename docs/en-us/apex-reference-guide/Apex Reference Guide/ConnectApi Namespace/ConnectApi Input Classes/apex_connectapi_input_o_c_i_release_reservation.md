---
doc_id: "apex_connectapi_input_o_c_i_release_reservation"
---

# ConnectApi.OCIReleaseReservationInputRepresentation

Details of one or more inventory reservations to release.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `releaseRecords` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​OCIReleaseReservation​SingleInput​Representation`\> | List of inventory reservations to release. The list can include up to 100 elements. | At least one element is required. | 51.0 |
| `reservationId` | String | The ID of the inventory reservation. | Optional | 58.0 |
|  |  |  |  |  |
