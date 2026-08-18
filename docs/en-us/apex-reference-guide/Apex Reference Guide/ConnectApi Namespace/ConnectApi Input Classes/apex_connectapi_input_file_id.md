---
doc_id: "apex_connectapi_input_file_id"
---

# ConnectApi.FileIdInput

Attach a file that has already been uploaded or remove a file from a feed element.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `id` | String | ID of a file that has already been uploaded. | Required | 36.0 |
| `operationType` | [`ConnectApi.​OperationType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OperationTypeEnum) | Operation to carry out on the file. Values are:
-   `Add`—Adds the file to the feed element.
-   `Remove`—Removes the file from the feed element.

`Remove` operations are processed before `Add` operations. Adding content that is already added and removing content that is already removed result in no operation.

 | Optional

If not specified, defaults to `Add`.

 | 36.0 |

## See Also

- [ConnectApi.FilesCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_multiple_content_capability.htm)
