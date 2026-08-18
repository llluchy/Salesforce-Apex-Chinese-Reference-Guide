---
doc_id: "apex_ConnectAPI_OMSAnalytics_getTextClassificationsBulkResults"
---

# getTextClassificationsBulkResults(ids)

Gets text classification results for request IDs.

## API Version

59.0

## Requires Chatter

No

## Signature

`public static ConnectApi.TextClassificationsBulkResultsOutputRepresentation getTextClassificationsBulkResults(List<String> ids)`

## Parameters

ids

Type: List(String)

List of request IDs.

## Return Value

Type: `ConnectApi.TextClassificationsBulkResultsOutputRepresentation`

## Example

```apex
List String> requestIds = new List String> ();
        requestIds.add(requestId);
        ConnectApi.TextClassificationsBulkResultsOutputRepresentation output = ConnectApi.OMSAnalytics.getTextClassificationsBulkResults(requestIds);
```
