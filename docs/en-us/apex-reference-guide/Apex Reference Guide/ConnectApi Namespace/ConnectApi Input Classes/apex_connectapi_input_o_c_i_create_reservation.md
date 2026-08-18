---
doc_id: "apex_connectapi_input_o_c_i_create_reservation"
---

# ConnectApi.OCICreateReservationInputRepresentation

Data to reserve inventory at one or more Omnichannel Inventory locations or location groups.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `actionRequestId` | String | A UUID that identifies the request. Use the action request IDs in response data to identify which requests succeeded or failed. If the `OmnichannelInventoryService` class's `createReservation` method is called, the actionRequestId is used for the reservationId. | Required | 51.0 |
| `allowPartial​Reservations` | Boolean | When true, if the system can’t create the entire reservation, then it attempts to create a partial reservation. | Optional | 51.0 |
| `createRecords` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​OCICreateReservation​SingleInput​Representation`\> | A list of product quantities and locations or location groups. The list can include up to 100 elements. | At least one element is required | 51.0 |
| `expirationSeconds` | Integer | A length of time in seconds. If the reservation isn’t fulfilled within this amount of time after the `reservationTime`, then it expires. The maximum value is 14400. | Optional | 51.0 |
| `externalRefId` | String | External reference ID. | Optional | 51.0 |
| `reservationTime` | String | The time at which to record the reservation. Example: 2020-07-24T21:13:00Z | Optional | 51.0 |
