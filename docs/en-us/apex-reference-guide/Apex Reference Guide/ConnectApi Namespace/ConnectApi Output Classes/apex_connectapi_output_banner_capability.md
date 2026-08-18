---
doc_id: "apex_connectapi_output_banner_capability"
---

# ConnectApi.BannerCapability

If a feed element has this capability, it has a banner motif and style.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `motif` | `ConnectApi.Motif` | A banner motif. | 31.0 |
| `style` | `ConnectApi.BannerStyle` | Decorates a feed item with a color and set of icons. Possible value:
-   `Announcement`—An announcement displays in a designated location in the Salesforce UI until 11:59 p.m. on its expiration date, unless it’s deleted or replaced by another announcement.

 | 31.0 |

## See Also

- [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
