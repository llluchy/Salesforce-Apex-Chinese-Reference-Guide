---
doc_id: "apex_connectapi_output_batch_result_get_result"
---

# getResult()

Returns an object that contains the results of the batch operation. The object is typed according to the batch method. For example, if you call `getMembershipBatch()`, a successful call to BatchResult `getResult()` returns a `ConnectApi.GroupMembership` object.

## Signature

`public Object getResult()`

## Return Value

Type: Object
