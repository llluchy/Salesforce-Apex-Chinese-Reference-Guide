---
doc_id: "apex_connectapi_output_batch_result_get_error_message"
---

# getErrorMessage()

Returns a String that contains an error message.

## Signature

`public String getErrorMessage()`

## Return Value

Type: String

## Usage

The error message doesn’t make a round trip through a Visualforce view state, because exceptions can’t be serialized.
