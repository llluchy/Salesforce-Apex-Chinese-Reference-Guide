---
doc_id: "apex_connectapi_input_o_c_i_release_reservation_single"
---

# ConnectApi.OCIReleaseReservationSingleInputRepresentation

A single inventory reservation to release.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `actionRequestId` | String | A UUID that identifies the request. Use the action request IDs in response data to identify which requests succeeded or failed. | Required | 51.0 |
| `externalRefId` | String | The external reference ID of the location or location group that has the reservation. | Optional | 51.0 |
| `locationGroupIdentifier` | String | The identifier of the location group that has the reservation. | The identifier for a location or location group, but not both, is required. | 51.0 |
| `locationIdentifier` | String | The identifier of the location that has the reservation. | The identifier for a location or location group, but not both, is required. | 51.0 |
| `quantity` | Double | The quantity of reserved inventory to release. | Required | 51.0 |
| `reservationId` | String | The ID of the inventory reservation. | Optional | 58.0 |
| `stockKeepingUnit` | String | The SKU of the product to release. | Required | 51.0 |
