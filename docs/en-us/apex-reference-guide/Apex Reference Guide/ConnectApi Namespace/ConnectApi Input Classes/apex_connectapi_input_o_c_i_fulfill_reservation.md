---
doc_id: "apex_connectapi_input_o_c_i_fulfill_reservation"
---

# ConnectApi.OCIFulfillReservationInputRepresentation

A list of inventory reservations to fulfill.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `fulfillmentRecords` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​OCIFulfillReservation​SingleInput​Representation`\> | A list of inventory reservations. The list can include up to 100 elements. | At least one element is required. | 51.0 |
| `reservationId` | String | The ID of the inventory reservation. | Optional | 58.0 |
