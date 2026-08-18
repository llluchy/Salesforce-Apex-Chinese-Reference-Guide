---
doc_id: "apex_ConnectAPI_OMSAnalytics_productsReturnRate_1"
---

# productsReturnRate(pageParam, pageSize)

Get a page of products and their return rates.

## API Version

59.0

## Requires Chatter

No

## Signature

`public static ConnectApi.ProductReturnRateListOutputRepresentation productsReturnRate(Integer pageParam, Integer pageSize)`

## Parameters

pageParam

Type: Integer

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

## Return Value

Type: `ConnectApi.ProductReturnRateListOutputRepresentation`
