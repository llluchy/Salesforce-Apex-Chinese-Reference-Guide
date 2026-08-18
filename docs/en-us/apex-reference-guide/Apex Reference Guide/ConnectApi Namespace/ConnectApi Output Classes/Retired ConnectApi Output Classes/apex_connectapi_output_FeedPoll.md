---
doc_id: "apex_connectapi_output_FeedPoll"
---

# ConnectApi.FeedPoll

Attachment of `ConnectApi.FeedItem` objects where the `type` property is `PollPost`.

:::tip Important
This class isn’t available in version 32.0 and later. In version 32.0
        and later, [ConnectApi.PollCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_poll_capability.htm) is used.
:::

Subclass of [ConnectApi.FeedItemAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm "Feed item attachment.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `choices` | `List<ConnectApi.​Feed​Poll​Choice>` | List of choices for poll. | 28.0–31.0 |
| `myChoiceId` | String | ID of the poll choice that the context user has voted for in this poll. Returns `null` if the context user hasn’t voted. | 28.0–31.0 |
| `totalVoteCount` | Integer | Total number of votes cast on the feed poll item. | 28.0–31.0 |
