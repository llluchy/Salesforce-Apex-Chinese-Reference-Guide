---
doc_id: "apex_connectapi_input_markup_begin_segment"
---

# ConnectApi.MarkupBeginSegmentInput

The beginning tag for rich text markup.

Subclass of [ConnectApi.MessageSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_messageSegmentInput.htm "Used to add rich message segments to feed items and comments.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `altText` | String | Alternative text for the `Hyperlink` segment. | Optional | 45.0 |
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

Markup segments with a `markupType` of `Code` can include only text segments. | Required | 35.0 |
| `url` | String | URL for the `Hyperlink` segment. Supported hyperlink URLs start with http:// or https://. | Required for `Hyperlink` | 45.0 |

## See Also

- [Post a Rich-Text Feed Element with Inline Image](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectapi_examples_post_feed_element_richtext_inlineimage.htm)

-   [ConnectApi.MessageBodyInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_msgBody.htm "Add rich messages to feed items and comments.")
