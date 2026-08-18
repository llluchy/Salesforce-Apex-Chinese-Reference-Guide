---
doc_id: "apex_ConnectAPI_OMSAnalytics_productReturnRate"
---

# productsReturnRate(pageParam, pageSize)

Gets pages of data showing the return rates of products that are calculated by the Customer Data Platform. Return data is paginated in descending order.

## API Version

59.0

## Requires Chatter

No

## Signature

`public static ConnectApi.ProductReturnRateListOutputRepresentation productsReturnRate(Integer pageParam, Integer pageSize)`

## Parameters

page

Type: String

The page number for the list of products. Starts at 0.

products

Type: List )String)

A list of IDs to fetch details for.

pageSize

Type: List )Integer)

The number of products that are returned on each page.

## Return Value

Type: [ConnectApi.ProductReturnRateListOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_return_rate_list_output.htm "Products with corresponding return rates.")

## Example

`ConnectApi.ProductReturnRateListOutputRepresentation output = ConnectApi.OMSAnalytics.productsReturnRate(page, pageSize);`
