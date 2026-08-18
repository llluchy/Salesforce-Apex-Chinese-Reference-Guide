---
doc_id: "apex_ConnectAPI_OMSAnalytics_productExpand"
---

# productsExpand(scope, products, expand)

Fetches expanded details of a product that aren’t found in the sObject. The expanded variable fields, such as return reasons, are added as output. This method supports an extensibility framework that lets the context user override the existing implementation so they can fetch the data from third-party apps. The application doesn’t require two separate APIs to get return reasons.

## API Version

59.0

## Requires Chatter

No

## Signature

`public static ConnectApi.ProductsListOutputRepresentation productsExpand(String scope, List<String> products, List<ConnectApi.ProductExpandType> expand)`

## Parameters

scope

Type: String

The scope for the extensibility framework. Requires a web store ID.

products

Type: List (String)

A list of IDs to fetch details for.

expand

Type: List (String)

Output representation for expand feature.

## Return Value

Type: `ConnectApi.ProductsListOutputRepresentation`

## Example

```apex
String scope = 'webstoreId eq ' + ws.Id;
        ConnectApi.ProductsListOutputRepresentation output = ConnectApi.OMSAnalytics.productsExpand(scope, productIds, new List  {
        ConnectApi.ProductExpandType.ReturnReasons
        });
```
