---
doc_id: "apex_connectapi_output_poll_capability"
---

# ConnectApi.PollCapability

If a feed element has this capability, it includes a poll.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `choices` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​FeedPollChoice`\> | Collection of poll choices that make up the poll. | 32.0 |
| `myChoiceId` | String | 18-character ID of the poll choice that the context user has voted for in this poll. Returns `null` if the context user has not voted. | 32.0 |
| `totalVoteCount` | Integer | Total number of votes cast on the feed poll element. | 32.0 |

## See Also

- [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
