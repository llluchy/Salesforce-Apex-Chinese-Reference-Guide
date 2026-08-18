---
doc_id: "apex_connectapi_output_markup_begin_message_segment"
---

# ConnectApi.MarkupBeginSegment

The beginning of rich text markup.

Subclass of [ConnectApi.MessageSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_seg.htm "Message segment.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `altText` | String | Alternative text for the segment, if available. | 45.0 |
| `htmlTag` | String | The HTML tag for this markup. | 35.0 |
| `markupType` | [`ConnectApi.​MarkupType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#MarkupTypeEnum) | Type of rich text markup.
-   `Bold`—Bold tag.
-   `Code`—Code tag.
-   `Hyperlink`—Hyperlink anchor tag.
-   `Italic`—Italic tag.
-   `ListItem`—List item tag.
-   `OrderedList`—Ordered list tag.
-   `Paragraph`—Paragraph tag.
-   `Strikethrough`—Strikethrough tag.
-   `Underline`—Underline tag.
-   `UnorderedList`—Unordered list tag.

 | 35.0 |
| `url` | String | URL to the segment, if available. | 45.0 |
