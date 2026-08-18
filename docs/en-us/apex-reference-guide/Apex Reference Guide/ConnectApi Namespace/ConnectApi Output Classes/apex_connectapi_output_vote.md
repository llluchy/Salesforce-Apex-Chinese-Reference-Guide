---
doc_id: "apex_connectapi_output_vote"
---

# ConnectApi.Vote

An upvote or downvote on a feed element or comment.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `type` | [`ConnectApi.​UpDownVoteValue`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#UpDownVoteEnum) | Type of vote for a feed element or comment.
-   `Down`
-   `Up`

 | 42.0 |
| `user` | [`ConnectApi.​UserSummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm#apex_connectapi_output_user_summary "User summary.") | User who voted on the feed element or comment. | 42.0 |
| `votedItem` | [`ConnectApi.​Reference`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reference.htm#apex_connectapi_output_reference "Reference to a record.") | Reference to the feed element or comment that was voted on. | 42.0 |

## See Also

- [ConnectApi.VotePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_vote_collection.htm)
