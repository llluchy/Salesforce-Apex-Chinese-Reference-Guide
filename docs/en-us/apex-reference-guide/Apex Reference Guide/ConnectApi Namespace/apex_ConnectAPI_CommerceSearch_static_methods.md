---
doc_id: "apex_ConnectAPI_CommerceSearch_static_methods"
---

# CommerceSearch Class

Get sort rules for the live search index. Get product search suggestions. Search products.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CommerceSearch Methods

These methods are for `CommerceSearch`. All methods are static.

## See Also

- [getSortRules(webstoreId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearch_static_methods.htm#apex_ConnectAPI_CommerceSearch_getSortRules_1)
- [getSuggestions(webstoreId, effectiveAccountId, searchTerm, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearch_static_methods.htm#apex_ConnectAPI_CommerceSearch_getSuggestions)
- [getSuggestions(webstoreId, effectiveAccountId, searchTerm, maxResults, includeSuggestedProducts, maxSuggestedProducts)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearch_static_methods.htm#apex_ConnectAPI_CommerceSearch_getSuggestions_1)
- [getSuggestions(webstoreId, effectiveAccountId, searchTerm, maxResults, includeSuggestedProducts, maxSuggestedProducts, suggestedFields)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearch_static_methods.htm#apex_ConnectAPI_CommerceSearch_getSuggestions_3)
- [getSuggestions(webstoreId, effectiveAccountId, searchTerm, maxResults, includeSuggestedProducts, maxSuggestedProducts, suggestedFields, includeSuggestedTerms, popularProductsCategoryId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearch_static_methods.htm#apex_ConnectAPI_CommerceSearch_getSuggestions_4)
- [searchProducts(webstoreId, effectiveAccountId, productSearchInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearch_static_methods.htm#apex_ConnectAPI_CommerceSearch_productSearch_1)

### getSortRules(webstoreId)

Get sort rules for the live index.

#### API Version

52.0

#### Available to Guest Users

52.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.SortRulesCollection getSortRules(String webstoreId)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

#### Return Value

Type: [`ConnectApi.SortRulesCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_sort_rules_collection_output.htm "Collection of sort rules.")

### getSuggestions(webstoreId, effectiveAccountId, searchTerm, maxResults)

Get suggestions for product searches.

#### API Version

52.0

#### Available to Guest Users

52.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ProductSearchSuggestionsResults getSuggestions(String webstoreId, String effectiveAccountId, String searchTerm, Integer maxResults)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

effectiveAccountId

Type: String

ID of the buyer account or guest buyer profile for which the request is made.If `null`, the default value is determined from context.

searchTerm

Type: String

Search term with up to 100 characters. If specified, the service returns autocomplete suggestions from the user’s recent searches. If unspecified, the service returns suggestions from the user’s recent searches.

maxResults

Type: Integer

Maximum number of suggestions. Values are from 1 through 10. If unspecified, defaults to 10.

#### Return Value

Type: [`ConnectApi.ProductSearchSuggestionsResults`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_suggestions_results.htm "Product search suggestions results.")

### getSuggestions(webstoreId, effectiveAccountId, searchTerm, maxResults, includeSuggestedProducts, maxSuggestedProducts)

Get suggestions for product searches.

#### API Version

58.0

#### Available to Guest Users

58.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ProductSearchSuggestionsResults getSuggestions(String webstoreId, String effectiveAccountId, String searchTerm, Integer maxResults, Boolean includeSuggestedProducts, Integer maxSuggestedProducts)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

effectiveAccountId

Type: String

ID of the buyer account or guest buyer profile for which the request is made.If `null`, the default value is determined from context.

searchTerm

Type: String

Search term with up to 100 characters. If specified, the service returns autocomplete suggestions from the user’s recent searches. If unspecified, the service returns suggestions from the user’s recent searches.

maxResults

Type: Integer

Maximum number of suggestions. Values are from 1 through 10. If unspecified, defaults to 10.

includeSuggestedProducts

Type: Boolean

Specifies whether a search term returns product suggestions (`true`) or not (`false`). If unspecified, defaults to `false`. If `true`, the service returns the suggested product IDs.

maxSuggestedProducts

Type: String

Maximum number of product suggestions. Values are from 1 through 10. If unspecified, defaults to 6.

#### Return Value

Type: [`ConnectApi.ProductSearchSuggestionsResults`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_suggestions_results.htm "Product search suggestions results.")

### getSuggestions(webstoreId, effectiveAccountId, searchTerm, maxResults, includeSuggestedProducts, maxSuggestedProducts, suggestedFields)

Get suggestions for product searches.

#### API Version

59.0

#### Available to Guest Users

50.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ProductSearchSuggestionsResults getSuggestions(String webstoreId, String effectiveAccountId, String searchTerm, Integer maxResults, Boolean includeSuggestedProducts, Integer maxSuggestedProducts, List<String> suggestedFields)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

effectiveAccountId

Type: String

ID of the buyer account or guest buyer profile for which the request is made.If `null`, the default value is determined from context.

searchTerm

Type: String

Search term with up to 100 characters. If specified, the service returns autocomplete suggestions from the user’s recent searches. If unspecified, the service returns suggestions from the user’s recent searches.

maxResults

Type: Integer

Maximum number of suggestions. Values are from 1 through 10. If unspecified, defaults to 10.

includeSuggestedProducts

Type: Boolean

Specifies whether a search term returns product suggestions (`true`) or not (`false`). If unspecified, defaults to `false`. If `true`, the service returns the suggested product IDs.

maxSuggestedProducts

Type: Integer

Maximum number of product suggestions. Values are from 1 through 10. If unspecified, defaults to 6.

suggestedFields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

List of field names recommended for inclusion in the response based on the search context.

#### Return Value

Type: [`ConnectApi.ProductSearchSuggestionsResults`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_suggestions_results.htm "Product search suggestions results.")

### getSuggestions(webstoreId, effectiveAccountId, searchTerm, maxResults, includeSuggestedProducts, maxSuggestedProducts, suggestedFields, includeSuggestedTerms, popularProductsCategoryId)

Get suggestions for product searches.

#### API Version

64.0

#### Available to Guest Users

50.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ProductSearchSuggestionsResults getSuggestions(String webstoreId, String effectiveAccountId, String searchTerm, Integer maxResults, Boolean includeSuggestedProducts, Integer maxSuggestedProducts, List<String> suggestedFields, Boolean includeSuggestedTerms, String popularProductsCategoryId)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

effectiveAccountId

Type: String

ID of the buyer account or guest buyer profile for which the request is made.If `null`, the default value is determined from context.

searchTerm

Type: String

Search term with up to 100 characters. If specified, the service returns autocomplete suggestions from the user’s recent searches. If unspecified, the service returns suggestions from the user’s recent searches.

maxResults

Type: Integer

Maximum number of suggestions. Values are from 1 through 10. If unspecified, defaults to 10.

includeSuggestedProducts

Type: Boolean

Specifies whether a search term returns product suggestions (`true`) or not (`false`). If unspecified, defaults to `false`. If `true`, the service returns the suggested product IDs.

maxSuggestedProducts

Type: Integer

Maximum number of product suggestions. Values are from 1 through 10. If unspecified, defaults to 6.

suggestedFields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

List of field names recommended for inclusion in the response based on the search context.

includeSuggestedTerms

Type: Boolean

Specifies whether a request returns search term suggestions (`true`) or not (`false`). If unspecified, defaults to `true`. The value returned can include recent or popular term suggestions. At least one of `includeSuggestedTerms` or `includeSuggestedProducts` must be set to `true`.

popularProductsCategoryId

Type: String

ID of the category that identifies a store's popular products. This category can be configured on the search input component. If `popularProducts​CategoryId` is populated, the search term for a request is empty, and `includeSuggested​Products` is `true`, product suggestions are returned from the specified category. If a search term is specified, `popularProducts​CategoryId` is ignored and suggestions are based on the search term instead.

#### Return Value

Type: [`ConnectApi.ProductSearchSuggestionsResults`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_suggestions_results.htm "Product search suggestions results.")

### searchProducts(webstoreId, effectiveAccountId, productSearchInput)

Search products.

#### API Version

52.0

#### Available to Guest Users

52.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ProductSearchResults searchProducts(String webstoreId, String effectiveAccountId, ConnectApi.ProductSearchInput productSearchInput)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

effectiveAccountId

Type: String

ID of the buyer account or guest buyer profile for which the request is made.If `null`, the default value is determined from context.

productSearchInput

Type: [`ConnectApi.ProductSearchInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_product_search.htm "Product search.")

A `ConnectApi.ProductSearchInput` body with either a category ID or search terms.

#### Return Value

Type: [`ConnectApi.ProductSearchResults`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_results.htm "Product search results.")

#### Usage

Searching products respects buyer View Product entitlements and only users entitled to view product data can access this resource.
