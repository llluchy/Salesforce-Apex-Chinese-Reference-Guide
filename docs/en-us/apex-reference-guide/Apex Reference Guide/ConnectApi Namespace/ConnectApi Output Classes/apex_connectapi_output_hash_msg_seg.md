---
doc_id: "apex_connectapi_output_hash_msg_seg"
---

# ConnectApi.HashtagSegment

Hashtag segment.

Subclass of [ConnectApi.MessageSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_seg.htm "Message segment.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `tag` | String | Text of the topic without the hash symbol (#). | 28.0 |
| `topicUrl` | String | Connect REST API Topics resource that searches for the topic:

```apex
/services/data/v67.0/chatter​/topics?exactMatch=true&q=topic
```

 | 28.0 |
| `url` | String | Connect REST API Feed Items resource URL that searches for the topic in all feed items in an organization:

```apex
/services/data/v67.0/chatter​/feed-items?q=topic
```

 | 28.0 |
