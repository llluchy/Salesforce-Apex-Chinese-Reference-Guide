---
doc_id: "apex_ConnectAPI_OMSAnalytics_productsReturnRate_2"
---

# productsReturnRate(pageParam, pageSize, products)

Get a page of products and their return rates for a list of product IDs.

## API Version

60.0

## Requires Chatter

No

## Signature

`public static ConnectApi.ProductReturnRateListOutputRepresentation productsReturnRate(Integer pageParam, Integer pageSize, List<String> products)`

## Parameters

pageParam

Type: Integer

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

products

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

List of product IDs.

## Return Value

Type: `ConnectApi.ProductReturnRateListOutputRepresentation`
