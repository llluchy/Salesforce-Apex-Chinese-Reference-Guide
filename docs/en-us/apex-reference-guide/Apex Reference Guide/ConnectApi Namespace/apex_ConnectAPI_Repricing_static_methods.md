---
doc_id: "apex_ConnectAPI_Repricing_static_methods"
---

# Repricing Class

Perform functions related to repricing orders in Order Management.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Repricing Methods

These methods are for `Repricing`. All methods are static.

## See Also

- [productDetails(webstoreId, skuOrProductId, effectiveAccountId, currencyCode, locale)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Repricing_static_methods.htm#apex_ConnectAPI_Repricing_productDetails_1)
- [searchProducts(webstoreId, searchTerm, pageParam, pageSize, effectiveAccountId, facets)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Repricing_static_methods.htm#apex_ConnectAPI_Repricing_searchProducts_1)

### productDetails(webstoreId, skuOrProductId, effectiveAccountId, currencyCode, locale)

Get details of a product in a web store.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ProductDetailsOutputRepresentation productDetails(String webstoreId, String skuOrProductId, String effectiveAccountId, String currencyCode, String locale)`

#### Parameters

webstoreId

Type: String

ID of the WebStore.

skuOrProductId

Type: String

SKU or ID of the Product.

effectiveAccountId

Type: String

Effective Account ID. Required for B2B stores. For other stores, pass null.

currencyCode

Type: String

ISO currency code. If you pass null, the default store value is used.

locale

Type: String

Locale. If you pass null, the default store value is used.

excludeAttributeSetInfo

Type: Boolean

Specifies whether the attribute set information for the product is returned.

excludeBundleChildrenInfo

Type: Boolean

Specifies whether the child product information for the product bundle is returned.

excludeMedia

Type: String

Specifies whether the media groups and default images of the product are returned.

excludeQuantityRule

Type: Boolean

Specifies whether the quantity rule information for the product is returned.

excludeVariationInfo

Type: Boolean

Specifies whether the variation information for the product is returned.

excludePrices

Type: Boolean

Specifies whether the prices for the product is returned.

#### Return Value

Type: `ConnectApi.ProductDetailsOutputRepresentation`

### searchProducts(webstoreId, searchTerm, pageParam, pageSize, effectiveAccountId, facets)

Search products in a webstore.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ProductSearchOutputRepresentation searchProducts(String webstoreId, String searchTerm, Integer pageParam, Integer pageSize, String effectiveAccountId, String facets)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

searchTerm

Type: String

Term used for the search.

pageParam

Type: Integer

Maximum number of search results pages to return. If you don't specify a value, the default is 1.

pageSize

Type: Integer

Number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 20.

effectiveAccountId

Type: String

ID of the account for which the request is made.If unspecified, defaults to the account ID for the context user.

facets

Type: String

A list of facet names to filter the search.For example, `["size_medium", "color_red"]`is encoded to `WyJzaXplX21lZGl1bSIsICJjb2xvcl9yZWQiXQ==`

#### Return Value

Type: [`ConnectApi.ProductSearchOutputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_output.htm "Output representation of the product search response")
