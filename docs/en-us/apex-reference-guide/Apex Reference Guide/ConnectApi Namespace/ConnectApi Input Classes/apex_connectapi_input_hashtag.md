---
doc_id: "apex_connectapi_input_hashtag"
---

# ConnectApi.HashtagSegmentInput

Include a hashtag in a feed item or comment.

Subclass of [ConnectApi.MessageSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_messageSegmentInput.htm "Used to add rich message segments to feed items and comments.").

| Property | Type | Description | Available Version |
| --- | --- | --- | --- |
| `tag` | String | Text of the hash tag without the # (hash tag) prefix. Closing square brackets ( \] ) are not supported in hash tag text. If the text contains a closing square bracket ( \] ), the hash tag ends at the bracket. | 28.0 |

## See Also

- [ConnectApi.MessageBodyInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_msgBody.htm)
