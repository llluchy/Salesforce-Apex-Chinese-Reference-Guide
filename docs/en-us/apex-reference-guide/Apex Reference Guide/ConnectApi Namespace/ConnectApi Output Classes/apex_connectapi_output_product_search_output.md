---
doc_id: "apex_connectapi_output_product_search_output"
---

# ConnectApi.ProductSearchOutputRepresentation

Output representation of the product search response

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `currencyIsoCode` | String | Three-letter ISO 4217 currency code associated with the product. | 59.0 |
| `facets` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.ProductSearchFacetOutputRepresentation`\>](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_facet_output.htm "Product search facet value.") | A list of facet names to filter the search.For example, `["size_medium", "color_red"]`. | 59.0 |
| `locale` | String | Locale used for the product search. | 59.0 |
| `pageNumber` | Integer | Maximum number of search results pages to return. If you don't specify a value, the default is 1. | 59.0 |
| `pageSize` | Integer | Number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 20. | 59.0 |
| `products` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.ProductSearchProductOutputRepresentation`\>](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_product_output.htm "Product found by a product search.") | List of products found by the search. | 59.0 |
| `totalRecordsFound` | Integer | Total products found. | 59.0 |
