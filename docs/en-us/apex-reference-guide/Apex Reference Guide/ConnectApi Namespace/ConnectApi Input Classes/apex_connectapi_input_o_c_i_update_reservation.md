---
doc_id: "apex_connectapi_input_o_c_i_update_reservation"
---

# ConnectApi.OCIUpdateReservationInputRepresentation

Data to update one or more Omnichannel Inventory item reservations.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `actionRequestId` | String | Unique and idempotent action request ID. Use in response data to identify which requests succeeded or failed. | Required | 61.0 |
| `allowPartialReservations` | Boolean | When true, if the system can’t update the entire reservation, then it attempts to update a partial reservation. | Optional | 61.0 |
| `externalRefId` | String | External reference ID. | Optional | 61.0 |
| `reservationId` | String | The ID of the inventory reservation. | Optional | 61.0 |
| `reservationTime` | String | The time the reservation was updated. Example: 2020-07-24T21:13:00Z. | Optional | 61.0 |
| `updateAllOrNothingRecords` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.") | Controls whether a single failed request updates all other requests in the list (true) or whether some requests can succeed if others fail (false). The default value is false. | Optional | 61.0 |
| `updateRecords` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.") [ConnectApi.OCIUpdateReservationSingleInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_o_c_i_update_reservation_single.htm "Data to update one Omnichannel Inventory reservation item.") \[\] | A list of product quantities and locations or location groups. The list can have up to 100 elements. | At least one element is required | 61.0 |
