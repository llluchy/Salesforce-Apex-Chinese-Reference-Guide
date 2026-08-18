---
doc_id: "apex_ConnectAPI_CommerceSearchConnectFamily_static_methods"
---

# CommerceSearchConnectFamily Class

Search products by search term or category in a webstore.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CommerceSearchConnectFamily Methods

These methods are for `CommerceSearchConnectFamily`. All methods are static.

## See Also

- [searchProducts(webstoreId, searchTerm, categoryId, sortRuleId, grouping, fields, refinements, pageParam, pageSize, effectiveAccountId, includeQuantityRule)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearchConnectFamily_static_methods.htm#apex_ConnectAPI_CommerceSearchConnectFamily_searchProducts_1)
- [searchProducts(webstoreId, searchTerm, categoryId, sortRuleId, searchFields, grouping, fields, refinements, page, pageSize, effectiveAccountId, effectiveBuyerGroupIds, includeQuantityRule, includeProduct​VariationInfo)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearchConnectFamily_static_methods.htm#apex_ConnectAPI_CommerceSearchConnectFamily_searchProducts_2)

### searchProducts(webstoreId, searchTerm, categoryId, sortRuleId, grouping, fields, refinements, pageParam, pageSize, effectiveAccountId, includeQuantityRule)

Search products by search term or category in a webstore.

#### API Version

58.0

#### Available to Guest Users

58.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CommerceProductSearchResults searchProducts(String webstoreId, String searchTerm, String categoryId, String sortRuleId, String grouping, List<String> fields, String refinements, Integer pageParam, Integer pageSize, String effectiveAccountId, Boolean includeQuantityRule)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

searchTerm

Type: String

List of up to 32 space-separated search terms.

categoryId

Type: String

Category ID returns results for products in this category or its subcategories.

sortRuleId

Type: String

ID of the sort rule that specifies the order of products in the search results. If unspecified, the default sort type is relevancy.

grouping

Type: String

Grouping option for search results. If unspecified, the default is the value specified in **Search** | **Results Display Settings** | **Results Grouping**.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

Product fields to return in search results. Search results include fields you have access to.

refinements

Type: String

List up to nine refinements (facets) for search results. Buyers or shoppers can select up to 20 values for each refinement. The `refinements` parameter is encoded as a Base64 string from the JSON representation of [ConnectApi.DistinctValueRefinementInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_distinct_value_refinement.htm "Attribute-based refinement with distinct values for product search.") .

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 200. If unspecified, defaults to 20.

effectiveAccountId

Type: String

ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context.

includeQuantityRule

Type: Boolean

Specifies whether to include purchase quantity rule information for products in search results (`true`) or not (`false`). If unspecified, defaults to `false`.

#### Return Value

Type: [`ConnectApi.CommerceProductSearchResults`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_product_search_results.htm "Product search results information.")

#### Usage

Searching products respects buyer View Product entitlements and only users entitled to view product data can access this resource.

### searchProducts(webstoreId, searchTerm, categoryId, sortRuleId, searchFields, grouping, fields, refinements, page, pageSize, effectiveAccountId, effectiveBuyerGroupIds, includeQuantityRule, includeProduct​VariationInfo)

Search products by search term or category in a webstore.

#### API Version

58.0

#### Available to Guest Users

58.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CommerceProductSearchResults searchProducts(String webstoreId, String searchTerm, List<String> searchFields, String categoryId, String sortRuleId, String grouping, List<String> fields, String refinements, Integer page, Integer pageSize, String effectiveAccountId, List<String> effectiveBuyerGroupIds, Boolean includeQuantityRule, Boolean includeProductVariationInfo)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

searchTerm

Type: String

List of up to 32 space-separated search terms.

categoryId

Type: String

Category ID returns results for products in this category or its subcategories.

sortRuleId

Type: String

ID of the sort rule that specifies the order of products in the search results. If unspecified, the default sort type is relevancy.

grouping

Type: String

Grouping option for search results. If unspecified, the default is the value specified in **Search** | **Results Display Settings** | **Results Grouping**.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

Product fields to return in search results. Search results include fields you have access to.

refinements

Type: String

List up to nine refinements (facets) for search results. Buyers or shoppers can select up to 20 values for each refinement. The `refinements` parameter is encoded as a Base64 string from the JSON representation of [ConnectApi.DistinctValueRefinementInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_distinct_value_refinement.htm "Attribute-based refinement with distinct values for product search.") .

page

Type: Integer

Number of the page you want returned. Starts at 0. If you don’t specify a value or if you specify 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 200. If unspecified, defaults to 20.

effectiveAccountId

Type: String

ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context.

includeQuantityRule

Type: Boolean

Specifies whether to include purchase quantity rule information for products in search results (`true`) or not (`false`). If unspecified, defaults to `false`.

includeProduct​VariationInfo

Type: Boolean

Specifies whether to include product variation information in search results (`true`) or not (`false`). If unspecified, defaults to `false`.

effectiveBuyerGroupIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

List containing an ID of the buyer group for which the request is made. This parameter accepts only a single ID in the list.

searchFields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

The subset of searchable fields to search. Only the fields specified in this parameter are searched. If you don't specify this parameter, or if the fields specified are invalid, all searchable fields are searched. To use the `searchFields` parameter, you must also specify the `searchTerm` parameter. The variation attribute field is not supported by the `searchFields` parameter.

#### Return Value

Type: [`ConnectApi.CommerceProductSearchResults`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_product_search_results.htm "Product search results information.")

#### Usage

Searching products respects buyer View Product entitlements and only users entitled to view product data can access this resource.
