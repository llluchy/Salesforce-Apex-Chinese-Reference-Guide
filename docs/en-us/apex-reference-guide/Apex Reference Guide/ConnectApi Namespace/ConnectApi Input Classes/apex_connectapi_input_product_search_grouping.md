---
doc_id: "apex_connectapi_input_product_search_grouping"
---

# ConnectApi.ProductSearchGroupingInput

Grouping information for product search results.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `groupingOption` | [`ConnectApi.​CommerceSearch​GroupingOption`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommerceSearchGroupingOptionEnum) | Grouping option for search results. Values are:
-   `BestMatch`—Search results are grouped by the best-match product of the variation group.
-   `NoGrouping`—Search results aren’t grouped.
-   `VariationParent`—Search results are grouped by the variation parent.

 | Required | 52.0 |
| `topProductType` | [`ConnectApi.​CommerceSearch​TopProductType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommerceSearchTopProductTypeEnum) | Type of the top product to return for each product group in search results. Value is:

-   `VariationParent`

If `NoGrouping` is specified for `groupingOption`, `topProductType` is ignored.

 | Optional | 52.0—62.0 |
