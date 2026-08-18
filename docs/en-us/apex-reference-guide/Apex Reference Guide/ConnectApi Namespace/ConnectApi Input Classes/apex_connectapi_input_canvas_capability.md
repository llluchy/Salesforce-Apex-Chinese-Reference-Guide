---
doc_id: "apex_connectapi_input_canvas_capability"
---

# ConnectApi.CanvasCapabilityInput

Create or update a canvas app associated with a feed element.

This class is a subclass of [ConnectApi.FeedElementCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capability.htm#apex_connectapi_input_feed_element_capability "A feed element capability.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `description` | String | A description of the canvas app. The maximum size is 255 characters. | Optional | 32.0 |
| `developerName` | String | The API name (developer name) of the client app. | Required | 32.0 |
| `height` | String | The height of the canvas app in pixels. | Optional | 32.0 |
| `namespacePrefix` | String | A unique namespace prefix for the canvas app. | Optional | 32.0 |
| `parameters` | String | JSON parameters passed to the canvas app. | Optional | 32.0 |
| `thumbnailUrl` | String | A thumbnail URL to a preview image. The maximum thumbnail size is 120 pixels by 120 pixels. | Optional | 32.0 |
| `title` | String | A title for the canvas link. | Required | 32.0 |

## See Also

- [ConnectApi.FeedElementCapabilitiesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capabilities.htm)
