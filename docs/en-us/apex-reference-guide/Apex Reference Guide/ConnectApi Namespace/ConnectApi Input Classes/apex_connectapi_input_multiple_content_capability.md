---
doc_id: "apex_connectapi_input_multiple_content_capability"
---

# ConnectApi.FilesCapabilityInput

Attach up to 10 files that have already been uploaded or remove one or more files from a feed element.

This class is a subclass of [ConnectApi.FeedElementCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capability.htm#apex_connectapi_input_feed_element_capability "A feed element capability.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `items` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​FileIdInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_file_id.htm#apex_connectapi_input_file_id "Attach a file that has already been uploaded or remove a file from a feed element.")\> | List of file IDs and operations to be carried out on those files. | Required | 36.0 |

## See Also

- [ConnectApi.FeedElementCapabilitiesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capabilities.htm)
