---
doc_id: "apex_connectapi_input_o_c_i_update_reservation_single"
---

# ConnectApi.OCIUpdateReservationSingleInputRepresentation

Data to update one Omnichannel Inventory reservation item.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `locationGroupIdentifier` | String | Identifier of the location group where the inventory is reserved. | Either locationGroupIdentifier or locationIdentifier are required, but not both | 61.0 |
| `locationIdentifier` | String | Identifier of the location where the inventory is reserved. | Either locationGroupIdentifier or locationIdentifier are required, but not both | 61.0 |
| `quantity` | Double | The quantity of the product to update. | Required | 61.0 |
| `stockKeepingUnit` | String | The SKU of the product to update. | Required | 61.0 |
