---
doc_id: "apex_connectapi_output_mention_msg_seg"
---

# ConnectApi.MentionSegment

Mention segment.

Subclass of [ConnectApi.MessageSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_seg.htm "Message segment.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `accessible` | Boolean | Specifies whether the mentioned user or group can see the post in which they are mentioned (`true`) or not (`false`). | 28.0 |
| `name` | String | Name of the mentioned user or group. | 28.0 |
| `record` | `ConnectApi.​ActorWithId` | Information about the mentioned user or group. | 29.0 |
| `user` | `ConnectApi.​User​Summary` | Information about the mentioned user. **Important:** In versions 29.0 and later, use the `record` property. | 28.0 only
In versions before 29.0, if the mention is not a user, the mention is in a `ConnectApi.TextSegment` object.

 |
