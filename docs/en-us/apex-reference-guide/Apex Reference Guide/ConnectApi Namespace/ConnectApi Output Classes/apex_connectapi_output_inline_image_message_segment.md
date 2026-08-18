---
doc_id: "apex_connectapi_output_inline_image_message_segment"
---

# ConnectApi.InlineImageSegment

An inline image in the feed body.

Subclass of [ConnectApi.MessageSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_seg.htm "Message segment.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `altText` | String | Alt text for the inline image. | 35.0 |
| `contentSize` | Integer | Size of the file in bytes. | 35.0 |
| `fileExtension` | String | Extension of the file, such as gif. | 37.0 |
| `thumbnails` | [`ConnectApi.File​PreviewCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file_preview_collection.htm#apex_connectapi_output_file_preview_collection "A collection of file previews.") | Information about the available thumbnails for the image. | 35.0 |
| `url` | String | URL to the latest version of the inline image. | 35.0 |
