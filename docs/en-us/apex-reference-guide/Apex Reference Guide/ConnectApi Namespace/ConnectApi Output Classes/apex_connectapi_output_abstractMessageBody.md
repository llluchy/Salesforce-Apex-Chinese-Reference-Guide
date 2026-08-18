---
doc_id: "apex_connectapi_output_abstractMessageBody"
---

# ConnectApi.AbstractMessageBody

Abstract message body.

This class is abstract.

Superclass of:

-   [ConnectApi.FeedBody](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_body.htm "Feed body.")
-   [ConnectApi.MessageBody](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_body.htm "Message body.")

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `isRichText` | Boolean | Indicates whether the body is rich text. | 35.0 |
| `messageSegments` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​​Message​Segment`\> | List of message segments | 28.0 |
| `text` | String | Display-ready text. Use this text if you don’t want to process the message segments. | 28.0 |
