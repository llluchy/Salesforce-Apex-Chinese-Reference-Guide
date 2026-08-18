---
doc_id: "apex_connectapi_output_moreChgMsgSeg"
---

# ConnectApi.MoreChangesSegment

In feed items with a large number of tracked changes, the message is formatted as: “changed A, B, and made X more changes.” The `MoreChangesSegment` contains the “X more changes.”

Subclass of [ConnectApi.MessageSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_seg.htm "Message segment.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `moreChanges` | `List<ConnectApi.​FieldChange​Segment>` | Complete list of tracked changes. | 29.0 |
| `moreChangesCount` | Integer | Number of additional changes. | 28.0 |
