---
doc_id: "apex_connectapi_input_o_c_i_create_reservation_single"
---

# ConnectApi.OCICreateReservationSingleInputRepresentation

A quantity of a product and an Omnichannel Inventory location or location group at which to reserve it.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `locationGroupIdentifier` | String | Identifier of the location group at which to reserve inventory. | Either locationGroupIdentifier or locationIdentifier is required, but not both | 51.0 |
| `locationIdentifier` | String | Identifier of the location at which to reserve inventory. | Either locationGroupIdentifier or locationIdentifier is required, but not both | 51.0 |
| `quantity` | Double | The quantity of the product to reserve. | Required | 51.0 |
| `stockKeepingUnit` | String | The SKU of the product to reserve. | Required | 51.0 |
