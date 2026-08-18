---
doc_id: "apex_connectapi_input_inline_image_segment"
---

# ConnectApi.InlineImageSegmentInput

An inline image segment.

Subclass of [ConnectApi.MessageSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_messageSegmentInput.htm "Used to add rich message segments to feed items and comments.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `altText` | String | Alt text for the inline image. | Optional
If not specified, the title of the inline image file is used as the alt text.

 | 35.0 |
| `fileId` | String | ID of the inline image file. | Required | 35.0 |

## See Also

- [Post a Rich-Text Feed Element with Inline Image](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectapi_examples_post_feed_element_richtext_inlineimage.htm)

-   [ConnectApi.MessageBodyInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_msgBody.htm "Add rich messages to feed items and comments.")
