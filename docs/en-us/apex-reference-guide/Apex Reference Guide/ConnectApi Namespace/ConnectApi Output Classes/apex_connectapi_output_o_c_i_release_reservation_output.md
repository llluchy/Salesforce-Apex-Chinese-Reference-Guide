---
doc_id: "apex_connectapi_output_o_c_i_release_reservation_output"
---

# ConnectApi.OCIReleaseReservationOutputRepresentation

Response to a request to release one or more inventory reservations.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `errors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​OCIReleaseReservation​ErrorOutputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_release_reservation_error_output.htm "Response to a request to release one inventory reservation.")\> | Responses for the individual reservations in the release request. | 51.0 |
| `success` | Boolean | Indicates whether the request was successful. | 51.0 |
