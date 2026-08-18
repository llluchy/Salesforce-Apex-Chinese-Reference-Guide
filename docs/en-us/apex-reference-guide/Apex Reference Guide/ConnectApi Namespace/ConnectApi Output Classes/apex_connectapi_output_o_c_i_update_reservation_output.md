---
doc_id: "apex_connectapi_output_o_c_i_update_reservation_output"
---

# ConnectApi.OCIUpdateReservationOutputRepresentation

Result of an Omnichannel Inventory update request for reserved inventory.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `details` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.") [ConnectApi.OCIUpdateReservationSingleOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_update_reservation_single_output.htm "Details of an updated reservation for one product.") \[\] | Details for each product in the reservation. | 61.0 |
| `errors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.") [ConnectApi.OCIUpdateReservationErrorOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_update_reservation_error_output.htm "Error output representation for the update inventory reservation.") \[\] | Any errors returned by the reservation update request. | 61.0 |
| `reservationTime` | String | The time when the reservation was updated. | 61.0 |
| `success` | Boolean | Indicates whether the reservation was successfully updated. | 61.0 |
