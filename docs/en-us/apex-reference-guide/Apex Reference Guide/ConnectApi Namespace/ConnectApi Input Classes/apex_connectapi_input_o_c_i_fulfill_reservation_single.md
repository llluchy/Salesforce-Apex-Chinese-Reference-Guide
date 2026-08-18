---
doc_id: "apex_connectapi_input_o_c_i_fulfill_reservation_single"
---

# ConnectApi.OCIFulfillReservationSingleInputRepresentation

An inventory reservation to fulfill.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `actionRequestId` | String | A UUID that identifies the request. Use the action request IDs in response data to identify which requests succeeded or failed. | Required | 51.0 |
| `externalRefId` | String | The external reference ID of the location that’s fulfilling the reservation. | Optional | 51.0 |
| `locationIdentifier` | String | The identifier of the location that’s fulfilling the reservation. | Required | 51.0 |
| `quantity` | Double | The quantity being fulfilled. | Required | 51.0 |
| `reservationId` | String | The ID of the inventory reservation. | Optional | 58.0 |
| `stockKeepingUnit` | String | The SKU of the product being fulfilled. | Required | 51.0 |
