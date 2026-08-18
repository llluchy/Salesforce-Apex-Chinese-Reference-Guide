---
doc_id: "apex_connectapi_output_origin_capability"
---

# ConnectApi.OriginCapability

If a feed element has this capability, it was created by a feed action.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `actor` | [ConnectApi.UserSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm#apex_connectapi_output_user_summary "User summary.") | The user who executed the feed action. | 33.0 |
| `originRecord` | [ConnectApi.Reference](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reference.htm#apex_connectapi_output_reference "Reference to a record.") | A reference to the feed element containing the feed action. | 33.0 |

## See Also

- [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
