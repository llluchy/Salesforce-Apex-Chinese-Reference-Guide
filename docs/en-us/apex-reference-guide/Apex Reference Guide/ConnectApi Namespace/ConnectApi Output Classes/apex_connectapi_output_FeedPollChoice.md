---
doc_id: "apex_connectapi_output_FeedPollChoice"
---

# ConnectApi.FeedPollChoice

Feed poll choice.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `id` | String | Poll choice ID. | 28.0 |
| `position` | Integer | The location in the poll where this poll choice exists. The first poll choice starts at 1. | 28.0 |
| `text` | String | Label text associated with the poll choice. | 28.0 |
| `voteCount` | Integer | Total number of votes for this poll choice. | 28.0 |
| `voteCountRatio` | Double | The ratio of total number of votes for this poll choice to all votes cast in the poll. Multiply the ratio by 100 to get the percentage of votes cast for this poll choice. | 28.0 |

## See Also

- [ConnectApi.PollCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_poll_capability.htm)
