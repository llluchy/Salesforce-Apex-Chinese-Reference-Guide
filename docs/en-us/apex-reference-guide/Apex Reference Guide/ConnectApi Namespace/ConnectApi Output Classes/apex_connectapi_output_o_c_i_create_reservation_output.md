---
doc_id: "apex_connectapi_output_o_c_i_create_reservation_output"
---

# ConnectApi.OCICreateReservationOutputRepresentation

Result of an Omnichannel Inventory reservation creation request.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `details` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​OCICreateReservation​SingleOutputRepresentation`\> | Details for each product in the reservation. | 51.0 |
| `errors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​OCICreateReservation​ErrorOutputRepresentation`\> | Any errors returned by the reservation request. | 51.0 |
| `expirationTime` | String | The time at which the reservation would expire. | 51.0 |
| `reservationTime` | String | The time when the reservation was recorded. | 51.0 |
| `success` | Boolean | Indicates whether the reservation was successfully created. | 51.0 |
