---
doc_id: "apex_connectapi_output_o_c_i_fulfill_reservation_output"
---

# ConnectApi.OCIFulfillReservationOutputRepresentation

Response to a request to fulfill one or more inventory reservations.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `errors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​OCIFulfillReservation​ErrorOutputRepresentation`\> | Responses for the individual reservations in the fulfillment request. | 51.0 |
| `success` | Boolean | Indicates whether the request was successful. | 51.0 |
