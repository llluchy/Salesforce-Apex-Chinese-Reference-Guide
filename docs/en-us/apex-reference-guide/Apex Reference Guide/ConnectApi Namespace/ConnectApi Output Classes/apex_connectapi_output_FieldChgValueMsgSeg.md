---
doc_id: "apex_connectapi_output_FieldChgValueMsgSeg"
---

# ConnectApi.FieldChangeValueSegment

Field change value segment.

Subclass of [ConnectApi.MessageSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_seg.htm "Message segment.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `valueType` | `ConnectApi.​FieldChange​ValueType Enum` | Value type of a field change.
-   `NewValue`—A new value
-   `OldValue`—An old value

 | 28.0 |
| `url` | String | URL value if the field change is to a URL field (such as a web address) | 28.0 |
