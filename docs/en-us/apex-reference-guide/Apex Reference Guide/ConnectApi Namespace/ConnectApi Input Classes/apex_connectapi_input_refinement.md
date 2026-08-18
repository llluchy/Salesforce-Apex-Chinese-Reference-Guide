---
doc_id: "apex_connectapi_input_refinement"
---

# ConnectApi.RefinementInput

Attribute-based refinement input for product search.

This class is abstract and is a superclass of [ConnectApi.DistinctValueRefinementInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_distinct_value_refinement.htm "Attribute-based refinement with distinct values for product search.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `attributeType` | [`ConnectApi.​CommerceSearch​AttributeType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommerceSearchAttributeTypeEnum) | Search attribute type.
-   `Custom`
-   `ProductAttribute`
-   `Standard`

 | Required | 52.0 |
| `nameOrId` | String | Developer name of the attribute.In version 52.0 and later, the ID of the attribute isn’t supported. | Required | 52.0 |
| `type` | [`ConnectApi.​CommerceSearch​FacetType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommerceSearchFacetTypeEnum) | Search facet type. Value is:

-   `DistinctValue`
-   `Range`

 | Required | 52.0 |
