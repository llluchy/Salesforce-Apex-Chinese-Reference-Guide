---
doc_id: "apex_connectapi_output_search_facet"
---

# ConnectApi.SearchFacet

Search facet.

This class is abstract and is a superclass of [ConnectApi.DistinctValueSearchFacet](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_distinct_value_search_facet.htm "Facet with distinct values in product search results.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `attributeType` | [`ConnectApi.​CommerceSearch​AttributeType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommerceSearchAttributeTypeEnum) | Search attribute type. Values are:
-   `Custom`
-   `PricebookEntry`
-   `ProductAttribute`
-   `ProductCategory`
-   `Product2`
-   `Standard`

 | 52.0 |
| `displayName` | String | Display name of the facet. | 52.0 |
| `displayRank` | Integer | Display rank of the facet. Valid values are from 1 through 50. | 52.0 |
| `displayType` | [`ConnectApi.​CommerceSearchFacet​DisplayType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommerceSearchFacetDisplayTypeEnum) | Display type of the facet. Values are:

-   `CategoryTree`
-   `DatePicker`
-   `MultiSelect`
-   `SingleSelect`

 | 52.0 |
| `facetType` | [`ConnectApi.​CommerceSearch​FacetType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommerceSearchFacetTypeEnum) | Search facet type. Value is:

-   `DistinctValue`
-   `Range`

 | 52.0 |
| `nameOrId` | String | Developer name of the attribute. In version 52.0 and later, the ID of the attribute isn’t supported. | 52.0 |

## See Also

- [ConnectApi.ProductSearchResults](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_results.htm)
