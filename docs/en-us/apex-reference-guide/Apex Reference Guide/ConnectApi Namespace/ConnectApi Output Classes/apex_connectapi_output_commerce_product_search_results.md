---
doc_id: "apex_connectapi_output_commerce_product_search_results"
---

# ConnectApi.CommerceProductSearchResults

Product search results information.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `categories` | [`ConnectApi.​SearchCategory`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_category.htm "Search category.") | Categories from the search results. | 52.0 |
| `correlationId` | String | Reserved for future use. | 55.0 |
| `facets` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​SearchFacet`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_facet.htm "Search facet.")\> | Facets from the search results. | 52.0 |
| `locale` | String | Locale of the search results. | 52.0 |
| `productsPage` | [`ConnectApi.​ProductSummaryPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_product_summary_collection.htm "Collection of product summary representations in product search results.") | Page of products from the search results. | 52.0 |
