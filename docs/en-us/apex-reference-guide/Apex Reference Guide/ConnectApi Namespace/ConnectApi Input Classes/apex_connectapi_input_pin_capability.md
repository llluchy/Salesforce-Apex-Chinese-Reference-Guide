---
doc_id: "apex_connectapi_input_pin_capability"
---

# ConnectApi.PinCapabilityInput

Pin or unpin a feed element to a feed.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `entityId` | String | ID of the entity to pin or unpin. In version 41.0 and later, `entityId` must be a feed item ID. In version 41.0–42.0, only one feed item can be pinned per feed. In version 43.0 and later, three feed items can be pinned per feed. | Required | 41.0 |
| `isPinned` | Boolean | Specifies whether to pin (`true`) or unpin (`false`) the entity. | Required | 41.0 |
